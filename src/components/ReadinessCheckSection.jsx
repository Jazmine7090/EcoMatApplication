import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  TrendingUp, 
  FileCheck, 
  PieChart, 
  SlidersHorizontal,
  Layers
} from 'lucide-react';

export function ReadinessCheckSection({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const [interactiveScore, setInteractiveScore] = useState(87);

  const dimensions = [
    { label: t.readiness.dimensions.eligibility, score: 95, color: '#00A859', icon: <CheckCircle2 size={16} /> },
    { label: t.readiness.dimensions.documents, score: 82, color: '#0284C7', icon: <FileCheck size={16} /> },
    { label: t.readiness.dimensions.financials, score: 86, color: '#D97706', icon: <TrendingUp size={16} /> },
    { label: t.readiness.dimensions.completeness, score: 91, color: '#8B5CF6', icon: <Layers size={16} /> },
  ];

  return (
    <section className="readiness-section" id="readiness">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={14} /> {t.readiness.tag}
          </div>
          <h2 className="section-title">{t.readiness.title}</h2>
          <p className="section-subtitle">{t.readiness.subtitle}</p>
        </div>

        {/* Interactive Readiness Dashboard Component */}
        <div className="readiness-dashboard-container card">
          <div className="dashboard-grid">
            {/* Left Box: Score Gauge & Health */}
            <div className="score-summary-pane">
              <div className="score-badge-header">
                <span className="badge badge-success">
                  <CheckCircle2 size={14} /> {isArabic ? "جاهزية مرتفعة" : "High Readiness Level"}
                </span>
                <span className="score-diagnostic-date">
                  {isArabic ? "تشخيص فوري حي" : "Real-time Diagnostic"}
                </span>
              </div>

              <div className="score-gauge-center">
                <div className="circular-score-wrapper" style={{ width: 140, height: 140, position: 'relative', margin: '0 auto 16px auto' }}>
                  <svg className="svg-dial" viewBox="0 0 160 160" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', display: 'block' }}>
                    <circle 
                      className="svg-dial-bg" 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      strokeWidth="12" 
                      fill="none"
                      stroke="#e2e8f0"
                    />
                    <circle 
                      className="svg-dial-progress" 
                      cx="80" 
                      cy="80" 
                      r="68" 
                      strokeWidth="12" 
                      strokeDasharray="427.25"
                      strokeDashoffset={427.25 * (1 - interactiveScore / 100)}
                      fill="none"
                      stroke="#0d684f"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="dial-score-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="dial-num" style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, color: 'var(--navy-900, #14283f)' }}>{interactiveScore}</span>
                    <span className="dial-denom" style={{ fontSize: '0.8rem', color: 'var(--navy-400, #677487)', fontWeight: 600 }}>/ 100</span>
                  </div>
                </div>
                <p className="score-descriptor-text">
                  {isArabic 
                    ? "ملفك مؤهل بنسبة 87% للتقديم لدى بنك التنمية الاجتماعية. معالجة البندين بالأسفل ترفع جاهزيتك إلى 95%."
                    : "Your dossier has an 87% readiness rating. Resolving the 2 pending items below increases readiness to 95%."}
                </p>
              </div>

              <button className="btn btn-primary w-full" onClick={onStartApplication}>
                <Sparkles size={16} />
                <span>{t.readiness.cta}</span>
                <ArrowIcon size={16} />
              </button>
            </div>

            {/* Right Box: 4 Dimensions & Actionable Checklist */}
            <div className="dimensions-checklist-pane">
              <h3 className="pane-section-heading">
                {isArabic ? "تفصيل مؤشرات التقييم الأربعة" : "Core Readiness Dimensions"}
              </h3>

              {/* 4 Dimension Progress Bars */}
              <div className="dimensions-bars-list">
                {dimensions.map((dim, dIdx) => (
                  <div key={dIdx} className="dim-bar-item">
                    <div className="dim-bar-header">
                      <div className="dim-name-icon">
                        {dim.icon}
                        <span>{dim.label}</span>
                      </div>
                      <span className="dim-score-val" style={{ color: dim.color }}>{dim.score}%</span>
                    </div>
                    <div className="dim-progress-track">
                      <div 
                        className="dim-progress-fill" 
                        style={{ width: `${dim.score}%`, backgroundColor: dim.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="pane-divider" />

              {/* Things to fix checklist */}
              <div className="checklist-subpane">
                <h4 className="checklist-subpane-title">
                  <AlertCircle size={17} className="text-warning" />
                  <span>{t.readiness.checklistTitle}</span>
                </h4>

                <div className="checklist-items-stack">
                  {t.readiness.items.map((item, iIdx) => (
                    <div 
                      key={iIdx} 
                      className={`check-action-item ${item.status === 'done' ? 'status-done' : 'status-warn'}`}
                    >
                      <div className="item-status-icon">
                        {item.status === 'done' ? (
                          <CheckCircle2 size={18} className="text-success" />
                        ) : (
                          <AlertCircle size={18} className="text-warning" />
                        )}
                      </div>
                      <p className="item-action-text">{item.text}</p>
                      <span className={`badge ${item.status === 'done' ? 'badge-success' : 'badge-warning'} item-badge`}>
                        {item.status === 'done' 
                          ? (isArabic ? "مكتمل ✓" : "Completed ✓") 
                          : (isArabic ? "مطلوب تحسين ⚠" : "Action Needed ⚠")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
