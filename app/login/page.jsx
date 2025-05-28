"use client";
import React from "react";
import { googleSignIn } from "../../firebase/GoogleLogin";
import { useAuth } from "../../firebase/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../../firebase/config"; 

const Login = () => {
  const { user, login, logout } = useAuth();
  const router = useRouter();
  console.log("user is",user)

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

const handleLogout = async () => {
  try {
    await logout(auth);
         
    localStorage.removeItem("user"); 
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};



  if (user) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Ancient Sip!
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Hi{" "}
            <span className="font-semibold text-black">
              {user.display_name}
            </span>
            , we're glad to see you 👋
          </p>
          <p className="text-sm text-gray-500">
            You're now logged in. Explore the options available to manage your
            content and settings.
          </p>
        </div>

        {/* Redirect Section */}
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Ready to explore?
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Click below to go to the homepage and start your journey.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Go to Homepage
          </Link>

   

          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="bg-red-800 hover:bg-red-500 text-gray-100 font-semibold py-1 px-4 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-center text-2xl">Login</h2>
      <div className="mt-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
