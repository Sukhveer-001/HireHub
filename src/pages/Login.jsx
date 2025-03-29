import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  let emailValue = "abc@icd.in";
  let passwordValue = "123456";
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let errorMessage = "";
    if (email === emailValue && password === passwordValue) {
      // Clear error message
      setError("");
      // Store authenticated status
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      errorMessage = "Invalid email or password";
    }
    if (errorMessage) {
      setError(errorMessage);
    }
  };

  const handleOut = () => {
    // Clear authentication status
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    // Navigate to login page
    navigate("/login");
  };
const goBack = () => {
    navigate("/");
  }
  return (
    <>
      <button className="backBtn" onClick={goBack}>
        <i className="fa-solid fa-arrow-left">Back</i>
      </button>
      <div>
        {isAuthenticated ? (
          <div className="loggedIn commonContainer">
            <h1>Welcome</h1>
            <p>You are logged in</p>
            <button className="logoutBtn" onClick={handleOut}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="loginForm commonContainer">
              <label className="inputLabel">Email</label>
              <input
                type="email"
                value={email}
                className="inputField"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="inputLabel">Password</label>
              <input
                type="password"
                value={password}
                className="inputField"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}

              <button type="submit" className="submitBtn">
                Login
              </button>
              <button className="forgotBtn">Forgot password</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Login;
