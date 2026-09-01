# EcoMat | منصة إيكومات الذكية لتمويل المنشآت

> **SDB FinTech Hackathon 2026 Project**  
> An intelligent layer built around the Saudi Social Development Bank (SDB) financing journey.

---

## 📖 Overview

**EcoMat** is a proposed intelligent readiness and growth layer designed to empower Saudi entrepreneurs across the entire financing lifecycle:

$$\text{PREPARE} \longrightarrow \text{APPLY} \longrightarrow \text{UNDERSTAND} \longrightarrow \text{GROW}$$

### 🎯 Core Mission
*"Our goal isn't simply to increase approvals. It's to increase successful financing journeys."*

---

## ✨ Key Features

1. **AI Readiness Diagnostic Engine (`PREPARE`)**:
   - Real-time scoring ($0-100$) across 4 dimensions: *Eligibility*, *Documents*, *Financial Coverage*, and *Application Completeness*.
   - Proactive validation checklist before formal bank submission.

2. **Smart SDB Product Matching (`APPLY`)**:
   - Analyzes enterprise age, revenue profile, and capital needs to match the optimal SDB facility (e.g. *Ufuq Financing* vs *Entrepreneurs Financing* vs *Emerging Enterprises*).
   - Interactive product comparison matrix.

3. **Transparent Rejection & 90-Day Recovery Roadmap (`UNDERSTAND`)**:
   - Transforms opaque rejection notices into clear, constructive explanations.
   - Structured 3-phase 90-day action plan linked with national advisory partners (SDB Clinics, Monsha'at).

4. **Post-Approval Acceleration & "Pay as You Grow" (`GROW`)**:
   - Milestone tracking dashboard for approved funding.
   - **Pay as You Grow Concept**: An adaptive revenue-proportional repayment model protecting businesses during low-revenue cycles.

5. **Bilingual Arabic & English with Full RTL Support**:
   - Instant one-click language toggle with native `IBM Plex Sans Arabic` and `Plus Jakarta Sans` typography.

6. **Interactive Scenario Manager / Demo Toolbar**:
   - Built-in live scenario customizer allowing judges and presenters to test presets (**Ready 92%**, **Needs Attention 74%**, **Not Ready 51%**) or adjust revenue and debt parameters in real time.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Jazmine7090/EcoMatApplication.git

# Navigate to project folder
cd EcoMatApplication

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Vanilla CSS Design System with CSS Custom Properties
- **Icons**: Lucide React
- **Animations / Confetti**: Canvas-Confetti, CSS Micro-interactions
- **Localization**: Custom React Context Provider (LTR / RTL support)

---

## 📄 License & Hackathon Disclaimer

This repository is a prototype developed for the **Saudi Social Development Bank (SDB) Hackathon 2026**. EcoMat is an independent concept proposal and does not represent official contractual terms or services of the Social Development Bank.
