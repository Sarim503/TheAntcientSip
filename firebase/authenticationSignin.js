import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const googleSignIn = async () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User signed in: ", user.uid);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};
