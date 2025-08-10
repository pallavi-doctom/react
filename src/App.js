import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <Routes>       
      {/* Redirect from / to /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Home page */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
