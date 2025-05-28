"use client"
import React from 'react';
import { googleSignIn } from '../../firebase/GoogleLogin';
import { useAuth } from "../../firebase/AuthContext";

const Login = () => {
  const { user, login } = useAuth(); 

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();  
      const user = result.user;  

      login(user);  

      console.log("User signed in:", user);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  if (user) {
 
    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-center text-2xl">Welcome, {user.displayName}</h2>
        <img src={user.photoURL} alt="User photo" className="w-24 h-24 rounded-full mx-auto" />
      </div>
    );
  }


  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-center text-2xl">Login</h2>
      <div className="mt-4">
        <button onClick={handleGoogleLogin} className="w-full bg-blue-500 text-white py-2 rounded-lg">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
