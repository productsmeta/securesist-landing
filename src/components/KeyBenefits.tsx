"use client";

import { memo } from 'react';
import { Users, Target, BarChart3, CheckCircle } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { useTranslations } from 'next-intl';

export const KeyBenefits = memo(() => {
  const t = useTranslations('keyBenefits');
  
  const benefits = [
    {
      icon: Users,
      title: t('understandableTraining.title'),
      description: t('understandableTraining.description'),
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      features: [
        t('understandableTraining.features.modules'),
        t('understandableTraining.features.scenarios'),
        t('understandableTraining.features.learning')
      ]
    },
    {
      icon: Target,
      title: t('fitsEachRole.title'),
      description: t('fitsEachRole.description'),
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      features: [
        t('fitsEachRole.features.content'),
        t('fitsEachRole.features.paths'),
        t('fitsEachRole.features.specific')
      ]
    },
    {
      icon: BarChart3,
      title: t('clearReports.title'),
      description: t('clearReports.description'),
      color: "green",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      features: [
        t('clearReports.features.analytics'),
        t('clearReports.features.assessment'),
        t('clearReports.features.tracking')
      ]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/90 overflow-hidden">
 
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <SectionHeader
          badgeText={t('badge')}
          title={t('title')}
          titleHighlight={t('titleHighlight')}
          description={t('description')}
        />
        
        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-md  hover:shadow-md transition-all duration-500 hover:scale-105 border border-slate-200 hover:border-transparent overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${benefit.gradient} p-[2px]`}>
                    <div className="h-full w-full rounded-md bg-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8 space-y-6">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.iconBg} rounded-full  group-hover:scale-110 transition-transform duration-500 `}>
                      <Icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors">
                      {benefit.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      {benefit.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                          <CheckCircle className={`h-4 w-4 ${benefit.iconColor} flex-shrink-0`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${benefit.gradient}`} />
                </div>
              </div>
            );
          })}
        </div>
        
     
      </div>
     
    </section>
  );
});

KeyBenefits.displayName = 'KeyBenefits';