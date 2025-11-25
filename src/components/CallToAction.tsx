"use client";

import { memo } from "react";
import { Link } from "../i18n/routing";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  Star,
  ArrowRight,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useTranslations } from "next-intl";

const CallToActionSplit = memo(() => {
  const t = useTranslations('cta');
  
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl">
              {t('title')} <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('titleHighlight')}</span> {t('titleEnd')}
            </h2>
            
            <p className="max-w-xl text-lg text-slate-600 leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4">
              <Button 
                className="group relative inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 hover:shadow-md text-lg font-bold text-white  transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/contact" className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 fill-white" />
                  {t('requestDemo')}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                className="group inline-flex items-center justify-center rounded-md border-2 border-gray-300 bg-white hover:border-purple-500 hover:bg-purple-50 px-8 py-6 text-lg font-semibold text-gray-800 transition-all duration-300 hover:scale-[1.02]"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  {t('contactSales')}
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>{t('noCreditCard')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>{t('quickSetup')}</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-80 md:h-96 lg:h-full min-h-[300px] rounded-md overflow-hidden border border-gray-200">
            <Image
              src="/contact_us.jpg" 
              alt="Security dashboard illustration showing threat metrics and training progress"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute bottom-4 left-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              {t('liveMetrics')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});

CallToActionSplit.displayName = 'CallToActionSplit';

export default CallToActionSplit;
