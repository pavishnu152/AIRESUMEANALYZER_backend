import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 8 }}>
      <Typography variant="h3" gutterBottom>AI Resume Analyzer</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        Upload your resume and get instant AI-powered feedback: skills extraction, match score and suggestions to improve.
      </Typography>
      <Button variant="contained" size="large" component={Link} to="/upload">Upload Resume</Button>
    </Container>
  );
}
