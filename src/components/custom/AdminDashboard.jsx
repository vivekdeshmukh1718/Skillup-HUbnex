import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "SkillupForm"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setFormData(data);
    }

    fetchData();
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="text-center text-3xl mt-5 font-semibold text-green-three">
        Admin Dashboard
      </h1>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Submitted Forms</h2>
        {formData.length === 0 ? (
          <p>No data found.</p>
        ) : (
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Qualification</th>
                <th className="px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{data.username}</td>
                  <td className="border px-4 py-2">{data.email}</td>
                  <td className="border px-4 py-2">{data.phonenumber}</td>
                  <td className="border px-4 py-2">{data.qualification}</td>
                  <td className="border px-4 py-2">{data.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
