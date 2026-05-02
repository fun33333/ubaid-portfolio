"use client";

import { useState } from "react";
import Image from "next/image";

const SHARED_PDF_EMBED = "/M LEADS YOU'VE GOT THEM HERE! (1).pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH";

interface ResultCard {
  id: string;
  platform: string;
  overlayColor: string;
  logoPath: string;
  pdfPath: string;
  previewImage: string;
  description: string;
}

const SHARED_PDF = "/M LEADS YOU'VE GOT THEM HERE! (1).pdf";

const cards: ResultCard[] = [
  {
    id: "meta",
    platform: "Meta Ads",
    overlayColor: "rgba(24, 119, 242, 0.68)",
    logoPath: "/tools_icons/meta.png",
    pdfPath: SHARED_PDF,
    previewImage: "/WhatsApp Image 2026-04-21 at 9.43.22 PM(1).jpeg",
    description: "600+ direct calls at $2.60 per result. 6× combined ROAS over 365 days.",
  },
  {
    id: "snapchat",
    platform: "Snapchat",
    overlayColor: "rgba(220, 200, 0, 0.72)",
    logoPath: "/tools_icons/snapchat.png",
    pdfPath: SHARED_PDF,
    previewImage: "/WhatsApp Image 2026-04-21 at 9.43.22 PM(2).jpeg",
    description: "Snap campaign results — reach, CPR & story ad performance breakdown.",
  },
  {
    id: "google",
    platform: "Google Ads",
    overlayColor: "rgba(30, 120, 60, 0.68)",
    logoPath: "/tools_icons/google.png",
    pdfPath: SHARED_PDF,
    previewImage: "/WhatsApp Image 2026-04-21 at 9.43.22 PM.jpeg",
    description: "Search & PMax — conversions, CPA & impression share at scale.",
  },
  {
    id: "tiktok",
    platform: "TikTok Ads",
    overlayColor: "rgba(8, 8, 8, 0.78)",
    logoPath: "/tools_icons/tiktok.png",
    pdfPath: SHARED_PDF,
    previewImage: "/WhatsApp Image 2026-04-21 at 9.43.21 PM.jpeg",
    description: "In-feed & TopView — CPM, CTR, view rate & purchase ROAS data.",
  },
];

function Card({ card }: { card: ResultCard }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="relative overflow-hidden cursor-pointer aspect-[16/10] sm:aspect-[3/4]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        {/* Preview background */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.08)" : "scale(1)" }}
        >
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <Image
            src={card.previewImage}
            alt={`${card.platform} preview`}
            fill
            className="object-cover object-top"
            style={{
              opacity: hovered ? 0.95 : 0.55,
              transition: "opacity 0.5s ease, filter 0.5s ease",
              filter: hovered ? "blur(0px) saturate(1.1)" : "blur(1px) saturate(0.9)",
            }}
          />
        </div>

        {/* Platform color overlay — lighter on hover so dashboard pops */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: card.overlayColor,
            opacity: hovered ? 0.35 : 0.78,
          }}
        />

        {/* Bottom vignette for slide-up panel legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Platform name badge — top-left */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white"
            style={{
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {card.platform}
          </span>
        </div>

        {/* Logo — centered in white pill so brand colors stay true; fades on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            transition: "opacity 0.35s ease, transform 0.35s ease",
            opacity: hovered ? 0 : 1,
            transform: hovered ? "scale(0.9)" : "scale(1)",
          }}
        >
          <div
            className="flex items-center justify-center px-4 py-2.5 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.96)",
              border: "1px solid rgba(255,255,255,0.6)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src={card.logoPath}
              alt={card.platform}
              width={180}
              height={72}
              className="object-contain"
              style={{
                maxHeight: "72px",
                width: "auto",
              }}
            />
          </div>
        </div>

        {/* PDF Slide-up panel */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 p-5 pb-6"
          style={{
            background: "rgba(0,0,0,0.62)",
            backdropFilter: "blur(14px)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            transform: hovered ? "translateY(0%)" : "translateY(100%)",
            transition: "transform 0.45s cubic-bezier(.22,.68,0,1.1)",
          }}
        >
          {/* Logo small + PDF badge */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="flex items-center justify-center px-2.5 py-1.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.95)" }}
            >
              <Image
                src={card.logoPath}
                alt={card.platform}
                width={70}
                height={26}
                className="object-contain"
                style={{
                  maxHeight: "20px",
                  width: "auto",
                }}
              />
            </div>
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                <path
                  d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M14 2v6h6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-white text-[10px] font-black uppercase tracking-widest">
                PDF
              </span>
            </div>
          </div>

          <p className="text-white/70 text-xs leading-relaxed mb-4 font-medium">
            {card.description}
          </p>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[#0f0f0f] text-[11px] font-black uppercase tracking-widest shadow-lg"
            style={{
              background: "#ffffff",
            }}
          >
            View Full Results
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                stroke="#0f0f0f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* PDF Modal Popup */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(10px)" }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl"
            style={{ maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal top bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                background: "#111",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center px-2.5 py-1.5 rounded-md"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                >
                  <Image
                    src={card.logoPath}
                    alt={card.platform}
                    width={80}
                    height={28}
                    className="object-contain"
                    style={{
                      maxHeight: "20px",
                      width: "auto",
                    }}
                  />
                </div>
                <span className="text-white/40 text-xs font-medium">Results PDF</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={card.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors flex items-center gap-1.5"
                >
                  Open in new tab
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7v10"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* PDF iframe */}
            <iframe
              src={`${card.pdfPath}#toolbar=0&navpanes=0`}
              className="w-full"
              style={{ height: "82vh", background: "#1a1a1a", border: "none" }}
              title={`${card.platform} Results`}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function ResultsSection() {
  return (
    <section className="bg-[#f5f0e8] w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A300D9]/40 to-transparent" />

      {/* Header */}
      <div className="text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <span
          className="inline-flex items-center gap-2 text-[#A300D9] uppercase tracking-[0.28em] text-[10px] sm:text-xs font-black mb-3 sm:mb-4 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(163,0,217,0.08)",
            border: "1px solid rgba(163,0,217,0.2)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A300D9] animate-pulse" />
          Proof of Work
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0f0f0f] uppercase tracking-tight leading-[1.05] mt-3">
          Results By <span className="text-[#A300D9]">Channel.</span>
        </h2>
        <p className="text-[#0f0f0f]/50 text-sm sm:text-base mt-4 sm:mt-5 max-w-xl mx-auto font-medium leading-relaxed">
          Tap any platform to view the full results — real campaigns, real data, zero fluff.
        </p>
      </div>

      {/* Responsive card grid: 1 col mobile, 2 sm, 4 lg */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/10">
        {cards.map((card) => (
          <div key={card.id}>
            <Card card={card} />
          </div>
        ))}
      </div>
    </section>
  );
}