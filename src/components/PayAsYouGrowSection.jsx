import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Percent, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  Sliders, 
  DollarSign, 
  Info,
  Layers,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

export function PayAsYouGrowSection() {
  const { t, isArabic } = useLanguage();
  const ArrowIcon = isArabic ? ArrowLeft : ArrowRight;

  // Interactive slider state (default SAR 35,000)
  const [simulatedRevenue, setSimulatedRevenue] = useState(35000);

  // Dynamic calculation for Pay As You Grow
  // < 25k -> 5%
  // 25k to 55k -> 8%
  // 55k to 85k -> 12%
  // > 85k -> 15%
  const calculateRate = (rev) => {
    if (rev <= 25000) return 5;
    if (rev <= 55000) return 8;
    if (rev <= 85000) return 12;
    return 15;
  };

  const currentRate = calculateRate(simulatedRevenue);
  const monthlyContribution = Math.round((simulatedRevenue * currentRate) / 100);

  const tiers = [
    {
      id: "low",
      min: 0,
      max: 25000,
      revLabel: "SAR 20,000",
      revTitleAr: "فترة التأسيس والركود (20,000 ريال)",
      revTitleEn: "Off-Peak / Startup (SAR 20,000)",
      rate: "5%",
      monthly: "SAR 1,000 / mo",
      monthlyAr: "1,000 ريال / شهر",
      noteAr: "اقتطاع مخفف لحماية السيولة التشغيلية والرواتب في فترات انخفاض المبيعات.",
      noteEn: "Light repayment burden to protect operational liquidity during slow months.",
      isActive: simulatedRevenue <= 25000,
    },
    {
      id: "mid",
      min: 25001,
      max: 55000,
      revLabel: "SAR 40,000",
      revTitleAr: "التشغيل المستقر والمتوازن (40,000 ريال)",
      revTitleEn: "Balanced Steady-State (SAR 40,000)",
      rate: "8%",
      monthly: "SAR 3,200 / mo",
      monthlyAr: "3,200 ريال / شهر",
      noteAr: "قسط سداد متوازن يتوافق مع وتيرة المبيعات الاعتيادية دون ضغط.",
      noteEn: "Balanced repayment structure aligned with predictable standard cash flow.",
      isActive: simulatedRevenue > 25000 && simulatedRevenue <= 55000,
    },
    {
      id: "high",
      min: 55001,
      max: 120000,
      revLabel: "SAR 70,000+",
      revTitleAr: "مواسم الذروة والنمو السريع (70,000+ ريال)",
      revTitleEn: "Peak Growth Velocity (SAR 70,000+)",
      rate: "12% – 15%",
      monthly: "SAR 8,400+ / mo",
      monthlyAr: "8,400+ ريال / شهر",
      noteAr: "تسريع سداد أصل التمويل في مواسم الأرباح العالية لتقليص مدة الالتزام.",
      noteEn: "Accelerated principal payoff during profitable peak seasons to clear financing faster.",
      isActive: simulatedRevenue > 55000,
    },
  ];

  return (
    <section className="pay-as-you-grow-section" id="pay-as-you-grow">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <div className="section-tag">
            <Sparkles size={13} />
            <span>{isArabic ? "مفهوم التمويل المرن المتكيف" : "Adaptive Repayment Concept"}</span>
          </div>
          <h2 className="section-title">
            {isArabic ? "نموذج السداد مع النمو (Pay as You Grow)" : "Pay as You Grow Simulator"}
          </h2>
          <p className="section-subtitle">
            {isArabic
              ? "نموذج سداد ذكي مقترح يتكيف تلقائياً مع التدفقات النقدية والمبيعات الشهرية للمنشأة لحمايتها من التعثر."
              : "An intelligent repayment structure proposal that dynamically flexes with your monthly business revenue."}
          </p>
        </div>

        {/* Concept Cards (2 side-by-side) */}
        <div className="concept-rules-grid">
          <div className="concept-rule-card card">
            <div className="rule-badge rule-low">
              <span>{isArabic ? "في فترات الركود والبدايات" : "During Off-Peak / Growth Setup"}</span>
            </div>
            <h4 className="rule-title">
              {isArabic ? "انخفاض القسط تلقائياً عند انخفاض المبيعات" : "Lower Turnover = Lower Monthly Repayment"}
            </h4>
            <p className="rule-desc">
              {isArabic 
                ? "إذا انخفض الإيراد الشهري بسبب موسمية النشاط، تنخفض نسبة الاقتطاع تلقائياً لحماية السيولة التشغيلية والرواتب."
                : "When monthly turnover dips, repayment drops automatically to ease cash pressure and safeguard payroll."}
            </p>
          </div>

          <div className="concept-rule-card card">
            <div className="rule-badge rule-high">
              <span>{isArabic ? "في مواسم الذروة والازدهار" : "During Peak Revenue / High Velocity"}</span>
            </div>
            <h4 className="rule-title">
              {isArabic ? "تسريع سداد أصل التمويل عند زيادة الإيرادات" : "Higher Turnover = Accelerated Facility Payoff"}
            </h4>
            <p className="rule-desc">
              {isArabic 
                ? "عند تحقيق إيرادات مرتفعة، ترتفع نسبة المساهمة لتسريع سداد أصل التمويل دون فرض أعباء إضافية على المنشأة."
                : "When revenue surges, repayment scales up proportionally to pay down facility principal faster without penalty."}
            </p>
          </div>
        </div>

        {/* Live Interactive Revenue Simulator Main Card */}
        <div className="pay-simulator-card card mt-6">
          <div className="simulator-header">
            <div className="sim-title-wrap">
              <div className="sim-icon-box">
                <Sliders size={20} className="text-sdb" />
              </div>
              <div>
                <h3 className="sim-title">
                  {isArabic ? "محاكي الإيرادات والسداد التفاعلي" : "Interactive Revenue & Repayment Simulator"}
                </h3>
                <span className="sim-subtitle-text">
                  {isArabic ? "اسحب المؤشر لاختبار نسبة السداد في مختلف سيناريوهات المبيعات" : "Drag slider to test dynamic rate calculations"}
                </span>
              </div>
            </div>
            <span className="badge badge-sdb">
              <Sparkles size={12} /> {isArabic ? "محاكاة ذكية حية" : "Live Simulation"}
            </span>
          </div>

          {/* Interactive Range Slider Box */}
          <div className="slider-control-group">
            <div className="slider-label-row">
              <label htmlFor="revSlider" className="slider-label">
                <TrendingUp size={16} className="text-sdb" />
                <span>{isArabic ? "حدد الإيراد الشهري التجريبي للمنشأة:" : "Simulated Monthly Business Revenue:"}</span>
              </label>
              <div className="slider-value-display">
                SAR {simulatedRevenue.toLocaleString()}
                <small>{isArabic ? " / شهرياً" : " / mo"}</small>
              </div>
            </div>

            <div className="slider-input-wrapper">
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
            </div>

            {/* Clearly Spaced Tick Markers */}
            <div className="slider-ticks-row">
              <span className="tick-item">
                <span className="tick-dot"></span>
                <span className="tick-text">SAR 10,000</span>
              </span>
              <span className="tick-item">
                <span className="tick-dot"></span>
                <span className="tick-text">SAR 40,000</span>
              </span>
              <span className="tick-item">
                <span className="tick-dot"></span>
                <span className="tick-text">SAR 80,000</span>
              </span>
              <span className="tick-item">
                <span className="tick-dot"></span>
                <span className="tick-text">SAR 120,000</span>
              </span>
            </div>
          </div>

          {/* 3 Calculated Dynamic Output Tiles */}
          <div className="sim-results-grid">
            <div className="sim-result-tile tile-revenue">
              <span className="tile-label">
                {isArabic ? "الإيراد الشهري المحاكى" : "Simulated Monthly Revenue"}
              </span>
              <h4 className="tile-val">SAR {simulatedRevenue.toLocaleString()}</h4>
              <span className="tile-sub">
                {isArabic ? "مبيعات المنشأة المتوقعة" : "Monthly Business Turnover"}
              </span>
            </div>

            <div className="sim-result-tile tile-rate highlight-tile">
              <span className="tile-label">
                {isArabic ? "نسبة الاستقطاع المتكيفة" : "Dynamic Repayment Share"}
              </span>
              <h4 className="tile-val text-sdb">{currentRate}%</h4>
              <span className="tile-sub">
                {isArabic ? "حصة متناسبة مع التدفق" : "Adaptive Revenue Percentage"}
              </span>
            </div>

            <div className="sim-result-tile tile-payment">
              <span className="tile-label">
                {isArabic ? "مبلغ القسط الشهري المحسوب" : "Calculated Monthly Payment"}
              </span>
              <h4 className="tile-val text-navy">SAR {monthlyContribution.toLocaleString()}</h4>
              <span className="tile-sub">
                {isArabic ? "المساهمة الشهرية لسداد التمويل" : "Proportional Facility Repayment"}
              </span>
            </div>
          </div>

          {/* Illustrative Revenue Tiers (3 Cards) */}
          <div className="sim-benchmarks-row">
            <h5 className="benchmarks-title">
              <Layers size={16} className="text-sdb" />
              <span>{isArabic ? "شرائح السداد التوضيحية المقترحة للمنظومة:" : "Illustrative Revenue Tiers & Benchmarks:"}</span>
            </h5>

            <div className="benchmarks-cards-grid">
              {tiers.map((tier) => (
                <div 
                  key={tier.id} 
                  className={`benchmark-mini-card ${tier.isActive ? 'active-benchmark' : ''}`}
                >
                  <div className="bm-top-row">
                    <span className="bm-rev-badge">{tier.revLabel}</span>
                    <span className={`bm-rate-pill ${tier.isActive ? 'rate-pill-active' : ''}`}>
                      {isArabic ? tier.monthlyAr : tier.monthly} ({tier.rate})
                    </span>
                  </div>

                  <h6 className="bm-tier-title">
                    {isArabic ? tier.revTitleAr : tier.revTitleEn}
                  </h6>

                  <p className="bm-note">
                    {isArabic ? tier.noteAr : tier.noteEn}
                  </p>

                  {tier.isActive && (
                    <div className="active-tier-indicator">
                      <Sparkles size={12} />
                      <span>{isArabic ? "الشريحة الحالية النشطة" : "Active Selection"}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Concept Notice Box */}
          <div className="concept-disclaimer-box">
            <Info size={18} className="text-warning flex-shrink-0" />
            <p className="disclaimer-text">
              <strong>{isArabic ? "تنبيه هاكاثون:" : "Hackathon Notice:"}</strong>{" "}
              {isArabic
                ? "هذا المحاكي يوضح مفهوم السداد المرن المتكيف (Pay as You Grow) كفكرة تطويرية مقترحة للهاكاثون، ولا يمثل شروط تمويل تعاقدية رسمية لبنك التنمية الاجتماعية."
                : "This simulator illustrates the proposed Pay as You Grow adaptive repayment concept for the SDB Hackathon and does not represent official contractual terms of the Social Development Bank."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
