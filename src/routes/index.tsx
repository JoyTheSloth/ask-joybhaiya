import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Calendar, MessageCircle, Phone, Video, Mail, Instagram, Linkedin,
  Coffee, Sparkles, Star, ArrowRight, Check, Heart, BookOpen, Home,
  GraduationCap, Briefcase, Users, Trophy, Award, Send, Menu, X,
} from "lucide-react";

// Global WhatsApp dialog trigger helper
const triggerWhatsAppDialog = (details?: { title?: string; price?: string }) => {
  window.dispatchEvent(new CustomEvent("open-whatsapp-dialog", { detail: details }));
};

import askJoyLogo from "@/assets/ask-joy-logo.asset.json";
import amityLogo from "@/assets/amity-logo.asset.json";
import heroCollage from "@/assets/hero-collage.jpg";
import joyPortrait from "@/assets/joy-portrait.jpg";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";

import admissionsSticker from "@/assets/admissions_sticker.png";
import placementsSticker from "@/assets/placements_sticker.png";
import hostelsSticker from "@/assets/hostels_sticker.png";
import academicsSticker from "@/assets/academics_sticker.png";
import internshipsSticker from "@/assets/internships_sticker.png";
import scholarshipsSticker from "@/assets/scholarships_sticker.png";
import campusLifeSticker from "@/assets/campus_life_sticker.png";
import eventsFestsSticker from "@/assets/events_fests_sticker.png";
import studentClubsSticker from "@/assets/student_clubs_sticker.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ask Joy Bhaiya — Honest Amity University Kolkata Mentorship" },
      { name: "description", content: "Get honest answers from a recent Amity University Kolkata graduate about placements, hostels, academics & campus life. Book a ₹99 call today." },
      { property: "og:title", content: "Ask Joy Bhaiya — Honest Amity University Kolkata Mentorship" },
      { property: "og:description", content: "A recent graduate's honest guidance on admissions, hostels, placements and campus life." },
    ],
  }),
  component: Index,
});

/* ---------- tiny decorative SVGs ---------- */
const Doodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 30 Q 25 5, 50 30 T 95 30" />
    <path d="M85 25 L95 30 L88 38" />
  </svg>
);
const StarDoodle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 L14 10 L21 10 L15.5 14 L17.5 21 L12 17 L6.5 21 L8.5 14 L3 10 L10 10 Z" />
  </svg>
);
const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 12" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M2 6 Q 15 -2, 30 6 T 60 6 T 90 6 T 118 6" />
  </svg>
);
const CoffeeStain = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M15 50 A 35 35 0 1 1 85 50 A 35 35 0 1 1 15 50" strokeDasharray="3 3" opacity="0.3" />
    <path d="M12 50 A 38 38 0 1 1 88 50 A 38 38 0 1 1 12 50" opacity="0.2" />
    <circle cx="85" cy="80" r="1.5" fill="currentColor" opacity="0.3" />
    <circle cx="92" cy="74" r="1" fill="currentColor" opacity="0.25" />
    <circle cx="10" cy="30" r="2" fill="currentColor" opacity="0.35" />
    <path d="M25 25 Q 30 20, 35 28" opacity="0.25" strokeWidth="1" />
  </svg>
);

/* ---------- nav ---------- */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full pt-4 px-4 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-5xl rounded-full border-[3px] border-ink bg-[oklch(0.995_0.005_95/0.95)] backdrop-blur-md shadow-[4px_4px_0_0_var(--color-ink)] py-2 px-4 sm:px-6 flex items-center justify-between gap-4 pointer-events-auto relative">
        <a href="#top" className="flex min-w-0 items-center pl-1 sm:pl-2">
          <div className="min-w-0 leading-tight">
            <div className="flex flex-col">
              <div className="relative inline-flex items-center select-none font-bold pb-1 pt-0.5">
                {/* Left-top burst decoration for "Ask" */}
                <svg viewBox="0 0 24 24" className="absolute -left-3.5 -top-2.5 w-4 h-4 text-ink pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="8" y1="12" x2="2" y2="10" />
                  <line x1="10" y1="8" x2="6" y2="2" />
                  <line x1="14" y1="8" x2="16" y2="2" />
                </svg>
                
                {/* "Ask" Text */}
                <span className="font-note text-[18px] sm:text-[20px] text-ink rotate-[-2deg] tracking-wide mr-1 font-bold">
                  Ask
                </span>
                
                {/* "Joy" Text with underline */}
                <span className="relative font-display text-[26px] sm:text-[28px] text-[#ffb000] rotate-[3deg] tracking-wide mr-1.5 font-bold leading-none">
                  Joy
                  {/* Hand-drawn yellow underline */}
                  <span className="absolute left-0 -bottom-1 w-[110%] h-[2.5px] bg-[#ffb000] rounded-full rotate-[-2deg] opacity-90" />
                </span>
                
                {/* "bhaiya" Text */}
                <span className="relative font-sketch text-[16px] sm:text-[18px] text-ink rotate-[-1deg] tracking-normal font-bold">
                  bhaiya
                  
                  {/* Question mark bubble "?" on top of bhaiya */}
                  <span className="absolute -top-[18px] left-[15%] bg-white border border-ink rounded-full w-3.5 h-3.5 flex items-center justify-center text-[7px] font-note text-ink shadow-[0.5px_0.5px_0_0_var(--color-ink)] rotate-12">
                    ?
                  </span>
                  
                  {/* Star doodle on top right of bhaiya */}
                  <span className="absolute -top-[14px] -right-2.5 text-[9px] text-ink rotate-12">
                    ⭐
                  </span>
                </span>
              </div>
              <div className="font-marker text-[9px] text-muted-foreground truncate hidden sm:block -mt-1 pl-1">your senior at Amity Kolkata 💌</div>
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-marker text-base">
          <a href="#help" className="hover:text-primary transition-colors">What I help with</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#meet" className="hover:text-primary transition-colors">Meet Joy</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="https://wa.me/qr/JKZXNSSVUYTFC1" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink bg-primary text-primary-foreground px-4 py-1.5 text-sm font-body font-semibold shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all">Book a call →</a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <a href="https://wa.me/qr/JKZXNSSVUYTFC1" target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink bg-primary text-primary-foreground px-3.5 py-1.5 text-xs font-body font-semibold shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all shrink-0">Book</a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-full border-2 border-ink bg-white shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none transition-all text-ink focus:outline-none shrink-0"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Animated) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="mx-auto max-w-[280px] mt-3 paper-card bg-[#fffdf9] p-5 border-[3px] border-ink shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl md:hidden pointer-events-auto relative z-30"
        >
          <div className="tape-strip bg-[var(--sun)] scale-75 -top-3 left-[35%]" />
          <nav className="flex flex-col gap-3 font-marker text-base text-center">
            <a
              href="#help"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:bg-black/5 rounded-lg transition-colors border-b border-dashed border-ink/10"
            >
              📝 What I help with
            </a>
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:bg-black/5 rounded-lg transition-colors border-b border-dashed border-ink/10"
            >
              🏷️ Pricing
            </a>
            <a
              href="#meet"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:bg-black/5 rounded-lg transition-colors border-b border-dashed border-ink/10"
            >
              👋 Meet Joy
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="py-1.5 hover:bg-black/5 rounded-lg transition-colors border-b border-dashed border-ink/10"
            >
              ❓ FAQ
            </a>
            <a
              href="https://wa.me/qr/JKZXNSSVUYTFC1"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full border-2 border-ink bg-primary text-primary-foreground py-2 text-sm font-body font-bold shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4" /> Book a call →
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 md:pt-16 pb-16 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
        <div className="relative">
          <div className="inline-flex items-center gap-2 sticky-note text-sm mb-6 -rotate-2">
            <Sparkles className="h-4 w-4" /> psst… real student. not a consultant.
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
            Thinking about joining{" "}
            <span className="relative inline-block">
              <span className="highlight-yellow">Amity University Kolkata?</span>
            </span>
          </h1>
          <p className="mt-6 font-body text-lg text-ink/80 max-w-xl">
            Get <span className="highlight-blue font-semibold">honest answers</span> from a recent graduate about placements,
            academics, hostels, internships, campus life, clubs &amp; everything in between.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="https://wa.me/918910376054" 
              onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Google Meet Session", price: "₹199" }); }}
              className="paper-card paper-card-hover bg-primary text-primary-foreground px-6 py-3 font-body font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <Video className="h-5 w-5" /> Book Google Meet
            </a>
            <a 
              href="https://wa.me/918910376054" 
              onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Ask a Question", price: "Free" }); }}
              className="paper-card paper-card-hover bg-white px-6 py-3 font-body font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" /> Ask a Question
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 font-marker text-base">
            {[
              { text: "🎓 Recent Graduate", bg: "bg-white", tilt: "-rotate-1" },
              { text: "🤝 Honest Guidance", bg: "bg-[var(--mint)]", tilt: "rotate-2" },
              { text: "✨ Real Experience", bg: "bg-[var(--sky)]", tilt: "-rotate-2" },
              { text: "💡 1-on-1 Advice", bg: "bg-[var(--pink)]", tilt: "rotate-1" },
              { text: "⚡ Quick Response", bg: "bg-[var(--sun)]", tilt: "-rotate-1" },
            ].map((item) => (
              <span
                key={item.text}
                className={`paper-card ${item.bg} px-3.5 py-1.5 ${item.tilt} hover:rotate-0 transition-transform duration-200 cursor-default`}
              >
                {item.text}
              </span>
            ))}
          </div>

          <Doodle className="absolute -bottom-6 -left-4 w-24 h-12 text-ink/60 hidden md:block" />
        </div>

        {/* collage */}
        <div className="relative h-[620px] sm:h-[680px]">
          {/* Main scrapbook base (Polaroid style) */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4, rotate: -1.5 }}
            className="absolute left-2 top-4 w-[76%] paper-card bg-white p-3.5 pb-8 flex flex-col gap-3 shadow-[6px_6px_0_0_var(--color-ink)]"
          >
            {/* Polaroid photo frame */}
            <div className="border-[3px] border-ink rounded-xl overflow-hidden bg-slate-100">
              <img src="/image copy.png" alt="Amity Campus" className="w-full h-[320px] object-cover" />
            </div>
            
            {/* Caption */}
            <div className="flex items-center justify-between px-1">
              <span className="font-hand text-[19px] font-bold text-ink rotate-[-1deg] leading-none">
                Campus Diaries 📝
              </span>
              <span className="font-marker text-[11px] text-ink/65 rotate-[1.5deg]">
                Amity Kolkata 📍
              </span>
            </div>
          </motion.div>

          {/* Decorative scrapbook illustrations in the center bottom empty space */}
          <div className="absolute left-[33%] top-[395px] w-48 h-24 hidden md:block select-none pointer-events-none z-10">
            {/* Coffee Stain */}
            <CoffeeStain className="absolute left-[-20px] top-[-10px] w-24 h-24 text-amber-950/10" />
            
            {/* Hand-drawn Arrow pointing down-right */}
            <svg className="absolute right-[10px] top-[15px] w-14 h-14 text-ink/70 -rotate-12" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 20 C 40 10, 70 30, 80 70" strokeDasharray="4 4" />
              <path d="M68 58 L80 70 L88 60" />
            </svg>
          </div>

          {/* Card 1: What Juniors Ask (Replaces Polaroid 1: Lawn friends) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }} animate={{ opacity: 1, scale: 1, rotate: 6 }} transition={{ delay: 0.15, duration: 0.5 }}
            whileHover={{ y: -6, rotate: 3 }}
            className="absolute right-[-15px] top-[-10px] w-52 bg-[#e6f4fe] border-[3px] border-ink p-4 shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl z-10"
          >
            {/* Blue Tape Strip */}
            <div className="absolute -top-3.5 left-[30%] w-16 h-5 bg-[#005bff] rotate-2 shadow-sm rounded-sm" />
            
            <div className="relative inline-block mb-3.5">
              <h3 className="font-hand text-lg font-bold text-ink pr-2">What Juniors Ask Me</h3>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#005bff]" />
            </div>

            <ul className="space-y-2.5 font-hand text-[13px] text-ink/90 leading-tight">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005bff] shrink-0" />
                <span>Placements reality? 💼</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005bff] shrink-0" />
                <span>Hostel vs Local PG? 🏠</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005bff] shrink-0" />
                <span>Is 75% attendance strict? ⚠️</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005bff] shrink-0" />
                <span>Scholarship criteria? 🎓</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005bff] shrink-0" />
                <span>Direct admission trap? ❌</span>
              </li>
            </ul>

            {/* Custom Blue Curved Arrow SVG */}
            <div className="absolute bottom-1 right-2 pointer-events-none">
              <svg className="w-10 h-10 text-[#005bff]" fill="none" viewBox="0 0 36 36" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M30 4 C 30 16, 24 26, 12 28" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 22 L 10 28 L 18 34" />
              </svg>
            </div>
          </motion.div>

          {/* Card 2: Have Questions? Call Now! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            whileHover={{ y: -6, rotate: 2 }}
            className="absolute right-[-20px] top-[245px] w-48 bg-[#fff0f3] border-[3px] border-ink p-4 pb-3.5 shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl z-20"
          >
            {/* Pink Washi Tape Strip */}
            <div className="absolute -top-3.5 left-[30%] w-16 h-5 bg-[#ff2d55]/85 rotate-2 shadow-sm rounded-sm" />
            
            <div className="relative inline-block mb-2">
              <h3 className="font-hand text-[15.5px] font-bold text-ink pr-2">📞 Have Questions?</h3>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff2d55]" />
            </div>
            
            <p className="font-hand text-[13px] leading-snug text-ink/90 mb-3">
              Stop guessing or reading fake reviews online. Get your doubts cleared directly!
            </p>
            
            <a 
              href="https://wa.me/918910376054" 
              onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Ask Bhaiya Q&A", price: "Free" }); }}
              className="relative z-10 block text-center rounded-xl border-2 border-ink bg-[#ff2d55] text-white py-1.5 text-xs font-body font-bold shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              Ask Bhaiya ⚡
            </a>

            {/* Custom Pink Phone/Chat SVG */}
            <div className="absolute bottom-1 right-2 pointer-events-none opacity-20">
              <svg className="w-8 h-8 text-[#ff2d55]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </motion.div>

          {/* Card 3: Hey, I'm Joy profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            whileHover={{ y: -6, rotate: -1 }}
            className="absolute left-[-20px] top-[260px] w-64 sm:w-72 bg-white border-[3px] border-ink p-3.5 shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl z-30 flex flex-col gap-2.5"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-ink overflow-hidden shrink-0 bg-slate-100">
                <img src="/me.jpeg" alt="Joy" className="w-full h-full object-cover" />
              </div>
              <div className="leading-snug">
                <h3 className="font-display text-lg sm:text-xl flex items-center gap-1">
                  Hey, I'm Joy <span className="animate-wave origin-[70%_70%] inline-block">👋</span>
                </h3>
                <p className="font-body text-[11px] sm:text-xs font-semibold text-blue-600 mt-0.5">
                  Amity University Kolkata Alumni
                </p>
                <ul className="mt-2 space-y-1 text-[10px] sm:text-xs font-marker text-ink/90">
                  <li className="flex items-center gap-1.5">
                    <span className="text-red-500 text-[10px]">🔴</span> Content Creator
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-amber-500 text-[10px]">🎨</span> UI/UX Designer
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-blue-500 text-[10px]">👥</span> Campus Guide & Mentor
                  </li>
                </ul>
              </div>
            </div>

            {/* Overlapping Blue Pill */}
            <div className="relative mt-1">
              {/* Hand-drawn Arrow SVG */}
              <svg className="absolute -left-4 -top-6 w-8 h-8 text-ink hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 15l-7 7-7-7" />
              </svg>
              <div className="bg-[#1d4ed8] text-white py-2 px-3 rounded-xl border-2 border-ink shadow-[3px_3px_0_0_var(--color-ink)] flex items-center justify-between gap-2 rotate-1">
                <span className="font-hand text-xs sm:text-sm leading-tight text-white">
                  Helping students make better college decisions
                </span>
                <Heart className="w-4 h-4 text-white shrink-0 fill-white/20" />
              </div>
            </div>
          </motion.div>

          {/* Card: Wish I had this (From attached user image) */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -6, rotate: 0 }}
            className="absolute right-4 bottom-10 w-48 bg-[#005bff] border-[3px] border-ink p-4 shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl z-20 flex flex-col gap-3 text-white"
          >
            {/* Quote Mark */}
            <span className="text-yellow-400 text-6xl font-serif leading-none h-6 block mb-2 select-none">“</span>
            
            {/* Text and Smiley row */}
            <div className="relative">
              <p className="font-hand text-lg leading-snug text-white pr-6">
                "Wish I had this when I was{" "}
                <span className="relative inline-block">
                  applying!"
                  <span className="absolute left-0 bottom-1 w-full h-[3px] bg-yellow-400 rounded-full" />
                </span>
              </p>
              {/* Floating Smiley */}
              <div className="absolute right-0 bottom-[-10px] transform translate-y-1">
                <svg className="w-8 h-8 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h.01M16 9h.01M9 15a3.5 3.5 0 006 0" />
                </svg>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/20">
              <span className="font-body text-[11px] text-white/90 font-semibold">
                — Literally every junior
              </span>
              <Heart className="w-4 h-4 text-white shrink-0 fill-none" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Card: Joy's Quick Tips in Red Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            whileHover={{ y: -6, rotate: 0 }}
            className="absolute left-[16%] bottom-10 w-52 bg-[#fff0f0] border-[3px] border-ink p-3.5 pb-2.5 shadow-[4px_4px_0_0_var(--color-ink)] rounded-2xl z-30"
          >
            {/* Red Tape Strip */}
            <div className="absolute -top-3.5 left-[30%] w-16 h-5 bg-[#ff3b30] -rotate-2 shadow-sm rounded-sm" />
            
            <div className="relative inline-block mb-2">
              <h3 className="font-hand text-lg font-bold text-ink pr-2">💡 Joy's Quick Tips</h3>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff3b30]" />
            </div>

            <ul className="space-y-1.5 font-hand text-[12.5px] text-ink/90 leading-tight">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                <span>75% attendance rule is real! ⚠️</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                <span>Placements: CSE is best 💻</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                <span>Chai spot: opposite gate ☕</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b30] shrink-0" />
                <span>Lab: sit near wall for cheating 🤫</span>
              </li>
            </ul>

            {/* Custom Red Curved Arrow SVG */}
            <div className="absolute bottom-1 right-2 pointer-events-none">
              <svg className="w-10 h-10 text-[#ff3b30]" fill="none" viewBox="0 0 36 36" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M30 4 C 30 16, 24 26, 12 28" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 22 L 10 28 L 18 34" />
              </svg>
            </div>
          </motion.div>



          <StarDoodle className="absolute top-2 left-1/2 w-6 h-6 text-primary" />
          <StarDoodle className="absolute bottom-24 right-1/2 w-4 h-4 text-secondary" />
        </div>
      </div>
    </section>
  );
}

