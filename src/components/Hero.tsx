"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import { Shield } from "lucide-react";
import { Button } from "./ui/button";
// Lazy load WorldMap as it's heavy with DottedMap dependency
// Note: Client component will automatically only render on client side
const WorldMap = dynamic(() => import("./ui/world-map").then(mod => ({ default: mod.WorldMap })), {
  loading: () => <div className="w-full aspect-[2/1] rounded-2xl animate-pulse" style={{ contain: "layout" }} />,
});

const text = " SECURESIST";

// Stable dots array - defined outside component to prevent recreation on every render
const MAP_DOTS = [
  {
    start: { lat: 40.7128, lng: -74.0060 }, // New York
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
  },
  {
    start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  },
  {
    start: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
  },
  {
    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
  },
  {
    start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
    end: { lat: 51.5074, lng: -0.1278 }, // London
  },
];

export const Hero = memo(function Hero() {
  return (
    <section className="relative py-20 h-[100%]  my-10 md:py-16 md:my-0 w-full overflow-hidden">
      <div className="relative  py-10 h-[100%]   md:py-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Container with Overlay Text */}
        <div className="relative flex justify-center" style={{ contain: "layout" }}>
          <div className="w-full max-w-6xl relative" style={{ contain: "layout style" }}>
            {/* Map with enhanced styling */}
            <div className="relative   overflow-hidden  ">
              <WorldMap
                lineColor="#9333ea"
                dots={MAP_DOTS}
              />
            </div>
            
            {/* Hero Content - Overlay on Map with better backdrop */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
              <div className="space-y-8 max-w-4xl">
              
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block  text-slate-800">
                   Secure Your Future with 
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                   {text}
                  </span>
                </h1>
                
               
                
            

                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Trusted by 500+ Companies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                    <span>99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                    <span>Enterprise Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});
