import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "meckay-pharmacy";
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    console.warn("[FirebaseAdmin] Missing FIREBASE_CLIENT_EMAIL or FIREBASE_PRIVATE_KEY");
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail: clientEmail || "",
      privateKey: privateKey || "",
    }),
  });
}

export const adminDb = getFirestore(getAdminApp());