/* ---------- custom illustrations for pricing ---------- */
const PhoneIllustration = () => (
  <motion.div
    whileHover={{ rotate: 12, scale: 1.1 }}
    className="relative w-20 h-20 flex items-center justify-center shrink-0 cursor-pointer"
  >
    <div className="absolute inset-0 bg-[var(--mint)] border-2 border-ink rounded-full rotate-6 shadow-[2px_2px_0_0_var(--color-ink)]" />
    <svg viewBox="0 0 100 100" className="relative w-12 h-12" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="35" y="15" width="30" height="55" rx="6" fill="white" />
      <rect x="40" y="21" width="20" height="36" rx="2" fill="var(--color-sky)" strokeWidth="2.5" />
      <line x1="46" y1="18" x2="54" y2="18" strokeWidth="2.5" />
      <circle cx="50" cy="63" r="2.5" fill="var(--color-ink)" />
      <path d="M12 32 C12 24 24 24 24 32 C24 36 21 38 18 40 L15 42 L16 38 C14 37 12 35 12 32 Z" fill="var(--color-sun)" strokeWidth="2.5" />
      <path d="M72 32 L74 27 L79 26 L74 25 L72 20 L70 25 L65 26 L70 27 Z" fill="var(--color-sun)" strokeWidth="2" />
      <path d="M74 52 C72 50 68 50 66 52 C64 54 64 58 66 60 L74 67 L82 60 C84 58 84 54 82 52 C80 50 76 50 74 52 Z" fill="var(--color-pink)" strokeWidth="2" />
    </svg>
  </motion.div>
);

const VideoIllustration = () => (
  <motion.div
    whileHover={{ rotate: -12, scale: 1.1 }}
    className="relative w-20 h-20 flex items-center justify-center shrink-0 cursor-pointer"
  >
    <div className="absolute inset-0 bg-accent border-2 border-ink rounded-2xl -rotate-6 shadow-[2px_2px_0_0_var(--color-ink)]" />
    <svg viewBox="0 0 100 100" className="relative w-12 h-12" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="20" y="24" width="60" height="42" rx="4" fill="white" />
      <rect x="25" y="29" width="50" height="31" rx="2" fill="var(--color-mint)" strokeWidth="2.5" />
      <path d="M10 66 L90 66 L84 74 L16 74 Z" fill="var(--color-ink)" />
      <circle cx="50" cy="40" r="6" fill="white" strokeWidth="2.5" />
      <path d="M38 54 C38 48 44 47 50 47 C56 47 62 48 62 54 Z" fill="white" strokeWidth="2.5" />
      <path d="M14 20 L16 16 L20 15 L16 14 L14 10 L12 14 L8 15 L12 16 Z" fill="var(--color-sun)" strokeWidth="2" />
      <path d="M82 20 L84 16 L88 15 L84 14 L82 10 L80 14 L76 15 L80 16 Z" fill="var(--color-sun)" strokeWidth="2" />
    </svg>
  </motion.div>
);

const ChatIllustration = () => (
  <motion.div
    whileHover={{ rotate: 15, scale: 1.1 }}
    className="relative w-20 h-20 flex items-center justify-center shrink-0 cursor-pointer"
  >
    <div className="absolute inset-0 bg-[var(--pink)] border-2 border-ink rounded-2xl rotate-6 shadow-[2px_2px_0_0_var(--color-ink)]" />
    <svg viewBox="0 0 100 100" className="relative w-12 h-12" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 25 H68 C72 25 75 28 75 32 V52 C75 56 72 59 68 59 H45 L28 72 V59 H22 C18 59 15 56 15 52 V32 C15 28 18 25 22 25 Z" fill="white" />
      <line x1="28" y1="42" x2="28" y2="42" strokeWidth="4.5" stroke="var(--color-ink)" />
      <line x1="36" y1="36" x2="36" y2="48" strokeWidth="3.5" stroke="var(--color-ink)" />
      <line x1="44" y1="32" x2="44" y2="52" strokeWidth="3.5" stroke="var(--color-ink)" />
      <line x1="52" y1="38" x2="52" y2="46" strokeWidth="3.5" stroke="var(--color-ink)" />
      <line x1="60" y1="41" x2="60" y2="43" strokeWidth="3.5" stroke="var(--color-ink)" />
      <path d="M68 62 L74 67 L80 62" fill="none" strokeWidth="2.5" />
      <path d="M78 20 L80 16 L84 15 L80 14 L78 10 L76 14 L72 15 L76 16 Z" fill="var(--color-sun)" strokeWidth="2" />
    </svg>
  </motion.div>
);

/* ---------- urgent help / pricing ---------- */
const TIERS = [
  {
    name: "Chat & Voice Notes", price: "Free", originalPrice: "₹69", dur: "slower response", illustration: ChatIllustration,
    perks: ["Ask doubts via chat", "Send voice notes", "Slower response times", "No scheduling needed", "1-on-1 personal chat"],
    cta: "Start Chatting", popular: false, tilt: "-rotate-2",
  },
  {
    name: "Quick Doubt Call", price: "₹99", dur: "up to 30 min call", illustration: PhoneIllustration,
    perks: ["Admissions doubts", "Hostel questions", "Placement questions", "Fee structure", "Scholarships"],
    cta: "Book Now", popular: true, tilt: "rotate-1",
  },
  {
    name: "Google Meet Session", price: "₹199", dur: "30 min session", illustration: VideoIllustration,
    perks: ["Detailed discussion", "Joy bhaiya will share the screen and show you the details of his personal experiences and all", "Campus insights", "Career guidance", "Follow-up support"],
    cta: "Schedule Meet", popular: false, tilt: "-rotate-1",
  },
];

function Pricing() {
  const [showMorePackages, setShowMorePackages] = useState(false);

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block sticky-note -rotate-3 mb-5">⚡ urgent help available today</div>
          <h2 className="font-display text-5xl md:text-6xl">
            <span className="highlight-yellow">Need answers fast?</span>
          </h2>
          <p className="mt-4 font-marker text-lg text-ink/70">
            Book a quick call and get your doubts solved instantly. No fluff, no sales pitch — just real talk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TIERS.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -8, rotate: 0 }}
              className={`relative paper-card bg-white p-7 ${t.tilt}`}
            >
              {t.popular && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-4, 0, -4] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute -top-6 left-6 z-20 -rotate-3"
                >
                  <div className="bg-[#FFE600] text-ink border-2 border-ink px-4 py-1.5 rounded-lg shadow-[4px_4px_0_0_var(--color-ink)] font-marker text-sm font-bold flex items-center gap-1.5">
                    <span>🔥</span>
                    <span className="tracking-wide">MOST POPULAR</span>
                    <span>🔥</span>
                  </div>
                </motion.div>
              )}
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="font-sketch text-2xl font-bold">{t.name}</div>
                  <div className="font-marker text-sm text-ink/65 mt-0.5">Direct senior to junior advice like a brother</div>
                </div>
                <t.illustration />
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                {t.originalPrice && (
                  <span className="font-display text-3xl line-through text-ink/40 mr-1.5 align-middle self-center">
                    {t.originalPrice}
                  </span>
                )}
                <span className="relative inline-block font-display text-6xl">
                  {t.popular ? (
                    <span className="highlight-yellow">{t.price}</span>
                  ) : (
                    <span className="highlight-blue">{t.price}</span>
                  )}
                </span>
                <span className="font-marker text-ink/60">/ {t.dur}</span>
              </div>
              <ul className="mt-5 space-y-2 font-body text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="h-5 w-5 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-ink stroke-[3px]" />
                    </span>
                    <span className="font-body text-ink/80 text-sm">{p}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/918910376054" 
                onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: t.name, price: t.price }); }}
                className={`mt-7 paper-card paper-card-hover block text-center py-3 font-body font-semibold cursor-pointer ${t.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-ink"}`}
              >
                {t.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* More Offers of Packages Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowMorePackages(!showMorePackages)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border-[3px] border-ink bg-[#ffb000] hover:bg-[#e09b00] active:scale-98 text-ink font-marker text-md font-bold shadow-[4px_4px_0_0_var(--color-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer rotate-[-1deg] select-none"
          >
            {showMorePackages ? "✨ Hide Extra Packages" : "📦 More Offers of Packages"}
            <span className="text-xs transition-transform duration-200">{showMorePackages ? "▲" : "▼"}</span>
          </button>
        </div>

        {/* Collapsible New Packages */}
        {showMorePackages && (
          <div className="mt-14 max-w-4xl mx-auto">
            {/* Title Card */}
            <div className="text-center mb-10">
              <span className="inline-block sticky-note bg-[var(--mint)] rotate-2 mb-3">🏷️ Mentorship & Guidance Bundles</span>
              <h3 className="font-display text-4xl text-ink">
                Specialized Mentorship Offers — <span className="highlight-yellow">₹99 each</span>
              </h3>
              <p className="font-marker text-ink/75 text-sm mt-1.5">
                Targeted problem-solving sessions for your specific life & academic bottlenecks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Confused in Life & Need Guidance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, rotate: 0 }}
                className="paper-card bg-white p-7 border-[3px] border-ink shadow-[5px_5px_0_0_var(--color-ink)] rounded-2xl -rotate-1 relative overflow-hidden"
              >
                {/* Visual tape decoration */}
                <div className="absolute -top-3.5 left-[30%] w-16 h-5 bg-[#ff3b30]/20 -rotate-2 rounded-sm" />
                
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-sketch text-2xl font-bold text-ink leading-tight">Confused in Life? 🧭</h4>
                    <p className="font-marker text-[11px] text-ink/65 mt-0.5">Need Guidance & Direction</p>
                  </div>
                  <div className="h-12 w-12 shrink-0 bg-[var(--pink)] border-2 border-ink rounded-xl flex items-center justify-center font-bold text-lg select-none">
                    🎯
                  </div>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3.5xl line-through text-ink/30 mr-1">₹199</span>
                  <span className="font-display text-5xl highlight-yellow">₹99</span>
                  <span className="font-marker text-ink/60">/ 35 min call</span>
                </div>

                <p className="mt-4 font-hand text-sm text-ink/85 leading-snug">
                  "Confused in life, what to do next, and need guidance?" If you're feeling lost about career roadmaps, college options, or where to focus your hustle, let's sit down and chart a step-by-step action plan.
                </p>

                <ul className="mt-5 space-y-2 font-body text-xs text-ink/90">
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>Clarity on fields & skillsets to focus on</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>Realistic career opportunities breakdown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>A personalized step-by-step roadmap</span>
                  </li>
                </ul>

                <a 
                  href="https://wa.me/918910376054" 
                  onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Confused in Life? Guidance & Direction", price: "₹99" }); }}
                  className="mt-6 paper-card paper-card-hover block text-center py-3 bg-[var(--sun)] text-ink font-body font-semibold text-sm border-2 border-ink shadow-[2.5px_2.5px_0_0_var(--color-ink)] cursor-pointer"
                >
                  Book Direction Call ⚡
                </a>
              </motion.div>

              {/* Card 2: Recently passed 12th decision */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                whileHover={{ y: -6, rotate: 0 }}
                className="paper-card bg-white p-7 border-[3px] border-ink shadow-[5px_5px_0_0_var(--color-ink)] rounded-2xl rotate-1 relative overflow-hidden"
              >
                {/* Visual tape decoration */}
                <div className="absolute -top-3.5 left-[35%] w-16 h-5 bg-[#4cd964]/20 rotate-1 rounded-sm" />

                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-sketch text-2xl font-bold text-ink leading-tight">12th Passed Crossroads 🎓</h4>
                    <p className="font-marker text-[11px] text-ink/65 mt-0.5">Should you drop or take admission?</p>
                  </div>
                  <div className="h-12 w-12 shrink-0 bg-[var(--sky)] border-2 border-ink rounded-xl flex items-center justify-center font-bold text-lg select-none">
                    💡
                  </div>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-3.5xl line-through text-ink/30 mr-1">₹199</span>
                  <span className="font-display text-5xl highlight-blue">₹99</span>
                  <span className="font-marker text-ink/60">/ 35 min call</span>
                </div>

                <p className="mt-4 font-hand text-sm text-ink/85 leading-snug">
                  "I have recently passed out 12th and I'm thinking, I'm so confused, I don't know what to do. Should I re-attempt exam or not?" Let's analyze your drop year potential vs private college backups.
                </p>

                <ul className="mt-5 space-y-2 font-body text-xs text-ink/90">
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>Drop vs Admission honest comparison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>Backup planning & private college realities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[var(--mint)] border border-ink flex items-center justify-center shrink-0">
                      <Check className="h-2.5 w-2.5 text-ink stroke-[3px]" />
                    </span>
                    <span>JEE/WBJEE re-attempt feasibility check</span>
                  </li>
                </ul>

                <a 
                  href="https://wa.me/918910376054" 
                  onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "12th Passed Crossroads Call", price: "₹99" }); }}
                  className="mt-6 paper-card paper-card-hover block text-center py-3 bg-[var(--mint)] text-ink font-body font-semibold text-sm border-2 border-ink shadow-[2.5px_2.5px_0_0_var(--color-ink)] cursor-pointer"
                >
                  Book Crossroads Call ⚡
                </a>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- help with (masonry) ---------- */
