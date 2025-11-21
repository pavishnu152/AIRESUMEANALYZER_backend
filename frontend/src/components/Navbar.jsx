import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ background: "#0b3d91" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "#fff" }}>
            AI Resume Analyzer
          </Typography>
        </Box>

        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/upload">Upload</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
