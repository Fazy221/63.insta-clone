import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDsKyaAnVvpzJyY4X0o2KvAZ9a5OQwI0I8",
  authDomain: "insta-clone-454320.firebaseapp.com",
  projectId: "insta-clone-454320",
  storageBucket: "insta-clone-454320.firebasestorage.app",
  messagingSenderId: "35830565272",
  appId: "1:35830565272:web:1e3c29c4c9c2c8be0f83ed"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // db for data
const storage = getStorage(app); // storage for media files on google cloud

export { app, auth, firestore, storage };