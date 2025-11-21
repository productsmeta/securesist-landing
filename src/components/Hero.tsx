"use client";
import dynamic from "next/dynamic";
import { ArrowRight, Play } from "lucide-react";

// Lazy load WorldMap as it's heavy with DottedMap dependency
const WorldMap = dynamic(() => import("./ui/world-map").then(mod => ({ default: mod.WorldMap })), {
  loading: () => <div className="w-full aspect-[2/1] bg-gray-100/20 dark:bg-gray-900 rounded-lg animate-pulse" />,
  ssr: false, // Disable SSR for map as it uses browser APIs
});

const text = "Secure Your Future with SECURESIST";

export function Hero() {
  return (
    <div className="py-24 md:py-16 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Map Container with Overlay Text */}
        <div className="relative flex justify-center">
          <div className="w-full max-w-5xl relative">
            {/* Map */}
            <WorldMap
              dots={[
                {
                  start: {
                    lat: 64.2008,
                    lng: -149.4937,
                  }, // Alaska (Fairbanks)
                  end: {
                    lat: 34.0522,
                    lng: -118.2437,
                  }, // Los Angeles
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                  end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 }, // London
                  end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                },
              ]}
            />
            
            {/* Hero Content - Overlay on Map */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
     
              <div className="space-y-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent inline-block">
                    {text}
                  </span>
                </h1>
                
                <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300 bg-slate-100/60">
                  SECURESIST is a cybersecurity awareness training platform that helps organizations protect their data and systems from cyber threats.
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-center pt-4">
                  <button className="group cursor-pointer relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-all active:scale-[0.98] hover:scale-[1.02] sm:w-auto">
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                  <button className="group cursor-pointer inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-white/90 dark:bg-black/90 dark:border-gray-700 backdrop-blur-sm px-7 py-3 text-base font-semibold text-gray-700 dark:text-gray-300 transition-all hover:border-purple-500 hover:bg-blue-50 dark:hover:bg-gray-800 sm:w-auto">
                    <Play className="mr-2 h-4 w-4 text-blue-600" />
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
