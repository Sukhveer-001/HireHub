import React, { useEffect, useState } from "react";
import "../styles/profile.css"; // We'll create this now
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  // Fetch user data from localStorage or API later
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleEditProfile = () => {
    navigate("/edit-profile"); // Later, we’ll build the edit page
  };

  return (
    <div className="profileContainer">
      <h1 className="profileTitle">Your Profile 📝</h1>
      <div className="profileCard">
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <button className="editBtn" onClick={handleEditProfile}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
