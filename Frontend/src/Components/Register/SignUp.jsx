import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import italyImage from '../../assets/italy.jpg'; // استبدل بالمسار الصحيح
import axios from 'axios'
import { toast } from 'react-toastify';
const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;



const SignUp = () => {




  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

  const submitForm = async () => {
    try {
        const { data } = await axios.post(` ${apiUrl}/SignUp`, {
            Name,
            Email,
            Password,
        });

        if (data.message === "تم ارسال الطلب بنجاح يرجى انتظار ارسال كلمة السر على الايميل الخاص بك") {
            console.log("user signup success");
            toast.success(data.message);
        }
    } catch (error) {
        console.log(error.response);

        let errorMessage = "حدث خطأ غير متوقع!"; // رسالة افتراضية

        if (error.response && error.response.data && error.response.data.message) {
            switch (error.response.data.message) {
                case '"Email" must be a valid email':
                    errorMessage = "يجب إدخال بريد إلكتروني صالح!";
                    break;
                case 'User Already Exist':
                    errorMessage = "المستخدم موجود بالفعل!";
                    break;
                case '"Email" is not allowed to be empty':
                    errorMessage = "البريد الإلكتروني مطلوب!";
                    break;
                case '"Name" is not allowed to be empty':
                    errorMessage = "الاسم مطلوب!";
                    break;
                case '"Name" length must be at least 3 characters long':
                    errorMessage = "يجب أن يحتوي الاسم على 3 أحرف على الأقل!";
                    break;
                default:
                    errorMessage = error.response.data.message; // الاحتفاظ بالرسالة الأصلية إذا لم تكن ضمن الحالات المعروفة
            }
        }

        toast.error(errorMessage);
    }
};



  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-gray-100"
      style={{
        backgroundImage: `url(${italyImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* طبقة شفافة فوق الخلفية */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* محتوى النموذج */}
      <div className="relative w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">تأشيرة الدراسة لإيطاليا</h2>

        <div className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right">
              الاسم الكامل
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e)=> setName(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right">
              عنوان البريد الإلكتروني
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-right"
            />
          </div>

          <div>
            <button
            onClick={submitForm}
              className="w-full rounded-md bg-main px-4 py-2 text-white font-semibold shadow hover:bg-hover focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              التسجيل
            </button>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            هل لديك حساب؟{' '}
            <Link to="/login" className="font-semibold text-main hover:text-hover">
              سجل دخولك هنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
