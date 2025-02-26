import axios from "axios";
import  { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  // بيانات الطلبات (يمكنك استبدالها ببيانات من API أو قاعدة بيانات)
  const [users, setUsers] = useState([]); // تعيين القيمة الافتراضية كمصفوفة فارغة
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  useEffect(() => {
    async function sendReq() {
      try {
        const { data } = await axios.get("http://localhost:4000/ShowRequests");
        console.log(data.Users);
        setUsers(data.Users);
      } catch (error) {
        console.error("Error fetching profile Info:", error);
      }
    }
    sendReq();
  }, []);

  async function deleteUser(id) {
    try {
      const { data } = await axios.delete(
        `http://localhost:4000/DeleteRequests/${id}`
      );

      if (data.success) {
        // تحديث المستخدمين بعد الحذف
        const updatedUsers = users.filter((user) => user._id !== id); // تأكد من استخدام _id في المقارنة
        setUsers(updatedUsers); // تحديث الـ state بالمستخدمين الجدد بعد الحذف
        toast.success("تم حذف طلب المستخدم بنجاح");
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response.data.message);
    }
  }

  async function signout(id) {
    try {
      const { data } = await axios.post(`http://localhost:4000/SignOut/${id}`);

      if (data.message == "تم تسجيل الخروج") {
        localStorage.removeItem("user");
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* قائمة الـ Menu */}
      <div className="bg-main text-white py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex justify-between">
            <div className="flex items-center space-x-6">
              <h1
                href="/"
                className="text-lg font-semibold text-white hover:text-black"
              >
                <FaHome size={24} className="inline-block mr-2" />
                <Link
                  to="/ItalyStudyGuide"
                  className="font-semibold text-white hover:text-black"
                >
                  الرئيسية
                </Link>
              </h1>
            </div>
            <div className="flex items-center">
              <button
                className="text-lg font-semibold hover:text-black"
                onClick={() => signout(user._id)}
              >
                تسجيل الخروج
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-right">
          لوحة تحكم المستخدمين
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-center border-b">الإجراءات</th>
                <th className="py-3 px-6 text-left border-b">وقت الطلب</th>
                <th className="py-3 px-6 text-left border-b">
                  البريد الإلكتروني
                </th>
                <th className="py-3 px-6 text-left border-b">اسم المستخدم</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-3 px-6 border-b text-center space-x-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Link to={`/setData/${user.Email}`}>
                        <FaEdit size={18} />
                      </Link>
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => deleteUser(user._id)}
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                  <td className="py-3 px-6 border-b">
                    {new Date(user.createdAt).toLocaleString("ar-EG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}
                  </td>

                  <td className="py-3 px-6 border-b">{user.Email}</td>
                  <td className="py-3 px-6 border-b">{user.Name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
