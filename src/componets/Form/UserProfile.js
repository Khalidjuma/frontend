import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the user ID from localStorage
    const userId = localStorage.getItem("id");

    // If no userId is found in localStorage, set an error
    if (!userId) {
      setError("User ID not found in localStorage");
      setLoading(false);
      return;
    }

    // Fetch user data from the API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/users/${userId}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Full Name:</strong> {user.fullName}</p>
          <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Status:</strong> {user.status}</p>
          <img src={user.profileImage} alt="Profile" />
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default UserProfile;
