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
      <h1>WELCOME TO ACADEMATES!</h1>
      <p>
        Academates is a dynamic online platform designed to connect students
        from various educational backgrounds, fostering a supportive community
        for collaborative learning and academic success. By leveraging advanced
        networking features, Academates empowers users to find like-minded study
        partners, engage in knowledge exchange, and enhance their educational
        journey.
      </p>

      <button onClick={handleSignInWithGoogle}>
        <i className="fa fa-google fa-fw"></i>
        Sign-In with Google
      </button>
    </div>
  );
};

export default Auth;
