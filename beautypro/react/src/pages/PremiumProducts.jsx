
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PremiumProducts.css";

function PremiumProducts() {
  const navigate = useNavigate();
  const location = useLocation();


  const initialTab = location.state?.tab || "signup";
  const [activeTab, setActiveTab] = useState(initialTab);

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  
  const handleSignup = (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      alert("This email is already registered! Please login.");
      setActiveTab("login");
      return;
    }

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signed up successfully!");
    navigate("/user-data");
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.fullName === fullName &&
        u.email === email &&
        u.password === password
    );

    if (user) {
      // multiple logged-in users ko track karna
      let loggedInUsers =
        JSON.parse(localStorage.getItem("loggedInUsers")) || [];

      const exists = loggedInUsers.find((u) => u.email === user.email);
      if (!exists) {
        loggedInUsers.push(user);
        localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
      }

      // single user bhi set hoga (current session ke liye)
      localStorage.setItem("user", JSON.stringify(user));

      setIsLoggedIn(true);
      alert(`Welcome ${user.fullName}!`);
      navigate("/user-data");
    } else {
      alert("Invalid name, email or password!");
    }
  };

  // ✅ Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setActiveTab("login");
    alert("Logged out successfully!");
  };

  return (
    <div className="premium-container">
      <h1>
        Welcome to <span className="brand">GlowUp</span>
      </h1>

      {!isLoggedIn ? (
        <>
          {/* Tabs */}
          <div className="form-tabs">
            <button
              className={activeTab === "login" ? "active" : ""}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={activeTab === "signup" ? "active" : ""}
              onClick={() => setActiveTab("signup")}
            >
              Signup
            </button>
          </div>

          {/* Forms */}
          <div className="form-container">
            {activeTab === "login" ? (
              <form className="auth-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            ) : (
              <form className="auth-form" onSubmit={handleSignup}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Signup</button>
              </form>
            )}
          </div>
        </>
      ) : (
        <div className="logged-in">
          <h2>You are logged in!</h2>
          <button
            style={{ color: "white" }}
            onClick={handleLogout}
            className="logout-btn"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default PremiumProducts;
