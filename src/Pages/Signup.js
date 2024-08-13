import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignUp() {
    const navigate = useNavigate();

    const [userRequest, setUserRequest] = useState({
        userId: 0,
        username: '',
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        profileImage: '',
        role: 'Student',
        status: 'Active',
    });
    const [image, setImage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserRequest(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
    
        formData.append('username', userRequest.username);
        formData.append('fullName', userRequest.fullName);
        formData.append('phoneNumber', userRequest.phoneNumber);
        formData.append('email', userRequest.email);
        formData.append('password', userRequest.password);  // Ensure this is not empty
        formData.append('profileImage', userRequest.profileImage); // If applicable
        formData.append('role', userRequest.role);
        formData.append('status', userRequest.status);
    
        if (image) {
            formData.append('imageFile', image);
        }
    
        try {
            const response = await axios.post('http://localhost:8080/api/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            if (response.status === 201) {
                navigate('/login');
            } else {
                throw new Error('Failed to register user');
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 w-75">
                <h1 className="text-center">SUZA APPOITMENT SYSTEM</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <br></br>
                        <h4>User Information</h4>
                        <br></br>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={userRequest.username}
                                    onChange={handleInputChange}
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    name="fullName"
                                    value={userRequest.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={userRequest.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={userRequest.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={userRequest.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                    <label htmlFor="imageFile" className="form-label">Profile Image</label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                        name="imageFile"
                                        className="form-control"
                                        onChange={handleImageChange}
                                    />
                                </div>

                           
                        </div>
                    </div>

                   
                    <div className="text-left">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
