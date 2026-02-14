"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Hero } from "@/components/Hero";
import { KeyBenefits } from "@/components/KeyBenefits";
import { WhyChoose } from "@/components/WhyChoose";
import CallToActionSplit from "@/components/CallToAction";
import PartnerLogosSlide from "@/components/PartnerLogosSlide";

export default function HomePage() {
  const t = useTranslations("home");

  const landingData = {
    hero_Title: t("hero_Title"),
    hero_Subtitle: t("hero_Subtitle"),
    hero_Description: t("hero_Description"),
    trustIndicator1_Title: t("trustIndicator1_Title"),
    trustIndicator1_Description: "",
    trustIndicator2_Title: t("trustIndicator2_Title"),
    trustIndicator2_Description: "",
    trustIndicator3_Title: t("trustIndicator3_Title"),
    trustIndicator3_Description: "",
    keyBenefits_Title: t("keyBenefits_Title"),
    keyBenefits_Subtitle: t("keyBenefits_Subtitle"),
    keyBenefits_Description: t("keyBenefits_Description"),
    keyBenefit_Card1_Title: t("keyBenefit_Card1_Title"),
    keyBenefit_Card1_Description: t("keyBenefit_Card1_Description"),
    keyBenefit_Card1_Features: t("keyBenefit_Card1_Features"),
    keyBenefit_Card1_Icon: t("keyBenefit_Card1_Icon"),
    keyBenefit_Card2_Title: t("keyBenefit_Card2_Title"),
    keyBenefit_Card2_Description: t("keyBenefit_Card2_Description"),
    keyBenefit_Card2_Features: t("keyBenefit_Card2_Features"),
    keyBenefit_Card2_Icon: t("keyBenefit_Card2_Icon"),
    keyBenefit_Card3_Title: t("keyBenefit_Card3_Title"),
    keyBenefit_Card3_Description: t("keyBenefit_Card3_Description"),
    keyBenefit_Card3_Features: t("keyBenefit_Card3_Features"),
    keyBenefit_Card3_Icon: t("keyBenefit_Card3_Icon"),
    whyChooseSection_Title: t("whyChooseSection_Title"),
    whyChooseSection_Subtitle: t("whyChooseSection_Subtitle"),
    whyChooseSection_Description: t("whyChooseSection_Description"),
    whyChooseBenefit_Card1_Title: t("whyChooseBenefit_Card1_Title"),
    whyChooseBenefit_Card1_Description: t("whyChooseBenefit_Card1_Description"),
    whyChooseBenefit_Card1_CtaText: t("whyChooseBenefit_Card1_CtaText"),
    whyChooseBenefit_Card1_Icon: t("whyChooseBenefit_Card1_Icon"),
    whyChooseBenefit_Card2_Title: t("whyChooseBenefit_Card2_Title"),
    whyChooseBenefit_Card2_Description: t("whyChooseBenefit_Card2_Description"),
    whyChooseBenefit_Card2_CtaText: t("whyChooseBenefit_Card2_CtaText"),
    whyChooseBenefit_Card2_Icon: t("whyChooseBenefit_Card2_Icon"),
    whyChooseBenefit_Card3_Title: t("whyChooseBenefit_Card3_Title"),
    whyChooseBenefit_Card3_Description: t("whyChooseBenefit_Card3_Description"),
    whyChooseBenefit_Card3_CtaText: t("whyChooseBenefit_Card3_CtaText"),
    whyChooseBenefit_Card3_Icon: t("whyChooseBenefit_Card3_Icon"),
    whyChooseBenefit_Card4_Title: t("whyChooseBenefit_Card4_Title"),
    whyChooseBenefit_Card4_Description: t("whyChooseBenefit_Card4_Description"),
    whyChooseBenefit_Card4_CtaText: t("whyChooseBenefit_Card4_CtaText"),
    whyChooseBenefit_Card4_Icon: t("whyChooseBenefit_Card4_Icon"),
    statistic_Card1_Value: t("statistic_Card1_Value"),
    statistic_Card1_Label: t("statistic_Card1_Label"),
    statistic_Card2_Value: t("statistic_Card2_Value"),
    statistic_Card2_Label: t("statistic_Card2_Label"),
    statistic_Card3_Value: t("statistic_Card3_Value"),
    statistic_Card3_Label: t("statistic_Card3_Label"),
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SECURESIST",
    url: "https://securesist.com",
    logo: "https://securesist.com/logo.png",
    description:
      "Transform your organization's cybersecurity posture with intelligent, role-based training that keeps your team engaged and secure.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+971-568-966556",
      contactType: "Customer Service",
      areaServed: ["AE", "EG", "US"],
      availableLanguage: ["en", "ar"],
    },
    sameAs: [
      "https://www.facebook.com/people/SecureSist/61587328047197/",
      "https://www.instagram.com/securesist/",
      "https://www.youtube.com/@SecureSist",
      "https://www.linkedin.com/company/securesist/",
    ],
  };

  return (
    <>
      {/* Organization Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <div className="min-h-screen bg-white">
        <Hero data={landingData} />
        <KeyBenefits data={landingData} />
        <WhyChoose data={landingData} />
        <PartnerLogosSlide />
        <CallToActionSplit />
      </div>
    </>
  );
}