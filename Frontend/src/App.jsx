import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LogIn from "./Components/Register/LogIn";
import SignUp from "./Components/Register/SignUp";
import ResetPassword from "./Components/Register/ResetPassword";
import Dashboard from "./Components/Dashboard/Dashboard";
import SetData from "./Components/Dashboard/SetData";
import ItalyStudyGuide from "./Components/Index/ItalyStudyGuide";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FolderTwo from "./Components/Index/FolderTwo";
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

 
  

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to={"/LogIn"} />} />
        <Route
          path="/LogIn"
          element={
            user ? (
              <ItalyStudyGuide setUser={setUser} />
            ) : (
              <LogIn setUser={setUser} />
            )
          }
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
    
        <Route
          path="/Dashboard"
          element={
            user && user.Email === "mohamedmokhlessbenamor@gmail.com" ? (
              <Dashboard setUser={setUser} />
            ) : (
              <Navigate to="/LogIn" />
            )
          }
        />

        <Route
          path="/setData/:email"
          element={
            user && user.Email === "mohamedmokhlessbenamor@gmail.com" ? (
              <SetData />
            ) : (
              <Navigate to="/LogIn" />
            )
          }
        />
        <Route
          path="/SetData"
          element={user ? <SetData /> : <Navigate to="/Login" />}
        />
        <Route
          path="/ItalyStudyGuide"
          element={
            user ? (
              <ItalyStudyGuide setUser={setUser} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/FolderTwo"
          element={user ? <FolderTwo /> : <Navigate to="/Login" />}
        />
      
      </Routes>
    </BrowserRouter>
  );
};

export default App;
