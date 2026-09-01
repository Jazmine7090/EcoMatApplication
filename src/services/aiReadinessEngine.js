/**
 * EcoMat Deterministic AI Readiness Assessment Engine
 * 
 * You can easily modify, add, or customize scenarios below!
 * Each scenario defines the applicant's financial profile, CR status, and document readiness.
 */

export const DEMO_SCENARIOS = {
  READY: {
    id: "ready",
    labelEn: "Scenario 1: Ready (92%)",
    labelAr: "السيناريو 1: جاهز للتقديم (92%)",
    targetScore: 92,
    descEn: "Tech SaaS • High Cashflow • Ufuq Optimal Fit",
    descAr: "منشأة تقنية • تدفق نقدي قوي • ملاءمة أفق",
    data: {
      fullName: "Faisal Al-Otaibi",
      nationalId: "1082947192",
      mobile: "0504938210",
      email: "faisal@alotaibi-tech.sa",
      city: "Riyadh",
      applicantType: "Saudi Male Entrepreneur",
      businessName: "CloudPulse Logistics Tech",
      businessType: "LLC (شركة ذات مسؤولية محدودة)",
      crNumber: "1010849201",
      businessStage: "Established (3+ Years)",
      sector: "Information Technology & SaaS",
      yearsInOperation: "3.5",
      employees: "8",
      monthlyRevenue: "120000",
      financingProduct: "Ufuq Financing (تمويل أفق)",
      requestedAmount: "600000",
      purpose: "Capital Equipment & Tech Infrastructure",
      useOfFunds: "Cloud server infrastructure expansion and automated API warehouse integration.",
      expectedRevenue: "210000",
      financialObligations: "8000",
      documents: {
        cr: { uploaded: true, name: "CR_1010849201_Active.pdf", valid: true },
        financials: { uploaded: true, name: "Audited_Financials_2025.pdf", valid: true },
        bank: { uploaded: true, name: "Alinma_Bank_Statement_6M.pdf", valid: true },
        plan: { uploaded: true, name: "Feasibility_Study_CloudPulse.pdf", valid: true },
        support: { uploaded: true, name: "SaaS_Supplier_Contracts.pdf", valid: true },
      },
    },
  },

  NEEDS_ATTENTION: {
    id: "attention",
    labelEn: "Scenario 2: Needs Attention (74%)",
    labelAr: "السيناريو 2: يحتاج تحسينات (74%)",
    targetScore: 74,
    descEn: "F&B Retail • Missing Projections • Suggests Ufuq",
    descAr: "قطاع الأغذية • نقص توقعات • يوصي بـ أفق",
    data: {
      fullName: "Sara Al-Dosari",
      nationalId: "1093847291",
      mobile: "0559382019",
      email: "sara@dar-alnakhla.sa",
      city: "Dammam / Eastern",
      applicantType: "Saudi Female Entrepreneur",
      businessName: "Dar Al-Nakhla Specialty Cafe",
      businessType: "Sole Proprietorship (مؤسسة فردية)",
      crNumber: "2050983741",
      businessStage: "Growing (1 - 3 Years)",
      sector: "Food & Beverage / Hospitality",
      yearsInOperation: "2",
      employees: "5",
      monthlyRevenue: "85000",
      financingProduct: "Entrepreneurs Financing (تمويل رواد الأعمال)",
      requestedAmount: "450000",
      purpose: "Branch Expansion & Renovation",
      useOfFunds: "Opening a second central branch and purchasing packaging lines.",
      expectedRevenue: "140000",
      financialObligations: "14000",
      documents: {
        cr: { uploaded: true, name: "Commercial_Register_2050983741.pdf", valid: true },
        financials: { uploaded: false, name: "", valid: false }, // Missing financials
        bank: { uploaded: true, name: "SNB_Bank_Statement_6M.pdf", valid: true },
        plan: { uploaded: true, name: "Khobar_Expansion_Plan.pdf", valid: true },
        support: { uploaded: false, name: "", valid: false },
      },
    },
  },

  NOT_READY: {
    id: "not_ready",
    labelEn: "Scenario 3: Not Ready (51%)",
    labelAr: "السيناريو 3: غير جاهز حالياً (51%)",
    targetScore: 51,
    descEn: "Idea Stage • High Debt • Missing CR",
    descAr: "فكرة أولية • ديون مرتفعة • غياب السجل",
    data: {
      fullName: "Rakan Al-Ghamdi",
      nationalId: "1074928103",
      mobile: "0548392019",
      email: "rakan.ghamdi@gmail.com",
      city: "Jeddah",
      applicantType: "Saudi Male Entrepreneur",
      businessName: "EcoRide Urban Scooters",
      businessType: "Sole Proprietorship (مؤسسة فردية)",
      crNumber: "", // Missing CR
      businessStage: "Idea / Pre-Revenue",
      sector: "Retail & E-Commerce",
      yearsInOperation: "0.2",
      employees: "1",
      monthlyRevenue: "12000",
      financingProduct: "Entrepreneurs Financing (تمويل رواد الأعمال)",
      requestedAmount: "300000",
      purpose: "Working Capital & Inventory",
      useOfFunds: "Importing 100 electric scooters and marketing.",
      expectedRevenue: "35000",
      financialObligations: "7500", // High debt ratio
      documents: {
        cr: { uploaded: false, name: "", valid: false },
        financials: { uploaded: false, name: "", valid: false },
        bank: { uploaded: true, name: "Personal_Bank_Account.pdf", valid: false },
        plan: { uploaded: false, name: "", valid: false },
        support: { uploaded: false, name: "", valid: false },
      },
    },
  },
};

