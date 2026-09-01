import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export function ImpactSection({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="impact-section" id="impact">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <Award size={14} /> {t.impact.tag}
          </div>
          <h2 className="section-title">{t.impact.title}</h2>
          <p className="section-subtitle">{t.impact.subtitle}</p>
        </div>

        {/* 6 Impact Metrics Grid */}
        <div className="impact-grid">
          {t.impact.metrics.map((metric, idx) => {
            const isReduction = metric.value.includes('↓');
            return (
              <div key={idx} className="impact-card card">
                <div className="impact-top-row">
                  <span className={`impact-metric-pill ${isReduction ? 'pill-down' : 'pill-up'}`}>
                    {metric.value}
                  </span>
                  {isReduction ? (
                    <TrendingDown size={22} className="text-success" />
                  ) : (
                    <TrendingUp size={22} className="text-primary" />
                  )}
                </div>
                <h3 className="impact-metric-label">{metric.label}</h3>
                <p className="impact-metric-desc">{metric.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Core Mission Statement Banner */}
        <div className="impact-mission-banner glass-panel">
          <div className="mission-quote-mark">“</div>
          <div className="mission-content">
            <h3 className="mission-statement-text">{t.impact.statement}</h3>
            <p className="mission-subtext">{t.impact.statementSub}</p>
          </div>
          <div className="mission-action">
            <button className="btn btn-primary" onClick={onStartApplication}>
              <span>{t.nav.startApplication}</span>
              <ArrowIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
