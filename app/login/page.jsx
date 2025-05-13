"use client"
import React from 'react';
import { googleSignIn } from '../../firebase/GoogleLogin';
import { useAuth } from "../../firebase/AuthContext";

const Login = () => {
  const { user, login } = useAuth();  // This will get the user object and login method from AuthContext

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();  // Calling googleSignIn from firebase auth
      const user = result.user;  // Getting user details

      login(user);  // Pass user details to AuthContext

      console.log("User signed in:", user);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  if (user) {
    // If user is logged in, show welcome message and no login button
    return (
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-center text-2xl">Welcome, {user.displayName}</h2>
        <img src={user.photoURL} alt="User photo" className="w-24 h-24 rounded-full mx-auto" />
      </div>
    );
  }

  // If user is not logged in, show login button
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
