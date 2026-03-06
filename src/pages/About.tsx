import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Zap, Users, Briefcase, BookOpen, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero / Mission Statement */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/85 to-primary/65 py-24 md:py-32 px-4">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="absolute top-12 right-[15%] w-64 h-64 border border-primary-foreground/10 rounded-full" />
        <div className="absolute bottom-8 left-[10%] w-40 h-40 border border-primary-foreground/10 rounded-full" />
        
        <div className="container max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
            <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">About Joblet AI</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground tracking-tight leading-[1.05]">
            The AI-First<br />Job Marketplace.
          </h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            We are building the fastest, smartest bridge between recruiters and talent. In an era of slow applications and endless forms, Joblet.ai is flipping the script. We are a lean, agile team obsessed with one thing: using cutting-edge AI to make hiring instant and intelligent. No bureaucracy, just innovation.
          </p>
        </div>
      </section>

      {/* Philosophy - Speed & Agility */}
      <section className="py-20 md:py-28 px-4 border-b border-border">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-secondary mb-5">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-tight">
                Built for Speed.<br />Driven by Code.
              </h2>
            </div>
            <div className="flex items-start">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg md:pt-16">
                We don't just update our platform; we evolve it daily. Because we are in stealth, we move faster than anyone else. We are constantly iterating to ensure recruiters find the perfect match in record time, and candidates can apply in seconds—not minutes. We are redefining what "fast" means in the job market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column: Recruiters & Candidates */}
      <section className="py-20 md:py-28 px-4 bg-secondary/40">
        <div className="container max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* For Recruiters */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex p-3 rounded-xl bg-secondary mb-5">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-3">
                Precision Matches, Zero Fluff.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Stop sifting through piles of unqualified resumes. Our AI marketplace analyzes skills and potential to deliver you the best candidates directly. We cut the noise so you can focus on hiring the future, faster.
              </p>
              <div className="mt-5 text-xs font-bold text-primary uppercase tracking-widest">For Recruiters</div>
            </div>

            {/* For Candidates */}
            <div className="group relative rounded-2xl border border-border bg-card p-8 md:p-10 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/40 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-flex p-3 rounded-xl bg-secondary mb-5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight mb-3">
                One-Click Applications. Infinite Opportunities.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Your time is valuable. Joblet.ai removes the friction from job hunting. With access to a massive range of job options, applying is lightning fast. Get your resume in front of the right people instantly and move on to the next opportunity.
              </p>
              <div className="mt-5 text-xs font-bold text-primary uppercase tracking-widest">For Candidates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}
      <section className="py-20 md:py-28 px-4 border-b border-border">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="inline-flex p-4 rounded-2xl bg-secondary mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight mb-4">
            Vigilant AI. Minimal Data.<br />Maximum Privacy.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
            We believe smart tech doesn't need to be creepy. We are building strong guardrails to protect your information, collecting only what is absolutely necessary. Your data is yours. We just provide the secure bridge to your next career move.
          </p>
        </div>
      </section>

      {/* AI Suite - Coming Soon */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
              <span className="text-xs font-bold text-primary tracking-wide uppercase">Coming Soon</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Introducing the Joblet AI Suite.
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
              We aren't just keeping up; we are defining the future of work tech. Get ready for a new era of job searching.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "⚡", name: "ApplyAI", desc: "Applications that auto-fill and auto-optimize." },
              { emoji: "🤖", name: "IntervieweeAI", desc: "Your personal interview simulator and coach." },
              { emoji: "💰", name: "SalaryAI", desc: "Real-time compensation insights tailored to your skills." },
              { emoji: "🎯", name: "JobmatchAI", desc: "So precise, it feels like mind-reading." },
            ].map((tool) => (
              <div
                key={tool.name}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl shrink-0 mt-0.5">{tool.emoji}</span>
                <div>
                  <h4 className="font-extrabold text-foreground tracking-tight">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="py-16 md:py-20 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 shrink-0">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-foreground tracking-tight mb-2">
                Stay Ahead of the Curve.
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                The job market moves fast. Keep up with the latest trends, salary data, and insider tips on our Blog. We turn market information into market advantage.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-5 py-2.5 text-sm font-bold hover:bg-primary/90 transition-colors shrink-0"
            >
              Read Blog <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
