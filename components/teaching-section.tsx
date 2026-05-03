import { FaSchool, FaChalkboardTeacher, FaLandmark } from "react-icons/fa";

const credentials = [
  {
    org: "Al-Khair Schooling System",
    subtitle: "Founding Instructor",
    desc: "Led the first-ever technical training program — 200+ students trained across 6 batches.",
    highlight: false,
    icon: FaSchool,
  },
  {
    org: "Digital Literacy Program",
    subtitle: "Teacher Trainer · 50+ Educators",
    desc: "Upskilled school teachers in AI tools, ChatGPT, Google Docs, and digital productivity.",
    highlight: false,
    icon: FaChalkboardTeacher,
  },
  {
    org: "Level Up Institute · BBSHRRDB",
    subtitle: "Sindh Government Initiative",
    desc: "Government-backed program teaching Python & Web Development. 3+ months, ongoing.",
    highlight: true,
    icon: FaLandmark,
  },
];

export default function TeachingSection() {
  return (
    <section
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "#faf5ff",
        borderTop: "1px solid #d8b4fe",
        borderBottom: "1px solid #d8b4fe",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">

        {/* Header */}
        <div className="mb-10">
          <span
            className="text-sm font-black uppercase tracking-[0.25em] block mb-3"
            style={{ color: "#9333ea" }}
          >
            Teaching &amp; Mentorship
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.05] text-gray-900">
            Shaping the Next Generation of{" "}
            <span style={{ color: "#9333ea" }}>Developers.</span>
          </h2>
        </div>

        {/* Credential cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {credentials.map(({ org, subtitle, desc, highlight, icon: Icon }, i) => (
            <div
              key={i}
              className="group relative rounded-2xl p-6 flex flex-col gap-3 overflow-hidden transition-all duration-400 bg-white"
              style={
                highlight
                  ? { border: "1px solid #a855f7", boxShadow: "0 0 20px rgba(168,85,247,0.25), 0 0 40px rgba(168,85,247,0.1)" }
                  : { border: "1px solid #e9d5ff" }
              }
            >
              {/* Govt badge */}
              {highlight && (
                <span
                  className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ color: "#9333ea", background: "#f3e8ff", border: "1px solid #d8b4fe" }}
                >
                  Govt. Backed
                </span>
              )}

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: highlight ? "#f3e8ff" : "#faf5ff" }}
              >
                <Icon className="w-4 h-4" style={{ color: "#9333ea" }} />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-black text-base leading-snug mb-1 text-gray-900">
                  {org}
                </h3>
                <p
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#7e22ce" }}
                >
                  {subtitle}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
