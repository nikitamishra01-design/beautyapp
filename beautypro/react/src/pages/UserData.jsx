
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserData.css";

function UserData() {
  const navigate = useNavigate();

  
  const signupUsers = JSON.parse(localStorage.getItem("users")) || [];

  
  const loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || [];

  if (signupUsers.length === 0 && loggedInUsers.length === 0) {
    return (
      <div className="no-data">
        <h2>No user data available.</h2>
        <button onClick={() => navigate("/premium-products")}>
          Go to Signup/Login
        </button>
      </div>
    );
  }

  return (
    <div className="userdata-container">
      {/* Signup Users */}
      <div className="user-section">
        <h2>Signup Users</h2>
        {signupUsers.length === 0 && <p>No signup data</p>}
        {signupUsers.map((user, index) => (
          <div key={index} className="user-card">
            {Object.entries(user).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        ))}
      </div>

      
      <div className="user-section">
        <h2>Logged In Users</h2>
        {loggedInUsers.length === 0 && <p>No login data</p>}
        {loggedInUsers.map((user, index) => (
          <div key={index} className="user-card">
            {Object.entries(user).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="bottom-button">
        <button
          onClick={() =>
            navigate("/premium-products", { state: { tab: "login" } })
          }
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}

export default UserData;