/**
 * Core Assessment Evaluation Engine
 * Returns a comprehensive score (0-100), dimension breakdown, strengths, attention items,
 * critical issues, and smart SDB product recommendations.
 */
export function runReadinessAssessment(formData, scenarioKey = null, isArabic = false) {
  if (scenarioKey && DEMO_SCENARIOS[scenarioKey.toUpperCase()]) {
    const scenario = DEMO_SCENARIOS[scenarioKey.toUpperCase()];
    return generateStructuredReport(scenario.data, scenario.targetScore, isArabic);
  }

  const data = formData || {};
  let baseScore = 50;

  // Applicant check
  if (data.fullName && data.nationalId && data.mobile && data.city) baseScore += 10;

  // CR & Business Stage
  const hasCR = Boolean(data.crNumber && data.crNumber.length >= 7);
  const revenue = parseFloat(data.monthlyRevenue) || 0;
  const obligations = parseFloat(data.financialObligations) || 0;
  const requested = parseFloat(data.requestedAmount) || 0;

  if (hasCR) baseScore += 8;
  if (data.businessStage?.includes("Established") || data.businessStage?.includes("قائمة")) {
    baseScore += 8;
  } else if (data.businessStage?.includes("Growing") || data.businessStage?.includes("نامية")) {
    baseScore += 5;
  }

  // Debt-to-Revenue Ratio (DTI)
  const dti = revenue > 0 ? obligations / revenue : 1;
  if (revenue > 0 && dti < 0.2) {
    baseScore += 12;
  } else if (revenue > 0 && dti < 0.4) {
    baseScore += 6;
  } else {
    baseScore -= 10;
  }

  // Documents Check
  const docs = data.documents || {};
  const docCount = Object.values(docs).filter(d => d && d.uploaded).length;
  baseScore += Math.min(docCount * 4, 16);

  const finalScore = Math.max(35, Math.min(96, Math.round(baseScore)));
  return generateStructuredReport(data, finalScore, isArabic);
}

