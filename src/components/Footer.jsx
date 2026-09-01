import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, ShieldAlert, Heart, Sparkles } from 'lucide-react';

export function Footer({ setActivePage, onOpenLogin }) {
  const { t, isArabic } = useLanguage();

  const handleNav = (id) => {
    setActivePage('landing');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        {/* Main Footer Columns */}
        <div className="footer-grid">
          {/* Col 1: Brand & SDB Hackathon context */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <img src="/logo.svg" alt="EcoMat Logo" className="footer-svg-logo" />
              <div className="footer-brand-text">
                <span className="brand-name">{t.brandName}</span>
                <span className="brand-tag">{t.brandTagline}</span>
              </div>
            </div>
            <p className="footer-desc-text">
              {t.footer.desc}
            </p>
            <div className="footer-sdb-link-box">
              <a 
                href="https://www.sdb.gov.sa/en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sdb-official-link"
              >
                <span>{t.footer.sdbLink}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">{t.footer.quickLinks}</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNav('home')}>{t.nav.home}</button></li>
              <li><button onClick={() => handleNav('how-it-works')}>{t.nav.howItWorks}</button></li>
              <li><button onClick={() => handleNav('readiness')}>{t.nav.features}</button></li>
              <li><button onClick={() => handleNav('pay-as-you-grow')}>{isArabic ? "السداد مع النمو" : "Pay as You Grow"}</button></li>
              <li><button onClick={() => handleNav('recovery')}>{isArabic ? "خطة التعافي الشفافة" : "Transparent Recovery"}</button></li>
              <li><button onClick={() => handleNav('impact')}>{t.nav.impact}</button></li>
            </ul>
          </div>

          {/* Col 3: Portal & Actions */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">{isArabic ? "بوابات الوصول" : "Portals & Tools"}</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => { setActivePage('apply'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>{t.nav.startApplication}</button></li>
              <li><button onClick={onOpenLogin}>{t.nav.login}</button></li>
              <li><a href="https://www.sdb.gov.sa/ar/our-products" target="_blank" rel="noreferrer">{isArabic ? "منتجات بنك التنمية الرسمية" : "Official SDB Products"}</a></li>
              <li><a href="https://www.sdb.gov.sa/ar/about-us" target="_blank" rel="noreferrer">{isArabic ? "عن بنك التنمية الاجتماعية" : "About SDB"}</a></li>
            </ul>
          </div>

          {/* Col 4: Hackathon Disclaimer Card */}
          <div className="footer-legal-col">
            <div className="footer-legal-card">
              <div className="legal-header">
                <ShieldAlert size={16} className="text-warning" />
                <h5 className="legal-title">{t.footer.legalTitle}</h5>
              </div>
              <p className="legal-text">{t.footer.legalText}</p>
              <div className="hackathon-tag-pill">
                <Sparkles size={12} />
                <span>SDB FinTech Hackathon 2026</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom copyright row */}
        <div className="footer-bottom-row">
          <p className="footer-copyright-text">{t.footer.rights}</p>
          <div className="footer-made-with">
            <span>{isArabic ? "صُمم بشغف لريادة الأعمال في المملكة 🇸🇦" : "Crafted with passion for Saudi Entrepreneurs 🇸🇦"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
