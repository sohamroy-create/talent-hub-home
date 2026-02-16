import { Briefcase, Search, PenLine, BookOpen, Megaphone, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "jobs",
    header: "Jobs",
    icon: Briefcase,
    accent: "from-blue-400/15 to-sky-300/10",
    iconBg: "bg-blue-400/10 ring-blue-400/20",
    items: [
      { text: "Post a Job", subtext: "Source talent, Globally", clickable: true, icon: PenLine },
      { text: "Look for a Job", subtext: "Look for jobs, Globally", clickable: true, icon: Search },
    ],
  },
  {
    id: "blogs",
    header: "Blogs",
    icon: BookOpen,
    accent: "from-sky-400/15 to-blue-300/10",
    iconBg: "bg-sky-400/10 ring-sky-400/20",
    items: [
      { text: "Post a Blog", subtext: "Become a thought leader", clickable: true, icon: PenLine },
      { text: "Look for a Blog", subtext: "Look for Industry insights", clickable: false, icon: Search },
    ],
  },
  {
    id: "advertiseai",
    header: "AdvertiseAI",
    icon: Megaphone,
    accent: "from-blue-300/15 to-sky-200/10",
    iconBg: "bg-blue-300/10 ring-blue-300/20",
    items: [
      { text: "Making your Jobs", subtext: "Reach the correct candidates", clickable: false, icon: Megaphone },
    ],
  },
];

const JobsBlogsSection = () => {
  return (
    <section id="jobs" className="pt-10 pb-3 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`group rounded-xl border border-primary/15 bg-gradient-to-br ${card.accent} p-5 hover:shadow-xl hover:scale-[1.03] hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
              
              <div className="flex items-center justify-center mb-4 relative">
                <h3 className="text-lg font-extrabold text-foreground tracking-tight">{card.header}</h3>
                <div className={`absolute right-0 p-2 rounded-lg ${card.iconBg} ring-1`}>
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              
              <div className="space-y-3 relative">
                {card.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/50 hover:border-primary/20 hover:bg-background/80 transition-all duration-200"
                  >
                    <div className="p-1.5 rounded-md bg-primary/10 shrink-0 mt-0.5">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      {item.clickable ? (
                        <a href="#" className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1 group/link">
                          {item.text}
                          <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <p className="text-sm font-bold text-foreground">{item.text}</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-0.5">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsBlogsSection;
