import React, { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";

export default function Result() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("atsResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  function downloadAnalysisJson() {
    if (!result) return;

    const jsonString = JSON.stringify(result, null, 2);

    const blob = new Blob([jsonString], {
      type: "application/json;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = (result.filename || "resume_analysis") + ".json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (!result) {
    return <div style={{ padding: "1rem" }}>No result available.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>ATS Analysis Result</h1>

      <ResultCard title="Score" value={result.ats_score} />
      <ResultCard title="Match Score" value={result.match_score} />
      <ResultCard title="Summary" value={result.summary} />
      <ResultCard
        title="Skills Match"
        value={(result.skill_match || []).join(", ")}
      />
      <ResultCard
        title="Skills Mismatch"
        value={(result.skill_mismatch || []).join(", ")}
      />
      <ResultCard
        title="Rewritten Resume"
        value={result.rewritten_resume}
      />

      <button
        onClick={downloadAnalysisJson}
        style={{ marginTop: "0.75rem", padding: "0.5rem 1rem" }}
      >
        Download AI Analysis
      </button>
    </div>
  );
}
