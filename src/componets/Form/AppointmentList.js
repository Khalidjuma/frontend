import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios.get('http://localhost:8080/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments!', error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Student Name</th>
          <th>Staff Name</th>
          <th>Appointment Time</th>
          <th>Appointment Reason</th>
          <th>Appointment Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map(appointment => (
          <tr key={appointment.appointmentId}>
            <td>{appointment.appointmentId}</td>
            <td>{appointment.student?.name}</td>
            <td>{appointment.staff?.name}</td>
            <td>{appointment.appointmentTime}</td>
            <td>{appointment.appointmentReason}</td>
            <td>{appointment.appointmentDate}</td>
            <td>{appointment.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentList;
