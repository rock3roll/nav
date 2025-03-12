import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FormPage from "./Form";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <header className="top-header">
        <h1>Dashboard</h1>
      </header>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          
          <Route path="/" element={<FormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
