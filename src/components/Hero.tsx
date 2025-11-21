"use client";
import dynamic from "next/dynamic";
import { ArrowRight, Play, Shield } from "lucide-react";

// Lazy load WorldMap as it's heavy with DottedMap dependency
const WorldMap = dynamic(() => import("./ui/world-map").then(mod => ({ default: mod.WorldMap })), {
  loading: () => <div className="w-full aspect-[2/1] rounded-2xl animate-pulse" />,
  ssr: false, // Disable SSR for map as it uses browser APIs
});

const text = " SECURESIST";

export function Hero() {
  return (
    <section className="relative py-30 h-[100%]  my-22 md:py-16 md:my-0 w-full overflow-hidden">
      <div className="relative  py-10 h-[100%]   md:py-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Map Container with Overlay Text */}
        <div className="relative flex justify-center" style={{ contain: "layout" }}>
          <div className="w-full max-w-6xl relative" style={{ contain: "layout style" }}>
            {/* Map with enhanced styling */}
            <div className="relative   overflow-hidden  ">
              <WorldMap
                lineColor="#9333ea"
                dots={[
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
                    end: { lat: 34.0522, lng: -18.2437 }, // Los Angeles
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
                ]}
              />
            </div>
            
            {/* Hero Content - Overlay on Map with better backdrop */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
              <div className="space-y-8 max-w-4xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/50 dark:border-gray-700/50">
                  <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Enterprise Security Platform
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="block  text-slate-800">
                   Secure Your Future with 
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                   {text}
                  </span>
                </h1>
                
               
                
                {/* Enhanced Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 active:scale-100 min-w-[180px]">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  <button className="group relative inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 px-8 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 transition-all duration-300 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-xl hover:scale-105 active:scale-100 min-w-[180px]">
                    <Play className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </button>
                </div>

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
}
