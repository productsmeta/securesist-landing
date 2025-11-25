import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { KeyBenefits } from "@/components/KeyBenefits";
import { WhyChoose } from "@/components/WhyChoose";
import CallToActionSplit from "@/components/CallToAction";

// Lazy load below-the-fold components to reduce initial JS bundle
 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <KeyBenefits />
      <WhyChoose />
      <CallToActionSplit />
    
    </div>
  );
}
