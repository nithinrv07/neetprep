/* Logins, cloud sync and admin data through Firebase Auth + Firestore.
   Data layout:
     users/{uid}                  name, email, createdAt, lastLogin, lastActive, summary
     users/{uid}/data/state       chapters done, practice answers, test chapter selection
     users/{uid}/tests/{testId}   one weekly test with every answer
     users/{uid}/activity/{auto}  sign-ins, chapters opened, practice answers, tests
   Who is an admin is decided only by firestore.rules; the page finds out by trying to read meta/admin. */
(() => {
const N = window.NEET;
const cfg = window.NEET_FIREBASE || {};
const C = N.cloud = { enabled: !!(cfg.apiKey && window.firebase), user: null, profile: null, isAdmin: false };
if (!C.enabled) return;

firebase.initializeApp(cfg);
const auth = firebase.auth();
const db = firebase.firestore();
const ts = () => firebase.firestore.FieldValue.serverTimestamp();
const userRef = uid => db.collection("users").doc(uid);

/* ---------- auth ---------- */
C.signIn = (email, pw) => auth.signInWithEmailAndPassword(email.trim(), pw);
C.signUp = async (name, email, pw) => {
  const cred = await auth.createUserWithEmailAndPassword(email.trim(), pw);
  await cred.user.updateProfile({ displayName: name });
  await userRef(cred.user.uid).set({ name, email: email.trim().toLowerCase(), createdAt: ts(), lastLogin: ts(), lastActive: ts() }, { merge: true });
  if (C.profile) C.profile.name = name;
  cred.user.sendEmailVerification().catch(() => {});
  return cred;
};
C.resetPassword = email => auth.sendPasswordResetEmail(email.trim());
C.resendVerification = () => auth.currentUser && auth.currentUser.sendEmailVerification();
C.signOut = () => auth.signOut();

async function ensureProfile(u) {
  const ref = userRef(u.uid);
  try {
    const d = await ref.get();
    const patch = { email: (u.email || "").toLowerCase(), lastLogin: ts(), lastActive: ts() };
    if (!d.exists) { patch.createdAt = ts(); patch.name = u.displayName || (u.email || "").split("@")[0]; }
    await ref.set(patch, { merge: true });
    C.profile = Object.assign({ name: u.displayName || u.email }, d.exists ? d.data() : {}, d.exists ? {} : { name: patch.name });
  } catch (e) {
    console.warn("profile", e);
    C.profile = { name: u.displayName || u.email, email: u.email };
  }
}
async function checkAdmin() {
  try { await db.collection("meta").doc("admin").get(); return true; } catch (e) { return false; }
}
C.watch = cb => auth.onAuthStateChanged(async u => {
  C.user = u; C.isAdmin = false; C.profile = null;
  if (u) {
    await ensureProfile(u);
    C.isAdmin = await checkAdmin();
    C.log("login");
  }
  cb(u);
});

/* ---------- activity log ---------- */
let lastActiveWrite = Date.now();
C.log = (type, detail = {}) => {
  if (!C.user) return;
  const ref = userRef(C.user.uid);
  ref.collection("activity").add(Object.assign({ type, at: ts() }, detail)).catch(() => {});
  if (Date.now() - lastActiveWrite > 120000) { lastActiveWrite = Date.now(); ref.set({ lastActive: ts() }, { merge: true }).catch(() => {}); }
};

/* ---------- own progress ---------- */
let pending = null, timer = null;
C.saveState = (state, summary) => {
  if (!C.user) return;
  pending = { state, summary, uid: C.user.uid };
  clearTimeout(timer);
  timer = setTimeout(flush, 1500);
};
function flush() {
  if (!pending) return;
  const { state, summary, uid } = pending; pending = null;
  userRef(uid).collection("data").doc("state")
    .set({ read: state.read || {}, prac: state.prac || {}, sel: state.sel || null, lastCh: state.lastCh || null, updatedAt: ts() })
    .catch(e => console.warn("state", e));
  userRef(uid).set({ summary, lastActive: ts() }, { merge: true }).catch(() => {});
}
window.addEventListener("pagehide", flush);
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });

C.loadState = async (uid = C.user.uid) => { const d = await userRef(uid).collection("data").doc("state").get(); return d.exists ? d.data() : null; };
C.saveTest = rec => userRef(C.user.uid).collection("tests").doc(rec.id).set(Object.assign({}, rec, { savedAt: ts() }));
C.deleteTest = id => userRef(C.user.uid).collection("tests").doc(id).delete();
C.loadTests = async (uid = C.user.uid) => (await userRef(uid).collection("tests").orderBy("date").get()).docs.map(d => d.data());

/* ---------- admin reads (allowed only by the rules) ---------- */
C.listUsers = async () => (await db.collection("users").get()).docs.map(d => Object.assign({ uid: d.id }, d.data()));
C.getUser = async uid => { const d = await userRef(uid).get(); return d.exists ? Object.assign({ uid }, d.data()) : null; };
C.getActivity = async (uid, n = 150) => (await userRef(uid).collection("activity").orderBy("at", "desc").limit(n).get()).docs.map(d => d.data());
C.allTests = async () => (await db.collectionGroup("tests").get()).docs.map(d => Object.assign({ uid: d.ref.parent.parent.id }, d.data()));
})();
