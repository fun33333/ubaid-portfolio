"use client";

import { useEffect, useRef, useState } from "react";
import { Server, Package, Trophy, GraduationCap, Users } from "lucide-react";

const stats = [
  { value: 3, suffix: "+", label: "Systems Shipped", icon: Server },
  { value: 2, suffix: "", label: "Products Sold", icon: Package },
  { value: 1, suffix: "", label: "Hackathon Won", icon: Trophy },
  { value: 200, suffix: "+", label: "Students Trained", icon: GraduationCap },
  { value: 50, suffix: "+", label: "Teachers Upskilled", icon: Users },
];

function useCountUp(target: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  value, suffix, label, icon: Icon, animate,
}: {
  value: number; suffix: string; label: string; icon: React.ElementType; animate: boolean;
}) {
  const count = useCountUp(value, 1000, animate);
  return (
    <div className="group relative p-6 rounded-2xl border border-brand/15 bg-[#1a0a1a]/70 hover:border-brand/50 hover:bg-[#220822] transition-all duration-400 overflow-hidden flex flex-col items-center text-center gap-3">
      <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand/0 group-hover:bg-brand/15 rounded-full blur-xl transition-all duration-500 pointer-events-none" />

      <div className="w-10 h-10 rounded-xl bg-brand/20 group-hover:bg-brand flex items-center justify-center transition-all duration-300 shadow-lg shadow-brand/10">
        <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-300" />
      </div>

      <div className="leading-none">
        <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter">
          {animate ? count : 0}
        </span>
        <span className="text-3xl sm:text-4xl font-black text-brand tracking-tighter">
          {suffix}
        </span>
      </div>

      <span className="text-white/50 text-xs uppercase tracking-[0.18em] font-bold group-hover:text-white/70 transition-colors duration-300">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(70% 100% at 50% 100%, #150515 0%, #000000 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
