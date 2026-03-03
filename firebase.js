// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// Senin Firebase config'in
const firebaseConfig = {
  apiKey: "AIzaSyDlNZ8FwFCwRIpBcwcL_3THqxkGBkZOvc0",
  authDomain: "buro-copy-db.firebaseapp.com",
  projectId: "buro-copy-db",
  storageBucket: "buro-copy-db.firebasestorage.app",
  messagingSenderId: "10351534107",
  appId: "1:10351534107:web:75dd81435cc2b7240598be"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);

// Servisleri export et
export const auth = getAuth(app);
export const db = getFirestore(app);
