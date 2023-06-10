import "./auth.scss";
import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase/firebase.js";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const cookies = new Cookies();
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (error) {
      console.log("Error signing in with Google:", error);
      alert(
        "An error occurred while signing in with Google. Please try again later."
      );
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/home");
    }
  }, [isAuth, navigate]);

  return (
    <div className="auth">
      <h1>Sign Up Page</h1>
      <button onClick={handleSignInWithGoogle}>Sign-In with Google</button>
    </div>
  );
};

export default Auth;
