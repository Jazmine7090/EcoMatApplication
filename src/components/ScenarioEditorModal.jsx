import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DEMO_SCENARIOS, runReadinessAssessment } from '../services/aiReadinessEngine';
import { 
  X, 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Building2, 
  DollarSign, 
  FileText, 
  Check, 
  ArrowRight, 
  ArrowLeft 
} from 'lucide-react';

export function ScenarioEditorModal({ isOpen, onClose, onApplyScenario }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Selected base preset or custom
  const [activePresetKey, setActivePresetKey] = useState('attention');

  // Interactive scenario state
  const [scenarioState, setScenarioState] = useState(() => {
    return JSON.parse(JSON.stringify(DEMO_SCENARIOS.NEEDS_ATTENTION.data));
  });

  if (!isOpen) return null;

  const handleSelectPreset = (key) => {
    setActivePresetKey(key);
    if (DEMO_SCENARIOS[key.toUpperCase()]) {
      setScenarioState(JSON.parse(JSON.stringify(DEMO_SCENARIOS[key.toUpperCase()].data)));
    }
  };

  const updateField = (field, value) => {
    setActivePresetKey('custom');
    setScenarioState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateDoc = (docKey, isUploaded) => {
    setActivePresetKey('custom');
    setScenarioState((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [docKey]: {
          uploaded: isUploaded,
          name: isUploaded ? `${docKey.toUpperCase()}_Verified.pdf` : '',
          valid: isUploaded,
        },
      },
    }));
  };

  // Run live assessment on the current customized scenario state
  const liveAssessment = runReadinessAssessment(scenarioState, null, isArabic);

  const handleApplyToWizard = () => {
    onApplyScenario(scenarioState);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content scenario-editor-modal" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header-row">
          <div className="modal-title-group">
            <div className="badge badge-cyan mb-2">
              <Sliders size={14} />
              <span>{isArabic ? "محرر ومخصص سيناريوهات الجاهزية" : "AI Readiness Scenario Customizer"}</span>
            </div>
            <h3 className="modal-title">
              {isArabic ? "تخصيص واختبار سيناريوهات التقييم" : "Customize & Test Assessment Scenarios"}
            </h3>
            <p className="modal-subtitle">
              {isArabic 
                ? "قم بتعديل مؤشرات المشروع والإيرادات والمستندات لمشاهدة تأثيرها الفوري على نتيجة التقييم وتوصيات المنتج."
                : "Tweak business metrics, debt ratio, and documents to see live impacts on score and product recommendation."}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Preset Selector Buttons */}
        <div className="preset-tabs-row mb-4">
          <span className="preset-row-label">{isArabic ? "النماذج الجاهزة:" : "Preset Scenarios:"}</span>
          <div className="preset-buttons-group">
            <button 
              type="button"
              className={`preset-tab-btn ${activePresetKey === 'ready' ? 'active-tab' : ''}`}
              onClick={() => handleSelectPreset('ready')}
            >
              <CheckCircle2 size={14} className="text-success" />
              <span>{isArabic ? "جاهز (92%)" : "Ready (92%)"}</span>
            </button>

            <button 
              type="button"
              className={`preset-tab-btn ${activePresetKey === 'attention' ? 'active-tab' : ''}`}
              onClick={() => handleSelectPreset('attention')}
            >
              <AlertCircle size={14} className="text-warning" />
              <span>{isArabic ? "يحتاج تحسين (74%)" : "Needs Attention (74%)"}</span>
            </button>

            <button 
              type="button"
              className={`preset-tab-btn ${activePresetKey === 'not_ready' ? 'active-tab' : ''}`}
              onClick={() => handleSelectPreset('not_ready')}
            >
              <AlertCircle size={14} className="text-danger" />
              <span>{isArabic ? "غير جاهز (51%)" : "Not Ready (51%)"}</span>
            </button>
          </div>
        </div>

        {/* 2-Column Editor Layout: Controls on Left, Live Score on Right */}
        <div className="scenario-editor-grid">
          {/* Left: Interactive Controls */}
          <div className="editor-controls-col">
            {/* Monthly Revenue Slider */}
            <div className="editor-control-box">
              <div className="control-label-row">
                <label className="control-label">{isArabic ? "الإيراد الشهري (ريال):" : "Monthly Revenue (SAR):"}</label>
                <span className="control-val text-cyan">SAR {Number(scenarioState.monthlyRevenue || 0).toLocaleString()}</span>
              </div>
              <input 
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={scenarioState.monthlyRevenue || 0}
                onChange={(e) => updateField('monthlyRevenue', e.target.value)}
                className="custom-range-slider"
              />
            </div>

            {/* Requested Amount Slider */}
            <div className="editor-control-box">
              <div className="control-label-row">
                <label className="control-label">{isArabic ? "مبلغ التمويل المطلوب (ريال):" : "Requested Amount (SAR):"}</label>
                <span className="control-val">SAR {Number(scenarioState.requestedAmount || 0).toLocaleString()}</span>
              </div>
              <input 
                type="range"
                min="50000"
                max="1000000"
                step="25000"
                value={scenarioState.requestedAmount || 0}
                onChange={(e) => updateField('requestedAmount', e.target.value)}
                className="custom-range-slider"
              />
            </div>

            {/* Monthly Debt Obligations Slider */}
            <div className="editor-control-box">
              <div className="control-label-row">
                <label className="control-label">{isArabic ? "الأقساط والالتزامات الشهرية القائمة:" : "Monthly Debt Obligations (SAR):"}</label>
                <span className="control-val text-warning">SAR {Number(scenarioState.financialObligations || 0).toLocaleString()}</span>
              </div>
              <input 
                type="range"
                min="0"
                max="30000"
                step="2000"
                value={scenarioState.financialObligations || 0}
                onChange={(e) => updateField('financialObligations', e.target.value)}
                className="custom-range-slider"
              />
            </div>

            {/* Stage Selector */}
            <div className="editor-control-box">
              <label className="control-label mb-2 block">{isArabic ? "مرحلة المشروع:" : "Business Stage:"}</label>
              <select 
                className="form-select text-sm py-2"
                value={scenarioState.businessStage || ''}
                onChange={(e) => updateField('businessStage', e.target.value)}
              >
                <option value="Idea / Pre-Revenue">{isArabic ? "فكرة / مرحلة التأسيس الأولي" : "Idea / Pre-Revenue"}</option>
                <option value="Growing (1 - 3 Years)">{isArabic ? "منشأة نامية (1 إلى 3 سنوات)" : "Growing (1 - 3 Years)"}</option>
                <option value="Established (3+ Years)">{isArabic ? "منشأة قائمة (أكثر من 3 سنوات)" : "Established (3+ Years)"}</option>
              </select>
            </div>

            {/* Document Toggles */}
            <div className="editor-control-box">
              <label className="control-label mb-2 block">{isArabic ? "المستندات المرفقة:" : "Attached Documents:"}</label>
              <div className="doc-toggle-pills">
                <button 
                  type="button"
                  className={`doc-pill ${scenarioState.documents?.cr?.uploaded ? 'pill-active' : ''}`}
                  onClick={() => updateDoc('cr', !scenarioState.documents?.cr?.uploaded)}
                >
                  <Check size={13} /> {isArabic ? "السجل التجاري (CR)" : "Commercial Register (CR)"}
                </button>

                <button 
                  type="button"
                  className={`doc-pill ${scenarioState.documents?.financials?.uploaded ? 'pill-active' : ''}`}
                  onClick={() => updateDoc('financials', !scenarioState.documents?.financials?.uploaded)}
                >
                  <Check size={13} /> {isArabic ? "القوائم والتوقعات المالية" : "Financial Projections"}
                </button>

                <button 
                  type="button"
                  className={`doc-pill ${scenarioState.documents?.bank?.uploaded ? 'pill-active' : ''}`}
                  onClick={() => updateDoc('bank', !scenarioState.documents?.bank?.uploaded)}
                >
                  <Check size={13} /> {isArabic ? "كشف حساب 6 أشهر" : "6-Month Bank Statement"}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Assessment Preview Output */}
          <div className="editor-preview-col">
            <div className="live-preview-box">
              <span className="live-badge-label">
                <Sparkles size={13} /> {isArabic ? "التشخيص الفوري المحسوب" : "Live Calculated Diagnostic"}
              </span>

              {/* Gauge Score */}
              <div className="preview-score-center">
                <div className="score-dial-wrap" style={{ width: '110px', height: '110px' }}>
                  <svg className="score-svg-circle" viewBox="0 0 120 120">
                    <circle className="score-circle-bg" cx="60" cy="60" r="50" strokeWidth="10" />
                    <circle 
                      className="score-circle-fill" 
                      cx="60" 
                      cy="60" 
                      r="50" 
                      strokeWidth="10" 
                      strokeDasharray="314.159"
                      strokeDashoffset={314.159 * (1 - liveAssessment.score / 100)}
                      style={{ stroke: liveAssessment.score >= 80 ? '#00C853' : liveAssessment.score >= 65 ? '#F59E0B' : '#EF4444' }}
                    />
                  </svg>
                  <div className="score-number-box">
                    <span className="score-big" style={{ fontSize: '1.8rem' }}>{liveAssessment.score}</span>
                    <span className="score-max">/ 100</span>
                  </div>
                </div>

                <span className={`badge ${liveAssessment.score >= 80 ? 'badge-success' : liveAssessment.score >= 65 ? 'badge-warning' : 'badge-danger'} mt-2`}>
                  {liveAssessment.score >= 80 
                    ? (isArabic ? "جاهز للتقديم ✓" : "Ready to Apply ✓") 
                    : liveAssessment.score >= 65 
                      ? (isArabic ? "يحتاج تحسين ⚠" : "Needs Attention ⚠") 
                      : (isArabic ? "غير جاهز 🔴" : "Not Ready 🔴")}
                </span>
              </div>

              {/* Dimensions Mini */}
              <div className="preview-dim-bars mt-3">
                <div className="dim-mini-row">
                  <span>{isArabic ? "الأهلية:" : "Eligibility:"}</span>
                  <strong>{liveAssessment.dimensions?.eligibility}%</strong>
                </div>
                <div className="dim-mini-row">
                  <span>{isArabic ? "المستندات:" : "Documents:"}</span>
                  <strong>{liveAssessment.dimensions?.documents}%</strong>
                </div>
                <div className="dim-mini-row">
                  <span>{isArabic ? "الملاءمة المالية:" : "Financials:"}</span>
                  <strong>{liveAssessment.dimensions?.financials}%</strong>
                </div>
              </div>

              {/* Recommended Product Box */}
              <div className="preview-rec-box mt-3">
                <span className="preview-rec-title">
                  <Building2 size={14} /> {isArabic ? "المنتج الموصى به:" : "Recommended Track:"}
                </span>
                <strong className="preview-rec-name text-cyan">
                  {liveAssessment.productRecommendation?.recommendedProduct}
                </strong>
                <p className="preview-rec-sub">
                  {liveAssessment.productRecommendation?.matchScore} {isArabic ? "ملاءمة مثالية" : "Optimal Match"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="modal-footer-row mt-4">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            {isArabic ? "إلغاء" : "Close"}
          </button>
          <button type="button" className="btn btn-primary" onClick={handleApplyToWizard}>
            <Sparkles size={16} />
            <span>{isArabic ? "تطبيق السيناريو على معالج التقديم" : "Apply Scenario to Application"}</span>
            <ArrowIcon size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
