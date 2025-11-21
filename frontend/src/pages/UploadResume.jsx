import React, { useState } from "react";
import { Box, Button, Typography, Container, Paper } from "@mui/material";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please select a resume file (PDF/DOCX).");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Server returned ${res.status}`);

      const data = await res.json();
      localStorage.setItem("resumeAnalysis", JSON.stringify(data));
      setLoading(false);
      navigate("/result");
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Failed to analyze resume. Make sure backend is running at http://127.0.0.1:8000");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      {loading && <Loader />}
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Upload your Resume</Typography>
        <Typography variant="body2" color="text.secondary">Supported: PDF, DOC, DOCX</Typography>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginTop: 16 }}
        />

        <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
          <Button variant="contained" onClick={handleAnalyze}>Analyze Resume</Button>
          <Button variant="outlined" onClick={() => setFile(null)}>Clear</Button>
        </Box>
      </Paper>
    </Container>
  );
}
