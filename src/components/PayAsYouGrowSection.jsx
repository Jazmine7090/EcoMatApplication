import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Percent, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Sliders,
  DollarSign,
  Info
} from 'lucide-react';

export function PayAsYouGrowSection() {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Interactive slider state
  const [simulatedRevenue, setSimulatedRevenue] = useState(40000);

  // Dynamic calculation for Pay As You Grow
  // < 25k -> 5%
  // 25k to 50k -> 8%
  // 50k to 80k -> 12%
  // > 80k -> 15%
  const calculateRate = (rev) => {
    if (rev <= 25000) return 5;
    if (rev <= 55000) return 8;
    if (rev <= 90000) return 12;
    return 15;
  };

  const currentRate = calculateRate(simulatedRevenue);
  const monthlyContribution = Math.round((simulatedRevenue * currentRate) / 100);

  return (
    <section className="pay-as-you-grow-section" id="pay-as-you-grow">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="hackathon-badge mb-3">
            <Sparkles size={14} /> {t.payAsYouGrow.tag}
          </div>
          <h2 className="section-title">{t.payAsYouGrow.title}</h2>
          <p className="section-subtitle">{t.payAsYouGrow.subtitle}</p>
        </div>

        {/* Concept Core Cards */}
        <div className="concept-rules-grid">
          <div className="concept-rule-card card">
            <div className="rule-badge rule-low">
              <span>{isArabic ? "في فترات الركود والبدايات" : "During Off-Peak / Growth Setup"}</span>
            </div>
            <h4 className="rule-title">{t.payAsYouGrow.ruleLow}</h4>
            <p className="rule-desc">
              {isArabic 
                ? "إذا انخفض الإيراد الشهري بسبب موسمية النشاط، تنخفض نسبة الاقتطاع تلقائياً لحماية السيولة التشغيلية والرواتب."
                : "When monthly turnover dips, repayment drops to ease cash pressure and safeguard payroll."}
            </p>
          </div>

          <div className="concept-rule-card card">
            <div className="rule-badge rule-high">
              <span>{isArabic ? "في مواسم الذروة والازدهار" : "During Peak Revenue / High Velocity"}</span>
            </div>
            <h4 className="rule-title">{t.payAsYouGrow.ruleHigh}</h4>
            <p className="rule-desc">
              {isArabic 
                ? "عند تحقيق إيرادات عالية، ترتفع نسبة المساهمة لتسريع سداد أصل التمويل دون فرض أعباء إضافية على المنشأة."
                : "When revenue surges, repayment scales up proportionally to pay down facility principal faster."}
            </p>
          </div>
        </div>

        {/* Live Interactive Revenue Simulator Box */}
        <div className="pay-simulator-card card glass-panel">
          <div className="simulator-header">
            <div className="sim-title-wrap">
              <Sliders size={20} className="text-primary" />
              <h3 className="sim-title">{t.payAsYouGrow.interactiveLabel}</h3>
            </div>
            <span className="badge badge-sdb">
              {isArabic ? "محاكاة تفاعلية حية" : "Live Interactive Simulation"}
            </span>
          </div>

          {/* Slider Row */}
          <div className="slider-control-group">
            <div className="slider-label-row">
              <label htmlFor="revSlider" className="slider-label">{t.payAsYouGrow.sliderLabel}</label>
              <div className="slider-value-display">
                SAR {simulatedRevenue.toLocaleString()}
              </div>
            </div>

            <input 
              id="revSlider"
              type="range" 
              min="10000" 
              max="120000" 
              step="5000"
              value={simulatedRevenue}
              onChange={(e) => setSimulatedRevenue(Number(e.target.value))}
              className="custom-range-slider"
            />

            <div className="slider-ticks-row">
              <span>SAR 10,000</span>
              <span>SAR 40,000</span>
              <span>SAR 80,000</span>
              <span>SAR 120,000</span>
            </div>
          </div>

          {/* Dynamic Calculation Output Tiles */}
          <div className="sim-results-grid">
            <div className="sim-result-tile">
              <span className="tile-label">{t.payAsYouGrow.currentRevLabel}</span>
              <h4 className="tile-val">SAR {simulatedRevenue.toLocaleString()}</h4>
              <span className="tile-sub">{isArabic ? "إيراد شهري محقق" : "Monthly Business Revenue"}</span>
            </div>

            <div className="sim-result-tile highlight-tile">
              <span className="tile-label">{t.payAsYouGrow.calculatedRateLabel}</span>
              <h4 className="tile-val text-primary-600">{currentRate}%</h4>
              <span className="tile-sub">{isArabic ? "نسبة استقطاع مرنة" : "Adaptive Repayment Share"}</span>
            </div>

            <div className="sim-result-tile gold-tile">
              <span className="tile-label">{t.payAsYouGrow.calculatedAmountLabel}</span>
              <h4 className="tile-val text-gold-600">SAR {monthlyContribution.toLocaleString()}</h4>
              <span className="tile-sub">{isArabic ? "قسط السداد المحسوب للشهر" : "Calculated Monthly Repayment"}</span>
            </div>
          </div>

          {/* Benchmark Table / Reference Points */}
          <div className="sim-benchmarks-row">
            <h5 className="benchmarks-title">{isArabic ? "أمثلة توضيحية لنسب السداد المقترحة:" : "Illustrative Revenue Tiers:"}</h5>
            <div className="benchmarks-cards-grid">
              {t.payAsYouGrow.benchmarks.map((bm, bIdx) => (
                <div 
                  key={bIdx} 
                  className={`benchmark-mini-card ${simulatedRevenue.toLocaleString().includes(bm.rev.replace(/[^0-9]/g, '')) ? 'active-benchmark' : ''}`}
                >
                  <div className="bm-rev">{bm.rev}</div>
                  <div className="bm-rate-tag">{bm.rate} ({bm.monthly})</div>
                  <p className="bm-note">{bm.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Hackathon Disclaimer */}
          <div className="concept-disclaimer-box">
            <Info size={16} className="text-warning flex-shrink-0" />
            <p className="disclaimer-text">
              <strong>{isArabic ? "تنبيه هام:" : "Important Note:"}</strong> {t.payAsYouGrow.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
