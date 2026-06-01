# AutoPlot: Interactive Data Visualization Desktop Application

## 1. Executive Summary
AutoPlot is a comprehensive, desktop-based data visualization tool built with Python and PyQt5. Designed to accelerate exploratory data analysis (EDA), the application allows users to ingest various data formats (CSV, Excel, JSON), dynamically infer data schemas, and generate interactive or static charts using multiple rendering engines (Matplotlib, Seaborn, and Plotly). By abstracting away visualization boilerplate code, AutoPlot provides data analysts and engineers with an intuitive GUI to map variables, explore datasets across six different chart types, and export presentation-ready graphics seamlessly. 

## 2. Project Deep Dive
**Problem Statement:** Data professionals frequently write repetitive boilerplate code to ingest data, clean it, and generate exploratory plots. Comparing different visualization libraries (e.g., static Matplotlib vs. interactive Plotly) requires constant context switching and syntax adjustments.
**Target Users:** Data Analysts, Data Scientists, and Business Intelligence professionals.
**Business Value:** Accelerates time-to-insight by replacing manual coding with an interactive GUI, standardizes reporting workflows, and democratizes data exploration for non-technical users.

**Architecture & Data Flow:**
1. **Inputs:** User uploads CSV, Excel, or JSON files via a `QFileDialog`.
2. **Processing:** The `DataModel` ingests the file via Pandas, automatically infers the data schema (categorizing columns as numeric, datetime, or categorical), and updates the UI axis dropdowns dynamically.
3. **Storage:** In-memory Pandas DataFrames.
4. **Visualization Engine:** Based on user selection, the `PlotAdapter` routes the request:
   - *Static Engine:* Renders Matplotlib/Seaborn plots on a PyQt `FigureCanvas`.
   - *Interactive Engine:* Renders Plotly graphs embedded inside a Chromium-based `QWebEngineView`.
5. **Output:** The user interacts with the rendered UI plot and can trigger a 1-click export to PNG, JPEG, or PDF formats.

## 3. Skills Extracted
### Technical Skills
- **Software Engineering & Architecture:** Applied Object-Oriented Programming (OOP) and the Model-View-Controller (MVC) pattern to separate UI components from data processing logic. Used the Adapter pattern (`PlotAdapter`) to standardize API calls across fundamentally different charting libraries.
- **Frontend / GUI Development:** Built a complex, stateful desktop application using **PyQt5**. Utilized `QStackedWidget` for seamless transitions between rendering backends and integrated embedded web views (`QWebEngineView`).
- **Data Engineering:** Developed robust data ingestion pipelines using **Pandas**, handling multiple formats seamlessly. Implemented dynamic schema inference using `pd.api.types` to categorize variables and prevent invalid axis selections.
- **Data Visualization:** Deep knowledge of **Matplotlib**, **Seaborn**, and **Plotly**. Managed complex charting requirements including multi-Y-axis mapping and dynamic graph generation.

### Non-Technical Skills
- **Product Ownership:** Iteratively improved the application from a basic single-file script (`Autoplot.py`) to a scalable, modular architecture (`AutoPlot_V3.py`, `Canva_model.py`).
- **UX Design:** Designed an intuitive, error-resistant user flow (Upload -> Map -> Plot -> Export) with robust UI status messaging to handle edge cases like unsupported formats or mismatched variables.

## 4. Resume Material
- **Desktop Application Development:** Architected and developed a Python/PyQt5 data visualization desktop application, integrating Pandas with Matplotlib, Seaborn, and Plotly to eliminate repetitive EDA scripting.
- **Dynamic Data Processing:** Engineered a modular `DataModel` utilizing Pandas to ingest CSV/Excel/JSON files and automatically infer data schemas (numeric, datetime, categorical) for dynamic UI population.
- **Software Architecture:** Implemented MVC and Adapter design patterns to decouple GUI logic from visualization engines, enabling seamless switching between static canvas rendering and interactive Chromium web views via `QStackedWidget`.
- **Automated Reporting:** Built 1-click export pipelines supporting PNG, JPEG, and PDF formats, significantly reducing the time-to-insight for data analysts performing exploratory data analysis.

## 5. Portfolio Writeup
**AutoPlot: A Unified Data Visualization GUI**

While Python’s data stack is incredibly powerful, writing boilerplate code for basic exploratory data analysis (EDA) can slow down time-to-insight. I built **AutoPlot** to solve this problem. AutoPlot is a robust, object-oriented desktop application built with PyQt5 that gives analysts a zero-code interface to their data.

The application allows users to upload datasets (CSV, Excel, JSON) which are instantly parsed by a custom data modeling layer. The tool automatically infers column data types, mapping them to appropriate visualization options. To provide the best of both worlds, I integrated both static rendering (Matplotlib/Seaborn) and interactive web rendering (Plotly) into the same desktop window. This required implementing an Adapter design pattern and utilizing PyQt's `QStackedWidget` to hot-swap a `FigureCanvas` with a Chromium-based `QWebEngineView` on the fly. 

Ultimately, AutoPlot accelerates the EDA process, providing an intuitive, error-resistant interface that bridges the gap between raw data and presentation-ready insights.

## 6. LinkedIn Version
Tired of writing the same Pandas and Matplotlib boilerplate for every new dataset? 📊

I recently built **AutoPlot**, a Python-based desktop application designed to supercharge Exploratory Data Analysis. Built with PyQt5, AutoPlot lets you ingest CSV, Excel, or JSON files and automatically infers your data schema. 

The coolest part? I implemented an Adapter pattern to unify three different visualization engines under the hood. With a single click, you can seamlessly switch between static charts (Matplotlib/Seaborn) and highly interactive, web-based visuals (Plotly) directly within the desktop UI—no context switching required. 

A great exercise in Object-Oriented Programming, MVC architecture, and building robust data tools!

#Python #PyQt5 #DataAnalytics #DataVisualization #Pandas #SoftwareEngineering

## 7. Interview Talking Points
- **Situation:** Data analysts often lose time writing boilerplate code to explore new datasets and have to choose upfront between static (Matplotlib) or interactive (Plotly) libraries.
- **Task:** Build a desktop application that abstracts the coding process, automatically handles various data formats, and allows dynamic switching between charting libraries.
- **Action:** I developed a PyQt5 application using an MVC architecture. I built a `DataModel` to handle data ingestion and schema inference via Pandas. For the UI, I used an Adapter pattern to standardize plotting commands and a `QStackedWidget` to seamlessly switch the UI between a standard Matplotlib canvas and an embedded Chromium web view for Plotly.
- **Result:** Delivered a scalable, crash-resistant desktop tool that supports 3 data formats, 3 visualization engines, and 6 chart types, reducing the time required for EDA and standardizing the export of analytical graphics.

## 8. Hidden Value Report
- **Graceful Degradation:** The application demonstrates strong defensive programming (e.g., in `plotting_dashboard_gui.py`) by gracefully disabling GUI features if dependencies like PyQt5 or Kaleido are missing, rather than crashing outright.
- **Design Pattern Proficiency:** The deliberate transition from a monolithic UI script (`Autoplot.py`) to a separated architecture (`Canva_model.py` and `plotting_dashboard_gui.py`) strongly indicates a mature understanding of software design principles (Separation of Concerns, MVC, Adapter Pattern).
- **Empathy for the User:** Features like automated schema inference (preventing users from plotting text against text) and robust status messaging show a strong focus on User Experience (UX) and product quality.
