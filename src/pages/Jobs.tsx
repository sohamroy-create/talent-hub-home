import Header from "@/components/Header";
import JobsSearchBar from "@/components/jobs/JobsSearchBar";
import EmploymentTypeFilter from "@/components/jobs/EmploymentTypeFilter";
import CategoryFilter from "@/components/jobs/CategoryFilter";
import JobCardGrid from "@/components/jobs/JobCardGrid";

const Jobs = () => {
  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        {/* Left sidebar – column 1 of 4 */}
        <aside className="w-1/4 min-w-[260px] max-w-[340px] border-r border-border flex flex-col overflow-hidden">
          {/* Search section */}
          <div className="p-4 border-b border-border">
            <JobsSearchBar />
          </div>

          {/* Employment type filter */}
          <div className="border-b border-border overflow-y-auto max-h-[200px] p-4 scrollbar-hide">
            <EmploymentTypeFilter />
          </div>

          {/* Category filter */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-hide">
            <CategoryFilter />
          </div>
        </aside>

        {/* Main content – columns 2-4 */}
        <main className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          <JobCardGrid />
        </main>
      </div>
    </div>
  );
};

export default Jobs;
