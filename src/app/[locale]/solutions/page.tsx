"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { ArrowRight, Shield, Users, CheckCircle2, Zap, BarChart3, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { apiFetch, LandingPageUrl } from "@/helpers/apiConfig";

// API Response Types
interface SolutionsPageData {
  _id: string;
  solutionSection_Title: string;
  solutionSection_Description: string;
  solutionSection_Benefits: string;
  solutionSection_Cta_Text: string;
  solutionSection_Cta_Link: string;
  solutionSection_Cta_Type: string;
}

interface SolutionsPageResponse {
  status: string;
  data: SolutionsPageData;
}

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

  // Parse benefits string into array
  const benefits = solutionsData.solutionSection_Benefits
    ? solutionsData.solutionSection_Benefits.split(',').map(b => b.trim()).filter(Boolean)
    : [];
  // Create solution object from API data
  const solution = {
    id: 1,
    title: solutionsData.solutionSection_Title,
    subtitle: "",
    description: solutionsData.solutionSection_Description,
    features: benefits,
    image: "/contact_us.jpg",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    icon: Shield,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100"
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badgeText="Our Solutions"
            title={solutionsData.solutionSection_Title}
            titleHighlight=""
            description={solutionsData.solutionSection_Description}
          />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          {(() => {
            const Icon = solution.icon;
            
            return (
              <div
                key={solution.id}
                className="mb-24 md:mb-32 last:mb-0"
              >
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                >
                  {/* Image Section */}
                  <div className="relative group">
                    <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.bgGradient} opacity-20 z-10`} />
                      
                      {/* Image */}
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      
                      {/* Decorative Elements */}
                      <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br ${solution.gradient} opacity-20 blur-2xl`} />
                      <div className={`absolute bottom-4 left-4 w-32 h-32 rounded-full bg-gradient-to-br ${solution.gradient} opacity-10 blur-3xl`} />
                    </div>
                    
                    {/* Floating Icon Badge */}
                    <div className={`absolute -top-6 -left-6 w-16 h-16 ${solution.iconBg} rounded-2xl flex items-center justify-center shadow-xl z-20 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${solution.iconColor}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border border-slate-200 font-semibold shadow-sm">
                      <Zap className={`h-4 w-4 ${solution.iconColor}`} />
                      <span className={solution.iconColor}>Solution {solution.id}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
                      {solution.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl font-semibold text-slate-600">
                      {solution.subtitle}
                    </p>

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
                          <div className={`flex-shrink-0 w-6 h-6 ${solution.iconBg} rounded-full flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform`}>
                            <CheckCircle2 className={`h-4 w-4 ${solution.iconColor}`} />
                          </div>
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <Button
                        asChild
                        className={`group relative overflow-hidden bg-gradient-to-r ${solution.gradient} text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      >
                        <Link href={solutionsData.solutionSection_Cta_Link || "/contact"} className="flex items-center gap-2">
                          {solutionsData.solutionSection_Cta_Text || "Learn More"}
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-blue-600 mb-2">98%</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                Training Completion Rate
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-purple-600 mb-2">75%</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                Incident Reduction
              </div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-extrabold text-green-600 mb-2">500+</div>
              <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                Companies Protected
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
