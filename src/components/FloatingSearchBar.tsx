import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const FloatingSearchBar = () => {
  return (
    <div className="relative z-20 flex justify-center -mt-6">
      <div className="w-[80%] max-w-4xl bg-background rounded-xl shadow-lg border border-border flex items-center px-4 py-3 gap-3">
        <Search className="h-5 w-5 text-muted-foreground shrink-0" />
        <Input
          placeholder="Search jobs, companies, or categories..."
          className="border-0 shadow-none focus-visible:ring-0 text-base bg-transparent"
        />
        <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0">
          Search
        </button>
      </div>
    </div>
  );
};

export default FloatingSearchBar;
