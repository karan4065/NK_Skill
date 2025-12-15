import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Enroll from "./pages/Enroll";
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/adminlogin";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
  
        <Route path="/enroll/:serviceId" element={<Enroll />} />

      </Routes>
    </div>
  );
};

export default App;
