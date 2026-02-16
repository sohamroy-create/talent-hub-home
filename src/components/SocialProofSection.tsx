import { useState, useEffect } from "react";
import { Users, Globe, MapPin, Building } from "lucide-react";

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

const SocialProofSection = () => {
  const [statIndex, setStatIndex] = useState(0);
  const [featureIndex, setFeatureIndex] = useState(0);
  // Total cycle: 4 upcoming (8s) + 3 new (6s) = 14s, tracked as a global tick
  const [globalTick, setGlobalTick] = useState(0);

  // Global tick every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobalTick((prev) => (prev + 1) % 7); // 7 ticks = 14 seconds total cycle
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Derive which phase we're in
  const isUpcoming = globalTick < 4; // ticks 0-3 = upcoming (8s)
  const currentFeatureIndex = isUpcoming ? globalTick : globalTick - 4;
  const features = isUpcoming ? upcomingFeatures : newFeatures;
  const currentFeature = features[currentFeatureIndex];

  // Stats carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStatIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentStat = stats[statIndex];

  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left: Why JobletAI */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[140px]">
            <div className="w-[30%] flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 via-accent to-primary/10">
              <h3 className="text-xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-secondary-foreground bg-clip-text text-transparent leading-tight text-center drop-shadow-sm">
                Why JobletAI
              </h3>
            </div>
            <div className="w-[70%] flex items-center justify-center p-4">
              <div
                key={statIndex}
                className="flex flex-col items-center gap-2 p-6 rounded-xl bg-secondary w-full max-w-[200px] animate-fade-in"
              >
                <currentStat.icon className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold text-foreground">{currentStat.value}</span>
                <span className="text-sm font-medium text-muted-foreground">{currentStat.label}</span>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[140px]">
            <div className="w-[30%] flex items-center justify-center p-4 bg-gradient-to-br from-primary/20 via-accent to-primary/10">
              <div
                key={isUpcoming ? "upcoming" : "new"}
                className="text-center animate-fade-in"
              >
                <h3 className="text-lg font-extrabold bg-gradient-to-r from-primary via-primary/80 to-secondary-foreground bg-clip-text text-transparent leading-tight drop-shadow-sm">
                  {isUpcoming ? "Upcoming Features" : "New Features"}
                </h3>
              </div>
            </div>
            <div className="w-[70%] flex items-center justify-center p-4">
              <div
                key={`${isUpcoming}-${currentFeatureIndex}`}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-secondary w-full max-w-[220px] animate-fade-in text-center"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
