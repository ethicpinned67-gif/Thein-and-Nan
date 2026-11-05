import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHvqNEPDqYCE_2W3CAKi4h5F3BIP_Mlec",
  authDomain: "wedding-rsvp-c6150.firebaseapp.com",
  databaseURL: "https://wedding-rsvp-c6150-default-rtdb.firebaseio.com",
  projectId: "wedding-rsvp-c6150",
  storageBucket: "wedding-rsvp-c6150.firebasestorage.app",
  messagingSenderId: "280336369856",
  appId: "1:280336369856:web:01dffe0361401ca04a0525",
  measurementId: "G-MCJZDT009L",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getDatabase(app);