# Project Scouting Report: Jupyter Workflow Manager (Code Iteration System)

## 1. Executive Summary

**Jupyter Workflow Manager** is a custom VS Code extension designed to solve the chaotic iteration process in data science and algorithmic development. It acts as a file-scoped contextual memory layer for Jupyter notebooks and Python scripts, allowing developers to save, version, swap, and diff code snippets ("Steps" and "Versions") natively in the editor without duplicating cells or polluting the file. By abstracting the experimental logic into a `.workflow.json` graph, the extension enables true micro-versioning, secure experimentation, and the automated export of a pristine, finalized Python pipeline.

## 2. Project Deep Dive

- **Project Domain:** Developer Tools, Data Science Productivity, IDE Extensions
- **Target Users:** Data Scientists, Algorithmic Researchers, Python Engineers
- **Problem Statement:** Data science workflows require heavy code iteration. Developers often duplicate notebook cells to test variations, comment out old blocks "just in case", or restart kernels due to state pollution. This results in messy notebooks, lost logic, and poor version control.
- **Business Value:** Dramatically reduces the time spent managing boilerplate and cleaning up messy scripts. Provides a safe environment for algorithmic experimentation while ensuring the final deliverable is clean, production-ready code.

### Core Features
- **File-Scoped Workflows:** Automatically maps active `.py` or `.ipynb` files to isolated `.workflow.json` files.
- **Micro-Versioning:** Organizes code into logical "Steps" (e.g., *Load Data*, *Clean Data*) containing multiple swappable "Versions".
- **Smart Code Injection & Replacement:** Applies versioned code directly into the active editor, utilizing bounding markers to safely overwrite old logic without touching unrelated code.
- **Native VS Code Diffing:** Programmatically writes temporary files to leverage VS Code’s native diff viewer, allowing side-by-side comparison of baseline vs. experimental code.
- **Clean Export:** Compiles and exports the active versions of all steps into a single, unpolluted Python script.

### Architecture & Data Flow
- **Framework:** TypeScript, Node.js, VS Code Extension API.
- **System Components:**
  - `extension.ts`: Command registry, dependency injection, and UI lifecycle management.
  - `WorkflowResolver.ts`: Dynamic context engine that monitors active tabs and binds the correct file-scoped state.
  - `WorkflowManager.ts`: In-memory business logic layer managing the Steps/Versions graph.
  - `StateManager.ts`: Persistence layer handling standard I/O for `workflow.json` state files.
  - `EditorController.ts`: Interacts directly with the VS Code document API to select text, insert code, and execute smart block replacements.
- **Data Flow:** Editor Selection -> `EditorController` -> `WorkflowManager` (State Mutation) -> `StateManager` (Disk Persistence) -> `WorkflowTreeProvider` (Sidebar UI Update).

## 3. Skills Extracted

### Technical Skills
- **TypeScript & Node.js:** Built a robust, strongly-typed system without relying on external dependencies.
- **System Architecture:** Designed a decoupled MVC-like architecture separating text-editor manipulation, state persistence, and UI rendering.
- **VS Code Extension API:** Deep integration with TreeViews, commands, active text editors, notebook APIs, and native diffing tools.
- **State Management & I/O:** Handled dynamic file reading/writing, robust JSON parsing, and graceful fallbacks for corrupted state files.

### Hidden / Non-Technical Skills
- **Product Ownership:** Identified a clear user pain point (messy Jupyter notebooks) and designed a comprehensive UI/UX flow to solve it.
- **Developer Experience (DX):** Created seamless workflows (e.g., auto-applying code upon version swap, smart text capture if selection is empty) that respect the developer's momentum.
- **Automation:** Automated the generation of clean Python scripts from fragmented experimentation states.

## 4. Resume Material

- **Tooling & Automation:** Developed "Jupyter Workflow Manager", a TypeScript-based VS Code extension that provides file-scoped micro-versioning for data science pipelines, eliminating cell duplication and notebook clutter.
- **System Design:** Architected a decoupled state management system linking active Jupyter notebooks and Python scripts to dynamic `.workflow.json` graphs for instant code swapping and experimentation.
- **Developer Experience:** Integrated directly with VS Code's native API to programmatically generate side-by-side code diffs and automate the extraction of clean, production-ready Python scripts from iterative experiments.
- **Product Ownership:** Identified critical inefficiencies in data science code iteration, designing a custom TreeView UI and smart-replacement editor controller to streamline algorithm development.

## 5. Portfolio Writeup

### Jupyter Workflow Manager: Rethinking Data Science Iteration
When data scientists develop algorithms, the process is highly iterative. The standard workflow—duplicating Jupyter cells, commenting out old logic, and polluting the workspace—creates technical debt before the project even reaches production. 

To solve this, I built the **Jupyter Workflow Manager**, a custom VS Code extension designed to act as a contextual memory layer for Python scripts and notebooks. Rather than duplicating code in the editor, the extension abstracts experimental logic into a file-scoped JSON graph. Users can create logical "Steps" and save multiple "Versions" of the code under each step. 

Using a custom `EditorController`, the tool intelligently injects or replaces code blocks in the active editor. It dynamically stages temporary files to leverage VS Code's native diffing engine, allowing developers to visually compare their algorithmic tweaks. Finally, when the experiment is successful, a single click compiles the active versions into a clean, unpolluted Python script ready for deployment. This project showcases strong product thinking, advanced TypeScript architecture, and a deep understanding of developer experience.

## 6. LinkedIn Version

Tired of messy Jupyter Notebooks filled with duplicated cells and commented-out code? 

I recently built **Jupyter Workflow Manager**, a custom VS Code extension that brings micro-versioning directly to your active editor. Instead of cluttering your script to test a new algorithmic tweak, the extension tracks your logic in a file-scoped graph. You can seamlessly swap code versions, view side-by-side diffs natively in VS Code, and export a perfectly clean Python pipeline with zero boilerplate.

Built entirely with TypeScript and the VS Code API, this project was an excellent dive into state management, smart text replacement, and Developer Experience (DX) design. 

## 7. Interview Talking Points

- **Situation:** Data scientists and algorithm developers constantly duplicate code cells or comment out large blocks in Jupyter notebooks during iteration, leading to chaotic, unreadable files that are difficult to productionize.
- **Task:** Create a developer tool that allows safe, tracked experimentation without polluting the primary workspace or relying on heavy Git branching for micro-edits.
- **Action:** I engineered a VS Code extension in TypeScript that maps an active Python file to an isolated JSON graph. I built a dynamic `WorkflowResolver` to track user context, an `EditorController` for smart text replacement, and integrated VS Code's native diffing engine for version comparison.
- **Result:** Delivered a robust, zero-dependency tool that allows developers to swap code versions instantly and automate the compilation of a clean, production-ready script once experimentation is complete.

## 8. Hidden Value Report

- **Empathy for the User (Data Scientists):** While this is a software engineering project, it proves a deep understanding of the daily friction points faced by data scientists and data engineers. This cross-domain empathy is highly valuable for Platform Engineering and MLOps roles.
- **Edge Case Handling:** The codebase shows foresight in handling edge cases—such as fallback paths if a notebook is closed, default text injection if a user tries to save an empty selection, and graceful recovery from corrupted JSON files.
- **Clean Architecture:** The separation of concerns (Resolver vs. Manager vs. State vs. Editor) demonstrates seniority. The code does not tightly couple UI logic with file I/O, which is a common mistake in extension development.
- **Relevance to Core Focus:** Even though it isn't an energy system model, building tooling that streamlines Python workflows and data pipelines is highly relevant to roles requiring automation and data engineering in the energy sector.
