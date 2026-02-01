"use client";

import { memo } from "react";
import { Users, Target, BarChart3, CheckCircle, Warehouse, Truck, TrendingUp, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "./SectionHeader";

interface KeyBenefitsData {
  keyBenefits_Title: string;
  keyBenefits_Subtitle: string;
  keyBenefits_Description: string;
  keyBenefit_Card1_Title: string;
  keyBenefit_Card1_Description: string;
  keyBenefit_Card1_Features: string;
  keyBenefit_Card1_Icon: string;
  keyBenefit_Card2_Title: string;
  keyBenefit_Card2_Description: string;
  keyBenefit_Card2_Features: string;
  keyBenefit_Card2_Icon: string;
  keyBenefit_Card3_Title: string;
  keyBenefit_Card3_Description: string;
  keyBenefit_Card3_Features: string;
  keyBenefit_Card3_Icon: string;
}

interface KeyBenefitsProps {
  data: KeyBenefitsData;
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'warehouse-icon': Warehouse,
  'shipping-icon': Truck,
  'analytics-icon': TrendingUp,
  'users': Users,
  'target': Target,
  'barchart': BarChart3,
};

export const KeyBenefits = memo(({ data }: KeyBenefitsProps) => {
  const t = useTranslations("home");
  const getIcon = (iconName: string) => {
    return iconMap[iconName] || Users;
  };
  
  const cardTitles = [
    data.keyBenefit_Card1_Title,
    data.keyBenefit_Card2_Title,
    data.keyBenefit_Card3_Title,
  ];
  const cardDescriptions = [
    data.keyBenefit_Card1_Description,
    data.keyBenefit_Card2_Description,
    data.keyBenefit_Card3_Description,
  ];
  const cardFeatures = [
    (data.keyBenefit_Card1_Features ?? "").split(",").map((f) => f.trim()).filter(Boolean),
    (data.keyBenefit_Card2_Features ?? "").split(",").map((f) => f.trim()).filter(Boolean),
    (data.keyBenefit_Card3_Features ?? "").split(",").map((f) => f.trim()).filter(Boolean),
  ];
  const cardIcons = [
    data.keyBenefit_Card1_Icon,
    data.keyBenefit_Card2_Icon,
    data.keyBenefit_Card3_Icon,
  ];

  const benefits = [
    {
      icon: getIcon(cardIcons[0]),
      title: (cardTitles[0] ?? "").trim() || "Key Benefit 1",
      description: (cardDescriptions[0] ?? "").trim() || "Benefit description will appear here once content is available.",
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: cardFeatures[0],
    },
    {
      icon: getIcon(cardIcons[1]),
      title: (cardTitles[1] ?? "").trim() || "Key Benefit 2",
      description: (cardDescriptions[1] ?? "").trim() || "Benefit description will appear here once content is available.",
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: cardFeatures[1],
    },
    {
      icon: getIcon(cardIcons[2]),
      title: (cardTitles[2] ?? "").trim() || "Key Benefit 3",
      description: (cardDescriptions[2] ?? "").trim() || "Benefit description will appear here once content is available.",
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      features: cardFeatures[2],
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/90 overflow-hidden">
 
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeText={(data.keyBenefits_Subtitle ?? "").trim() || "Why Us"}
          title={(data.keyBenefits_Title ?? "").trim() || "Key Benefits"}
          titleHighlight=""
          description={(data.keyBenefits_Description ?? "").trim() || "Discover what makes us the right choice for your security needs."}
        />
        
         
        
        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-md  hover:shadow-md transition-all duration-500 hover:scale-105 border border-slate-200 hover:border-transparent overflow-hidden">
                
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${benefit.gradient} p-[2px]`}>
                    <div className="h-full w-full rounded-md bg-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 space-y-4">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.iconBg} rounded-full  group-hover:scale-110 transition-transform duration-500 `}>
                      <Icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors">
                      {benefit.description}
                    </p>
                    
                    {/* Features list - only show when there are features */}
                    {benefit.features.length > 0 && (
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        {benefit.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                            <CheckCircle className={`h-4 w-4 ${benefit.iconColor} flex-shrink-0`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Read more - visible on card hover */}
                    <Link
                      href="/press-center"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${benefit.iconColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:underline mt-2`}
                    >
                      {t("readMore")}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                   
                 </div>
              </div>
            );
          })}
        </div>
        
     
      </div>
     
    </section>
  );
});

KeyBenefits.displayName = 'KeyBenefits';