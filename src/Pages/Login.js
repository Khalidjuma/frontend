import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom toast component
const CustomToast = ({ top, bottom }) => (
  <div>
    <div>{top}</div>
    <div>{bottom}</div>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Adjust endpoint if needed
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;
      localStorage.setItem('storedRole', data.role || ''); // Set default if role is undefined
      localStorage.setItem('email', data.email || '');
      localStorage.setItem('id', data.userId || '');
      
      toast.success(<CustomToast top="Success!" bottom="Login Successful..." />);

      setTimeout(() => {
        navigate('/app'); // Redirect after successful login
      }, 2000);
    } catch (error) {
      // Handle errors based on response status or message
      if (error.response && error.response.status === 401) {
        toast.error('Invalid email or password');
      } else {
        toast.error('An error occurred. Please try again.');
      }
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.removeItem('email');
      localStorage.removeItem('storedRole');
    }
  }, [location]);

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <div className="card shadow-sm">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <div className="text-danger mb-3">{error}</div>}
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="d-grid mb-3">
                <button
                  type="button"
                  onClick={handleSignup}
                  className="btn btn-success"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="btn btn-link"
                >
                  Forgot Password?
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
