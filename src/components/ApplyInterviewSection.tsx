import { Sparkles, Zap, MessageSquare, Clock, Send } from "lucide-react";
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
    <div className="flex items-center justify-center gap-1.5 mt-3">
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

const SuggestionBox = () => {
  const [value, setValue] = useState("");
  
  return (
    <div className="flex items-end gap-1.5 mt-3">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Your suggestion..."
        className="flex-1 text-xs rounded-md border border-primary/20 bg-background/60 px-2 py-1.5 resize-none focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground"
        rows={2}
      />
      <button
        onClick={() => { if (value.trim()) { setValue(""); } }}
        className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-md px-2 py-1 min-w-[36px] hover:bg-primary/90 transition-colors"
        style={{ height: '42px' }}
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

const cards = [
  {
    id: "applyai",
    header: "ApplyAI",
    icon: Sparkles,
    bg: "bg-[#8AABE8]",
    iconBg: "bg-white ring-blue-600/25",
    text: "Applying for a job just got 83% easier!",
    subtext: "The more you apply, the less you need to apply. Curious?",
    countdownDays: 27,
    hasSuggestion: false,
  },
  {
    id: "interviewai",
    header: "InterviewAI",
    icon: Zap,
    bg: "bg-[#8AABE8]",
    iconBg: "bg-white ring-sky-600/25",
    text: "Give AI Interviews without any hassle!",
    subtext: "Just send your AI avatar & Voila! Curious?",
    countdownDays: 43,
    hasSuggestion: false,
  },
  {
    id: "suggestions",
    header: "Suggestions",
    icon: MessageSquare,
    bg: "bg-[#8AABE8]",
    iconBg: "bg-white ring-indigo-600/25",
    text: "Let us know what feature you want!",
    subtext: "And we will name the feature after you!",
    countdownDays: null,
    hasSuggestion: true,
  },
];

const ApplyInterviewSection = () => {
  return (
    <section className="pt-3 pb-24 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`group rounded-xl border border-blue-300/60 ${card.bg} p-5 hover:shadow-xl hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 relative overflow-hidden flex flex-col`}
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

              <div className="flex items-center mb-3 relative">
                <div className={`p-2 rounded-lg ${card.iconBg} ring-1`}>
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground tracking-tight absolute left-1/2 -translate-x-1/2">{card.header}</h3>
              </div>

              <div className="relative space-y-3 flex-1">
                <div className="p-3 rounded-lg bg-background/60 border border-border/50">
                  <p className="text-sm font-bold text-foreground">{card.text}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{card.subtext}</p>
                </div>
              </div>
              {card.countdownDays && <CountdownClock days={card.countdownDays} />}
              {card.hasSuggestion && <SuggestionBox />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyInterviewSection;
