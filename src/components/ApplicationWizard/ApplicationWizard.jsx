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
  ShieldCheck
} from 'lucide-react';

export function ApplicationWizard({ onBackToHome, initialData = null }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;
  const BackArrowIcon = isArabic ? ArrowRight : ArrowLeft;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    return initialData || DEMO_SCENARIOS.NEEDS_ATTENTION.data;
  });
  const [assessmentResult, setAssessmentResult] = useState(null);

  const updateFormData = (patch) => {
    setFormData((prev) => ({
      ...prev,
      ...patch,
    }));
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
                    if (step.number < currentStep || currentStep === 6) {
                      handleJumpToStep(step.number);
                    }
                  }}
                  style={{ cursor: (step.number < currentStep || currentStep === 6) ? 'pointer' : 'default' }}
                >
                  <div className="node-circle">
                    {isCompleted ? (
                      <Check size={16} />
                    ) : (
                      <span>{step.number}</span>
                    )}
                  </div>
                  <div className="node-label-group">
                    <span className="node-title">{step.title}</span>
                    <span className="node-sub">{step.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wizard Step Body */}
        <div className="wizard-body-wrapper card">
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
              assessmentResult={assessmentResult}
              formData={formData}
              updateFormData={updateFormData}
              onEditAgain={() => setCurrentStep(5)}
              onResetAll={handleResetForm}
            />
          )}

          {/* Stepper Navigation Buttons (Steps 1 - 4) */}
          {currentStep < 5 && (
            <div className="wizard-footer-nav">
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={handlePrev}
                disabled={currentStep === 1}
              >
                <BackArrowIcon size={16} />
                <span>{t.wizard.buttons.back}</span>
              </button>

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
