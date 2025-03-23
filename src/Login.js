import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Take input values dynamically
    const enteredEmail = email;  
    const enteredPassword = password;  
  
    if (enteredEmail && enteredPassword) {  
      alert(`Login Successful!\nEmail: ${enteredEmail}\nPassword: ${enteredPassword}`);
      onLogin(); // Switch to Dashboard
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="login">
      <header className="login-header">
        <h1>Welcome to AI Resume Scanner</h1>
      </header>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      <footer className="login-footer">
        <p>&copy; 2023 AI Resume Scanner. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
