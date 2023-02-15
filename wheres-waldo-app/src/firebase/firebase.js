// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVCQhJlgk0-KREIz5_3KQnmZRnfBWyG2M",
  authDomain: "wheres-waldo-645a5.firebaseapp.com",
  projectId: "wheres-waldo-645a5",
  storageBucket: "wheres-waldo-645a5.appspot.com",
  messagingSenderId: "258016858885",
  appId: "1:258016858885:web:d2690e2dba41b4af2ddd6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addScore = async (time, name) => {
  try {
    await setDoc(doc(db, "scores"), {
      name: name,
      score: time,
    });
  } catch (error) {
    console.log(error);
  }
};

export const displayScores = async () => {
  const q = query(collection(db, "scores"));

  let scores = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    scores = [...scores, { name: doc.data().name, score: doc.data().time }];
  });
  return scores;
};
