import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Building2, 
  RefreshCw, 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  RotateCcw, 
  Check,
  HeartHandshake,
  Calendar,
  FileCheck2,
  Users,
  Briefcase
} from 'lucide-react';

export function Step6AIResults({ assessmentResult, formData, updateFormData, onEditAgain, onResetAll }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step6;
  const pRecovery = s.partnersRecovery;
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const [isLoading, setIsLoading] = useState(true);
  const [productSwitched, setProductSwitched] = useState(false);
  const [activeProduct, setActiveProduct] = useState(
    assessmentResult?.productRecommendation?.currentProduct || formData.financingProduct || "Entrepreneurs Financing"
  );
  const [bookingFeedback, setBookingFeedback] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (assessmentResult && assessmentResult.score >= 85) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0d684f', '#d67825', '#21684c'],
        });
      }
    }, 900);

    return () => clearTimeout(timer);
  }, [assessmentResult]);

  if (isLoading) {
    return (
      <div className="wizard-step-content ai-loading-container animate-fade-in text-center">
        <div className="ai-scanning-orb animate-pulse-glow">
          <Sparkles size={40} className="text-sdb" />
        </div>
        <h3 className="ai-loading-title">{s.loadingTitle}</h3>
        <p className="ai-loading-sub">{s.loadingSubtitle}</p>
        <div className="scanning-steps-list">
          <div className="scan-step-pill">✓ {isArabic ? "فحص شروط الأهلية والأنشطة المعتمدة" : "Evaluating eligibility & authorized activities"}</div>
          <div className="scan-step-pill">✓ {isArabic ? "مطابقة سلامة المستندات والسجل التجاري" : "Cross-verifying CR & documentation integrity"}</div>
          <div className="scan-step-pill">✓ {isArabic ? "احتساب كفاية التغطية النقدية ونسبة الالتزامات" : "Calculating debt-service coverage ratio"}</div>
          <div className="scan-step-pill">✓ {isArabic ? "مطابقة المسار التمويلي الأمثل لدى بنك التنمية" : "Matching optimal SDB product facility"}</div>
        </div>
      </div>
    );
  }

  const { score, status, dimensions, strengths, attentionItems, criticalIssues, productRecommendation, nextSteps } = assessmentResult;
  const isReady = score >= 80;
  const isActionRequired = score >= 65 && score < 80;
  const isRejected = score < 65;

  const handleSwitchProduct = () => {
    setActiveProduct(productRecommendation.recommendedProduct);
    updateFormData({ financingProduct: productRecommendation.recommendedProduct });
    setProductSwitched(true);
  };

  const handleDownloadPDF = () => {
    alert(isArabic 
      ? "تم إنشاء وتحميل تقرير الجاهزية التشخيصي (PDF) بنجاح!" 
      : "EcoMat AI Readiness Diagnostic Report (PDF) downloaded successfully!");
  };

  const handleBookPartner = (partnerName) => {
    setBookingFeedback(isArabic 
      ? `تم تقديم طلب استشارة إلى (${partnerName}) بنجاح! سيتواصل معك مستشار معتمد خلال 24 ساعة.` 
      : `Consultation request for ${partnerName} submitted successfully! A certified advisor will contact you within 24 hours.`);
    setTimeout(() => {
      setBookingFeedback(null);
    }, 5000);
  };

  const partnerIcons = {
    sdb_clinics: <Briefcase size={20} className="text-sdb" />,
    monshaat: <FileCheck2 size={20} className="text-sdb" />,
    dulani: <HeartHandshake size={20} className="text-sdb" />,
    socpa: <Users size={20} className="text-sdb" />,
  };

  return (
    <div className="wizard-step-content animate-fade-in">
      {/* Toast feedback for partner booking */}
      {bookingFeedback && (
        <div className="toast-notification animate-fade-in">
          <CheckCircle2 size={18} />
          <span>{bookingFeedback}</span>
        </div>
      )}

      {/* Top Banner with Score Dial */}
      <div className="ai-result-hero-card card">
        <div className="result-score-col">
          <div className="result-circular-gauge" style={{ width: 140, height: 140, position: 'relative', margin: '0 auto 16px auto', flexShrink: 0 }}>
            <svg className="svg-dial" viewBox="0 0 160 160" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', display: 'block' }}>
              <circle className="svg-dial-bg" cx="80" cy="80" r="68" strokeWidth="12" fill="none" stroke="#e2e8f0" />
              <circle 
                className="svg-dial-progress" 
                cx="80" 
                cy="80" 
                r="68" 
                strokeWidth="12" 
                strokeDasharray="427.25"
                strokeDashoffset={427.25 * (1 - score / 100)}
                fill="none"
                strokeLinecap="round"
                style={{ stroke: isReady ? '#0d684f' : isActionRequired ? '#d67825' : '#b91c1c' }}
              />
            </svg>
            <div className="dial-score-content" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="dial-num" style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1, color: 'var(--navy-900, #14283f)' }}>{score}</span>
              <span className="dial-denom" style={{ fontSize: '0.8rem', color: 'var(--navy-400, #677487)', fontWeight: 600 }}>/ 100</span>
            </div>
          </div>
          <span className={`badge ${isReady ? 'badge-success' : isActionRequired ? 'badge-warning' : 'badge-danger'} text-sm`}>
            {isReady 
              ? (isArabic ? "جاهز وقوي ✓" : "Strong / Ready ✓") 
              : isActionRequired 
                ? (isArabic ? "يحتاج إجراءات ⚠" : "Action Required ⚠") 
                : (isArabic ? "غير جاهز / مرفوض 🔴" : "Rejected / Not Ready 🔴")}
          </span>
        </div>

        <div className="result-summary-col">
          <div className="result-tag-row">
            <span className="badge badge-sdb">
              <Sparkles size={13} /> {s.readyTitle}
            </span>
          </div>
          <h3 className="result-headline">
            {isReady ? s.readyToSubmit : s.fixBeforeSubmit}
          </h3>
          <p className="result-desc">
            {isReady ? s.readyToSubmitDesc : s.fixBeforeSubmitDesc}
          </p>

          <div className="result-dimensions-grid">
            <div className="dim-mini-pill">
              <span>{s.dimensions.eligibility}:</span>
              <strong>{dimensions?.eligibility}%</strong>
            </div>
            <div className="dim-mini-pill">
              <span>{s.dimensions.documents}:</span>
              <strong>{dimensions?.documents}%</strong>
            </div>
            <div className="dim-mini-pill">
              <span>{s.dimensions.financials}:</span>
              <strong>{dimensions?.financials}%</strong>
            </div>
            <div className="dim-mini-pill">
              <span>{s.dimensions.completeness}:</span>
              <strong>{dimensions?.completeness}%</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Product Recommendation Box */}
      {productRecommendation && (
        <div className="ai-rec-box card mt-6">
          <div className="ai-rec-header">
            <div className="rec-icon-group">
              <div className="rec-icon-box">
                <Building2 size={20} className="text-sdb" />
              </div>
              <div>
                <h4 className="rec-box-title">{s.recommendationTitle}</h4>
                <span className="rec-box-subtitle">
                  {isArabic ? "تحليل ذكي لمطابقة بيانات منشأتك مع منتجات بنك التنمية" : "AI alignment between your profile and SDB financing facilities"}
                </span>
              </div>
            </div>
            <span className="badge badge-sdb">
              <Sparkles size={12} /> {productRecommendation.matchScore} {s.matchBadge}
            </span>
          </div>

          {/* Side-by-Side Visual Comparison Cards */}
          <div className="rec-comparison-grid">
            {/* Left Card: Current Selection */}
            <div className="rec-compare-card current-track-card">
              <div className="track-status-pill current-pill">
                <span>{s.currentSelected}</span>
              </div>
              <h5 className="track-name">{activeProduct}</h5>
              <span className="track-sub-note">
                {isArabic ? "المسار المختار مبدئياً بالطلب" : "Initially selected in form"}
              </span>
            </div>

            {/* Middle Arrow Connector */}
            {productRecommendation.needsSwitch && !productSwitched && (
              <div className="rec-arrow-connector">
                <div className="arrow-circle-badge">
                  <ArrowIcon size={18} />
                </div>
                <span className="arrow-text">{isArabic ? "الترقية المقترحة" : "Better Match"}</span>
              </div>
            )}

            {/* Right Card: Recommended Product */}
            {productRecommendation.needsSwitch && !productSwitched && (
              <div className="rec-compare-card recommended-track-card">
                <div className="track-status-pill optimal-pill">
                  <Sparkles size={12} />
                  <span>{s.recommendedProduct}</span>
                </div>
                <h5 className="track-name text-sdb">{productRecommendation.recommendedProduct}</h5>
                <span className="track-sub-note text-sdb-highlight">
                  {isArabic ? "✓ تطابق أعلى مع مرحلة منشأتك وتدفقاتك" : "✓ Higher alignment with your stage & turnover"}
                </span>
              </div>
            )}
          </div>

          {/* Reason Explanation Callout */}
          <div className="rec-reason-callout">
            <div className="reason-callout-header">
              <ShieldCheck size={16} className="text-sdb" />
              <strong>{isArabic ? "لماذا هذه التوصية؟" : "Why this recommendation?"}</strong>
            </div>
            <p className="rec-explanation-text">{productRecommendation.reason}</p>
          </div>

          {/* Action Buttons */}
          {productRecommendation.needsSwitch && !productSwitched ? (
            <div className="rec-action-buttons">
              <button 
                type="button" 
                className="btn btn-primary btn-md"
                onClick={handleSwitchProduct}
              >
                <RefreshCw size={15} />
                <span>{s.switchBtn}</span>
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-md"
                onClick={() => setProductSwitched(true)}
              >
                <span>{s.keepBtn}</span>
              </button>
            </div>
          ) : productSwitched ? (
            <div className="rec-switched-alert">
              <Check size={18} className="text-sdb" />
              <div>
                <strong>{s.productSwitched}</strong>
                <p className="text-xs text-sdb-600">{activeProduct}</p>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* 3 Feedback Categories */}
      <div className="feedback-cards-grid mt-6">
        {/* Strong Areas */}
        <div className="feedback-col card">
          <div className="fb-header text-success">
            <CheckCircle2 size={18} />
            <h4 className="fb-title">{s.strongTitle}</h4>
          </div>
          <ul className="fb-list">
            {strengths && strengths.length > 0 ? (
              strengths.map((str, idx) => (
                <li key={idx} className="fb-item item-strong">
                  <span>{str}</span>
                </li>
              ))
            ) : (
              <li className="fb-item text-muted">{isArabic ? "لا توجد نقاط قوة كافية مسجلة" : "No strong areas identified"}</li>
            )}
          </ul>
        </div>

        {/* Needs Attention */}
        <div className="feedback-col card">
          <div className="fb-header text-warning">
            <AlertTriangle size={18} />
            <h4 className="fb-title">{s.attentionTitle}</h4>
          </div>
          <ul className="fb-list">
            {attentionItems && attentionItems.length > 0 ? (
              attentionItems.map((att, idx) => (
                <li key={idx} className="fb-item item-attention">
                  <span>{att}</span>
                </li>
              ))
            ) : (
              <li className="fb-item text-muted">{isArabic ? "لا توجد ملاحظات تحسين معلقة" : "No attention items"}</li>
            )}
          </ul>
        </div>

        {/* Critical Issues */}
        <div className="feedback-col card">
          <div className="fb-header text-danger">
            <XCircle size={18} />
            <h4 className="fb-title">{s.issuesTitle}</h4>
          </div>
          <ul className="fb-list">
            {criticalIssues && criticalIssues.length > 0 ? (
              criticalIssues.map((iss, idx) => (
                <li key={idx} className="fb-item item-critical">
                  <span>{iss}</span>
                </li>
              ))
            ) : (
              <li className="fb-item text-muted">{isArabic ? "لم يتم رصد أي فجوات حرجة ✓" : "Zero critical issues detected ✓"}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Recommended Support Partners & Consultancies (Specially for Rejected / Action Required Scenarios) */}
      {(isRejected || isActionRequired) && pRecovery && (
        <div className="recovery-partners-container card mt-6">
          <div className="recovery-partners-header">
            <div className="header-left-wrap">
              <span className="badge badge-warning mb-2">
                <HeartHandshake size={13} /> {isArabic ? "مسار التأهيل والتعافي" : "Recovery & Support Pathway"}
              </span>
              <h3 className="section-partner-title">{pRecovery.title}</h3>
              <p className="section-partner-subtitle">{pRecovery.subtitle}</p>
            </div>
          </div>

          <div className="partners-grid-cards">
            {pRecovery.partners.map((partner) => (
              <div key={partner.id} className="partner-card">
                <div className="partner-card-top">
                  <div className="partner-icon-box">
                    {partnerIcons[partner.id] || <Building2 size={20} className="text-sdb" />}
                  </div>
                  <span className="partner-badge-pill">{partner.badge}</span>
                </div>

                <h4 className="partner-name">{partner.name}</h4>
                <small className="partner-entity">{partner.entity}</small>
                <p className="partner-focus">{partner.focus}</p>

                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm w-full partner-action-btn"
                  onClick={() => handleBookPartner(partner.name)}
                >
                  <Calendar size={14} />
                  <span>{partner.action}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final SDB Submission Actions */}
      <div className="ai-results-footer-bar card mt-6">
        <div className="footer-bar-actions">
          <a 
            href="https://www.sdb.gov.sa/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn ${isReady ? 'btn-primary' : 'btn-secondary'} btn-lg`}
          >
            <span>{s.btnProceedSDB}</span>
            <ExternalLink size={16} />
          </a>

          <button 
            type="button" 
            className="btn btn-secondary btn-lg"
            onClick={handleDownloadPDF}
          >
            <Download size={16} />
            <span>{s.btnDownloadReport}</span>
          </button>

          <button 
            type="button" 
            className="btn btn-ghost btn-lg"
            onClick={onEditAgain}
          >
            <RotateCcw size={16} />
            <span>{s.btnEditApp}</span>
          </button>
        </div>

        <div className="sdb-disclaimer-note mt-3 text-center">
          <ShieldCheck size={14} className="text-muted flex-shrink-0" />
          <p className="disclaimer-text">{s.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
