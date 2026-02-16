import { Sparkles, Zap, MessageSquare, Clock } from "lucide-react";
import { useState, useEffect } from "react";

interface CountdownProps {
  days: number;
}

const CountdownClock = ({ days }: CountdownProps) => {
  const [now, setNow] = useState(Date.now());
  const target = Date.now() + days * 86400000;

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(0, target - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const units = [
    { label: "D", value: d },
    { label: "H", value: h },
    { label: "M", value: m },
    { label: "S", value: s },
  ];

  return (
    <div className="flex items-center gap-1.5 mt-3">
      <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
      <div className="flex gap-1">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center bg-primary/10 border border-primary/20 rounded-md px-2 py-1 min-w-[36px]">
            <span className="text-sm font-extrabold text-foreground leading-none tabular-nums">{String(u.value).padStart(2, "0")}</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const cards = [
  {
    id: "applyai",
    header: "ApplyAI",
    icon: Sparkles,
    accent: "from-blue-600/25 to-blue-500/15",
    iconBg: "bg-blue-600/15 ring-blue-600/25",
    text: "Applying for a job just got 83% easier!",
    subtext: "The more you apply, the less you need to apply. Curious?",
    countdownDays: 27,
  },
  {
    id: "interviewai",
    header: "InterviewAI",
    icon: Zap,
    accent: "from-sky-600/25 to-blue-500/15",
    iconBg: "bg-sky-600/15 ring-sky-600/25",
    text: "Give AI Interviews without any hassle!",
    subtext: "Just send your AI avatar & Voila! Curious?",
    countdownDays: 43,
  },
  {
    id: "suggestions",
    header: "Suggestions",
    icon: MessageSquare,
    accent: "from-indigo-600/25 to-blue-500/15",
    iconBg: "bg-indigo-600/15 ring-indigo-600/25",
    text: "Let us know what feature you want!",
    subtext: "And we will name the feature after you!",
    countdownDays: null,
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
              className={`group rounded-xl border border-primary/15 bg-gradient-to-br ${card.accent} p-5 hover:shadow-xl hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 relative overflow-hidden flex flex-col`}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

              <div className="flex items-center justify-center mb-3 relative">
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">{card.header}</h3>
                <div className={`absolute right-0 p-2 rounded-lg ${card.iconBg} ring-1`}>
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <div className="relative space-y-2 flex-1">
                <p className="text-sm font-bold text-foreground">{card.text}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.subtext}</p>
              </div>
              {card.countdownDays && <CountdownClock days={card.countdownDays} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyInterviewSection;
