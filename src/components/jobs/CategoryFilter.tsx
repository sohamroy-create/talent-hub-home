import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const categories: { name: string; subcategories: string[] }[] = [
  {
    name: "Artificial Intelligence (AI)",
    subcategories: ["Machine Learning Engineer", "Data Scientist", "AI Research Scientist", "Computer Vision Engineer", "NLP Engineer", "AI Product Manager", "AI Solutions Architect", "MLOps Engineer", "AI Ethics & Governance Specialist", "AI Business Analyst"],
  },
  {
    name: "IT Services",
    subcategories: ["Software Developer", "Full Stack Developer", "Backend Developer", "Frontend Developer", "DevOps Engineer", "Cloud Engineer", "Cybersecurity Analyst", "Systems Administrator", "Network Engineer", "IT Support Specialist"],
  },
  {
    name: "Healthcare",
    subcategories: ["Physician", "Nurse", "Pharmacist", "Medical Laboratory Technician", "Healthcare Administrator", "Clinical Research Associate", "Medical Coder", "Healthcare Data Analyst", "Radiology Technician", "Health Informatics Specialist"],
  },
  {
    name: "Manufacturing & Production",
    subcategories: ["Production Engineer", "Quality Control Engineer", "Industrial Engineer", "Manufacturing Supervisor", "Process Engineer", "Plant Operations Manager", "Maintenance Engineer", "CNC Machine Operator", "Supply Planning Specialist", "Production Planner"],
  },
  {
    name: "Supply Chain",
    subcategories: ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Specialist", "Inventory Manager", "Demand Planner", "Warehouse Operations Manager", "Transportation Planner", "Vendor Management Specialist", "Distribution Manager", "Supply Chain Consultant"],
  },
  {
    name: "Infrastructure",
    subcategories: ["Civil Engineer", "Structural Engineer", "Project Engineer", "Construction Manager", "Site Supervisor", "Urban Planner", "Infrastructure Planning Analyst", "Facilities Manager", "Environmental Engineer", "Safety & Compliance Officer"],
  },
  {
    name: "Transport",
    subcategories: ["Transport Operations Manager", "Fleet Manager", "Logistics Planner", "Transport Coordinator", "Traffic Planner", "Aviation Operations Specialist", "Railway Operations Analyst", "Maritime Operations Officer", "Route Planning Analyst", "Mobility Solutions Consultant"],
  },
  {
    name: "Real Estate",
    subcategories: ["Real Estate Agent", "Property Manager", "Real Estate Analyst", "Leasing Consultant", "Facility Management Specialist", "Valuation Analyst", "Real Estate Investment Analyst", "Land Acquisition Specialist", "Property Operations Manager", "Real Estate Marketing Specialist"],
  },
  {
    name: "Finance & Accounting",
    subcategories: ["Financial Analyst", "Accountant", "Auditor", "Tax Consultant", "Risk Analyst", "Credit Analyst", "Financial Controller", "Treasury Analyst", "Compliance Analyst", "Investment Analyst"],
  },
  {
    name: "Consulting",
    subcategories: ["Management Consultant", "Strategy Consultant", "Business Analyst", "Operations Consultant", "IT Consultant", "Risk & Compliance Consultant", "HR Consultant", "Financial Advisory Consultant", "Process Improvement Consultant", "Change Management Consultant"],
  },
  {
    name: "Sales & Marketing",
    subcategories: ["Sales Executive", "Business Development Manager", "Account Manager", "Marketing Manager", "Digital Marketing Specialist", "Growth Marketing Analyst", "Product Marketing Manager", "Brand Strategist", "Market Research Analyst", "Customer Success Manager"],
  },
  {
    name: "Hospitality",
    subcategories: ["Hotel Manager", "Front Office Executive", "Food & Beverage Manager", "Restaurant Manager", "Housekeeping Manager", "Guest Relations Executive", "Event Coordinator", "Travel Consultant", "Revenue Management Analyst", "Hospitality Operations Manager"],
  },
  {
    name: "Media & Entertainment",
    subcategories: ["Content Writer", "Video Producer", "Film Editor", "Media Planner", "Digital Content Strategist", "Animation Artist", "Graphic Designer", "Social Media Manager", "Public Relations Specialist", "Broadcast Operations Executive"],
  },
  {
    name: "Education",
    subcategories: ["Teacher", "Professor", "Instructional Designer", "Curriculum Developer", "Academic Coordinator", "Education Counselor", "Learning & Development Specialist", "Educational Content Creator", "Assessment Specialist", "EdTech Product Manager"],
  },
  {
    name: "General Operations",
    subcategories: ["HR Manager", "Talent Acquisition Specialist", "Operations Manager", "Program Manager", "Project Manager", "Data Analyst", "Compliance Officer", "Customer Support Manager", "Business Operations Analyst", "Process Improvement Specialist"],
  },
];

const CategoryFilter = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubs, setSelectedSubs] = useState<string[]>([]);

  const toggleExpand = (name: string) => {
    setExpanded((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const toggleCategory = (catName: string, subs: string[]) => {
    const isSelected = selectedCategories.includes(catName);
    if (isSelected) {
      setSelectedCategories((prev) => prev.filter((c) => c !== catName));
      setSelectedSubs((prev) => prev.filter((s) => !subs.includes(s)));
    } else {
      setSelectedCategories((prev) => [...prev, catName]);
      setSelectedSubs((prev) => [...new Set([...prev, ...subs])]);
    }
  };

  const toggleSub = (sub: string, catName: string, allSubs: string[]) => {
    setSelectedSubs((prev) => {
      const next = prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub];
      const allChecked = allSubs.every((s) => next.includes(s));
      const anyChecked = allSubs.some((s) => next.includes(s));
      setSelectedCategories((cats) => {
        if (allChecked && !cats.includes(catName)) return [...cats, catName];
        if (!allChecked && cats.includes(catName)) return cats.filter((c) => c !== catName);
        return cats;
      });
      return next;
    });
  };

  const isCategoryIndeterminate = (subs: string[], catName: string) => {
    const anyChecked = subs.some((s) => selectedSubs.includes(s));
    return anyChecked && !selectedCategories.includes(catName);
  };

  return (
    <div className="space-y-1">
      {categories.map((cat) => (
        <div key={cat.name}>
          <div className="flex items-center gap-2 py-1.5 px-1 rounded hover:bg-accent transition-colors group">
            <Checkbox
              checked={
                selectedCategories.includes(cat.name)
                  ? true
                  : isCategoryIndeterminate(cat.subcategories, cat.name)
                  ? "indeterminate"
                  : false
              }
              onCheckedChange={() => toggleCategory(cat.name, cat.subcategories)}
            />
            <button
              onClick={() => toggleExpand(cat.name)}
              className="flex items-center gap-1.5 flex-1 text-left"
            >
              {expanded.includes(cat.name) ? (
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              ) : (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              )}
              <span className="text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                {cat.name}
              </span>
            </button>
          </div>
          {expanded.includes(cat.name) && (
            <div className="ml-8 space-y-1 pb-1">
              {cat.subcategories.map((sub) => (
                <label
                  key={sub}
                  className="flex items-center gap-2.5 cursor-pointer py-1 px-1 rounded hover:bg-accent/50 transition-colors"
                >
                  <Checkbox
                    checked={selectedSubs.includes(sub)}
                    onCheckedChange={() => toggleSub(sub, cat.name, cat.subcategories)}
                  />
                  <span className="text-xs text-muted-foreground hover:text-primary transition-colors">
                    {sub}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
