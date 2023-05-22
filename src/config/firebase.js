import { initializeApp } from "firebase/app";
import { getAdditionalUserInfo, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK-d5NKdLHH5JJcm827B32leUeIAVDF08",
  authDomain: "login-authentication-4540f.firebaseapp.com",
  projectId: "login-authentication-4540f",
  storageBucket: "login-authentication-4540f.appspot.com",
  messagingSenderId: "167760727499",
  appId: "1:167760727499:web:a930cdd2f20de713b0ba4e",
  measurementId: "G-Y3DY500SHE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const user = getAdditionalUserInfo(auth);
const provider = new GoogleAuthProvider();

export { auth, provider }