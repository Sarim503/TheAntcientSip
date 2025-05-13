import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config"; 

const provider = new GoogleAuthProvider();

export const googleSignIn = () => {
  return signInWithPopup(auth, provider); // returns a Promise
};
