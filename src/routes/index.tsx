import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar, MessageCircle, Phone, Video, Mail, Instagram, Linkedin,
  Coffee, Sparkles, Star, ArrowRight, Check, Heart, BookOpen, Home,
  GraduationCap, Briefcase, Users, Trophy, Award, Send,
} from "lucide-react";

import askJoyLogo from "@/assets/ask-joy-logo.asset.json";
import amityLogo from "@/assets/amity-logo.asset.json";
import heroCollage from "@/assets/hero-collage.jpg";
import joyPortrait from "@/assets/joy-portrait.jpg";
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ask Joy — Honest Amity University Kolkata Mentorship" },
      { name: "description", content: "Get honest answers from a current Amity University Kolkata student about placements, hostels, academics & campus life. Book a ₹99 call today." },
      { property: "og:title", content: "Ask Joy — Honest Amity University Kolkata Mentorship" },
      { property: "og:description", content: "A current student's honest guidance on admissions, hostels, placements and campus life." },
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

/* ---------- nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[oklch(0.995_0.005_95/0.85)] border-b-2 border-ink/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img src={askJoyLogo.url} alt="Ask Joy" className="h-12 w-12 shrink-0 rounded-full" width={48} height={48} />
          <div className="min-w-0 leading-tight">
            <div className="font-display text-2xl truncate">Ask Joy</div>
            <div className="font-marker text-xs text-muted-foreground truncate">your senior at Amity Kolkata 💌</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 font-marker text-base">
          <a href="#help" className="hover:text-primary">What I help with</a>
          <a href="#pricing" className="hover:text-primary">Pricing</a>
          <a href="#meet" className="hover:text-primary">Meet Joy</a>
          <a href="#faq" className="hover:text-primary">FAQ</a>
          <a href="#book" className="paper-card paper-card-hover px-4 py-2 text-sm bg-primary text-primary-foreground font-body font-semibold">Book a call →</a>
        </nav>
        <a href="#book" className="md:hidden paper-card px-3 py-1.5 text-sm bg-primary text-primary-foreground font-body font-semibold shrink-0">Book</a>
      </div>
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
            Get <span className="highlight-blue font-semibold">honest answers</span> from a current student about placements,
            academics, hostels, internships, campus life, clubs &amp; everything in between.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#book" className="paper-card paper-card-hover bg-primary text-primary-foreground px-6 py-3 font-body font-semibold inline-flex items-center gap-2">
              <Video className="h-5 w-5" /> Book Google Meet
            </a>
            <a href="#contact" className="paper-card paper-card-hover bg-white px-6 py-3 font-body font-semibold inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" /> Ask a Question
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-marker text-sm">
            {["Current Student", "Honest Guidance", "Real Experience", "Personalized Advice", "Quick Response"].map((b) => (
              <li key={b} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-primary" /> {b}
              </li>
            ))}
          </ul>

          <Doodle className="absolute -bottom-6 -left-4 w-24 h-12 text-ink/60 hidden md:block" />
        </div>

        {/* collage */}
        <div className="relative h-[520px] sm:h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: -4 }} transition={{ duration: 0.5 }}
            className="absolute left-2 top-4 w-[78%] paper-card overflow-hidden"
          >
            <img src={heroCollage} alt="Student scrapbook collage" className="w-full h-[360px] object-cover" width={1024} height={1024} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 5 }} transition={{ delay: 0.15, duration: 0.5 }}
            className="absolute right-0 top-0 w-44 paper-card bg-white p-3"
          >
            <div className="tape-strip" />
            <img src={campus3} alt="Friends at Amity Kolkata" className="w-full h-40 object-cover rounded-md" width={400} height={400} loading="lazy" />
            <div className="font-hand text-sm mt-2 text-center">my fav humans ✿</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -8 }} animate={{ opacity: 1, y: 0, rotate: -8 }} transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute right-4 bottom-2 w-56 sticky-note text-base"
          >
            <div className="font-display text-xl leading-tight">"Wish I had this when I was applying!"</div>
            <div className="font-marker text-xs mt-2">— literally every junior</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 3 }} animate={{ opacity: 1, rotate: 3 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="absolute left-0 bottom-8 w-48 paper-card bg-white p-2"
          >
            <img src={amityLogo.url} alt="Amity University Kolkata logo" className="w-full h-24 object-contain" width={200} height={120} loading="lazy" />
            <div className="font-marker text-xs text-center pb-1">est. on my campus diary 🎓</div>
          </motion.div>

          <StarDoodle className="absolute top-2 left-1/2 w-6 h-6 text-primary" />
          <StarDoodle className="absolute bottom-24 right-1/2 w-4 h-4 text-secondary" />
        </div>
      </div>
    </section>
  );
}