const HELP = [
  { t: "Admissions", icon: GraduationCap, color: "bg-accent", rot: "-rotate-2", note: "cutoffs, forms, scholarships", img: admissionsSticker },
  { t: "Placements", icon: Briefcase, color: "bg-secondary", rot: "rotate-1", note: "honest stats, top recruiters", img: placementsSticker },
  { t: "Hostels", icon: Home, color: "bg-[var(--mint)]", rot: "-rotate-1", note: "rooms, food, vibes", img: hostelsSticker },
  { t: "Academics", icon: BookOpen, color: "bg-[var(--pink)]", rot: "rotate-2", note: "courses, faculty, grading", img: academicsSticker },
  { t: "Internships", icon: Briefcase, color: "bg-accent", rot: "rotate-1", note: "how seniors get them", img: internshipsSticker },
  { t: "Scholarships", icon: Award, color: "bg-secondary", rot: "-rotate-2", note: "merit & need based", img: scholarshipsSticker },
  { t: "Campus Life", icon: Coffee, color: "bg-[var(--mint)]", rot: "rotate-2", note: "daily life, food, hangouts", img: campusLifeSticker },
  { t: "Events & Fests", icon: Sparkles, color: "bg-[var(--pink)]", rot: "-rotate-1", note: "the BIG ones to attend", img: eventsFestsSticker },
  { t: "Student Clubs", icon: Users, color: "bg-accent", rot: "rotate-1", note: "which to actually join", img: studentClubsSticker },
];

