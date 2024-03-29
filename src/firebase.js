import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_DISCOUNTS_API_KEY,
    authDomain: process.env.REACT_APP_DISCOUNTS_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DISCOUNTS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_DISCOUNTS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_DISCOUNTS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_DISCOUNTS_APP_ID,
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
export const db = getFirestore(app);
