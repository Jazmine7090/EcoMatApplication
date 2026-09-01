export const translations = {
  en: {
    // Brand & Header
    brandName: "EcoMat",
    brandTagline: "SDB Intelligent Financing Layer",
    hackathonNotice: "Hackathon Prototype — Inspired by Saudi Social Development Bank",
    nav: {
      home: "Home",
      howItWorks: "How It Works",
      features: "Features",
      impact: "Impact",
      apply: "Apply Now",
      login: "Login / Portal",
      startApplication: "Start Application",
    },

    // Hero Section
    hero: {
      tag: "Intelligent Layer for SDB Financing",
      headline: "Don't let rejection be the first time you discover you're not ready.",
      subheadline: "EcoMat helps Saudi entrepreneurs choose the right financing, prepare stronger applications, understand decisions, and grow sustainably after approval.",
      ctaReadiness: "Check My Readiness",
      ctaHowItWorks: "How It Works",
      dashboardPreview: {
        title: "Application Readiness",
        scoreLabel: "Readiness Score",
        eligibility: "Eligibility Criteria",
        documents: "Required Documents",
        financials: "Financial Information",
        statusReady: "Ready to Apply",
        statusAttention: "Needs Attention",
        recommendedTitle: "Recommended SDB Financing",
        recommendedProduct: "Ufuq Financing (أفق)",
        recommendedBadge: "Optimal Match",
        viewDetails: "Inspect Live Report",
      },
    },

    // Problem Section
    problem: {
      tag: "The Challenge",
      title: "The financing journey shouldn't begin with uncertainty.",
      subtitle: "Navigating business financing is complex. Entrepreneurs face critical questions at every phase of the process.",
      cards: [
        {
          phase: "Phase 1: Before Applying",
          icon: "HelpCircle",
          title: "Pre-Application Fog",
          questions: [
            "Am I truly eligible for this financing product?",
            "Did I submit all mandatory and supporting documents?",
            "Am I applying for the right financing for my business stage?",
          ],
          solution: "EcoMat AI analyzes your readiness before formal bank submission.",
        },
        {
          phase: "Phase 2: After Rejection",
          icon: "AlertTriangle",
          title: "The Rejection Blackbox",
          questions: [
            "Why was my application not approved?",
            "What specific financial or document gaps went wrong?",
            "What actionable steps should I take next?",
          ],
          solution: "EcoMat delivers transparent decision breakdowns and 30/60/90-day recovery plans.",
        },
        {
          phase: "Phase 3: After Approval",
          icon: "TrendingUp",
          title: "Post-Approval Guidance",
          questions: [
            "How do I manage and allocate my financing effectively?",
            "Where can I get qualified Saudi business mentorship & advisory?",
            "How can my repayments match my seasonal cash flow?",
          ],
          solution: "EcoMat integrates milestone dashboards and the Pay as You Grow model.",
        },
      ],
    },

    // How EcoMat Works Section
    howItWorks: {
      tag: "Seamless 4-Step Journey",
      title: "How EcoMat Works",
      subtitle: "A proactive intelligence layer that guides you across the entire financing lifecycle.",
      steps: [
        {
          step: "01",
          title: "CHECK",
          description: "AI thoroughly reviews your application, financial profile, and eligibility before formal submission.",
          badge: "Pre-Submission",
        },
        {
          step: "02",
          title: "PREPARE",
          description: "Identify missing documents, financial inconsistencies, and potential eligibility mismatches proactively.",
          badge: "Guidance & Fixes",
        },
        {
          step: "03",
          title: "APPLY & UNDERSTAND",
          description: "Submit a compliant, verified application and receive transparent explanations of the bank's final decision.",
          badge: "Full Transparency",
        },
        {
          step: "04",
          title: "GROW",
          description: "Manage financing milestones and connect with accredited Saudi mentors, partners, and market support services.",
          badge: "Sustainable Scale",
        },
      ],
    },

    // AI Readiness Check Section
    readiness: {
      tag: "AI Diagnostic Engine",
      title: "Know before you apply.",
      subtitle: "Our predictive scoring system evaluates your application against SDB criteria in real time.",
      overallScore: "Overall Readiness Score",
      dimensions: {
        eligibility: "Eligibility & Compliance",
        documents: "Documentation Completeness",
        financials: "Financial Readiness & Cashflow",
        completeness: "Application Completeness",
      },
      checklistTitle: "Things to fix before submission",
      items: [
        { status: "done", text: "Complete financial projections and cash flow statement" },
        { status: "warning", text: "Upload updated commercial registration (CR) with active status" },
        { status: "warning", text: "Resolve information mismatch between bank statements and requested amount" },
      ],
      cta: "Run Your Application Check",
    },

    // Smart Financing Recommendation Section
    recommendation: {
      tag: "Smart Matching",
      title: "Are you applying for the right financing?",
      subtitle: "EcoMat analyzes your business stage, sector, and revenue profile to recommend the SDB financing product that offers the highest probability of impact.",
      currentCard: {
        label: "Current Selection",
        name: "Entrepreneurs Financing",
        limit: "Up to SAR 300,000",
        purpose: "General new enterprise support",
      },
      recommendedCard: {
        label: "AI Recommended Product",
        name: "Ufuq Financing (أفق)",
        limit: "Up to SAR 10,000,000",
        purpose: "High-growth existing enterprises & scaling businesses",
        matchScore: "96% Optimal Match",
      },
      reasonTitle: "Why EcoMat recommends this:",
      reasonText: "Based on your business stage (2+ years in operation), existing monthly revenue of SAR 85,000+, and expansion-oriented financing purpose, Ufuq Financing offers more favorable terms, higher capital capacity, and tailored technical support compared to early-stage programs.",
      btnSwitch: "Switch to Ufuq Financing",
      btnCompare: "Compare All SDB Products",
      disclaimer: "Recommendations are informational and do not guarantee eligibility or approval. Final decisions are made exclusively by the Social Development Bank (SDB).",
    },

    // Transparent Rejection Section
    rejection: {
      tag: "Empowering Transparency",
      title: "A rejection shouldn't be a dead end.",
      subtitle: "Transforming opaque rejection notices into clear, constructive roadmaps toward approval.",
      statusBadge: "Application Status: Not Approved",
      primaryReasonLabel: "Primary Factor Identified",
      primaryReason: "Financial Eligibility & Debt-to-Revenue Ratio",
      cards: [
        {
          title: "What this means",
          desc: "The current requested loan amount exceeds the safe debt-service coverage ratio based on the verified past 6 months' bank deposits.",
        },
        {
          title: "What contributed to the decision",
          desc: "Recent monthly revenue volatility and an existing credit obligation that reduced available free cash flow below the minimum 1.25x threshold.",
        },
        {
          title: "What you can improve",
          desc: "Adjust the requested amount to SAR 180,000 or provide 3 months of stabilized receivables documentation to support debt service.",
        },
        {
          title: "Recommended next steps",
          desc: "Complete the SDB Financial Planning advisory module and re-submit in 45 days with updated quarterly performance.",
        },
      ],
      cta: "View My 30-Day Recovery Plan",
    },

    // After Approval Section
    afterApproval: {
      tag: "Post-Financing Acceleration",
      title: "Financing is the beginning, not the end.",
      subtitle: "Empowering your business beyond capital with milestone tracking and ecosystem integration.",
      dashboardTitle: "Financing & Milestone Overview",
      financingAmount: "SAR 250,000",
      financingLabel: "Approved SDB Facility",
      progressLabel: "Business Execution Progress",
      progressValue: "78%",
      milestonesTitle: "Key Journey Milestones",
      milestones: [
        { title: "Financing Disbursed & Account Activated", status: "completed", date: "Month 1" },
        { title: "Business Expansion & Store Launch", status: "completed", date: "Month 3" },
        { title: "Reach 500 Monthly Transacting Customers", status: "active", date: "Month 6 (In Progress)" },
        { title: "Year 1 Sustainable Revenue Target", status: "upcoming", date: "Month 12" },
      ],
      supportTitle: "Ecosystem Partner Support",
      supportSubtitle: "Connect directly with accredited Saudi partners:",
      supportItems: [
        { title: "Marketing & Growth", desc: "Digital campaign advisory & local Saudi customer acquisition.", icon: "Megaphone" },
        { title: "Financial Advisory", desc: "Cashflow forecasting, VAT compliance, and bookkeeping.", icon: "Calculator" },
        { title: "Executive Mentorship", desc: "1-on-1 mentorship with seasoned Saudi entrepreneurs.", icon: "Users" },
      ],
    },

    // Pay As You Grow Section
    payAsYouGrow: {
      tag: "Innovative Repayment Concept",
      title: "A repayment model that grows with your business.",
      subtitle: "Introducing 'Pay as You Grow': a revenue-proportional repayment concept designed to protect young businesses during low-revenue cycles.",
      howItWorks: "How Pay as You Grow works:",
      ruleLow: "Lower monthly revenue → Lower repayment contribution",
      ruleHigh: "Higher monthly revenue → Higher repayment contribution (accelerated payoff)",
      interactiveLabel: "Interactive Revenue Simulator",
      sliderLabel: "Adjust Simulated Monthly Revenue (SAR)",
      currentRevLabel: "Simulated Monthly Revenue:",
      calculatedRateLabel: "Dynamic Repayment Share:",
      calculatedAmountLabel: "Monthly Contribution:",
      benchmarks: [
        { rev: "SAR 20,000", rate: "5%", monthly: "SAR 1,000 / mo", note: "Light burden during slow season" },
        { rev: "SAR 40,000", rate: "8%", monthly: "SAR 3,200 / mo", note: "Balanced steady-state payment" },
        { rev: "SAR 70,000", rate: "12%", monthly: "SAR 8,400 / mo", note: "Faster payoff during peak growth" },
      ],
      disclaimer: "Illustrative hackathon concept — not official SDB financing terms.",
    },

    // Impact Section
    impact: {
      tag: "Ecosystem Impact",
      title: "From better applications to stronger businesses.",
      subtitle: "Measurable benefits across the entire Saudi entrepreneurial financing pipeline.",
      metrics: [
        { value: "↓ 65%", label: "Application Errors", desc: "Proactive document and data cross-validation" },
        { value: "↓ 80%", label: "Incomplete Submissions", desc: "Pre-submission requirements checklist" },
        { value: "↓ 72%", label: "Applicant Uncertainty", desc: "Clarity on eligibility and optimal product fit" },
        { value: "↑ 94%", label: "Application Readiness", desc: "Higher quality, well-prepared dossiers" },
        { value: "↑ 100%", label: "Decision Transparency", desc: "Actionable explanations for every outcome" },
        { value: "↑ 3.2x", label: "Successful Journeys", desc: "Holistic growth support through maturity" },
      ],
      statement: "“Our goal isn't simply to increase approvals. It's to increase successful financing journeys.”",
      statementSub: "Empowering Saudi entrepreneurs with clarity, dignity, and sustainable growth.",
    },

    // Final CTA
    finalCTA: {
      title: "Ready before you apply.",
      subtitle: "Let EcoMat help you understand your options, fix gaps, and submit your strongest application to the Social Development Bank.",
      btn: "Start My Application",
      secondaryBtn: "Explore Demo Scenarios",
    },

    // Footer
    footer: {
      desc: "EcoMat is an intelligent layer designed for the Saudi Social Development Bank (SDB) ecosystem. Built for the SDB Hackathon to empower Saudi entrepreneurs.",
      quickLinks: "Quick Navigation",
      legalTitle: "Hackathon Information",
      legalText: "This is a hackathon prototype demonstration. EcoMat is an independent concept proposal and does not represent official SDB services or contractual terms.",
      rights: "EcoMat — SDB Hackathon Prototype. All rights reserved.",
      sdbLink: "Visit Official SDB Portal (sdb.gov.sa)",
    },

    // Application Wizard (/apply)
    wizard: {
      badge: "SDB AI Financing Wizard",
      title: "EcoMat Intelligent Application",
      subtitle: "Complete the 5 quick steps below to run your real-time AI Readiness Assessment.",
      steps: [
        { number: 1, title: "Applicant", desc: "Personal & Contact" },
        { number: 2, title: "Business", desc: "CR & Operations" },
        { number: 3, title: "Financing", desc: "Needs & Obligations" },
        { number: 4, title: "Documents", desc: "Upload & Verify" },
        { number: 5, title: "Review", desc: "Verify Summary" },
        { number: 6, title: "AI Readiness", desc: "Diagnosis & Matches" },
      ],
      buttons: {
        back: "Previous Step",
        next: "Continue",
        runAICheck: "Run EcoMat AI Check",
        backToHome: "Back to Home",
        edit: "Edit",
        submitting: "Analyzing with AI...",
      },
      step1: {
        title: "Applicant Information",
        subtitle: "Enter the primary applicant's verified personal information.",
        fullName: "Full Name (as in National ID / Iqama)",
        nationalId: "National ID / Iqama Number (10 digits)",
        mobile: "Mobile Number (05xxxxxxxx)",
        email: "Email Address",
        city: "City / Region",
        applicantType: "Applicant Profile",
        types: ["Saudi Male Entrepreneur", "Saudi Female Entrepreneur", "Productive Household", "Freelance / Self-Employed"],
      },
      step2: {
        title: "Business Profile",
        subtitle: "Tell us about your existing enterprise or planned startup.",
        businessName: "Commercial / Project Name",
        businessType: "Entity Legal Type",
        types: ["Sole Proprietorship (مؤسسة فردية)", "LLC (شركة ذات مسؤولية محدودة)", "Freelance Certificate (وثيقة العمل الحر)", "Innovative Startup"],
        crNumber: "Commercial Registration (CR) Number (Optional for Freelancers)",
        businessStage: "Business Stage",
        stages: ["Idea / Pre-Revenue", "Early Stage (< 1 Year)", "Growing (1 - 3 Years)", "Established (3+ Years)"],
        sector: "Economic Sector",
        sectors: ["Retail & E-Commerce", "Information Technology & SaaS", "Food & Beverage / Hospitality", "Logistics & Transport", "Manufacturing & Industry", "Health & Wellness", "Services & Consulting"],
        yearsInOperation: "Years in Operation",
        employees: "Number of Saudi / Total Employees",
        monthlyRevenue: "Average Monthly Revenue (SAR)",
      },
      step3: {
        title: "Financing Requirements",
        subtitle: "Specify your capital needs and existing financial commitments.",
        financingProduct: "Target SDB Product",
        products: ["Entrepreneurs Financing (تمويل رواد الأعمال)", "Ufuq Financing (تمويل أفق)", "Emerging Enterprises (المشاريع الناشئة)", "Excellence Track (مسار التميز)", "Freelance Track (تمويل العمل الحر)"],
        requestedAmount: "Requested Financing Amount (SAR)",
        purpose: "Primary Purpose of Financing",
        purposes: ["Working Capital & Inventory", "Capital Equipment & Tech Infrastructure", "Branch Expansion & Renovation", "Hiring & Marketing Expansion"],
        useOfFunds: "Detailed Use of Funds",
        expectedRevenue: "Expected Monthly Revenue Post-Financing (SAR)",
        financialObligations: "Current Monthly Financial Obligations / Debt (SAR)",
      },
      step4: {
        title: "Required Documents",
        subtitle: "Upload supporting documentation for AI verification and completeness checks.",
        dragDrop: "Drag & drop files here, or",
        browse: "browse your device",
        supportedFormats: "PDF, PNG, JPG (Up to 10MB each)",
        docs: [
          { key: "cr", name: "Commercial Registration (CR)", req: true, desc: "Valid MoC Commercial Registration copy" },
          { key: "financials", name: "Financial Statements / Projections", req: true, desc: "Past 12 months P&L or 3-year cash flow forecast" },
          { key: "bank", name: "Bank Account Statements (6 Months)", req: true, desc: "Official bank statement with IBAN and stamped balance" },
          { key: "plan", name: "Business & Feasibility Plan", req: false, desc: "Operational plan and market analysis" },
          { key: "support", name: "Supporting Licenses / Contracts", req: false, desc: "Balady license, lease agreement, or supplier quotes" },
        ],
        uploaded: "Uploaded",
        notUploaded: "Pending Upload",
      },
      step5: {
        title: "Review Application Dossier",
        subtitle: "Please verify all entered details before initiating the AI Readiness Assessment.",
        sectionApplicant: "Applicant Details",
        sectionBusiness: "Business Profile",
        sectionFinancing: "Financing Terms",
        sectionDocuments: "Attached Documents",
      },
      step6: {
        loadingTitle: "EcoMat AI is reviewing your application...",
        loadingSubtitle: "Analyzing eligibility rules, cross-referencing document consistency, assessing debt ratios, and evaluating product fit against SDB standards.",
        readyTitle: "AI Readiness Assessment Complete",
        scoreLabel: "Readiness Score",
        dimensions: {
          eligibility: "Eligibility Criteria Match",
          documents: "Documentation Integrity",
          financials: "Financial Health & Coverage",
          completeness: "Dossier Completeness",
        },
        strongTitle: "Strong Areas (✓)",
        attentionTitle: "Needs Attention (⚠)",
        issuesTitle: "Critical Issues to Fix (🔴)",
        recommendationTitle: "Smart SDB Product Recommendation",
        currentSelected: "Currently Selected Product",
        recommendedProduct: "Recommended SDB Product",
        matchBadge: "Optimal Match",
        switchBtn: "Switch to Recommended Product",
        keepBtn: "Keep Current Selection",
        productSwitched: "Product updated successfully!",
        readyToSubmit: "You're ready to submit to SDB!",
        readyToSubmitDesc: "Your application dossier meets optimal readiness benchmarks. Proceed to formal SDB submission.",
        fixBeforeSubmit: "Action Required Before Submission",
        btnProceedSDB: "Proceed to Official SDB Submission",
        btnEditApp: "Make Adjustments",
        btnDownloadReport: "Download Readiness Report (PDF)",
        disclaimer: "EcoMat AI Readiness Check is an informational diagnostic layer and does not guarantee loan approval. Official approval decisions remain strictly with the Social Development Bank (SDB).",
        partnersRecovery: {
          title: "Recommended Support Partners & Consultancies",
          subtitle: "Based on your readiness diagnostic, these certified public and ecosystem partners can assist you in preparing your business model, restructuring liabilities, and qualifying for SDB financing.",
          bookingToast: "Advisory request sent successfully! A certified partner representative will contact you within 24 hours.",
          partners: [
            {
              id: "sdb_clinics",
              name: "SDB Business Clinics",
              entity: "Social Development Bank",
              badge: "Official SDB Service",
              focus: "Liability restructuring, credit assessment, and cashflow alignment with SDB policies.",
              action: "Book Free Advisory Session",
            },
            {
              id: "monshaat",
              name: "Monsha'at SME Support Centers",
              entity: "Small and Medium Enterprises General Authority",
              badge: "Government Support",
              focus: "Business plan & feasibility study review, CR validation, and commercial licensing.",
              action: "Request Feasibility Review",
            },
            {
              id: "dulani",
              name: "Dulani Business Center",
              entity: "SDB Entrepreneurship Arm",
              badge: "1-on-1 Mentorship",
              focus: "Operational readiness, executive coaching, and pre-financing incubation programs.",
              action: "Join Qualification Program",
            },
            {
              id: "socpa",
              name: "SOCPA Certified Accounting Partners",
              entity: "Saudi Organization for Certified Public Accountants",
              badge: "Financial Compliance",
              focus: "Audited financial statements, bookkeeping cleanup, and 3-year cashflow forecasting.",
              action: "Connect with Certified Accountant",
            },
          ],
        },
      },
    },

    // Demo Scenarios Switcher
    demoToolbar: {
      label: "Judge / Demo Scenario Presets:",
      scenario1: "Scenario 1: Ready (92%)",
      scenario2: "Scenario 2: Attention (74%)",
      scenario3: "Scenario 3: Not Ready (51%)",
      custom: "Reset to Blank",
      desc1: "Tech firm • Strong cashflow • Ufuq fit",
      desc2: "Retail SME • Missing projections • Suggests Ufuq",
      desc3: "Early Idea • High debt • Missing CR",
    },

    // Rejection Recovery Modal
    recoveryModal: {
      title: "EcoMat Transparent Recovery Plan",
      subtitle: "Personalized 90-Day Action Roadmap to Turn Rejection into Approval",
      caseId: "Application Ref: SDB-2026-94821",
      primaryReason: "Primary Gap: Debt-to-Revenue Ratio Exceeded Limit",
      scoreWas: "Readiness Score at Decision: 54 / 100",
      roadmapTitle: "Your 3-Phase Recovery Roadmap",
      phases: [
        {
          phase: "Days 1 – 30: Financial Re-balancing",
          action: "Restructure existing short-term debt obligation to free up SAR 2,500/mo in verifiable operating cashflow.",
          partner: "SDB Financial Advisory Clinic",
        },
        {
          phase: "Days 31 – 60: Verification & Revenue Stability",
          action: "Consolidate POS sales directly into the official commercial bank account to establish a consistent 3-month trailing revenue record.",
          partner: "Monsha'at SME Advisory",
        },
        {
          phase: "Days 61 – 90: Re-submission Preparation",
          action: "Re-run EcoMat AI Readiness Check with adjusted loan amount (SAR 180,000) for an estimated 88/100 readiness score.",
          partner: "EcoMat Instant Re-check",
        },
      ],
      closeBtn: "Close Recovery Plan",
      startRecoveryBtn: "Book Free SDB Advisory Session",
    },

    // Login Mock Modal
    loginModal: {
      title: "Entrepreneur Portal Login",
      subtitle: "Sign in with your National ID via Nafath or EcoMat credentials",
      nafathBtn: "Login via Nafath (نفاذ الوطني الموحد)",
      orDivider: "or enter email",
      emailLabel: "Email or National ID",
      passLabel: "Password",
      btnSubmit: "Sign In",
      demoHint: "Demo Prototype: Click Nafath or Sign In to simulate authenticated session.",
      close: "Close",
    },
  },

  ar: {
    // Brand & Header
    brandName: "إيكومات",
    brandTagline: "الطبقة الذكية لرحلة تمويل بنك التنمية الاجتماعية",
    hackathonNotice: "نموذج أولي للهاكاثون — مستوحى من بنك التنمية الاجتماعية",
    nav: {
      home: "الرئيسية",
      howItWorks: "كيف يعمل إيكومات",
      features: "المميزات",
      impact: "الأثر والنتائج",
      apply: "قدّم الآن",
      login: "تسجيل الدخول",
      startApplication: "ابدأ طلب التمويل",
    },

    // Hero Section
    hero: {
      tag: "الطبقة الذكية لتمويل بنك التنمية الاجتماعية",
      headline: "لا تجعل الرفض أول مرة تكتشف فيها أنك غير مستعد.",
      subheadline: "يساعد إيكومات رواد الأعمال في اختيار التمويل الأنسب، وإعداد طلبات أقوى، وفهم قرارات التمويل بوضوح، والنمو المستدام بعد الموافقة.",
      ctaReadiness: "افحص جاهزية طلبي",
      ctaHowItWorks: "كيف يعمل إيكومات",
      dashboardPreview: {
        title: "جاهزية طلب التمويل",
        scoreLabel: "مؤشر الجاهزية",
        eligibility: "معايير الأهلية",
        documents: "المستندات المطلوبة",
        financials: "المعلومات المالية",
        statusReady: "جاهز للتقديم",
        statusAttention: "يحتاج تحسينات",
        recommendedTitle: "التمويل الموصى به من البنك",
        recommendedProduct: "تمويل أفق (Ufuq)",
        recommendedBadge: "الخيار الأمثل لمشروعك",
        viewDetails: "معاينة التقرير المباشر",
      },
    },

    // Problem Section
    problem: {
      tag: "التحدي القائم",
      title: "رحلة التمويل لا يجب أن تبدأ بالغموض والتردد.",
      subtitle: "الحصول على التمويل خطوة مصيرية لأي رائد أعمال، لكن الرحلة الحالية مليئة بالتساؤلات الصعبة في كل مرحلة.",
      cards: [
        {
          phase: "المرحلة الأولى: قبل التقديم",
          icon: "HelpCircle",
          title: "حيرة ما قبل التقديم",
          questions: [
            "هل مشروعي مؤهل فعلياً لهذا المسار التمويلي؟",
            "هل رفعت كافة المستندات الصحيحة والمطلوبة؟",
            "هل أتقدم للمنتج التمويلي الأنسب لحجم مشروعي؟",
          ],
          solution: "يقوم ذكاء إيكومات بفحص كامل الجاهزية قبل الإرسال الرسمي للبنك.",
        },
        {
          phase: "المرحلة الثانية: بعد الرفض",
          icon: "AlertTriangle",
          title: "غموض أسباب الرفض",
          questions: [
            "لماذا تم رفض طلبي وما السبب الدقيق؟",
            "ما هي الفجوة المالية أو الوثائقية التي حدثت؟",
            "ما هي الخطوات الإجرائية التالية التي يجب علي اتخاذها؟",
          ],
          solution: "يقدم إيكومات تحليلاً شفافاً لأسباب القرار وخطة تعافي إرشادية مدتها 90 يوماً.",
        },
        {
          phase: "المرحلة الثالثة: بعد الموافقة",
          icon: "TrendingUp",
          title: "استدامة ما بعد التمويل",
          questions: [
            "كيف أدير مبلغ التمويل بأعلى كفاءة تشغيلية؟",
            "أين أجد الدعم الاستشاري والإرشاد المعتمد في المملكة؟",
            "كيف تتواءم أقساط السداد مع تدفقاتي النقدية الموسمية؟",
          ],
          solution: "يوفر إيكومات لوحة متابعة للمعالم التشغيلية ونموذج 'السداد المرن مع النمو'.",
        },
      ],
    },

    // How EcoMat Works Section
    howItWorks: {
      tag: "رحلة متكاملة من 4 خطوات",
      title: "كيف يعمل إيكومات",
      subtitle: "طبقة ذكاء استباقية ترافق رائد الأعمال عبر كافة مراحل التمويل.",
      steps: [
        {
          step: "01",
          title: "افحص (CHECK)",
          description: "يقوم الذكاء الاصطناعي بمراجعة شاملة لبياناتك المالية ومعايير الأهلية قبل الإرسال الرسمي.",
          badge: "قبل التقديم",
        },
        {
          step: "02",
          title: "جهّز (PREPARE)",
          description: "اكتشف النواقص في المستندات، والتناقضات المالية، وفجوات الأهلية وعالجها مسبقاً.",
          badge: "إرشاد ومعالجة",
        },
        {
          step: "03",
          title: "قدّم وافهم (APPLY & UNDERSTAND)",
          description: "قدّم ملفاً متكاملاً وافهم أسباب وتفاصيل القرار التمويلي النهائي بكل شفافية ووضوح.",
          badge: "شفافية كاملة",
        },
        {
          step: "04",
          title: "توسّع وانمُ (GROW)",
          description: "تابع معالم الصرف والنمو، وتواصل مع الشركاء والمستشارين المعتمدين لتوسيع أعمالك.",
          badge: "نمو مستدام",
        },
      ],
    },

    // AI Readiness Check Section
    readiness: {
      tag: "محرك التشخيص الذكي",
      title: "اعرف فرص جاهزيتك قبل أن تقدم.",
      subtitle: "نظام تقييم تنبؤي يفحص طلبك ويقارنه مع معايير بنك التنمية الاجتماعية فورياً وبدقة عالية.",
      overallScore: "معدل الجاهزية العام",
      dimensions: {
        eligibility: "معايير وشروط الأهلية",
        documents: "اكتمال وصحة المستندات",
        financials: "الجاهزية والقدرة المالية",
        completeness: "اكتمال حقول الطلب",
      },
      checklistTitle: "نقاط يجب معالجتها قبل الإرسال النهائي",
      items: [
        { status: "done", text: "اكتمال دراسة التوقعات والتدفقات النقدية للمشروع" },
        { status: "warning", text: "تحديث السجل التجاري والتأكد من سريان مفعوله" },
        { status: "warning", text: "معالجة التباين بين كشوف الحساب البنكي ومبلغ التمويل المطلوب" },
      ],
      cta: "افحص طلبك الآن",
    },

    // Smart Financing Recommendation Section
    recommendation: {
      tag: "المطابقة الذكية للمنتجات",
      title: "هل تتقدم للمنتج التمويلي الأنسب لمشروعك؟",
      subtitle: "يحلل إيكومات مرحلة نمو مشروعك، وإيراداتك الشهرية، وهدف التمويل، ليوصيك بمنتج بنك التنمية الاجتماعية ذي الفرصة الأعلى لنجاحك.",
      currentCard: {
        label: "اختيارك الحالي",
        name: "تمويل رواد الأعمال",
        limit: "حتى 300,000 ريال",
        purpose: "دعم المنشآت الجديدة في بداياتها",
      },
      recommendedCard: {
        label: "المنتج الموصى به ذكياً",
        name: "تمويل أفق (Ufuq)",
        limit: "حتى 10,000,000 ريال",
        purpose: "المنشآت القائمة ذات الإيرادات ومسارات النمو السريع",
        matchScore: "96% مطابقة مثالية",
      },
      reasonTitle: "لماذا يوصي إيكومات بهذا المنتج؟",
      reasonText: "بناءً على عمر مشروعك التشغيلي (أكثر من سنتين)، ومعدل إيراداتك الشهرية الحالية (85,000+ ريال)، وغرض التمويل التوسعي، فإن 'تمويل أفق' يوفر شروطاً أكثر ملاءمة، وسقفاً تمويلياً أعلى، وخدمات إرشاد نوعية تفوق مسارات التأسيس الأولية.",
      btnSwitch: "التحويل إلى تمويل أفق",
      btnCompare: "مقارنة كافة منتجات البنك",
      disclaimer: "التوصيات استرشادية ولا تضمن الأهلية أو الموافقة التمويلية. القرار النهائي يخضع بالكامل لسياسات بنك التنمية الاجتماعية.",
    },

    // Transparent Rejection Section
    rejection: {
      tag: "شفافية تمكينية",
      title: "الرفض لا يجب أن يكون نهاية الطريق.",
      subtitle: "نحول إشعارات الرفض المبهمة إلى خارطة طريق إرشادية واضحة تقودك نحو الموافقة المستقبلية.",
      statusBadge: "حالة الطلب: غير معتمد حالياً",
      primaryReasonLabel: "السبب الرئيسي المحدد في التقييم",
      primaryReason: "معيار الملاءمة المالية ونسبة الالتزامات الشهرية إلى الإيرادات",
      cards: [
        {
          title: "ماذا يعني هذا القرار؟",
          desc: "مبلغ التمويل المطلوب حالياً يفوق النسبة الآمنة لتغطية خدمة الدين بناءً على متوسط الإيداعات البنكية الموثقة لآخر 6 أشهر.",
        },
        {
          title: "ما العوامل التي ساهمت في ذلك؟",
          desc: "تذبذب الإيرادات الشهرية الأخيرة ووجود التزام تمويلي قائم خفّض صافي التدفق النقدي الحر دون الحد الأدنى المطلوب (1.25x).",
        },
        {
          title: "ما الذي يمكنك تحسينه؟",
          desc: "تعديل مبلغ التمويل المطلوب إلى 180,000 ريال، أو إرفاق فواتير مبيعات آجلة لـ 3 أشهر تثبت استقرار التدفقات النقدية.",
        },
        {
          title: "الخطوات الإجرائية الموصى بها",
          desc: "الالتحاق ببرنامج التخطيط المالي لدى عيادات الأعمال بالبنك، وإعادة التقديم خلال 45 يوماً مع تحديث القوائم الربعية.",
        },
      ],
      cta: "عرض خطة التعافي لـ 90 يوماً",
    },

    // After Approval Section
    afterApproval: {
      tag: "ما بعد الموافقة والتمكين",
      title: "التمويل هو البداية، وليس خط النهاية.",
      subtitle: "نرافق مشروعك إلى ما بعد استلام رأس المال من خلال تتبع معالم الإنجاز والربط مع منظومة الدعم الوطنية.",
      dashboardTitle: "لوحة متابعة التمويل ومسار النمو",
      financingAmount: "250,000 ريال",
      financingLabel: "مبلغ التمويل المعتمد من البنك",
      progressLabel: "نسبة إنجاز المعالم التشغيلية",
      progressValue: "78%",
      milestonesTitle: "معالم رحلة المشروع",
      milestones: [
        { title: "صرف الدفعة التمويلية وتفعيل الحساب", status: "completed", date: "الشهر 1" },
        { title: "توسيع المقر وإطلاق المنصة الإلكترونية", status: "completed", date: "الشهر 3" },
        { title: "الوصول إلى 500 عميل نشط شهرياً", status: "active", date: "الشهر 6 (قيد التنفيذ)" },
        { title: "تحقيق مستهدف الإيراد السنوي المستدام", status: "upcoming", date: "الشهر 12" },
      ],
      supportTitle: "خدمات شركاء المنظومة الوطنية",
      supportSubtitle: "تواصل مباشرة مع نخبة من الخبراء والمستشارين المعتمدين:",
      supportItems: [
        { title: "التسويق والنمو", desc: "استشارات الحملات الرقمية واستقطاب العملاء المحليين.", icon: "Megaphone" },
        { title: "الاستشارات المالية", desc: "إدارة التدفقات النقدية والامتثال لضريبة القيمة المضافة والمحاسبة.", icon: "Calculator" },
        { title: "الإرشاد التنفيذي", desc: "جلسات إرشاد وتوجيه 1-على-1 مع رواد أعمال سعوديين متمرسين.", icon: "Users" },
      ],
    },

    // Pay As You Grow Section
    payAsYouGrow: {
      tag: "مفهوم السداد المبتكر",
      title: "نموذج سداد ينمو مع نمو مشروعك.",
      subtitle: "نقدم مفهوم 'السداد مع النمو (Pay as You Grow)': نموذج سداد يتناسب طردياً مع إيراداتك الفعلية لحماية المنشأة في فترات الركود والبدايات.",
      howItWorks: "كيف يعمل مفهوم السداد مع النمو:",
      ruleLow: "إيرادات شهرية أقل ← نسبة مساهمة سداد أقل (تخفيف العبء المالي)",
      ruleHigh: "إيرادات شهرية أعلى ← مساهمة سداد أكبر (تسريع سداد التمويل)",
      interactiveLabel: "محاكي الإيرادات التفاعلي",
      sliderLabel: "حرّك المؤشر لتغيير الإيراد الشهري الافتراضي (ريال)",
      currentRevLabel: "الإيراد الشهري التقديري:",
      calculatedRateLabel: "نسبة الاقتطاع المرنة:",
      calculatedAmountLabel: "قيمة القسط الشهري المحسوب:",
      benchmarks: [
        { rev: "20,000 ريال", rate: "5%", monthly: "1,000 ريال / شهر", note: "تخفيف العبء في مواسم الركود" },
        { rev: "40,000 ريال", rate: "8%", monthly: "3,200 ريال / شهر", note: "قسط متوازن في مرحلة الاستقرار" },
        { rev: "70,000 ريال", rate: "12%", monthly: "8,400 ريال / شهر", note: "تسريع السداد في مواسم النمو العالي" },
      ],
      disclaimer: "مفهوم توضيحي مقترح للهاكاثون — وليس شروطاً رسمية معتمدة حالياً لدى بنك التنمية الاجتماعية.",
    },

    // Impact Section
    impact: {
      tag: "الأثر على المنظومة",
      title: "من طلبات أفضل إلى منشآت أعمال أقوى.",
      subtitle: "أثر ملموس وقابل للقياس على امتداد منظومة التمويل وريادة الأعمال السعودية.",
      metrics: [
        { value: "↓ 65%", label: "أخطاء الطلبات", desc: "بفضل التدقيق المسبق للبيانات والوثائق" },
        { value: "↓ 80%", label: "الطلبات غير المكتملة", desc: "قائمة تحقق إلزامية قبل التقديم" },
        { value: "↓ 72%", label: "حيرة المتقدمين", desc: "وضوح شروط الأهلية والمنتج الأنسب" },
        { value: "↑ 94%", label: "جاهزية ملفات التقديم", desc: "ملفات متكاملة ومستوفية للمعايير" },
        { value: "↑ 100%", label: "شفافية القرارات", desc: "أسباب واضحة ومقترحات عملية لكل نتيجة" },
        { value: "↑ 3.2x", label: "رحلات تمويل ناجحة", desc: "دعم مستمر للمشروع حتى الاستقرار والنمو" },
      ],
      statement: "«هدفنا ليس مجرد زيادة عدد الموافقات.. بل زيادة رحلات التمويل الناجحة والمستدامة.»",
      statementSub: "تمكين رواد الأعمال السعوديين بالوضوح والموثوقية والنمو المستدام.",
    },

    // Final CTA
    finalCTA: {
      title: "استعد قبل أن تُقدّم.",
      subtitle: "دع إيكومات يساعدك على استكشاف خياراتك، ومعالجة فجوات ملفك، وتقديم أقوى طلب تمويل لبنك التنمية الاجتماعية.",
      btn: "ابدأ طلب التمويل الآن",
      secondaryBtn: "تجربة سيناريوهات المحاكاة",
    },

    // Footer
    footer: {
      desc: "إيكومات هو طبقة ذكية مقترحة لمنظومة بنك التنمية الاجتماعية (SDB). صُمم ضمن هاكاثون بنك التنمية الاجتماعية لتمكين رواد الأعمال.",
      quickLinks: "روابط سريعة",
      legalTitle: "إخلاء مسؤولية الهاكاثون",
      legalText: "هذا الموقع نموذج أولي تجريبي تم تطويره لأغراض الهاكاثون. إيكومات هو مفهوم مقترح ولا يمثل موقعاً أو خدمات تعاقدية رسمية لبنك التنمية الاجتماعية.",
      rights: "إيكومات — نموذج أولي لهاكاثون بنك التنمية الاجتماعية. جميع الحقوق محفوظة.",
      sdbLink: "زيارة بوابة بنك التنمية الاجتماعية الرسمية (sdb.gov.sa)",
    },

    // Application Wizard (/apply)
    wizard: {
      badge: "المعالج الذكي لتمويل بنك التنمية الاجتماعية",
      title: "طلب التمويل الذكي من إيكومات",
      subtitle: "أكمل الخطوات الخمس أدناه لتشخيص ملفك وتقييم جاهزيتك التمويلية بالذكاء الاصطناعي فورياً.",
      steps: [
        { number: 1, title: "مقدم الطلب", desc: "البيانات الشخصية" },
        { number: 2, title: "المشروع", desc: "السجل والنشاط" },
        { number: 3, title: "التمويل", desc: "المبلغ والالتزامات" },
        { number: 4, title: "المستندات", desc: "الرفع والتحقق" },
        { number: 5, title: "المراجعة", desc: "تأكيد البيانات" },
        { number: 6, title: "الجاهزية الذكية", desc: "التشخيص والمطابقة" },
      ],
      buttons: {
        back: "الخطوة السابقة",
        next: "متابعة",
        runAICheck: "تشغيل فحص إيكومات بالذكاء الاصطناعي",
        backToHome: "العودة للرئيسية",
        edit: "تعديل",
        submitting: "جارٍ تحليل الطلب بالذكاء الاصطناعي...",
      },
      step1: {
        title: "بيانات مقدم الطلب",
        subtitle: "أدخل البيانات الشخصية الموثقة لصاحب المنشأة أو رائد الأعمال.",
        fullName: "الاسم الكامل (كما هو بالهوية الوطنية / الإقامة)",
        nationalId: "رقم الهوية الوطنية / الإقامة (10 أرقام)",
        mobile: "رقم الجوال (05xxxxxxxx)",
        email: "البريد الإلكتروني",
        city: "المدينة / المنطقة",
        applicantType: "صفة المتقدم",
        types: ["رائد أعمال (ذكر)", "رائدة أعمال (أنثى)", "أسرة منتجة", "عمل حر / مهني مستقل"],
      },
      step2: {
        title: "الملف التعريفي للمشروع",
        subtitle: "أخبرنا عن منشأتك القائمة أو فكرة مشروعك الجديد.",
        businessName: "اسم المنشأة / المشروع التجاري",
        businessType: "الشكل القانوني للمنشأة",
        types: ["مؤسسة فردية", "شركة ذات مسؤولية محدودة (LLC)", "وثيقة عمل حر", "شركة ناشئة ابتكارية"],
        crNumber: "رقم السجل التجاري (اختياري للعمل الحر)",
        businessStage: "مرحلة المشروع الحالية",
        stages: ["فكرة / مرحلة التأسيس الأولي", "مرحلة مبكرة (أقل من سنة)", "منشأة نامية (1 إلى 3 سنوات)", "منشأة قائمة (أكثر من 3 سنوات)"],
        sector: "القطاع الاقتصادي",
        sectors: ["التجزئة والتجارة الإلكترونية", "تقنية المعلومات والبرمجيات", "الأغذية والمشروبات والضيافة", "الخدمات اللوجستية والنقل", "الصناعة والإنتاج", "الصحة والرياضة", "الخدمات المهنية والاستشارات"],
        yearsInOperation: "سنوات التشغيل الفعلي",
        employees: "عدد الموظفين السعوديين / الإجمالي",
        monthlyRevenue: "متوسط الإيراد الشهري التقديري (ريال)",
      },
      step3: {
        title: "المتطلبات والالتزامات المالية",
        subtitle: "حدد احتياجك التمويلي والتزاماتك المالية القائمة بدقة.",
        financingProduct: "منتج التمويل المستهدف لدى البنك",
        products: ["تمويل رواد الأعمال", "تمويل أفق (Ufuq)", "تمويل المشاريع الناشئة", "مسار التميز", "تمويل العمل الحر"],
        requestedAmount: "مبلغ التمويل المطلوب (ريال)",
        purpose: "الغرض الأساسي من التمويل",
        purposes: ["رأس مال عامل وشراء مخزون", "شراء آلات ومعدات وتجهيز تقني", "توسيع الفروع والتهيئة الإنشائية", "التوظيف والتوسع التسويقي"],
        useOfFunds: "تفصيل أوجه صرف التمويل",
        expectedRevenue: "الإيراد الشهري المتوقع بعد التمويل (ريال)",
        financialObligations: "الالتزامات والأقساط المالية الشهرية القائمة (ريال)",
      },
      step4: {
        title: "المستندات والوثائق المطلوبة",
        subtitle: "ارفع الوثائق الداعمة ليقوم الذكاء الاصطناعي بفحص اكتمالها وصحتها.",
        dragDrop: "اسحب وأفلت الملفات هنا، أو",
        browse: "استعرض من جهازك",
        supportedFormats: "صيغ مدعومة: PDF, PNG, JPG (حجم أقصى 10MB)",
        docs: [
          { key: "cr", name: "السجل التجاري (CR)", req: true, desc: "نسخة سارية المفعول من وزارة التجارة" },
          { key: "financials", name: "القوائم المالية / التوقعات", req: true, desc: "قائمة الدخل أو توقعات التدفقات لـ 3 سنوات" },
          { key: "bank", name: "كشف حساب بنكي (6 أشهر)", req: true, desc: "كشف بنكي رسمي مختوم يوضح الآيبان والرصيد" },
          { key: "plan", name: "خطة العمل ودراسة الجدوى", req: false, desc: "الخطة التشغيلية وتحليل السوق التنافسي" },
          { key: "support", name: "التراخيص والعقود الداعمة", req: false, desc: "رخصة بلدي، عقد الإيجار، أو عروض أسعار الموردين" },
        ],
        uploaded: "تم الرفع بنجاح",
        notUploaded: "في انتظار الرفع",
      },
      step5: {
        title: "مراجعة ملف التقديم",
        subtitle: "يرجى مراجعة كافة البيانات المدخلة قبل بدء التشخيص الذكي بالذكاء الاصطناعي.",
        sectionApplicant: "بيانات مقدم الطلب",
        sectionBusiness: "ملف المشروع",
        sectionFinancing: "شروط واحتياج التمويل",
        sectionDocuments: "المستندات المرفقة",
      },
      step6: {
        loadingTitle: "يقوم ذكاء إيكومات بتحليل طلبك الآن...",
        loadingSubtitle: "فحص معايير الأهلية، ومطابقة البيانات مع المستندات، واحتساب نسب الملاءمة المالية ومطابقة المنتج مع معايير بنك التنمية الاجتماعية.",
        readyTitle: "اكتمل تقييم الجاهزية بالذكاء الاصطناعي",
        scoreLabel: "مؤشر الجاهزية",
        dimensions: {
          eligibility: "مطابقة شروط ومعايير الأهلية",
          documents: "اكتمال وموثوقية المستندات",
          financials: "الصحة والملاءمة المالية",
          completeness: "اكتمال كافة حقول الطلب",
        },
        strongTitle: "نقاط القوة المكتملة (✓)",
        attentionTitle: "نقاط تحتاج اهتماماً وتحسيناً (⚠)",
        issuesTitle: "فجوات حرجة يجب معالجتها (🔴)",
        recommendationTitle: "توصية إيكومات بالمنتج الأنسب",
        currentSelected: "المنتج المحدد حالياً في طلبك",
        recommendedProduct: "منتج البنك الموصى به ذكياً",
        matchBadge: "الخيار الأنسب",
        switchBtn: "التحويل إلى المنتج الموصى به",
        keepBtn: "الإبقاء على المنتج الحالي",
        productSwitched: "تم تحديث المنتج بنجاح!",
        readyToSubmit: "ملفك جاهز للتقديم لدى البنك!",
        readyToSubmitDesc: "حقق ملفك معايير جاهزية متقدمة تؤهلك للمنافسة بقوة. يمكنك المتابعة للتقديم الرسمي لدى بنك التنمية الاجتماعية.",
        fixBeforeSubmit: "إجراءات مطلوبة قبل التقديم الرسمي",
        fixBeforeSubmitDesc: "معالجة النقاط الموضحة أعلاه سترفع فرص اعتماد طلبك وتتفادى التأخير أو الرفض الأولي.",
        btnProceedSDB: "المتابعة للتقديم الرسمي في بوابة البنك",
        btnEditApp: "تعديل بيانات الملف",
        btnDownloadReport: "تحميل تقرير الجاهزية (PDF)",
        disclaimer: "فحص الجاهزية الذكي من إيكومات أداة استرشادية ولا يمثل ضماناً للموافقة على القرض. القرار النهائي يخضع بالكامل لسياسات بنك التنمية الاجتماعية (SDB).",
        partnersRecovery: {
          title: "شركاء الدعم والاستشارات الموصى بهم للتعافي",
          subtitle: "بناءً على فجوات التقييم الحالية، نوصي بالتواصل مع هؤلاء الشركاء المعتمدين لتطوير نموذج العمل وإعادة هيكلة الالتزامات والتأهل للتمويل.",
          bookingToast: "تم تقديم طلب الاستشارة بنجاح! سيتواصل معك مستشار الشريك المعتمد خلال 24 ساعة.",
          partners: [
            {
              id: "sdb_clinics",
              name: "عيادات الأعمال",
              entity: "بنك التنمية الاجتماعية",
              badge: "خدمة رسمية مجانية",
              focus: "استشارات متخصصة لإعادة هيكلة الالتزامات المالية وتحسين الجدارة الائتمانية للمنشأة.",
              action: "حجز جلسة استشارية مجانية",
            },
            {
              id: "monshaat",
              name: "مراكز دعم المنشآت",
              entity: "الهيئة العامة للمنشآت الصغيرة والمتوسطة (منشآت)",
              badge: "جهة حكومية داعمة",
              focus: "مراجعة دراسة الجدوى وتدقيق التراخيص والسجل التجاري وتطوير نموذج العمل التجاري.",
              action: "طلب مراجعة دراسة الجدوى",
            },
            {
              id: "dulani",
              name: "مركز دلني للأعمال",
              entity: "ذراع بنك التنمية لريادة الأعمال",
              badge: "إرشاد تنفيذي مباشر",
              focus: "تطوير الجاهزية التشغيلية وتقديم برامج تأهيل مكثفة لما قبل التمويل.",
              action: "الانضمام لبرنامج التأهيل",
            },
            {
              id: "socpa",
              name: "شركاء المحاسبة المعتمدين (SOCPA)",
              entity: "الهيئة السعودية للمراجعين والمحاسبين",
              badge: "امتثال مالي ومحاسبي",
              focus: "إعداد القوائم المالية المدققة، وتدقيق الدفاتر المحاسبية، والتوقعات المالية لـ 3 سنوات.",
              action: "التواصل مع محاسب معتمد",
            },
          ],
        },
      },
    },

    // Demo Scenarios Switcher
    demoToolbar: {
      label: "سيناريوهات التحكيم والعرض التجريبي السريع:",
      scenario1: "السيناريو 1: جاهز (92%)",
      scenario2: "السيناريو 2: يحتاج تحسين (74%)",
      scenario3: "السيناريو 3: غير جاهز (51%)",
      custom: "إعادة ضبط فارغ",
      desc1: "شركة تقنية • تدفق مالي قوي • ملاءمة أفق",
      desc2: "منشأة تجزئة • نقص توقعات • يوصي بـ أفق",
      desc3: "فكرة أولية • ديون مرتفعة • غياب السجل",
    },

    // Rejection Recovery Modal
    recoveryModal: {
      title: "خطة التعافي الشفافة من إيكومات",
      subtitle: "خارطة طريق مخصصة لـ 90 يوماً لتحويل الرفض إلى موافقة تمويلية ناجحة",
      caseId: "رقم مرجع الطلب: SDB-2026-94821",
      primaryReason: "الفجوة الأساسية: تجاوز نسبة الالتزامات الشهرية للحد المسموح",
      scoreWas: "مؤشر الجاهزية وقت اتخاذ القرار: 54 / 100",
      roadmapTitle: "خارطة طريق التعافي على 3 مراحل",
      phases: [
        {
          phase: "الأيام 1 – 30: إعادة هيكلة الالتزامات",
          action: "إعادة جدولة الالتزام التمويلي قصير الأجل لتوفير 2,500 ريال شهرياً كتدفق نقدي تشغيلي حر وموثق.",
          partner: "عيادات الأعمال ببنك التنمية الاجتماعية",
        },
        {
          phase: "الأيام 31 – 60: توثيق المبيعات واستقرار الإيراد",
          action: "إيداع كافة مبيعات نقاط البيع (POS) مباشرة في الحساب البنكي التجاري لإثبات استقرار الإيراد لـ 3 أشهر متتالية.",
          partner: "مركز دعم المنشآت (منشآت)",
        },
        {
          phase: "الأيام 61 – 90: إعادة التقديم بجاهزية عالية",
          action: "إعادة فحص الجاهزية عبر إيكومات بمبلغ تمويل معدل (180,000 ريال) لتحقيق مؤشر جاهزية متوقع 88/100.",
          partner: "فحص إيكومات الذكي الفوري",
        },
      ],
      closeBtn: "إغلاق خطة التعافي",
      startRecoveryBtn: "حجز جلسة استشارية مجانية لدى البنك",
    },

    // Login Mock Modal
    loginModal: {
      title: "بوابة دخول رواد الأعمال",
      subtitle: "سجل الدخول برقم الهوية الوطنية عبر نفاذ أو حساب إيكومات",
      nafathBtn: "الدخول عبر النفاذ الوطني الموحد (نفاذ)",
      orDivider: "أو عبر البريد الإلكتروني",
      emailLabel: "البريد الإلكتروني أو رقم الهوية",
      passLabel: "كلمة المرور",
      btnSubmit: "تسجيل الدخول",
      demoHint: "نموذج الهاكاثون: اضغط نفاذ أو دخول لمحاكاة جلسة مسجلة فورياً.",
      close: "إغلاق",
    },
  },
};
