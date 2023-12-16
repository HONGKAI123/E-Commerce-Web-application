import React from "react";
import "./UseDropdown.scss";
import { Link } from "react-router-dom";

function UserDropdown() {
  return (
    <div className="dropdown-container">
      <div className="container">
        <Link to="/login/" className="login">
          <button className="btn-signin">Sign in</button>
        </Link>
        <Link to="/register/">
          <button className="btn-register">Create Account </button>
        </Link>
      </div>
    </div>
  );
}

export default UserDropdown;
