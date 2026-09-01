import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  UploadCloud, 
  FileCheck, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  FileText
} from 'lucide-react';

export function Step4Documents({ formData, updateFormData }) {
  const { t, isArabic } = useLanguage();
  const s = t.wizard.step4;

  const currentDocs = formData.documents || {};

  const handleSimulateUpload = (key, customName = null) => {
    const fileName = customName || `${key.toUpperCase()}_Verified_Doc_2026.pdf`;
    const updated = {
      ...currentDocs,
      [key]: {
        uploaded: true,
        name: fileName,
        size: '1.8 MB',
        date: new Date().toLocaleDateString(),
        valid: true,
      },
    };
    updateFormData({ documents: updated });
  };

  const handleRemoveDoc = (key) => {
    const updated = { ...currentDocs };
    delete updated[key];
    updateFormData({ documents: updated });
  };

  const handleAutoFillAllDocs = () => {
    const sampleDocs = {
      cr: { uploaded: true, name: "MoC_CR_Active_Verified.pdf", size: "1.2 MB", valid: true },
      financials: { uploaded: true, name: "Financial_Projections_3Yr.pdf", size: "2.4 MB", valid: true },
      bank: { uploaded: true, name: "Bank_Statement_Stamped_6M.pdf", size: "3.1 MB", valid: true },
      plan: { uploaded: true, name: "Feasibility_Business_Plan.pdf", size: "4.5 MB", valid: true },
      support: { uploaded: true, name: "Balady_Operating_License.pdf", size: "850 KB", valid: true },
    };
    updateFormData({ documents: sampleDocs });
  };

  return (
    <div className="wizard-step-content animate-fade-in">
      <div className="step-header-text flex-header">
        <div>
          <h3 className="step-main-title">{s.title}</h3>
          <p className="step-main-sub">{s.subtitle}</p>
        </div>
        <button 
          type="button" 
          className="btn btn-secondary btn-sm"
          onClick={handleAutoFillAllDocs}
        >
          <Sparkles size={14} className="text-gold" />
          <span>{isArabic ? "إرفاق كافة المستندات التجريبية (نقرة واحدة)" : "Auto-Attach All Sample Files"}</span>
        </button>
      </div>

      <div className="documents-upload-stack">
        {s.docs.map((docItem) => {
          const docState = currentDocs[docItem.key];
          const isUploaded = docState && docState.uploaded;

          return (
            <div 
              key={docItem.key} 
              className={`doc-upload-box card ${isUploaded ? 'is-uploaded' : 'is-pending'}`}
            >
              <div className="doc-info-col">
                <div className="doc-title-row">
                  <h4 className="doc-name">{docItem.name}</h4>
                  {docItem.req ? (
                    <span className="badge badge-warning text-xs">{isArabic ? "إلزامي *" : "Mandatory *"}</span>
                  ) : (
                    <span className="badge badge-info text-xs">{isArabic ? "اختياري" : "Optional"}</span>
                  )}
                </div>
                <p className="doc-desc">{docItem.desc}</p>
              </div>

              <div className="doc-action-col">
                {isUploaded ? (
                  <div className="uploaded-file-card">
                    <div className="uploaded-icon-wrap">
                      <FileCheck size={20} className="text-success" />
                    </div>
                    <div className="uploaded-meta">
                      <span className="uploaded-filename">{docState.name}</span>
                      <span className="uploaded-status-tag">
                        <CheckCircle2 size={12} /> {s.uploaded}
                      </span>
                    </div>
                    <button 
                      type="button"
                      className="btn-icon-delete"
                      onClick={() => handleRemoveDoc(docItem.key)}
                      title={isArabic ? "حذف الملف" : "Remove file"}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ) : (
                  <div 
                    className="dropzone-area" 
                    onClick={() => handleSimulateUpload(docItem.key)}
                  >
                    <UploadCloud size={24} className="dropzone-icon" />
                    <span className="dropzone-text">
                      <strong>{s.browse}</strong>
                    </span>
                    <span className="dropzone-sub">{s.supportedFormats}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
