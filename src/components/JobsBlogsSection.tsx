import { Briefcase, Search, PenLine, BookOpen, Megaphone, ArrowRight } from "lucide-react";

const cards = [
  {
    id: "jobs",
    header: "Jobs",
    icon: Briefcase,
    bg: "",
    iconBg: "bg-blue-400/10 ring-blue-400/20",
    items: [
      { text: "Post a Job", subtext: "Source talent, Globally", clickable: true, icon: PenLine },
      { text: "Look for a Job", subtext: "Look for jobs, Globally", clickable: true, icon: Search },
    ],
    hasClickHere: false,
  },
  {
    id: "blogs",
    header: "Blogs",
    icon: BookOpen,
    bg: "",
    iconBg: "bg-sky-400/10 ring-sky-400/20",
    items: [
      { text: "Post a Blog", subtext: "Become a thought leader", clickable: false, icon: PenLine },
      { text: "Look for a Blog", subtext: "Look for Industry insights", clickable: true, icon: Search },
    ],
    hasClickHere: false,
  },
  {
    id: "advertiseai",
    header: "AdvertiseAI",
    icon: Megaphone,
    bg: "",
    iconBg: "bg-blue-300/10 ring-blue-300/20",
    items: [
      { text: "Making your Jobs", subtext: "Reach the correct candidates", clickable: false, icon: Megaphone },
    ],
    hasClickHere: true,
  },
];

const JobsBlogsSection = () => {
  return (
    <section id="jobs" className="pt-13 pb-3 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`group rounded-xl border border-blue-300/60 ${card.bg} p-5 hover:shadow-xl hover:scale-[1.03] hover:border-blue-400 transition-all duration-300 cursor-pointer relative overflow-hidden`}
            >
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
              
              <div className="flex items-center mb-4 relative">
                <div className={`p-2 rounded-lg ${card.iconBg} ring-1`}>
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-extrabold text-foreground tracking-tight absolute left-1/2 -translate-x-1/2">{card.header}</h3>
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
                {card.hasClickHere && (
                  <a
                    href="#"
                    className="flex items-center justify-center p-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Click Here
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

export default JobsBlogsSection;
