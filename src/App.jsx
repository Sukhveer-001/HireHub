import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/";
  return (
    <>
      {/* <h1 className="mainHeading">HireHub</h1> */}
      {/* <Navbar /> */}
      {location.pathname !== "/" && <h1 className="mainHeading">HireHub</h1>}
      {!isAuthPage && (
        <>
          <Navbar />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admindashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
