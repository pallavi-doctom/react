import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>       

        {/* Home page */}
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
