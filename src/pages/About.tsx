import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Briefcase, BookOpen, Sparkles, ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const customEase = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: customEase as unknown as [number, number, number, number] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: customEase as unknown as [number, number, number, number] },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/60 py-28 md:py-40 px-4">
        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary-foreground"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary-foreground"
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-3 h-3 rounded-full bg-primary-foreground/30"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full bg-primary-foreground/20"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[30%] right-[15%] w-4 h-4 rounded-full bg-primary-foreground/15"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-full px-5 py-2 mb-8"
          >
            <Rocket className="h-4 w-4 text-primary-foreground" />
            <span className="text-xs font-bold text-primary-foreground tracking-widest uppercase">About Joblet AI</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground tracking-tighter leading-[0.95]"
          >
            The AI-First
            <br />
            <span className="relative">
              Job Marketplace
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary-foreground/30 origin-left rounded-full"
              />
            </span>
            <span className="text-primary-foreground/60">.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="mt-8 text-base md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We are building the fastest, smartest bridge between recruiters and talent. A lean, agile team obsessed with one thing: using cutting-edge AI to make hiring instant and intelligent.
            <span className="block mt-3 text-primary-foreground font-bold text-lg md:text-2xl">No bureaucracy. Just innovation.</span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════════ SPEED & AGILITY ═══════════════ */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex p-3.5 rounded-2xl bg-primary/10 mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-[1.05]">
                Built for
                <br />
                <span className="text-primary">Speed</span>.
                <br />
                Driven by Code.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl pl-6">
                  We don't just update our platform; we evolve it <span className="text-foreground font-semibold">daily</span>. Because we are in stealth, we move faster than anyone else. We are constantly iterating to ensure recruiters find the perfect match in record time, and candidates can apply in <span className="text-foreground font-semibold">seconds—not minutes</span>.
                </p>
                <p className="text-primary font-bold text-lg mt-4 pl-6">
                  We are redefining what "fast" means.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ TWO COLUMNS: RECRUITERS & CANDIDATES ═══════════════ */}
      <section className="py-24 md:py-32 px-4 bg-secondary/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter">
              Two sides. One platform.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Recruiters */}
            <motion.div
              variants={scaleIn}
              custom={0}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="group relative rounded-3xl border border-border bg-card p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-3 py-1">For Recruiters</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-4 leading-tight">
                  Precision Matches,<br />Zero Fluff.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Stop sifting through piles of unqualified resumes. Our AI marketplace analyzes skills and potential to deliver you the best candidates directly. We cut the noise so you can focus on hiring the future, faster.
                </p>
              </div>
            </motion.div>

            {/* Candidates */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              variants={scaleIn}
              custom={1}
              className="group relative rounded-3xl border border-border bg-card p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-t-3xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/10 rounded-full px-3 py-1">For Candidates</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-4 leading-tight">
                  One-Click Apps.<br />Infinite Opportunities.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Your time is valuable. Joblet.ai removes the friction from job hunting. Applying is lightning fast. Get your resume in front of the right people instantly and move on to the next opportunity.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ TRUST & PRIVACY ═══════════════ */}
      <section className="py-24 md:py-32 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-secondary/30 p-10 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute top-6 right-8 w-20 h-20 border border-primary/10 rounded-full" />
            <div className="absolute bottom-8 left-10 w-12 h-12 border border-primary/10 rounded-full" />
            <motion.div variants={scaleIn} className="inline-flex p-4 rounded-2xl bg-primary/10 mb-7">
              <Shield className="h-9 w-9 text-primary" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-5 leading-tight">
              Vigilant AI.<br />
              <span className="text-primary">Minimal Data.</span><br />
              Maximum Privacy.
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
              We believe smart tech doesn't need to be creepy. We are building strong guardrails to protect your information, collecting only what is absolutely necessary. Your data is yours. We just provide the secure bridge to your next career move.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ AI SUITE - COMING SOON ═══════════════ */}
      <section className="py-24 md:py-32 px-4 bg-foreground text-primary-foreground relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container max-w-5xl mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-5 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-black tracking-widest uppercase text-primary">Coming Soon</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              Introducing the
              <br />
              <span className="text-primary">Joblet AI Suite.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/50 text-base md:text-lg max-w-xl mx-auto">
              We aren't just keeping up; we are defining the future of work tech.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {[
              { emoji: "⚡", name: "ApplyAI", desc: "Applications that auto-fill and auto-optimize.", delay: 0 },
              { emoji: "🤖", name: "IntervieweeAI", desc: "Your personal interview simulator and coach.", delay: 1 },
              { emoji: "💰", name: "SalaryAI", desc: "Real-time compensation insights tailored to your skills.", delay: 2 },
              { emoji: "🎯", name: "JobmatchAI", desc: "So precise, it feels like mind-reading.", delay: 3 },
            ].map((tool) => (
              <motion.div
                key={tool.name}
                variants={scaleIn}
                custom={tool.delay}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5 + tool.delay * 0.5, repeat: Infinity, ease: "easeInOut", delay: tool.delay * 0.3 }}
                className="group relative flex items-start gap-5 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-sm p-6 hover:bg-primary-foreground/10 hover:border-primary/40 transition-all duration-400"
              >
                <motion.span
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  className="text-3xl shrink-0 mt-1"
                >
                  {tool.emoji}
                </motion.span>
                <div>
                  <h4 className="font-black text-primary-foreground tracking-tight text-lg">{tool.name}</h4>
                  <p className="text-sm text-primary-foreground/50 mt-1 leading-relaxed">{tool.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-primary-foreground/20 group-hover:text-primary group-hover:translate-x-1 transition-all absolute top-6 right-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ KNOWLEDGE HUB ═══════════════ */}
      <section className="py-20 md:py-28 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/40 p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="inline-flex p-4 rounded-2xl bg-primary/10 shrink-0 relative">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left relative">
              <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-3">
                Stay Ahead of the Curve.
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                The job market moves fast. Keep up with the latest trends, salary data, and insider tips on our Blog. We turn market information into market advantage.
              </p>
            </div>
            <a
              href="#"
              className="group/btn inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-3 text-sm font-bold hover:bg-primary/90 transition-all shrink-0 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Read Blog
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
