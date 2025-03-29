import React from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return (
    <div className="homeContainer">
      {/* Navbar */}
      <nav className="homeNav">
        <a href="/" className="navLogo">
          HireHub
        </a>

        <div className="navLinks">
          {isAuthenticated ? (
            <>
              {/* Show Dashboard if logged in */}
              <a href="/dashboard" className="navLink">
                Dashboard
              </a>
              <a
                href="/"
                className="navLink"
                onClick={() => {
                  localStorage.removeItem("isAuthenticated");
                  navigate("/"); // Redirect to Home after logout
                }}
              >
                Logout
              </a>
            </>
          ) : (
            <>
              {/* Show Login/Register if not logged in */}
              <a href="/login" className="navLink">
                Login
              </a>
              <a href="/register" className="navLink">
                Register
              </a>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="heroSection">
        <h1 className="heroTitle">Your Gateway to Career Success!</h1>
        <p className="heroDesc">
          Join now and explore exciting placement opportunities with ease.
        </p>
        <div className="btnContainer">
          {isAuthenticated ? (
            <button className="ctaBtn" onClick={() => navigate("/dashboard")}>
              Go to Dashboard
            </button>
          ) : (
            <>
              <button className="ctaBtn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button
                className="ctaBtn secondaryBtn"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="featuresSection">
        <div className="featureCard">
          <h3 className="featureTitle">📢 Placement Updates</h3>
          <p className="featureDesc">
            Stay informed about the latest job opportunities.
          </p>
        </div>

        <div className="featureCard">
          <h3 className="featureTitle">📝 Profile Management</h3>
          <p className="featureDesc">
            Keep your profile updated for recruiters.
          </p>
        </div>

        <div className="featureCard">
          <h3 className="featureTitle">⚙️ Admin Controls</h3>
          <p className="featureDesc">
            Admins can manage placements and student profiles effectively.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="homeFooter">
        <p>&copy; 2025 HireHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
