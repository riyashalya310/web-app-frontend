import { useEffect, useState } from "react";
import "./index.css";
import Cookies from "js-cookie";

const AdminEditDetails = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const [error, setError] = useState("");

  const apiCallStudents = async () => {
    const api = "https://web-app-2ffv.onrender.com/students-list";
    const options = {
      method: "GET",
      headers: {
        jwtToken: Cookies.get("jwt-token"),
      },
    };

    const response = await fetch(api, options);
    const data = await response.json();
    if (response.ok) {
      setStudentDetails(data);
      setError("")
    } else {
      setError("Error while fetching Student Details");
    }
  };

  useEffect(apiCallStudents(),[]);

  return (
    <table>
        {error}
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Marks</th>
      </tr>
      {studentDetails.map((student) => (
        <tr>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.marks}</td>
          
        </tr>
      ))}
    </table>
  );
};

export default AdminEditDetails;
