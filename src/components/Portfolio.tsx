import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";
import { HeroScene } from "./HeroScene";
import { MagneticButton } from "./MagneticButton";
import { TiltCard } from "./TiltCard";
import { Github, Instagram, Linkedin, ArrowUpRight, Mail } from "lucide-react";

const skills = [
  "Python", "C", "MySQL", "React JS", "Framer Motion",
  "Three.js", "AI/ML (YOLOv8)", "IoT Architectures", "TypeScript", "Tailwind CSS",
];

const projects = [
  {
    title: "Eco-Salvage AI",
    tag: "Computer Vision",
    desc: "E-waste reverse engineering pipeline using macro-OCR to identify and catalog salvageable components.",
    accent: "var(--neon-emerald)",
  },
  {
    title: "Dharani AI",
    tag: "Predictive Modeling",
    desc: "Predictive water crisis and borewell failure alert system powered by geospatial ML.",
    accent: "var(--neon-cyan)",
  },
  {
    title: "A* Pathfinding Visualizer",
    tag: "Algorithms",
    desc: "Interactive 2D navigation search algorithm demonstrator with step-through heuristic inspection.",
    accent: "var(--neon-purple)",
  },
  {
    title: "Decentralized Identity Checker",
    tag: "FinTech",
    desc: "Synthetic identity fraud detection for FinTech via decentralized consistency proofs.",
    accent: "var(--neon-cyan)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Gradient backdrop (sits behind particles) */}
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 0%, oklch(0.28 0.18 295 / 0.55), transparent 60%), radial-gradient(ellipse 70% 60% at 100% 30%, oklch(0.32 0.16 220 / 0.5), transparent 60%), radial-gradient(ellipse 80% 60% at 30% 100%, oklch(0.28 0.16 180 / 0.45), transparent 65%), linear-gradient(180deg, oklch(0.09 0.03 280) 0%, oklch(0.07 0.025 270) 50%, oklch(0.06 0.02 260) 100%)",
        }}
      />

      <ParticleBackground />

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full opacity-40 blur-[120px]"
          style={{ background: "var(--neon-purple)" }} />
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full opacity-30 blur-[140px]"
          style={{ background: "var(--neon-cyan)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-25 blur-[120px]"
          style={{ background: "var(--neon-emerald)" }} />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient-hero">∆</span> portfolio
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.12 }}
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border glass-card text-xs text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-neon-emerald animate-pulse" style={{ background: "var(--neon-emerald)" }} />
                Available for new architectures
              </motion.div>
              <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
                Building <span className="text-gradient-hero">intuitive</span><br />
                real-time systems.
              </motion.h1>
              <motion.p variants={fadeUp} transition={{ duration: 0.7 }}
                className="text-lg text-muted-foreground max-w-xl mb-10">
                Engineer working at the seam of AI, IoT and interface — designing complex architectures that feel effortless to use.
              </motion.p>
              <motion.div variants={fadeUp} transition={{ duration: 0.7 }}
                className="flex flex-wrap gap-4">
                <MagneticButton href="#projects" variant="primary">
                  View Projects <ArrowUpRight className="ml-1 inline h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="/resume.pdf" variant="secondary">
                  Download Resume
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
          <div className="h-[420px] sm:h-[520px] relative">
            <HeroScene />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp} transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-4" style={{ color: "var(--neon-cyan)" }}>About</p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Obsessed with the <span className="text-gradient-hero">invisible plumbing</span> of great software.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I build complex, real-time architectures that disappear behind beautiful interfaces.
              My focus sits at the intersection of AI/ML, IoT systems, and human-centered UI/UX —
              shipping work that's as resilient as it is delightful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From YOLOv8 vision pipelines to predictive infrastructure alerts, I treat every project
              as a chance to make hard things feel obvious.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.15 }} />
              <div className="relative h-full grid grid-cols-3 gap-2 p-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, type: "spring" }}
                    className="rounded-xl glass-card flex items-center justify-center"
                    style={{
                      boxShadow: i % 4 === 0 ? "var(--shadow-glow-cyan)" : undefined,
                    }}
                  >
                    <span className="text-xs font-mono text-muted-foreground">
                      {["AI", "IoT", "UX", "ML", "C", "JS", "3D", "DB", "∆"][i]}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "var(--neon-purple)" }}>Toolkit</p>
            <h2 className="text-4xl sm:text-5xl font-bold">Skills & Stack</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {skills.map((s) => (
              <motion.div
                key={s}
                variants={fadeUp}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="px-5 py-2.5 rounded-full glass-card text-sm font-medium cursor-default"
              >
                {s}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} transition={{ duration: 0.6 }} className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] mb-4" style={{ color: "var(--neon-emerald)" }}>Selected work</p>
            <h2 className="text-4xl sm:text-5xl font-bold max-w-2xl">
              Projects that bridge models and the real world.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6" style={{ perspective: 1200 }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <TiltCard>
                  <div className="relative h-full glass-card rounded-2xl p-8 overflow-hidden group">
                    <div
                      className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-50"
                      style={{ background: p.accent }}
                    />
                    <div className="relative" style={{ transform: "translateZ(40px)" }}>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-32 px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] mb-6" style={{ color: "var(--neon-cyan)" }}>
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} transition={{ duration: 0.7 }}
            className="text-5xl sm:text-7xl font-bold mb-8 leading-[1.05]">
            Let's <a href="mailto:hello@example.com" className="text-gradient-hero underline decoration-transparent hover:decoration-current">get in touch</a>.
          </motion.h2>
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Open to roles, collaborations, and unreasonably ambitious side projects.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
            <MagneticButton href="mailto:hello@example.com" variant="primary">
              <Mail className="mr-2 inline h-4 w-4" /> hello@example.com
            </MagneticButton>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex justify-center gap-6 mt-16"
          >
            {[
              { Icon: Github, href: "https://github.com", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4, color: "oklch(0.85 0.18 200)" }}
                className="h-12 w-12 rounded-full glass-card flex items-center justify-center text-muted-foreground transition-colors hover:text-neon-cyan"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} — Crafted with React, Three.js & Framer Motion.</span>
          <span>Designed in the dark.</span>
        </div>
      </section>
    </div>
  );
}
