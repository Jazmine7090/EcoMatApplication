import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { ReadinessCheckSection } from './components/ReadinessCheckSection';
import { SmartRecommendation } from './components/SmartRecommendation';
import { TransparentRejection } from './components/TransparentRejection';
import { AfterApprovalSection } from './components/AfterApprovalSection';
import { PayAsYouGrowSection } from './components/PayAsYouGrowSection';
import { ImpactSection } from './components/ImpactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ApplicationWizard } from './components/ApplicationWizard/ApplicationWizard';
import { DemoScenarioToolbar } from './components/DemoScenarioToolbar';
import { LoginModal } from './components/LoginModal';
import { ScenarioEditorModal } from './components/ScenarioEditorModal';
import { DEMO_SCENARIOS } from './services/aiReadinessEngine';

function MainContent() {
  const [activePage, setActivePage] = useState('landing'); // 'landing' | 'apply'
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isScenarioEditorOpen, setIsScenarioEditorOpen] = useState(false);
  const [currentWizardData, setCurrentWizardData] = useState(DEMO_SCENARIOS.NEEDS_ATTENTION.data);

  const handleStartApplication = () => {
    setActivePage('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id) => {
    if (activePage !== 'landing') {
      setActivePage('landing');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectScenario = (scenarioKey) => {
    if (scenarioKey === 'ready') {
      setCurrentWizardData(DEMO_SCENARIOS.READY.data);
    } else if (scenarioKey === 'attention') {
      setCurrentWizardData(DEMO_SCENARIOS.NEEDS_ATTENTION.data);
    } else if (scenarioKey === 'not_ready') {
      setCurrentWizardData(DEMO_SCENARIOS.NOT_READY.data);
    }
  };

  const handleApplyCustomScenario = (customData) => {
    setCurrentWizardData(customData);
    setActivePage('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetToBlank = () => {
    setCurrentWizardData({});
  };

  return (
    <div className="app-layout">
      {/* Sticky Header */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />

      {/* Main Views */}
      <main className="main-content-area">
        {activePage === 'landing' ? (
          <>
            <Hero 
              onStartApplication={handleStartApplication}
              onScrollToHowItWorks={() => handleScrollToSection('how-it-works')}
            />
            <ProblemSection 
              onExploreRecovery={() => handleScrollToSection('recovery')}
              onStartApplication={handleStartApplication}
            />
            <HowItWorks 
              onStartApplication={handleStartApplication} 
            />
            <ReadinessCheckSection 
              onStartApplication={handleStartApplication} 
            />
            <SmartRecommendation 
              onStartApplication={handleStartApplication} 
            />
            <TransparentRejection 
              onStartApplication={handleStartApplication} 
            />
            <AfterApprovalSection 
              onStartApplication={handleStartApplication} 
            />
            <PayAsYouGrowSection />
            <ImpactSection 
              onStartApplication={handleStartApplication} 
            />
            <FinalCTA 
              onStartApplication={handleStartApplication} 
            />
          </>
        ) : (
          <ApplicationWizard 
            onBackToHome={() => {
              setActivePage('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initialData={currentWizardData}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />

      {/* Floating Demo Presets Switcher with Live Customizer */}
      <DemoScenarioToolbar 
        onSelectScenario={handleSelectScenario}
        onResetToBlank={handleResetToBlank}
        onOpenScenarioEditor={() => setIsScenarioEditorOpen(true)}
      />

      {/* Scenario Customizer / Editor Modal */}
      <ScenarioEditorModal 
        isOpen={isScenarioEditorOpen}
        onClose={() => setIsScenarioEditorOpen(false)}
        onApplyScenario={handleApplyCustomScenario}
      />

      {/* Mock Authentication / Nafath Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
