import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Landmark, DollarSign, Target, FileSpreadsheet, TrendingUp, AlertTriangle } from 'lucide-react';

export function Step3Financing({ formData, updateFormData }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step3;

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
        {/* SDB Target Product */}
        <div className="form-group grid-span-2">
          <label className="form-label" htmlFor="financingProduct">
            <Landmark size={15} className="label-icon" />
            <span>{s.financingProduct}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="financingProduct"
            className="form-select"
            value={formData.financingProduct || ''}
            onChange={(e) => handleChange('financingProduct', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر منتج التمويل --" : "-- Select Financing Product --"}</option>
            {s.products.map((prod, idx) => (
              <option key={idx} value={prod}>{prod}</option>
            ))}
          </select>
          <span className="form-hint-text">
            {isArabic 
              ? "سيقوم ذكاء إيكومات بالتحقق مما إذا كان هذا المنتج هو الأنسب لبياناتك أم يقترح بديلاً أكثر فائدة."
              : "EcoMat AI will evaluate if this track is optimal or suggest a better-matching SDB facility."}
          </span>
        </div>

        {/* Requested Financing Amount */}
        <div className="form-group">
          <label className="form-label" htmlFor="requestedAmount">
            <DollarSign size={15} className="label-icon" />
            <span>{s.requestedAmount}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="requestedAmount"
            type="number" 
            min="10000"
            step="10000"
            className="form-input"
            placeholder="350000"
            value={formData.requestedAmount || ''}
            onChange={(e) => handleChange('requestedAmount', e.target.value)}
          />
        </div>

        {/* Financing Purpose */}
        <div className="form-group">
          <label className="form-label" htmlFor="purpose">
            <Target size={15} className="label-icon" />
            <span>{s.purpose}</span>
            <span className="required-star">*</span>
          </label>
          <select 
            id="purpose"
            className="form-select"
            value={formData.purpose || ''}
            onChange={(e) => handleChange('purpose', e.target.value)}
          >
            <option value="">{isArabic ? "-- اختر غرض التمويل --" : "-- Select Purpose --"}</option>
            {s.purposes.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>

        {/* Expected Revenue Post-Financing */}
        <div className="form-group">
          <label className="form-label" htmlFor="expectedRevenue">
            <TrendingUp size={15} className="label-icon" />
            <span>{s.expectedRevenue}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="expectedRevenue"
            type="number" 
            min="0"
            step="5000"
            className="form-input"
            placeholder="150000"
            value={formData.expectedRevenue || ''}
            onChange={(e) => handleChange('expectedRevenue', e.target.value)}
          />
        </div>

        {/* Current Monthly Obligations / Debt */}
        <div className="form-group">
          <label className="form-label" htmlFor="financialObligations">
            <AlertTriangle size={15} className="label-icon" />
            <span>{s.financialObligations}</span>
            <span className="required-star">*</span>
          </label>
          <input 
            id="financialObligations"
            type="number" 
            min="0"
            step="1000"
            className="form-input"
            placeholder="8000"
            value={formData.financialObligations || ''}
            onChange={(e) => handleChange('financialObligations', e.target.value)}
          />
          <span className="form-hint-text">
            {isArabic ? "أدخل '0' إذا لم تكن هناك أي التزامات ائتمانية قائمة" : "Enter '0' if there are no existing credit obligations"}
          </span>
        </div>

        {/* Detailed Use of Funds */}
        <div className="form-group grid-span-2">
          <label className="form-label" htmlFor="useOfFunds">
            <FileSpreadsheet size={15} className="label-icon" />
            <span>{s.useOfFunds}</span>
          </label>
          <textarea 
            id="useOfFunds"
            rows={3}
            className="form-textarea"
            placeholder={isArabic ? "توضيح أوجه توزيع مبلغ التمويل (مثال: 60% تجهيز الفرع الجديد، 40% شراء مخزون أولي)..." : "Explain fund allocation (e.g. 60% equipment & infrastructure, 40% initial inventory)..."}
            value={formData.useOfFunds || ''}
            onChange={(e) => handleChange('useOfFunds', e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
