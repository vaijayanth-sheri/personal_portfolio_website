# Project Scouting Report: Job Application Tracker

## 1. Executive Summary
The **Job Application Tracker** is a high-performance, full-stack Next.js web application designed to streamline the job search process. Serving as a personal career CRM, the platform replaces scattered spreadsheets with a structured, visually clear workflow. Built with a Supabase PostgreSQL backend and secured via Row-Level Security (RLS), the project evolved from a basic tracking tool into an AI-augmented career assistant. By integrating the Google Gemini API, it features automated job description parsing and dynamic, evidence-based generation of tailored CVs and cover letters, showcasing strong capabilities in full-stack development, database architecture, and practical AI integration.

## 2. Project Deep Dive
- **Project Domain:** Career Tech, Productivity, Full-Stack Development
- **Target Users:** Individual job seekers and professionals managing complex application lifecycles
- **Problem Statement:** Tracking job applications, skill gaps, and company research across spreadsheets introduces heavy friction, leading to lost data and inefficient application tailoring.
- **Business Value:** Reduces data entry time to under 5 seconds per job, visually surfaces actionable insights, and automates the creation of highly tailored application materials, dramatically increasing the efficiency and quality of job applications.

### Major Features
- **Comprehensive Dashboard:** Real-time statistics overview with intuitive filtering by status and date.
- **Jobs & Companies Management:** Full data tables for jobs, companies, and job boards with inline editing, smart auto-complete, and priority tracking.
- **Skills Tracker:** Tracks and prioritizes technical skill gaps discovered during the job search process.
- **AI "Smart Add Job":** Automatically parses raw job descriptions using Gemini to extract titles, companies, locations, relevancy scores, and match reasoning based on the user's profile.
- **AI Workshop (Resume/Cover Letter Generator):** Acts as a structured retrieval system, injecting user profile data (core, experiences, projects, education) formatted as an XML database into Gemini to generate highly tailored, evidence-based application materials.

### Architecture
- **Frontend:** Next.js 14 (App Router), React 18, Tailwind CSS 3
- **Backend/Database:** Supabase (PostgreSQL) with strict typing, smart indexing, and Row-Level Security (RLS).
- **AI Integration:** Vercel AI SDK, Google Gemini 2.5 Flash API.
- **Deployment:** Vercel.
- **Data Flow:** User Input/JD -> Next.js API Routes -> Supabase Database (for context retrieval) -> XML Context Assembly -> Gemini LLM -> Output Stream to Client.

## 3. Skills Extracted
- **Full-Stack Development (Evidence: Next.js 14 App Router, React, Tailwind CSS integration)**
- **Database Design & Management (Evidence: PostgreSQL schema definitions, complex SQL migrations, relational junction tables for global access)**
- **Security Engineering (Evidence: Implementation of Supabase Auth and strict Row-Level Security policies)**
- **Generative AI Integration (Evidence: Implementation of the `@ai-sdk/google` and prompt engineering for structured JSON and evidence-based text generation)**
- **Product Ownership (Evidence: Creation of a formal Product Requirements Document (PRD), strict MVP scoping, and UX requirements focusing on minimal friction)**

## 4. Resume Material
*   **Full-Stack Development:** Engineered a high-performance career management application using Next.js 14 and Tailwind CSS, deployed on Vercel to optimize job tracking workflows and minimize data entry friction.
*   **Database Architecture:** Designed and implemented a robust PostgreSQL database using Supabase, managing complex schema migrations and ensuring data privacy via Row-Level Security (RLS).
*   **AI/LLM Integration:** Integrated Google Gemini API to automate the extraction of key metadata from job descriptions, generating relevancy scores and actionable insights.
*   **Prompt Engineering & Automation:** Developed an "AI Workshop" tool that dynamically injects structured relational data (experiences, projects, skills) into an XML-based prompt context, automatically generating highly tailored, evidence-backed resumes and cover letters.
*   **Product Ownership:** Authored comprehensive Product Requirements Documents (PRD), defining core user principles, success criteria, and MVP boundaries, successfully executing the vision from concept to production.

