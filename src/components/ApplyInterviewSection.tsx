import { Sparkles, Zap, MessageSquare, ArrowRight, Clock } from "lucide-react";

const cards = [
  {
    id: "applyai",
    header: "ApplyAI",
    icon: Sparkles,
    accent: "from-blue-600/20 to-blue-400/10",
    iconBg: "bg-blue-600/10 ring-blue-600/20",
    text: "Applying for a job just got 83% easier!",
    subtext: "The more you apply, the less you need to apply. Curious?",
    badge: "27 days to launch",
    hasCta: true,
  },
  {
    id: "interviewai",
    header: "InterviewAI",
    icon: Zap,
    accent: "from-sky-600/20 to-sky-400/10",
    iconBg: "bg-sky-600/10 ring-sky-600/20",
    text: "Give AI Interviews without any hassle!",
    subtext: "Just send your AI avatar & Voila! Curious?",
    badge: "43 days to launch",
    hasCta: true,
  },
  {
    id: "suggestions",
    header: "Suggestions",
    icon: MessageSquare,
    accent: "from-indigo-500/20 to-indigo-400/10",
    iconBg: "bg-indigo-500/10 ring-indigo-500/20",
    text: "Let us know what feature you want!",
    subtext: "And we will name the feature after you!",
    badge: null,
    hasCta: false,
  },
];

const ApplyInterviewSection = () => {
  return (
    <section className="pt-3 pb-10 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`group rounded-xl border border-primary/15 bg-gradient-to-br ${card.accent} p-5 hover:shadow-xl hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

              <div className="flex items-center gap-3 mb-3 relative">
                <div className={`p-2 rounded-lg ${card.iconBg} ring-1`}>
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">{card.header}</h3>
                {card.badge && (
                  <span className="ml-auto flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    <Clock className="h-3 w-3" />
                    {card.badge}
                  </span>
                )}
              </div>

              <div className="relative space-y-2">
                <p className="text-sm font-bold text-foreground">{card.text}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.subtext}</p>
                {card.hasCta && (
                  <a
                    href={`#${card.id}`}
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group/cta"
                  >
                    Learn More
                    <ArrowRight className="h-3 w-3 group-hover/cta:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyInterviewSection;
