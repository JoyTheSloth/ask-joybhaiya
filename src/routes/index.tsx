import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar, MessageCircle, Phone, Video, Mail, Instagram, Linkedin,
  Coffee, Sparkles, Star, ArrowRight, Check, Heart, BookOpen, Home,
  GraduationCap, Briefcase, Users, Trophy, Award, Send, Menu, X,
} from "lucide-react";

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
            <a href="https://wa.me/qr/JKZXNSSVUYTFC1" target="_blank" rel="noopener noreferrer" className="paper-card paper-card-hover bg-primary text-primary-foreground px-6 py-3 font-body font-semibold inline-flex items-center gap-2">
              <Video className="h-5 w-5" /> Book Google Meet
            </a>
            <a href="https://wa.me/qr/JKZXNSSVUYTFC1" target="_blank" rel="noopener noreferrer" className="paper-card paper-card-hover bg-white px-6 py-3 font-body font-semibold inline-flex items-center gap-2">
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
          {/* Main scrapbook base */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -3 }} animate={{ opacity: 1, y: 0, rotate: -3 }} transition={{ duration: 0.5 }}
            className="absolute left-2 top-4 w-[76%] paper-card overflow-hidden"
          >
            <img src="/image copy.png" alt="Student scrapbook collage" className="w-full h-[380px] object-cover" width={1024} height={1024} />
          </motion.div>

          {/* Decorative scrapbook illustrations in the center bottom empty space */}
          <div className="absolute left-[33%] top-[395px] w-48 h-24 hidden md:block select-none pointer-events-none z-10">
            {/* Coffee Stain */}
            <CoffeeStain className="absolute left-[-20px] top-[-10px] w-24 h-24 text-amber-950/10" />
            
            {/* Hand-drawn Arrow pointing down-right */}
            <svg className="absolute right-[10px] top-[15px] w-14 h-14 text-ink/30 -rotate-12" fill="none" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M10 20 C 40 10, 70 30, 80 70" strokeDasharray="4 4" />
              <path d="M68 58 L80 70 L88 60" />
            </svg>
            
            {/* Cute hand-written label */}
            <span className="absolute left-[65px] top-[8px] font-hand text-[13px] font-bold text-ink/40 rotate-2 tracking-wide">
              Campus Diaries 📝
            </span>
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
              href="https://wa.me/qr/JKZXNSSVUYTFC1" 
              target="_blank" 
              rel="noopener noreferrer"
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
    name: "Chat & Voice Notes", price: "₹69", dur: "on WhatsApp", illustration: ChatIllustration,
    perks: ["Ask doubts via chat", "Send voice notes", "Get quick replies", "No scheduling needed", "1-on-1 personal chat"],
    cta: "Start Chatting", popular: false, tilt: "-rotate-2",
  },
  {
    name: "Quick Doubt Call", price: "₹99", dur: "10 min call", illustration: PhoneIllustration,
    perks: ["Admissions doubts", "Hostel questions", "Placement questions", "Fee structure", "Scholarships"],
    cta: "Book Now", popular: true, tilt: "rotate-1",
  },
  {
    name: "Google Meet Session", price: "₹199", dur: "30 min session", illustration: VideoIllustration,
    perks: ["Detailed discussion", "Screen sharing", "Campus insights", "Career guidance", "Follow-up support"],
    cta: "Schedule Meet", popular: false, tilt: "-rotate-1",
  },
];

function Pricing() {
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
                  <div className="font-marker text-sm text-ink/65 mt-0.5">Direct junior-to-senior advice</div>
                </div>
                <t.illustration />
              </div>
              <div className="mt-6 flex items-baseline gap-2">
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
              <a href="https://wa.me/qr/JKZXNSSVUYTFC1" target="_blank" rel="noopener noreferrer" className={`mt-7 paper-card paper-card-hover block text-center py-3 font-body font-semibold ${t.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-ink"}`}>
                {t.cta} <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </motion.div>
          ))}
        </div>
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
                  href="https://wa.me/qr/JKZXNSSVUYTFC1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white border border-ink rounded-full px-3 py-1.5 text-[10px] sm:text-xs font-sans text-muted-foreground flex items-center justify-between hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <span>Type a message...</span>
                  <span className="text-[var(--pink)] font-semibold font-marker">Ask Joy Bhaiya 🚀</span>
                </a>
                <a
                  href="https://wa.me/qr/JKZXNSSVUYTFC1"
                  target="_blank"
                  rel="noopener noreferrer"
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
  { icon: MessageCircle, label: "WhatsApp", value: "Scan or Click 💬", link: "https://wa.me/qr/JKZXNSSVUYTFC1", color: "bg-[var(--mint)]", rot: "rotate-3" },
  { icon: Video, label: "Google Meet", value: "by appointment ✿", link: "https://wa.me/qr/JKZXNSSVUYTFC1", color: "bg-secondary", rot: "-rotate-2" },
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
              target={c.link.startsWith("http") ? "_blank" : undefined}
              rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined}
              key={c.label}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card p-5 ${c.color} ${c.rot} block`}
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
    </div>
  );
}
