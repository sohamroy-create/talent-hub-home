import { useState, useEffect, useRef, useCallback } from "react";
import { Share2, Bookmark, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  "Artificial Intelligence (AI)": "hsl(217 91% 96%)",
  "IT Services": "hsl(200 80% 95%)",
  "Healthcare": "hsl(150 60% 95%)",
  "Manufacturing & Production": "hsl(35 80% 95%)",
  "Supply Chain": "hsl(45 70% 95%)",
  "Infrastructure": "hsl(20 70% 95%)",
  "Transport": "hsl(270 50% 96%)",
  "Real Estate": "hsl(340 50% 96%)",
  "Finance & Accounting": "hsl(160 50% 95%)",
  "Consulting": "hsl(190 60% 95%)",
  "Sales & Marketing": "hsl(10 70% 96%)",
  "Hospitality": "hsl(30 60% 95%)",
  "Media & Entertainment": "hsl(290 45% 96%)",
  "Education": "hsl(100 50% 95%)",
  "General Operations": "hsl(220 40% 96%)",
};

interface JobData {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  category: string;
}

const titles = [
  "Machine Learning Engineer", "Full Stack Developer", "Clinical Research Associate",
  "Production Engineer", "Supply Chain Analyst", "Civil Engineer", "Financial Analyst",
  "Management Consultant", "Digital Marketing Specialist", "Hotel Operations Manager",
  "Video Producer", "Instructional Designer", "NLP Engineer", "DevOps Engineer",
  "Transport Operations Manager", "Real Estate Analyst", "HR Manager", "Pharmacist",
  "Data Scientist", "Cloud Engineer", "Cybersecurity Analyst", "UX Designer",
  "Product Manager", "Business Analyst", "AI Research Scientist", "Backend Developer",
  "Frontend Developer", "Quality Control Engineer", "Logistics Coordinator",
  "Brand Strategist", "Content Writer", "Account Manager", "Sales Executive",
];

const companies = [
  "DeepMind Technologies", "Stripe Inc.", "Pfizer Global", "Tesla Manufacturing",
  "Amazon Logistics", "AECOM Infrastructure", "Goldman Sachs", "McKinsey & Company",
  "HubSpot Marketing", "Marriott International", "Netflix Studios", "Coursera Education",
  "OpenAI Research", "Cloudflare Inc.", "FedEx Logistics", "CBRE Group",
  "Workday Solutions", "CVS Health Corp", "Google LLC", "Meta Platforms",
  "Apple Inc.", "Microsoft Corp", "Spotify AB", "Airbnb Inc.",
];

const locations = [
  "San Francisco, CA", "New York, NY", "Boston, MA", "Austin, TX",
  "Seattle, WA", "Denver, CO", "Chicago, IL", "Washington, DC",
  "Remote", "Miami, FL", "Los Angeles, CA", "Mountain View, CA",
  "Memphis, TN", "Dallas, TX", "Pleasanton, CA", "Hartford, CT",
  "Portland, OR", "Atlanta, GA", "Phoenix, AZ", "San Diego, CA",
];

const categoryNames = Object.keys(categoryColors);

const dates = [
  "1 day ago", "2 days ago", "3 days ago", "4 days ago",
  "5 days ago", "6 days ago", "7 days ago", "1 week ago", "2 weeks ago",
];

function generateJobs(startId: number, count: number): JobData[] {
  const jobs: JobData[] = [];
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    jobs.push({
      id,
      date: dates[id % dates.length],
      title: titles[id % titles.length],
      company: companies[id % companies.length],
      location: locations[id % locations.length],
      category: categoryNames[id % categoryNames.length],
    });
  }
  return jobs;
}

const BATCH_SIZE = 18;

const JobCard = ({ job }: { job: JobData }) => {
  const bgColor = categoryColors[job.category] || "hsl(0 0% 97%)";

  return (
    <div
      className="rounded-lg border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all grid grid-cols-2 grid-rows-2 h-[170px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Section 1: Date, Title (top-left) */}
      <div className="p-4 flex flex-col">
        <span className="text-[10px] text-muted-foreground leading-tight">{job.date}</span>
        <div className="flex-1 flex items-start pt-2">
          <h4 className="text-sm font-semibold text-foreground leading-snug">{job.title}</h4>
        </div>
      </div>

      {/* Section 2: Share, Save (top-right) */}
      <div className="p-4 flex flex-col items-end">
        <div className="flex items-center gap-1.5">
          <button className="p-1.5 rounded hover:bg-background/60 transition-colors">
            <Share2 className="h-6 w-6 text-muted-foreground" />
          </button>
          <button className="p-1.5 rounded hover:bg-background/60 transition-colors">
            <Bookmark className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Section 3: Company, Location (bottom-left) */}
      <div className="p-4 flex flex-col justify-between">
        <span className="text-xs text-muted-foreground/80">{job.company}</span>
        <span className="text-[11px] text-muted-foreground leading-tight">{job.location}</span>
      </div>

      {/* Section 4: Apply button (bottom-right) */}
      <div className="p-4 flex items-end justify-end">
        <Button size="sm" className="text-xs h-8 px-4 rounded-md">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

const JobCardGrid = () => {
  const [jobs, setJobs] = useState<JobData[]>(() => generateJobs(1, BATCH_SIZE));
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      setJobs((prev) => [...prev, ...generateJobs(prev.length + 1, BATCH_SIZE)]);
      setLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMore();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore, loading]);

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-4">Showing {jobs.length.toLocaleString()} of 300,000+ jobs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {/* Sentinel for infinite scroll */}
      <div ref={sentinelRef} className="flex justify-center py-8">
        {loading && <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />}
      </div>
    </div>
  );
};

export default JobCardGrid;