function generateStructuredReport(data, score, isArabic = false) {
  let status = "NEEDS_ATTENTION";
  if (score >= 85) status = "READY";
  else if (score < 65) status = "NOT_READY";

  const revenue = parseFloat(data.monthlyRevenue) || 0;
  const requested = parseFloat(data.requestedAmount) || 0;
  const obligations = parseFloat(data.financialObligations) || 0;
  const currentProduct = data.financingProduct || (isArabic ? "تمويل رواد الأعمال" : "Entrepreneurs Financing");

  const eligibilityScore = score >= 85 ? 95 : score >= 70 ? 84 : 58;
  const docsScore = (data.documents && data.documents.financials?.uploaded) ? 92 : 68;
  const financialScore = obligations / (revenue || 1) < 0.25 ? 89 : 62;
  const completenessScore = Math.min(98, score + 4);

  const strengths = [];
  if (score >= 70) {
    strengths.push(
      isArabic
        ? "استيفاء الهوية الوطنية ونطاق النشاط المصرح به لدى بنك التنمية الاجتماعية"
        : "Verified National ID, compliant enterprise category, and legal structure alignment"
    );
  }
  if (revenue >= 50000) {
    strengths.push(
      isArabic
        ? `سجل إيرادات تشغيلية موثق بمتوسط ${revenue.toLocaleString()} ريال شهرياً يدعم الجدارة الائتمانية`
        : `Verified operational track record averaging SAR ${revenue.toLocaleString()}/month supporting debt serviceability`
    );
  }
  if (data.documents?.cr?.uploaded) {
    strengths.push(
      isArabic
        ? "سجل تجاري نشط وسارٍ مطابق لبيانات وزارة التجارة"
        : "Active and validated Commercial Registration matching Ministry of Commerce records"
    );
  }
  if (strengths.length === 0) {
    strengths.push(
      isArabic
        ? "وضوح فكرة المشروع والقطاع المستهدف للاستثمار"
        : "Clear economic sector focus and defined operational scope"
    );
  }

  const attentionItems = [];
  if (!data.documents?.financials?.uploaded) {
    attentionItems.push(
      isArabic
        ? "إرفاق دراسة التوقعات والتدفقات النقدية التفصيلية (3 سنوات) لرفع ثقة المقيم المالي"
        : "Attach detailed 3-year financial projections and cashflow forecast to improve credit appraisal"
    );
  }
  if (obligations > 0.2 * revenue && obligations > 5000) {
    attentionItems.push(
      isArabic
        ? `نسبة الأقساط الشهرية الحالية (${obligations.toLocaleString()} ريال) تشكل عبئاً على التدفق النقدي الحر`
        : `Current monthly obligations (SAR ${obligations.toLocaleString()}) represent a significant draw on free operating cashflow`
    );
  }
  if (!data.documents?.plan?.uploaded) {
    attentionItems.push(
      isArabic
        ? "تضمين دراسة الجدوى التسويقية وخطط استقطاب العملاء في المنطقة المستهدفة"
        : "Include marketing feasibility study and local customer acquisition roadmap"
    );
  }

  const criticalIssues = [];
  if (!data.crNumber && (data.businessStage !== "Idea / Pre-Revenue" && data.businessStage !== "فكرة / مرحلة التأسيس الأولي")) {
    criticalIssues.push(
      isArabic
        ? "غياب رقم السجل التجاري الرسمي لمنشأة قائمة يتطلب تصحيحاً قبل التقديم"
        : "Missing official Commercial Registration (CR) number for an operating business"
    );
  }
  if (requested > (revenue * 12) && revenue > 0) {
    criticalIssues.push(
      isArabic
        ? "مبلغ التمويل المطلوب يفوق السقف الائتماني الموصى به نسبة للإيراد السنوي الحالي"
        : "Requested financing exceeds recommended prudential limit relative to current annual turnover"
    );
  }
  if (!data.documents?.bank?.uploaded) {
    criticalIssues.push(
      isArabic
        ? "كشف الحساب البنكي الرسمي لـ 6 أشهر إلزامي لإكمال الفحص"
        : "Official 6-month stamped bank account statement is mandatory for final assessment"
    );
  }

  let recommendedProduct = currentProduct;
  let needsSwitch = false;
  let reason = "";
  let matchScore = "96%";

  if ((revenue >= 60000 || data.yearsInOperation >= 2) && !currentProduct.includes("Ufuq") && !currentProduct.includes("أفق")) {
    recommendedProduct = isArabic ? "تمويل أفق (Ufuq)" : "Ufuq Financing (أفق)";
    needsSwitch = true;
    matchScore = "96%";
    reason = isArabic
      ? "بناءً على عمر مشروعك التشغيلي وسجل إيراداتك الشهرية المتنامي، فإن 'تمويل أفق' يتيح سقفاً أعلى حتى 10 ملايين ريال، مع فترات سماح أطول وخدمات دعم استراتيجي متقدمة."
      : "Based on your 2+ years operational track record and strong revenue velocity, Ufuq Financing unlocks capital limits up to SAR 10M, longer grace periods, and executive advisory support tailored for scale.";
  } else if (data.businessStage?.includes("Idea") || data.businessStage?.includes("فكرة") || revenue < 20000) {
    if (!currentProduct.includes("المشاريع الناشئة") && !currentProduct.includes("Emerging")) {
      recommendedProduct = isArabic ? "تمويل المشاريع الناشئة" : "Emerging Enterprises Track";
      needsSwitch = true;
      matchScore = "91%";
      reason = isArabic
        ? "لمرحلة التأسيس الأولي، يوفر مسار المشاريع الناشئة برامج احتضان مسبقة وتسهيلات ضمانات تخفف العبء التمويلي على المنشآت الجديدة."
        : "For pre-revenue and early-stage ventures, the Emerging Enterprises track provides pre-incubation backing and flexible collateral terms optimized for startups.";
    }
  }

  return {
    score,
    status,
    dimensions: {
      eligibility: eligibilityScore,
      documents: docsScore,
      financials: financialScore,
      completeness: completenessScore,
    },
    strengths,
    attentionItems,
    criticalIssues,
    productRecommendation: {
      currentProduct,
      recommendedProduct,
      needsSwitch,
      matchScore,
      reason,
    },
    nextSteps: isArabic
      ? score >= 85
        ? "ملفك مستوفٍ لكافة المعايير الموصى بها. اضغط أدناه للانتقال المباشر لبوابة التقديم لدى بنك التنمية الاجتماعية."
        : "راجع بنود التحسين أعلاه، وقم برفع المستندات المطلوبة أو تعديل مسار التمويل للحصول على درجة جاهزية مثالية."
      : score >= 85
        ? "Your dossier fulfills the optimal SDB readiness criteria. Click below to proceed to formal submission."
        : "Review the actionable guidance items above, upload missing documents, or adjust your financing track to maximize approval probability.",
  };
}
