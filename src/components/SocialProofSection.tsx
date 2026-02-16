import { useState, useEffect, useCallback } from "react";
import { Users, Globe, MapPin, Building, ChevronLeft, ChevronRight } from "lucide-react";

const stats = [
  { label: "Recruiters", value: "5,678", icon: Users },
  { label: "Countries", value: "38", icon: Globe },
  { label: "Cities", value: "3,001", icon: MapPin },
  { label: "Companies", value: "1,243", icon: Building },
];

const upcomingFeatures = [
  { name: "ApplyAI", link: "#applyai", hasLearnMore: true },
  { name: "Interview AI", link: "#interviewai", hasLearnMore: true },
  { name: "Resume Scorer", link: null, hasLearnMore: false },
  { name: "Salary Calculator", link: null, hasLearnMore: false },
];

const newFeatures = [
  { name: "AdvertiseAI", link: "#advertiseai", hasLearnMore: true },
  { name: "Job Posting Optimiser", link: "#jobs", hasLearnMore: true },
  { name: "Blogs", link: "#blogs", hasLearnMore: true },
];

const allFeatures = [...upcomingFeatures, ...newFeatures];

const SocialProofSection = () => {
  const [statIndex, setStatIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);

  const isUpcoming = featureIndex < upcomingFeatures.length;
  const currentFeature = allFeatures[featureIndex];

  // Auto-scroll stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll features
  useEffect(() => {
    const interval = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % allFeatures.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const prevStat = useCallback(() => {
    setStatIndex((prev) => (prev - 1 + stats.length) % stats.length);
  }, []);
  const nextStat = useCallback(() => {
    setStatIndex((prev) => (prev + 1) % stats.length);
  }, []);
  const prevFeature = useCallback(() => {
    setFeatureIndex((prev) => (prev - 1 + allFeatures.length) % allFeatures.length);
  }, []);
  const nextFeature = useCallback(() => {
    setFeatureIndex((prev) => (prev + 1) % allFeatures.length);
  }, []);

  const currentStat = stats[statIndex];

  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left: Why JobletAI */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[160px]">
            {/* Lifted label */}
            <div className="w-[30%] flex items-center justify-center p-4 bg-gradient-to-br from-joblet-blue/10 to-joblet-blue/5 relative shadow-[4px_0_16px_-4px_hsl(217_91%_50%/0.15)]">
              <h3 className="text-2xl font-extrabold leading-tight text-center">
                <span className="text-[hsl(207,90%,54%)]">Why Joblet</span>
                <span className="text-[hsl(220,40%,13%)]">AI</span>
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
                  className="flex flex-col items-center gap-2 p-5 rounded-xl bg-secondary w-full min-h-[120px] justify-center animate-fade-in"
                >
                  <currentStat.icon className="h-8 w-8 text-primary" />
                  <span className="text-3xl font-bold text-foreground">{currentStat.value}</span>
                  <span className="text-sm font-medium text-muted-foreground">{currentStat.label}</span>
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
                    onClick={() => setStatIndex(i)}
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
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[160px]">
            {/* Lifted label */}
            <div className="w-[30%] flex items-center justify-center p-4 bg-gradient-to-br from-joblet-blue/10 to-joblet-blue/5 relative shadow-[4px_0_16px_-4px_hsl(217_91%_50%/0.15)]">
              <div className="flex items-center gap-1">
                <button
                  onClick={prevFeature}
                  className="p-0.5 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
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
                        <span className="text-[hsl(207,90%,54%)] block">Upcoming</span>
                        <span className="text-[hsl(220,40%,13%)]">Features</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[hsl(207,90%,54%)]">New</span>{" "}
                        <span className="text-[hsl(220,40%,13%)]">Features</span>
                      </>
                    )}
                  </h3>
                </div>
                <button
                  onClick={nextFeature}
                  className="p-0.5 rounded-full hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
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
                  className="flex flex-col items-center gap-3 p-5 rounded-xl bg-secondary w-full min-h-[120px] justify-center animate-fade-in text-center"
                >
                  <span className="text-xl font-bold text-foreground">{currentFeature.name}</span>
                  {currentFeature.hasLearnMore && currentFeature.link && (
                    <a
                      href={currentFeature.link}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Learn More →
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
                    onClick={() => setFeatureIndex(i)}
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
