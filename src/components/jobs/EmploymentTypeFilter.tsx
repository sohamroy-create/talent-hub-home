import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const employmentTypes = [
  "Full time",
  "Part time",
  "Intern",
  "In office",
  "Remote",
  "Hybrid",
];

const EmploymentTypeFilter = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (type: string) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="space-y-2.5">
      {employmentTypes.map((type) => (
        <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
          <Checkbox
            checked={selected.includes(type)}
            onCheckedChange={() => toggle(type)}
          />
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {type}
          </span>
        </label>
      ))}
    </div>
  );
};

export default EmploymentTypeFilter;
