import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DEMO_SCENARIOS } from '../services/aiReadinessEngine';
import { Sparkles, Sliders, CheckCircle2, AlertTriangle, XCircle, RefreshCcw, ChevronUp, ChevronDown, Edit3 } from 'lucide-react';

export function DemoScenarioToolbar({ onSelectScenario, onResetToBlank, onOpenScenarioEditor }) {
  const { t, isArabic } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeScenario, setActiveScenario] = useState('attention');

  const handleSelect = (scenarioKey) => {
    setActiveScenario(scenarioKey);
    onSelectScenario(scenarioKey);
  };

  return (
    <div className={`demo-floating-toolbar ${isCollapsed ? 'is-minimized' : ''}`}>
      {/* Header bar of toolbar */}
      <div className="toolbar-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="toolbar-title-box">
          <Sparkles size={16} className="text-cyan" />
          <span className="toolbar-main-title">{t.demoToolbar.label}</span>
        </div>
        <button className="toolbar-toggle-btn" aria-label="Toggle toolbar">
          {isCollapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {/* Buttons body */}
      {!isCollapsed && (
        <div className="toolbar-buttons-grid">
          {/* Scenario 1: READY */}
          <button 
            type="button"
            className={`demo-pill-btn btn-sc-ready ${activeScenario === 'ready' ? 'active-scenario' : ''}`}
            onClick={() => handleSelect('ready')}
          >
            <div className="btn-sc-top">
              <CheckCircle2 size={15} className="text-success" />
              <strong>{t.demoToolbar.scenario1}</strong>
            </div>
            <span className="btn-sc-desc">{t.demoToolbar.desc1}</span>
          </button>

          {/* Scenario 2: NEEDS ATTENTION */}
          <button 
            type="button"
            className={`demo-pill-btn btn-sc-attention ${activeScenario === 'attention' ? 'active-scenario' : ''}`}
            onClick={() => handleSelect('attention')}
          >
            <div className="btn-sc-top">
              <AlertTriangle size={15} className="text-warning" />
              <strong>{t.demoToolbar.scenario2}</strong>
            </div>
            <span className="btn-sc-desc">{t.demoToolbar.desc2}</span>
          </button>

          {/* Scenario 3: NOT READY */}
          <button 
            type="button"
            className={`demo-pill-btn btn-sc-notready ${activeScenario === 'not_ready' ? 'active-scenario' : ''}`}
            onClick={() => handleSelect('not_ready')}
          >
            <div className="btn-sc-top">
              <XCircle size={15} className="text-danger" />
              <strong>{t.demoToolbar.scenario3}</strong>
            </div>
            <span className="btn-sc-desc">{t.demoToolbar.desc3}</span>
          </button>

          {/* Custom Scenario Editor Button */}
          <button 
            type="button"
            className="demo-pill-btn btn-sc-customize"
            onClick={onOpenScenarioEditor}
          >
            <div className="btn-sc-top">
              <Sliders size={15} className="text-cyan" />
              <strong>{isArabic ? "تخصيص السيناريو (محرر حي)" : "Customize Scenario Live"}</strong>
            </div>
            <span className="btn-sc-desc">{isArabic ? "تعديل الإيرادات والمستندات ومشاهدة النتيجة فورياً" : "Tweak sliders to test any custom profile"}</span>
          </button>

          {/* Reset button */}
          <button 
            type="button"
            className="demo-pill-btn btn-sc-reset"
            onClick={() => {
              setActiveScenario('blank');
              onResetToBlank();
            }}
          >
            <div className="btn-sc-top">
              <RefreshCcw size={14} />
              <span>{t.demoToolbar.custom}</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
