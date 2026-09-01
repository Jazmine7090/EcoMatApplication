import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Globe, Menu, X, ArrowRight, ArrowLeft, LogIn, ShieldCheck } from 'lucide-react';

export function Navbar({ activePage, setActivePage, onOpenLogin }) {
  const { t, lang, toggleLanguage, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: isArabic ? "عن المنظومة" : "About SDB", id: 'home' },
    { label: isArabic ? "كيف تعمل" : "Pathways", id: 'how-it-works' },
    { label: isArabic ? "الجاهزية التمويلية" : "Readiness", id: 'readiness' },
    { label: isArabic ? "الأثر التنموي" : "Impact", id: 'impact' },
  ];

  const handleNavClick = (id) => {
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
    setMobileMenuOpen(false);
  };

  const handleApplyClick = () => {
    setActivePage('apply');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  return (
    <header className="navbar-wrapper">
      {/* Top Demo Context Bar */}
      <div className="top-banner">
        <div className="container banner-inner">
          <span>
            {isArabic 
              ? "مفهوم تجربة القطاع التنموي السعودي · منصة إيكومات للتمويل التنموي الذكي · نموذج تجريبي" 
              : "Saudi public-sector experience concept · SDB EcoMat demonstration · Prototype"}
          </span>
        </div>
      </div>

      {/* Main SDB EcoMat Header Bar */}
      <div className="main-nav">
        <div className="container nav-container">
          {/* Brand Logo matching reference */}
          <div 
            className="brand-logo" 
            onClick={() => { setActivePage('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ cursor: 'pointer' }}
          >
            <div className="sdb-square-badge">
              SDB
            </div>
            <div className="brand-text-group">
              <span className="brand-title">
                {isArabic ? "بنك التنمية الاجتماعية" : "Social Development Bank"}
              </span>
              <small className="brand-tagline">
                {isArabic ? "إيكومات · EcoMat 2030" : "SDB 2030 · EcoMat"}
              </small>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-links">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                className="nav-link-btn"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Language Switch */}
            <button 
              className="btn btn-secondary btn-sm lang-toggle-btn"
              onClick={toggleLanguage}
              title="Toggle English / Arabic"
            >
              <Globe size={13} />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Login / Nafath */}
            <button 
              className="btn btn-secondary btn-sm login-btn"
              onClick={onOpenLogin}
            >
              <LogIn size={13} />
              <span>{t.nav.login}</span>
            </button>

            {/* Primary Action */}
            <button 
              className="btn btn-primary btn-sm"
              onClick={handleApplyClick}
            >
              <span>{isArabic ? "فحص الجاهزية والتقديم" : "Enter EcoMat"}</span>
              <ArrowIcon size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer animate-fade-in">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                className="mobile-nav-link"
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button 
              className="btn btn-primary w-full mt-2"
              onClick={handleApplyClick}
            >
              <span>{isArabic ? "فحص الجاهزية والتقديم" : "Enter EcoMat"}</span>
              <ArrowIcon size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
