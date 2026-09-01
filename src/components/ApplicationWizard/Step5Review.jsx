import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  User, 
  Building, 
  Landmark, 
  FileText, 
  Edit3, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export function Step5Review({ formData, onJumpToStep, onRunAI }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step5;
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const docs = formData.documents || {};
  const docKeys = Object.keys(docs);

  return (
    <div className="wizard-step-content animate-fade-in">
      <div className="step-header-text">
        <h3 className="step-main-title">{s.title}</h3>
        <p className="step-main-sub">{s.subtitle}</p>
      </div>

      <div className="review-blocks-stack">
        {/* Block 1: Applicant Details */}
        <div className="review-card card">
          <div className="review-card-header">
            <div className="header-title-wrap">
              <User size={18} className="text-primary" />
              <h4 className="review-section-title">{s.sectionApplicant}</h4>
            </div>
            <button 
              type="button" 
              className="btn btn-ghost btn-sm edit-jump-btn"
              onClick={() => onJumpToStep(1)}
            >
              <Edit3 size={14} />
              <span>{t.wizard.buttons.edit}</span>
            </button>
          </div>

          <div className="review-grid-data">
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.fullName}:</span>
              <strong className="data-val">{formData.fullName || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.nationalId}:</span>
              <strong className="data-val">{formData.nationalId || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.mobile}:</span>
              <strong className="data-val">{formData.mobile || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.email}:</span>
              <strong className="data-val">{formData.email || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.city}:</span>
              <strong className="data-val">{formData.city || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step1.applicantType}:</span>
              <strong className="data-val">{formData.applicantType || "—"}</strong>
            </div>
          </div>
        </div>

        {/* Block 2: Business Profile */}
        <div className="review-card card">
          <div className="review-card-header">
            <div className="header-title-wrap">
              <Building size={18} className="text-primary" />
              <h4 className="review-section-title">{s.sectionBusiness}</h4>
            </div>
            <button 
              type="button" 
              className="btn btn-ghost btn-sm edit-jump-btn"
              onClick={() => onJumpToStep(2)}
            >
              <Edit3 size={14} />
              <span>{t.wizard.buttons.edit}</span>
            </button>
          </div>

          <div className="review-grid-data">
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.businessName}:</span>
              <strong className="data-val">{formData.businessName || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.businessType}:</span>
              <strong className="data-val">{formData.businessType || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.crNumber}:</span>
              <strong className="data-val">{formData.crNumber || (isArabic ? "غير مدرج" : "Not Provided")}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.businessStage}:</span>
              <strong className="data-val">{formData.businessStage || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.sector}:</span>
              <strong className="data-val">{formData.sector || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step2.monthlyRevenue}:</span>
              <strong className="data-val text-primary-700">
                {formData.monthlyRevenue ? `SAR ${Number(formData.monthlyRevenue).toLocaleString()}` : "—"}
              </strong>
            </div>
          </div>
        </div>

        {/* Block 3: Financing Terms */}
        <div className="review-card card">
          <div className="review-card-header">
            <div className="header-title-wrap">
              <Landmark size={18} className="text-primary" />
              <h4 className="review-section-title">{s.sectionFinancing}</h4>
            </div>
            <button 
              type="button" 
              className="btn btn-ghost btn-sm edit-jump-btn"
              onClick={() => onJumpToStep(3)}
            >
              <Edit3 size={14} />
              <span>{t.wizard.buttons.edit}</span>
            </button>
          </div>

          <div className="review-grid-data">
            <div className="data-item">
              <span className="data-label">{t.wizard.step3.financingProduct}:</span>
              <strong className="data-val text-primary-800">{formData.financingProduct || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step3.requestedAmount}:</span>
              <strong className="data-val text-primary-700">
                {formData.requestedAmount ? `SAR ${Number(formData.requestedAmount).toLocaleString()}` : "—"}
              </strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step3.purpose}:</span>
              <strong className="data-val">{formData.purpose || "—"}</strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step3.expectedRevenue}:</span>
              <strong className="data-val">
                {formData.expectedRevenue ? `SAR ${Number(formData.expectedRevenue).toLocaleString()}` : "—"}
              </strong>
            </div>
            <div className="data-item">
              <span className="data-label">{t.wizard.step3.financialObligations}:</span>
              <strong className="data-val text-warning">
                {formData.financialObligations ? `SAR ${Number(formData.financialObligations).toLocaleString()}` : "0"}
              </strong>
            </div>
          </div>
        </div>

        {/* Block 4: Attached Documents */}
        <div className="review-card card">
          <div className="review-card-header">
            <div className="header-title-wrap">
              <FileText size={18} className="text-primary" />
              <h4 className="review-section-title">{s.sectionDocuments}</h4>
            </div>
            <button 
              type="button" 
              className="btn btn-ghost btn-sm edit-jump-btn"
              onClick={() => onJumpToStep(4)}
            >
              <Edit3 size={14} />
              <span>{t.wizard.buttons.edit}</span>
            </button>
          </div>

          <div className="review-docs-list">
            {docKeys.length > 0 ? (
              docKeys.map((k) => (
                <div key={k} className="review-doc-pill">
                  <CheckCircle2 size={14} className="text-success" />
                  <span>{docs[k].name || k}</span>
                </div>
              ))
            ) : (
              <div className="review-empty-docs">
                <AlertCircle size={16} className="text-warning" />
                <span>{isArabic ? "لم يتم رفع أي مستندات حتى الآن (سيؤثر على مؤشر الجاهزية)" : "No documents attached yet (will affect readiness score)"}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Bottom Trigger */}
      <div className="review-submit-banner glass-panel card mt-6">
        <div className="submit-banner-content">
          <h4 className="submit-banner-title">
            {isArabic ? "جاهز لإجراء التشخيص الذكي بالذكاء الاصطناعي؟" : "Ready to execute the AI Readiness Assessment?"}
          </h4>
          <p className="submit-banner-sub">
            {isArabic 
              ? "سيقوم محرك إيكومات بفحص معايير الأهلية، وصحة التدفقات المالية، ومطابقة المنتج فورياً."
              : "EcoMat engine will cross-reference eligibility, debt coverage, and recommend the best SDB product."}
          </p>
        </div>
        <button 
          type="button"
          className="btn btn-gold btn-lg run-ai-big-btn"
          onClick={onRunAI}
        >
          <Sparkles size={20} />
          <span>{t.wizard.buttons.runAICheck}</span>
          <ArrowIcon size={20} />
        </button>
      </div>
    </div>
  );
}
