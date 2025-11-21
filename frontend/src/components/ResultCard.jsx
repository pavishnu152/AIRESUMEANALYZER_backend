import React from "react";
import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

export default function ResultCard({ title, value }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>{title}</Typography>

        {title === "Score" ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <LinearProgress variant="determinate" value={Number(value) || 0} sx={{ height: 12, borderRadius: 6 }} />
            </Box>
            <Typography variant="h6" sx={{ minWidth: 48, textAlign: "right" }}>{value || 0}%</Typography>
          </Box>
        ) : (
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>{value}</Typography>
        )}
      </CardContent>
    </Card>
  );
}
