import React from 'react'
import{ Link} from 'react-router'

function Navbar() {
  return (
        <nav>
              <Link to="/" className="routeLink">Home</Link>
              <Link to="/login" className="routeLink">Login</Link>
              <Link to="/register" className="routeLink">Register</Link>
      <Link to="/dashboard" className="routeLink">Dashboard</Link>
      <Link to="/profile" className="routeLink">Profile</Link>
      <Link to="/admindashboard" className="routeLink">Admin Dashboard</Link>

    </nav>
  )
}

export default Navbar