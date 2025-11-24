"use client";

import { memo } from "react";
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useTranslations } from "next-intl";

export const WhyChoose = memo(() => {
  const t = useTranslations('whyChoose');
  
  const features = [
    {
      icon: Users,
      title: t('highEngagement.title'),
      benefit: t('highEngagement.benefit'),
      color: "blue",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/10"
    },
    {
      icon: Target,
      title: t('roleBased.title'),
      benefit: t('roleBased.benefit'),
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/10"
    },
    {
      icon: Zap,
      title: t('automation.title'),
      benefit: t('automation.benefit'),
      color: "green",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/10"
    },
    {
      icon: BarChart3,
      title: t('reporting.title'),
      benefit: t('reporting.benefit'),
      color: "orange",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-600",
      gradient: "from-orange-500 to-amber-500",
      shadow: "shadow-orange-500/10"
    } 
  ];

  return (
    // 1. Light Background with Subtle Texture
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Background Grid Pattern (Very subtle light mode grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70" />
      
      {/* Background decorations (Soft color spots) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        
          <SectionHeader
          badgeText={t('badge')}
          title={t('title')}
          titleHighlight={t('titleHighlight')}
          description={t('description')}
        />
        
        {/* Features Grid (4 columns for small cards) */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              // 2. Small Card Styling (Elevated, Clean Hover)
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 text-center  hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:${feature.shadow} border border-gray-200`}
              >
                {/* Icon Container (Smaller, colorful circle) */}
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${feature.bgColor} ${feature.textColor} transition-all duration-500  group-hover:scale-110`}>
                  <Icon className="h-6 w-6" /> 
                </div>
                
                {/* Title (Smaller, bold) */}
                <h3 className="font-bold text-lg text-slate-800 mb-2">
                  {feature.title}
                </h3>
                
                {/* Benefit (Smallest text) */}
                <p className="text-slate-500 text-sm">
                  {feature.benefit}
                </p>
                
                {/* Hover Arrow (Minimalist Indicator) */}
                <div className={`mt-3 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${feature.textColor}`}>
                    <span className="text-xs font-semibold">{t('explore')}</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Stats - Simplified and Clean */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">98%</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{t('stats.completionRate')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-purple-600 mb-2">75%</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{t('stats.incidentReduction')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-green-600 mb-2">5 Min</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{t('stats.avgDuration')}</div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChoose.displayName = 'WhyChoose';