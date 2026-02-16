import { useState, useEffect, useCallback, useRef } from "react";
import { Users, Globe, MapPin, Building, ChevronLeft, ChevronRight, Sparkles, Zap, FileSearch, Calculator, Megaphone, PenLine, BookOpen } from "lucide-react";

const stats = [
  { label: "Recruiters", value: "5,678", icon: Users, accent: "from-blue-400/20 to-blue-300/10" },
  { label: "Countries", value: "38", icon: Globe, accent: "from-sky-500/20 to-sky-300/10" },
  { label: "Cities", value: "3,001", icon: MapPin, accent: "from-indigo-500/20 to-indigo-300/10" },
  { label: "Companies", value: "1,243", icon: Building, accent: "from-cyan-500/20 to-cyan-300/10" },
];

const upcomingFeatures = [
  { name: "ApplyAI", link: "#applyai", hasLearnMore: true, icon: Sparkles, accent: "from-blue-500/20 to-blue-400/10" },
  { name: "Interview AI", link: "#interviewai", hasLearnMore: true, icon: Zap, accent: "from-sky-500/20 to-sky-300/10" },
  { name: "Resume Scorer", link: null, hasLearnMore: false, icon: FileSearch, accent: "from-indigo-500/20 to-indigo-300/10" },
  { name: "Salary Calculator", link: null, hasLearnMore: false, icon: Calculator, accent: "from-cyan-500/20 to-cyan-300/10" },
];

const newFeatures = [
  { name: "AdvertiseAI", link: "#advertiseai", hasLearnMore: true, icon: Megaphone, accent: "from-blue-600/20 to-blue-400/10" },
  { name: "Job Posting Optimiser", link: "#jobs", hasLearnMore: true, icon: PenLine, accent: "from-sky-600/20 to-sky-400/10" },
  { name: "Blogs", link: "#blogs", hasLearnMore: true, icon: BookOpen, accent: "from-indigo-400/20 to-indigo-300/10" },
];

const allFeatures = [...upcomingFeatures, ...newFeatures];

const DEFAULT_INTERVAL = 2000;
const MANUAL_INTERVAL = 5000;

const SocialProofSection = () => {
  const [statIndex, setStatIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  const statIntervalRef = useRef(DEFAULT_INTERVAL);
  const featureIntervalRef = useRef(DEFAULT_INTERVAL);

  const isUpcoming = featureIndex < upcomingFeatures.length;
  const currentFeature = allFeatures[featureIndex];

  // Auto-scroll stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % stats.length);
      statIntervalRef.current = DEFAULT_INTERVAL; // reset after manual
    }, statIntervalRef.current);
    return () => clearInterval(interval);
  }, [statIndex]);

  // Auto-scroll features
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % allFeatures.length);
      featureIntervalRef.current = DEFAULT_INTERVAL;
    }, featureIntervalRef.current);
    return () => clearInterval(interval);
  }, [featureIndex]);

  const prevStat = useCallback(() => {
    statIntervalRef.current = MANUAL_INTERVAL;
    setStatIndex((prev) => (prev - 1 + stats.length) % stats.length);
  }, []);
  const nextStat = useCallback(() => {
    statIntervalRef.current = MANUAL_INTERVAL;
    setStatIndex((prev) => (prev + 1) % stats.length);
  }, []);
  const prevFeature = useCallback(() => {
    featureIntervalRef.current = MANUAL_INTERVAL;
    setFeatureIndex((prev) => (prev - 1 + allFeatures.length) % allFeatures.length);
  }, []);
  const nextFeature = useCallback(() => {
    featureIntervalRef.current = MANUAL_INTERVAL;
    setFeatureIndex((prev) => (prev + 1) % allFeatures.length);
  }, []);

  const currentStat = stats[statIndex];

  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left: Why JobletAI */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[160px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30">
            {/* Lifted label */}
            <div className="w-[30%] flex items-center justify-center p-4 bg-primary relative shadow-[4px_0_16px_-4px_hsl(217_91%_50%/0.15)] border-r border-primary/20">
              <h3 className="text-2xl font-extrabold leading-tight text-center">
                <span className="text-primary-foreground">Why Joblet</span>
                <span className="text-primary" style={{ WebkitTextStroke: '1.5px white' }}>AI</span>
              </h3>
            </div>
            <div className="w-[70%] flex flex-col items-center justify-center p-4 gap-2">
              <div className="flex items-center gap-2 w-full max-w-[240px]">
                <button
                  onClick={prevStat}
                  className="p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Previous stat"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div
                  key={statIndex}
                  className={`flex flex-col items-center gap-2 p-5 rounded-xl bg-gradient-to-br ${currentStat.accent} border border-primary/10 w-full h-[120px] justify-center animate-fade-in shadow-[0_4px_20px_-4px_hsl(217_91%_50%/0.12)] transition-all duration-300`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <currentStat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-3xl font-extrabold tracking-tight text-foreground">{currentStat.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{currentStat.label}</span>
                </div>
                <button
                  onClick={nextStat}
                  className="p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Next stat"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              {/* Dots */}
              <div className="flex gap-1.5">
                {stats.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      statIntervalRef.current = MANUAL_INTERVAL;
                      setStatIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === statIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to stat ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[160px] transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-primary/30">
            {/* Lifted label */}
            <div className="w-[30%] flex items-center justify-center p-4 bg-primary relative shadow-[4px_0_16px_-4px_hsl(217_91%_50%/0.15)] border-r border-primary/20">
              <div className="flex items-center gap-1">
                <button
                  onClick={prevFeature}
                  className="p-0.5 rounded-full hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Previous label"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <div
                  key={isUpcoming ? "upcoming" : "new"}
                  className="text-center animate-fade-in"
                >
                  <h3 className="text-xl font-extrabold leading-tight">
                    {isUpcoming ? (
                      <>
                        <span className="text-primary-foreground block">Upcoming</span>
                        <span className="text-primary-foreground/80">Features</span>
                      </>
                    ) : (
                      <>
                        <span className="text-primary-foreground">New</span>{" "}
                        <span className="text-primary-foreground/80">Features</span>
                      </>
                    )}
                  </h3>
                </div>
                <button
                  onClick={nextFeature}
                  className="p-0.5 rounded-full hover:bg-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label="Next label"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="w-[70%] flex flex-col items-center justify-center p-4 gap-2">
              <div className="flex items-center gap-2 w-full max-w-[240px]">
                <button
                  onClick={prevFeature}
                  className="p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div
                  key={featureIndex}
                  className={`flex flex-col items-center gap-2 p-5 rounded-xl bg-gradient-to-br ${currentFeature.accent} border border-primary/10 w-full h-[120px] justify-center animate-fade-in text-center shadow-[0_4px_20px_-4px_hsl(217_91%_50%/0.12)] transition-all duration-300`}
                >
                  <div className="p-2 rounded-lg bg-primary/10 ring-1 ring-primary/20">
                    <currentFeature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-base font-extrabold tracking-tight text-foreground leading-tight">{currentFeature.name}</span>
                  {currentFeature.hasLearnMore && currentFeature.link && (
                    <a
                      href={currentFeature.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
                    >
                      Learn More <span className="text-sm">→</span>
                    </a>
                  )}
                </div>
                <button
                  onClick={nextFeature}
                  className="p-1 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              {/* Dots */}
              <div className="flex gap-1.5">
                {allFeatures.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      featureIntervalRef.current = MANUAL_INTERVAL;
                      setFeatureIndex(i);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === featureIndex ? "bg-primary" : "bg-border"
                    }`}
                    aria-label={`Go to feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;