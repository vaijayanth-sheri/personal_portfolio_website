# JobTracker

## OVERVIEW
JobTracker is a comprehensive, AI-powered platform designed for individuals navigating the job market. It acts as a central hub for tracking applications, managing company contacts, organizing job boards, and identifying skill gaps. By leveraging a modern tech stack like Next.js 14, Supabase, and Gemini AI, it provides a fast, secure, and intelligent experience that drastically reduces the friction of tailoring applications and managing data natively on both desktop and mobile devices.

## KEY FEATURES

- **AI Application Workshop (RAG System):** An advanced Retrieval-Augmented Generation engine that queries a modular Candidate Database (Experiences, Projects, Education, Skills) to automatically generate highly tailored, evidence-based CV bullets and cover letters aligned with specific job descriptions.
- **Smart Data Extraction:** Streamlines job tracking by allowing users to paste a job description. The AI instantly extracts the job title, company, and location, while intelligently scoring the role's relevancy against the user's profile.
- **Smart Suggestions Engine:** Auto-complete dropdowns automatically derive previous entries to speed up data entry without heavy database reads.
- **Comprehensive Dashboard:** Stats overview with total, applied, interview, rejected, and offers counts, featuring advanced filtering.
- **Robust Security:** Built-in Email/Password authentication via Supabase Auth with strict Row-Level Security ensuring private data isolation per user.
- **Optimized Database Architecture:** Utilizes strict VARCHAR types, smart index targeting, and automatic timestamps for high performance.

## Tech Stack
- **FRONTEND:** Next.js 14 (App Router), React, Tailwind CSS 3
- **BACKEND:** Supabase (PostgreSQL), Supabase Auth
- **AI INTEGRATION:** Vercel AI SDK, Google Gemini 2.5 Flash
- **SECURITY:** Row-Level Security (RLS)
- **LANGUAGE:** TypeScript 5

## Impact
Optimized the job search workflow by reducing manual data entry and significantly cutting down the time spent tailoring applications through intelligent AI extraction, automated evidence-based asset generation, and a modular system architecture.
