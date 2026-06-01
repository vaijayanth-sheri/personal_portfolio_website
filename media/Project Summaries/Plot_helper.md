# Project Scouting Report: Plot Builder for Jupyter

## 1. Executive Summary
**Plot Builder** is a VS Code extension engineered to accelerate Data Science workflows by providing a visual UI for configuring plots directly inside Jupyter Notebooks. It seamlessly bridges TypeScript frontend and Python backend contexts, securely interrogating the active Jupyter kernel memory to detect Pandas DataFrames, and automatically generates production-quality `matplotlib` and `seaborn` code. The project highlights advanced extension architecture, demonstrating strong full-stack capabilities, system design, and deep empathy for automation in data analytics.

## 2. Project Deep Dive
- **Project Domain:** Data Science Tooling, Developer Productivity, VS Code Extensions
- **Target Users:** Data Scientists, ML Engineers, Data Analysts, and developers conducting Exploratory Data Analysis (EDA) in VS Code.
- **Problem Statement:** Working with data in notebooks involves repeatedly writing boilerplate plotting code, context-switching between different library documentations, and struggling with syntax—disrupting the analytical flow.
- **Business Value:** Increases developer productivity and reduces cognitive load by automating visualization scaffolding, allowing analysts to focus on data insights rather than library syntax.
- **Major Features:**
  - Zero-configuration dynamic variable detection from Jupyter server memory.
  - Multi-library code generation (Matplotlib & Seaborn) from a unified React UI.
  - Native, non-intrusive notebook cell insertion.
  - Smart handling of multi-series plotting via automatic `.melt()` data transformations.
- **Architecture Summary:** 
  - **Inputs:** React-driven Webview inside the VS Code sidebar captures user configurations.
  - **Processing:** `NotebookService` and `DataFrameService` act as an execution bridge, utilizing Microsoft Jupyter internal APIs (`executeHidden`, Kernel Sessions) to interrogate kernel memory securely.
  - **Generation:** Abstract Factory patterns (`matplotlibGenerator.ts`, `seabornGenerator.ts`) translate UI state into optimized Python code.
  - **Output:** Clean Python code is injected as a new cell directly below the active cursor context.
- **Technical Complexity:** Overcoming VS Code's heavily locked/internal Jupyter execution APIs required building a resilient communication bridge. The system implements a robust 4-tier fallback mechanism (from native `executeHidden` down to silent temporary cell execution with polling) to fetch Python global variables safely without disrupting the user's workspace.

## 3. Skills Extracted
- **Full Stack Extension Development:** Engineered a React Webview integrated into a TypeScript VS Code extension architecture (Webpack, `vscode.window.createWebviewPanel`).
- **Python / Data Science Automation:** Deep understanding of Pandas metadata, Matplotlib, and Seaborn APIs to dynamically scaffold accurate python data visualization scripts.
- **System Design & API Integration:** Architected a robust kernel-communication bridge interacting securely with internal Jupyter kernel states.
- **Product Ownership:** Identified a clear UX friction point in EDA workflows and designed a developer-first, non-intrusive solution based on strong product positioning.
- **Design Patterns:** Leveraged the Abstract Factory pattern for modular, extensible code generation.

## 4. Resume Material
- **Architected and deployed "Plot Builder,"** a VS Code extension that accelerates data science workflows by automatically generating production-ready Python plotting code (Matplotlib, Seaborn) from a visual React UI.
- **Engineered a robust Python-TypeScript execution bridge** using Jupyter Kernel internal APIs to dynamically interrogate active notebook memory, extracting Pandas DataFrame schemas without disrupting user workspaces.
- **Designed a scalable code generation backend** utilizing the Abstract Factory pattern, automatically resolving complex multi-metric plotting requirements via Pandas `.melt()` transformations.
- **Improved developer productivity** for Exploratory Data Analysis by eliminating API context-switching, automating boilerplate visualization code injection with a 4-tier graceful degradation fallback system.

## 5. Portfolio Writeup
### Plot Builder for Jupyter
*A developer-first visual interface for generating clean plotting code directly inside VS Code.*

**The Challenge:** Data professionals waste significant time context-switching during Exploratory Data Analysis (EDA). While working in Jupyter notebooks, they frequently need to look up documentation for Matplotlib or Seaborn syntax just to visualize basic data relationships or compare multiple metrics. 

**The Solution:** I built Plot Builder, a VS Code extension that provides a GUI sidebar natively tied to the active Jupyter kernel. It dynamically reads initialized Pandas DataFrames from memory, allowing users to bind X and Y axes visually. Once configured, it generates and injects perfectly formatted `.melt()` transformations and plotting code directly into the notebook.

**Technical Highlights:**
The hardest technical challenge was interrogating the Python memory state safely. Because VS Code's internal Jupyter execution APIs are heavily guarded and constantly evolving, I engineered a multi-layered execution bridge. It gracefully degrades from native `executeHidden` API calls down to kernel session executions, and finally to silent background cell payload snippets with polling loops. This ensures reliable DataFrame schema extraction across any VS Code or Jupyter extension version.

## 6. LinkedIn Version
Tired of constantly looking up Matplotlib syntax during EDA? 📊 

I recently built **Plot Builder**, a VS Code extension that brings a visual plotting UI directly into your Jupyter Notebooks. 

Instead of writing boilerplate, Plot Builder securely interrogates your active Python kernel, detects your Pandas DataFrames, lets you map your axes visually, and then injects production-quality Matplotlib or Seaborn code directly into your notebook. 

Behind the scenes, it uses a custom TypeScript execution bridge that safely communicates with the Jupyter kernel memory. It even handles complex multi-series data by auto-generating Pandas `.melt()` transformations!

A fun project merging Full Stack TypeScript with Data Science workflows! 🚀

#DataScience #Python #VSCode #Jupyter #Matplotlib #Seaborn #Productivity #Automation

## 7. Interview Talking Points
- **Situation:** Data scientists waste time during EDA looking up syntax and writing boilerplate code for Matplotlib and Seaborn, breaking their analytical flow.
- **Task:** Build a tool that provides a visual interface for plot generation without removing the user from their code-centric Jupyter notebook environment.
- **Action:** Developed a VS Code extension utilizing a React webview. I engineered a robust background service to communicate with the Jupyter kernel using hidden execution APIs, extracting DataFrame metadata dynamically. I also implemented an Abstract Factory pattern to generate optimal plotting code based on the selected framework.
- **Result:** Delivered a zero-configuration extension that injects clean, production-ready visualization code into notebooks. Implemented a resilient 4-tier fallback execution strategy to bypass locked Jupyter APIs, effectively eliminating syntax context-switching and speeding up data analysis.

## 8. Hidden Value Report
- **Resilience Engineering:** The `dataframeService.ts` demonstrates exceptional defensive programming. By implementing 4 distinct fallback mechanisms to bypass locked or changing MS Jupyter APIs, it shows an engineering mindset that anticipates edge-case failures and ensures product stability.
- **Developer Empathy & Code Quality:** The architecture focuses explicitly on "Code Quality First." Rather than outputting messy snippets, the generator produces highly readable Python with proper comments, titles, semantic variable names, and layout optimizations (like `sns.despine()`, `plt.tight_layout()`). 
- **Product Vision:** The `projectinfo.md` document outlines clear product positioning ("Not another auto-visualization tool... A developer-first visual interface"). This highlights strong product management skills, demonstrating the ability to accurately define scope, target audience, and feature roadmaps before writing code.
- **Automation Mindset:** Highlights Sheri's alignment with workflow automation—taking a highly manual, repetitive engineering task and building an elegant, scalable pipeline to solve it.
