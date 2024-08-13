import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const StaffList = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('http://localhost:8080/staff');
        setStaff(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching staff data');
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Staff List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Staff Type</th>
            <th>Position</th>
            <th>Department</th>
            <th>Office Number</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.staffId}>
              <td>{member.staffId}</td>
              <td>{member.staffType}</td>
              <td>{member.possition}</td>
              <td>{member.depertment}</td>
              <td>{member.officeNumber}</td>
              <td>{member.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffList;
