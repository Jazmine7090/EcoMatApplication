import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { User, CreditCard, Phone, Mail, MapPin, Briefcase } from 'lucide-react';

export function Step1Applicant({ formData, updateFormData }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step1;

  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  return (
    <div className="wizard-step-content animate-fade-in">
      <div className="step-header-text">
        <h3 className="step-main-title">{s.title}</h3>
        <p className="step-main-sub">{s.subtitle}</p>
      </div>

      <div className="form-grid">
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            <User size={15} className="label-icon" />
            <span>{s.fullName}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="fullName"
            type="text" 
            className="form-input"
            placeholder={isArabic ? "مثال: فيصل عبد الله العتيبي" : "e.g. Faisal Abdullah Al-Otaibi"}
            value={formData.fullName || ''}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
        </div>

        {/* National ID */}
        <div className="form-group">
          <label className="form-label" htmlFor="nationalId">
            <CreditCard size={15} className="label-icon" />
            <span>{s.nationalId}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="nationalId"
            type="text" 
            maxLength={10}
            className="form-input"
            placeholder="1082947192"
            value={formData.nationalId || ''}
            onChange={(e) => handleChange('nationalId', e.target.value.replace(/\D/g, ''))}
          />
        </div>

        {/* Mobile Number */}
        <div className="form-group">
          <label className="form-label" htmlFor="mobile">
            <Phone size={15} className="label-icon" />
            <span>{s.mobile}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="mobile"
            type="tel" 
            maxLength={10}
            className="form-input"
            placeholder="0504938210"
            value={formData.mobile || ''}
            onChange={(e) => handleChange('mobile', e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            <Mail size={15} className="label-icon" />
            <span>{s.email}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="email"
            type="email" 
            className="form-input"
            placeholder="faisal@example.sa"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        {/* City / Region */}
        <div className="form-group">
          <label className="form-label" htmlFor="city">
            <MapPin size={15} className="label-icon" />
            <span>{s.city}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="city"
            className="form-select"
            value={formData.city || ''}
            onChange={(e) => handleChange('city', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر المدينة / المنطقة --" : "-- Select City / Region --"}</option>
            <option value="Riyadh">{isArabic ? "الرياض (منطقة الرياض)" : "Riyadh"}</option>
            <option value="Jeddah">{isArabic ? "جدة (منطقة مكة المكرمة)" : "Jeddah"}</option>
            <option value="Dammam / Eastern">{isArabic ? "الدمام والخبر (المنطقة الشرقية)" : "Dammam / Khobar (Eastern)"}</option>
            <option value="Makkah">{isArabic ? "مكة المكرمة" : "Makkah"}</option>
            <option value="Madinah">{isArabic ? "المدينة المنورة" : "Madinah"}</option>
            <option value="Qassim">{isArabic ? "منطقة القصيم" : "Qassim"}</option>
            <option value="Asir">{isArabic ? "منطقة عسير" : "Asir"}</option>
            <option value="Other">{isArabic ? "منطقة أخرى" : "Other Saudi Region"}</option>
          </select>
        </div>

        {/* Applicant Profile / Type */}
        <div className="form-group">
          <label className="form-label" htmlFor="applicantType">
            <Briefcase size={15} className="label-icon" />
            <span>{s.applicantType}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="applicantType"
            className="form-select"
            value={formData.applicantType || ''}
            onChange={(e) => handleChange('applicantType', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر صفة المتقدم --" : "-- Select Profile --"}</option>
            {s.types.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
