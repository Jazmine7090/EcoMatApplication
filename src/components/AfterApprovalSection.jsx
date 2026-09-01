import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Megaphone, 
  Calculator, 
  Users, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Award,
  DollarSign
} from 'lucide-react';

export function AfterApprovalSection({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const supportIcons = [
    <Megaphone size={24} className="text-primary" />,
    <Calculator size={24} className="text-primary" />,
    <Users size={24} className="text-gold" />,
  ];

  return (
    <section className="after-approval-section" id="after-approval">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <TrendingUp size={14} /> {t.afterApproval.tag}
          </div>
          <h2 className="section-title">{t.afterApproval.title}</h2>
          <p className="section-subtitle">{t.afterApproval.subtitle}</p>
        </div>

        {/* Post-Approval Live Dashboard Card */}
        <div className="approval-dashboard-card card">
          <div className="approval-grid">
            {/* Left: Financial & Progress Overview */}
            <div className="approval-left-pane">
              <div className="pane-header">
                <span className="badge badge-success">
                  <CheckCircle2 size={13} /> {isArabic ? "تمويل نشط ومعتمد" : "Active & Disbursed Facility"}
                </span>
                <span className="facility-ref">ID: SDB-DISB-2026-881</span>
              </div>

              {/* Amount Box */}
              <div className="facility-stat-box">
                <div className="stat-icon-circle">
                  <DollarSign size={24} className="text-primary" />
                </div>
                <div className="stat-content">
                  <span className="stat-label">{t.afterApproval.financingLabel}</span>
                  <h3 className="stat-amount text-primary-800">{t.afterApproval.financingAmount}</h3>
                </div>
              </div>

              {/* Progress Radial Bar */}
              <div className="progress-card-box">
                <div className="progress-header-row">
                  <span className="progress-title">{t.afterApproval.progressLabel}</span>
                  <span className="progress-val-text font-bold text-primary-700">{t.afterApproval.progressValue}</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: '78%' }}></div>
                </div>
                <p className="progress-subnote">
                  {isArabic ? "2 من 4 معالم تشغيلية تم إنجازها بنجاح." : "2 of 4 key journey milestones achieved on schedule."}
                </p>
              </div>

              {/* Milestones Stack */}
              <div className="milestones-stack">
                <h4 className="milestones-heading">{t.afterApproval.milestonesTitle}</h4>
                {t.afterApproval.milestones.map((m, mIdx) => (
                  <div key={mIdx} className={`milestone-row ${m.status}`}>
                    <div className="milestone-status-icon">
                      {m.status === 'completed' && <CheckCircle2 size={18} className="text-success" />}
                      {m.status === 'active' && <Clock size={18} className="text-warning animate-pulse-glow" />}
                      {m.status === 'upcoming' && <AlertCircle size={18} className="text-muted" />}
                    </div>
                    <div className="milestone-text-details">
                      <span className="milestone-title">{m.title}</span>
                      <span className="milestone-date">{m.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Saudi Ecosystem Support Partners */}
            <div className="approval-right-pane">
              <div className="support-header-group">
                <div className="support-badge">
                  <Award size={14} className="text-gold" />
                  <span>{isArabic ? "منظومة الشركاء المعتمدين" : "Accredited Partner Ecosystem"}</span>
                </div>
                <h3 className="support-main-title">{t.afterApproval.supportTitle}</h3>
                <p className="support-main-sub">{t.afterApproval.supportSubtitle}</p>
              </div>

              <div className="support-cards-list">
                {t.afterApproval.supportItems.map((item, sIdx) => (
                  <div key={sIdx} className="support-item-card glass-panel">
                    <div className="support-icon-box">{supportIcons[sIdx]}</div>
                    <div className="support-card-content">
                      <h4 className="support-item-title">{item.title}</h4>
                      <p className="support-item-desc">{item.desc}</p>
                      <button className="btn-link-support">
                        <span>{isArabic ? "طلب جلسة استشارية مجانية" : "Book Free Advisory Session"}</span>
                        <ArrowIcon size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="support-bottom-banner">
                <Sparkles size={16} className="text-gold" />
                <p>
                  {isArabic 
                    ? "يتم ربط كافة الخدمات الإرشادية مباشرة مع بوابة بنك التنمية الاجتماعية لتمكين المنشأة."
                    : "All advisory sessions are fully integrated with SDB business support programs."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
