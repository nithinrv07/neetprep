(() => {
const N = window.NEET;
const SUB = {
  phy: { name: "Physics", target: 45 },
  chem: { name: "Chemistry", target: 45 },
  bio: { name: "Biology", target: 90 },
};
const SUBS = Object.keys(SUB);
const LET = ["A", "B", "C", "D"];
const LEGACY_KEY = "neet-notebook-v2";
const C = N.cloud || { enabled: false };

/* ---------- saved progress: this browser, plus the student's account when signed in ---------- */
let KEY = LEGACY_KEY;
const blankState = () => ({ read: {}, prac: {}, tests: [], active: null, sel: null, lastCh: null });
function loadLocal(key) { const s = blankState(); try { Object.assign(s, JSON.parse(localStorage.getItem(key) || "{}")); } catch (e) {} return s; }
let S = blankState();
const save = () => {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
  if (C.user) C.saveState(S, summaryOf(S));
};
const log = (type, detail) => { if (C.user) C.log(type, detail); };

/* ---------- chapter index ---------- */
// Shuffle each question's options in a fixed, per-question order so the correct letter is spread evenly.
// Questions with "all of these"-style options keep their written order.
const hash = s => { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
function mixOptions(id, list) {
  return list.map((m, i) => {
    if (m[1].some(o => /all of|both|none|neither|all three|all equal|same as/i.test(o.replace(/<[^>]+>/g, "")))) return m;
    let seed = hash(id + "#" + i);
    const order = [0, 1, 2, 3];
    for (let k = 3; k > 0; k--) { seed = Math.imul(seed ^ (seed >>> 15), 2246822507) >>> 0; const j = seed % (k + 1); [order[k], order[j]] = [order[j], order[k]]; }
    return [m[0], order.map(k => m[1][k]), order.indexOf(m[2]), m[3]];
  });
}
const ALL = {};
const LIST = {};
SUBS.forEach(sub => {
  LIST[sub] = N.syllabus[sub].map(([id, cls, name, pri], i) => {
    const data = N.chapters[id] || { mcq: [] };
    const ch = Object.assign({}, data, { id, cls, name, pri, sub, no: i + 1, mcq: mixOptions(id, data.mcq || []) });
    ch.hasNotes = !!(ch.secs && ch.secs.length);
    ALL[id] = ch;
    return ch;
  });
});

const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const strip = s => String(s).replace(/<[^>]+>/g, "");
const fmtDate = t => new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short" });
const weekStart = t => { const d = new Date(t); const day = (d.getDay() + 6) % 7; d.setHours(0, 0, 0, 0); d.setDate(d.getDate() - day); return d.getTime(); };
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const subDot = sub => `<span class="dot" data-sub="${sub}"></span>`;
const toMs = t => (t && t.toMillis ? t.toMillis() : typeof t === "number" ? t : 0);
const ago = t => {
  const ms = toMs(t); if (!ms) return "never";
  const m = Math.round((Date.now() - ms) / 60000);
  if (m < 1) return "just now"; if (m < 60) return m + " min ago";
  const h = Math.round(m / 60); if (h < 24) return h + " h ago";
  const d = Math.round(h / 24); return d < 30 ? d + " d ago" : fmtDate(ms);
};
const scaled720 = t => (t.max ? Math.round((t.score / t.max) * 720) : 0);

// Compact progress figures stored on the user document so the admin table loads fast.
function summaryOf(st) {
  const done = {}; SUBS.forEach(s => { done[s] = LIST[s].filter(c => st.read && st.read[c.id]).length; });
  let att = 0, cor = 0;
  Object.entries(st.prac || {}).forEach(([id, p]) => {
    const c = ALL[id]; if (!c || !p || !p.ans) return;
    Object.entries(p.ans).forEach(([k, v]) => { if (v === -1 || !c.mcq[k]) return; att++; if (v === c.mcq[k][2]) cor++; });
  });
  return { done, pracAtt: att, pracCorrect: cor, lastCh: st.lastCh || null };
}

let timerId = null;
function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

/* ---------- router ---------- */
function route() {
  stopTimer();
  if (C.enabled && !C.user) { loginView(); return; }
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const [a, b, c] = parts;
  document.querySelectorAll("[data-nav]").forEach(el => el.classList.toggle("on", el.dataset.nav === (a === "c" ? "s" : a || "home")));
  delete app.dataset.sub;
  if (!a) home();
  else if (a === "s") subject(SUB[b] ? b : "phy");
  else if (a === "c" && ALL[b]) { if (c === "practice") chapterPractice(b); else { log("open", { ch: b }); chapter(b); } }
  else if (a === "formulas") formulas(SUB[b] ? b : "phy", c === "shortcuts" ? "shortcuts" : "formulas");
  else if (a === "test") { if (b === "run") testRun(); else if (b === "result") testResult(c); else testHome(); }
  else if (a === "account") account();
  else if (a === "admin") { if (b === "u" && parts[3] === "t") adminTest(c, parts[4]); else if (b === "u") adminUser(c); else adminHome(); }
  else home();
  window.scrollTo(0, 0);
}
function view(html, sub) {
  if (sub) app.dataset.sub = sub;
  app.innerHTML = `<div class="view-in">${html}</div>`;
}

/* ---------- home ---------- */
function home() {
  const now = Date.now();
  const thisWeek = S.tests.filter(t => t.date >= weekStart(now));
  const last = S.tests[S.tests.length - 1];
  const cont = S.lastCh && ALL[S.lastCh];
  const testCard = S.active
    ? `<div class="kicker">Test in progress</div><h2>Finish your test</h2><p>You have a test running. The timer keeps counting while you're away.</p><a class="btn primary" href="#/test/run">Resume test</a>`
    : thisWeek.length
      ? `<div class="kicker">This week's test · done</div><div class="big">${thisWeek[thisWeek.length - 1].score}<small style="font-size:18px;opacity:.7"> / ${thisWeek[thisWeek.length - 1].max}</small></div><p>Good work. Review your weak chapters, then take another test next week.</p><div class="row"><a class="btn primary" href="#/test/result/${thisWeek[thisWeek.length - 1].id}">See analysis</a><a class="btn ghost" style="color:inherit;border-color:currentColor" href="#/test">New test</a></div>`
      : `<div class="kicker">Week of ${fmtDate(weekStart(now))}</div><h2>This week's 720 test is waiting</h2><p>Pick the chapters you finished. You get 45 Physics, 45 Chemistry and 90 Biology questions from them, NEET marking, 1 minute per question.</p><a class="btn primary" href="#/test">Set up this week's test</a>`;

  const subjCards = SUBS.map(sub => {
    const L = LIST[sub];
    const read = L.filter(c => S.read[c.id]).length;
    const notes = L.filter(c => c.hasNotes).length;
    const qs = L.reduce((n, c) => n + c.mcq.length, 0);
    return `<a class="card subj-card" data-sub="${sub}" href="#/s/${sub}">
      <h3>${subDot(sub)}${SUB[sub].name}</h3>
      <div class="bar" aria-hidden="true"><span style="width:${pct(read, L.length)}%"></span></div>
      <div class="stats"><span>${read} of ${L.length} chapters done</span><span>${notes ? notes + " with notes" : sub === "bio" ? "Question bank" : "Notes coming soon"}</span></div>
      <div class="stats"><span>${qs} practice MCQs</span><span>Open →</span></div>
    </a>`;
  }).join("");

  const hist = S.tests.slice(-5).reverse().map(t => `
    <a class="hist-row" href="#/test/result/${t.id}"><span class="muted">${fmtDate(t.date)}</span><div class="bar"><span style="width:${Math.max(0, pct(t.score, t.max))}%"></span></div><b>${t.score}/${t.max}</b></a>`).join("");

  view(`
    <div class="page-head"><h1>Today's study desk</h1><p class="lead">Read a chapter's notes, practise its questions, and take one full test every week.</p></div>
    <div class="home-grid">
      <div class="card hero-test">${testCard}</div>
      <div class="stack">
        ${cont ? `<a class="card continue" data-sub="${cont.sub}" href="#/c/${cont.id}"><span class="ic">${cont.no}</span><div><div class="kicker">Continue reading</div><b>${esc(cont.name)}</b></div></a>` : ""}
        <div class="card stack" style="gap:10px"><h3>Recent tests</h3>${hist || `<p class="muted" style="margin:0">No tests yet. Your scores will show here after your first weekly test.</p>`}</div>
      </div>
    </div>
    <h2 style="margin:28px 0 14px">Subjects</h2>
    <div class="subj-cards">${subjCards}</div>
    <div class="card" style="margin-top:20px"><h3 style="margin-bottom:8px">How to use this each week</h3>
      <ol class="tips"><li>Open a chapter, read the notes, try each solved example before tapping <b>Show solution</b>.</li>
      <li>Do the chapter's practice MCQs and tap <b>Mark chapter as done</b>.</li>
      <li>On the weekend, take the weekly test on every chapter finished so far.</li>
      <li>Revise the chapters the test analysis marks as weak.</li></ol></div>
  `);
}

/* ---------- subject: chapter list ---------- */
function subjectTabs(sub, base) {
  return `<div class="seg" role="tablist">${SUBS.map(s => `<a href="${base}${s}" data-sub="${s}" class="${s === sub ? "on" : ""}" ${s === sub ? 'aria-current="page"' : ""}>${subDot(s)}${SUB[s].name}</a>`).join("")}</div>`;
}
function subject(sub, q = "") {
  const L = LIST[sub];
  const rows = cls => L.filter(c => c.cls === cls && (!q || c.name.toLowerCase().includes(q.toLowerCase()))).map(c => {
    const p = S.prac[c.id], att = p ? Object.keys(p.ans).length : 0;
    const corr = p ? Object.entries(p.ans).filter(([i, v]) => c.mcq[i] && v === c.mcq[i][2]).length : 0;
    return `<a class="ch-row ${c.hasNotes ? "" : "soon"}" href="#/c/${c.id}">
      <span class="num">${String(c.no).padStart(2, "0")}</span>
      <div><div class="t">${esc(c.name)}</div><div class="m">${c.hasNotes ? `<span>${c.secs.length} topics</span>` : c.sub === "bio" ? "" : `<span>Notes coming soon</span>`}${c.mcq.length ? `<span>${c.mcq.length} MCQs</span>` : ""}${att ? `<span>Practice ${corr}/${att}</span>` : ""}</div></div>
      <div class="r">${S.read[c.id] ? `<span class="chip done">✓ Done</span>` : ""}${c.pri === "High" ? `<span class="chip high">High weightage</span>` : ""}</div>
    </a>`;
  }).join("") || `<p class="empty">No chapters match.</p>`;
  view(`
    <div class="page-head"><span class="kicker">Chapter-wise notes</span><h1>${SUB[sub].name}</h1></div>
    <div class="row between" style="margin-bottom:6px">${subjectTabs(sub, "#/s/")}<div style="flex:1 1 220px;max-width:320px"><input class="input" id="chSearch" type="search" placeholder="Find a chapter…" value="${esc(q)}" aria-label="Find a chapter"></div></div>
    <div class="ch-group"><h3>Class 11</h3>${rows(11)}</div>
    <div class="ch-group"><h3>Class 12</h3>${rows(12)}</div>
  `, sub);
  const inp = document.getElementById("chSearch");
  inp.addEventListener("input", () => { const pos = inp.selectionStart; subject(sub, inp.value); const n = document.getElementById("chSearch"); n.focus(); n.setSelectionRange(pos, pos); });
}

/* ---------- chapter notes ---------- */
function block(b, ctx) {
  const [type, x, y] = b;
  if (type === "p") return `<p>${x}</p>`;
  if (type === "ul") return `<ul>${x.map(li => `<li>${li}</li>`).join("")}</ul>`;
  if (type === "box") return `<div class="fbox"><div class="fbox-h">${x}</div>${y.map(l => `<div class="fline">${l}</div>`).join("")}</div>`;
  if (type === "ex") { ctx.ex++; return `<div class="ex"><div class="ex-q"><b>Example ${ctx.ex}.</b> ${x}</div><details><summary>Show solution</summary><div class="sol">${y}</div></details></div>`; }
  if (type === "tip") return `<div class="tip"><b>NEET tip:</b> ${x}</div>`;
  if (type === "tbl") return `<div class="tbl-wrap"><table><thead><tr>${x.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${y.map(r => `<tr>${r.map(d => `<td>${d}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return "";
}
function chapter(id) {
  const c = ALL[id];
  S.lastCh = id; save();
  const L = LIST[c.sub], i = L.indexOf(c);
  const prev = L[i - 1], next = L[i + 1];
  const foot = `<div class="ch-foot">
      ${prev ? `<a class="btn" href="#/c/${prev.id}">← ${esc(prev.name)}</a>` : "<span></span>"}
      ${next ? `<a class="btn" href="#/c/${next.id}">${esc(next.name)} →</a>` : ""}
    </div>`;
  const doneBtn = `<button class="btn ${S.read[id] ? "" : "primary"}" data-act="toggle-read">${S.read[id] ? "✓ Marked as done" : "Mark chapter as done"}</button>`;
  const practiceBtn = c.mcq.length ? `<a class="btn ${c.hasNotes ? "" : "primary"}" href="#/c/${id}/practice">Practice ${c.mcq.length} MCQs</a>` : "";
  const head = `<div class="page-head">
      <a class="kicker" href="#/s/${c.sub}" style="text-decoration:none">${SUB[c.sub].name} · Class ${c.cls} · Chapter ${c.no}</a>
      <h1>${esc(c.name)}</h1>
      ${c.intro ? `<p class="lead">${c.intro}</p>` : ""}
      <div class="row" style="margin-top:6px">${c.pri === "High" ? `<span class="chip high">High weightage</span>` : ""}${c.hasNotes ? `<span class="chip">${c.secs.length} topics</span><span class="chip">${c.secs.reduce((n, s) => n + s[1].filter(b => b[0] === "ex").length, 0)} solved examples</span>` : ""}${c.mcq.length ? `<span class="chip">${c.mcq.length} MCQs</span>` : ""}</div>
    </div>`;

  if (!c.hasNotes) {
    view(`${head}
      <div class="card soon-box">${c.sub === "bio" && c.mcq.length
        ? `<h3>${c.mcq.length} practice questions for this chapter</h3><p class="muted" style="margin:0">Read this chapter line by line in your NCERT textbook, then practise here. Every question has an explanation, and they also appear in your weekly test.</p>`
        : `<h3>Notes for this chapter are coming soon</h3><p class="muted" style="margin:0">Read this chapter from your NCERT textbook for now. ${c.mcq.length ? "Its practice questions are ready." : ""}</p>`}
      <div class="row">${practiceBtn}${doneBtn}<a class="btn ghost" href="#/formulas/${c.sub}">Open ${SUB[c.sub].name} formula sheet</a></div></div>
      <div style="margin-top:24px">${foot}</div>`, c.sub);
    return;
  }
  const ctx = { ex: 0 };
  const toc = c.secs.map((s, k) => `<a href="#/c/${id}" data-jump="sec-${k}">${k + 1}. ${strip(s[0])}</a>`).join("") + (c.rev ? `<a href="#/c/${id}" data-jump="sec-rev">Quick revision</a>` : "");
  const secs = c.secs.map((s, k) => `<section id="sec-${k}"><h2><span class="n">${k + 1}.</span>${s[0]}</h2>${s[1].map(b => block(b, ctx)).join("")}</section>`).join("");
  view(`${head}
    <div class="notes-layout">
      <nav class="toc" aria-label="Topics in this chapter">${toc}</nav>
      <article class="notes">
        ${c.given ? `<p class="muted">${c.given}</p>` : ""}
        ${secs}
        ${c.rev ? `<section id="sec-rev" class="rev"><h2>Quick revision</h2><ul>${c.rev.map(r => `<li>${r}</li>`).join("")}</ul></section>` : ""}
        <div class="card stack" style="gap:12px"><h3>Finished reading?</h3><p class="muted" style="margin:0">Test yourself on this chapter, then mark it as done. Done chapters are pre-selected in your weekly test.</p><div class="row">${practiceBtn}${doneBtn}</div></div>
        ${foot}
      </article>
    </div>`, c.sub);
}

/* ---------- practice (one chapter) ---------- */
function chapterPractice(id) {
  const c = ALL[id];
  if (!c.mcq.length) { location.hash = `#/c/${id}`; return; }
  const p = S.prac[id] || (S.prac[id] = { i: 0, ans: {} });
  if (p.i >= c.mcq.length) p.i = 0;
  const i = p.i, [q, o, a, e] = c.mcq[i], picked = p.ans[i], done = picked !== undefined;
  let cr = 0, wr = 0, sk = 0;
  Object.entries(p.ans).forEach(([k, v]) => { if (!c.mcq[k]) return; if (v === -1) sk++; else if (v === c.mcq[k][2]) cr++; else wr++; });
  const total = Object.keys(p.ans).length;
  view(`
    <div class="page-head"><a class="kicker" href="#/c/${id}" style="text-decoration:none">← ${esc(c.name)} notes</a><h1>Practice: ${esc(c.name)}</h1><p class="lead">Instant answers with explanations. NEET marking: +4 correct, −1 wrong, 0 skipped.</p></div>
    <div class="quiz">
      <div class="qcard">
        <div class="qmeta"><span class="s">${SUB[c.sub].name.toUpperCase()}</span><span>Question ${i + 1} of ${c.mcq.length}</span></div>
        <p class="qtext">${q}</p>
        <div class="opts">${o.map((t, k) => {
          let cls = ""; if (done) { if (k === a) cls = "right"; else if (k === picked) cls = "wrong"; }
          return `<button class="opt ${cls}" data-act="pick" data-k="${k}" ${done ? "disabled" : ""}><span class="key">${LET[k]}</span><span>${t}</span></button>`;
        }).join("")}</div>
        ${done ? `<div class="explain"><b>${picked === -1 ? "Skipped." : picked === a ? "Correct, +4." : "Not quite, −1."}</b> Answer: ${LET[a]}. ${e}</div>` : ""}
        <div class="qnav">
          <button class="btn" data-act="go" data-d="-1" ${i === 0 ? "disabled" : ""}>← Previous</button>
          <div class="grow">${done ? "" : `<button class="btn" data-act="skip">Skip</button>`}<button class="btn primary" data-act="go" data-d="1" ${i === c.mcq.length - 1 ? "disabled" : ""}>Next →</button></div>
        </div>
      </div>
      <aside class="card side" aria-label="Score">
        <h3>Chapter score</h3>
        <div class="marks">${cr * 4 - wr}<small> / ${c.mcq.length * 4}</small></div>
        <div class="tally"><div class="c"><b>${cr}</b><span>Correct</span></div><div class="w"><b>${wr}</b><span>Wrong</span></div><div><b>${sk}</b><span>Skipped</span></div></div>
        <div class="palette">${c.mcq.map((m, k) => { const v = p.ans[k]; const cl = v === undefined ? "" : v === -1 ? "s" : v === m[2] ? "c" : "w"; return `<button class="${cl} ${k === i ? "cur" : ""}" data-act="jump" data-k="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`; }).join("")}</div>
        <p class="muted" style="margin:0;font-size:13px">${total} of ${c.mcq.length} attempted. Keys A–D answer, ← → move.</p>
        <button class="btn small danger" data-act="reset-prac">Start this chapter again</button>
      </aside>
    </div>`, c.sub);
  app.onPractice = { id };
}

/* ---------- formulas & shortcuts ---------- */
function formulas(sub, mode, q = "") {
  const ql = q.trim().toLowerCase();
  let body;
  if (mode === "formulas") {
    const topics = (N.quick.formulas[sub] || []).map(t => ({ ...t, items: t.items.filter(([f, l]) => !ql || t.t.toLowerCase().includes(ql) || strip(f).toLowerCase().includes(ql) || strip(l).toLowerCase().includes(ql)) })).filter(t => t.items.length);
    body = topics.length ? `<div class="sheet">${topics.map(t => `<section class="topic"><h3>${t.t}<span class="count">${t.items.length}</span></h3><ul>${t.items.map(([f, l]) => `<li><span class="f">${f}</span><span class="lbl">${l}</span></li>`).join("")}</ul></section>`).join("")}</div>` : `<p class="empty">Nothing matches “${esc(q)}”.</p>`;
  } else {
    const list = (N.quick.shortcuts[sub] || []).filter(s => !ql || strip(s.h + " " + s.p + " " + s.tag).toLowerCase().includes(ql));
    body = list.length ? `<div class="tricks">${list.map(s => `<article class="card trick"><span class="kicker">${s.tag}</span><h3>${s.h}</h3><p>${s.p}</p></article>`).join("")}</div>` : `<p class="empty">Nothing matches “${esc(q)}”.</p>`;
  }
  view(`
    <div class="page-head"><span class="kicker">Quick revision</span><h1>${mode === "formulas" ? "Formula sheet" : "Shortcuts & tricks"}</h1><p class="lead">One-page sheets for the night before. Each chapter's notes have the full set.</p></div>
    <div class="row between" style="margin-bottom:18px">
      ${subjectTabs(sub, "#/formulas/").replace(/href="#\/formulas\/(\w+)"/g, `href="#/formulas/$1/${mode}"`)}
      <div class="seg"><a href="#/formulas/${sub}/formulas" class="${mode === "formulas" ? "on" : ""}">Formulas</a><a href="#/formulas/${sub}/shortcuts" class="${mode === "shortcuts" ? "on" : ""}">Shortcuts</a></div>
    </div>
    <div style="max-width:340px;margin-bottom:18px"><input class="input" id="fSearch" type="search" placeholder="Search…" value="${esc(q)}" aria-label="Search"></div>
    ${body}`, sub);
  const inp = document.getElementById("fSearch");
  inp.addEventListener("input", () => { const pos = inp.selectionStart; formulas(sub, mode, inp.value); const n = document.getElementById("fSearch"); n.focus(); n.setSelectionRange(pos, pos); });
}

/* ---------- weekly test: setup ---------- */
function defaultSel() {
  const sel = {};
  Object.values(ALL).forEach(c => { if (S.read[c.id] && c.mcq.length) sel[c.id] = true; });
  if (!Object.keys(sel).length) Object.values(ALL).forEach(c => { if (c.mcq.length) sel[c.id] = true; });
  return sel;
}
function plan() {
  const out = {};
  SUBS.forEach(sub => {
    const pool = LIST[sub].filter(c => S.sel[c.id]).reduce((n, c) => n + c.mcq.length, 0);
    out[sub] = Math.min(SUB[sub].target, pool);
  });
  out.total = SUBS.reduce((n, s) => n + out[s], 0);
  return out;
}
function testHome() {
  if (!S.sel) S.sel = defaultSel();
  const pl = plan();
  const now = Date.now();
  const doneThisWeek = S.tests.some(t => t.date >= weekStart(now));
  const panels = SUBS.map(sub => {
    const L = LIST[sub];
    const n = L.filter(c => S.sel[c.id]).length;
    const pool = L.filter(c => S.sel[c.id]).reduce((k, c) => k + c.mcq.length, 0);
    return `<section class="card subj-pick" data-sub="${sub}">
      <header><h3>${subDot(sub)}${SUB[sub].name}</h3><span class="muted" style="font-size:14px">${n} chapters · ${pool} questions available · test uses ${pl[sub]} of ${SUB[sub].target}</span></header>
      <div class="row"><button class="btn small" data-act="sel" data-sub="${sub}" data-mode="all">All</button><button class="btn small" data-act="sel" data-sub="${sub}" data-mode="11">Class 11</button><button class="btn small" data-act="sel" data-sub="${sub}" data-mode="12">Class 12</button><button class="btn small" data-act="sel" data-sub="${sub}" data-mode="done">Done chapters</button><button class="btn small ghost" data-act="sel" data-sub="${sub}" data-mode="none">Clear</button></div>
      <div class="picks">${L.map(c => `<label class="pick ${c.mcq.length ? "" : "off"}"><input type="checkbox" id="pick-${c.id}" data-pick="${c.id}" ${S.sel[c.id] ? "checked" : ""} ${c.mcq.length ? "" : "disabled"}><span>${esc(c.name)}</span><span class="q">${c.mcq.length || "—"}</span></label>`).join("")}</div>
    </section>`;
  }).join("");
  const hist = S.tests.slice().reverse().map(t => `<tr><td>${fmtDate(t.date)}</td><td>${t.n}</td><td>${t.score} / ${t.max}</td><td>${t.max ? Math.round((t.score / t.max) * 720) : 0}</td><td><a href="#/test/result/${t.id}">Analysis</a></td></tr>`).join("");
  view(`
    <div class="page-head"><span class="kicker">Week of ${fmtDate(weekStart(now))}${doneThisWeek ? " · this week's test done" : ""}</span><h1>Weekly 720 test</h1>
    <p class="lead">Choose the chapters to include. A full test has 45 Physics, 45 Chemistry and 90 Biology questions (180 × 4 = 720 marks), with 1 minute per question. If the chosen chapters have fewer questions, the test is shorter and your score is also shown scaled to 720.</p></div>
    ${S.active ? `<div class="card row between" style="margin-bottom:16px;border-color:var(--review)"><div><b>You have a test in progress.</b> <span class="muted">Started ${fmtDate(S.active.start)}.</span></div><a class="btn primary" href="#/test/run">Resume</a></div>` : ""}
    <div class="stack">${panels}</div>
    <div class="startbar" style="margin-top:18px">
      <div class="sum"><b>${pl.total} questions</b> · ${pl.total * 4} marks · ${pl.total} min<br><span style="opacity:.75">Physics ${pl.phy} · Chemistry ${pl.chem} · Biology ${pl.bio}</span></div>
      <button class="btn primary" data-act="start" ${pl.total && !S.active ? "" : "disabled"}>Start test</button>
    </div>
    ${hist ? `<h2 style="margin:30px 0 12px">Past tests</h2><div class="tbl-wrap"><table><thead><tr><th>Date</th><th>Qs</th><th>Score</th><th>Out of 720</th><th></th></tr></thead><tbody>${hist}</tbody></table></div>` : ""}
  `);
}
function startTest() {
  const qs = [];
  SUBS.forEach(sub => {
    const pool = [];
    LIST[sub].filter(c => S.sel[c.id]).forEach(c => c.mcq.forEach((m, i) => pool.push({ c: c.id, i, s: sub })));
    shuffle(pool).slice(0, SUB[sub].target).forEach(q => qs.push(q));
  });
  if (!qs.length) return;
  S.active = { start: Date.now(), dur: qs.length * 60000, qs, ans: {}, mark: {}, seen: { 0: true }, cur: 0, chapters: Object.keys(S.sel).filter(k => S.sel[k]) };
  save();
  log("test_start", { n: qs.length });
  location.hash = "#/test/run";
}

/* ---------- weekly test: running ---------- */
function testRun(confirming = false) {
  const T = S.active;
  if (!T) { location.hash = "#/test"; return; }
  const left = T.start + T.dur - Date.now();
  if (left <= 0) { submitTest(); return; }
  const i = T.cur, ref = T.qs[i], m = ALL[ref.c].mcq[ref.i];
  T.seen[i] = true;
  const answered = Object.keys(T.ans).length, marked = Object.values(T.mark).filter(Boolean).length;
  const firstOf = sub => T.qs.findIndex(q => q.s === sub);
  const pal = T.qs.map((q, k) => {
    const cl = [T.ans[k] !== undefined ? "ans" : T.seen[k] ? "seen" : "", T.mark[k] ? "rev" : "", k === i ? "cur" : ""].join(" ");
    return `<button class="${cl}" data-act="tjump" data-k="${k}" aria-label="Question ${k + 1}">${k + 1}</button>`;
  }).join("");
  view(`
    <div class="runbar">
      <div class="seg">${SUBS.filter(s => firstOf(s) >= 0).map(s => `<button data-act="tjump" data-k="${firstOf(s)}" class="${ref.s === s ? "on" : ""}">${subDot(s)}${SUB[s].name}</button>`).join("")}</div>
      <div class="row"><span class="timer" id="timer" aria-live="off">--:--</span><button class="btn small danger" data-act="ask-submit">Submit</button></div>
    </div>
    ${confirming ? `<div class="card confirm stack" style="margin-bottom:16px;gap:10px"><h3>Submit the test?</h3><p style="margin:0">Answered <b>${answered}</b> of ${T.qs.length}. Not answered: <b>${T.qs.length - answered}</b>. Marked for review: <b>${marked}</b>. You can't change answers after submitting.</p><div class="row"><button class="btn primary" data-act="submit">Yes, submit</button><button class="btn" data-act="cancel-submit">Keep working</button></div></div>` : ""}
    <div class="quiz" data-sub="${ref.s}">
      <div class="qcard">
        <div class="qmeta"><span class="s">${SUB[ref.s].name.toUpperCase()}</span><span>Question ${i + 1} of ${T.qs.length}</span></div>
        <p class="qtext">${m[0]}</p>
        <div class="opts">${m[1].map((t, k) => `<button class="opt ${T.ans[i] === k ? "sel" : ""}" data-act="tpick" data-k="${k}" aria-pressed="${T.ans[i] === k}"><span class="key">${LET[k]}</span><span>${t}</span></button>`).join("")}</div>
        <div class="qnav">
          <button class="btn" data-act="tgo" data-d="-1" ${i === 0 ? "disabled" : ""}>← Previous</button>
          <div class="grow">
            <button class="btn" data-act="tclear" ${T.ans[i] === undefined ? "disabled" : ""}>Clear</button>
            <button class="btn" data-act="tmark">${T.mark[i] ? "Unmark" : "Mark for review"}</button>
            <button class="btn primary" data-act="tgo" data-d="1" ${i === T.qs.length - 1 ? "disabled" : ""}>Save & next →</button>
          </div>
        </div>
      </div>
      <aside class="card side">
        <h3>Question palette</h3>
        <div class="legend"><span><i style="background:var(--ok)"></i>Answered</span><span><i style="background:var(--bad)"></i>Not answered</span><span><i style="background:var(--review)"></i>Marked</span><span><i style="background:var(--paper);border:1px solid var(--rule)"></i>Not visited</span></div>
        <div class="palette">${pal}</div>
        <p class="muted" style="margin:0;font-size:13px">${answered} answered · ${marked} marked</p>
      </aside>
    </div>`);
  save();
  tick();
  timerId = setInterval(tick, 1000);
}
function tick() {
  const T = S.active, el = document.getElementById("timer");
  if (!T || !el) { stopTimer(); return; }
  const left = T.start + T.dur - Date.now();
  if (left <= 0) { stopTimer(); submitTest(); return; }
  const s = Math.floor(left / 1000), h = Math.floor(s / 3600), mm = Math.floor((s % 3600) / 60), ss = s % 60;
  el.textContent = (h ? h + ":" + String(mm).padStart(2, "0") : mm) + ":" + String(ss).padStart(2, "0");
  el.classList.toggle("low", left < 5 * 60000);
}
function submitTest() {
  const T = S.active; if (!T) return;
  stopTimer();
  let score = 0;
  T.qs.forEach((q, k) => { const v = T.ans[k]; if (v === undefined) return; score += v === ALL[q.c].mcq[q.i][2] ? 4 : -1; });
  const rec = { id: String(T.start), date: Date.now(), used: Math.min(Date.now() - T.start, T.dur), n: T.qs.length, max: T.qs.length * 4, score, qs: T.qs, ans: T.ans, chapters: T.chapters };
  S.tests.push(rec);
  S.active = null;
  save();
  if (C.user) C.saveTest(rec).catch(e => console.warn("test upload", e));
  log("test_submit", { score, max: rec.max, n: rec.n });
  location.hash = "#/test/result/" + rec.id;
}

/* ---------- weekly test: analysis ---------- */
// opts.rec / opts.who / opts.back are set when an admin views a student's test.
let resultOpts = {};
function testResult(id, filter = "all", opts = {}) {
  resultOpts = opts;
  const t = opts.rec || S.tests.find(x => x.id === id);
  if (!t) { location.hash = opts.back || "#/test"; return; }
  const own = !opts.rec;
  const per = {}, perCh = {};
  t.qs.forEach((q, k) => {
    const m = ALL[q.c] && ALL[q.c].mcq[q.i]; if (!m) return;
    const v = t.ans[k];
    const P = per[q.s] || (per[q.s] = { n: 0, c: 0, w: 0, u: 0 });
    const C = perCh[q.c] || (perCh[q.c] = { n: 0, c: 0 });
    P.n++; C.n++;
    if (v === undefined) P.u++; else if (v === m[2]) { P.c++; C.c++; } else P.w++;
  });
  const scaled = t.max ? Math.round((t.score / t.max) * 720) : 0;
  const rows = SUBS.filter(s => per[s]).map(s => { const P = per[s]; return `<tr><td>${subDot(s)} ${SUB[s].name}</td><td>${P.n}</td><td>${P.c}</td><td>${P.w}</td><td>${P.u}</td><td><b>${P.c * 4 - P.w}</b> / ${P.n * 4}</td><td>${pct(P.c, P.c + P.w)}%</td></tr>`; }).join("");
  const weak = Object.entries(perCh).map(([cid, C]) => ({ cid, ...C, p: pct(C.c, C.n) })).sort((a, b) => a.p - b.p || b.n - a.n);
  const weakRows = weak.slice(0, 10).map(w => `<div class="weak-row ${w.p < 50 ? "lo" : w.p < 75 ? "mid" : ""}"><a href="#/c/${w.cid}" data-sub="${ALL[w.cid].sub}">${esc(ALL[w.cid].name)}</a><div class="bar"><span style="width:${w.p}%"></span></div><span>${w.c}/${w.n}</span></div>`).join("");
  const review = t.qs.map((q, k) => ({ q, k, m: ALL[q.c] && ALL[q.c].mcq[q.i], v: t.ans[k] })).filter(r => r.m && (filter === "all" || (filter === "wrong" && r.v !== undefined && r.v !== r.m[2]) || (filter === "skipped" && r.v === undefined)))
    .map(({ q, k, m, v }) => `<div class="qcard rev-q" data-sub="${q.s}">
      <div class="qmeta"><span class="s">${SUB[q.s].name.toUpperCase()} · ${esc(ALL[q.c].name)}</span><span>Q${k + 1} · ${v === undefined ? "Not answered" : v === m[2] ? "+4" : "−1"}</span></div>
      <p class="qtext">${m[0]}</p>
      <div class="opts">${m[1].map((o, j) => `<div class="opt ${j === m[2] ? "right" : j === v ? "wrong" : ""}"><span class="key">${LET[j]}</span><span>${o}</span></div>`).join("")}</div>
      <div class="explain"><b>Answer ${LET[m[2]]}.</b> ${m[3]}</div></div>`).join("") || `<p class="empty">No questions in this filter.</p>`;
  view(`
    <div class="page-head">${own ? `<span class="kicker">Test analysis · ${fmtDate(t.date)}</span><h1>Your result</h1>` : `<a class="kicker" href="${opts.back}" style="text-decoration:none">← ${esc(opts.who)}</a><h1>${esc(opts.who)}'s test · ${fmtDate(t.date)}</h1>`}</div>
    <div class="result-top">
      <div class="card stack" style="gap:10px">
        <div class="score-big">${t.score}<small> / ${t.max}</small></div>
        ${t.max !== 720 ? `<p style="margin:0">Scaled to 720: <b>${scaled}</b></p>` : ""}
        <p class="muted" style="margin:0">${t.n} questions · time used ${Math.round(t.used / 60000)} of ${t.n} min</p>
        ${own ? `<div class="row"><a class="btn primary" href="#/test">New test</a><a class="btn" href="#/">Home</a></div>` : `<div class="row"><a class="btn" href="${opts.back}">Back to student</a></div>`}
      </div>
      <div class="card stack" style="gap:10px"><h3>Revise these first</h3><div class="weak">${weakRows}</div><p class="muted" style="margin:0;font-size:13px">${weak.length > 10 ? `10 weakest of ${weak.length} chapters. ` : ""}Red is below 50% correct, yellow below 75%.</p></div>
    </div>
    <h2 style="margin:26px 0 12px">Subject-wise</h2>
    <div class="tbl-wrap"><table class="subj-table"><thead><tr><th>Subject</th><th>Qs</th><th>Correct</th><th>Wrong</th><th>Skipped</th><th>Marks</th><th>Accuracy</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="row between" style="margin:26px 0 12px"><h2>Review answers</h2>
      <div class="seg">${["all", "wrong", "skipped"].map(f => `<button data-act="rfilter" data-f="${f}" data-id="${t.id}" class="${f === filter ? "on" : ""}">${f[0].toUpperCase() + f.slice(1)}</button>`).join("")}</div></div>
    <div class="stack">${review}</div>
    ${own ? `<div class="row" style="margin-top:20px"><button class="btn small danger" data-act="del-test" data-id="${t.id}">Delete this result</button></div>` : ""}
  `);
}

/* ---------- sign-in ---------- */
let authMode = "in";
const EYE_OPEN = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>`;
const EYE_SHUT = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3l18 18"/><path d="M10.6 5.1A9.8 9.8 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>`;
function loginView(msg = "") {
  document.body.classList.add("signed-out");
  const up = authMode === "up";
  app.innerHTML = `<div class="auth view-in">
    <div class="card auth-card">
      <h1 class="auth-title">${up ? "Create your account" : "Welcome back"}</h1>
      <div class="seg auth-tabs" role="tablist">
        <button type="button" data-act="auth-mode" data-m="in" class="${up ? "" : "on"}" aria-selected="${!up}">Sign in</button>
        <button type="button" data-act="auth-mode" data-m="up" class="${up ? "on" : ""}" aria-selected="${up}">Create account</button>
      </div>
      <form id="authForm" class="stack" style="gap:12px" novalidate>
        ${up ? `<label class="field"><span>Your name</span><input class="input" id="authName" autocomplete="name" required></label>` : ""}
        <label class="field"><span>Email</span><input class="input" id="authEmail" type="email" autocomplete="email" required></label>
        <div class="field"><label for="authPw">Password</label>
          <div class="pw-wrap">
            <input class="input" id="authPw" type="password" autocomplete="${up ? "new-password" : "current-password"}" minlength="6" required>
            <button type="button" class="pw-toggle" data-act="toggle-pw" aria-controls="authPw" aria-pressed="false" aria-label="Show password" title="Show password">${EYE_OPEN}</button>
          </div>${up ? `<small class="muted">At least 6 characters.</small>` : ""}</div>
        <p class="auth-msg" id="authMsg" role="alert">${msg}</p>
        <button class="btn primary" type="submit" id="authSubmit">${up ? "Create account" : "Sign in"}</button>
        ${up ? "" : `<button type="button" class="linkbtn" data-act="auth-reset">Forgot password?</button>`}
      </form>
    </div>
    <p class="muted auth-foot">Your notes progress and test results are saved to your account, so they follow you to any phone or computer.</p>
  </div>`;
  document.getElementById(up ? "authName" : "authEmail").focus();
}
const authError = e => ({
  "auth/invalid-credential": "Email or password is incorrect.",
  "auth/wrong-password": "Email or password is incorrect.",
  "auth/user-not-found": "No account with this email. Tap Create account.",
  "auth/email-already-in-use": "An account with this email already exists. Sign in instead.",
  "auth/invalid-email": "That email address doesn't look right.",
  "auth/weak-password": "Use a password with at least 6 characters.",
  "auth/too-many-requests": "Too many attempts. Wait a few minutes and try again.",
  "auth/network-request-failed": "No internet connection. Check your network and try again.",
}[e && e.code] || "Something went wrong. Please try again.");
async function submitAuth() {
  const msg = document.getElementById("authMsg"), btn = document.getElementById("authSubmit");
  const email = document.getElementById("authEmail").value, pw = document.getElementById("authPw").value;
  const nameEl = document.getElementById("authName"), name = nameEl ? nameEl.value.trim() : "";
  if (authMode === "up" && !name) { msg.textContent = "Enter your name."; return; }
  if (!email || !pw) { msg.textContent = "Enter your email and password."; return; }
  btn.disabled = true; btn.textContent = authMode === "up" ? "Creating account…" : "Signing in…"; msg.textContent = "";
  try { authMode === "up" ? await C.signUp(name, email, pw) : await C.signIn(email, pw); }
  catch (e) { msg.textContent = authError(e); btn.disabled = false; btn.textContent = authMode === "up" ? "Create account" : "Sign in"; }
}

/* ---------- account ---------- */
function account() {
  if (!C.user) { location.hash = "#/"; return; }
  const u = C.user, p = C.profile || {};
  view(`
    <div class="page-head"><span class="kicker">Account</span><h1>${esc(p.name || u.email)}</h1><p class="lead">${esc(u.email)}</p></div>
    <div class="stack" style="max-width:560px">
      <div class="card stack" style="gap:10px">
        <h3>Email verification</h3>
        ${u.emailVerified ? `<p style="margin:0">Your email is verified.</p>` : `<p style="margin:0" class="muted">Not verified yet. Open the link we emailed you (check spam too)${C.isAdmin ? "" : ". Admins must verify before they can open the dashboard"}.</p><div class="row"><button class="btn small" data-act="resend-verify">Send the link again</button></div>`}
      </div>
      ${C.isAdmin ? `<a class="card continue" href="#/admin"><span class="ic">A</span><div><div class="kicker">Admin</div><b>Open the admin dashboard</b></div></a>` : ""}
      <div class="card stack" style="gap:10px">
        <h3>Sign out</h3>
        <p class="muted" style="margin:0">Your progress is saved to your account.${S.active ? " Your unfinished test stays on this device." : ""}</p>
        <div class="row"><button class="btn danger" data-act="sign-out">Sign out</button></div>
      </div>
    </div>`);
}

/* ---------- admin dashboard ---------- */
const adminCache = {};
function adminGuard() {
  if (C.isAdmin) return true;
  view(`<div class="page-head"><span class="kicker">Admin</span><h1>Admins only</h1><p class="lead">${C.user && !C.user.emailVerified ? "Verify your email first (see Account), then sign out and back in." : "This page is only for the admin account."}</p></div>`);
  return false;
}
function loading(title) { view(`<div class="page-head"><span class="kicker">Admin</span><h1>${title}</h1><p class="lead">Loading…</p></div>`); }
function adminFail(e) { view(`<div class="page-head"><span class="kicker">Admin</span><h1>Couldn't load data</h1><p class="lead">${esc(e && e.message || e)}</p></div><button class="btn" onclick="location.reload()">Try again</button>`); }
function chapterAgg(tests) {
  const per = {};
  tests.forEach(t => (t.qs || []).forEach((q, k) => {
    const m = ALL[q.c] && ALL[q.c].mcq[q.i]; if (!m) return;
    const v = t.ans ? t.ans[k] : undefined;
    const P = per[q.c] || (per[q.c] = { n: 0, c: 0, users: new Set() });
    P.n++; if (v === m[2]) P.c++; if (t.uid) P.users.add(t.uid);
  }));
  return Object.entries(per).map(([cid, P]) => ({ cid, n: P.n, c: P.c, p: pct(P.c, P.n), users: P.users.size })).sort((a, b) => a.p - b.p || b.n - a.n);
}
function weakList(rows, max = 10) {
  return rows.slice(0, max).map(w => `<div class="weak-row ${w.p < 50 ? "lo" : w.p < 75 ? "mid" : ""}"><a href="#/c/${w.cid}">${esc(ALL[w.cid].name)}</a><div class="bar"><span style="width:${w.p}%"></span></div><span>${w.p}%</span></div>`).join("") || `<p class="muted" style="margin:0">No test answers yet.</p>`;
}
async function adminHome() {
  if (!adminGuard()) return;
  loading("Students");
  let users, tests;
  try { [users, tests] = await Promise.all([C.listUsers(), C.allTests()]); } catch (e) { adminFail(e); return; }
  if (!location.hash.startsWith("#/admin")) return;
  // The admin's own account isn't a student.
  users = users.filter(u => u.uid !== C.user.uid); tests = tests.filter(t => t.uid !== C.user.uid);
  adminCache.users = users;
  const now = Date.now(), wk = weekStart(now), week7 = now - 7 * 864e5;
  const byUser = {}; tests.forEach(t => (byUser[t.uid] = byUser[t.uid] || []).push(t));
  Object.values(byUser).forEach(l => l.sort((a, b) => a.date - b.date));
  const weekTests = tests.filter(t => t.date >= wk);
  const active7 = users.filter(u => toMs(u.lastActive) >= week7).length;
  const avgWeek = weekTests.length ? Math.round(weekTests.reduce((n, t) => n + scaled720(t), 0) / weekTests.length) : null;
  const pending = users.filter(u => !(byUser[u.uid] || []).some(t => t.date >= wk));
  users.sort((a, b) => toMs(b.lastActive) - toMs(a.lastActive));
  const rows = users.map(u => {
    const s = u.summary || {}, d = s.done || {}, ts = byUser[u.uid] || [], last = ts[ts.length - 1];
    const best = ts.length ? Math.max(...ts.map(scaled720)) : null;
    const trend = ts.slice(-6).map(t => `<i style="height:${Math.max(6, pct(scaled720(t), 720))}%" title="${fmtDate(t.date)}: ${scaled720(t)}/720"></i>`).join("");
    return `<tr>
      <td><a href="#/admin/u/${u.uid}" class="who"><b>${esc(u.name || "—")}</b><span class="muted">${esc(u.email || "")}</span></a></td>
      <td>${ago(u.lastActive)}</td>
      <td>${d.phy || 0} · ${d.chem || 0} · ${d.bio || 0}</td>
      <td>${s.pracAtt ? `${pct(s.pracCorrect, s.pracAtt)}% <span class="muted">of ${s.pracAtt}</span>` : "—"}</td>
      <td>${ts.length}</td>
      <td>${last ? `<b>${scaled720(last)}</b><span class="muted">/720</span>` : "—"}</td>
      <td>${best !== null ? best : "—"}</td>
      <td><span class="spark">${trend}</span></td>
    </tr>`;
  }).join("");
  const recent = tests.slice().sort((a, b) => b.date - a.date).slice(0, 8).map(t => {
    const u = users.find(x => x.uid === t.uid) || {};
    return `<a class="feed-row" href="#/admin/u/${t.uid}/t/${t.id}"><span class="muted">${fmtDate(t.date)}</span><b>${esc(u.name || "Student")}</b><span>${scaled720(t)}/720</span></a>`;
  }).join("") || `<p class="muted" style="margin:0">No tests submitted yet.</p>`;
  view(`
    <div class="page-head"><span class="kicker">Admin</span><h1>Students</h1><p class="lead">Every student's progress, weekly tests and activity. Select a student for full detail.</p></div>
    <div class="kpis">
      <div class="kpi"><span>Students</span><b>${users.length}</b></div>
      <div class="kpi"><span>Active in last 7 days</span><b>${active7}</b></div>
      <div class="kpi"><span>Tests this week</span><b>${weekTests.length}</b></div>
      <div class="kpi"><span>Average this week</span><b>${avgWeek === null ? "—" : avgWeek}<small>${avgWeek === null ? "" : " /720"}</small></b></div>
    </div>
    ${pending.length ? `<div class="card stack" style="gap:8px;margin-top:16px"><h3>Haven't taken this week's test</h3><div class="row">${pending.map(u => `<a class="chip" href="#/admin/u/${u.uid}">${esc(u.name || u.email)}</a>`).join("")}</div></div>` : ""}
    <h2 style="margin:26px 0 12px">All students</h2>
    <div class="tbl-wrap"><table class="admin-table"><thead><tr><th>Student</th><th>Last active</th><th>Chapters done<br><span class="muted">Phy · Chem · Bio</span></th><th>Practice accuracy</th><th>Tests</th><th>Latest</th><th>Best</th><th>Last 6</th></tr></thead>
    <tbody>${rows || `<tr><td colspan="8" class="muted">No students yet. Share the site link; new sign-ups appear here.</td></tr>`}</tbody></table></div>
    <div class="result-top" style="margin-top:22px">
      <div class="card stack" style="gap:10px"><h3>Recent tests</h3>${recent}</div>
      <div class="card stack" style="gap:10px"><h3>Weakest chapters across all students</h3><div class="weak">${weakList(chapterAgg(tests))}</div></div>
    </div>`);
}
const ACT_TEXT = {
  login: () => "Signed in",
  open: a => `Opened ${chName(a.ch)}`,
  practice: a => `Practice · ${chName(a.ch)} · ${a.ok ? "correct" : "wrong"}`,
  done: a => `Marked ${chName(a.ch)} as done`,
  undone: a => `Unmarked ${chName(a.ch)}`,
  test_start: a => `Started a test (${a.n} questions)`,
  test_submit: a => `Submitted a test: ${a.score}/${a.max}`,
};
const chName = id => (ALL[id] ? ALL[id].name : id);
async function adminUser(uid) {
  if (!adminGuard()) return;
  loading("Student");
  let u, st, tests, acts;
  try { [u, st, tests, acts] = await Promise.all([C.getUser(uid), C.loadState(uid), C.loadTests(uid), C.getActivity(uid)]); } catch (e) { adminFail(e); return; }
  if (!location.hash.startsWith("#/admin/u/" + uid)) return;
  if (!u) { adminFail("Student not found."); return; }
  st = st || {}; adminCache[uid] = { u, tests };
  const sum = summaryOf({ read: st.read || {}, prac: st.prac || {}, lastCh: st.lastCh });
  const sc = tests.map(scaled720);
  const avg = sc.length ? Math.round(sc.reduce((a, b) => a + b, 0) / sc.length) : null;
  const trend = tests.slice(-12).map(t => `<a href="#/admin/u/${uid}/t/${t.id}" class="tbar" title="${fmtDate(t.date)}: ${scaled720(t)}/720"><i style="height:${Math.max(4, pct(scaled720(t), 720))}%"></i><span>${scaled720(t)}</span></a>`).join("");
  const progress = SUBS.map(s => {
    const L = LIST[s], done = L.filter(c => st.read && st.read[c.id]);
    return `<div class="card stack" data-sub="${s}" style="gap:8px"><h3>${subDot(s)}${SUB[s].name}</h3><div class="bar"><span style="width:${pct(done.length, L.length)}%"></span></div><p class="muted" style="margin:0">${done.length} of ${L.length} chapters done</p>${done.length ? `<details><summary class="linkbtn">Show chapters</summary><ul class="tips" style="margin-top:6px">${done.map(c => `<li>${esc(c.name)}</li>`).join("")}</ul></details>` : ""}</div>`;
  }).join("");
  const pracRows = Object.entries(st.prac || {}).map(([id, p]) => {
    const c = ALL[id]; if (!c || !p || !p.ans) return null;
    let a = 0, k = 0; Object.entries(p.ans).forEach(([i, v]) => { if (v === -1 || !c.mcq[i]) return; a++; if (v === c.mcq[i][2]) k++; });
    return a ? { c, a, k, p: pct(k, a) } : null;
  }).filter(Boolean).sort((x, y) => x.p - y.p);
  const testRows = tests.slice().reverse().map(t => `<tr><td>${fmtDate(t.date)}</td><td>${t.n}</td><td>${t.score} / ${t.max}</td><td><b>${scaled720(t)}</b></td><td>${Math.round((t.used || 0) / 60000)} min</td><td><a href="#/admin/u/${uid}/t/${t.id}">Analysis</a></td></tr>`).join("");
  const actRows = acts.map(a => `<li><span class="muted">${ago(a.at)}</span><span>${esc((ACT_TEXT[a.type] || (() => a.type))(a))}</span></li>`).join("");
  view(`
    <div class="page-head"><a class="kicker" href="#/admin" style="text-decoration:none">← All students</a><h1>${esc(u.name || u.email)}</h1>
      <p class="lead">${esc(u.email || "")} · joined ${u.createdAt ? fmtDate(toMs(u.createdAt)) : "—"} · last signed in ${ago(u.lastLogin)} · last active ${ago(u.lastActive)}</p></div>
    <div class="kpis">
      <div class="kpi"><span>Tests taken</span><b>${tests.length}</b></div>
      <div class="kpi"><span>Average</span><b>${avg === null ? "—" : avg}<small>${avg === null ? "" : " /720"}</small></b></div>
      <div class="kpi"><span>Best</span><b>${sc.length ? Math.max(...sc) : "—"}<small>${sc.length ? " /720" : ""}</small></b></div>
      <div class="kpi"><span>Practice accuracy</span><b>${sum.pracAtt ? pct(sum.pracCorrect, sum.pracAtt) + "%" : "—"}</b><small class="muted">${sum.pracAtt} answered</small></div>
    </div>
    ${tests.length ? `<div class="card stack" style="gap:10px;margin-top:16px"><h3>Score trend (out of 720)</h3><div class="trend">${trend}</div></div>` : ""}
    <h2 style="margin:26px 0 12px">Chapter progress</h2>
    <div class="subj-cards">${progress}</div>
    <div class="result-top" style="margin-top:22px">
      <div class="card stack" style="gap:10px"><h3>Weak chapters in tests</h3><div class="weak">${weakList(chapterAgg(tests))}</div></div>
      <div class="card stack" style="gap:10px"><h3>Practice by chapter</h3>${pracRows.length ? `<div class="weak">${pracRows.slice(0, 12).map(r => `<div class="weak-row ${r.p < 50 ? "lo" : r.p < 75 ? "mid" : ""}"><a href="#/c/${r.c.id}">${esc(r.c.name)}</a><div class="bar"><span style="width:${r.p}%"></span></div><span>${r.k}/${r.a}</span></div>`).join("")}</div>` : `<p class="muted" style="margin:0">No practice answers yet.</p>`}</div>
    </div>
    <h2 style="margin:26px 0 12px">Weekly tests</h2>
    ${testRows ? `<div class="tbl-wrap"><table><thead><tr><th>Date</th><th>Qs</th><th>Score</th><th>Out of 720</th><th>Time used</th><th></th></tr></thead><tbody>${testRows}</tbody></table></div>` : `<p class="muted">No tests yet.</p>`}
    <h2 style="margin:26px 0 12px">Activity</h2>
    ${actRows ? `<ul class="timeline">${actRows}</ul>` : `<p class="muted">No activity recorded yet.</p>`}
  `);
}
async function adminTest(uid, tid) {
  if (!adminGuard()) return;
  let cached = adminCache[uid];
  if (!cached) {
    loading("Test");
    try { const [u, tests] = await Promise.all([C.getUser(uid), C.loadTests(uid)]); cached = adminCache[uid] = { u, tests }; } catch (e) { adminFail(e); return; }
  }
  const rec = cached.tests.find(t => t.id === tid);
  if (!rec) { adminFail("Test not found."); return; }
  testResult(tid, "all", { rec, who: (cached.u && (cached.u.name || cached.u.email)) || "Student", back: `#/admin/u/${uid}` });
}

/* ---------- events ---------- */
document.addEventListener("click", e => {
  const j = e.target.closest("[data-jump]");
  if (j) { e.preventDefault(); const el = document.getElementById(j.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); return; }
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const act = b.dataset.act;
  const parts = location.hash.replace(/^#\/?/, "").split("/");
  const id = parts[1];
  if (act === "auth-mode") { authMode = b.dataset.m; loginView(); return; }
  if (act === "toggle-pw") {
    const inp = document.getElementById("authPw"), show = inp.type === "password";
    const pos = inp.selectionStart;
    inp.type = show ? "text" : "password";
    b.innerHTML = show ? EYE_SHUT : EYE_OPEN;
    b.setAttribute("aria-pressed", show);
    b.setAttribute("aria-label", show ? "Hide password" : "Show password");
    b.title = show ? "Hide password" : "Show password";
    inp.focus(); if (pos !== null) inp.setSelectionRange(pos, pos);
    return;
  }
  if (act === "auth-reset") {
    const email = document.getElementById("authEmail").value, msg = document.getElementById("authMsg");
    if (!email) { msg.textContent = "Type your email above, then tap Forgot password again."; return; }
    C.resetPassword(email).then(() => { msg.textContent = "Password reset link sent. Check your email (and spam)."; }, e => { msg.textContent = authError(e); });
    return;
  }
  if (act === "sign-out") { C.signOut(); location.hash = "#/"; return; }
  if (act === "resend-verify") { C.resendVerification().then(() => { b.textContent = "Link sent"; b.disabled = true; }, () => { b.textContent = "Try again later"; }); return; }
  if (act === "toggle-read") { S.read[id] = !S.read[id]; if (!S.read[id]) delete S.read[id]; save(); log(S.read[id] ? "done" : "undone", { ch: id }); chapter(id); }
  else if (act === "pick" || act === "skip" || act === "go" || act === "jump" || act === "reset-prac") {
    const c = ALL[id], p = S.prac[id];
    if (act === "pick") { p.ans[p.i] = +b.dataset.k; log("practice", { ch: id, q: p.i, ok: p.ans[p.i] === c.mcq[p.i][2] }); }
    else if (act === "skip") p.ans[p.i] = -1;
    else if (act === "go") p.i = Math.max(0, Math.min(c.mcq.length - 1, p.i + +b.dataset.d));
    else if (act === "jump") p.i = +b.dataset.k;
    else if (act === "reset-prac") { if (b.dataset.armed) { S.prac[id] = { i: 0, ans: {} }; } else { b.dataset.armed = "1"; b.textContent = "Tap again to clear answers"; return; } }
    save(); const y = window.scrollY; chapterPractice(id); if (act === "pick" || act === "skip") window.scrollTo(0, y);
  }
  else if (act === "sel") {
    const sub = b.dataset.sub, mode = b.dataset.mode;
    LIST[sub].forEach(c => { if (!c.mcq.length) return; const on = mode === "all" || (mode === "11" && c.cls === 11) || (mode === "12" && c.cls === 12) || (mode === "done" && S.read[c.id]); if (on) S.sel[c.id] = true; else delete S.sel[c.id]; });
    save(); const y = window.scrollY; testHome(); window.scrollTo(0, y);
  }
  else if (act === "start") startTest();
  else if (act.startsWith("t") && S.active) {
    const T = S.active;
    if (act === "tpick") T.ans[T.cur] = +b.dataset.k;
    else if (act === "tclear") delete T.ans[T.cur];
    else if (act === "tmark") { T.mark[T.cur] = !T.mark[T.cur]; if (T.cur < T.qs.length - 1) T.cur++; }
    else if (act === "tgo") T.cur = Math.max(0, Math.min(T.qs.length - 1, T.cur + +b.dataset.d));
    else if (act === "tjump") T.cur = +b.dataset.k;
    stopTimer(); testRun();
    if (act !== "tpick" && act !== "tclear") window.scrollTo(0, 0);
  }
  else if (act === "ask-submit") { stopTimer(); testRun(true); window.scrollTo(0, 0); }
  else if (act === "cancel-submit") { stopTimer(); testRun(); }
  else if (act === "submit") submitTest();
  else if (act === "rfilter") testResult(b.dataset.id, b.dataset.f, resultOpts);
  else if (act === "del-test") {
    if (!b.dataset.armed) { b.dataset.armed = "1"; b.textContent = "Tap again to delete"; return; }
    S.tests = S.tests.filter(x => x.id !== b.dataset.id); save();
    if (C.user) C.deleteTest(b.dataset.id).catch(() => {});
    location.hash = "#/test";
  }
});
document.addEventListener("submit", e => {
  if (e.target.id !== "authForm") return;
  e.preventDefault();
  submitAuth();
});
document.addEventListener("change", e => {
  const id = e.target.dataset && e.target.dataset.pick;
  if (!id) return;
  if (e.target.checked) S.sel[id] = true; else delete S.sel[id];
  save(); const y = window.scrollY; testHome(); window.scrollTo(0, y);
  const el = document.getElementById("pick-" + id); if (el) el.focus({ preventScroll: true });
});
document.addEventListener("keydown", e => {
  if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) || e.ctrlKey || e.metaKey || e.altKey) return;
  const h = location.hash;
  const k = e.key.toUpperCase();
  if (/\/practice$/.test(h)) {
    if (LET.includes(k)) { const btn = app.querySelector(`[data-act="pick"][data-k="${LET.indexOf(k)}"]`); if (btn && !btn.disabled) btn.click(); }
    else if (e.key === "ArrowRight") app.querySelector('[data-act="go"][data-d="1"]')?.click();
    else if (e.key === "ArrowLeft") app.querySelector('[data-act="go"][data-d="-1"]')?.click();
  } else if (h === "#/test/run") {
    if (LET.includes(k)) app.querySelector(`[data-act="tpick"][data-k="${LET.indexOf(k)}"]`)?.click();
    else if (e.key === "ArrowRight") app.querySelector('[data-act="tgo"][data-d="1"]')?.click();
    else if (e.key === "ArrowLeft") app.querySelector('[data-act="tgo"][data-d="-1"]')?.click();
  }
});
document.getElementById("themeBtn").addEventListener("click", () => {
  const cur = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("neet-theme", next); } catch (e) {}
});

/* ---------- start-up ---------- */
let routing = false;
function startApp() {
  document.body.classList.remove("signed-out");
  const acct = document.getElementById("acctLink");
  if (acct) {
    acct.hidden = !C.user;
    if (C.user) { const n = (C.profile && C.profile.name) || C.user.email || "?"; acct.textContent = n.trim().charAt(0).toUpperCase(); acct.title = `${n} · Account`; }
  }
  document.querySelectorAll("[data-admin-only]").forEach(el => { el.hidden = !C.isAdmin; });
  if (!routing) { window.addEventListener("hashchange", route); routing = true; }
  route();
}
async function signedIn(user) {
  KEY = LEGACY_KEY + ":" + user.uid;
  S = loadLocal(KEY);
  // Progress made before logins existed moves into the first account that signs in on this device.
  const legacy = localStorage.getItem(LEGACY_KEY) ? loadLocal(LEGACY_KEY) : null;
  try {
    const [cloud, tests] = await Promise.all([C.loadState(), C.loadTests()]);
    if (cloud) { S.read = cloud.read || {}; S.prac = cloud.prac || {}; S.sel = cloud.sel || S.sel; S.lastCh = cloud.lastCh || S.lastCh; }
    S.tests = tests.length ? tests : S.tests;
    if (legacy) {
      S.read = Object.assign({}, legacy.read, S.read);
      Object.entries(legacy.prac || {}).forEach(([k, v]) => { if (!S.prac[k]) S.prac[k] = v; });
      if (!S.sel) S.sel = legacy.sel;
      if (!S.lastCh) S.lastCh = legacy.lastCh;
      const have = new Set(S.tests.map(t => t.id));
      (legacy.tests || []).filter(t => !have.has(t.id)).forEach(t => { S.tests.push(t); C.saveTest(t).catch(() => {}); });
      S.tests.sort((a, b) => a.date - b.date);
      if (!S.active && legacy.active) S.active = legacy.active;
      localStorage.removeItem(LEGACY_KEY);
    }
  } catch (e) { console.warn("Using this device's copy; cloud unavailable.", e); }
  save();
  startApp();
}
if (C.enabled) {
  app.innerHTML = `<div class="page-head"><p class="lead">Loading…</p></div>`;
  C.watch(user => {
    stopTimer();
    if (user) signedIn(user);
    else { KEY = LEGACY_KEY; S = blankState(); C.isAdmin = false; authMode = "in"; loginView(); }
  });
} else {
  S = loadLocal(LEGACY_KEY);
  startApp();
}
})();
