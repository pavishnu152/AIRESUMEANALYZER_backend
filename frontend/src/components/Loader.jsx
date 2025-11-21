import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

export default function Loader({ text = "Analyzing resume..." }) {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0,0,0,0.35)",
        zIndex: 2000,
      }}
    >
      <CircularProgress size={64} />
      <Typography sx={{ mt: 2, color: "#fff" }}>{text}</Typography>
    </Box>
  );
}
