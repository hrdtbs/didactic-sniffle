import type { NextApiRequest, NextApiResponse } from "next";
import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../../firebase-serviceAccount.json";
import admin from "firebase-admin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "users";
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount as admin.ServiceAccount),
    });
  }
  const db = getFirestore();

  if (req.method === "POST") {
    const docRef = db.collection(COLLECTION_NAME).doc();
    const insertData = {
      datano: "1",
      name: "Symfo",
      email: "symfo@example.com",
    };
    docRef.set(insertData);
  }
  res.status(200);
}
