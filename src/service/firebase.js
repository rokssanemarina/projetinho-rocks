// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9W5mCPeZ8urQiD-wAq8wcV9fClxg_f-4",
  authDomain: "projeto-guiado-27f4f.firebaseapp.com",
  databaseURL: "https://projeto-guiado-27f4f-default-rtdb.firebaseio.com",
  projectId: "projeto-guiado-27f4f",
  storageBucket: "projeto-guiado-27f4f.appspot.com",
  messagingSenderId: "1001939665575",
  appId: "1:1001939665575:web:aa7dcb54d65a72a0589182",
  databaseURL: "https://projeto-guiado-27f4f-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 const database = getDatabase()

 export {database}