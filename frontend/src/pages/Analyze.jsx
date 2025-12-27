// src/pages/Analyze.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Analyze() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleAnalyze(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!selectedFile || !jobDescription) {
      setError("Please upload a resume and enter job description.");
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      // Names must match backend: file + job_description
      formData.append("file", selectedFile);
      formData.append("job_description", jobDescription);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", res.status, text);
        setError(
          `Failed to analyze resume. Backend status: ${res.status}`
        );
        setLoading(false);
        return;
      }

      const data = await res.json();
      console.log("Analyze result:", data);

      // Save result for Result.jsx
      localStorage.setItem("atsResult", JSON.stringify(data));

      // Go to Result page
      navigate("/result");
    } catch (err) {
      console.error(err);
      setError(
        "Failed to analyze resume. Make sure backend is running at http://127.0.0.1:8000"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Analyze Resume</h2>

      <form onSubmit={handleAnalyze}>
        <div>
          <label>Resume File:</label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0] || null)}
          />
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>Job Description:</label>
          <textarea
            rows={5}
            style={{ width: "100%" }}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: "0.5rem" }}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>

      {error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
      )}
    </div>
  );
}
