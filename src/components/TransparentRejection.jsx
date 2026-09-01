import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  AlertCircle, 
  HelpCircle, 
  TrendingUp, 
  Calendar, 
  CheckSquare, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  X, 
  FileCheck2, 
  Users, 
  Calculator,
  Compass
} from 'lucide-react';

export function TransparentRejection({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const [showRecoveryPlanModal, setShowRecoveryPlanModal] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const toggleStepDone = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  const rejectionCards = t.rejection.cards;

  const cardIcons = [
    <HelpCircle size={20} className="text-info" />,
    <AlertCircle size={20} className="text-warning" />,
    <TrendingUp size={20} className="text-primary" />,
    <Sparkles size={20} className="text-gold" />,
  ];

  return (
    <section className="rejection-section" id="recovery">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <Compass size={14} /> {t.rejection.tag}
          </div>
          <h2 className="section-title">{t.rejection.title}</h2>
          <p className="section-subtitle">{t.rejection.subtitle}</p>
        </div>

        {/* Rejection Breakdown Main Panel */}
        <div className="rejection-main-panel card">
          {/* Top Status Header */}
          <div className="rejection-status-bar">
            <div className="status-badge-wrap">
              <span className="badge badge-warning text-sm">
                <AlertCircle size={15} /> {t.rejection.statusBadge}
              </span>
              <span className="ref-number">Ref: SDB-APP-2026-9812</span>
            </div>

            <div className="primary-factor-box">
              <span className="factor-label">{t.rejection.primaryReasonLabel}:</span>
              <strong className="factor-value">{t.rejection.primaryReason}</strong>
            </div>
          </div>

          {/* 4 Explanatory Cards Grid */}
          <div className="rejection-cards-grid">
            {rejectionCards.map((card, idx) => (
              <div key={idx} className="rejection-info-card">
                <div className="info-card-header">
                  <div className="info-icon-circle">{cardIcons[idx]}</div>
                  <h4 className="info-title">{card.title}</h4>
                </div>
                <p className="info-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Empathetic Callout & Recovery Trigger */}
          <div className="recovery-callout-footer glass-panel">
            <div className="callout-text">
              <h4 className="callout-title">
                {isArabic ? "لا تيأس! 68% من الطلبات المرفوضة تحصل على الموافقة بعد إكمال خطة التعافي." : "Don't give up! 68% of initial rejections achieve approval after executing an actionable recovery plan."}
              </h4>
              <p className="callout-sub">
                {isArabic 
                  ? "يقدم إيكومات خارطة طريق مجدولة لـ 90 يوماً لإعادة ضبط بياناتك المالية ورفع الجاهزية."
                  : "EcoMat provides a customized 90-day structured roadmap to resolve gaps and prepare for successful re-submission."}
              </p>
            </div>
            <button 
              className="btn btn-gold btn-lg recovery-btn"
              onClick={() => setShowRecoveryPlanModal(true)}
            >
              <Calendar size={18} />
              <span>{t.rejection.cta}</span>
              <ArrowIcon size={18} />
            </button>
          </div>
        </div>

        {/* Interactive 90-Day Recovery Roadmap Modal */}
        {showRecoveryPlanModal && (
          <div className="modal-overlay" onClick={() => setShowRecoveryPlanModal(false)}>
            <div className="modal-content recovery-modal-box" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="modal-header-row">
                <div className="modal-title-group">
                  <span className="badge badge-sdb mb-1">
                    <Sparkles size={12} /> {t.recoveryModal.title}
                  </span>
                  <h3 className="modal-title">{t.recoveryModal.subtitle}</h3>
                  <div className="modal-meta-row">
                    <span>{t.recoveryModal.caseId}</span>
                    <span className="meta-sep">•</span>
                    <span className="text-warning font-semibold">{t.recoveryModal.primaryReason}</span>
                  </div>
                </div>
                <button className="modal-close-btn" onClick={() => setShowRecoveryPlanModal(false)}>
                  <X size={20} />
                </button>
              </div>

              {/* 3-Phase Interactive Timeline */}
              <div className="roadmap-phases-stack">
                {t.recoveryModal.phases.map((phase, pIdx) => {
                  const isDone = completedSteps.includes(pIdx);
                  return (
                    <div 
                      key={pIdx} 
                      className={`roadmap-phase-card ${isDone ? 'phase-completed' : ''}`}
                    >
                      <div className="phase-header-row">
                        <div className="phase-tag-box">
                          <span className="phase-number-badge">Phase 0{pIdx + 1}</span>
                          <h4 className="phase-title">{phase.phase}</h4>
                        </div>
                        <button 
                          className={`btn-check-step ${isDone ? 'checked' : ''}`}
                          onClick={() => toggleStepDone(pIdx)}
                        >
                          <CheckSquare size={16} />
                          <span>{isDone ? (isArabic ? "تم الإنجاز ✓" : "Completed ✓") : (isArabic ? "تحديد كمكتمل" : "Mark Done")}</span>
                        </button>
                      </div>

                      <p className="phase-action-text">{phase.action}</p>

                      <div className="phase-partner-badge">
                        <Users size={14} className="text-primary" />
                        <span>{isArabic ? "الجهة الداعمة الموصى بها:" : "Recommended Partner:"} <strong>{phase.partner}</strong></span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer Actions */}
              <div className="modal-footer-row">
                <button className="btn btn-secondary" onClick={() => setShowRecoveryPlanModal(false)}>
                  {t.recoveryModal.closeBtn}
                </button>
                <button className="btn btn-primary" onClick={() => { setShowRecoveryPlanModal(false); onStartApplication(); }}>
                  <span>{t.recoveryModal.startRecoveryBtn}</span>
                  <ArrowIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
