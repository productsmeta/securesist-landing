"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

import { 
  ArrowRight, 
  Shield, 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Play,
  Sparkles,
  Send
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badgeText="Get Started"
            title="Request a"
            titleHighlight="Demo"
            description="See SECURESIST in action. Get a personalized walkthrough of our cybersecurity awareness training platform and discover how it can protect your organization."
          />
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Demo Form */}
          <div className="space-y-8">
            <Card className="border-0 bg-white    transition-shadow duration-300 overflow-hidden">
              {/* Gradient Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black text-white">
                      Schedule Your Demo
                    </CardTitle>
                    <CardDescription className="text-blue-100 mt-1">
                      We'll respond within 24 hours
                    </CardDescription>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-slate-700 font-semibold">
                      First Name *
                    </Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-slate-700 font-semibold">
                      Last Name *
                    </Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-semibold">
                    Work Email *
                  </Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@company.com" 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-slate-700 font-semibold">
                    Company Name *
                  </Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company Inc." 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-slate-700 font-semibold">
                    Job Title *
                  </Label>
                  <Input 
                    id="jobTitle" 
                    placeholder="IT Manager, Security Officer, etc." 
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12 transition-all" 
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="companySize" className="text-slate-700 font-semibold">
                      Company Size *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-slate-700 font-semibold">
                      Industry *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 h-12">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance & Banking</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-semibold">
                    Additional Information
                  </Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your current security training needs, compliance requirements, or any specific concerns..."
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] resize-none transition-all" 
                  />
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <Checkbox id="privacy" className="mt-1" />
                  <Label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                    I agree to the <a href="#" className="text-blue-600 hover:underline font-semibold">Privacy Policy</a> and consent to being contacted about SECURESIST.
                  </Label>
                </div>

                <Button className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <span>Request Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
             {/* Trust Badge */}
             <div className="p-6 rounded-md  border border-slate-200 text-slate-900  bg-white">
              <div className="flex items-start gap-4 border-b border-slate-400 pb-4">
                <Shield className="h-8 w-8 flex-shrink-0 text-slate-600" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Trusted by 500+ Companies</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Join leading organizations who trust SECURESIST to protect their teams and data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits & Info */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card className="border-0   bg-gradient-to-br from-blue-50 via-blue-50/50 to-purple-50    ">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-black text-slate-900">
                    What to Expect
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                {[
                  { num: "1", title: "Personalized Walkthrough", desc: "See SECURESIST configured for your industry and company size" },
                  { num: "2", title: "Live Demo", desc: "Interactive demonstration of key features and capabilities" },
                  { num: "3", title: "Q&A Session", desc: "Get answers to your specific questions and concerns" },
                  { num: "4", title: "Next Steps", desc: "Receive a customized proposal and implementation plan" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white text-sm font-black shadow-md group-hover:scale-110 transition-transform">
                      {item.num}
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Demo Highlights */}
            <Card className="border border-slate-200     bg-white    ">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-slate-900">
                  Demo Highlights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Users, color: "blue", title: "Employee Training", desc: "Interactive learning modules and simulations" },
                  { icon: Target, color: "purple", title: "Role-Based Content", desc: "Personalized training for different job functions" },
                  { icon: BarChart3, color: "green", title: "Analytics Dashboard", desc: "Comprehensive reporting and insights" },
                  { icon: Zap, color: "orange", title: "Automated Workflows", desc: "Streamlined campaign management" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const colorClasses = {
                    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                    green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
                    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
                  };
                  return (
                    <div key={idx} className="flex items-center gap-4 group cursor-pointer p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]} transition-all duration-300`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-0.5">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0   bg-gradient-to-br from-slate-50 to-slate-100    ">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-slate-900">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Mail, color: "blue", label: "Email", value: "demo@securesist.com", href: "mailto:demo@securesist.com" },
                  { icon: Phone, color: "green", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: Clock, color: "purple", label: "Response Time", value: "Within 24 hours", href: null },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  const colorClasses = {
                    blue: "bg-blue-100 text-blue-600",
                    green: "bg-green-100 text-green-600",
                    purple: "bg-purple-100 text-purple-600",
                  };
                  const hoverClasses = {
                    blue: "hover:border-blue-300",
                    green: "hover:border-green-300",
                    purple: "hover:border-purple-300",
                  };
                  const Component = item.href ? 'a' : 'div';
                  return (
                    <Component
                      key={idx}
                      href={item.href || undefined}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-200 ${hoverClasses[item.color as keyof typeof hoverClasses]} hover:shadow-md transition-all ${item.href ? 'cursor-pointer' : ''}`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{item.label}</p>
                        <p className="text-sm text-slate-600">{item.value}</p>
                      </div>
                    </Component>
                  );
                })}
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </main>
  );
}
