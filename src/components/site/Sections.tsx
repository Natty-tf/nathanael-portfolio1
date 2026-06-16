import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2, Palette, Smartphone, Wand2, Camera, Video, Share2, Cpu,
  Github, Linkedin, Instagram, Send, Facebook, Mail, Phone, MapPin,
  ExternalLink, Sparkles, GraduationCap, Briefcase, Rocket, Heart,
  ChevronRight, Star, Quote,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import heroPortrait from "@/assets/hero-portrait.png";
import aboutPortrait from "@/assets/about-portrait.png";


import emailjs from "@emailjs/browser";



/* ---------------- HERO ---------------- */

const rotatingTitles = [
  "Frontend Developer",
  "UI/UX Designer",
  "Full Stack Creator",
  "IT Specialist",
  "Graphic Designer",
  "Digital Creative",
  "SEO Specialist",
  "Video Editor",
  "Motion Designer",
];

function RotatingTitle() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % rotatingTitles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.2em] min-w-[16ch] align-bottom">
      {rotatingTitles.map((t, idx) => (
        <motion.span
          key={t}
          className="absolute inset-0 gradient-text font-display"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={
            i === idx
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: -20, filter: "blur(8px)" }
          }
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {t}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -80]);
  const yImg = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pt-32 pb-24 md:pt-40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <motion.div style={{ y }} className="relative z-10">
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
              Available for new projects
            </span>
          </Reveal>

          <Reveal delay={0.15}>
            <h1 className="font-display mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="gradient-text">Nathanael</span>
              <br />
              <span className="text-white/90">Tesfaye</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-6 text-2xl font-medium sm:text-3xl">
              <span className="text-white/60">I'm a </span>
              <RotatingTitle />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Passionate Information Systems graduate focused on creating futuristic digital
              experiences through modern development, creative design, branding and innovative
              technology solutions.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap gap-3">
              <MagneticButton href="#portfolio">View My Work</MagneticButton>
              <MagneticButton href="#contact" variant="outline">Contact Me</MagneticButton>
              <MagneticButton href="https://drive.google.com/file/d/1LtTkjvbyUcdOAup_W7WiQAZCrfHh8X8b/view?usp=sharing" variant="ghost">Download CV</MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/40">
              <span>Scroll</span>
              <span className="relative block h-px w-24 overflow-hidden bg-white/15">
                <motion.span
                  className="absolute inset-y-0 left-0 w-1/3 bg-cyan-300"
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </div>
          </Reveal>
        </motion.div>

        {/* RIGHT: Hero visual */}
        <motion.div style={{ y: yImg }} className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[4/5] w-full">
            {/* glow rings */}
            <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-transparent blur-3xl" />
            <motion.div
              className="absolute -inset-2 rounded-[2rem] border border-cyan-300/30"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ borderStyle: "dashed" }}
            />
            {/* image frame */}
            <div className="glass-strong neon-border relative h-full w-full overflow-hidden rounded-[1.75rem]">
              <img
                src={heroPortrait}
                alt="Nathanael Tesfaye portrait"
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                width={1024}
                height={1280}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040816] via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,232,255,0.25),transparent_55%)]" />
              {/* HUD corner brackets */}
              {["top-3 left-3", "top-3 right-3 rotate-90", "bottom-3 left-3 -rotate-90", "bottom-3 right-3 rotate-180"].map(
                (pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} h-5 w-5 border-l-2 border-t-2 border-cyan-300/70`}
                  />
                )
              )}
            </div>

            {/* floating UI cards */}
            <motion.div
              className="glass absolute -left-6 top-10 hidden rounded-2xl p-3 text-xs sm:block"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-400/15 text-cyan-300">
                  <Code2 className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-white/90">React • Next</div>
                  <div className="text-white/50">Frontend Engineer</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -right-6 bottom-20 hidden rounded-2xl p-3 text-xs sm:block"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-400/15 text-indigo-300">
                  <Palette className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-white/90">UI / UX</div>
                  <div className="text-white/50">Design Systems</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="glass absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-2xl p-3 text-xs sm:block"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="relative grid h-8 w-8 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <span className="absolute h-full w-full rounded-full border border-emerald-400/60" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-white/90">Currently building</div>
                  <div className="text-white/50">Futuristic web experiences</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <Reveal>
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display mt-3 text-4xl font-semibold sm:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-base text-white/60 sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */

const stats = [
  { k: "3+", v: "Years Creative Experience" },
  { k: "30+", v: "Projects Completed" },
  { k: "BSc", v: "Information Systems" },
  { k: "2-in-1", v: "Full Stack + Design" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About" title="Crafting futures, pixel by pixel" />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glass-strong neon-border relative aspect-[4/5] overflow-hidden rounded-3xl">
              {/* Editable image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-fuchsia-500/10" />
              <img
                src={aboutPortrait}
                alt="About Nathanael"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a1a] via-transparent to-transparent" />
              <div className="glass absolute bottom-4 left-4 rounded-xl px-3 py-2 text-xs text-white/80">
                Creadit Tesfu Digital Studio 
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">
                I design and build <span className="neon-text">interactive</span> digital products
                that feel like the future.
              </h3>
              <p className="mt-5 text-white/65">
                I'm Nathanael T, a multidisciplinary creator from Ethiopia blending engineering,
                design and brand thinking. My background in Information Systems gave me the
                structural foundation; my obsession with cinematic, motion-driven interfaces
                gives my work its soul.
              </p>
              <p className="mt-4 text-white/65">
                From frontend systems with React and Next.js, to Flutter apps, brand identities
                and motion graphics — I bring every layer of a product together with care,
                clarity and a strong point of view.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.v}
                    className="glass group rounded-2xl p-4 transition-all duration-500 hover:-translate-y-1 hover:neon-border"
                  >
                    <div className="font-display text-2xl font-semibold neon-text">{s.k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/55">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 92 },
  { name: "SEO Specialist", level: 88 },
  { name: "Flutter Development", level: 80 },
  { name: "UI/UX Design", level: 92 },
  { name: "Graphic Design", level: 88 },
  { name: "Adobe Photoshop", level: 94 },
  { name: "Illustrator", level: 82 },
  { name: "Premiere Pro", level: 78 },
  { name: "After Effects", level: 75 },
  { name: "Networking", level: 72 },
  { name: "Database Management", level: 78 },
  { name: "IT Support", level: 85 },
  { name: "Digital Marketing", level: 97 },
  { name: "Sales Trainer", level: 92 },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A toolkit built across disciplines"
          subtitle="Engineering, design and creative production — one cohesive workflow."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04}>
              <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:neon-border">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-xs text-cyan-300">{s.level}%</span>
                </div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_20px_rgba(56,232,255,0.6)]"
                  />
                </div>
                <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const services = [
  { icon: Code2, title: "Web Development", desc: "High-performance React and Next.js builds with motion-rich interfaces." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform Flutter apps with native feel and polish." },
  { icon: Palette, title: "UI / UX Design", desc: "Design systems, product flows and prototypes that ship." },
  { icon: Wand2, title: "Brand Identity", desc: "Logos, visual systems and brand languages with point of view." },
  { icon: Camera, title: "Graphic Design", desc: "Posters, social, print and editorial visuals." },
  { icon: Video, title: "Video Editing", desc: "Cinematic edits in Premiere Pro with After Effects motion." },
  { icon: Share2, title: "Social Media Design", desc: "Content systems, templates and campaign creative." },
  { icon: Cpu, title: "IT Support", desc: "Networking, systems and dependable everyday tech support." },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="What I do, end-to-end"
          subtitle="One creative engine for web, mobile, brand and motion."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:neon-border">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/10 text-cyan-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                <ChevronRight className="absolute right-5 top-6 h-4 w-4 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-cyan-300" />
                <span className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-indigo-500/15 blur-2xl transition-all duration-500 group-hover:scale-150" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ----------------*/ 

const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Graphic Design", "Branding", "Photography", "Video Editing", "Companies | Brands"] as const;

/* Edited */ 
const projects = [
  { title: "Hospital Management System", cat: "Web Development", tags: ["React", "Next.js", "Local Hospital"], hue: "from-cyan-400/40 to-indigo-500/30", span: "", image: "/src/assets/hospiatl.png" },
  { title: "Explore Ethiopia", cat: "Mobile Apps", tags: ["Android", "Java"], hue: "from-emerald-400/40 to-cyan-500/30", span: "md:row-span-2", image: "/src/assets/exploreethio.png" },
  { title: "Green Sun Tech Solar Energy", cat: "Branding", tags: ["Identity", "Logo"], hue: "from-fuchsia-400/40 to-indigo-500/30", span: "", image: "/src/assets/branding.png" },
  { title: "Fresh ገበያ Apps", cat: "UI/UX Design", tags: ["Figma", "Design System"], hue: "from-sky-400/40 to-indigo-500/30", span: "md:row-span-2", image: "/src/assets/UIUXdesign.png"},
  { title: "GST - Graphic Design", cat: "Graphic Design", tags: ["Print", "Editorial"], hue: "from-amber-300/40 to-rose-500/30", span: "", image: "/src/assets/greensuntech1.png" },
  { title: "Video Editing - Green Sun Tech", cat: "Video Editing", tags: ["Video", "Motion Graphics"], hue: "from-sky-400/40 to-indigo-500/30", span: "md:row-span-3", image: "/src/assets/video.mp4"},
  { title: "Digital Photography", cat: "Photography", tags: ["Adobe Photoshop", "Lightroom"], hue: "from-orange-400/40 to-rose-500/30", span: "", image: "/src/assets/nattyphoto.jpg" },
  { title: "HU Food Delivery", cat: "Mobile Apps", tags: ["Android", "Food Delivery"], hue: "from-indigo-400/40 to-fuchsia-500/30", span: "md:row-span-2", image: "/src/assets/hufoodorder.png" },
  { title: "Green Sun Tech", cat: "Web Development", tags: ["HTML", "JavaScript"], hue: "from-cyan-400/40 to-emerald-400/30", span: "md:row-span-2", image: "/src/assets/GSTWeb.png" },
  { title: "Digtal Marketing", cat: "Companies | Brands", tags: ["Meta ADs", "Google ADs", "Graphic", "Motion", "Video"], hue: "from-sky-400/40 to-indigo-500/30", span: "md:col-span-3", image: "/src/assets/Companies.png"},  
];

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = projects.filter((p) => filter === "All" || p.cat === filter);

  return (
    <section id="portfolio" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work"
          subtitle="A growing gallery — leave space for many more. Drop images into /src/assets and wire them up."
        />

        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  filter === c
                    ? "bg-cyan-400/15 text-cyan-200 neon-border"
                    : "glass text-white/60 hover:text-white"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04} className={p.span}>
              <article className="glass group relative h-full w-full overflow-hidden rounded-3xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="absolute inset-0 grid-bg opacity-40" />
                                            
                {p.image.endsWith(".mp4") ? (
             <video
                 src={p.image}
                 autoPlay
                 muted
                 loop
                 playsInline
                 preload="auto"
                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
             ) : (
               <img
                 src={p.image}
                 alt={p.title}
                 className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
                          )}


                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-cyan-300">
                    {p.cat}
                  </span>
                  <h3 className="font-display mt-1 text-xl font-semibold">{p.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-cyan-400/20 px-3 py-1.5 text-xs text-cyan-200 hover:bg-cyan-400/30">
                      <ExternalLink className="h-3 w-3" /> Live
                    </a>
                    <a href="https://github.com/Natty-tf" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20">
                      <Github className="h-3 w-3" /> Code
                    </a>
                  </div>
                </div>

                <span className="pointer-events-none absolute inset-0 rounded-3xl transition-shadow duration-500 group-hover:neon-border" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */

const galleryItems = [
  { id: 0, h: 220, hue: "from-cyan-400/5 to-indigo-500/5", image: "/src/assets/gallery/gallery1MRKY.png", },
  { id: 1, h: 320, hue: "from-fuchsia-400/10 to-cyan-500/10", image: "/src/assets/gallery/gallery2-ECOFLOW.png",},
  { id: 2, h: 400, hue: "from-emerald-400/2 to-sky-500/3", image: "/src/assets/gallery/gallery3 BCard.png", },
  { id: 3, h: 400, hue: "from-amber-300/10 to-rose-500/10", image: "/src/assets/gallery/gallery4 6KW.png", },
  { id: 4, h: 180, hue: "from-violet-400/10 to-cyan-400/10", image: "/src/assets/gallery/gallery5 SyinixRef.png",},
  { id: 5, h: 360, hue: "from-sky-400/3 to-indigo-500/2", image: "/src/assets/gallery/gallery6-Marketing.png", },
  { id: 6, h: 200, hue: "from-cyan-400/10 to-indigo-500/10",image: "/src/assets/gallery/gallery7.png", },
  { id: 7, h: 380, hue: "from-fuchsia-400/3 to-cyan-500/2", image: "/src/assets/gallery/gallery8-8KW.png", },
  { id: 8, h: 360, hue: "from-amber-300/10 to-rose-500/10", image: "/src/assets/gallery/gallery10-Solar panels.png", },
  { id: 9, h: 190, hue: "from-emerald-400/10 to-sky-500/10", image: "/src/assets/gallery/gallery9.png", },
  { id: 10, h: 360, hue: "from-violet-400/3 to-cyan-400/2", image: "/src/assets/gallery/gallery11 -Training.png", },
  { id: 11, h: 190, hue: "from-sky-400/10 to-indigo-500/10", image: "/src/assets/gallery/gallery12SyinixTV.png", },
  { id: 12, h: 180, hue: "from-violet-400/10 to-cyan-400/10", image: "/src/assets/gallery/gallery12 Syinix Motivation.png",},
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gallery"
          title="Visual diary"
          subtitle="An ever-growing wall of work — leave plenty of room to add more."
        />

        {/* Gallery Grid */}
        <div className="columns-2 gap-5 md:columns-3 lg:columns-4 [&>*]:mb-5">
          {galleryItems.map((g) => (
            <Reveal key={g.id}>
              <button
                onClick={() => setActive(g.id)}
                style={{ height: g.h }}
                className="group relative block w-full overflow-hidden rounded-2xl glass"
              >
                {/* Image */}
                <img
                  src={g.image}
                  alt={`Gallery ${g.id + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${g.hue}`}
                />

                {/* Light effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_55%)]" />

                {/* White dashed frame */}
                <div className="absolute inset-3 rounded-xl border border-dashed border-white/30">
                  <div className="flex h-full items-center justify-center text-[10px] uppercase tracking-widest text-white/40">
                  
                  </div>
                </div>

                {/* Neon border hover */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl transition-shadow duration-500 group-hover:neon-border" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Popup */}
      {active !== null && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative"
    >

      {/* Close Button */}
      <button
        onClick={() => setActive(null)}
        className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-3xl text-white transition hover:bg-black"
      >
        ×
      </button>

      {/* Popup Image  */}
      <img
        src={galleryItems[active].image}
        alt={`Gallery ${active + 1}`}
        className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl" />
        </motion.div>
      </div>
          )}
    </section>
  );
}

/* ---------------- EXPERIENCE TIMELINE ---------------- */

const timeline = [
  { icon: GraduationCap, year: "2019 – 2024", title: "BSc Information Systems", place: "Haramaya University", desc: "Foundations in systems, databases, networks, software engineering and Developer." },
  { icon: Briefcase, year: "2024", title: "IT Support Internship", place: "Wolayta Sodo University Dawro Campus ", desc: "Hands-on infrastructure, networking and support across all departments." },
  { icon: Rocket, year: "2024 – Present", title: "Digital Marketing and Sales Trainee", place: "Transsion Manufacturing Plc - Bole", desc: "A Digital Marketer at Transsion Manufacturing PLC produces TECNO, INFINIX, ITEL MOBILE and SYINIX home appliances in Ethiopia, boosting manufacturing products" },
  { icon: Heart, year: "2024 – Present", title: "Graphics Designer, SEO Specialist", place: "Remote / Global - Bole 22 ", desc: "I design marketing materials such as social media posts, banners, flyers, and advertisements while managing digital marketing campaigns." },
  { icon: Cpu, year: "2025", title: "SEO & Digital Advertising Strategies", place: "Multiple Organizations", desc: "Worked on SEO optimization strategies, digital marketing workflows, and system integration to improve online visibility and performance. Gained hands-on experience with Meta Ads and Google Ads campaigns, including ad creation, targeting, and performance tracking to increase engagement and conversions across digital platforms." },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="A timeline of building things" />

        <div className="relative pl-6 sm:pl-0">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 sm:left-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className={`relative grid sm:grid-cols-2 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "sm:text-left" : "sm:text-right"} pl-10 sm:pl-0`}>
                    <div className="glass rounded-2xl p-5 transition-all hover:neon-border">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">{t.year}</span>
                      <h3 className="font-display mt-2 text-lg font-semibold">{t.title}</h3>
                      <div className="text-sm text-white/55">{t.place}</div>
                      <p className="mt-3 text-sm text-white/70">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block" />
                  <span className="absolute left-0 top-5 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full bg-[#0a1024] neon-border sm:left-1/2 sm:top-6">
                    <t.icon className="h-3.5 w-3.5 text-cyan-300" />
                    <span className="absolute h-full w-full rounded-full border border-cyan-400/50" style={{ animation: "pulse-ring 2.4s ease-out infinite" }} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const testimonials = [
  { name: "Mitku R.", role: "General Manager, Green Sun Tech", text: "Nathanael built a modern and professional website for Green Sun Tech that exceeded our expectations. His expertise and attention to detail made the entire process seamless." },
  { name: "Dawit M.", role: "Content Creator • TikTok", text: "Natty created some of my best content. From capturing great footage to delivering engaging edits, his creativity and professionalism consistently exceeded expectations." },
  { name: "Mr. Demone", role: "Syinix • Regional Manager", text: "Nathanael consistently delivered high-quality creative work for Syinix campaigns. His ability to combine compelling visuals with strong brand storytelling helped our products connect with audiences in a meaningful way." },
  { name: "Mitku R.", role: "MRKY Trading PLC, CEO", text: "Nathanael's expertise in digital marketing helped elevate our online presence. His work with Meta Ads, Google Ads, and other digital campaigns consistently delivered professional and impactful results." },
  { name: "Hanna G.", role: "Marketing Lead", text: "Nathanael brought exceptional creativity and professionalism to every project. His talent in video editing, graphic design, and motion design helped transform our ideas into compelling visual experiences" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Testimonials" title="Words from collaborators" />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050a1a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050a1a] to-transparent" />
        <div className="flex w-max gap-5 px-6" style={{ animation: "marquee 40s linear infinite" }}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <article
              key={i}
              className="glass-strong relative w-[360px] shrink-0 rounded-2xl p-6 transition-all hover:neon-border"
            >
              <Quote className="absolute -top-3 left-5 h-6 w-6 rounded-full bg-[#0a1024] p-1 text-cyan-300" />
              <div className="flex gap-1 text-cyan-300">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">"{t.text}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-semibold text-black">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- CONTACT ---------------- */

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nathanael-tesfaye-ba84a9301/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Natty-tf" },
  { icon: Sparkles, label: "Behance", href: "https://www.behance.net/nathanatesfaye" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/natty_tfu/?__pwa=1" },
  { icon: Send, label: "Telegram", href: "https://t.me/Natty_TF" },
  { icon: Facebook, label: "Facebook", href: "https://web.facebook.com/nathanael.tesfaye.5/" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build something cinematic"
          subtitle="Available for freelance, full-time and creative collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm />

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: Mail, label: "Email", value: "tesfayenathanael@gmail.com" },
                { icon: Phone, label: "Phone", value: "+251 913 503 352" },
                { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:neon-border"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-400/15 text-cyan-300">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="glass-strong mt-2 rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-white/55">
                  Find me online
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="group relative grid h-11 w-11 place-items-center rounded-full border border-cyan-300/30 bg-white/5 text-white/80 transition-all duration-500 hover:-translate-y-1 hover:text-cyan-200 hover:neon-glow"
                    >
                      <s.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT FORM ---------------- */

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_natty52",
        "template_4tycqnb",
        formRef.current!,
        "q_cCGtEGb79xVKRt_"
      )
      .then(
        () => {
          setSent(true);
          formRef.current?.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-10"
    >
      {sent && (
        <div className="absolute top-4 right-4 z-50 rounded-xl bg-green-500/20 px-4 py-2 text-sm text-green-200 backdrop-blur border border-green-400/40">
          Message sent successfully ✅
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-white/60">Your name</span>
          <input name="name" type="text" className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3" required />
        </label>

        <label className="block text-sm">
          <span className="text-white/60">Email</span>
          <input name="email" type="email" className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3" required />
        </label>
      </div>

      <label className="mt-5 block text-sm">
        <span className="text-white/60">Subject</span>
        <input name="subject" className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3" required />
      </label>

      <label className="mt-5 block text-sm">
        <span className="text-white/60">Message</span>
        <textarea name="message" rows={5} className="mt-2 w-full rounded-xl bg-white/5 px-4 py-3" required />
      </label>

      <div className="mt-7">
                <button
                type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40 active:translate-y-0">
    <span className="relative z-10 flex items-center justify-center gap-2">
      Send Message
    </span>
    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-white blur-xl"></span>
  </button>
</div>
    </form>
  );
}

/* ---------------- FOOTER ---------------- */

export function Footer() {
  return (
    <footer className="relative px-6 pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative h-px w-full overflow-hidden bg-white/5">
          <div className="absolute inset-y-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent blur-[1px]" />
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-5 text-sm text-white/55 sm:flex-row">
          <div className="flex items-center">
            <img
              src="/src/assets/nattylogo.png"
              alt="Natty Logo"
              className="h-25 w-auto"/>
          </div>
          <p>© {new Date().getFullYear()} Nathanael Tesfaye. Designed & built with care.</p>
          <div className="flex gap-3">
            {socials.slice(0, 4).map((s) => (
              <a key={s.label} href={s.href} className="text-white/60 transition hover:text-cyan-300">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}