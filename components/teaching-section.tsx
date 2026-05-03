import { GraduationCap, Users, Code2 } from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    role: "Founding Instructor",
    org: "Al-Khair Institute of Technology",
    tag: "Founding Program",
    highlight: "Led AIT's first-ever technical training program.",
    details: [
      "200+ students across 6 batches",
      "From zero computer knowledge",
      "Built digitally capable graduates",
      "1.5 months per batch",
    ],
    stat: "200+",
    statLabel: "Students",
  },
  {
    icon: Users,
    role: "Digital Literacy Trainer",
    org: "Al-Khair Schooling System",
    tag: "Teacher Training",
    highlight: "Upskilled educators in AI tools & digital productivity.",
    details: [
      "50+ school teachers trained",
      "AI tools, ChatGPT, Google Docs",
      "Digital productivity workflows",
      "Multiple sessions across institutions",
    ],
    stat: "50+",
    statLabel: "Teachers",
  },
  {
    icon: Code2,
    role: "Web Development Instructor",
    org: "Level Up Institute of Technology",
    tag: "Govt. Initiative · BBSHRRDB",
    highlight: "Sindh Government-backed program teaching Python & Web Dev.",
    details: [
      "25+ students enrolled",
      "Python & Web Development",
      "3+ months completed",
      "Ongoing program",
    ],
    stat: "25+",
    statLabel: "Students",
  },
];

export default function TeachingSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f5f0e8] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="text-brand uppercase tracking-[0.25em] text-sm font-black block mb-4">
            Teaching &amp; Mentorship
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight leading-[1.05]">
            Shaping the Next <br />
            <span className="text-brand">Generation</span>{" "}
            <span className="text-gray-900">of Developers.</span>
          </h2>
          <p className="text-gray-500 text-lg mt-5 leading-relaxed max-w-xl">
            250+ students and teachers trained across institutions — from complete beginners to confident digital professionals.
          </p>
        </div>

        {/* Cards — dark matching site palette */}
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, role, org, tag, highlight, details, stat, statLabel }, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-2xl border border-brand/15 bg-[#1a0a1a]/90 hover:border-brand/50 hover:bg-[#220822] transition-all duration-400 overflow-hidden flex flex-col gap-5 shadow-lg shadow-brand/5"
            >
              {/* Glow on hover */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-brand/0 group-hover:bg-brand/20 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Top row: icon + stat */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand/20 group-hover:bg-brand flex items-center justify-center transition-all duration-400 shadow-lg shadow-brand/10">
                  <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-brand leading-none">{stat}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{statLabel}</div>
                </div>
              </div>

              {/* Role + org */}
              <div className="relative z-10">
                <div className="text-[10px] uppercase tracking-[0.2em] font-black text-brand/70 mb-2">{tag}</div>
                <h3 className="text-base font-black text-white uppercase tracking-wide leading-snug mb-1">
                  {role}
                </h3>
                <p className="text-brand text-xs font-bold">{org}</p>
              </div>

              {/* Highlight quote */}
              <p className="text-white/60 text-sm leading-relaxed border-l-2 border-brand/40 pl-3 relative z-10">
                {highlight}
              </p>

              {/* Details */}
              <ul className="flex flex-col gap-2 mt-auto relative z-10">
                {details.map((d, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-white/55 group-hover:text-white/75 transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/60 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
