import Image from "next/image"
import React from "react"
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Shield,
  Users,
  TrendingUp,
  AlertTriangle,
  Key,
  Server,
} from "lucide-react"

const stats = [
  { icon: Shield, label: "24/7 Defenses", value: "Active" }, // Further reduced text
  { icon: Users, label: "50k+ Workforce", value: "Empowered" },
  { icon: TrendingUp, label: "99.8% Success", value: "Detection" },
]

 

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-70">
        <div className="absolute -left-1/4 -top-1/4 h-[500px] w-[500px] rounded-full bg-blue-100/30 blur-[150px] animate-slow-pulse" />
        <div className="absolute -right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/30 blur-[150px] animate-slow-pulse delay-1000" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
      
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 pt-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-20"> {/* Reduced padding and gap */}
        {/* Left Content */}
        <div className="space-y-6 lg:max-w-xl lg:flex-1"> {/* Reduced max-width and space-y */}
          

          <div className="space-y-4"> {/* Reduced space-y */}
            
            {/* Smaller, but still impactful Headline */}
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Your Team:{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-600 bg-clip-text text-transparent">
                First Line of Defense
              </span>
            </h1>
            {/* Even smaller Description */}
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Empower your workforce with dynamic security awareness. Detect threats faster, ensure compliance.
            </p>
          </div>
 

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-3"> {/* Reduced gap and padding */}
            {/* Primary Button (Smaller padding, text) */}
            <button className="group cursor-pointer relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-purple-500 px-7 py-3 text-base font-bold text-white shadow-lg shadow-purple-500/30 transition-all active:scale-[0.98] hover:scale-[1.02] sm:w-auto">
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" /> {/* Smaller icon */}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            {/* Secondary Button (Smaller padding, text) */}
            <button className="group cursor-pointer inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-white px-7 py-3 text-base font-semibold text-gray-700 transition-all hover:border-purple-500 hover:bg-blue-50 sm:w-auto">
              <Play className="mr-2 h-4 w-4 text-blue-600" /> {/* Smaller icon */}
              Watch Demo
            </button>
          </div>

          {/* Stats Section (Smaller text, icons, padding) */}
          <div className="grid gap-4 pt-4 sm:grid-cols-3"> {/* Reduced gap and padding */}
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group flex flex-col items-start rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Icon className="mb-2 h-6 w-6 text-blue-600" /> {/* Smaller icon */}
                <div className="text-xl font-bold text-gray-900">{value}</div> {/* Smaller text */}
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex flex-1 justify-center lg:justify-end">
         

          {/* Main image container (MAXIMIZED SIZE) */}
          <div className="relative w-full max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]"> {/* Significantly increased max-width */}
         
             
              <div className="relative overflow-hidden rounded-xl border border-gray-300 ">
                <Image
                  src="/cyber-security-illustration-free-vector.jpg"
                  alt="Cybersecurity protection illustration"
                  width={900} // Increased width for larger image in container
                  height={900} // Increased height for larger image in container
                  className="h-full w-full object-cover"
                  priority
                  quality={95}
                />
               

             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}