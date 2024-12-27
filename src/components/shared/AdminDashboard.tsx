import { useEffect, useState } from "react";
import { db } from "../../../firebase-config"; // Import your Firebase config
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions

const AdminDashboard = () => {
  const [formData, setFormData] = useState<any[]>([]); // State to store form data
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    // Fetch the data from Firestore
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "SkillupForm"));
        const data: any[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setFormData(data); // Set the form data in state
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Submitted Forms</h2>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Qualification</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((form) => (
                <tr key={form.id}>
                  <td>{form.username}</td>
                  <td>{form.email}</td>
                  <td>{form.phonenumber}</td>
                  <td>{form.qualification}</td>
                  <td>{form.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
