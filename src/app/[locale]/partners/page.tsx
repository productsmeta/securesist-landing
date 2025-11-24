 
import { 
  Shield, 
  Globe, 
  Rocket, 
  Award, 
  Building2, 
  Layers, 
  Users, 
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";
import PartnerJoinForm from "@/components/PartnerJoinForm";
import PartnerLogosSlide from "@/components/PartnerLogosSlide";
import { SectionHeader } from "@/components/SectionHeader";

const Partners = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Expert-Led Platform",
      description: "Built by Meta Techs cybersecurity specialists with proven methodologies."
    },
    {
      icon: Layers,
      title: "Attach to Existing Services",
      description: "Complement risk assessments, vCISO, MSSP, and compliance offerings."
    },
    {
      icon: Rocket,
      title: "Faster Customer Outcomes",
      description: "Launch quickly with curated content, automation, and measurable insights."
    },
    {
      icon: Award,
      title: "Enablement & Certification",
      description: "Training materials, playbooks, and co-selling resources for your team."
    },
    {
      icon: Building2,
      title: "Enterprise-Ready",
      description: "Security, privacy, and reporting controls for regulated industries."
    },
    {
      icon: Users,
      title: "Dedicated Partner Support",
      description: "Access to solution engineers and partner success resources."
    }
  ];

   

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative py-20  ">
        <div className="container mx-auto px-4">
        <SectionHeader
          badgeText="Partner with SECURESIST"
          title="Partner"
          titleHighlight="SECURESIST"
          description="Together, we help customers build resilient security cultures with role-based training, measurable outcomes, and trusted expertise."
        />
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Flexible models</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Dedicated support</span>
              </div>
            </div>
          </div>
         
      </section>


      {/* Logo Grid */}
   <PartnerLogosSlide/>
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Partner with Us
            </h2>
            <p className="text-lg text-slate-600">
              Grow revenue, deliver measurable outcomes, and elevate your services portfolio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PartnerJoinForm />
 
  
    </main>
  );
};

export default Partners;