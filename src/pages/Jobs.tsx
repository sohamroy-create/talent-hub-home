import { useState } from "react";
import Header from "@/components/Header";
import JobsSearchBar from "@/components/jobs/JobsSearchBar";
import JobsDropdownFilters from "@/components/jobs/JobsDropdownFilters";
import EmploymentTypeFilter from "@/components/jobs/EmploymentTypeFilter";
import CategoryFilter from "@/components/jobs/CategoryFilter";
import JobCardGrid from "@/components/jobs/JobCardGrid";
import MobileFilterSheet from "@/components/jobs/MobileFilterSheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight } from "lucide-react";

const Jobs = () => {
  const isMobile = useIsMobile();
  const [filterOpen, setFilterOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col bg-background">
        <Header />

        {/* Full-width search bar */}
        <div className="px-4 py-3 border-b border-border">
          <JobsSearchBar />
        </div>

        {/* Filter toggle button - hugs left edge */}
        <div className="relative">
        <button
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-1 px-3 h-8 bg-primary text-primary-foreground rounded-br-lg shadow-md text-xs font-medium"
            aria-label="Open filters"
          >
            <ChevronRight className="h-3.5 w-3.5" />
            Filters
          </button>
        </div>

        {/* Mobile filter sheet */}
        <MobileFilterSheet open={filterOpen} onOpenChange={setFilterOpen} />

        {/* Job cards */}
        <main className="flex-1 overflow-y-auto p-4 scrollbar-hide">
          <JobCardGrid />
        </main>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />

      {/* Top bar: search + dropdown filters */}
      <div className="flex items-center gap-4 px-6 py-3 border-b border-border">
        <div className="w-1/2">
          <JobsSearchBar />
        </div>
        <div className="flex-1">
          <JobsDropdownFilters />
        </div>
      </div>

      {/* Main content: sidebar + job grid */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar */}
        <aside className="w-1/4 min-w-[260px] max-w-[340px] border-r border-border flex flex-col overflow-hidden">
          {/* Employment type filter */}
          <div className="border-b border-border flex flex-col overflow-hidden">
            <h3 className="text-sm font-semibold text-foreground px-4 pt-4 pb-2 shrink-0">Employment Type</h3>
            <div className="overflow-y-auto max-h-[120px] px-4 pb-3 scrollbar-hide">
              <EmploymentTypeFilter />
            </div>
          </div>

          <div className="h-3 shrink-0" />

          {/* Category filter */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <h3 className="text-sm font-semibold text-foreground px-4 pt-4 pb-2 shrink-0">Categories</h3>
            <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide">
              <CategoryFilter />
            </div>
          </div>
        </aside>

        {/* Job cards */}
        <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <JobCardGrid />
        </main>
      </div>
    </div>
  );
};

export default Jobs;
