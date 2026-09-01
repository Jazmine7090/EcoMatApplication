import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Globe, Menu, X, ArrowRight, ArrowLeft, LogIn } from 'lucide-react';

export function Navbar({ activePage, setActivePage, onOpenLogin }) {
  const { t, lang, toggleLanguage, isArabic } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, id: 'home' },
    { label: t.nav.howItWorks, id: 'how-it-works' },
    { label: t.nav.features, id: 'readiness' },
    { label: t.nav.impact, id: 'impact' },
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
      {/* Top Hackathon Announcement Bar */}
      <div className="top-banner">
        <div className="container banner-inner">
          <span className="banner-badge">
            <Sparkles size={13} /> SDB Hackathon 2026
          </span>
          <p className="banner-text">{t.hackathonNotice}</p>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div className="main-nav glass-panel">
        <div className="container nav-container">
          {/* Brand Logo */}
          <div 
            className="brand-logo" 
            onClick={() => { setActivePage('landing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ cursor: 'pointer' }}
          >
            <div className="logo-icon-box">
              <img src="/logo.svg" alt="EcoMat Logo" className="brand-svg-logo" />
            </div>
            <div className="brand-text-group">
              <span className="brand-title">{t.brandName}</span>
              <span className="brand-tagline">{t.brandTagline}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="desktop-links">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)} 
                className="nav-link-btn"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="nav-actions">
            {/* Language Switcher */}
            <button 
              className="btn btn-secondary btn-sm lang-toggle-btn"
              onClick={toggleLanguage}
              title={isArabic ? "Switch to English" : "التحويل إلى العربية"}
            >
              <Globe size={16} />
              <span className="lang-text">{isArabic ? "English" : "العربية"}</span>
            </button>

            {/* Login / Portal Button */}
            <button 
              className="btn btn-ghost btn-sm login-btn"
              onClick={onOpenLogin}
            >
              <LogIn size={16} />
              <span>{t.nav.login}</span>
            </button>

            {/* Start Application CTA */}
            {activePage !== 'apply' ? (
              <button 
                className="btn btn-primary btn-sm cta-btn"
                onClick={handleApplyClick}
              >
                <span>{t.nav.startApplication}</span>
                <ArrowIcon size={16} />
              </button>
            ) : (
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setActivePage('landing')}
              >
                <span>{t.wizard.buttons.backToHome}</span>
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button 
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer glass-panel">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNavClick(link.id)} 
                className="mobile-nav-link"
              >
                {link.label}
              </button>
            ))}
            <hr className="drawer-divider" />
            <button className="btn btn-secondary w-full" onClick={onOpenLogin}>
              <LogIn size={16} />
              <span>{t.nav.login}</span>
            </button>
            <button className="btn btn-primary w-full" onClick={handleApplyClick}>
              <span>{t.nav.startApplication}</span>
              <ArrowIcon size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
