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
  Check
} from 'lucide-react';

export function Step6AIResults({ assessmentResult, formData, updateFormData, onEditAgain, onResetAll }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step6;
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const [isLoading, setIsLoading] = useState(true);
  const [productSwitched, setProductSwitched] = useState(false);
  const [activeProduct, setActiveProduct] = useState(
    assessmentResult?.productRecommendation?.currentProduct || formData.financingProduct || "Entrepreneurs Financing"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (assessmentResult && assessmentResult.score >= 85) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00A859', '#D4AF37', '#006C35'],
        });
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [assessmentResult]);

  if (isLoading) {
    return (
      <div className="wizard-step-content ai-loading-container animate-fade-in text-center">
        <div className="ai-scanning-orb animate-pulse-glow">
          <Sparkles size={48} className="text-gold animate-spin-slow" />
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

  return (
    <div className="wizard-step-content animate-fade-in">
      {/* Top Banner with Score */}
      <div className="ai-result-hero-card card">
        <div className="result-score-col">
          <div className="result-circular-gauge">
            <svg className="svg-dial" viewBox="0 0 160 160">
              <circle className="svg-dial-bg" cx="80" cy="80" r="68" strokeWidth="12" />
              <circle 
                className="svg-dial-progress" 
                cx="80" 
                cy="80" 
                r="68" 
                strokeWidth="12" 
                strokeDasharray="427.25"
                strokeDashoffset={427.25 * (1 - score / 100)}
                style={{ stroke: isReady ? '#00A859' : score >= 65 ? '#D97706' : '#EF4444' }}
              />
            </svg>
            <div className="dial-score-content">
              <span className="dial-num">{score}</span>
              <span className="dial-denom">/ 100</span>
            </div>
          </div>
          <span className={`badge ${isReady ? 'badge-success' : score >= 65 ? 'badge-warning' : 'badge-danger'} text-sm`}>
            {isReady 
              ? (isArabic ? "جاهز للتقديم ✓" : "Ready to Apply ✓") 
              : score >= 65 
                ? (isArabic ? "يحتاج تحسينات ⚠" : "Needs Attention ⚠") 
                : (isArabic ? "غير جاهز حالياً 🔴" : "Not Ready 🔴")}
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
        <div className="ai-rec-box card glass-panel mt-6">
          <div className="ai-rec-header">
            <div className="rec-icon-group">
              <Building2 size={20} className="text-primary" />
              <h4 className="rec-box-title">{s.recommendationTitle}</h4>
            </div>
            <span className="badge badge-sdb">
              <Sparkles size={12} /> {productRecommendation.matchScore} {s.matchBadge}
            </span>
          </div>

          <div className="ai-rec-body-grid">
            <div className="rec-current-col">
              <span className="rec-label">{s.currentSelected}:</span>
              <p className="rec-val-text font-semibold">{activeProduct}</p>
            </div>

            {productRecommendation.needsSwitch && !productSwitched && (
              <div className="rec-upgrade-col">
                <span className="rec-label">{s.recommendedProduct}:</span>
                <p className="rec-val-text text-primary-800 font-bold">{productRecommendation.recommendedProduct}</p>
              </div>
            )}
          </div>

          <p className="rec-explanation-text">{productRecommendation.reason}</p>

          {productRecommendation.needsSwitch && !productSwitched ? (
            <div className="rec-action-buttons">
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={handleSwitchProduct}
              >
                <RefreshCw size={15} />
                <span>{s.switchBtn}</span>
              </button>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => setProductSwitched(true)}
              >
                <span>{s.keepBtn}</span>
              </button>
            </div>
          ) : productSwitched ? (
            <div className="rec-switched-alert">
              <Check size={16} className="text-success" />
              <span>{s.productSwitched}</span>
            </div>
          ) : null}
        </div>
      )}

      {/* 3 Feedback Categories */}
      <div className="feedback-cards-grid mt-6">
        {/* Strong Areas */}
        <div className="feedback-col card">
          <div className="fb-header text-success">
            <CheckCircle2 size={20} />
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
            <AlertTriangle size={20} />
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
            <XCircle size={20} />
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

      {/* Final SDB Submission Actions */}
      <div className="ai-results-footer-bar card glass-panel mt-6">
        <div className="footer-bar-actions">
          <a 
            href="https://www.sdb.gov.sa/en" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn ${isReady ? 'btn-primary' : 'btn-secondary'} btn-lg`}
          >
            <span>{s.btnProceedSDB}</span>
            <ExternalLink size={18} />
          </a>

          <button 
            type="button" 
            className="btn btn-secondary btn-lg"
            onClick={handleDownloadPDF}
          >
            <Download size={18} />
            <span>{s.btnDownloadReport}</span>
          </button>

          <button 
            type="button" 
            className="btn btn-ghost btn-lg"
            onClick={onEditAgain}
          >
            <RotateCcw size={18} />
            <span>{s.btnEditApp}</span>
          </button>
        </div>

        <div className="sdb-disclaimer-note mt-3">
          <ShieldCheck size={14} className="text-muted flex-shrink-0" />
          <p className="disclaimer-text">{s.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
