import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/home/home";
import Auth from "./components/auth/auth";
import { auth } from "./components/firebase/firebase.js";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";
import Grouproom from "./components/groupRoom/groupRoom";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();

  const cookies = new Cookies();

  const signUserOut = async () => {
    try {
      await signOut(auth);
      cookies.remove("auth-token");
      setIsAuth(false);
      setGroup(null);
      localStorage.removeItem("room");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={signUserOut}>Sign Out</button>
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/home/" element={<Home />} />
        <Route exact path="/home/:grade/:subject" element={<Grouproom />} />
      </Routes>
    </div>
  );
}

export default App;
