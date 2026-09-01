import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Building, FileText, Layers, Tag, Calendar, Users, DollarSign } from 'lucide-react';

export function Step2Business({ formData, updateFormData }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step2;

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
        {/* Business Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="businessName">
            <Building size={15} className="label-icon" />
            <span>{s.businessName}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="businessName"
            type="text" 
            className="form-input"
            placeholder={isArabic ? "مثال: شركة نبض السحابة اللوجستية" : "e.g. CloudPulse Logistics Tech"}
            value={formData.businessName || ''}
            onChange={(e) => handleChange('businessName', e.target.value)}
          />
        </div>

        {/* Business Type */}
        <div className="form-group">
          <label className="form-label" htmlFor="businessType">
            <Tag size={15} className="label-icon" />
            <span>{s.businessType}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="businessType"
            className="form-select"
            value={formData.businessType || ''}
            onChange={(e) => handleChange('businessType', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر الكيان القانوني --" : "-- Select Entity Type --"}</option>
            {s.types.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* CR Number */}
        <div className="form-group">
          <label className="form-label" htmlFor="crNumber">
            <FileText size={15} className="label-icon" />
            <span>{s.crNumber}</span>
          </label>
          <input 
            id="crNumber"
            type="text" 
            maxLength={10}
            className="form-input"
            placeholder="1010849201"
            value={formData.crNumber || ''}
            onChange={(e) => handleChange('crNumber', e.target.value.replace(/\D/g, ''))}
          />
          <span className="form-hint-text">
            {isArabic ? "10 أرقام صادرة من وزارة التجارة (اختياري لوثائق العمل الحر)" : "10 digits issued by Ministry of Commerce"}
          </span>
        </div>

        {/* Business Stage */}
        <div className="form-group">
          <label className="form-label" htmlFor="businessStage">
            <Layers size={15} className="label-icon" />
            <span>{s.businessStage}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="businessStage"
            className="form-select"
            value={formData.businessStage || ''}
            onChange={(e) => handleChange('businessStage', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر مرحلة المشروع --" : "-- Select Stage --"}</option>
            {s.stages.map((stage, idx) => (
              <option key={idx} value={stage}>{stage}</option>
            ))}
          </select>
        </div>

        {/* Economic Sector */}
        <div className="form-group">
          <label className="form-label" htmlFor="sector">
            <Tag size={15} className="label-icon" />
            <span>{s.sector}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="sector"
            className="form-select"
            value={formData.sector || ''}
            onChange={(e) => handleChange('sector', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر القطاع --" : "-- Select Sector --"}</option>
            {s.sectors.map((sec, idx) => (
              <option key={idx} value={sec}>{sec}</option>
            ))}
          </select>
        </div>

        {/* Years in Operation */}
        <div className="form-group">
          <label className="form-label" htmlFor="yearsInOperation">
            <Calendar size={15} className="label-icon" />
            <span>{s.yearsInOperation}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="yearsInOperation"
            type="number" 
            step="0.5"
            min="0"
            className="form-input"
            placeholder="2.5"
            value={formData.yearsInOperation || ''}
            onChange={(e) => handleChange('yearsInOperation', e.target.value)}
          />
        </div>

        {/* Employees */}
        <div className="form-group">
          <label className="form-label" htmlFor="employees">
            <Users size={15} className="label-icon" />
            <span>{s.employees}</span>
          </label>
          <input 
            id="employees"
            type="number" 
            min="0"
            className="form-input"
            placeholder="6"
            value={formData.employees || ''}
            onChange={(e) => handleChange('employees', e.target.value)}
          />
        </div>

        {/* Monthly Revenue */}
        <div className="form-group">
          <label className="form-label" htmlFor="monthlyRevenue">
            <DollarSign size={15} className="label-icon" />
            <span>{s.monthlyRevenue}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="monthlyRevenue"
            type="number" 
            min="0"
            step="1000"
            className="form-input"
            placeholder="85000"
            value={formData.monthlyRevenue || ''}
            onChange={(e) => handleChange('monthlyRevenue', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
