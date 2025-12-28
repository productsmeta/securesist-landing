"use client";

import { memo } from "react";
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Package,
  Activity,
  Headphones
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

interface WhyChooseData {
  whyChooseSection_Title: string;
  whyChooseSection_Subtitle: string;
  whyChooseSection_Description: string;
  whyChooseBenefit_Card1_Title: string;
  whyChooseBenefit_Card1_Description: string;
  whyChooseBenefit_Card1_CtaText: string;
  whyChooseBenefit_Card1_Icon: string;
  whyChooseBenefit_Card2_Title: string;
  whyChooseBenefit_Card2_Description: string;
  whyChooseBenefit_Card2_CtaText: string;
  whyChooseBenefit_Card2_Icon: string;
  whyChooseBenefit_Card3_Title: string;
  whyChooseBenefit_Card3_Description: string;
  whyChooseBenefit_Card3_CtaText: string;
  whyChooseBenefit_Card3_Icon: string;
  whyChooseBenefit_Card4_Title: string;
  whyChooseBenefit_Card4_Description: string;
  whyChooseBenefit_Card4_CtaText: string;
  whyChooseBenefit_Card4_Icon: string;
  statistic_Card1_Value: string;
  statistic_Card1_Label: string;
  statistic_Card2_Value: string;
  statistic_Card2_Label: string;
  statistic_Card3_Value: string;
  statistic_Card3_Label: string;
}

interface WhyChooseProps {
  data: WhyChooseData;
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'fulfillment-icon': Package,
  'tracking-icon': Activity,
  'scalable-icon': Zap,
  'support-icon': Headphones,
  'users': Users,
  'target': Target,
  'barchart': BarChart3,
};

export const WhyChoose = memo(({ data }: WhyChooseProps) => {
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Users;
  };
  
  const features = [
    {
      icon: getIcon(data.whyChooseBenefit_Card1_Icon),
      title: data.whyChooseBenefit_Card1_Title,
      benefit: data.whyChooseBenefit_Card1_Description,
      color: "blue",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      gradient: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/10"
    },
    {
      icon: getIcon(data.whyChooseBenefit_Card2_Icon),
      title: data.whyChooseBenefit_Card2_Title,
      benefit: data.whyChooseBenefit_Card2_Description,
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/10"
    },
    {
      icon: getIcon(data.whyChooseBenefit_Card3_Icon),
      title: data.whyChooseBenefit_Card3_Title,
      benefit: data.whyChooseBenefit_Card3_Description,
      color: "green",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
      gradient: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/10"
    },
    {
      icon: getIcon(data.whyChooseBenefit_Card4_Icon),
      title: data.whyChooseBenefit_Card4_Title,
      benefit: data.whyChooseBenefit_Card4_Description,
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
          badgeText={data.whyChooseSection_Subtitle}
          title={data.whyChooseSection_Title}
          titleHighlight=""
          description={data.whyChooseSection_Subtitle}
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
                    <span className="text-xs font-semibold">Explore</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Stats - Simplified and Clean */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-blue-600 mb-2">{data.statistic_Card1_Value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{data.statistic_Card1_Label}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-purple-600 mb-2">{data.statistic_Card2_Value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{data.statistic_Card2_Label}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="text-4xl font-extrabold text-green-600 mb-2">{data.statistic_Card3_Value}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{data.statistic_Card3_Label}</div>
          </div>
        </div>
      </div>
    </section>
  );
});

WhyChoose.displayName = 'WhyChoose';