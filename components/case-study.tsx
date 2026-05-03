"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";

interface CaseStudyItem {
  title: string;
  subtitle: string;
  description: string;
  folder: string;
  pages: number;
}

const caseStudies: CaseStudyItem[] = [
  {
    title: "School Management System",
    subtitle: "Live Product · 2 Clients · In Production",
    description:
      "Led from planning to MVP. Role-based dashboards for teachers, principals, and admins. Now sold as a commercial product serving real institutions.",
    folder: "case-study/sms",
    pages: 3,
  },
  {
    title: "Helpdesk Management System",
    subtitle: "Enterprise Solution · MVP · 3 Role Dashboards",
    description:
      "Multi-role helpdesk with ticket threads, SLA tracking, file attachments, and per-role dashboards for requesters, moderators, and assignees.",
    folder: "case-study/helpdesk",
    pages: 3,
  },
  {
    title: "AI Storytelling Agent System",
    subtitle: "Hackathon Runner-Up · IBA × Google Developer Groups",
    description:
      "Multi-agent AI system where each agent plays a unique character. Generates a different story every run using LangChain orchestration and React UI.",
    folder: "case-study/ai-agent",
    pages: 3,
  },
];

export default function CaseStudy() {
  const [activeStudy, setActiveStudy] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const study = caseStudies[activeStudy];

  // Carousel autoplay
  useEffect(() => {
    if (isPaused || viewerOpen) return;
    autoplayRef.current = setInterval(() => {
      setActiveStudy((prev) => (prev + 1) % caseStudies.length);
    }, 4000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, viewerOpen]);

  // Viewer keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!viewerOpen) return;
      if (e.key === "ArrowRight")
        setCurrentPage((p) => (p < study.pages ? p + 1 : 1));
      if (e.key === "ArrowLeft")
        setCurrentPage((p) => (p > 1 ? p - 1 : study.pages));
      if (e.key === "Escape") setViewerOpen(false);
    },
    [viewerOpen, study.pages],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Swipe support
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0)
        setCurrentPage((p) => (p < study.pages ? p + 1 : 1));
      else setCurrentPage((p) => (p > 1 ? p - 1 : study.pages));
    }
    touchStart.current = null;
  };

  const openViewer = (studyIdx: number, page: number = 1) => {
    setActiveStudy(studyIdx);
    setCurrentPage(page);
    setViewerOpen(true);
  };

  return (
    <section className="py-18 md:py-22 bg-[#f8f7f4] relative overflow-hidden">
      {/* Subtle brand accent at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand/0 via-brand to-brand/0" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand uppercase tracking-[0.25em] text-sm font-black block mb-4">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight leading-[1.05]">
              Case Studies
            </h2>
            <p className="text-gray-500 text-lg mt-4 leading-relaxed">
              Real systems. Real clients. Detailed breakdowns dropping soon.
            </p>
          </div>

          {/* Carousel nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setActiveStudy(
                  (prev) =>
                    (prev - 1 + caseStudies.length) % caseStudies.length,
                )
              }
              className="p-3 rounded-full border border-gray-300 hover:border-brand hover:bg-brand/5 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() =>
                setActiveStudy((prev) => (prev + 1) % caseStudies.length)
              }
              className="p-3 rounded-full bg-brand hover:bg-brand/90 transition-all shadow-lg shadow-brand/20"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Case Study Cards Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main thumbnail */}
          <div
            className="group relative rounded-3xl overflow-hidden border border-gray-200 hover:border-brand/40 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:shadow-brand/5 bg-white"
            onClick={() => openViewer(activeStudy, 1)}
          >
            <div className="relative aspect-[16/9] w-full bg-gray-50">
              {/* Coming soon overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gray-50">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A300D9" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <span className="text-brand font-black text-sm uppercase tracking-widest">Case Study Coming Soon</span>
                <span className="text-gray-400 text-xs">{study.subtitle}</span>
              </div>
            </div>

            {/* Info bar */}
            <div className="px-8 py-5 flex items-center justify-between bg-white border-t border-gray-100">
              <div>
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{study.subtitle}</p>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                {study.pages} pages
              </span>
            </div>
          </div>

          {/* Page thumbnails */}
          <div className="mt-6 grid grid-cols-5 gap-3 md:gap-4">
            {Array.from({ length: study.pages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => openViewer(activeStudy, page)}
                  className="relative aspect-[16/9] rounded-xl overflow-hidden border-2 border-gray-200 hover:border-brand/50 transition-all duration-300 hover:shadow-md group bg-white"
                >
                  <Image
                    src={`/${study.folder}/page-${page}.png`}
                    alt={`Page ${page}`}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-brand/10 transition-all duration-300" />
                  <div className="absolute bottom-1.5 right-1.5 bg-white/90 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-md shadow-sm">
                    {page}
                  </div>
                </button>
              ),
            )}
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStudy(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === activeStudy
                    ? "bg-brand w-10"
                    : "bg-gray-300 w-4 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Full Page Viewer Modal */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close — Escape key */}
          <button
            onClick={() => setViewerOpen(false)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setCurrentPage((p) => (p > 1 ? p - 1 : study.pages))
            }
            className="absolute left-4 md:left-8 bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-50"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentPage((p) => (p < study.pages ? p + 1 : 1))
            }
            className="absolute right-4 md:right-8 bg-white/10 hover:bg-white/20 p-3 md:p-4 rounded-full transition-all z-50"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slide image */}
          <div className="relative w-full max-w-5xl aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={`/${study.folder}/page-${currentPage}.png`}
              alt={`${study.title} — Page ${currentPage}`}
              fill
              className="object-contain bg-white"
              priority
            />
          </div>

          {/* Bottom bar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-4">
              <span className="text-white/70 text-sm font-medium">
                {study.title} — Page {currentPage} of {study.pages}
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: study.pages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        page === currentPage
                          ? "bg-brand w-6"
                          : "bg-white/30 w-3 hover:bg-white/50"
                      }`}
                    />
                  ),
                )}
              </div>
              <span className="text-white/40 text-xs hidden md:block">
                ← → keys to navigate · Esc to close
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
