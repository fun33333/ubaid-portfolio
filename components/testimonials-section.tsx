"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ubaid delivered our school management system on time and beyond expectations. His ability to plan, lead, and build production-ready systems is rare at his level of experience.",
    name: "Muhammad Asif",
    role: "Principal, Al-Khair Institute",
    initials: "MA",
  },
  {
    quote: "Working with Ubaid on our enterprise helpdesk was seamless. He understood the requirements deeply, structured the architecture well, and kept communication transparent throughout.",
    name: "Ahmed Raza",
    role: "Operations Manager",
    initials: "AR",
  },
  {
    quote: "His AI agent system at the hackathon genuinely impressed the judges. The multi-agent orchestration was creative, technically solid, and actually worked flawlessly under demo pressure.",
    name: "Sarah Khan",
    role: "Tech Lead, Google Developer Groups",
    initials: "SK",
  },
];

function ShimmerCard() {
  return (
    <div className="relative rounded-2xl border border-white/8 bg-[#1a0a1a] p-7 overflow-hidden">
      {/* Shimmer sweep */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-brand/8 to-transparent" />

      {/* Quote icon placeholder */}
      <div className="w-7 h-7 rounded-lg bg-brand/15 mb-5 animate-pulse" />

      <div className="space-y-3 mb-6">
        <div className="h-2.5 bg-white/8 rounded-full w-full animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-11/12 animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-4/5 animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-full animate-pulse" />
        <div className="h-2.5 bg-white/8 rounded-full w-2/3 animate-pulse" />
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand/15 animate-pulse shrink-0" />
        <div className="space-y-2 flex-1">
          <div className="h-2.5 bg-white/8 rounded-full w-28 animate-pulse" />
          <div className="h-2 bg-white/5 rounded-full w-36 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const isPlaceholder = true; // flip to false when real testimonials ready

  return (
    <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-black relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(90% 70% at 50% 50%, #150515 0%, #000000 65%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-brand uppercase tracking-[0.25em] text-sm font-black block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              What People <span className="text-brand">Say.</span>
            </h2>
          </div>
          {isPlaceholder && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 self-start md:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              <span className="text-brand text-xs uppercase tracking-widest font-black">
                Real reviews coming soon
              </span>
            </div>
          )}
        </div>

        {/* Cards */}
        {isPlaceholder ? (
          <div className="grid md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => <ShimmerCard key={i} />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, role, initials }, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-brand/15 bg-[#1a0a1a]/70 hover:border-brand/50 hover:bg-[#220822] transition-all duration-400 overflow-hidden flex flex-col gap-5"
              >
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-brand/0 group-hover:bg-brand/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <Quote className="w-8 h-8 text-brand/40" />

                <p className="text-white/70 text-base leading-relaxed flex-1 italic">
                  &ldquo;{quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-brand font-black text-sm shrink-0">
                    {initials}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{name}</p>
                    <p className="text-white/40 text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
