# Connecting Firebase (logins + admin dashboard)

Free Spark plan is enough. Takes about 10 minutes at https://console.firebase.google.com

1. **Create the project:** Add project → name it `neet-prep-notebook` → Google Analytics can be off.
2. **Turn on email login:** Build → Authentication → Get started → Sign-in method → Email/Password → Enable → Save.
3. **Allow the website to log in:** Authentication → Settings → Authorized domains → Add domain → `neet-prep-notebook.vercel.app`.
4. **Create the database:** Build → Firestore Database → Create database → Start in **production mode** → location `asia-south1 (Mumbai)`.
5. **Add the security rules:** Firestore Database → Rules → replace everything with the contents of `firestore.rules`, change `YOUR_ADMIN_EMAIL@example.com` to the admin's email → Publish.
6. **Get the web settings:** Project settings (gear icon) → General → Your apps → Web (`</>`) → register app (no hosting) → copy the `firebaseConfig` values into `site/assets/firebase-config.js`.
7. **Deploy:** from the `site` folder run `vercel --prod`.
8. **Become admin:** open the site, Create account with the admin email, click the verification link in your inbox, then sign out and back in. The Admin tab appears.

The `firebaseConfig` values are public by design (every visitor's browser gets them). The data is protected by the rules in step 5: students can only read and write their own data; only the verified admin email can read everyone's.
