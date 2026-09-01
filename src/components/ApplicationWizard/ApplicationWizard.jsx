import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Step1Applicant } from './Step1Applicant';
import { Step2Business } from './Step2Business';
import { Step3Financing } from './Step3Financing';
import { Step4Documents } from './Step4Documents';
import { Step5Review } from './Step5Review';
import { Step6AIResults } from './Step6AIResults';
import { runReadinessAssessment, DEMO_SCENARIOS } from '../../services/aiReadinessEngine';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  RotateCcw, 
  Home,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sliders
} from 'lucide-react';

export function ApplicationWizard({ onBackToHome, onOpenScenarioEditor, initialData = null }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isArabic ? ArrowRight : ArrowLeft;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    return initialData || DEMO_SCENARIOS.NEEDS_ATTENTION.data;
  });
  const [activeScenarioKey, setActiveScenarioKey] = useState('attention');
  const [assessmentResult, setAssessmentResult] = useState(null);

  const updateFormData = (patch) => {
    setFormData((prev) => ({
      ...prev,
      ...patch,
    }));
  };

  const handleQuickScenarioSwitch = (key) => {
    setActiveScenarioKey(key);
    let targetData = formData;

    if (key === 'ready') {
      targetData = DEMO_SCENARIOS.READY.data;
    } else if (key === 'attention') {
      targetData = DEMO_SCENARIOS.NEEDS_ATTENTION.data;
    } else if (key === 'not_ready') {
      targetData = DEMO_SCENARIOS.NOT_READY.data;
    }

    setFormData(targetData);

    // If currently on Step 6, instantly re-evaluate
    if (currentStep === 6) {
      const updatedAssessment = runReadinessAssessment(targetData, null, isArabic);
      setAssessmentResult(updatedAssessment);
    }
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleRunAICheck = () => {
    const result = runReadinessAssessment(formData, null, isArabic);
    setAssessmentResult(result);
    setCurrentStep(6);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleJumpToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleResetForm = () => {
    setFormData({});
    setAssessmentResult(null);
    setActiveScenarioKey('blank');
    setCurrentStep(1);
  };

  const steps = t.wizard.steps;

  return (
    <div className="application-wizard-page">
      <div className="container">
        {/* Wizard Top Header */}
        <div className="wizard-page-header text-center">
          <button 
            type="button" 
            className="btn btn-ghost btn-sm back-home-nav-btn"
            onClick={onBackToHome}
          >
            <BackArrowIcon size={16} />
            <span>{t.wizard.buttons.backToHome}</span>
          </button>

          <div className="badge badge-sdb mb-2">
            <Sparkles size={14} /> {t.wizard.badge}
          </div>
          <h1 className="wizard-main-heading">{t.wizard.title}</h1>
          <p className="wizard-main-subtitle">{t.wizard.subtitle}</p>
        </div>

        {/* 1-Click Scenario Quick Switcher Bar */}
        <div className="scenario-quick-bar card mb-4">
          <div className="quick-bar-inner">
            <div className="quick-bar-label">
              <Sparkles size={15} className="text-sdb" />
              <span>{isArabic ? "التبديل الفوري بين السيناريوهات:" : "1-Click Scenario Switcher:"}</span>
            </div>

            <div className="quick-buttons-group">
              {/* Scenario 1: Strong */}
              <button
                type="button"
                className={`btn btn-sm quick-scenario-btn ${activeScenarioKey === 'ready' ? 'quick-active-ready' : ''}`}
                onClick={() => handleQuickScenarioSwitch('ready')}
              >
                <CheckCircle2 size={15} className="text-sdb" />
                <div className="quick-btn-texts">
                  <strong>{isArabic ? "1. جاهز وقوي (92%)" : "1. Strong / Ready (92%)"}</strong>
                  <small>{isArabic ? "ملاءمة أفق • تدفق قوي" : "Tech SaaS • High Cashflow"}</small>
                </div>
              </button>

              {/* Scenario 2: Action Required */}
              <button
                type="button"
                className={`btn btn-sm quick-scenario-btn ${activeScenarioKey === 'attention' ? 'quick-active-attention' : ''}`}
                onClick={() => handleQuickScenarioSwitch('attention')}
              >
                <AlertTriangle size={15} className="text-warning" />
                <div className="quick-btn-texts">
                  <strong>{isArabic ? "2. يحتاج إجراءات (74%)" : "2. Action Required (74%)"}</strong>
                  <small>{isArabic ? "تجزئة • نقص توقعات مالية" : "Retail F&B • Missing Projections"}</small>
                </div>
              </button>

              {/* Scenario 3: Rejected */}
              <button
                type="button"
                className={`btn btn-sm quick-scenario-btn ${activeScenarioKey === 'not_ready' ? 'quick-active-rejected' : ''}`}
                onClick={() => handleQuickScenarioSwitch('not_ready')}
              >
                <XCircle size={15} className="text-danger" />
                <div className="quick-btn-texts">
                  <strong>{isArabic ? "3. غير جاهز / مرفوض (51%)" : "3. Rejected / Not Ready (51%)"}</strong>
                  <small>{isArabic ? "فكرة أولية • ديون مرتفعة" : "Early Idea • High Debt"}</small>
                </div>
              </button>

              {/* Live Customizer trigger */}
              {onOpenScenarioEditor && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm quick-customizer-btn"
                  onClick={onOpenScenarioEditor}
                >
                  <Sliders size={14} />
                  <span>{isArabic ? "محرر السيناريو" : "Customizer"}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Multi-Step Horizontal Stepper Bar */}
        <div className="wizard-stepper-card card">
          <div className="stepper-track">
            {steps.map((step) => {
              const isCompleted = currentStep > step.number;
              const isActive = currentStep === step.number;
              return (
                <div 
                  key={step.number} 
                  className={`stepper-node ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''}`}
                  onClick={() => {
                    if (currentStep === 6 || isCompleted || step.number < currentStep) {
                      handleJumpToStep(step.number);
                    }
                  }}
                  style={{ cursor: isCompleted || step.number < currentStep ? 'pointer' : 'default' }}
                >
                  <div className="node-circle">
                    {isCompleted ? <Check size={16} /> : step.number}
                  </div>
                  <div className="node-label-group">
                    <span className="node-title">{step.title}</span>
                    <span className="node-sub">{step.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wizard Step Body */}
        <div className="wizard-body-wrapper">
          {currentStep === 1 && (
            <Step1Applicant formData={formData} updateFormData={updateFormData} />
          )}

          {currentStep === 2 && (
            <Step2Business formData={formData} updateFormData={updateFormData} />
          )}

          {currentStep === 3 && (
            <Step3Financing formData={formData} updateFormData={updateFormData} />
          )}

          {currentStep === 4 && (
            <Step4Documents formData={formData} updateFormData={updateFormData} />
          )}

          {currentStep === 5 && (
            <Step5Review 
              formData={formData} 
              onJumpToStep={handleJumpToStep}
              onRunAI={handleRunAICheck}
            />
          )}

          {currentStep === 6 && (
            <Step6AIResults 
              assessmentResult={assessmentResult || runReadinessAssessment(formData, null, isArabic)} 
              formData={formData}
              updateFormData={updateFormData}
              onEditAgain={() => setCurrentStep(1)}
              onResetAll={handleResetForm}
            />
          )}

          {/* Navigation Controls (Steps 1-4) */}
          {currentStep < 5 && (
            <div className="wizard-footer-nav">
              <div>
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handlePrev}
                  >
                    <BackArrowIcon size={16} />
                    <span>{t.wizard.buttons.prev}</span>
                  </button>
                )}
              </div>

              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleNext}
              >
                <span>{t.wizard.buttons.next}</span>
                <ArrowIcon size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
