"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import * as Icons from "lucide-react";
import { ArrowRight, Shield, Users, CheckCircle2, Zap, BarChart3, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { apiFetch, LandingPageUrl } from "@/helpers/apiConfig";

// API Response Types
interface SolutionsPageData {
  _id: string;
  solutionsSection_Title: string;
  solutionsSection_Subtitle: string;
  solutionsSection_Description: string;
  solution_Card1_Number: string;
  solution_Card1_Title: string;
  solution_Card1_Subtitle: string;
  solution_Card1_Description: string;
  solution_Card1_Features: string;
  solution_Card1_Icon: string;
  solution_Card2_Number: string;
  solution_Card2_Title: string;
  solution_Card2_Subtitle: string;
  solution_Card2_Description: string;
  solution_Card2_Features: string;
  solution_Card2_Icon: string;
  solution_Card3_Number: string;
  solution_Card3_Title: string;
  solution_Card3_Subtitle: string;
  solution_Card3_Description: string;
  solution_Card3_Features: string;
  solution_Card3_Icon: string;
  solution_Card4_Number: string;
  solution_Card4_Title: string;
  solution_Card4_Subtitle: string;
  solution_Card4_Description: string;
  solution_Card4_Features: string;
  solution_Card4_Icon: string;
  statistic_Value: string;
  statistic_Label: string;
  statistic_Icon: string;
}

interface SolutionsPageResponse {
  status: string;
  data: SolutionsPageData;
}

// Helper to convert icon name to PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Helper to get icon component dynamically from lucide-react
const getIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  if (!iconName) return Shield;
  
  // Remove "-icon" suffix if present (e.g., "warehouse-icon" -> "warehouse")
  const cleanName = iconName.toLowerCase().trim().replace(/-icon$/, '');
  
  // Convert icon name to PascalCase (e.g., "warehouse" -> "Warehouse", "check-circle" -> "CheckCircle")
  const pascalCaseName = toPascalCase(cleanName);
  
  // Look up the icon in the Icons object
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[pascalCaseName];
  
  // Return the icon if found, otherwise return Shield as fallback
  return IconComponent || Shield;
};

// Gradient and color schemes for solution cards
const cardStyles = [
  { gradient: "from-blue-500 to-cyan-500", bgGradient: "from-blue-50 to-cyan-50", iconColor: "text-blue-600", iconBg: "bg-blue-100" },
  { gradient: "from-purple-500 to-pink-500", bgGradient: "from-purple-50 to-pink-50", iconColor: "text-purple-600", iconBg: "bg-purple-100" },
  { gradient: "from-green-500 to-emerald-500", bgGradient: "from-green-50 to-emerald-50", iconColor: "text-green-600", iconBg: "bg-green-100" },
  { gradient: "from-orange-500 to-red-500", bgGradient: "from-orange-50 to-red-50", iconColor: "text-orange-600", iconBg: "bg-orange-100" },
];

export default function Solutions() {
  const { data: solutionsData, isLoading, error } = useQuery<SolutionsPageData>({
    queryKey: ["solutionsPage"],
    queryFn: async () => {
      const response = await apiFetch<SolutionsPageResponse>(LandingPageUrl.GET_KEY_SOLUTIONS_PAGE);
      if (response.status === "success" && response.data) {
        return response.data;
      }
      throw new Error("Failed to load solutions page data");
    },
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </main>
    );
  }

  if (error || !solutionsData) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-600">Failed to load page content</p>
      </main>
    );
  }

  // Create solution cards array from API data
  const solutionCards = [
    {
      number: solutionsData.solution_Card1_Number,
      title: solutionsData.solution_Card1_Title,
      subtitle: solutionsData.solution_Card1_Subtitle,
      description: solutionsData.solution_Card1_Description,
      features: solutionsData.solution_Card1_Features.split(',').map(f => f.trim()).filter(Boolean),
      icon: solutionsData.solution_Card1_Icon,
      image: "/contact_us.jpg",
      styleIndex: 0,
    },
    {
      number: solutionsData.solution_Card2_Number,
      title: solutionsData.solution_Card2_Title,
      subtitle: solutionsData.solution_Card2_Subtitle,
      description: solutionsData.solution_Card2_Description,
      features: solutionsData.solution_Card2_Features.split(',').map(f => f.trim()).filter(Boolean),
      icon: solutionsData.solution_Card2_Icon,
      image: "/contact_us.jpg",
      styleIndex: 1,
    },
    {
      number: solutionsData.solution_Card3_Number,
      title: solutionsData.solution_Card3_Title,
      subtitle: solutionsData.solution_Card3_Subtitle,
      description: solutionsData.solution_Card3_Description,
      features: solutionsData.solution_Card3_Features.split(',').map(f => f.trim()).filter(Boolean),
      icon: solutionsData.solution_Card3_Icon,
      image: "/contact_us.jpg",
      styleIndex: 2,
    },
    {
      number: solutionsData.solution_Card4_Number,
      title: solutionsData.solution_Card4_Title,
      subtitle: solutionsData.solution_Card4_Subtitle,
      description: solutionsData.solution_Card4_Description,
      features: solutionsData.solution_Card4_Features.split(',').map(f => f.trim()).filter(Boolean),
      icon: solutionsData.solution_Card4_Icon,
      image: "/contact_us.jpg",
      styleIndex: 3,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badgeText="Our Solutions"
            title={solutionsData.solutionsSection_Title}
            titleHighlight=""
            description={solutionsData.solutionsSection_Subtitle || solutionsData.solutionsSection_Description}
          />
         
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          {solutionCards.map((solution, index) => {
            const Icon = getIcon(solution.icon);
            const styles = cardStyles[solution.styleIndex] || cardStyles[0];
            
            return (
              <div
                key={index}
                className="mb-24 md:mb-32 last:mb-0"
              >
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image Section */}
                  <div className="relative group">
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${styles.bgGradient} opacity-20 z-10`} />
                      
                      {/* Image */}
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      
                      {/* Decorative Elements */}
                      <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${styles.gradient} opacity-20 blur-2xl`} />
                      <div className={`absolute bottom-4 left-4 w-32 h-32 rounded-full bg-gradient-to-br ${styles.gradient} opacity-10 blur-3xl`} />
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute -top-6 -left-6 w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center shadow-xl z-20 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${styles.iconColor}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border border-slate-200 font-semibold shadow-sm">
                      <Zap className={`h-4 w-4 ${styles.iconColor}`} />
                      <span className={styles.iconColor}>Solution {solution.number}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                      {solution.title}
                    </h2>

                    {/* Subtitle */}
                    {solution.subtitle && (
                      <p className="text-xl md:text-2xl font-semibold text-slate-600">
                        {solution.subtitle}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {solution.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 group"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 ${styles.iconBg} rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform`}>
                            <CheckCircle2 className={`h-4 w-4 ${styles.iconColor}`} />
                          </div>
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="  mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              {(() => {
                const StatIcon = getIcon(solutionsData.statistic_Icon);
                return <StatIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />;
              })()}
              <div className="text-4xl font-extrabold text-blue-600 mb-2">{solutionsData.statistic_Value}</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                {solutionsData.statistic_Label}
              </div>
            </div>
             
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-blue-100">
              Get started with a free demo and see how SECURESIST can transform your cybersecurity training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white font-semibold px-8 py-6 text-lg backdrop-blur-sm"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
