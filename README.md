AI Resume–JD Analyzer (FastAPI + React)
Full-stack AI-powered resume analyzer that compares a candidate’s resume with a job description and returns ATS-style insights, skill gaps, and an optimized resume, built using a FastAPI backend and React frontend.
​

✨ Features
Upload resume (PDF / DOCX / TXT) and paste job description in a clean React UI.

Extract resume text on the backend and analyze it with an LLM API (Groq / Gemini / etc.).
​

Generate:

ATS-style score and job match score

Matching and missing skills/keywords

Short profile summary

AI-rewritten, optimized resume text

Download the full AI analysis as a JSON file from the frontend.
​

🧱 Tech Stack
Frontend: React, React Router, Axios

Backend: FastAPI (Python), Uvicorn

AI: LLM API (e.g., Groq LLaMA / Gemini / OpenAI – customize here)

Other: Local file upload, resume parsing libraries, JSON-based API.
​

📂 Project Structure
bash
AIRESUMEANALYZER/
  backend/
    main.py
    requirements.txt
  frontend/
    src/
      pages/
        UploadResume.jsx
        Analyze.jsx
        Result.jsx
      components/
        ResultCard.jsx
    package.json
  README.md
🚀 Getting Started (Local)
Clone the repo

bash
git clone https://github.com/pavishnu152/AIRESUMEANALYZER.git
cd AIRESUMEANALYZER
Backend (FastAPI)

bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Backend runs on http://localhost:8000 by default.
​

Frontend (React)

bash
cd ../frontend
npm install
npm run dev
Frontend runs on http://localhost:5173 or similar (check terminal).
​

Open the frontend URL → upload resume + JD → click Analyze → view results and use Download AI Analysis.

🌐 Deployment
Backend can be deployed on Render / Railway / EC2 from this GitHub repo as a FastAPI service.
​

Frontend can be deployed on Vercel / Netlify, pointing VITE_API_BASE_URL (or similar) to the deployed FastAPI URL.
​

📌 Future Improvements
User authentication and history of previous analyses.

Support for multiple job descriptions and ranking across roles.

Export rewritten resume as formatted PDF / DOCX.
​

