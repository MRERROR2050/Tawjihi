import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SetData = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {email} = useParams()

  useEffect(() => {
    async function sendReq() {
      const { data } = await axios.get(
        `http://localhost:3000/setPassword/${email}`,
        {
        
        }
      );
      console.log(data);
console.log(params.id);
      
      setNote(data.note);
    }
    sendReq();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 mt-44 bg-white shadow-md rounded-lg rtl">

      <h2 className="text-2xl font-bold text-center mb-4">إعداد البيانات</h2>
      
      <form onSubmit={handleSubmit}>
        {/* حقل الاسم */}
        <div className="mb-4 text-right">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
          <input
            id="name"
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-right"
            placeholder="أدخل الاسم"
            required
          />
        </div>

        {/* حقل كلمة السر */}
        <div className="mb-4 text-right">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة السر</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-right"
            placeholder="أدخل كلمة السر"
            required
          />
        </div>

        {/* زر الإرسال */}
        <div>
          <button
            type="submit"
            className="w-full bg-main text-white py-2 rounded-md hover:bg-hover"
          >
            حفظ البيانات
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetData;