/* ---------- urgent help / pricing ---------- */
const TIERS = [
  {
    name: "Quick Doubt Call", price: "₹99", dur: "10 min call", icon: Phone,
    perks: ["Admissions doubts", "Hostel questions", "Placement questions", "Fee structure", "Scholarships"],
    cta: "Book Now", popular: true, tilt: "-rotate-2",
  },
  {
    name: "Google Meet Session", price: "₹299", dur: "30 min session", icon: Video,
    perks: ["Detailed discussion", "Screen sharing", "Campus insights", "Career guidance"],
    cta: "Schedule Meet", popular: false, tilt: "rotate-1",
  },
  {
    name: "Premium Mentorship", price: "₹499", dur: "60 min session", icon: Trophy,
    perks: ["Full roadmap", "Admission guidance", "Career planning", "Campus life overview"],
    cta: "Book Premium", popular: false, tilt: "-rotate-1",
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

        <div className="grid md:grid-cols-3 gap-8">
          {TIERS.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -8, rotate: 0 }}
              className={`relative paper-card bg-white p-7 ${t.tilt}`}
            >
              {t.popular && (
                <div className="absolute -top-4 left-6 px-3 py-1 bg-secondary border-2 border-ink rounded-full font-marker text-xs shadow-[3px_3px_0_0_var(--color-ink)]">
                  ★ Most Popular
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 grid place-items-center rounded-2xl bg-accent border-2 border-ink">
                  <t.icon className="h-6 w-6" />
                </div>
                <div className="font-sketch text-lg">{t.name}</div>
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-6xl">{t.price}</span>
                <span className="font-marker text-ink/60">/ {t.dur}</span>
              </div>
              <ul className="mt-5 space-y-2 font-body text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {p}</li>
                ))}
              </ul>
              <a href="#book" className={`mt-7 paper-card paper-card-hover block text-center py-3 font-body font-semibold ${t.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-ink"}`}>
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
  { t: "Admissions", icon: GraduationCap, color: "bg-accent", rot: "-rotate-2", note: "cutoffs, forms, scholarships" },
  { t: "Placements", icon: Briefcase, color: "bg-secondary", rot: "rotate-1", note: "honest stats, top recruiters" },
  { t: "Hostels", icon: Home, color: "bg-[var(--mint)]", rot: "-rotate-1", note: "rooms, food, vibes" },
  { t: "Academics", icon: BookOpen, color: "bg-[var(--pink)]", rot: "rotate-2", note: "courses, faculty, grading" },
  { t: "Internships", icon: Briefcase, color: "bg-accent", rot: "rotate-1", note: "how seniors get them" },
  { t: "Scholarships", icon: Award, color: "bg-secondary", rot: "-rotate-2", note: "merit & need based" },
  { t: "Campus Life", icon: Coffee, color: "bg-[var(--mint)]", rot: "rotate-2", note: "daily life, food, hangouts" },
  { t: "Events & Fests", icon: Sparkles, color: "bg-[var(--pink)]", rot: "-rotate-1", note: "the BIG ones to attend" },
  { t: "Student Clubs", icon: Users, color: "bg-accent", rot: "rotate-1", note: "which to actually join" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {HELP.map((h, i) => (
            <motion.div
              key={h.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6, rotate: 0 }}
              className={`paper-card bg-white p-6 ${h.rot}`}
              style={{ minHeight: 180 + (i % 3) * 40 }}
            >
              <div className={`h-14 w-14 grid place-items-center rounded-2xl border-2 border-ink ${h.color}`}>
                <h.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-3xl mt-4">{h.t}</h3>
              <p className="font-marker text-ink/70 mt-1">{h.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- meet joy ---------- */
function MeetJoy() {
  const tags = ["☕ Coffee Lover", "🎨 Designer", "💻 Tech Enthusiast", "🎓 Student Mentor", "📚 Bookworm", "✿ Community Builder"];
  return (
    <section id="meet" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl paper-card bg-white p-6 sm:p-10 grid md:grid-cols-[auto_1fr] gap-10 items-center -rotate-[0.4deg]">
        <div className="relative mx-auto">
          <div className="paper-card bg-white p-3 -rotate-3">
            <div className="tape-strip" />
            <img src={joyPortrait} alt="Joy, your Amity Kolkata mentor" className="w-64 h-72 object-cover rounded-md" width={400} height={500} loading="lazy" />
            <div className="font-display text-2xl text-center mt-2">— Joy ✿</div>
          </div>
          <div className="absolute -right-6 -bottom-4 sticky-note text-sm rotate-6">hi, i'm joy!</div>
        </div>
        <div>
          <div className="font-marker text-primary">Meet your mentor</div>
          <h2 className="font-display text-5xl md:text-6xl leading-none mt-1">Hey, I'm Joy 👋</h2>
          <p className="mt-5 font-body text-lg text-ink/80 max-w-xl">
            I'm a <span className="highlight-yellow">current student at Amity University Kolkata</span>, a UI/UX designer,
            and that senior who literally cannot stop talking about campus. I started Ask Joy because I was tired of seeing
            juniors get half-truths from agents and forums.
          </p>
          <p className="mt-4 font-hand text-lg">
            Real student. Real experience. Zero filter. ✨
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="paper-card bg-white px-3 py-1.5 text-sm font-marker">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- gallery ---------- */
function Gallery() {
  const photos = [
    { src: campus1, label: "the main building 💚", rot: "-rotate-3", col: "md:col-span-2" },
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
  { name: "Ananya R.", quote: "Joy literally saved my admission decision. She told me stuff no agent ever would. Worth every rupee!", color: "bg-secondary", rot: "-rotate-2" },
  { name: "Rohan M.", quote: "Booked the ₹99 call before paying the hostel fee. Best 99 rupees I have ever spent.", color: "bg-accent", rot: "rotate-2" },
  { name: "Priya K.", quote: "Got honest answers about placements in my branch. No sugar coating, just facts. Loved it.", color: "bg-[var(--mint)]", rot: "rotate-1" },
  { name: "Aarav S.", quote: "The Google Meet was so chill. Felt like talking to an older sister, not a counsellor.", color: "bg-[var(--pink)]", rot: "-rotate-1" },
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
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-ink stroke-ink" />)}
              </div>
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
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
        <div className="relative">
          <div className="font-marker text-primary mb-2">↓ fill it like a notebook</div>
          <h2 className="font-display text-5xl md:text-6xl leading-none">Book your session</h2>
          <p className="mt-4 font-hand text-lg">
            I usually reply within a few hours. Promise it'll feel less like a form and more like texting a senior.
          </p>
          <div className="mt-8 space-y-4">
            <div className="sticky-note -rotate-2 max-w-xs">
              ✿ tip: be specific. "ask me anything" answers are boring — bring the real doubts!
            </div>
            <div className="paper-card bg-white p-4 max-w-xs rotate-1">
              <div className="font-display text-2xl">₹99 · 10 min</div>
              <div className="font-marker text-sm text-ink/70">most popular for first-timers</div>
            </div>
          </div>
          <svg viewBox="0 0 200 100" className="absolute -right-4 top-32 w-32 text-primary hidden lg:block" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M10 80 Q 80 10, 180 50" />
            <path d="M170 40 L182 50 L172 62" />
          </svg>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="paper-card bg-white p-7 sm:p-9 space-y-5"
          style={{ backgroundImage: "repeating-linear-gradient(transparent 0 38px, oklch(0.92 0.04 240 / 0.5) 38px 39px)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Your name" placeholder="Aarav Sharma" />
            <Field label="Email" placeholder="aarav@email.com" type="email" />
            <Field label="Phone (WhatsApp)" placeholder="+91 98xxx xxxxx" />
            <Field label="Preferred date" type="date" />
            <Field label="Preferred time" placeholder="6:00 PM" />
            <div>
              <label className="font-marker text-sm">Which session?</label>
              <select className="mt-1 w-full bg-transparent border-b-2 border-ink/40 py-2 font-body focus:outline-none focus:border-primary">
                <option>Quick Doubt Call — ₹99</option>
                <option>Google Meet Session — ₹299</option>
                <option>Premium Mentorship — ₹499</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-marker text-sm">What's on your mind?</label>
            <textarea
              rows={4}
              placeholder="ask me anything about Amity Kolkata ✿"
              className="mt-1 w-full bg-transparent border-b-2 border-ink/40 py-2 font-hand text-lg focus:outline-none focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="paper-card paper-card-hover w-full bg-primary text-primary-foreground py-4 font-body font-semibold text-lg inline-flex items-center justify-center gap-2"
          >
            {sent ? <>Sent! Joy will text you ✿ <Heart className="h-5 w-5" /></> : <>Book my session <Send className="h-5 w-5" /></>}
          </button>
          <p className="font-marker text-xs text-ink/60 text-center">no spam · just a senior in your DMs</p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-marker text-sm">{label}</label>
      <input
        {...rest}
        className="mt-1 w-full bg-transparent border-b-2 border-ink/40 py-2 font-body focus:outline-none focus:border-primary"
      />
    </div>
  );
}

/* ---------- contact ---------- */
const CONTACTS = [
  { icon: Mail, label: "Email", value: "joy@askjoy.in", color: "bg-accent", rot: "-rotate-3" },
  { icon: Instagram, label: "Instagram", value: "@askjoy.kolkata", color: "bg-[var(--pink)]", rot: "rotate-2" },
  { icon: Linkedin, label: "LinkedIn", value: "in/askjoy", color: "bg-accent", rot: "-rotate-1" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 98xxx xxxxx", color: "bg-[var(--mint)]", rot: "rotate-3" },
  { icon: Video, label: "Google Meet", value: "by appointment ✿", color: "bg-secondary", rot: "-rotate-2" },
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
              href="#book"
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
    <footer className="px-4 sm:px-6 py-12 border-t-2 border-ink/15">
      <div className="mx-auto max-w-6xl grid sm:grid-cols-[1fr_auto] gap-6 items-center">
        <div className="flex items-center gap-3">
          <img src={askJoyLogo.url} alt="Ask Joy" className="h-12 w-12 rounded-full" width={48} height={48} loading="lazy" />
          <div>
            <div className="font-display text-2xl leading-none">Ask Joy</div>
            <div className="font-marker text-sm text-ink/70">made with ☕ &amp; ✿ at Amity Kolkata</div>
          </div>
        </div>
        <div className="font-marker text-sm text-ink/70">© {new Date().getFullYear()} Ask Joy · not affiliated with Amity University officially</div>
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
