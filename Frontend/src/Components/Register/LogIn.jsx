import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import italyImage from "../../assets/italy2.jpg"; // استبدل بالمسار الصحيح للصورة
import axios from "axios";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
const extraApi = import.meta.env.BACKAPI;

const LogIn = ({ setUser }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();


  const submitForm = async () => {
    try {
      const { data } = await axios.post(` ${apiUrl}/${extraApi}/Login`, {
        Email,
        Password,
      });

      if (data.message === "login success") {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(` ${data.user.Name} اهلا `);
        setUser(JSON.parse(localStorage.getItem("user")));
        navigate("/ItalyStudyGuide");
      }
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${italyImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          تسجيل الدخول
        </h2>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              عنوان البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
            />
          </div>

          <div>
            <button
              onClick={submitForm}
              className="w-full rounded-md bg-main px-4 py-2 text-white font-semibold shadow hover:bg-hover focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              تسجيل الدخول
            </button>
          </div>
        </div>

        {/* رابط إعادة تعيين كلمة المرور */}
        <div className="mt-4 text-center">
          <Link
            to="/reset-password"
            className="text-sm text-main font-semibold hover:text-hover"
          >
            هل نسيت كلمة المرور؟
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            لا تملك حساب؟{" "}
            <Link
              to="/signup"
              className="font-semibold text-main hover:text-hover"
            >
              اشترك هنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
