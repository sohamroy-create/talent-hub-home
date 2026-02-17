import {
  Brain, Monitor, HeartPulse, Factory, Package, Building2,
  Truck, Home, DollarSign, Briefcase, Megaphone, UtensilsCrossed,
  Film, GraduationCap
} from "lucide-react";

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

const CategoriesSection = () => {
  return (
    <section id="categories" className="pt-14 pb-8 px-4">
      <div className="container">
        <div className="grid grid-cols-7 gap-2 max-w-5xl mx-auto">
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
      </div>
    </section>
  );
};

export default CategoriesSection;