function HelpWith() {
  return (
    <section id="help" className="py-20 px-4 sm:px-6 bg-[oklch(0.97_0.02_250/0.4)]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <div className="font-marker text-primary mb-2">↓ pinned on my board</div>
          <h2 className="font-display text-5xl md:text-6xl">What can I help with?</h2>
          <Squiggle className="w-40 text-primary mt-1" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
          {HELP.map((h, i) => (
            <motion.div
              key={h.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card bg-white p-3.5 sm:p-6 ${h.rot} flex justify-between items-start gap-2 sm:gap-4 overflow-hidden relative min-h-[130px] sm:min-h-[200px]`}
            >
              <div className="flex-1 min-w-0">
                <div className={`h-9 w-9 sm:h-12 sm:w-12 grid place-items-center rounded-xl sm:rounded-2xl border-2 border-ink ${h.color}`}>
                  <h.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-display text-xl sm:text-3xl mt-2 sm:mt-3">{h.t}</h3>
                <p className="font-marker text-ink/70 mt-1 text-[11px] sm:text-sm leading-snug">{h.note}</p>
              </div>
              {h.img && (
                <div className="relative w-12 h-12 sm:w-24 sm:h-24 shrink-0 self-center">
                  <div className="tape-strip scale-50 -top-3 hidden sm:block" />
                  <img
                    src={h.img}
                    alt={h.t}
                    className="w-full h-full object-contain rotate-3 hover:rotate-0 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetJoy() {
  const tags = [
    { text: "🎥 Content Creator", bg: "bg-[var(--mint)]", tilt: "rotate-1" },
    { text: "🎨 UI/UX Designer", bg: "bg-[var(--sky)]", tilt: "-rotate-1" },
    { text: "🎓 Amity Alumni", bg: "bg-[var(--pink)]", tilt: "rotate-2" },
    { text: "🚀 Career Explorer", bg: "bg-[var(--sun)]", tilt: "-rotate-2" },
    { text: "🤝 Student Mentor", bg: "bg-white", tilt: "rotate-1" },
  ];

  return (
    <section id="meet" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl paper-card bg-[#fffcf5] p-6 sm:p-8 grid md:grid-cols-[240px_1fr] gap-8 md:gap-10 items-center relative overflow-hidden -rotate-[0.5deg]">
        {/* Notebook page red line decoration */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-400/20 hidden sm:block" />

        {/* Left Side: Compact Polaroid */}
        <div className="relative mx-auto shrink-0 z-10 pl-2">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="paper-card bg-white p-3 -rotate-4 shadow-lg cursor-pointer"
          >
            <div className="tape-strip bg-primary/10" />
            <img src="/me.jpeg" alt="Joy, your Amity Kolkata mentor" className="w-48 h-56 object-cover rounded-md" width={300} height={350} loading="lazy" />
            <div className="font-display text-2xl text-center mt-2.5 text-ink">— Joy ✿</div>
          </motion.div>
          <div className="absolute -right-4 -bottom-3 sticky-note text-xs rotate-6 bg-[var(--sun)]">
            hi, i'm joy!
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-4">
          <div>
            <div className="font-display text-3xl text-primary -rotate-2 origin-left inline-block">Meet your mentor</div>
            <h2 className="font-hand text-4xl md:text-5xl leading-none mt-2">Hey, I'm Joy 👋</h2>
          </div>

          <div className="font-marker text-lg text-ink/85 space-y-3 leading-snug">
            <p>
              I'm a <span className="highlight-yellow">recent graduate from Amity University Kolkata</span>, a content creator, UI/UX designer,
              and someone who's spent years helping students navigate college decisions.
            </p>
            <p>
              Over time, I found myself answering the same questions again and again in Instagram DMs — placements, hostels, academics, campus life, internships, and what college is actually like.
            </p>
            <p>
              So instead of replying to hundreds of messages individually, I created Ask Joy Bhaiya — a place where you can get honest, unfiltered answers directly from someone who's been through it.
            </p>
          </div>

          <p className="font-hand text-xl text-primary font-bold pt-1">
            Real experience. Honest advice. No agents. No sugarcoating. ✨
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((t) => (
              <span
                key={t.text}
                className={`paper-card ${t.bg} px-3 py-1 text-xs font-marker ${t.tilt} hover:rotate-0 transition-transform duration-200 cursor-default`}
              >
                {t.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- trust section ---------- */
function Trust() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-[oklch(0.97_0.03_90/0.2)]">
      <div className="mx-auto max-w-4xl paper-card bg-white p-6 sm:p-8 grid md:grid-cols-[1fr_300px] gap-8 items-center relative overflow-hidden rotate-[0.5deg] border-[3px] border-ink shadow-[6px_6px_0_0_var(--color-ink)] rounded-2xl">
        <div className="tape-strip bg-[var(--pink)] scale-90 -top-3 left-[15%] z-10" />
        
        <div className="space-y-4">
          <div>
            <span className="font-marker text-xs text-primary block mb-1">↓ real talk / trust check</span>
            <h3 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
              Will I get scammed if I pay?
            </h3>
          </div>
          
          <div className="font-marker text-ink/95 space-y-4 leading-relaxed">
            <p className="text-2xl sm:text-3xl font-bold text-primary -rotate-1 origin-left">
              Arre bilkul nahi, bro! 😂
            </p>
            <p className="text-base sm:text-lg">
              Main koi random agent ya anonymous consultancy company nahi hu jo paise lekar gayab ho jaye.
            </p>
            <p className="text-base sm:text-lg">
              Mera real name <strong>Joydeep Das</strong> hai. Main Amity Kolkata B.Tech CSE ka passout graduate hu.
            </p>
            <p className="text-base sm:text-lg">
              Ye side me mera real, personal Instagram handle <strong>@jethalal.das</strong> hai (1,800+ real followers). Wahan main campus fests, hostel aur college life ke memes post karta rehta hu, aur juniors ka messages ka reply deta hu.
            </p>
          </div>
          
          <div className="pt-2">
            <a 
              href="https://www.instagram.com/jethalal.das/?utm_source=ig_web_button_share_sheet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[var(--pink)] text-white px-5 py-2 font-body font-semibold text-sm shadow-[3px_3px_0_0_var(--color-ink)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all"
            >
              <Instagram className="w-4 h-4" /> Check My Instagram Profile
            </a>
          </div>
        </div>

        {/* Instagram Screenshot Display */}
        <div className="relative mx-auto w-full max-w-[260px] md:max-w-full rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="tape-strip bg-[var(--sun)] scale-75 -top-3 right-4 z-10" />
          <img 
            src="/image copy 3.png" 
            alt="Joy's Instagram Profile (jethalal.das)" 
            className="border-[3px] border-ink rounded-xl shadow-[4px_4px_0_0_var(--color-ink)] w-full object-cover" 
            width={260}
            height={160}
            onError={(e) => {
              e.currentTarget.src = "/image.png";
            }}
          />
          <div className="absolute -bottom-2 -left-2 bg-white border border-ink px-2 py-0.5 font-hand text-xs -rotate-6 shadow-sm">
            @jethalal.das 📱
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- gallery ---------- */
function Gallery() {
  const photos = [
    { src: "/image copy.png", label: "the main building 💚", rot: "-rotate-3", col: "md:col-span-2" },
    { src: campus2, label: "library days", rot: "rotate-2", col: "" },
    { src: campus3, label: "lawn squad", rot: "-rotate-2", col: "" },
    { src: campus4, label: "hostel cozy hours", rot: "rotate-3", col: "md:col-span-2" },
  ];
  return (
    <section className="py-20 px-4 sm:px-6 bg-[oklch(0.98_0.02_90/0.5)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="font-marker text-primary">my camera roll, basically</div>
          <h2 className="font-display text-5xl md:text-6xl">📸 Campus Diary</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {photos.map((p) => (
            <motion.div
              key={p.label}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card bg-white p-3 ${p.rot} ${p.col}`}
            >
              <div className="tape-strip" />
              <img src={p.src} alt={p.label} className="w-full h-64 object-cover rounded-md" width={800} height={800} loading="lazy" />
              <div className="font-hand text-lg text-center mt-2">{p.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- reviews ---------- */
const REVIEWS = [
  { name: "Ananya R.", quote: "Joy literally saved my admission decision. He told me stuff no agent ever would. Worth every rupee!", color: "bg-secondary", rot: "-rotate-2" },
  { name: "Rohan M.", quote: "Booked the ₹99 call before paying the hostel fee. Best 99 rupees I have ever spent.", color: "bg-accent", rot: "rotate-2" },
  { name: "Priya K.", quote: "Got honest answers about placements in my branch. No sugar coating, just facts. Loved it.", color: "bg-[var(--mint)]", rot: "rotate-1" },
  { name: "Aarav S.", quote: "The Google Meet was so chill. Felt like talking to an older brother, not a counsellor.", color: "bg-[var(--pink)]", rot: "-rotate-1" },
];

function Reviews() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="font-marker text-primary">pinned to my wall</div>
          <h2 className="font-display text-5xl md:text-6xl">Juniors who said yes 💌</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((r) => (
            <motion.div
              key={r.name}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card p-5 ${r.color} ${r.rot}`}
            >
              <p className="font-hand text-lg leading-snug">"{r.quote}"</p>
              <div className="font-marker text-sm mt-3">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- faq ---------- */
const FAQ = [
  { q: "How are placements at Amity Kolkata, really?", a: "Honest take: top branches (CSE, IT) see decent tech placements (5–12 LPA range for most). Non-tech depends a lot on your own hustle. I'll share real numbers from my batch on the call." },
  { q: "Is the hostel compulsory?", a: "No, it's optional. But if you're from out of station, I genuinely recommend at least your first year — the friendships you make here are 80% of your college experience." },
  { q: "Are the scholarships actually given?", a: "Yes, but the criteria are stricter than the website suggests. I'll walk you through what's realistic for your 12th/JEE scores." },
  { q: "What's the food situation?", a: "Mess food is okay, not great. But there are amazing cafes on and around campus. I'll send you my personal food map after the call 🍜" },
  { q: "Do I need a laptop from day 1?", a: "For CSE/IT yes, for others not immediately. I'll tell you the realistic spec and where to buy without getting scammed." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-[oklch(0.97_0.03_250/0.4)]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="font-marker text-primary">the real questions</div>
          <h2 className="font-display text-5xl md:text-6xl">FAQs from your group chat</h2>
        </div>
        <div className="space-y-5">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`paper-card bg-white overflow-hidden ${i % 2 ? "rotate-[0.3deg]" : "-rotate-[0.3deg]"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex gap-4 items-start"
                >
                  <span className="font-display text-3xl text-primary shrink-0 leading-none">Q.</span>
                  <span className="font-sketch text-lg flex-1">{f.q}</span>
                  <span className="font-display text-2xl">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pl-16 flex gap-4">
                    <span className="font-display text-3xl text-secondary-foreground shrink-0 leading-none -ml-12">A.</span>
                    <p className="font-hand text-lg text-ink/85">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- booking ---------- */
function Booking() {
  return (
    <section id="book" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <div className="relative">
          <div className="font-marker text-primary mb-2">↓ skip the formal forms</div>
          <h2 className="font-display text-5xl md:text-6xl leading-none">Got doubts? Ask directly</h2>
          <p className="mt-4 font-hand text-lg">
            No long registration forms, no boring consultancies. Just click below or message directly to clear your doubts in Hinglish or English.
          </p>
          <div className="mt-8 flex flex-col gap-4 max-w-md lg:max-w-xs">
            <div className="sticky-note -rotate-1 w-full">
              💬 Tip: placements, hostels, or admission reality—feel free to ask anything unfiltered.
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-full">
              <div className="paper-card bg-white p-3.5 rotate-1 flex flex-col justify-center">
                <div className="font-display text-lg sm:text-xl md:text-2xl leading-none">⚡ Fast Reply</div>
                <div className="font-marker text-[11px] sm:text-xs text-ink/70 mt-1">usually within 1-2 hours</div>
              </div>
              <div className="paper-card bg-white p-3.5 -rotate-1 flex flex-col justify-center">
                <div className="font-display text-lg sm:text-xl md:text-2xl leading-none">🤝 Real Senior</div>
                <div className="font-marker text-[11px] sm:text-xs text-ink/70 mt-1">direct, honest, no sugarcoating</div>
              </div>
            </div>
          </div>
          <svg viewBox="0 0 200 100" className="absolute -right-4 top-32 w-32 text-primary hidden lg:block" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M10 80 Q 80 10, 180 50" />
            <path d="M170 40 L182 50 L172 62" />
          </svg>
        </div>

        <div className="relative w-full max-w-sm mx-auto">
          {/* Funky Doodle Phone Wrapper */}
          <div className="relative mx-auto max-w-[340px] w-full bg-ink p-3 rounded-[3rem] border-[4px] border-ink shadow-[8px_8px_0_0_var(--color-ink)] flex flex-col h-[530px] rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 z-10">
            {/* Phone Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4 bg-ink rounded-b-xl z-20 flex items-center justify-center gap-1.5">
              <div className="w-10 h-0.5 bg-white/20 rounded-full" />
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            </div>

            {/* Phone Side Buttons */}
            <div className="absolute -left-[10px] top-24 w-[6px] h-8 bg-ink rounded-l-md" />
            <div className="absolute -left-[10px] top-36 w-[6px] h-12 bg-ink rounded-l-md" />
            <div className="absolute -right-[10px] top-28 w-[6px] h-16 bg-ink rounded-r-md" />

            {/* Floating Doodle Decals */}
            <div className="absolute -right-8 -top-8 text-4xl select-none animate-bounce duration-1000 hidden sm:block">⚡</div>
            <div className="absolute -left-8 -bottom-6 text-3xl select-none -rotate-12 hidden sm:block">✨</div>

            {/* Inner Chat Screen */}
            <div className="relative w-full h-full bg-[#efeae2] rounded-[2.2rem] overflow-hidden flex flex-col pt-5 pb-2 border-2 border-ink">
              {/* WhatsApp Header */}
              <div className="bg-[#075e54] text-white px-4 py-2.5 flex items-center justify-between border-b-[2px] border-ink select-none">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs text-white border border-white/40">
                    A
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold text-xs font-body">Aman (Aspirant)</div>
                    <div className="text-[9px] text-white/80 font-marker">online</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-white/95">
                  <Phone className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
                  <Video className="w-3.5 h-3.5 cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 p-3 overflow-y-auto space-y-2.5 flex flex-col bg-[#efeae2] select-none text-[11px] sm:text-xs">
                {/* Timestamp */}
                <div className="self-center bg-[#e1f3fc] text-[#53636b] text-[9px] px-2 py-0.5 rounded shadow-sm font-sans uppercase font-semibold">
                  Today
                </div>

                {/* Left Message: Aman */}
                <div className="self-start bg-white text-ink p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative border border-ink/5 leading-snug">
                  <p className="font-sans">Bhai, hostels and pg me se best kya hai? First year me campus hostel lena chahiye?</p>
                  <span className="block text-right text-[8px] text-ink/40 mt-1 font-sans">11:42 AM</span>
                </div>

                {/* Right Message: Joy */}
                <div className="self-end bg-[#d9fdd3] text-ink p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative border border-ink/5 leading-snug">
                  <p className="font-sans">Honestly, PG college se thoda door padte hain. First year me campus hostel lele, campus ke andar life sorted rahegi and friends jaldi banenge. 🏢</p>
                  <span className="block text-right text-[8px] text-ink/40 mt-1 font-sans">11:43 AM</span>
                </div>

                {/* Left Message: Aman */}
                <div className="self-start bg-white text-ink p-2 rounded-lg rounded-tl-none shadow-sm max-w-[85%] relative border border-ink/5 leading-snug">
                  <p className="font-sans">Aur college labs and classes sach me strict hain kya? Attendance rules check hote hain?</p>
                  <span className="block text-right text-[8px] text-ink/40 mt-1 font-sans">11:44 AM</span>
                </div>

                {/* Right Message: Joy */}
                <div className="self-end bg-[#d9fdd3] text-ink p-2 rounded-lg rounded-tr-none shadow-sm max-w-[85%] relative border border-ink/5 leading-snug">
                  <p className="font-sans">Classrooms and labs to full AC aur premium hain, but attendance bohot strict hai. 75% boundary maintain karni padegi bro, ignore mat karna! ⚠️</p>
                  <span className="block text-right text-[8px] text-ink/40 mt-1 font-sans">11:44 AM</span>
                </div>
              </div>

              {/* WhatsApp Input Bar & CTA */}
              <div className="px-3 py-2 bg-[#f0f2f5] border-t-[2px] border-ink flex gap-1.5 items-center select-none">
                <a 
                  href="https://wa.me/918910376054"
                  onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Booking Direct Doubt Chat", price: "Free" }); }}
                  className="flex-1 bg-white border border-ink rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-sans text-muted-foreground flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <span>Type a message...</span>
                  <span className="text-[var(--pink)] font-semibold font-marker">Ask Joy Bhaiya 🚀</span>
                </a>
                <a
                  href="https://wa.me/918910376054"
                  onClick={(e) => { e.preventDefault(); triggerWhatsAppDialog({ title: "Booking Direct Doubt Chat", price: "Free" }); }}
                  className="w-8 h-8 rounded-full bg-[#00a884] text-white flex items-center justify-center shadow-[2px_2px_0_0_var(--color-ink)] border border-ink hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer shrink-0"
                  title="Send on WhatsApp"
                >
                  <MessageCircle className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- contact ---------- */
const CONTACTS = [
  { icon: Mail, label: "Email", value: "joy.thesloth@gmail.com", link: "mailto:joy.thesloth@gmail.com", color: "bg-accent", rot: "-rotate-3" },
  { icon: Instagram, label: "Instagram", value: "@jethalal.das", link: "https://www.instagram.com/jethalal.das/?utm_source=ig_web_button_share_sheet", color: "bg-[var(--pink)]", rot: "rotate-2" },
  { icon: Linkedin, label: "LinkedIn", value: "joydeep-das-78123522a", link: "https://www.linkedin.com/in/joydeep-das-78123522a", color: "bg-accent", rot: "-rotate-1" },
  { icon: MessageCircle, label: "WhatsApp", value: "Scan or Click 💬", link: "https://wa.me/918910376054", color: "bg-[var(--mint)]", rot: "rotate-3" },
  { icon: Video, label: "Google Meet", value: "by appointment ✿", link: "https://wa.me/918910376054", color: "bg-secondary", rot: "-rotate-2" },
];

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[oklch(0.97_0.03_90/0.4)]">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="font-marker text-primary">say hi ✿ I don't bite</div>
          <h2 className="font-display text-5xl md:text-6xl">Find me here</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CONTACTS.map((c) => (
            <motion.a
              href={c.link}
              onClick={(e) => {
                if (c.link === "https://wa.me/918910376054") {
                  e.preventDefault();
                  triggerWhatsAppDialog({ title: `${c.label} Link` });
                }
              }}
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
              key={c.label}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card p-5 ${c.color} ${c.rot} block cursor-pointer`}
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-white border-2 border-ink">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-3 font-display text-2xl">{c.label}</div>
              <div className="font-marker text-sm break-words">{c.value}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="relative px-4 sm:px-6 pt-16 pb-12 bg-white overflow-hidden border-t-4 border-ink">
      {/* Hand-drawn Doodle Zig-Zag Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -mt-[1px]">
        <svg className="relative block w-full h-5 text-ink" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,0 L30,30 L60,0 L90,30 L120,0 L150,30 L180,0 L210,30 L240,0 L270,30 L300,0 L330,30 L360,0 L390,30 L420,0 L450,30 L480,0 L510,30 L540,0 L570,30 L600,0 L630,30 L660,0 L690,30 L720,0 L750,30 L780,0 L810,30 L840,0 L870,30 L900,0 L930,30 L960,0 L990,30 L1020,0 L1050,30 L1080,0 L1110,30 L1140,0 L1170,30 L1200,0" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="8" 
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl relative z-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center pt-4">
        {/* Left Side: Brand Doodle */}
        <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="space-y-4">
            <div className="relative inline-flex items-center select-none font-bold pb-1 pt-0.5">
              {/* Left-top burst decoration for "Ask" */}
              <svg viewBox="0 0 24 24" className="absolute -left-3.5 -top-2.5 w-4 h-4 text-ink pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="8" y1="12" x2="2" y2="10" />
                <line x1="10" y1="8" x2="6" y2="2" />
                <line x1="14" y1="8" x2="16" y2="2" />
              </svg>
              
              {/* "Ask" Text */}
              <span className="font-note text-[20px] sm:text-[22px] text-ink rotate-[-2deg] tracking-wide mr-1 font-bold">
                Ask
              </span>
              
              {/* "Joy" Text with underline */}
              <span className="relative font-display text-[28px] sm:text-[31px] text-[#ffb000] rotate-[3deg] tracking-wide mr-1.5 font-bold leading-none">
                Joy
                {/* Hand-drawn yellow underline */}
                <span className="absolute left-0 -bottom-1 w-[110%] h-[2.5px] bg-[#ffb000] rounded-full rotate-[-2deg] opacity-90" />
              </span>
              
              {/* "bhaiya" Text */}
              <span className="relative font-sketch text-[18px] sm:text-[20px] text-ink rotate-[-1deg] tracking-normal font-bold">
                bhaiya
                
                {/* Question mark bubble "?" on top of bhaiya */}
                <span className="absolute -top-[18px] left-[15%] bg-white border border-ink rounded-full w-3.5 h-3.5 flex items-center justify-center text-[7px] font-note text-ink shadow-[0.5px_0.5px_0_0_var(--color-ink)] rotate-12">
                  ?
                </span>
                
                {/* Star doodle on top right of bhaiya */}
                <span className="absolute -top-[14px] -right-2.5 text-[9px] text-ink rotate-12">
                  ⭐
                </span>
              </span>
            </div>
            <p className="font-hand text-lg text-ink/80 max-w-sm leading-snug">
              Your senior guide to navigating Amity Kolkata. Real insights, zero bias.
            </p>
            <div className="inline-block bg-[var(--sun)] font-marker text-xs px-2.5 py-0.5 rounded -rotate-1 border border-ink/20">
              Made with ☕ &amp; ✿ in Kolkata
            </div>
          </div>
        </div>

        {/* Right Side: Quick Links & Affiliation Note */}
        <div className="flex flex-col items-center md:items-end gap-6">
          {/* Quick links as sticker tags */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 font-marker text-sm">
            <a href="#help" className="paper-card bg-[var(--mint)] px-3 py-1 -rotate-2 hover:rotate-0 transition-transform">What I help with</a>
            <a href="#pricing" className="paper-card bg-[var(--sky)] px-3 py-1 rotate-1 hover:rotate-0 transition-transform">Pricing</a>
            <a href="#meet" className="paper-card bg-[var(--pink)] px-3 py-1 -rotate-1 hover:rotate-0 transition-transform">Meet Joy</a>
            <a href="#faq" className="paper-card bg-white px-3 py-1 rotate-2 hover:rotate-0 transition-transform">FAQ</a>
          </div>

          <div className="text-center md:text-right font-marker text-xs text-ink/60 space-y-1.5 max-w-sm">
            <p>© {new Date().getFullYear()} Ask Joy Bhaiya · All rights reserved.</p>
            <p className="text-[10px] border-t border-dashed border-ink/20 pt-1.5 leading-snug">
              ⚠️ Disclaimer: This platform is not officially affiliated with, endorsed by, or connected to Amity University. Just a friendly graduate helping out.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Dino Game ---------- */
function DinoGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLeverPulled, setIsLeverPulled] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [volumeIndex, setVolumeIndex] = useState(1); // 0 = Mute, 1 = Low, 2 = Med, 3 = High

  const VOLUME_LEVELS = [0, 0.008, 0.018, 0.035];
  const VOLUME_LABELS = ["MUTE", "LOW", "MED", "HIGH"];
  const volumeRef = useRef(volumeIndex);

  useEffect(() => {
    volumeRef.current = volumeIndex;
  }, [volumeIndex]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const stateRef = useRef({
    dinoY: 100,
    dinoVy: 0,
    isJumping: false,
    shake: 0,
    obstacles: [] as Array<{
      x: number;
      width: number;
      height: number;
      type: 'clock' | 'paper' | 'cup' | 'warning';
      speed: number;
    }>,
    particles: [] as Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      type: 'dust' | 'star' | 'confetti';
    }>,
    bgElements: [] as Array<{
      x: number;
      y: number;
      type: 'window' | 'board' | 'bookshelf' | 'clock' | 'doodle' | 'airplane';
      width: number;
      height: number;
      speedMult: number;
      param?: any;
    }>,
    frame: 0,
    scoreVal: 0,
    lastLevel: 1,
    levelUpAnimationTimer: 0,
    musicStep: 0,
  });

  const GROUND_Y = 155;
  const DINO_X = 55;
  const DINO_W = 45;
  const DINO_H = 45;

  const getLevelInfo = (s: number) => {
    if (s < 120) return { level: 1, title: "8:30 AM Lecture", speed: 4.6, spawnChance: 0.015, color: "#fdfdfb", accent: "var(--sky)" };
    if (s < 280) return { level: 2, title: "Surprise Test! 📝", speed: 5.6, spawnChance: 0.018, color: "#e8f4fd", accent: "var(--sky)" };
    if (s < 500) return { level: 3, title: "De-bar Warning! ⚠️", speed: 6.8, spawnChance: 0.022, color: "#fff5f5", accent: "var(--pink)" };
    if (s < 800) return { level: 4, title: "Bunk Master Mode! 🚀", speed: 8.2, spawnChance: 0.025, color: "#ebfaf2", accent: "var(--mint)" };
    return { level: 5, title: "Graduation Escapade! 🎓", speed: 9.5, spawnChance: 0.028, color: "#fffdf0", accent: "var(--sun)" };
  };

  // Load Highscore
  useEffect(() => {
    const saved = localStorage.getItem("dino_highscore");
    if (saved) setHighScore(parseInt(saved, 10));
  }, []);

  // Shared AudioContext to prevent autoplay blocking & context overflow limits
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gameOverNodesRef = useRef<Array<{ osc: OscillatorNode; gain: GainNode }>>([]);

  const initAudio = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current && AudioContextClass) {
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx && ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
    } catch (e) {
      console.warn("Web Audio API initialization failed:", e);
    }
  };

  // Web Audio Synth Sounds
  const playClickSound = () => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(480, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.06 * (vol / 0.018), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch (e) {}
  };

  const playJumpSound = () => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(650, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08 * (vol / 0.018), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
  };

  const playCrashSound = () => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(250, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.15 * (vol / 0.018), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  };

  const playScoreSound = () => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(698.46, ctx.currentTime + 0.08); // F5
      gain.gain.setValueAtTime(0.06 * (vol / 0.018), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch (e) {}
  };

  const playLevelUpSound = () => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;
      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.24); // C6
      gain.gain.setValueAtTime(0.08 * (vol / 0.018), ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch (e) {}
  };

  const playMusicNote = (freqMelody: number, freqBass: number) => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;

      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return; // Muted

      // Melody oscillator (triangle)
      const oscMelody = ctx.createOscillator();
      const gainMelody = ctx.createGain();
      oscMelody.type = "triangle";
      oscMelody.frequency.setValueAtTime(freqMelody, ctx.currentTime);

      gainMelody.gain.setValueAtTime(0, ctx.currentTime);
      gainMelody.gain.linearRampToValueAtTime(vol * 0.45, ctx.currentTime + 0.015);
      gainMelody.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.18);

      oscMelody.connect(gainMelody);
      gainMelody.connect(ctx.destination);
      oscMelody.start();
      oscMelody.stop(ctx.currentTime + 0.2);

      // Bass oscillator (sine for soft warmth)
      const oscBass = ctx.createOscillator();
      const gainBass = ctx.createGain();
      oscBass.type = "sine";
      oscBass.frequency.setValueAtTime(freqBass, ctx.currentTime);

      gainBass.gain.setValueAtTime(0, ctx.currentTime);
      gainBass.gain.linearRampToValueAtTime(vol * 0.55, ctx.currentTime + 0.02);
      gainBass.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);

      oscBass.connect(gainBass);
      gainBass.connect(ctx.destination);
      oscBass.start();
      oscBass.stop(ctx.currentTime + 0.24);

    } catch (e) {
      // Audio context error ignore
    }
  };

  const playGameOverSound = () => {
    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx || ctx.state === "suspended") return;

      const vol = VOLUME_LEVELS[volumeRef.current];
      if (vol === 0) return; // Muted

      // Stop any existing game over sound first
      stopGameOverSound();

      // Tragic descending Game Over progression spanning ~7 seconds
      const notes = [
        { note: 261.63, type: "sawtooth" as OscillatorType, start: 0.0, dur: 0.5 }, // C4
        { note: 246.94, type: "sawtooth" as OscillatorType, start: 0.5, dur: 0.5 }, // B3
        { note: 220.00, type: "sawtooth" as OscillatorType, start: 1.0, dur: 0.5 }, // A3
        { note: 196.00, type: "sawtooth" as OscillatorType, start: 1.5, dur: 0.8 }, // G3
        
        { note: 174.61, type: "sawtooth" as OscillatorType, start: 2.3, dur: 0.5 }, // F3
        { note: 164.81, type: "sawtooth" as OscillatorType, start: 2.8, dur: 0.5 }, // E3
        { note: 146.83, type: "sawtooth" as OscillatorType, start: 3.3, dur: 0.8 }, // D3
        
        { note: 130.81, type: "triangle" as OscillatorType, start: 4.1, dur: 1.0 }, // C3
        { note: 116.54, type: "triangle" as OscillatorType, start: 5.1, dur: 1.0 }, // Bb2
        { note: 98.00,  type: "triangle" as OscillatorType, start: 6.1, dur: 1.5 }, // G2 (tragic finish)
      ];

      notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = n.type;
        osc.frequency.setValueAtTime(n.note, ctx.currentTime + n.start);

        // Slide pitch down slightly for a retro "sliding out of bounds" feel on notes
        if (n.start > 4.0) {
          osc.frequency.exponentialRampToValueAtTime(n.note * 0.88, ctx.currentTime + n.start + n.dur);
        }

        gain.gain.setValueAtTime(0, ctx.currentTime + n.start);
        gain.gain.linearRampToValueAtTime(vol * 0.45, ctx.currentTime + n.start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + n.start + n.dur);

        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + n.start);
        osc.stop(ctx.currentTime + n.start + n.dur + 0.1);

        gameOverNodesRef.current.push({ osc, gain });
      });
    } catch (e) {}
  };

  const stopGameOverSound = () => {
    try {
      gameOverNodesRef.current.forEach((node) => {
        try {
          node.osc.stop();
          node.osc.disconnect();
          node.gain.disconnect();
        } catch (e) {}
      });
      gameOverNodesRef.current = [];
    } catch (e) {}
  };

  // Helper to spawn a background parallax doodle element
  const spawnBgElement = (canvas: HTMLCanvasElement, forceRight = false) => {
    const state = stateRef.current;
    const types: Array<'window' | 'board' | 'bookshelf' | 'clock' | 'doodle' | 'airplane'> = 
      ['window', 'board', 'bookshelf', 'clock', 'doodle', 'airplane'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let width = 50, height = 50;
    let y = 25 + Math.random() * 35;
    let speedMult = 0.25;
    let param: any = {};

    if (type === 'window') {
      width = 75; height = 65;
      y = 15;
      speedMult = 0.15;
    } else if (type === 'board') {
      width = 130; height = 70;
      y = 12;
      speedMult = 0.3;
      param.text = ["75%?", "E=mc²", "BUNK CLASS!", "A+ = zZZ", "cos²x+sin²x=1", "CRITICAL ERROR"][Math.floor(Math.random() * 6)];
    } else if (type === 'bookshelf') {
      width = 45; height = 85;
      y = GROUND_Y - height;
      speedMult = 0.45;
    } else if (type === 'clock') {
      width = 30; height = 30;
      y = 20;
      speedMult = 0.1;
      param.hour = Math.floor(Math.random() * 12);
    } else if (type === 'doodle') {
      width = 25; height = 25;
      y = 15 + Math.random() * 70;
      speedMult = 0.2;
      param.doodleType = Math.floor(Math.random() * 4);
    } else if (type === 'airplane') {
      width = 28; height = 14;
      y = 15 + Math.random() * 55;
      speedMult = 0.55;
      param.angle = -0.1 - Math.random() * 0.1;
    }

    state.bgElements.push({
      x: forceRight ? canvas.width + Math.random() * 120 : Math.random() * canvas.width,
      y,
      type,
      width,
      height,
      speedMult,
      param
    });
  };

  // Jump Action
  const handleJump = useCallback(() => {
    initAudio();
    const state = stateRef.current;
    if (!state.isJumping && isPlaying && !isGameOver) {
      state.dinoVy = -11.8;
      state.isJumping = true;
      playJumpSound();

      // Jump star particles
      for (let i = 0; i < 6; i++) {
        state.particles.push({
          x: DINO_X + 20,
          y: state.dinoY + 38,
          vx: (Math.random() - 0.5) * 4.5,
          vy: Math.random() * 2 + 1,
          size: Math.random() * 2.5 + 1,
          color: "#ffcc00",
          alpha: 1,
          type: 'star',
        });
      }
    }
  }, [isPlaying, isGameOver]);

  // Handle Keyboard inputs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        initAudio();
        if (isGameOver) {
          startGame();
        } else if (!isPlaying) {
          setIsPlaying(true);
        } else {
          handleJump();
        }
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isGameOver, isPlaying, handleJump]);

  const startGame = () => {
    initAudio();
    playClickSound();
    stopGameOverSound();
    setIsGameOver(false);
    setIsPlaying(true);
    setScore(0);
    setCurrentLevel(1);
    const state = stateRef.current;
    state.dinoY = GROUND_Y - DINO_H;
    state.dinoVy = 0;
    state.isJumping = false;
    state.obstacles = [];
    state.particles = [];
    state.bgElements = [];
    state.shake = 0;
    state.frame = 0;
    state.scoreVal = 0;
    state.lastLevel = 1;
    state.levelUpAnimationTimer = 0;

    // Prefill background elements
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      for (let i = 0; i < 7; i++) {
        spawnBgElement(canvas, false);
      }
    }
  };

  const closeGame = () => {
    playClickSound();
    setIsOpen(false);
    setIsPlaying(false);
    setIsGameOver(false);
    stopGameOverSound();
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
  };

  // Lever interaction handlers
  const handleLeverDown = (e: React.PointerEvent) => {
    e.preventDefault();
    initAudio();
    setIsLeverPulled(true);
    if (isGameOver) {
      startGame();
    } else if (!isPlaying) {
      setIsPlaying(true);
    } else {
      handleJump();
    }
  };

  const handleLeverUp = () => {
    setIsLeverPulled(false);
  };

  // Game Loop
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Spawn initial bg elements if empty
    const state = stateRef.current;
    if (state.bgElements.length === 0) {
      for (let i = 0; i < 7; i++) {
        spawnBgElement(canvas, false);
      }
    }

    const loop = () => {
      const state = stateRef.current;
      state.frame++;

      // Clear Canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const lvlInfo = getLevelInfo(state.scoreVal);

      // Save context for screen shake
      ctx.save();
      if (state.shake > 0) {
        const dx = (Math.random() - 0.5) * state.shake;
        const dy = (Math.random() - 0.5) * state.shake;
        ctx.translate(dx, dy);
        state.shake *= 0.88;
        if (state.shake < 0.3) state.shake = 0;
      }

      // Draw Level Background (colored grid)
      ctx.fillStyle = lvlInfo.color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Dotted Scrapbook Background Grid
      ctx.fillStyle = "rgba(17, 17, 17, 0.035)";
      for (let x = 0; x < canvas.width; x += 20) {
        for (let y = 0; y < canvas.height; y += 20) {
          ctx.beginPath();
          ctx.arc(x + 10, y + 10, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 1. Draw Parallax Background Elements
      state.bgElements.forEach((el, idx) => {
        if (isPlaying && !isGameOver) {
          el.x -= lvlInfo.speed * el.speedMult;
          if (el.type === 'airplane') {
            el.x -= 1.0;
            el.y += Math.sin(state.frame * 0.06) * 0.25;
          }
        }

        ctx.save();
        ctx.strokeStyle = "rgba(27, 31, 36, 0.16)";
        ctx.fillStyle = "rgba(27, 31, 36, 0.05)";
        ctx.lineWidth = 1.6;

        const ox = el.x;
        const oy = el.y;

        if (el.type === 'window') {
          // Glass panel outline
          ctx.beginPath(); ctx.rect(ox, oy, el.width, el.height); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ox + el.width / 2, oy); ctx.lineTo(ox + el.width / 2, oy + el.height);
          ctx.moveTo(ox, oy + el.height / 3); ctx.lineTo(ox + el.width, oy + el.height / 3);
          ctx.stroke();
          // Clouds inside window
          ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
          ctx.beginPath();
          ctx.arc(ox + 20, oy + 22, 9, 0, Math.PI * 2);
          ctx.arc(ox + 28, oy + 19, 12, 0, Math.PI * 2);
          ctx.arc(ox + 38, oy + 22, 9, 0, Math.PI * 2);
          ctx.fill();
        } else if (el.type === 'board') {
          // Chalkboard
          ctx.strokeStyle = "rgba(27, 31, 36, 0.22)";
          ctx.beginPath(); ctx.rect(ox, oy, el.width, el.height); ctx.stroke();
          ctx.fillStyle = "rgba(27, 31, 36, 0.04)";
          ctx.fillRect(ox + 2, oy + 2, el.width - 4, el.height - 4);
          // Blackboard text
          ctx.fillStyle = "rgba(27, 31, 36, 0.28)";
          ctx.font = "italic 11.5px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(el.param.text || "", ox + el.width / 2, oy + el.height / 2 + 4);
          // Ledge
          ctx.beginPath();
          ctx.moveTo(ox - 6, oy + el.height); ctx.lineTo(ox + el.width + 6, oy + el.height);
          ctx.stroke();
        } else if (el.type === 'bookshelf') {
          // Shelves
          ctx.beginPath(); ctx.rect(ox, oy, el.width, el.height); ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(ox, oy + el.height / 3); ctx.lineTo(ox + el.width, oy + el.height / 3);
          ctx.moveTo(ox, oy + (el.height * 2) / 3); ctx.lineTo(ox + el.width, oy + (el.height * 2) / 3);
          ctx.stroke();
          // Book fills
          ctx.fillStyle = "rgba(27, 31, 36, 0.16)";
          ctx.fillRect(ox + 4, oy + 8, 7, el.height / 3 - 10);
          ctx.fillRect(ox + 13, oy + 5, 6, el.height / 3 - 7);
          ctx.fillRect(ox + 22, oy + 12, 8, el.height / 3 - 14);
          ctx.fillRect(ox + 6, oy + el.height / 3 + 8, 8, el.height / 3 - 10);
          ctx.fillRect(ox + 17, oy + el.height / 3 + 4, 7, el.height / 3 - 6);
        } else if (el.type === 'clock') {
          // Clock body
          ctx.beginPath(); ctx.arc(ox + el.width / 2, oy + el.height / 2, el.width / 2, 0, Math.PI * 2); ctx.stroke();
          ctx.beginPath(); ctx.arc(ox + el.width / 2, oy + el.height / 2, 1.5, 0, Math.PI * 2); ctx.fill();
          // Rotating clock hands
          const hAngle = (el.param.hour * 30 + state.frame * 0.015) * (Math.PI / 180);
          const mAngle = (state.frame * 0.12) * (Math.PI / 180);
          ctx.beginPath();
          ctx.moveTo(ox + el.width / 2, oy + el.height / 2);
          ctx.lineTo(ox + el.width / 2 + Math.sin(hAngle) * (el.width * 0.26), oy + el.height / 2 - Math.cos(hAngle) * (el.width * 0.26));
          ctx.moveTo(ox + el.width / 2, oy + el.height / 2);
          ctx.lineTo(ox + el.width / 2 + Math.sin(mAngle) * (el.width * 0.38), oy + el.height / 2 - Math.cos(mAngle) * (el.width * 0.38));
          ctx.stroke();
        } else if (el.type === 'doodle') {
          ctx.strokeStyle = "rgba(27, 31, 36, 0.12)";
          ctx.lineWidth = 1.3;
          if (el.param.doodleType === 0) {
            // Star
            ctx.beginPath();
            ctx.moveTo(ox, oy - 7); ctx.lineTo(ox + 2, oy - 2); ctx.lineTo(ox + 7, oy - 2); ctx.lineTo(ox + 3, oy + 2);
            ctx.lineTo(ox + 5, oy + 7); ctx.lineTo(ox, oy + 4); ctx.lineTo(ox - 5, oy + 7); ctx.lineTo(ox - 3, oy + 2);
            ctx.lineTo(ox - 7, oy - 2); ctx.lineTo(ox - 2, oy - 2); ctx.closePath(); ctx.stroke();
          } else if (el.param.doodleType === 1) {
            // Heart
            ctx.beginPath();
            ctx.moveTo(ox, oy + 5);
            ctx.bezierCurveTo(ox - 7, oy - 1, ox - 7, oy - 8, ox, oy - 4);
            ctx.bezierCurveTo(ox + 7, oy - 8, ox + 7, oy - 1, ox, oy + 5);
            ctx.stroke();
          } else if (el.param.doodleType === 2) {
            // Arrow
            ctx.beginPath();
            ctx.moveTo(ox - 6, oy); ctx.lineTo(ox + 6, oy);
            ctx.lineTo(ox + 2, oy - 3);
            ctx.moveTo(ox + 6, oy); ctx.lineTo(ox + 2, oy + 3);
            ctx.stroke();
          } else {
            // Swirl
            ctx.beginPath();
            let r = 0;
            ctx.moveTo(ox, oy);
            for (let theta = 0; theta < Math.PI * 3.2; theta += 0.25) {
              r = theta * 1.3;
              ctx.lineTo(ox + Math.cos(theta) * r, oy + Math.sin(theta) * r);
            }
            ctx.stroke();
          }
        } else if (el.type === 'airplane') {
          ctx.save();
          ctx.translate(ox, oy);
          ctx.rotate(el.param.angle || 0);
          ctx.beginPath();
          ctx.moveTo(0, 0); ctx.lineTo(16, 5); ctx.lineTo(24, -3); ctx.lineTo(6, -5); ctx.closePath();
          ctx.moveTo(16, 5); ctx.lineTo(13, 9); ctx.lineTo(6, -5);
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();

        // Recycle offscreen bg elements
        if (el.x + el.width < -60) {
          state.bgElements.splice(idx, 1);
          spawnBgElement(canvas, true);
        }
      });

      // Draw Ground
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y);
      for (let x = 0; x <= canvas.width; x += 25) {
        const wave = Math.sin(x * 0.05 + state.frame * 0.05) * 1.2;
        ctx.lineTo(x, GROUND_Y + wave);
      }
      ctx.stroke();

      // Top bar classroom room text label
      ctx.fillStyle = "rgba(27, 31, 36, 0.4)";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("CLASS ROOM: " + lvlInfo.title.toUpperCase(), canvas.width / 2, 22);

      if (isPlaying && !isGameOver) {
        // Apply Gravity to Dino
        state.dinoY += state.dinoVy;
        state.dinoVy += 0.62; // gravity

        // Check Ground Collision
        if (state.dinoY >= GROUND_Y - DINO_H) {
          state.dinoY = GROUND_Y - DINO_H;
          state.dinoVy = 0;
          state.isJumping = false;

          // Spawn running dust
          if (state.frame % 6 === 0) {
            state.particles.push({
              x: DINO_X + 6,
              y: GROUND_Y - 2,
              vx: -2.5 - Math.random() * 2,
              vy: -Math.random() * 0.8,
              size: Math.random() * 3 + 1,
              color: "rgba(27, 31, 36, 0.16)",
              alpha: 0.8,
              type: 'dust',
            });
          }
        }

        // Score update
        if (state.frame % 6 === 0) {
          state.scoreVal++;
          setScore(state.scoreVal);

          // Level Tracking
          if (lvlInfo.level !== state.lastLevel) {
            state.lastLevel = lvlInfo.level;
            setCurrentLevel(lvlInfo.level);
            state.levelUpAnimationTimer = 100;
            playLevelUpSound();

            // Trigger level up confetti and screen shake
            state.shake = 8;
            for (let i = 0; i < 35; i++) {
              state.particles.push({
                x: Math.random() * canvas.width,
                y: -10,
                vx: (Math.random() - 0.5) * 5,
                vy: Math.random() * 3 + 2.5,
                size: Math.random() * 6 + 4,
                color: ["#ffb000", "#ff2d55", "#005bff", "#4cd964", "#e0c3fc"][Math.floor(Math.random() * 5)],
                alpha: 1,
                type: 'confetti',
              });
            }
          }

          // Coin sound every 100 points
          if (state.scoreVal > 0 && state.scoreVal % 100 === 0 && lvlInfo.level === state.lastLevel && state.levelUpAnimationTimer < 90) {
            playScoreSound();
          }
        }

        // Spawn Obstacles
        const speed = lvlInfo.speed;
        const spacingLimit = (230 - lvlInfo.level * 15) + Math.random() * 120;
        const canSpawn = state.obstacles.length === 0 || 
          (canvas.width - state.obstacles[state.obstacles.length - 1].x > spacingLimit);

        if (canSpawn && Math.random() < lvlInfo.spawnChance) {
          const types: Array<'clock' | 'paper' | 'cup' | 'warning'> = ['clock', 'paper', 'cup', 'warning'];
          const type = types[Math.floor(Math.random() * types.length)];
          let w = 24, h = 26;
          if (type === 'paper') h = 32;
          if (type === 'clock') h = 24;
          if (type === 'warning') h = 24;

          state.obstacles.push({
            x: canvas.width,
            width: w,
            height: h,
            type,
            speed,
          });
        }
      }

      // 8-bit Music Sequencer (dual voice melody + bass chord notes)
      if (isPlaying && !isGameOver) {
        const bpm = 110 + (lvlInfo.level - 1) * 18; // BPM speed scales up with current level difficulty
        const noteFrames = Math.floor(60 / (bpm / 60) / 2); // 8th notes
        if (state.frame % noteFrames === 0) {
          const MELODY = [
            261.63, 329.63, 392.00, 329.63, // C4, E4, G4, E4
            293.66, 349.23, 440.00, 349.23, // D4, F4, A4, F4
            329.63, 392.00, 493.88, 392.00, // E4, G4, B4, G4
            349.23, 440.00, 523.25, 440.00  // F4, A4, C5, A4
          ];
          const BASS = [
            130.81, 130.81, 130.81, 130.81, // C3
            146.83, 146.83, 146.83, 146.83, // D3
            164.81, 164.81, 164.81, 164.81, // E3
            174.61, 174.61, 174.61, 174.61  // F3
          ];
          const step = state.musicStep % MELODY.length;
          playMusicNote(MELODY[step], BASS[step]);
          state.musicStep++;
        }
      }

      // Draw Soft Ground Shadow under Dino
      ctx.save();
      const shadowX = DINO_X + 26;
      const shadowY = GROUND_Y;
      const jumpHeight = Math.max(0, (GROUND_Y - 54) - state.dinoY);
      const scaleFactor = Math.max(0.3, 1 - jumpHeight / 90);
      const alphaFactor = Math.max(0.08, 0.32 - jumpHeight / 150);
      
      ctx.fillStyle = `rgba(27, 31, 36, ${alphaFactor})`;
      ctx.beginPath();
      ctx.save();
      ctx.translate(shadowX, shadowY);
      ctx.scale(1, 0.22);
      ctx.arc(0, 0, 18 * scaleFactor, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // Draw Dino
      ctx.save();
      ctx.translate(DINO_X, state.dinoY);

      // Flip Dino horizontally to face right (towards incoming obstacles)
      ctx.translate(22.5, 22.5);
      ctx.scale(-1, 1);
      ctx.translate(-22.5, -22.5);

      // Animation parameters
      const headBob = isPlaying && !state.isJumping ? Math.sin(state.frame * 0.24) * 1.6 : 0;
      const tailWag = isPlaying && !state.isJumping ? Math.sin(state.frame * 0.18) * 2.2 : 0;

      // Knocked out rotation (fall on back)
      if (isGameOver) {
        ctx.translate(22, 22);
        ctx.rotate(1.35); // fall over backwards in mirrored space
        ctx.translate(-22, -22);
      }

      // Body Gradient (rounded 3D retro look)
      const bodyGrad = ctx.createLinearGradient(0, 0, 45, 45);
      bodyGrad.addColorStop(0, "#a2e0ae");
      bodyGrad.addColorStop(1, "#40824b"); // slightly deeper green for shadow contrast

      // Classic Chrome T-Rex Blocky shape
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      
      // Start at front snout tip (top-left)
      ctx.moveTo(10, 4 + headBob);
      ctx.lineTo(26, 4 + headBob);   // top of head
      ctx.lineTo(26, 16 + headBob);  // back of head
      ctx.lineTo(20, 16 + headBob);  // neck transition
      ctx.lineTo(20, 24);            // back of neck
      ctx.lineTo(36, 24);            // back of body
      
      // Tail shape (with wag)
      ctx.lineTo(44, 18 + tailWag * 0.4);  // tail tip top
      ctx.lineTo(42, 28 + tailWag * 0.4);  // tail tip bottom
      ctx.lineTo(34, 34);                  // under tail to body corner
      
      // Bottom of body & chest
      ctx.lineTo(22, 34);            // underbelly
      ctx.lineTo(22, 26);            // chest transition
      ctx.lineTo(14, 26);            // chest front
      ctx.lineTo(14, 16 + headBob);  // under snout
      ctx.lineTo(10, 16 + headBob);  // snout front bottom
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Underbelly blocky patch
      ctx.fillStyle = "#dcfadc";
      ctx.beginPath();
      ctx.rect(16, 28, 6, 6);
      ctx.fill();
      ctx.stroke();

      // Cute Dinosaur spots (blocky/square)
      ctx.fillStyle = "#346e3d"; // darker spot color
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 1;
      const drawSpotRect = (cx: number, cy: number, w: number, h: number) => {
        ctx.fillRect(cx, cy, w, h);
        ctx.strokeRect(cx, cy, w, h);
      };
      drawSpotRect(30, 26, 3, 3);
      drawSpotRect(33, 29, 2.5, 2.5);
      drawSpotRect(28, 30, 2.5, 2.5);

      // Arm
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(14, 26);
      ctx.lineTo(10, 26);
      ctx.lineTo(10, 30);
      ctx.lineTo(12, 30);
      ctx.lineTo(12, 28);
      ctx.lineTo(14, 28);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // School Backpack
      ctx.fillStyle = "#4a90e2";
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(24, 20, 10, 14, 3);
      ctx.fill();
      ctx.stroke();

      // Backpack Pocket
      ctx.fillStyle = "#357abd";
      ctx.beginPath();
      ctx.roundRect(24, 26, 10, 8, 2);
      ctx.fill();
      ctx.stroke();

      // Buckle Details
      ctx.fillStyle = "#ffd700";
      ctx.beginPath();
      ctx.rect(25.5, 25, 2, 2);
      ctx.rect(29.5, 25, 2, 2);
      ctx.fill();
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Strap
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(24, 24, 3.5, Math.PI * 0.5, Math.PI * 1.5);
      ctx.stroke();

      // A tiny yellow pencil sticking out of the backpack!
      ctx.save();
      ctx.translate(27, 14);
      ctx.rotate(-0.35);
      // Yellow body
      ctx.fillStyle = "#ffdb58";
      ctx.fillRect(0, 0, 2, 8);
      // Tip
      ctx.fillStyle = "#e0a96d";
      ctx.beginPath();
      ctx.moveTo(0, 0); ctx.lineTo(1, -2); ctx.lineTo(2, 0); ctx.closePath(); ctx.fill();
      // Lead tip
      ctx.fillStyle = "#1b1f24";
      ctx.beginPath();
      ctx.moveTo(0.5, -1); ctx.lineTo(1, -2); ctx.lineTo(1.5, -1); ctx.closePath(); ctx.fill();
      // Eraser
      ctx.fillStyle = "#ff9a9e";
      ctx.fillRect(0, 7, 2, 1.5);
      ctx.restore();

      // Draw eyes (Different if gameover)
      if (isGameOver) {
        // Spiral or X eyes when caught
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        // Left eye X
        ctx.moveTo(13, 6 + headBob); ctx.lineTo(17, 10 + headBob);
        ctx.moveTo(17, 6 + headBob); ctx.lineTo(13, 10 + headBob);
        ctx.stroke();
      } else {
        // Chrome-like blocky eye
        ctx.fillStyle = "#1b1f24";
        ctx.fillRect(14, 7 + headBob, 3, 3);
      }

      // Pink blush (blocky/square)
      ctx.fillStyle = "rgba(255, 107, 107, 0.45)";
      ctx.fillRect(11, 11 + headBob, 4, 3);

      // Mouth smile (or frown if dead)
      ctx.strokeStyle = "#1b1f24";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      if (isGameOver) {
        // sad curved mouth
        ctx.moveTo(10, 15 + headBob);
        ctx.lineTo(14, 13 + headBob);
      } else {
        // happy smile
        ctx.moveTo(10, 13 + headBob);
        ctx.lineTo(12, 15 + headBob);
        ctx.lineTo(14, 13 + headBob);
      }
      ctx.stroke();

      // Cute tiny white fang!
      if (!isGameOver) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(11, 13 + headBob);
        ctx.lineTo(13, 13 + headBob);
        ctx.lineTo(12, 15 + headBob);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // 2. Draw LEVEL PROGRESSION CUMULATIVE ACCESSORIES
      // Level 2 & 3: Cute Round Spectacles/Study Glasses (replaced by sunglasses at lvl 4)
      if (lvlInfo.level === 2 || lvlInfo.level === 3) {
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 1.8;
        // Round geeky lens
        ctx.beginPath();
        ctx.arc(14.5, 8.5 + headBob, 3.5, 0, Math.PI * 2);
        ctx.stroke();
        // Nose bridge
        ctx.beginPath();
        ctx.moveTo(11, 8.5 + headBob);
        ctx.lineTo(8, 8.5 + headBob);
        ctx.stroke();
      }

      // Level 3: Flustered Sweat Drops (Special Warning effect)
      if (lvlInfo.level === 3) {
        ctx.fillStyle = "rgba(135, 206, 250, 0.85)";
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 1;
        const drawSweatDrop = (sx: number, sy: number) => {
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.quadraticCurveTo(sx + 2.5, sy + 4.5, sx, sy + 6.5);
          ctx.quadraticCurveTo(sx - 2.5, sy + 4.5, sx, sy);
          ctx.closePath(); ctx.fill(); ctx.stroke();
        };
        if (state.frame % 30 < 15) {
          drawSweatDrop(5, 2 + headBob);
          drawSweatDrop(1, 8 + headBob);
        }
      }

      // Level 4 & 5: Thug Life black sunglasses (replaces spectacles)
      if (lvlInfo.level === 4 || lvlInfo.level >= 5) {
        ctx.fillStyle = "#1b1f24";
        ctx.beginPath();
        ctx.moveTo(9, 5 + headBob);
        ctx.lineTo(20, 5 + headBob);
        ctx.lineTo(18, 10 + headBob);
        ctx.lineTo(11, 10 + headBob);
        ctx.closePath();
        ctx.fill();
        // Glare
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(10, 6 + headBob, 2, 1.5);
        ctx.fillRect(15, 6 + headBob, 2, 1.5);
      }

      // Level 5: Graduation mortarboard cap!
      if (lvlInfo.level >= 5) {
        ctx.fillStyle = "#1b1f24";
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 2.2;
        // Diamond Board
        ctx.beginPath();
        ctx.moveTo(18, 0 + headBob);   // front
        ctx.lineTo(29, -4 + headBob);  // right
        ctx.lineTo(18, -8 + headBob);  // back
        ctx.lineTo(7, -4 + headBob);   // left
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Cap base
        ctx.beginPath();
        ctx.rect(13, 0.5 + headBob, 10, 3.5);
        ctx.fill();
        ctx.stroke();
        // Tassel
        ctx.strokeStyle = "#ffd700";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(29, -4 + headBob);
        ctx.lineTo(31, 2 + headBob);
        ctx.lineTo(31, 6 + headBob);
        ctx.stroke();
      }

      // Animated Running Legs with retro alternating states & shoes/sneakers (Level 3+)
      const isLeg1Up = isPlaying && !state.isJumping && (Math.floor(state.frame / 6) % 2 === 0);
      const hasShoes = lvlInfo.level >= 3;

      const drawLeg = (jointX: number, jointY: number, isBent: boolean) => {
        ctx.save();
        if (isBent) {
          // Bent leg path
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 3.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.beginPath();
          ctx.moveTo(jointX, jointY);
          ctx.lineTo(jointX - 3, jointY + 4);
          ctx.lineTo(jointX - 6, jointY + 4);
          ctx.stroke();
          
          if (hasShoes) {
            // Sneaker
            ctx.fillStyle = "#ff3b30"; // Red sneaker body
            ctx.strokeStyle = "#1b1f24";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(jointX - 9, jointY + 2, 7, 4, 1);
            ctx.fill();
            ctx.stroke();
            // White sole & laces
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(jointX - 9, jointY + 5, 7, 1.2);
            ctx.fillRect(jointX - 6, jointY + 2, 2, 1);
          }
        } else {
          // Straight leg path
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 3.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.beginPath();
          ctx.moveTo(jointX, jointY);
          ctx.lineTo(jointX, jointY + 8);
          ctx.lineTo(jointX + 3, jointY + 8);
          ctx.stroke();
          
          if (hasShoes) {
            // Sneaker
            ctx.fillStyle = "#ff3b30";
            ctx.strokeStyle = "#1b1f24";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(jointX - 1, jointY + 6, 7, 4, 1);
            ctx.fill();
            ctx.stroke();
            // White sole & laces
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(jointX - 1, jointY + 9, 7, 1.2);
            ctx.fillRect(jointX + 2, jointY + 6, 2, 1);
          }
        }
        ctx.restore();
      };

      drawLeg(20, 34, isLeg1Up);
      drawLeg(28, 34, !isLeg1Up);

      ctx.restore();

      // Sparkle particles generated near the head/crown
      if (state.frame % 50 === 0 && !isGameOver && lvlInfo.level === 1) {
        state.particles.push({
          x: DINO_X + 16 + (Math.random() - 0.5) * 8,
          y: state.dinoY - 8,
          vx: (Math.random() - 0.5) * 1,
          vy: -0.6 - Math.random() * 0.5,
          size: Math.random() * 3 + 2,
          color: "#ffffff",
          alpha: 0.9,
          type: 'star',
        });
      }

      // 3. Draw & Update Obstacles
      state.obstacles.forEach((obs, idx) => {
        if (isPlaying && !isGameOver) {
          obs.x -= obs.speed;
        }

        const ox = obs.x;
        const oy = GROUND_Y - obs.height;

        if (obs.type === 'cup') {
          // Drawing coffee cup
          ctx.save();
          ctx.translate(ox, oy);
          ctx.fillStyle = "#e0c3fc"; // Lavender cup
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(2, 6);
          ctx.lineTo(22, 6);
          ctx.lineTo(18, 26);
          ctx.lineTo(6, 26);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Handle
          ctx.beginPath();
          ctx.arc(22, 14, 4, -Math.PI / 2, Math.PI / 2);
          ctx.stroke();
          
          // Steam waves (animated rising)
          const steamOffset = Math.sin(state.frame * 0.12 + ox) * 1.5;
          ctx.strokeStyle = "#888888";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(8 + steamOffset, 2); ctx.quadraticCurveTo(6 + steamOffset, -2, 8 + steamOffset, -6);
          ctx.moveTo(14 + steamOffset, 2); ctx.quadraticCurveTo(12 + steamOffset, -2, 14 + steamOffset, -6);
          ctx.stroke();
          ctx.restore();
        } else if (obs.type === 'clock') {
          // Alarm clock (bell shake animation)
          ctx.save();
          ctx.translate(ox, oy);
          
          // Shaking offset for bells when ringing
          const bellShake = isPlaying && !isGameOver ? Math.sin(state.frame * 0.75) * 1.6 : 0;
          ctx.translate(bellShake * 0.5, 0);

          ctx.fillStyle = "#ffb000"; // Yellow clock
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 2.5;
          
          // Left Bell (oscillates)
          ctx.save();
          ctx.translate(4, 4);
          ctx.rotate(bellShake * 0.1);
          ctx.beginPath(); ctx.arc(0, 0, 3.5, 0, Math.PI, true); ctx.fill(); ctx.stroke();
          ctx.restore();
          
          // Right Bell (oscillates opposite)
          ctx.save();
          ctx.translate(20, 4);
          ctx.rotate(-bellShake * 0.1);
          ctx.beginPath(); ctx.arc(0, 0, 3.5, 0, Math.PI, true); ctx.fill(); ctx.stroke();
          ctx.restore();

          // Body
          ctx.beginPath(); ctx.arc(12, 14, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
          // Hands spinning slowly
          const handAngle = (state.frame * 0.08) * (Math.PI / 180);
          ctx.beginPath();
          ctx.moveTo(12, 14);
          ctx.lineTo(12 + Math.sin(handAngle) * 5, 14 - Math.cos(handAngle) * 5);
          ctx.moveTo(12, 14);
          ctx.lineTo(12 + Math.sin(handAngle * 0.1) * 8, 14 - Math.cos(handAngle * 0.1) * 8);
          ctx.stroke();
          ctx.restore();
        } else if (obs.type === 'warning') {
          // Warning sign (Triangle flashes red and black/yellow)
          ctx.save();
          ctx.translate(ox, oy);
          
          const flashFlag = Math.floor(state.frame / 10) % 2 === 0;
          ctx.fillStyle = flashFlag ? "#ff2d55" : "#ffd200"; // Alternating warning flashing
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(12, 2);
          ctx.lineTo(24, 22);
          ctx.lineTo(0, 22);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          // Exclamation mark
          ctx.fillStyle = "#1b1f24";
          ctx.beginPath();
          ctx.rect(10.5, 8, 3, 6);
          ctx.arc(12, 18, 1.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else {
          // Exam paper with F (flutters slightly)
          ctx.save();
          ctx.translate(ox, oy);

          const paperFlutter = Math.sin(state.frame * 0.15 + ox) * 0.7;
          ctx.rotate(paperFlutter * 0.08);

          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.rect(0, 0, 24, 32);
          ctx.fill();
          ctx.stroke();
          // Lines
          ctx.strokeStyle = "#a0a0a0";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(4, 8); ctx.lineTo(20, 8);
          ctx.moveTo(4, 15); ctx.lineTo(20, 15);
          ctx.moveTo(4, 22); ctx.lineTo(12, 22);
          ctx.stroke();
          // F Grade
          ctx.fillStyle = "#ff2d55";
          ctx.font = "bold 12px sans-serif";
          ctx.fillText("F", 16, 26);
          ctx.restore();
        }

        // Bounding Box Collision
        const dinoLeft = DINO_X + 6;
        const dinoRight = DINO_X + DINO_W - 8;
        const dinoTop = state.dinoY + 4;
        const dinoBottom = state.dinoY + DINO_H;

        const obsLeft = obs.x + 3;
        const obsRight = obs.x + obs.width - 3;
        const obsTop = GROUND_Y - obs.height;
        const obsBottom = GROUND_Y;

        const hasCollided = dinoRight > obsLeft && 
                            dinoLeft < obsRight && 
                            dinoBottom > obsTop && 
                            dinoTop < obsBottom;

        if (hasCollided) {
          playCrashSound();
          playGameOverSound();
          setIsGameOver(true);

          // Screen Shake intense feedback!
          state.shake = 16;

          // Save High Score
          if (state.scoreVal > highScore) {
            setHighScore(state.scoreVal);
            localStorage.setItem("dino_highscore", state.scoreVal.toString());
          }

          // Explosion particles burst
          for (let i = 0; i < 22; i++) {
            state.particles.push({
              x: obs.x + 10,
              y: GROUND_Y - 15,
              vx: (Math.random() - 0.5) * 8.5,
              vy: -Math.random() * 6.5 - 2,
              size: Math.random() * 4.5 + 2.5,
              color: ["#ff2d55", "#ffb000", "#a7dca3", "#005bff", "#e0c3fc"][Math.floor(Math.random() * 5)],
              alpha: 1,
              type: 'star',
            } as any);
          }
        }

        // Remove offscreen obstacles
        if (obs.x + obs.width < 0) {
          state.obstacles.splice(idx, 1);
        }
      });

      // 4. Update & Draw Particles (dust, stars, confetti)
      state.particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.type === 'confetti') {
          p.alpha -= 0.012;
          p.vy += 0.06; // gravity
          p.vx += Math.sin(state.frame * 0.08 + p.x) * 0.12; // float drift
        } else {
          p.alpha -= 0.022;
        }

        if (p.alpha <= 0 || p.y > canvas.height + 15) {
          state.particles.splice(idx, 1);
          return;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        if (p.type === 'confetti') {
          // Rotating rectangles
          ctx.translate(p.x, p.y);
          ctx.rotate(state.frame * 0.07 + p.vx);
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.type === 'star') {
          // Drawing star shape
          ctx.translate(p.x, p.y);
          ctx.rotate(state.frame * 0.05);
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(0, -p.size);
            ctx.rotate(Math.PI / 5);
            ctx.lineTo(0, -p.size / 2);
            ctx.rotate(Math.PI / 5);
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Dust clouds
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Level Up text overlays banner animation
      if (state.levelUpAnimationTimer > 0) {
        state.levelUpAnimationTimer--;
        ctx.save();
        const scale = 1 + Math.sin(state.levelUpAnimationTimer * 0.1) * 0.08;
        ctx.translate(canvas.width / 2, 70);
        ctx.scale(scale, scale);
        
        // Level Title
        ctx.font = "bold 21px sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffb000";
        ctx.strokeStyle = "#1b1f24";
        ctx.lineWidth = 4.5;
        ctx.strokeText(`LEVEL ${lvlInfo.level}: ${lvlInfo.title.toUpperCase()} ⚡`, 0, 0);
        ctx.fillText(`LEVEL ${lvlInfo.level}: ${lvlInfo.title.toUpperCase()} ⚡`, 0, 0);

        // Gear reward text
        let rewardText = "";
        if (lvlInfo.level === 1) rewardText = "🎒 School Backpack Equipped";
        else if (lvlInfo.level === 2) rewardText = "👓 Study Spectacles Unlocked!";
        else if (lvlInfo.level === 3) rewardText = "👟 Running Sneakers Unlocked!";
        else if (lvlInfo.level === 4) rewardText = "😎 Thug Sunglasses Unlocked!";
        else if (lvlInfo.level === 5) rewardText = "🎓 Graduation Cap Unlocked!";

        if (rewardText) {
          ctx.font = "bold 12.5px sans-serif";
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "#1b1f24";
          ctx.lineWidth = 3.5;
          ctx.strokeText(rewardText, 0, 24);
          ctx.fillText(rewardText, 0, 24);
        }
        
        ctx.restore();
      }

      // Restore screen shake context
      ctx.restore();

      requestRef.current = requestAnimationFrame(loop);
    };

    requestRef.current = requestAnimationFrame(loop);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isOpen, isPlaying, isGameOver, highScore]);

  return (
    <>
      <style>{`
        @keyframes crt-flicker {
          0% { opacity: 0.012; }
          50% { opacity: 0.006; }
          100% { opacity: 0.016; }
        }
        .crt-flicker-overlay {
          animation: crt-flicker 0.15s infinite;
        }
        @keyframes gentle-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-1.5deg); }
        }
        .fab-bounce {
          animation: gentle-bounce 3.5s ease-in-out infinite;
        }
      `}</style>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto group fab-bounce">
        {/* Tooltip speech bubble */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white border-[3.5px] border-ink py-1.5 px-3 rounded-2xl font-marker text-xs shadow-[3px_3px_0_0_var(--color-ink)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none rotate-[-3deg] select-none whitespace-nowrap">
          Bunk class? 🤫 <span className="text-[10px] text-rose-500 font-bold ml-1">PLAY!</span>
        </div>
        
        {/* Interactive Button */}
        <button
          onClick={() => {
            setIsOpen(true);
            startGame();
          }}
          className="h-16 w-16 rounded-full border-[3px] border-ink bg-[var(--sun)] hover:bg-[#ffa500] hover:scale-110 active:scale-95 shadow-[4px_4px_0_0_var(--color-ink)] transition-all flex items-center justify-center cursor-pointer relative overflow-hidden group/btn"
        >
          {/* Gloss Sheen Slide Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full pointer-events-none" />
          
          {/* Custom SVG Pixel Art T-Rex wearing thug sunglasses and red backpack */}
          <svg 
            viewBox="0 0 50 50" 
            className="h-11 w-11 transition-transform group-hover/btn:scale-105 duration-200 drop-shadow-[1.5px_1.5px_0_rgba(27,31,36,0.15)]" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="fabDinoGrad" x1="0" y1="0" x2="50" y2="50" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a2e0ae" />
                <stop offset="100%" stopColor="#40824b" />
              </linearGradient>
            </defs>
            
            {/* Running shoes */}
            <rect x="18" y="38" width="6" height="4.5" rx="1.2" fill="#ff3b30" stroke="#1b1f24" strokeWidth="1.8" />
            <rect x="18" y="41.2" width="6" height="1.2" fill="#ffffff" />
            <rect x="26" y="38" width="6" height="4.5" rx="1.2" fill="#ff3b30" stroke="#1b1f24" strokeWidth="1.8" />
            <rect x="26" y="41.2" width="6" height="1.2" fill="#ffffff" />

            {/* Legs */}
            <path d="M 21 35 v 4" stroke="#1b1f24" strokeWidth="2.2" strokeLinecap="square" />
            <path d="M 29 35 v 4" stroke="#1b1f24" strokeWidth="2.2" strokeLinecap="square" />

            {/* T-Rex Body */}
            <path 
              d="M 12 6 h 16 v 12 h -6 v 8 h 16 v -6 h 6 v 10 h -8 v 6 h -12 v -8 h -8 v -10 h -4 z" 
              fill="url(#fabDinoGrad)" 
              stroke="#1b1f24" 
              strokeWidth="2.5" 
              strokeLinejoin="miter" 
            />
            
            {/* Belly Patch */}
            <rect x="18" y="28" width="6" height="6" fill="#dcfadc" stroke="#1b1f24" strokeWidth="1.2" />
            
            {/* Eye */}
            <rect x="15" y="9" width="3" height="3" fill="#1b1f24" />
            
            {/* Blush */}
            <rect x="12" y="13" width="4" height="2.5" fill="rgba(255, 107, 107, 0.65)" />
            
            {/* Thug Sunglasses */}
            <path d="M 10 7 h 11 l -2.2 4.5 h -6.8 z" fill="#1b1f24" />
            <rect x="11.5" y="8" width="2" height="1.2" fill="#ffffff" />
            <rect x="16.5" y="8" width="2" height="1.2" fill="#ffffff" />

            {/* Backpack */}
            <rect x="25" y="20" width="9" height="13" rx="2" fill="#4a90e2" stroke="#1b1f24" strokeWidth="2" />
            <rect x="25" y="26" width="9" height="7" rx="1.5" fill="#357abd" />
            {/* Buckle */}
            <rect x="26.5" y="27.5" width="2" height="2" fill="#ffd700" />
            <rect x="30.5" y="27.5" width="2" height="2" fill="#ffd700" />

            {/* Pencil */}
            <path d="M 28 17 l 1.5 -3" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />

            {/* Arm */}
            <path d="M 15 28 h -3.5 v 3.5 h 2" stroke="#1b1f24" strokeWidth="2" strokeLinecap="square" fill="none" />
          </svg>
        </button>
      </div>

      {/* Game Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/45 backdrop-blur-sm pointer-events-auto">
          <div className="relative w-full max-w-[600px] bg-white rounded-3xl border-[4px] border-ink p-6 md:p-8 shadow-[8px_8px_0_0_var(--color-ink)] overflow-hidden flex flex-col items-center rotate-[-0.5deg] bg-[linear-gradient(rgba(17,17,17,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
            {/* Red Washi Tape */}
            <div className="tape-strip bg-[#ff2d55]/85 rotate-2 w-32 h-6 -top-3 absolute left-1/2 -translate-x-1/2 border border-ink/20" />

            {/* Close Button */}
            <button
              onClick={closeGame}
              className="absolute top-4 right-4 h-10 w-10 rounded-full border-2 border-ink bg-white hover:bg-slate-100 flex items-center justify-center font-display text-xl font-bold shadow-[2px_2px_0_0_var(--color-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              ✕
            </button>

            {/* Header */}
            <h3 className="font-display text-3xl sm:text-4xl text-ink mb-1 rotate-[-1deg] text-center mt-2">
              Bunk the Class! 🦖
            </h3>
            <p className="font-hand text-base text-ink/75 mb-4 text-center leading-tight">
              Dodge early alarms, surprise tests, and warning letters!
            </p>

            {/* Score & Level Panel */}
            <div className="flex gap-4 sm:gap-8 mb-4 font-marker text-sm sm:text-base text-ink/80 bg-white/95 px-4 py-1.5 rounded-full border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)]">
              <span className="text-rose-500 font-bold">LVL {currentLevel}</span>
              <span>Score: {score}m</span>
              <span>Record: {highScore}m</span>
            </div>

            {/* Retro Console Cabinet */}
            <div className="w-full border-[4px] border-ink rounded-3xl bg-[#e6d0a7] bg-[radial-gradient(#d3bd94_1.5px,transparent_1.5px)] bg-[size:10px_10px] shadow-[inset_0_4px_0_rgba(255,255,255,0.65),6px_6px_0_0_var(--color-ink)] overflow-hidden flex flex-col p-2 relative">
              
              {/* Cute stickers slapped on console */}
              <div className="absolute top-3 left-5 px-2 py-0.5 bg-[#ffffa0] border border-ink text-[9px] font-hand text-ink/75 rotate-[-6deg] shadow-sm select-none pointer-events-none z-10">
                BUNK METERS ✏️
              </div>
              <div className="absolute bottom-3 left-18 px-2.5 py-0.5 bg-rose-100 border border-ink text-[8px] font-marker text-[#ff2d55] rotate-[8deg] shadow-sm select-none pointer-events-none z-10">
                <s>75% ATTENDANCE</s> 🚫
              </div>

              {/* Screen Bezel Frame */}
              <div className="relative border-[4px] border-ink rounded-2.5xl overflow-hidden bg-[#e5e0d4] flex flex-col w-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.15)]">
                
                {/* Screws in bezel corners */}
                <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink text-[4px] flex items-center justify-center font-bold text-ink select-none">×</div>
                <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink text-[4px] flex items-center justify-center font-bold text-ink select-none">×</div>

                {/* Screen container */}
                <div className="relative border-b-[3px] border-ink aspect-[560/200] overflow-hidden shadow-[inset_0_5px_12px_rgba(0,0,0,0.25)]">
                  {/* CRT screen overlay container */}
                  <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {/* Scanline pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.22]"
                      style={{
                        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%)',
                        backgroundSize: '100% 3px',
                      }}
                    />
                    {/* CRT RGB color bleed / Phosphor mask */}
                    <div 
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        background: 'linear-gradient(90deg, rgba(255, 0, 0, 0.4), rgba(0, 255, 0, 0.25), rgba(0, 0, 255, 0.4))',
                        backgroundSize: '3.5px 100%',
                      }}
                    />
                    {/* CRT Screen Glow/Glare Sheen */}
                    <div 
                      className="absolute inset-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 15%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 65%)',
                      }}
                    />
                    {/* CRT Vignette shadow on screen edge */}
                    <div className="absolute inset-0 shadow-[inset_0_0_24px_rgba(0,0,0,0.48)]" />
                    
                    {/* CRT flicker effect */}
                    <div className="absolute inset-0 bg-white crt-flicker-overlay" />
                  </div>

                  <canvas
                    ref={canvasRef}
                    width={560}
                    height={200}
                    className="w-full h-full block cursor-pointer"
                    onClick={handleJump}
                  />

                  {/* Start overlay */}
                  {!isPlaying && !isGameOver && (
                    <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-4 z-20">
                      <div className="font-display text-4xl text-ink mb-1 rotate-[-1deg] text-center">Dino Wants to Bunk! 🎒</div>
                      <div className="font-hand text-base text-ink/75 mb-4 text-center">Help Dino run away from Amity lectures.</div>
                      <button
                        onClick={startGame}
                        className="px-6 py-2.5 rounded-xl border-2 border-ink bg-[var(--sun)] font-marker text-lg shadow-[3px_3px_0_0_var(--color-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
                      >
                        Start Running ⚡
                      </button>
                    </div>
                  )}

                  {/* Game Over overlay */}
                  {isGameOver && (
                    <div className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center p-4 z-20">
                      <div className="font-display text-4.5xl text-[#ff2d55] mb-1 rotate-[-2deg] animate-bounce text-center">
                        Class Caught You! 🏫
                      </div>
                      <div className="font-hand text-base text-ink/75 mb-4 text-center">
                        You made it {score} meters before getting caught.
                      </div>
                      <button
                        onClick={startGame}
                        className="px-6 py-2.5 rounded-xl border-2 border-ink bg-[var(--sun)] font-marker text-lg shadow-[3px_3px_0_0_var(--color-ink)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
                      >
                        Try Bunking Again ⚡
                      </button>
                    </div>
                  )}
                </div>

                {/* Control Panel Dashboard */}
                <div className="p-4 flex flex-col gap-4 bg-[#dfd9c8] select-none border-t-2 border-ink">
                  {/* Row 1: Status Lamps & Room Info */}
                  <div className="flex items-center justify-between">
                    {/* Status Lamp */}
                    <div className="flex items-center gap-2.5 bg-white/70 border-2 border-ink px-3 py-1 rounded-xl shadow-[2px_2px_0_0_var(--color-ink)]">
                      <div className={`h-3 w-3 rounded-full border-2 border-ink transition-all duration-300 ${
                        isGameOver ? 'bg-[#ff2d55] shadow-[0_0_6px_#ff2d55]' :
                        isPlaying ? 'bg-[#4cd964] shadow-[0_0_6px_#4cd964] animate-pulse' :
                        'bg-[#ffcc00] shadow-[0_0_6px_#ffcc00]'
                      }`} />
                      <span className="font-marker text-[10px] tracking-wide text-ink">
                        {isGameOver ? 'CAUGHT!' : isPlaying ? 'BUNKING' : 'READY'}
                      </span>
                    </div>

                    {/* Level Badge Banner */}
                    <div className="px-3 py-0.5 rounded-lg border-2 border-ink bg-[var(--sun)] text-[10px] font-marker text-ink shadow-[2px_2px_0_0_var(--color-ink)] rotate-[1.5deg]">
                      {getLevelInfo(score).title}
                    </div>
                  </div>

                  {/* Row 2: Tactile Buttons & Grade Lever */}
                  <div className="flex items-center justify-between gap-2 pt-1 pb-1">
                    
                    {/* D-Pad controls decoration */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                        {/* Horizontal Cross */}
                        <div className="absolute w-12 h-3.5 bg-[#2d3748] border-2 border-ink rounded-sm" />
                        {/* Vertical Cross */}
                        <div className="absolute w-3.5 h-12 bg-[#2d3748] border-2 border-ink rounded-sm" />
                        {/* Center circular nub */}
                        <div className="absolute w-3 h-3 bg-[#1a202c] rounded-full" />
                      </div>
                      
                      {/* Speaker slots */}
                      <div className="flex flex-col gap-1 select-none opacity-25">
                        <div className="w-6 h-1 bg-ink rounded-full" />
                        <div className="w-6 h-1 bg-ink rounded-full" />
                        <div className="w-6 h-1 bg-ink rounded-full" />
                      </div>
                    </div>

                    {/* Select/Start Pill Buttons + Direct Mute Switch + Volume Dial */}
                    <div className="flex items-center gap-3.5 rotate-[-4deg]">
                      <div className="flex gap-2">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-2 bg-slate-500 border-2 border-ink rounded-full shadow-[1px_1px_0_0_var(--color-ink)]" />
                          <span className="text-[7px] font-marker text-ink/40 mt-0.5">SELECT</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-2 bg-slate-500 border-2 border-ink rounded-full shadow-[1px_1px_0_0_var(--color-ink)]" />
                          <span className="text-[7px] font-marker text-ink/40 mt-0.5">START</span>
                        </div>
                      </div>

                      {/* Sound ON/OFF Toggle Switch */}
                      <div className="flex flex-col items-center select-none pointer-events-auto">
                        <button
                          onClick={() => {
                            initAudio();
                            const nextVol = volumeIndex === 0 ? 2 : 0; // Toggles between Mute and Medium
                            setVolumeIndex(nextVol);
                            if (nextVol > 0) {
                              setTimeout(() => {
                                try {
                                  const ctx = audioCtxRef.current;
                                  if (ctx && ctx.state !== "suspended") {
                                    const osc = ctx.createOscillator();
                                    const gain = ctx.createGain();
                                    osc.type = "sine";
                                    osc.frequency.setValueAtTime(520, ctx.currentTime);
                                    gain.gain.setValueAtTime(VOLUME_LEVELS[nextVol] * 0.8, ctx.currentTime);
                                    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
                                    osc.connect(gain);
                                    gain.connect(ctx.destination);
                                    osc.start();
                                    osc.stop(ctx.currentTime + 0.09);
                                  }
                                } catch(e){}
                              }, 50);
                            }
                          }}
                          className={`w-7 h-7 rounded-xl border-2 border-ink shadow-[2px_2px_0_0_rgba(27,31,36,1)] active:translate-y-[0.5px] active:translate-x-[0.5px] active:shadow-none hover:brightness-95 transition-all flex items-center justify-center cursor-pointer text-[11px] ${
                            volumeIndex === 0 
                              ? "bg-[#ff2d55] text-white" 
                              : "bg-[#4cd964] text-ink"
                          }`}
                          title="Toggle Mute"
                        >
                          {volumeIndex === 0 ? "🔇" : "🔊"}
                        </button>
                        <span className="text-[6.5px] font-marker text-ink/50 mt-0.5">MUTE</span>
                      </div>

                      {/* Physical Volume Dial */}
                      <div className="flex flex-col items-center select-none pointer-events-auto">
                        <button
                          onClick={() => {
                            const nextIdx = (volumeIndex + 1) % VOLUME_LEVELS.length;
                            setVolumeIndex(nextIdx);
                            // Play a quick test beep
                            try {
                              initAudio();
                              const ctx = audioCtxRef.current;
                              if (ctx && ctx.state !== "suspended" && nextIdx > 0) {
                                const osc = ctx.createOscillator();
                                const gain = ctx.createGain();
                                osc.type = "sine";
                                osc.frequency.setValueAtTime(620, ctx.currentTime);
                                gain.gain.setValueAtTime(VOLUME_LEVELS[nextIdx] * 0.8, ctx.currentTime);
                                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
                                osc.connect(gain);
                                gain.connect(ctx.destination);
                                osc.start();
                                osc.stop(ctx.currentTime + 0.09);
                              }
                            } catch(e){}
                          }}
                          className="relative w-7 h-7 rounded-full bg-slate-800 border-2 border-ink shadow-[2px_2px_0_0_rgba(27,31,36,1)] active:translate-y-[0.5px] active:translate-x-[0.5px] active:shadow-none hover:bg-slate-700 transition-all cursor-pointer flex items-center justify-center overflow-hidden"
                        >
                          {/* Dial notch indicating current level */}
                          <div 
                            className="absolute w-1 h-3.5 bg-amber-400 rounded-full transition-transform duration-200"
                            style={{
                              transform: `rotate(${volumeIndex * 90 - 45}deg) translateY(-5px)`,
                              transformOrigin: "center 5px",
                            }}
                          />
                          {/* Metallic cap center */}
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-600 border border-ink" />
                        </button>
                        <span className="text-[6.5px] font-marker text-ink/50 mt-0.5">VOL: {VOLUME_LABELS[volumeIndex]}</span>
                      </div>
                    </div>

                    {/* Right side: Vertical Stack of Lever (above) and A/B Buttons (below) */}
                    <div className="flex flex-col items-center gap-2.5">
                      
                      {/* 3D Pull Grade Lever Component */}
                      <div className="relative p-2 bg-[#d7c4a1] border-[3px] border-ink rounded-2xl shadow-[4px_4px_0_0_var(--color-ink)] flex items-center justify-center rotate-1 shrink-0 scale-90 origin-bottom">
                        {/* Tiny plate rivets */}
                        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink flex items-center justify-center text-[4px] text-ink font-bold select-none">×</div>
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink flex items-center justify-center text-[4px] text-ink font-bold select-none">×</div>
                        <div className="absolute bottom-1 left-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink flex items-center justify-center text-[4px] text-ink font-bold select-none">×</div>
                        <div className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-slate-400 border border-ink flex items-center justify-center text-[4px] text-ink font-bold select-none">×</div>

                        {/* Tick Marks */}
                        <div className="flex flex-col justify-between items-center h-16 mr-2 font-marker text-[8px] font-bold select-none leading-none pt-0.5 pb-0.5 text-ink/80">
                          <span className="text-emerald-600">A+</span>
                          <span className="text-amber-500">B</span>
                          <span className="text-rose-500 font-extrabold">F</span>
                        </div>

                        {/* 3D Arcade Push Button */}
                        <div 
                          className="relative w-14 h-16 flex items-center justify-center cursor-pointer pointer-events-auto touch-none select-none"
                          onPointerDown={handleLeverDown}
                          onPointerUp={handleLeverUp}
                          onPointerLeave={handleLeverUp}
                        >
                          {/* Button Socket/Bezel */}
                          <div className="absolute w-12 h-12 bg-slate-900 border-2 border-ink rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]" />
                          
                          {/* Button Cap */}
                          <div 
                            className="absolute w-10 h-10 rounded-full bg-[radial-gradient(circle_at_35%_35%,#ff4d4d_0%,#cc0000_60%,#800000_100%)] border-2 border-ink transition-all duration-75 flex items-center justify-center"
                            style={{
                              transform: isLeverPulled ? 'translateY(3px) scale(0.95)' : 'translateY(0px)',
                              boxShadow: isLeverPulled 
                                ? 'inset 0 2px 4px rgba(0,0,0,0.6)' 
                                : '0 4px 0 0 #660000, 0 4px 6px rgba(0,0,0,0.4)',
                            }}
                          >
                            {/* Inner gloss ring */}
                            <div className="absolute top-1 left-2 w-3 h-1.5 bg-white/40 rounded-full rotate-[-15deg] pointer-events-none" />
                            {/* Button Label */}
                            <span className="font-sketch text-[8px] font-bold text-white tracking-widest pointer-events-none select-none">BUNK</span>
                          </div>
                        </div>
                      </div>

                      {/* B & A buttons (both jump Dino) */}
                      <div className="flex gap-3 select-none rotate-[-4deg] scale-95 mt-1">
                        <div className="flex flex-col items-center">
                          <button 
                            onClick={handleJump}
                            className="w-8 h-8 rounded-full bg-[#ff2d55] border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none hover:bg-[#e02447] transition-all cursor-pointer flex items-center justify-center font-bold text-white text-[10px]"
                          >
                            B
                          </button>
                          <span className="text-[6.5px] font-marker text-ink/60 mt-0.5">JUMP</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <button 
                            onClick={handleJump}
                            className="w-8 h-8 rounded-full bg-[#ffd200] border-2 border-ink shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none hover:bg-[#e6bd00] transition-all cursor-pointer flex items-center justify-center font-bold text-ink text-[10px]"
                          >
                            A
                          </button>
                          <span className="text-[6.5px] font-marker text-ink/60 mt-0.5">JUMP</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Dino Gear Unlock Progress checklist */}
            <div className="w-full mt-5 p-4 bg-[#fcf8f2] border-[3px] border-ink rounded-2.5xl shadow-[4px_4px_0_0_var(--color-ink)] rotate-[0.5deg]">
              <div className="font-display text-lg text-ink mb-3 text-center flex items-center justify-center gap-1.5 select-none">
                <span>🎒</span> Dino Bunk Gear Checklist <span>🎓</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[10.5px] font-marker text-ink">
                {[
                  { lvl: 1, req: "0m", label: "Backpack 🎒", check: true },
                  { lvl: 2, req: "120m", label: "Glasses 👓", check: currentLevel >= 2 },
                  { lvl: 3, req: "280m", label: "Sneakers 👟", check: currentLevel >= 3 },
                  { lvl: 4, req: "500m", label: "Sunglasses 😎", check: currentLevel >= 4 },
                  { lvl: 5, req: "800m", label: "Grad Cap 🎓", check: currentLevel >= 5 },
                ].map((item) => (
                  <div 
                    key={item.lvl} 
                    className={`flex flex-col items-center p-2.5 rounded-xl border-2 transition-all ${
                      item.check 
                        ? "bg-[#dcfadc] border-emerald-600/90 text-emerald-800 shadow-[1.5px_1.5px_0_0_rgba(27,31,36,1)]" 
                        : "bg-slate-50 border-ink/20 text-ink/40"
                    }`}
                  >
                    <div className="font-bold">LVL {item.lvl} ({item.req})</div>
                    <div className="text-[10px] mt-1 text-center font-hand font-bold whitespace-nowrap">{item.label}</div>
                    <div className="mt-1.5 text-[9px] font-bold">
                      {item.check ? "✅ Active" : "🔒 Locked"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions info */}
            <div className="mt-4 font-marker text-[11px] text-ink/65 text-center leading-normal">
              Press [Space], [Up Arrow], click the screen, press A/B, or pull the grade lever to jump!
            </div>
          </div>
        </div>
      )}
    </>
  );
}

interface ScratchCardProps {
  width: number;
  height: number;
  onReveal: () => void;
}

function ScratchCard({ width, height, onReveal }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // 1. Warm cardboard/paper gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#e8dfd2");
    grad.addColorStop(1, "#d1c4b2");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Realistic cardboard paper fibers (short textured strokes)
    ctx.strokeStyle = "rgba(100, 80, 60, 0.15)";
    ctx.lineWidth = 0.8;
    for (let i = 0; i < 45; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const len = 3 + Math.random() * 8;
      const angle = Math.random() * Math.PI;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
      ctx.stroke();
    }

    // 3. Sketchbook cross-hatching texture overlay
    ctx.strokeStyle = "rgba(27, 31, 36, 0.05)";
    ctx.lineWidth = 0.5;
    for (let i = -height; i < width; i += 5) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.stroke();
    }
    for (let i = 0; i < width + height; i += 6) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - height, height);
      ctx.stroke();
    }

    // 4. Slightly squiggly organic border to match scrapbook style
    ctx.strokeStyle = "#1b1f24";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(width - 1, 1.5);
    ctx.lineTo(width - 1.5, height - 1);
    ctx.lineTo(1.2, height - 1.2);
    ctx.closePath();
    ctx.stroke();

    // 5. Retro double-print label styling
    ctx.font = "bold 9px 'Courier New', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Text shadow
    ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
    ctx.fillText("Scratch to reveal 🤫", width / 2 + 1, height / 2 + 1);
    // Main text
    ctx.fillStyle = "#1b1f24";
    ctx.fillText("Scratch to reveal 🤫", width / 2, height / 2);

    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing.current) return;
      const { x, y } = getMousePos(e);

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, Math.PI * 2);
      ctx.fill();

      checkScratchPercentage();
    };

    const checkScratchPercentage = () => {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      let transparent = 0;
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) transparent++;
      }
      const pct = (transparent / (data.length / 4)) * 100;
      if (pct > 35) {
        onReveal();
      }
    };

    const startDrawing = (e: MouseEvent | TouchEvent) => {
      isDrawing.current = true;
      draw(e);
    };

    const stopDrawing = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDrawing);

    canvas.addEventListener("touchstart", startDrawing, { passive: false });
    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      draw(e);
    }, { passive: false });
    window.addEventListener("touchend", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("touchstart", startDrawing);
      window.removeEventListener("touchend", stopDrawing);
    };
  }, [width, height, onReveal]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 cursor-crosshair z-10 rounded-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  );
}

function WhatsAppModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState<{ title?: string; price?: string }>({});
  const [copied, setCopied] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent;
      setDetails(customEvent.detail || {});
      setIsOpen(true);
      setCopied(false);
      setIsRevealed(false);
    };
    window.addEventListener("open-whatsapp-dialog", handleOpen);
    return () => window.removeEventListener("open-whatsapp-dialog", handleOpen);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("+91 89103 76054");
    setCopied(true);
    setIsRevealed(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="relative bg-[#fcf8f2] border-[3px] border-ink rounded-2.5xl shadow-[6px_6px_0_0_var(--color-ink)] p-6 max-w-sm w-full z-10 overflow-hidden"
          >
            {/* Decorative Washi Tape */}
            <div className="absolute -top-3.5 left-[35%] w-24 h-6 bg-[#ffcc00]/30 -rotate-2 rounded-sm pointer-events-none" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-ink bg-white flex items-center justify-center shadow-[2px_2px_0_0_var(--color-ink)] active:translate-y-[1px] active:translate-x-[1px] active:shadow-none hover:bg-slate-50 transition-all cursor-pointer z-20"
              title="Close"
            >
              <X className="w-4.5 h-4.5 text-ink" />
            </button>

            {/* Title */}
            <div className="text-center mt-3 mb-5">
              <h3 className="font-display text-2.5xl text-ink leading-none">Connect on WhatsApp</h3>
              <p className="font-hand text-sm text-ink/75 mt-1 leading-tight">
                Ask Joy Bhaiya anything directly!
              </p>
              {details.title && (
                <span className="inline-block mt-2 font-marker text-[10px] bg-[var(--mint)] text-ink border border-ink/20 px-2 py-0.5 rounded rotate-[1.5deg]">
                  Regarding: {details.title} {details.price ? `(${details.price})` : ""}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-4">
              {/* Polaroid QR Frame */}
              <div className="bg-white p-3.5 pb-5 border-[3px] border-ink rounded-2xl shadow-[4px_4px_0_0_var(--color-ink)] rotate-1 flex flex-col items-center relative">
                {/* Tape decoration on Polaroid */}
                <div className="absolute -top-2 left-[40%] w-10 h-3 bg-[#4cd964]/20 rotate-1 rounded-sm pointer-events-none" />
                
                <div className="w-full aspect-square bg-[#efeae2] border-2 border-ink rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img 
                    src="/whatsapp-qr.png" 
                    alt="WhatsApp QR Code" 
                    className="w-full h-full object-contain select-none" 
                    draggable={false}
                  />
                </div>
                <span className="font-hand text-[13px] font-bold text-ink mt-3 rotate-[-1deg] leading-none">
                  Scan with phone camera 📸
                </span>
              </div>

              {/* Direct Link Button */}
              <a
                href={`https://wa.me/918910376054?text=${encodeURIComponent(
                  `Hi Joy Bhaiya, I have a doubt regarding ${details.title || "the mentorship"} session.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="paper-card paper-card-hover block text-center py-3 bg-[var(--sun)] text-ink font-body font-bold text-sm border-2 border-ink shadow-[2.5px_2.5px_0_0_var(--color-ink)] cursor-pointer"
              >
                Direct Chat on WhatsApp ⚡
              </a>

              {/* Grab Phone Number */}
              <div className="border-2 border-dashed border-ink/30 rounded-xl p-3 bg-white flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="font-marker text-[9px] uppercase tracking-wide text-ink/40">Phone Number</span>
                  <div className="relative w-[136px] h-[24px] overflow-hidden flex items-center">
                    <span className="font-display text-[14px] text-ink font-semibold tracking-wider select-all">
                      +91 89103 76054
                    </span>
                    <AnimatePresence>
                      {!isRevealed && (
                        <ScratchCard 
                          width={136} 
                          height={24} 
                          onReveal={() => setIsRevealed(true)} 
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg border-2 border-ink bg-[#efeae2] font-body font-semibold text-xs text-ink shadow-[1.5px_1.5px_0_0_var(--color-ink)] active:translate-y-[0.5px] active:translate-x-[0.5px] active:shadow-none hover:bg-black/5 transition-all cursor-pointer relative shrink-0"
                >
                  {copied ? "Copied! ✨" : "Copy 📋"}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Pricing />
        <HelpWith />
        <MeetJoy />
        <Trust />
        <Gallery />
        <Reviews />
        <Faq />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <DinoGame />
      <WhatsAppModal />
    </div>
  );
}
