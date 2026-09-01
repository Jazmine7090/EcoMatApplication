import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, FileSearch, Sparkles, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';

export function HowItWorks({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const stepIcons = [
    <FileSearch size={24} className="text-primary" />,
    <ShieldCheck size={24} className="text-primary" />,
    <Sparkles size={24} className="text-gold" />,
    <TrendingUp size={24} className="text-primary" />,
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">{t.howItWorks.tag}</div>
          <h2 className="section-title">{t.howItWorks.title}</h2>
          <p className="section-subtitle">{t.howItWorks.subtitle}</p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="steps-container">
          <div className="steps-connector-line"></div>

          <div className="steps-grid">
            {t.howItWorks.steps.map((step, idx) => (
              <div key={idx} className="step-card card">
                <div className="step-top-row">
                  <span className="step-number-pill">{step.step}</span>
                  <div className="step-icon-circle">{stepIcons[idx]}</div>
                </div>

                <div className="step-body">
                  <div className="badge badge-sdb mb-2">{step.badge}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>

                <div className="step-footer-indicator">
                  <span className="step-progress-dot"></span>
                  <span className="step-stage-text">
                    {idx === 0 && (isArabic ? "المرحلة الأولى" : "Stage 1")}
                    {idx === 1 && (isArabic ? "المرحلة الثانية" : "Stage 2")}
                    {idx === 2 && (isArabic ? "المرحلة الثالثة" : "Stage 3")}
                    {idx === 3 && (isArabic ? "المرحلة الرابعة" : "Stage 4")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="how-it-works-cta-box glass-panel">
          <div className="cta-box-text">
            <h4>{isArabic ? "جاهز لفحص طلبك بالذكاء الاصطناعي مجاناً؟" : "Ready to run your free AI Readiness Assessment?"}</h4>
            <p>{isArabic ? "يستغرق الفحص أقل من 3 دقائق ولا يتطلب تسجيلاً مسبقاً." : "Takes less than 3 minutes to diagnose gaps and receive product recommendations."}</p>
          </div>
          <button className="btn btn-primary" onClick={onStartApplication}>
            <span>{t.hero.ctaReadiness}</span>
            <ArrowIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
