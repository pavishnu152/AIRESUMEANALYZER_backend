import React, { useState } from "react";

export default function TestAnalyzer() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function handleAnalyze(e) {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!file || !jobDescription) {
      setError("Please select a resume file and enter job description.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("job_description", jobDescription);

      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        setError(`Backend error: ${res.status} - ${text}`);
        return;
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError("Network or CORS error. Check console.");
      console.error(err);
    }
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Test Analyzer (Backend Connect)</h2>

      <form onSubmit={handleAnalyze}>
        <div>
          <label>Resume File: </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0] || null)}
          />
        </div>

        <div style={{ marginTop: "0.5rem" }}>
          <label>Job Description: </label>
          <textarea
            rows={5}
            style={{ width: "100%" }}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "0.5rem" }}>
          Analyze
        </button>
      </form>

      {error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>{error}</div>
      )}

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Raw JSON from Backend</h3>
          <pre style={{ background: "#eee", padding: "0.5rem" }}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
