import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, AlertTriangle, TrendingUp, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export function ProblemSection({ onExploreRecovery, onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const iconMap = {
    HelpCircle: <HelpCircle className="card-icon text-info" size={28} />,
    AlertTriangle: <AlertTriangle className="card-icon text-warning" size={28} />,
    TrendingUp: <TrendingUp className="card-icon text-primary" size={28} />,
  };

  return (
    <section className="problem-section" id="problem">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">{t.problem.tag}</div>
          <h2 className="section-title">{t.problem.title}</h2>
          <p className="section-subtitle">{t.problem.subtitle}</p>
        </div>

        {/* 3 Problem Phase Cards */}
        <div className="problem-grid">
          {t.problem.cards.map((card, idx) => (
            <div key={idx} className="problem-card card">
              <div className="card-phase-badge">
                {card.phase}
              </div>

              <div className="card-header-row">
                <div className="card-icon-circle">
                  {iconMap[card.icon]}
                </div>
                <h3 className="card-heading">{card.title}</h3>
              </div>

              <div className="problem-questions-list">
                {card.questions.map((q, qIdx) => (
                  <div key={qIdx} className="question-item">
                    <span className="question-mark">?</span>
                    <p className="question-text">“{q}”</p>
                  </div>
                ))}
              </div>

              <div className="card-solution-box">
                <div className="sol-label">
                  <CheckCircle size={15} className="text-primary" />
                  <span>{isArabic ? "حل إيكومات:" : "EcoMat Solution:"}</span>
                </div>
                <p className="sol-desc">{card.solution}</p>
              </div>

              {idx === 0 && (
                <button className="btn btn-secondary btn-sm w-full mt-4" onClick={onStartApplication}>
                  <span>{isArabic ? "افحص قبل التقديم" : "Check Pre-Application"}</span>
                  <ArrowIcon size={14} />
                </button>
              )}
              {idx === 1 && (
                <button className="btn btn-secondary btn-sm w-full mt-4" onClick={onExploreRecovery}>
                  <span>{isArabic ? "عرض محاكي خطة التعافي" : "Simulate Recovery Plan"}</span>
                  <ArrowIcon size={14} />
                </button>
              )}
              {idx === 2 && (
                <a href="#after-approval" className="btn btn-secondary btn-sm w-full mt-4">
                  <span>{isArabic ? "استكشاف لوحة النمو" : "Explore Growth Dashboard"}</span>
                  <ArrowIcon size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
