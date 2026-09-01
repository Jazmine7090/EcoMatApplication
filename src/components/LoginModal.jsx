import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, ShieldCheck, LogIn, Lock, Mail, Check } from 'lucide-react';

export function LoginModal({ isOpen, onClose }) {
  const { t, isArabic } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulateLogin = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content login-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-row">
          <div className="modal-title-group">
            <div className="logo-icon-box mb-2">
              <img src="/logo.svg" alt="EcoMat Logo" className="brand-svg-logo" style={{ width: '32px', height: '32px' }} />
            </div>
            <h3 className="modal-title">{t.loginModal.title}</h3>
            <p className="modal-subtitle">{t.loginModal.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {isSuccess ? (
          <div className="login-success-state text-center py-6 animate-fade-in">
            <div className="success-icon-circle mx-auto mb-3">
              <Check size={32} className="text-success" />
            </div>
            <h4>{isArabic ? "تم تسجيل الدخول بنجاح!" : "Authenticated Successfully!"}</h4>
            <p className="text-muted text-sm">{isArabic ? "مرحباً بك في بوابة رواد الأعمال" : "Welcome to your Entrepreneur Dashboard"}</p>
          </div>
        ) : (
          <div className="login-body">
            {/* Nafath National SSO Button */}
            <button 
              type="button" 
              className="btn nafath-sso-btn w-full mb-4"
              onClick={() => {
                setIsSuccess(true);
                setTimeout(() => { setIsSuccess(false); onClose(); }, 1500);
              }}
            >
              <ShieldCheck size={20} className="text-primary" />
              <span>{t.loginModal.nafathBtn}</span>
            </button>

            <div className="or-divider">
              <span>{t.loginModal.orDivider}</span>
            </div>

            <form onSubmit={handleSimulateLogin} className="login-form mt-4">
              <div className="form-group mb-3">
                <label className="form-label">{t.loginModal.emailLabel}</label>
                <div className="input-with-icon">
                  <Mail size={16} className="input-icon" />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="user@ecomat.sa"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="form-label">{t.loginModal.passLabel}</label>
                <div className="input-with-icon">
                  <Lock size={16} className="input-icon" />
                  <input 
                    type="password" 
                    className="form-input" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg">
                <LogIn size={18} />
                <span>{t.loginModal.btnSubmit}</span>
              </button>
            </form>

            <p className="login-demo-hint mt-4 text-center">
              {t.loginModal.demoHint}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
