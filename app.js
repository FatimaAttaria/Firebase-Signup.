
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyA8trL6b1gCtXZv0XrzxsAlqNTXAaCyKsI",
    authDomain: "neww-3e030.firebaseapp.com",
    projectId: "neww-3e030",
    storageBucket: "neww-3e030.firebasestorage.app",
    messagingSenderId: "1076357371440",
    appId: "1:1076357371440:web:3c865b2a010d7a0920fff5",
    measurementId: "G-3GR06P6C3T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

let sbtn = document.getElementById('sbtn')
sbtn.addEventListener('click', signup)


function signup(){
    let getEmail = document.getElementById('semail')
    let getPass = document.getElementById('spass')
    
    createUserWithEmailAndPassword(auth, getEmail.value, getPass.value)
    .then((userCredential) => {
   
      const user = userCredential.user;
      alert(user)
        alert("successfully signup")
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
        alert(errorCode, errorMessage)
        alert("not login")
    });
}
