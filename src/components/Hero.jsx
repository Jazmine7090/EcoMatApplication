import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  FileText,
  Building2
} from 'lucide-react';

export function Hero({ onStartApplication, onScrollToHowItWorks }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Gradients */}
      <div className="hero-bg-orb orb-1"></div>
      <div className="hero-bg-orb orb-2"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-pulse-dot"></span>
            <Sparkles size={14} className="badge-icon" />
            <span>{t.hero.tag}</span>
          </div>

          <h1 className="hero-headline animate-fade-in">
            {t.hero.headline}
          </h1>

          <p className="hero-subheadline animate-fade-in">
            {t.hero.subheadline}
          </p>

          <div className="hero-cta-group animate-fade-in">
            <button 
              className="btn btn-primary btn-lg hero-btn-primary"
              onClick={onStartApplication}
            >
              <Zap size={18} />
              <span>{t.hero.ctaReadiness}</span>
              <ArrowIcon size={18} />
            </button>

            <button 
              className="btn btn-secondary btn-lg hero-btn-secondary"
              onClick={onScrollToHowItWorks}
            >
              <span>{t.hero.ctaHowItWorks}</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-icon text-primary" />
              <span>{isArabic ? "متوافق مع معايير بنك التنمية" : "Aligned with SDB Standards"}</span>
            </div>
            <div className="trust-item">
              <Sparkles size={18} className="trust-icon text-gold" />
              <span>{isArabic ? "تشخيص فوري بالذكاء الاصطناعي" : "Instant AI Diagnostic"}</span>
            </div>
            <div className="trust-item">
              <TrendingUp size={18} className="trust-icon text-primary" />
              <span>{isArabic ? "خطة تعافي في حال عدم القبول" : "Actionable Recovery Plans"}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dashboard Mockup */}
        <div className="hero-mockup-col animate-float">
          <div className="mockup-glass-card">
            {/* Top Bar of Mockup */}
            <div className="mockup-header">
              <div className="mockup-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="mockup-title-bar">{t.hero.dashboardPreview.title}</span>
              <span className="mockup-live-pill">
                <span className="live-dot"></span> LIVE
              </span>
            </div>

            {/* Main Score Area */}
            <div className="mockup-score-section">
              <div className="score-dial-wrap">
                <svg className="score-svg-circle" viewBox="0 0 120 120">
                  <circle
                    className="score-circle-bg"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                  />
                  <circle
                    className="score-circle-fill"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                    strokeDasharray="314.159"
                    strokeDashoffset="40.84" /* 87% progress */
                  />
                </svg>
                <div className="score-number-box">
                  <span className="score-big">87</span>
                  <span className="score-max">/ 100</span>
                </div>
              </div>

              <div className="score-summary-text">
                <span className="badge badge-success mb-2">
                  <CheckCircle2 size={13} /> {t.hero.dashboardPreview.statusReady}
                </span>
                <h4 className="score-status-title">
                  {isArabic ? "جاهزية متقدمة ومطابقة عالية" : "Strong Application Readiness"}
                </h4>
                <p className="score-status-desc">
                  {isArabic 
                    ? "ملف متكامل مع توصية بتحسين إيرادات الربع الأخير." 
                    : "Comprehensive dossier with 1 minor financial optimization suggested."}
                </p>
              </div>
            </div>

            {/* Checklist items in Mockup */}
            <div className="mockup-checklist">
              <div className="mockup-check-item item-done">
                <div className="check-icon-circle icon-done">
                  <CheckCircle2 size={16} />
                </div>
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.eligibility}</span>
                  <span className="check-pct">95%</span>
                </div>
              </div>

              <div className="mockup-check-item item-done">
                <div className="check-icon-circle icon-done">
                  <FileText size={16} />
                </div>
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.documents}</span>
                  <span className="check-pct">88%</span>
                </div>
              </div>

              <div className="mockup-check-item item-warning">
                <div className="check-icon-circle icon-warn">
                  <AlertCircle size={16} />
                </div>
                <div className="check-item-details">
                  <span className="check-title">{t.hero.dashboardPreview.financials}</span>
                  <span className="badge badge-warning text-xs">
                    {isArabic ? "تحديث التوقعات" : "Update Forecast"}
                  </span>
                </div>
              </div>
            </div>

            {/* Recommended Product Box in Mockup */}
            <div className="mockup-recommendation-box">
              <div className="rec-box-top">
                <span className="rec-box-label">
                  <Building2 size={14} /> {t.hero.dashboardPreview.recommendedTitle}
                </span>
                <span className="badge badge-sdb">
                  <Sparkles size={12} /> {t.hero.dashboardPreview.recommendedBadge}
                </span>
              </div>
              <div className="rec-box-body">
                <h5 className="rec-product-name">{t.hero.dashboardPreview.recommendedProduct}</h5>
                <p className="rec-product-note">
                  {isArabic 
                    ? "سقف تمويلي أعلى حتى 10 ملايين ريال لمرحلة التوسع والنمو."
                    : "High-capacity facility up to SAR 10M suited for enterprise scaling."}
                </p>
              </div>
            </div>

            {/* Mockup Action Button */}
            <div className="mockup-footer-btn" onClick={onStartApplication} style={{ cursor: 'pointer' }}>
              <span>{t.hero.dashboardPreview.viewDetails}</span>
              <ArrowIcon size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
