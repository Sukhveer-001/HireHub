import React, { useState } from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [placements, setPlacements] = useState([
    { id: 1, companyName: "Google", role: "Software Engineer", applied: false },
    { id: 2, companyName: "Microsoft", role: "Data Analyst", applied: false },
    { id: 3, companyName: "Amazon", role: "Backend Developer", applied: false },
  ]);

  const handleApply = (id) => {
    const updatedPlacements = placements.map((placement) =>
      placement.id === id
        ? { ...placement, applied: !placement.applied }
        : placement
    );
    setPlacements(updatedPlacements);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="dashboardContainer">
      <h1 className="dashboardTitle">Welcome to Your Dashboard 🎉</h1>
      <div className="dashboardContent">
        <h2 className="sectionTitle">Available Placements:</h2>
        <ul className="placementList">
          {placements.map((placement) => (
            <li key={placement.id} className="placementItem">
              <h3>{placement.companyName}</h3>
              <p>Role: {placement.role}</p>
              <button
                className={`applyBtn ${placement.applied ? "applied" : ""}`}
                onClick={() => handleApply(placement.id)}
              >
                {placement.applied ? "Unapply" : "Apply"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button className="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
