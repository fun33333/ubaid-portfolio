"use client";

import { useRef } from "react";
import { Server, Package, Trophy, GraduationCap, Users } from "lucide-react";

const stats = [
  { value: 3, suffix: "+", label: "Systems Shipped", icon: Server },
  { value: 2, suffix: "", label: "Products Sold", icon: Package },
  { value: 1, suffix: "", label: "Hackathon Won", icon: Trophy },
  { value: 200, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 50, suffix: "+", label: "Teachers Upskilled", icon: Users },
];


function StatItem({
  value, suffix, label, icon: Icon,
}: {
  value: number; suffix: string; label: string; icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-6 px-4">
      <div className="flex items-end gap-0.5 leading-none">
        <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
          {value}
        </span>
        <span className="text-2xl sm:text-3xl font-black text-brand mb-0.5">
          {suffix}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Icon className="w-3 h-3 text-brand/60 shrink-0" />
        <span className="text-white/50 text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="flex flex-col relative group overflow-hidden"
      style={{
        minHeight: "calc(100svh - 80px)",
        background: "radial-gradient(125% 125% at 50% 10%, #000000 25%, #2b092b 80%, #3d0a3d 100%)"
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-700" />

      {/* Hero content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/40 bg-brand/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-white/70 text-xs uppercase tracking-[0.25em] font-bold">
              Django · Next.js · LangChain · AI Agents
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-[5.5vw] xl:text-[5rem] font-black uppercase tracking-tighter leading-[0.9]">
            <span className="text-white whitespace-nowrap">WEB SYSTEMS. AI PRODUCTS.</span>
            <br />
            <i><span className="text-[#A300D9] whitespace-nowrap">BUILT TO SHIP.</span></i>
          </h1>

          {/* Subtitle */}
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I build enterprise web systems and AI products for startups and organizations — from planning to production.
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center pt-2">
            <button
              className="px-10 py-4 rounded-full font-bold text-base uppercase tracking-widest hover:scale-105 hover:shadow-2xl hover:shadow-brand/20"
              style={{
                background: "linear-gradient(to right, #A300D9 50%, rgba(255,255,255,0.92) 50%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                color: "#A300D9",
                transition: "background-position 0.4s ease, color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundPosition = "left center";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.backgroundPosition = "right center";
                (e.currentTarget as HTMLButtonElement).style.color = "#A300D9";
              }}
            >
              Hire Me
            </button>
          </div>

        </div>
      </div>

      {/* Stats row — bottom of hero */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/10"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))" }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
