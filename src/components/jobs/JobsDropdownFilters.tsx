import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const workExperienceOptions = ["0-2", "2-4", "5-7", "8-10", "11-13", "14-16"];
const sortByOptions = [
  { value: "newest", label: "Newest first" },
  { value: "popular", label: "Popular" },
  { value: "featured", label: "Featured" },
];

const JobsDropdownFilters = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="flex items-center gap-3">
      {/* Work Experience */}
      <Select>
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue placeholder="Experience" />
        </SelectTrigger>
        <SelectContent>
          {workExperienceOptions.map((opt) => (
            <SelectItem key={opt} value={opt}>
              {opt} years
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Date Range */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "h-9 w-[240px] justify-start text-left text-sm font-normal",
              !startDate && !endDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate && endDate
              ? `${format(startDate, "MM-dd-yyyy")} – ${format(endDate, "MM-dd-yyyy")}`
              : startDate
              ? `${format(startDate, "MM-dd-yyyy")} – End`
              : "Pick date range"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start">
          <div className="flex gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Start Date</p>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                className={cn("p-3 pointer-events-auto")}
              />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">End Date</p>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                disabled={(date) => (startDate ? date < startDate : false)}
                className={cn("p-3 pointer-events-auto")}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {/* Sort By */}
      <Select>
        <SelectTrigger className="w-[140px] h-9 text-sm">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortByOptions.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default JobsDropdownFilters;
