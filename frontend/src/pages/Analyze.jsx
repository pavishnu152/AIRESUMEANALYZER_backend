import React from "react";
import Loader from "../components/Loader";

export default function Analyze() {
  // kept minimal — you can route here while waiting, but UploadResume shows loader inline
  return <Loader text="Analyzing your resume. This may take a few seconds..." />;
}
