import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard'; // The Student Dashboard
import MentorDashboard from './pages/MentorDashboard'; // New
import ParentDashboard from './pages/ParentDashboard'; // New

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        
        {/* The 3 Unique Dashboards */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mentor-dashboard" element={<MentorDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        
      </Routes>
    </Router>
  );
}