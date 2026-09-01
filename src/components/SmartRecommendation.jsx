import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  RefreshCw, 
  HelpCircle, 
  Info, 
  X,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';

export function SmartRecommendation({ onStartApplication }) {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  const [selectedProduct, setSelectedProduct] = useState('recommended');
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [switchedToast, setSwitchedToast] = useState(false);

  const handleSwitch = () => {
    setSelectedProduct('recommended');
    setSwitchedToast(true);
    setTimeout(() => setSwitchedToast(false), 3000);
  };

  const sdbProductsComparison = [
    {
      nameEn: "Entrepreneurs Financing",
      nameAr: "تمويل رواد الأعمال",
      targetEn: "New startups & emerging ventures",
      targetAr: "المنشآت الجديدة والمشاريع الناشئة",
      limit: "Up to SAR 300,000",
      limitAr: "حتى 300,000 ريال",
      gracePeriod: "Up to 18 Months",
      gracePeriodAr: "فترة سماح حتى 18 شهراً",
      tenor: "Up to 8 Years",
      tenorAr: "مدة سداد تصل إلى 8 سنوات",
      idealFor: "Pre-revenue or year 1 startups",
      idealForAr: "مرحلة التأسيس أو السنة الأولى",
    },
    {
      nameEn: "Ufuq Financing (أفق)",
      nameAr: "تمويل أفق (Ufuq)",
      targetEn: "High-growth existing enterprises",
      targetAr: "المنشآت القائمة ذات النمو السريع",
      limit: "Up to SAR 10,000,000",
      limitAr: "حتى 10,000,000 ريال",
      gracePeriod: "Up to 24 Months",
      gracePeriodAr: "فترة سماح حتى 24 شهراً",
      tenor: "Up to 10 Years",
      tenorAr: "مدة سداد تصل إلى 10 سنوات",
      idealFor: "Operating 2+ years with SAR 80k+ monthly revenue",
      idealForAr: "تشغيل سنتين فأكثر وإيراد 80 ألف+ ريال شهرياً",
      recommended: true,
    },
    {
      nameEn: "Emerging Enterprises Track",
      nameAr: "مسار المشاريع الناشئة",
      targetEn: "Promising micro enterprises",
      targetAr: "المنشآت متناهية الصغر الواعدة",
      limit: "Up to SAR 300,000",
      limitAr: "حتى 300,000 ريال",
      gracePeriod: "Up to 12 Months",
      gracePeriodAr: "فترة سماح حتى 12 شهراً",
      tenor: "Up to 5 Years",
      tenorAr: "مدة سداد حتى 5 سنوات",
      idealFor: "Graduates and technical professionals",
      idealForAr: "الخريجين والكوادر المهنية المتخصصة",
    },
    {
      nameEn: "Excellence Track (مسار التميز)",
      nameAr: "مسار التميز التمويلي",
      targetEn: "Quality & innovative scale-ups",
      targetAr: "المشاريع النوعية والابتكارية",
      limit: "Up to SAR 4,000,000",
      limitAr: "حتى 4,000,000 ريال",
      gracePeriod: "Up to 24 Months",
      gracePeriodAr: "فترة سماح حتى 24 شهراً",
      tenor: "Up to 8 Years",
      tenorAr: "مدة سداد حتى 8 سنوات",
      idealFor: "Patented tech & high-value sectors",
      idealForAr: "التقنيات الحاصلة على براءات والقطاعات المتقدمة",
    },
  ];

  return (
    <section className="recommendation-section" id="recommendations">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={14} /> {t.recommendation.tag}
          </div>
          <h2 className="section-title">{t.recommendation.title}</h2>
          <p className="section-subtitle">{t.recommendation.subtitle}</p>
        </div>

        {/* Product Comparison Showcase */}
        <div className="rec-cards-wrapper">
          {/* Left Card: Current Selection */}
          <div className={`rec-product-card card ${selectedProduct === 'current' ? 'is-active-choice' : 'is-muted-choice'}`}>
            <div className="rec-card-top-tag">
              <span className="text-muted font-bold text-xs">{t.recommendation.currentCard.label}</span>
            </div>
            <div className="rec-product-body">
              <h3 className="rec-name">{t.recommendation.currentCard.name}</h3>
              <div className="rec-limit-pill">{t.recommendation.currentCard.limit}</div>
              <p className="rec-purpose-text">{t.recommendation.currentCard.purpose}</p>

              <div className="rec-product-meta">
                <div className="meta-row">
                  <span>{isArabic ? "المرحلة المستهدفة:" : "Target Stage:"}</span>
                  <strong>{isArabic ? "مرحلة التأسيس الأولي" : "Early Startup / Launch"}</strong>
                </div>
                <div className="meta-row">
                  <span>{isArabic ? "سقف التمويل الأقصى:" : "Max Capital Limit:"}</span>
                  <strong>SAR 300,000</strong>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-secondary w-full"
              onClick={() => setSelectedProduct('current')}
            >
              <span>{isArabic ? "الإبقاء على هذا المنتج" : "Keep This Selection"}</span>
            </button>
          </div>

          {/* Center Connector / Match Indicator */}
          <div className="rec-connector-column">
            <div className="match-pill-badge animate-pulse-glow">
              <Sparkles size={14} />
              <span>{t.recommendation.recommendedCard.matchScore}</span>
            </div>
            <div className="rec-direction-arrow">
              <ArrowIcon size={28} className="text-primary" />
            </div>
            <span className="text-xs text-muted font-semibold text-center">
              {isArabic ? "الذكاء الاصطناعي يقترح الترقية" : "AI Optimal Match Upgrade"}
            </span>
          </div>

          {/* Right Card: Recommended Product (Ufuq) */}
          <div className={`rec-product-card card is-recommended-product ${selectedProduct === 'recommended' ? 'is-active-choice' : ''}`}>
            <div className="rec-card-top-tag">
              <span className="badge badge-sdb font-bold text-xs">
                <Sparkles size={13} /> {t.recommendation.recommendedCard.label}
              </span>
            </div>
            <div className="rec-product-body">
              <div className="rec-title-row">
                <h3 className="rec-name text-primary-800">{t.recommendation.recommendedCard.name}</h3>
                <span className="badge badge-success text-xs">
                  <Check size={12} /> {isArabic ? "أعلى ملاءمة" : "Top Match"}
                </span>
              </div>
              <div className="rec-limit-pill highlight-pill">{t.recommendation.recommendedCard.limit}</div>
              <p className="rec-purpose-text">{t.recommendation.recommendedCard.purpose}</p>

              <div className="rec-product-meta">
                <div className="meta-row">
                  <span>{isArabic ? "المرحلة المستهدفة:" : "Target Stage:"}</span>
                  <strong className="text-primary-700">{isArabic ? "منشآت قائمة ذات إيرادات" : "Operating Scale-up"}</strong>
                </div>
                <div className="meta-row">
                  <span>{isArabic ? "سقف التمويل الأقصى:" : "Max Capital Limit:"}</span>
                  <strong className="text-primary-700">SAR 10,000,000</strong>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-primary w-full"
              onClick={handleSwitch}
            >
              <RefreshCw size={16} />
              <span>{t.recommendation.btnSwitch}</span>
            </button>
          </div>
        </div>

        {/* Reason Box */}
        <div className="rec-reason-box glass-panel card">
          <div className="reason-header">
            <div className="reason-icon-circle">
              <Info size={20} className="text-primary" />
            </div>
            <h4 className="reason-title">{t.recommendation.reasonTitle}</h4>
          </div>
          <p className="reason-text">{t.recommendation.reasonText}</p>

          <div className="reason-actions-row">
            <button className="btn btn-secondary btn-sm" onClick={() => setShowCompareModal(true)}>
              <span>{t.recommendation.btnCompare}</span>
              <ArrowIcon size={14} />
            </button>
            <button className="btn btn-primary btn-sm" onClick={onStartApplication}>
              <span>{isArabic ? "اختبار المطابقة لملفي" : "Test Match on My Profile"}</span>
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="sdb-disclaimer-row">
          <ShieldAlert size={16} className="text-muted flex-shrink-0" />
          <p className="disclaimer-text">{t.recommendation.disclaimer}</p>
        </div>

        {/* Success Toast */}
        {switchedToast && (
          <div className="toast-notification animate-fade-in">
            <Check size={18} />
            <span>{isArabic ? "تم التحويل إلى تمويل أفق بنجاح!" : "Switched to Ufuq Financing successfully!"}</span>
          </div>
        )}

        {/* All Products Comparison Modal */}
        {showCompareModal && (
          <div className="modal-overlay" onClick={() => setShowCompareModal(false)}>
            <div className="modal-content compare-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header-row">
                <div className="modal-title-group">
                  <h3 className="modal-title">{isArabic ? "مقارنة منتجات بنك التنمية الاجتماعية" : "SDB Financing Products Comparison"}</h3>
                  <p className="modal-subtitle">{isArabic ? "استعرض الفروقات بين المسارات التمويلية لتحديد الخيار الأنسب" : "Compare key parameters across official financing tracks"}</p>
                </div>
                <button className="modal-close-btn" onClick={() => setShowCompareModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <div className="compare-table-wrapper">
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>{isArabic ? "المنتج التمويلي" : "Financing Track"}</th>
                      <th>{isArabic ? "المنشأة المستهدفة" : "Target Business"}</th>
                      <th>{isArabic ? "سقف التمويل" : "Max Amount"}</th>
                      <th>{isArabic ? "فترة السماح" : "Grace Period"}</th>
                      <th>{isArabic ? "مدة السداد" : "Repayment"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sdbProductsComparison.map((prod, pIdx) => (
                      <tr key={pIdx} className={prod.recommended ? "highlight-row" : ""}>
                        <td>
                          <strong>{isArabic ? prod.nameAr : prod.nameEn}</strong>
                          {prod.recommended && (
                            <span className="badge badge-sdb ml-2 text-xs">
                              {isArabic ? "موصى به" : "Recommended"}
                            </span>
                          )}
                        </td>
                        <td>{isArabic ? prod.targetAr : prod.targetEn}</td>
                        <td><strong className="text-primary">{isArabic ? prod.limitAr : prod.limit}</strong></td>
                        <td>{isArabic ? prod.gracePeriodAr : prod.gracePeriod}</td>
                        <td>{isArabic ? prod.tenorAr : prod.tenor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="modal-footer-row">
                <button className="btn btn-secondary" onClick={() => setShowCompareModal(false)}>
                  {isArabic ? "إغلاق" : "Close"}
                </button>
                <button className="btn btn-primary" onClick={() => { setShowCompareModal(false); onStartApplication(); }}>
                  <span>{isArabic ? "البدء بالمنتج الموصى به" : "Apply with Recommended Product"}</span>
                  <ArrowIcon size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
