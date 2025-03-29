import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="homeContainer">
      <nav className="homeNav">
        <a href="/" className="navLogo">
          HireHub
        </a>
        <div className="navLinks">
          <a href="/login" className="navLink">
            Login
          </a>
          <a href="/register" className="navLink">
            Register
          </a>
        </div>
      </nav>

      <div className="heroSection">
        <h1 className="heroTitle">Your Gateway to Career Success!</h1>
        <p className="heroDesc">
          Join now and explore exciting placement opportunities with ease.
        </p>
        <div className="btnContainer">
          <button
            className="ctaBtn"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </button>
          <button
            className="ctaBtn secondaryBtn"
            onClick={() => (window.location.href = "/register")}
          >
            Register
          </button>
        </div>
      </div>

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

      <footer className="homeFooter">
        <p>&copy; 2025 HireHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
