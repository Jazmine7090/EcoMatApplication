import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Zap, ArrowRight, ArrowLeft, ShieldCheck } from 'lucide-react';

export function FinalCTA({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card card">
          {/* Decorative glow circles */}
          <div className="cta-glow-orb cta-orb-left"></div>
          <div className="cta-glow-orb cta-orb-right"></div>

          <div className="final-cta-inner text-center">
            <div className="cta-tag-badge">
              <Sparkles size={14} />
              <span>{isArabic ? "ابدأ فحصك الذكي مجاناً" : "Start Free AI Readiness Check"}</span>
            </div>

            <h2 className="final-cta-title">
              {t.finalCTA.title}
            </h2>

            <p className="final-cta-subtitle">
              {t.finalCTA.subtitle}
            </p>

            <div className="final-cta-buttons">
              <button 
                className="btn btn-gold btn-lg final-cta-btn"
                onClick={onStartApplication}
              >
                <Zap size={20} />
                <span>{t.finalCTA.btn}</span>
                <ArrowIcon size={20} />
              </button>
            </div>

            <div className="final-cta-micro-points">
              <div className="micro-point">
                <ShieldCheck size={16} className="text-primary-300" />
                <span>{isArabic ? "مجاني 100% لرواد الأعمال" : "100% Free for Entrepreneurs"}</span>
              </div>
              <div className="micro-point">
                <Sparkles size={16} className="text-gold-300" />
                <span>{isArabic ? "تشخيص فوري خلال 3 دقائق" : "Instant 3-Minute Diagnosis"}</span>
              </div>
              <div className="micro-point">
                <ShieldCheck size={16} className="text-primary-300" />
                <span>{isArabic ? "حماية وخصوصية تامة للبيانات" : "Strict Data Privacy"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
