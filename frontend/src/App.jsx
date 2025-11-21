import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UploadResume from "./pages/UploadResume";
import Analyze from "./pages/Analyze";
import Result from "./pages/Result";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadResume />} />
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}