## 5. Portfolio Writeup
**Job Application Tracker & AI Career Assistant**

*Overview*
The Job Application Tracker is a modern, full-stack Next.js platform designed to act as a personal CRM for career development. Moving beyond simple spreadsheet tracking, this application provides a centralized dashboard to monitor applications, research companies, and track technical skill gaps.

*Technical Implementation*
Built on a foundation of Next.js 14 and Tailwind CSS, the frontend is optimized for speed—achieving a sub-5-second data entry target. The backend relies on Supabase for robust PostgreSQL data management and secure authentication via Row-Level Security (RLS). The database architecture is highly structured, mapping out a comprehensive "Candidate Database" that includes professional summaries, career interests, and granular details on projects and experiences.

*AI-Driven Features*
The standout features of this project are its AI integrations. Using the Vercel AI SDK and the Google Gemini API, the platform includes a "Smart Add" feature that parses raw job descriptions to automatically populate fields and score job relevancy against the user's profile. Additionally, the "AI Workshop" leverages structured prompt engineering—converting relational SQL data into an XML database—to constrain the LLM into producing highly tailored, strictly evidence-based resumes and cover letters, ensuring all generated content is accurate and directly relevant to the target role.

## 6. LinkedIn Version
Tired of tracking job applications in messy spreadsheets? 📊 I recently built a full-stack Next.js & Supabase application that acts as a personal CRM for your career! 

Beyond just tracking statuses and skill gaps, I integrated the Google Gemini API to build an automated "AI Workshop." By structuring my professional experience into a relational database and passing it to the LLM as an XML context window, the app can automatically parse job descriptions, score my relevancy, and generate highly tailored, evidence-backed cover letters and resume bullets in seconds. 🚀

**Tech Stack:** Next.js 14, React, Tailwind CSS, PostgreSQL (Supabase), Vercel AI SDK, Google Gemini API.

#Nextjs #Supabase #PostgreSQL #GenerativeAI #Productivity #FullStackDevelopment #WebDev

## 7. Interview Talking Points
*   **Situation:** Managing a job search using spreadsheets is slow, highly manual, and makes it difficult to tailor application materials effectively for different roles.
*   **Task:** Build a centralized, fast, and structured platform to track applications, skill gaps, and companies, with a focus on minimizing data entry friction and automating content generation.
*   **Action:** Developed a Next.js application with a Supabase PostgreSQL backend. To solve the tailoring problem, I structured a comprehensive "Candidate Database" in SQL. I then integrated the Gemini API, writing backend routes that pull a user's specific project and experience data, formats it as an XML block, and strictly instructs the LLM to act as an "Evidence Retrieval System" to generate a tailored CV and cover letter based *only* on the provided facts.
*   **Result:** Created a secure, highly responsive application that reduces job entry time to under 5 seconds. The AI Workshop successfully eliminates the manual work of drafting custom cover letters and resume bullets, outputting high-quality, truthful application materials instantly.

## 8. Hidden Value Report
*   **Strong Product Fundamentals:** The presence of a `PRD.md` file demonstrates a rare and highly valuable skill for engineers: the ability to think like a Product Manager. Defining user personas, core principles ("fast input", "zero clutter"), and success criteria before writing code shows maturity.
*   **Advanced Data Modeling:** The `migrate_to_global.sql` script shows comfort with relational data evolution. Successfully migrating from local to global tables using junction tables (`user_companies`, `user_job_boards`) while preserving data and updating RLS policies demonstrates advanced backend proficiency.
*   **Intelligent Prompt Engineering (RAG logic):** Instead of using a complex and expensive Vector Database, the project implements a brilliant, lightweight form of RAG (Retrieval-Augmented Generation). By querying structured SQL data and formatting it as XML (`<CANDIDATE_DATABASE>`) within the system prompt, it tightly constrains the LLM, reducing hallucinations and proving a deep understanding of practical AI application design.
