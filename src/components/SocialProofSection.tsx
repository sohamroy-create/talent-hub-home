import { useState, useEffect } from "react";
import { Users, Globe, MapPin, Building } from "lucide-react";

const stats = [
  { label: "Recruiters", value: "5678", icon: Users },
  { label: "Countries", value: "38", icon: Globe },
  { label: "Cities", value: "3001", icon: MapPin },
  { label: "Companies", value: "1243", icon: Building },
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
  const [activeTab, setActiveTab] = useState<"upcoming" | "new">("upcoming");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "upcoming" ? "new" : "upcoming"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = activeTab === "upcoming" ? upcomingFeatures : newFeatures;

  return (
    <section className="py-4 px-4">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
          {/* Left: Why JobletAI */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[120px]">
            <div className="w-[30%] flex items-center justify-center p-3 bg-gradient-to-br from-primary/10 to-accent">
              <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight text-center">
                Why JobletAI
              </h3>
            </div>
            <div className="w-[70%] flex items-center overflow-x-auto gap-3 p-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-shrink-0 flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary min-w-[90px]"
                >
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="text-lg font-bold text-foreground">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="flex rounded-xl border border-border overflow-hidden bg-card min-h-[120px]">
            <div className="w-[30%] flex items-center justify-center p-3 bg-gradient-to-br from-primary/10 to-accent">
              <div className="text-center">
                <h3
                  className={`text-base font-bold cursor-pointer transition-all leading-tight ${
                    activeTab === "upcoming"
                      ? "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                      : "text-muted-foreground text-xs"
                  }`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming Features
                </h3>
                <div className="my-1.5 h-px bg-border" />
                <h3
                  className={`text-base font-bold cursor-pointer transition-all leading-tight ${
                    activeTab === "new"
                      ? "bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                      : "text-muted-foreground text-xs"
                  }`}
                  onClick={() => setActiveTab("new")}
                >
                  New Features
                </h3>
              </div>
            </div>
            <div className="w-[70%] flex items-center overflow-x-auto gap-3 p-3">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex-shrink-0 flex flex-col items-center gap-1 p-3 rounded-lg bg-secondary min-w-[110px] text-center"
                >
                  <span className="text-sm font-semibold text-foreground">{feature.name}</span>
                  {feature.hasLearnMore && feature.link && (
                    <a
                      href={feature.link}
                      className="text-[10px] text-primary hover:underline"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
