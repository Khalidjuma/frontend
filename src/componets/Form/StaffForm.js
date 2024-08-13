import React, { useState } from 'react';
import axios from 'axios';

// Enum values for StaffType
const STAFF_TYPES = ['Leacture', 'HOD', 'Dean'];

const StaffForm = () => {
    const [userRequest, setUserRequest] = useState({
        fullName: '',
        status: '',
        email: '',
        password: '',
        phoneNumber: '',
        username: ''
    });

    const [staffRequest, setStaffRequest] = useState({
        staffType: '',
        depertment: '',
        possition: '',
        officeNumber: ''
    });

    const [imageFile, setImageFile] = useState(null);

    const handleUserRequestChange = (e) => {
        setUserRequest({
            ...userRequest,
            [e.target.name]: e.target.value
        });
    };

    const handleStaffRequestChange = (e) => {
        setStaffRequest({
            ...staffRequest,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('userRequest', new Blob([JSON.stringify(userRequest)], { type: 'application/json' }));
        formData.append('staffRequest', new Blob([JSON.stringify(staffRequest)], { type: 'application/json' }));
        formData.append('imageFile', imageFile);

        try {
            const response = await axios.post('http://localhost:8080/staff', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                alert('Staff created successfully!');
            }
        } catch (error) {
            console.error('Error creating staff:', error);
            alert('Failed to create staff.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Staff</h2>
            {/* User Request Fields */}
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullName" value={userRequest.fullName} onChange={handleUserRequestChange} required />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" name="status" value={userRequest.status} onChange={handleUserRequestChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={userRequest.email} onChange={handleUserRequestChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={userRequest.password} onChange={handleUserRequestChange} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" name="phoneNumber" value={userRequest.phoneNumber} onChange={handleUserRequestChange} required />
            </div>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={userRequest.username} onChange={handleUserRequestChange} required />
            </div>

            {/* Staff Request Fields */}
            <div>
                <label>Staff Type:</label>
                <select name="staffType" value={staffRequest.staffType} onChange={handleStaffRequestChange} required>
                    <option value="">Select Staff Type</option>
                    {STAFF_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Department:</label>
                <input type="text" name="depertment" value={staffRequest.depertment} onChange={handleStaffRequestChange} required />
            </div>
            <div>
                <label>Position:</label>
                <input type="text" name="possition" value={staffRequest.possition} onChange={handleStaffRequestChange} required />
            </div>
            <div>
                <label>Office Number:</label>
                <input type="text" name="officeNumber" value={staffRequest.officeNumber} onChange={handleStaffRequestChange} required />
            </div>

            {/* Image File Upload */}
            <div>
                <label>Profile Image:</label>
                <input type="file" name="imageFile" onChange={handleImageChange} required />
            </div>

            <button type="submit">Create Staff</button>
        </form>
    );
};

export default StaffForm;
