"use client";
import { memo, useState, useEffect } from "react";
import { Shield, AlertTriangle, UserX, Settings, Globe, Mail, Skull, ShieldAlert } from "lucide-react";

export const SecurityRadar = memo(function SecurityRadar() {
  const [scanAngle, setScanAngle] = useState(210);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanAngle((prev) => (prev + 0.7) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const alerts = [
    { id: 1, label: "New Training Campaign", angle: 80, distance: 40, color: "emerald", icon: Shield },
    { id: 2, label: "Policy & Attestations", angle: 30, distance: 25, color: "red", icon: AlertTriangle },
    { id: 3, label: "Executive / VIP Protection", angle: 160, distance: 20, color: "rose", icon: UserX },
    { id: 4, label: "Phishing & Social Engineering", angle: -35, distance: 17, color: "amber", icon: ShieldAlert  },
    { id: 5, label: "Risk & Control", angle: -70, distance: 42, color: "purple", icon: Settings },
    { id: 6, label: "Audit Evidence", angle: -105, distance: 25, color: "blue", icon: Globe },
  ];

  const getPosition = (angle: number, distance: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: 50 + distance * Math.cos(rad),
      y: 50 + distance * Math.sin(rad),
    };
  };

  // هل الشعاع فوق الـ alert
  const isBehindScan = (alertAngle: number) => {
    const diff = Math.abs(((scanAngle - alertAngle + 540) % 360) - 180);
    return diff < 25;
  };

  const circleColors: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-300 text-emerald-700 shadow-emerald-100",
    red: "bg-red-50 border-red-300 text-red-700 shadow-red-100",
    amber: "bg-amber-50 border-amber-300 text-amber-700 shadow-amber-100",
    purple: "bg-purple-50 border-purple-300 text-purple-700 shadow-purple-100",
    blue: "bg-blue-50 border-blue-300 text-blue-700 shadow-blue-100",
    fuchsia: "bg-fuchsia-50 border-fuchsia-300 text-fuchsia-700 shadow-fuchsia-100",
    rose: "bg-rose-50 border-rose-300 text-rose-700 shadow-rose-100",
  };

  return (
    <div className="relative w-full max-w-xl aspect-square mx-auto">

      {/* radar background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 overflow-hidden " />

      {/* dots pattern */}
      <div className="absolute inset-0 overflow-hidden rounded-full opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle, rgba(200,200,200,0.4) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} 
        />
      </div>

      {/* rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-rose-200/60"
            style={{
              width: `${100 - i * 29}%`,
              height: `${100 - i * 29}%`,
            }}
          />
        ))}
      </div>

      {/* scan sector */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
      <div
  className="absolute w-full h-full"
  style={{
    background: `conic-gradient(
      from ${scanAngle}deg,
      rgba(255, 0, 0, 0.4) 0deg,
       transparent 100deg
    )`,
  }}
/>
      </div>

      {/* scan line - الخط من المركز للنقطة */}
      <div
        className="absolute left-1/2 top-1/2 origin-top-left"
        style={{
          transform: `rotate(${scanAngle}deg)`,
          width: '50%',
          height: '2px',
          background: 'linear-gradient(to right, rgba(239,68,68,0.9), rgba(239,68,68,0.4), transparent)',
        }}
      />

      {/* moving radar head dot - مخفية بالـ opacity */}
      {(() => {
        const radarRadius = 48;
        const rad = (scanAngle * Math.PI) / 180;
        const x = 50 + radarRadius * Math.cos(rad);
        const y = 50 + radarRadius * Math.sin(rad);

        return (
          <div
            className="absolute w-4 h-4 bg-red-600 rounded-full "
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })()}

      {/* center lock */}
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white border-2 border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-lg z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-rose-50 to-pink-50 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      {/* alerts */}
      {alerts.map((alert) => {
        const pos = getPosition(alert.angle, alert.distance);
        const hidden = isBehindScan(alert.angle);
        const Icon = alert.icon;

        return (
          <div
            key={alert.id}
            className={`absolute text-xs  transition-all duration-500 ease-out  ${
              hidden ? "opacity-0 scale-75 blur-sm" : "opacity-100 scale-100"
            }`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`px-3 py-1.5 rounded-full border-2 text-xs font-semibold shadow-lg backdrop-blur-sm flex items-center gap-1.5 ${circleColors[alert.color]}`}
            >
              <Icon className="w-3 h-3" />
              <span className="hidden sm:inline text-[10px]">{alert.label}</span>
            </div>
          </div>
        );
      })}

      {/* connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {alerts.map((alert) => {
          const pos = getPosition(alert.angle, alert.distance);
          const hidden = isBehindScan(alert.angle);
          return (
            <line
              key={`line-${alert.id}`}
              x1="50%"
              y1="50%"
              x2={`${pos.x}%`}
              y2={`${pos.y}%`}
              stroke="rgba(225, 29, 72, 0.2)"
              strokeWidth="1"
              strokeDasharray="3 3"
              className={`transition-opacity duration-500 ${hidden ? "opacity-0" : "opacity-100"}`}
            />
          );
        })}
      </svg>
    </div>
  );
});