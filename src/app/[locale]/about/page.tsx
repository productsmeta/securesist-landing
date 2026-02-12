"use client";

import { Link } from "../../../i18n/routing";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Shield, 
  AlertTriangle, 
  UserX, 
  Skull, 
  Settings, 
  Calendar 
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRtl = locale === "ar";
  const textAlign = isRtl ? "text-right" : "text-left";

  const securityStages = [
    {
      icon: Shield,
      title: "New Training Campaign",
      description:
        t("stages.newTrainingCampaign") ||
        "Launch and track new awareness campaigns (phishing, password hygiene, data handling) with targeted audiences and timelines. تتم مراقبة النطاقات والأصول المسجلة حديثاً للكشف عن مخاطر الأمان المحتملة قبل أن يتم استغلالها.",
      color: "blue",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: Settings,
      title: "Policy & Compliance",
      description:
        t("stages.policyCompliance") ||
        "Manage policies, attestations, and required controls (ISO 27001, NIST, PCI DSS, NCA, etc.) to stay audit-ready. اكتشف الثغرات الأمنية الناتجة عن سوء تكوين DNS وبيانات الاعتماد المكشوفة والإعدادات الضعيفة عبر أصولك.",
      color: "yellow",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600" 
    },
    {
      icon: UserX,
      title: "Executive / VIP Protection",
      description:
        t("stages.executiveVIPProtection") ||
        "Special training and controls for executives and high-risk roles to reduce BEC, impersonation, and fraud exposure. حدد الحسابات والنطاقات المزيفة التي تنتحل صفة المسؤولين التنفيذيين أو العلامات التجارية أو الجهات الموثوقة لمنع الاحتيال.",
      color: "orange",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      icon: AlertTriangle,
      title: "Phishing & Social Engineering",
      description:
        t("stages.phishingSocialEngineering") ||
        "Run simulations and monitor user behavior to reduce click rates and improve reporting culture across the organization. اكتشف واستجب لخروقات الأمان وتسريب البيانات ومحاولات الوصول غير المصرح به عبر بنيتك التحتية الرقمية.",
      color: "red",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      icon: Skull,
      title: "Risk & Control Gaps",
      description:
        t("stages.riskControlGaps") ||
        "Identify gaps from assessments, control testing, and exceptions—then assign owners, actions, and due dates. تتبع النطاقات الضارة ومواقع التصيد الاحتيالي وتوزيع البرامج الضارة والتهديدات الأخرى التي تستهدف مؤسستك.",
      color: "purple",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: Calendar,
      title: "Audit Evidence & Reporting",
      description:
        t("stages.auditEvidenceReporting") ||
        "Centralize evidence collection, generate compliance reports, and track remediation status for internal and external audits. راقب النطاقات منتهية الصلاحية لمنع الاختطاف وفقدان قيمة العلامة التجارية ونقاط الضعف الأمنية المحتملة.",
      color: "slate",
      bgColor: "bg-slate-100",
      textColor: "text-slate-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <SectionHeader
            badgeText={t("badge") || "Security Stages"}
            title={t("title") || "Comprehensive Threat"}
            titleHighlight={t("titleHighlight") || "Detection & Prevention"}
            description={t("description") || "Monitor and protect your digital assets across every stage of the threat lifecycle"}
          />
        </div>
      </section>

      {/* Security Stages Grid */}
      <section className="container mx-auto px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className={`group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-${stage.color}-200 hover:shadow-lg ${textAlign}`}
                >
                  <div className={`mb-4 flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stage.bgColor} ${stage.textColor} transition-transform group-hover:scale-110`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-slate-600">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-slate-200 bg-slate-50/50 py-16 md:py-20">
        <div className={`container mx-auto px-4 ${textAlign}`}>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-3xl">
              {t("howItWorks.title") || "How It Works"}
            </h2>
            <div className="space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">
                {t("howItWorks.p1") || "Our platform continuously monitors your digital footprint across all six critical security stages, providing real-time alerts and actionable intelligence."}
              </p>
              <p className="leading-relaxed">
                {t("howItWorks.p2") || "From the moment a new asset appears to the critical window of domain expiration, we ensure comprehensive visibility and protection across your entire attack surface."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 py-16 md:py-20">
        <div className={`container mx-auto px-4 text-center `}>
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {t("cta.title") || "Ready to Secure Your Assets?"}
          </h2>
          <p className={`mb-8 ${isRtl ? "mx-auto" : "mx-auto"} max-w-xl text-slate-600`}>
            {t("cta.description") || "Get started with comprehensive threat monitoring and protection today."}
          </p>
          <Button
            asChild
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-base font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <Link href="/contact">
              {t("cta.button") || "Get Started"}
              <ArrowRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;