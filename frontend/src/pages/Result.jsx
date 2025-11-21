import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ResultCard from "../components/ResultCard";

export default function Result() {
  const raw = localStorage.getItem("resumeAnalysis");
  const data = raw ? JSON.parse(raw) : null;

  if (!data) {
    return (
      <Container sx={{ mt: 6, textAlign: "center" }}>
        <Typography variant="h6">No analysis found. Please upload a resume first.</Typography>
      </Container>
    );
  }

  // Normalize data fields (backend should provide these keys)
  const score = data.score ?? 0;
  const skills = Array.isArray(data.skills) ? data.skills.join(", ") : data.skills ?? "N/A";
  const suggestions = data.suggestions ?? "N/A";

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" gutterBottom>Resume Analysis</Typography>

      <Box sx={{ mt: 2 }}>
        <ResultCard title="Score" value={score} />
        <ResultCard title="Skills" value={skills} />
        <ResultCard title="Suggestions" value={suggestions} />
      </Box>
    </Container>
  );
}
