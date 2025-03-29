import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
const goBack = () => {
  navigate("/");
};
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.password || !formData.confirmPassword){
      setError("All fields are required!");
      return;
    }
    if(formData.password.length < 6){
   setError("Password must be at least 6 characters long!");
      return;
    }
    if(formData.password !== formData.confirmPassword){
     setError("Passwords do not match!");
      return;
    }
    setError("");
    console.log("Form Submitted", formData);
    navigate("/login");
  };
  return (
    <>
      <div className="registerContainer">
        <button className="backBtn" onClick={goBack}>
          <i className="fa-solid fa-arrow-left">Back</i>
        </button>
        <div className="registerForm">
          <h1 className="formTitleReg">Register to HireHub</h1>
          <form onSubmit={handleSubmit}>
            <label className="inputLabel">Name</label>
            <input
              type="text"
              name="name"
              className="inputField"
              value={formData.name}
              onChange={handleChange}
              
            />
            <label className="inputLabel">Email</label>
            <input
              type="email"
              name="email"
              className="inputField"
              value={formData.email}
              onChange={handleChange}
              
            />
            <label className="inputLabel">Password</label>
            <input
              type="password"
              name="password"
              className="inputField"
              value={formData.password}
              onChange={handleChange}
              
            />
            <label className="inputLabel">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="inputField"
              value={formData.confirmPassword}
              onChange={handleChange}
              
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="submitBtn" >
              Register
            </button>
          </form>
          <p className="switchLink">
            Already have an account?{" "}
            <a href="/login" className="forgotBtn">
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
