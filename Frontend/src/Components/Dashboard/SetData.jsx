import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import italyImage from "../../assets/italy2.jpg"; 

const SetData = () => {
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { email } = useParams();

  useEffect(() => {
    setEmailInput(email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const { data } = await axios.post(
      `http://localhost:4000/set-user-password`,
      {
        adminMail: user.Email,
        email: emailInput,
        password,
      }
    );

    console.log("sent");

    if (!data.error) {
      toast.success("تم انشاء كلمة السر بنجاح");
      navigate("/Dashboard");
    } else {
      toast.error("حدث خطأ، يرجى إعادة المحاولة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 rtl">
      {/* زر العودة */}
      <span
        className="text-main border-2 border-main py-2 px-4 rounded-md transition duration-200 hover:bg-main hover:text-white cursor-pointer inline-block mb-4"
        onClick={() => navigate(-1)}
      >
        &larr; الرجوع
      </span>
  
      {/* العنوان */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">إعداد البيانات</h2>
  
      <form onSubmit={handleSubmit}>
        {/* البريد الإلكتروني */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-right focus:ring-main focus:border-main"
            placeholder="أدخل بريدك الإلكتروني"
            required
          />
        </div>
  
        {/* كلمة السر */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-right">
            كلمة السر
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-right focus:ring-main focus:border-main"
            placeholder="••••••••"
            required
          />
        </div>
  
        {/* زر الحفظ */}
        <button
          type="submit"
          className="w-full bg-main text-white py-2 rounded-md transition duration-200 hover:bg-hover shadow-md"
        >
          حفظ البيانات
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default SetData;
