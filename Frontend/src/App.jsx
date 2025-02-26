import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LogIn from './Components/Register/LogIn';
import SignUp from './Components/Register/SignUp';
import ResetPassword from './Components/Register/ResetPassword';
import Index from './Components/Index/Index';
import Dashboard from './Components/Dashboard/Dashboard';
import SetData from './Components/Dashboard/SetData';
import ItalyStudyGuide from './Components/Index/ItalyStudyGuide';
import Test from './Components/Index/Test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FolderTwo from './Components/Index/FolderTwo';
const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.opacity = "0"; // إخفاء الصفحة
        setTimeout(() => (document.body.style.opacity = "1"), 3000); // إعادة إظهار بعد 3 ثوانٍ
      }
    };

    const preventScreenshot = (event) => {
      if (event.key === "PrintScreen") {
        event.preventDefault();
        alert("لقطة الشاشة معطلة لهذا الموقع!");
      }
    };

    const preventRightClick = (event) => {
      event.preventDefault();
    };

    // إضافة المستمعات
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("keydown", preventScreenshot);
    document.addEventListener("contextmenu", preventRightClick);

    // تنبيه خاص بأجهزة Android عند محاولة لقطة الشاشة
    if (navigator.userAgent.match(/Android/i)) {
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          alert("لا يمكنك التقاط لقطة شاشة!");
        }
      });
    }

    // تنظيف المستمعات عند تفريغ المكون
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("keydown", preventScreenshot);
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);
  return (
    <BrowserRouter>
   <ToastContainer />
    <Routes>
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Index" element={<Index />} />
      <Route 
          path="/Dashboard" 
          element={user && user.Email === "a@a.com" ? <Dashboard /> : <Navigate to="/LogIn" />} 
        />

<Route 
          path="/setData/:email" 
          element={user && user.Email === "a@a.com" ? <SetData /> : <Navigate to="/LogIn" />} 
        />
      <Route path="/SetData" element= {user ? <SetData /> :  <Navigate to="/Login" /> }/>
      <Route path="/ItalyStudyGuide" element={ user ? <ItalyStudyGuide/> :  <Navigate to="/Login" /> }/>
      <Route path="/FolderTwo" element={ user ? <FolderTwo/> :  <Navigate to="/Login" /> }/>
      <Route path="/Test" element={<Test />} />


    
    
    </Routes>
  </BrowserRouter>
  )
}

export default App