import React from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="dashboardContainer">
      <h1 className="dashboardTitle">Admin Dashboard </h1>
      <div className="dashboardContent">
        <h2 className="sectionTitle">Manage Placements</h2>
        <button className="actionBtn">Add Placement</button>
        <button className="actionBtn">Edit Placement</button>
        <button className="actionBtn">Delete Placement</button>

        <h2 className="sectionTitle2">Manage Students</h2>
        <button className="actionBtn">View Students</button>
        <button className="actionBtn">Add Student</button>
      </div>
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
