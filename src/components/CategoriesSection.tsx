import {
  Brain, Monitor, HeartPulse, Factory, Package, Building2,
  Truck, Home, DollarSign, Briefcase, Megaphone, UtensilsCrossed,
  Film, GraduationCap, ChevronLeft, ChevronRight
} from "lucide-react";
import { useRef } from "react";

const categories = [
  { name: "AI", icon: Brain },
  { name: "IT Services", icon: Monitor },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Manufacturing & Production", icon: Factory },
  { name: "Supply Chain", icon: Package },
  { name: "Infrastructure", icon: Building2 },
  { name: "Transport", icon: Truck },
  { name: "Real Estate", icon: Home },
  { name: "Finance & Accounting", icon: DollarSign },
  { name: "Consulting", icon: Briefcase },
  { name: "Sales & Marketing", icon: Megaphone },
  { name: "Hospitality", icon: UtensilsCrossed },
  { name: "Media & Entertainment", icon: Film },
  { name: "Education", icon: GraduationCap },
];

const topRow = categories.slice(0, 7);
const bottomRow = categories.slice(7);

const CategoriesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 200;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="categories" className="pt-14 pb-8 px-4">
      <div className="container">
        {/* Desktop: 7-col grid */}
        <div className="hidden md:grid grid-cols-7 gap-2 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border bg-card hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all text-center group"
            >
              <cat.icon className="h-5 w-5 text-primary group-hover:text-primary/80" />
              <span className="text-xs font-medium text-foreground leading-tight">{cat.name}</span>
            </a>
          ))}
        </div>

        {/* Mobile: double-stacked horizontal scroll with arrows */}
        <div className="md:hidden relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 bg-background/90 border border-border rounded-full p-1 shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 bg-background/90 border border-border rounded-full p-1 shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 text-foreground" />
          </button>

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide snap-x snap-mandatory px-6">
            <div className="flex gap-2 w-max">
              {topRow.map((cat) => (
                <a
                  key={cat.name}
                  href="#"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all text-center group min-w-[110px] snap-start"
                >
                  <cat.icon className="h-5 w-5 text-primary group-hover:text-primary/80" />
                  <span className="text-xs font-medium text-foreground leading-tight">{cat.name}</span>
                </a>
              ))}
            </div>
            <div className="flex gap-2 w-max mt-2">
              {bottomRow.map((cat) => (
                <a
                  key={cat.name}
                  href="#"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border bg-card hover:shadow-md transition-all text-center group min-w-[110px] snap-start"
                >
                  <cat.icon className="h-5 w-5 text-primary group-hover:text-primary/80" />
                  <span className="text-xs font-medium text-foreground leading-tight">{cat.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
