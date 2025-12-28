"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Hero } from "@/components/Hero";
import { KeyBenefits } from "@/components/KeyBenefits";
import { WhyChoose } from "@/components/WhyChoose";
import CallToActionSplit from "@/components/CallToAction";
import PartnerLogosSlide from "@/components/PartnerLogosSlide";
import { apiFetch, LandingPageUrl } from "@/helpers/apiConfig";
import { Loader2 } from "lucide-react";

// Landing Page Data Types
interface LandingPageData {
  _id: string;
  hero_Title: string;
  hero_Subtitle: string;
  hero_Description: string;
  trustIndicator1_Title: string;
  trustIndicator1_Description: string;
  trustIndicator1_Icon: string;
  trustIndicator2_Title: string;
  trustIndicator2_Description: string;
  trustIndicator2_Icon: string;
  trustIndicator3_Title: string;
  trustIndicator3_Description: string;
  trustIndicator3_Icon: string;
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
  statistic_Card1_Value: string;
  statistic_Card1_Label: string;
  statistic_Card1_Icon: string;
  statistic_Card2_Value: string;
  statistic_Card2_Label: string;
  statistic_Card2_Icon: string;
  statistic_Card3_Value: string;
  statistic_Card3_Label: string;
  statistic_Card3_Icon: string;
}

interface LandingPageResponse {
  status: string;
  data: LandingPageData;
}

export default function HomePage() {
  const { data: landingData, isLoading, error } = useQuery<LandingPageData>({
    queryKey: ["landingPage"],
    queryFn: async () => {
      const response = await apiFetch<LandingPageResponse>(LandingPageUrl.GET_HOME_PAGE);
      if (response.status === "success" && response.data) {
        return response.data;
      }
      throw new Error("Failed to load landing page data");
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !landingData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-600">Failed to load page content</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero data={landingData} />
      <KeyBenefits data={landingData} />
      <WhyChoose data={landingData} />
      <PartnerLogosSlide/>
      <CallToActionSplit />
    </div>
  );
}
