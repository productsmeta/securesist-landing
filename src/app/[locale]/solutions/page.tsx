"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Target, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

const SOLUTION_IMAGES = [
  "/solutions/Cyber%20Security%20Awareness.webp",
  "/solutions/Employee%20Attack%20Simulation.webp",
  "/solutions/Analyze%20Behavior.webp",
] as const;

const SOLUTION_KEYS = ["awareness", "simulation", "analyze"] as const;
const SOLUTION_ICONS = [Shield, Target, BarChart3];

const STYLES = [
  { accent: "blue", gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
  { accent: "purple", gradient: "from-purple-500 to-pink-500", bg: "bg-purple-50", text: "text-purple-600", iconBg: "bg-purple-100" },
  { accent: "emerald", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-100" },
];

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            badgeText={t("badge")}
            title={t("title")}
            titleHighlight={t("titleHighlight")}
            description={t("description")}
          />
        </div>
      </section>

      {/* Solutions - alternating layout */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          {SOLUTION_KEYS.map((key, index) => {
            const isEven = index % 2 === 0;
            const style = STYLES[index] ?? STYLES[0];
            const Icon = SOLUTION_ICONS[index] ?? Shield;
            const bulletsKey = key === "awareness" ? "delivers" : "organizationsCan";

            return (
              <article
                key={key}
                className="mb-20 md:mb-28 last:mb-0 scroll-mt-24"
                id={key}
              >
                <div
                  className={`grid gap-10 lg:grid-cols-2 lg:gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg ${!isEven ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={SOLUTION_IMAGES[index]}
                        alt={t(`${key}.title`)}
                        fill
                        
                       
                        priority={index === 0}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${style.bg} opacity-20 mix-blend-overlay`} />
                    </div>
                    <div className={`absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} ${style.text} shadow-md`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-5 ${!isEven ? "lg:order-1" : ""}`}>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${style.iconBg} ${style.text}`}>
                      {index + 1}. {t(key === "awareness" ? "badgeAwareness" : key === "simulation" ? "badgeSimulation" : "badgeAnalyze")}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
                      {t(`${key}.title`)}
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                      {t(`${key}.intro`)}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {t(`${key}.description`)}
                    </p>
                    <p className="text-sm font-semibold text-slate-800">
                      {t(`${key}.${bulletsKey}`)}
                    </p>
                    <ul className="space-y-2">
                      {[1, 2, 3, 4].map((i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${style.text}`} />
                          <span className="text-slate-700">{t(`${key}.bullet${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-slate-600 leading-relaxed pt-2">
                      {t(`${key}.closing`)}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/50 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-600">
            {t("cta.description")}
          </p>
          <Button
            asChild
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-base font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:shadow-lg"
          >
            <Link href="/en/contact">
              {t("cta.contactSales")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
