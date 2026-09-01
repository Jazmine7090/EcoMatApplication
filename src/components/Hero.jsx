import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Building2,
  FileText
} from 'lucide-react';

export function Hero({ onStartApplication, onScrollToHowItWorks }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content styled matching reference */}
        <div className="hero-content">
          <div className="hero-sdb-tag animate-fade-in">
            <span className="sdb-concept-badge">
              <ShieldCheck size={13} />
              <span>{isArabic ? "مفهوم التحول التنموي 2030" : "SDB 2030 transformation concept"}</span>
            </span>
            <span className="sdb-concept-sub">
              {isArabic ? "نموذج تجريبي تفاعلي" : "Demonstration prototype"}
            </span>
          </div>

          <p className="hero-bank-name animate-fade-in">
            {isArabic ? "بنك التنمية الاجتماعية" : "Social Development Bank"}
          </p>

          <h1 className="hero-headline animate-fade-in">
            {isArabic ? "إيكومات · EcoMat" : "SDB EcoMat"}
          </h1>

          <h2 className="hero-subheadline-lead animate-fade-in">
            {isArabic 
              ? "أتمتة منظومة التمويل التنموي الذكي للمنشآت" 
              : "Ecosystem Automation for Development Finance"}
          </h2>

          <p className="hero-subheadline animate-fade-in">
            {isArabic
              ? "تمكين المشاريع ورواد الأعمال السعوديين عبر رحلة تمويلية ذكية، تقييم فوري للجاهزية، نموذج سداد مرن يتكيف مع النمو، وأثر اجتماعي قابل للقياس."
              : "Supporting Saudi businesses through intelligent financing, connected services, flexible repayment, and measurable social impact—from first application through long-term growth."}
          </p>

          <div className="hero-cta-group animate-fade-in">
            <button 
              className="btn btn-primary btn-lg"
              onClick={onStartApplication}
            >
              <span>{isArabic ? "التقديم وفحص الجاهزية" : "Apply for Financing"}</span>
              <ArrowIcon size={16} />
            </button>

            <button 
              className="btn btn-secondary btn-lg"
              onClick={onScrollToHowItWorks}
            >
              <span>{isArabic ? "استكشاف المسارات" : "Explore Programs"}</span>
            </button>
          </div>

          {/* Trust Highlights matching reference demo site */}
          <div className="hero-trust-row animate-fade-in">
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-sdb" />
              <span>{isArabic ? "قرارات تمويلية بإشراف بشري واعتماد مصرفي" : "Human-controlled funding decisions"}</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={16} className="text-sdb" />
              <span>{isArabic ? "ذكاء اصطناعي تفاعلي وبيانات محاكاة" : "Simulated intelligence and financial data"}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Interactive Readiness & Ecosystem Card */}
        <div className="hero-mockup-col animate-fade-in">
          <div className="mockup-glass-card">
            {/* Header bar */}
            <div className="mockup-header">
              <span className="mockup-title-bar">
                {isArabic ? "لوحة الجاهزية التمويلية الذكية" : "AI Financing Readiness Preview"}
              </span>
              <span className="mockup-live-pill">
                <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }}></span>
                LIVE
              </span>
            </div>

            {/* Score Area */}
            <div className="mockup-score-section">
              <div className="score-dial-wrap">
                <svg className="score-svg-circle" viewBox="0 0 120 120">
                  <circle className="score-circle-bg" cx="60" cy="60" r="50" strokeWidth="9" fill="none" stroke="#e2e8f0" />
                  <circle
                    className="score-circle-fill"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="9"
                    strokeDasharray="314.159"
                    strokeDashoffset="40.84"
                    fill="none"
                    stroke="#0d684f"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="score-number-box">
                  <span className="score-big">87</span>
                  <span className="score-max">/ 100</span>
                </div>
              </div>

              <div className="score-summary-text">
                <span className="badge badge-success mb-2">
                  <CheckCircle2 size={12} /> {t.hero.dashboardPreview.statusReady}
                </span>
                <h4 className="score-status-title">
                  {isArabic ? "مطابقة متقدمة لشروط البنك" : "Strong Application Readiness"}
                </h4>
                <p className="score-status-desc">
                  {isArabic 
                    ? "ملف مكتمل ومستوفٍ لمتطلبات برنامج أفق التمويلي."
                    : "Complete dossier aligned with SDB Ufuq Financing criteria."}
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div className="mockup-checklist">
              <div className="mockup-check-item">
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.eligibility}</span>
                  <span className="check-pct">95%</span>
                </div>
              </div>

              <div className="mockup-check-item">
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.documents}</span>
                  <span className="check-pct">88%</span>
                </div>
              </div>

              <div className="mockup-check-item">
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.financials}</span>
                  <span className="badge badge-warning text-xs">
                    {isArabic ? "تحديث التوقعات" : "Update Forecast"}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Product Box */}
            <div className="mockup-recommendation-box">
              <div className="rec-box-top">
                <span className="rec-box-label">
                  <Building2 size={13} /> {t.hero.dashboardPreview.recommendedTitle}
                </span>
                <span className="badge badge-sdb text-xs">
                  <Sparkles size={11} /> 96% {isArabic ? "تطابق" : "Match"}
                </span>
              </div>
              <h5 className="rec-product-name">{t.hero.dashboardPreview.recommendedProduct}</h5>
              <p className="rec-product-note">
                {isArabic 
                  ? "سقف تمويلي حتى 10 ملايين ريال لمرحلة التوسع مع فترة سماح مرنة."
                  : "Financing capacity up to SAR 10M suited for enterprise scaling."}
              </p>
            </div>

            {/* Footer Action */}
            <div className="mockup-footer-btn" onClick={onStartApplication} style={{ cursor: 'pointer' }}>
              <span>{t.hero.dashboardPreview.viewDetails}</span>
              <ArrowIcon size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
