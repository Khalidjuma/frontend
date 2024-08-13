import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateAppointmentForm = () => {
    const [staffList, setStaffList] = useState([]);
    const [appointmentData, setAppointmentData] = useState({
        staffId: '',
        appointmentDate: '',
        appointmentTime: '',
        appointmentReason: '',
        status: 'Pending', // Automatically set to Pending
    });

    // Fetch the staff list when the component mounts
    useEffect(() => {
        axios.get('http://localhost:8080/staff')
            .then(response => {
                setStaffList(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the staff list!', error);
            });
    }, []);

    const handleChange = (e) => {
        setAppointmentData({
            ...appointmentData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/appointments', appointmentData)
            .then(response => {
                console.log('Appointment created successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error creating the appointment!', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="staffId">Select Staff:</label>
                <select
                    id="staffId"
                    name="staffId"
                    value={appointmentData.staffId}
                    onChange={handleChange}
                    required
                >
                    <option value="">--Select Staff--</option>
                    {staffList.map(staff => (
                        <option key={staff.staffId} value={staff.staffId}>
                            {staff.possition} - {staff.depertment}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="appointmentDate">Date:</label>
                <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={appointmentData.appointmentDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="appointmentTime">Time:</label>
                <input
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={appointmentData.appointmentTime}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="appointmentReason">Reason:</label>
                <input
                    type="text"
                    id="appointmentReason"
                    name="appointmentReason"
                    value={appointmentData.appointmentReason}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Create Appointment</button>
        </form>
    );
};

export default CreateAppointmentForm;
