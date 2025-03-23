import React from "react";
import { useState } from "react";
import Login from "./Login.js";
import Dashboard from "./Dashboard.js";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className="app-container">
      {currentPage === "login" ? (
        <Login onLogin={() => setCurrentPage("dashboard")} />
      ) : (
        <Dashboard onLogout={() => setCurrentPage("login")} />
      )}
    </div>
  );
}

export default App;
