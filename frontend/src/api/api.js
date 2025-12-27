import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",  // FastAPI backend URL
});

export const analyzeResume = (resumeText) =>
  API.post("/analyze", { resume_text: resumeText });
