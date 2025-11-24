import React from "react";
import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";

// Lazy load below-the-fold components to reduce initial JS bundle
const KeyBenefits = dynamic(
  () => import("@/components/KeyBenefits").then((mod) => ({ default: mod.KeyBenefits })),
  {
    loading: () => <div className="min-h-[400px]" style={{ contain: "layout" }} />,
  }
);

const WhyChoose = dynamic(
  () => import("@/components/WhyChoose").then((mod) => ({ default: mod.WhyChoose })),
  {
    loading: () => <div className="min-h-[400px]" style={{ contain: "layout" }} />,
  }
);

const CallToAction = dynamic(() => import("@/components/CallToAction"), {
  loading: () => <div className="min-h-[300px]" style={{ contain: "layout" }} />,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <KeyBenefits />
      <WhyChoose />
      <CallToAction />
    </div>
  );
}
