import { Share2, Bookmark } from "lucide-react";
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
  logo: string;
}

const sampleJobs: JobData[] = [
  { id: 1, date: "2 days ago", title: "Machine Learning Engineer", company: "DeepMind Technologies", location: "San Francisco, CA", category: "Artificial Intelligence (AI)", logo: "D" },
  { id: 2, date: "5 days ago", title: "Full Stack Developer", company: "Stripe Inc.", location: "New York, NY", category: "IT Services", logo: "S" },
  { id: 3, date: "1 day ago", title: "Clinical Research Associate", company: "Pfizer Global", location: "Boston, MA", category: "Healthcare", logo: "P" },
  { id: 4, date: "3 days ago", title: "Production Engineer", company: "Tesla Manufacturing", location: "Austin, TX", category: "Manufacturing & Production", logo: "T" },
  { id: 5, date: "4 days ago", title: "Supply Chain Analyst", company: "Amazon Logistics", location: "Seattle, WA", category: "Supply Chain", logo: "A" },
  { id: 6, date: "6 days ago", title: "Civil Engineer", company: "AECOM Infrastructure", location: "Denver, CO", category: "Infrastructure", logo: "A" },
  { id: 7, date: "1 day ago", title: "Financial Analyst", company: "Goldman Sachs", location: "Chicago, IL", category: "Finance & Accounting", logo: "G" },
  { id: 8, date: "2 days ago", title: "Management Consultant", company: "McKinsey & Company", location: "Washington, DC", category: "Consulting", logo: "M" },
  { id: 9, date: "3 days ago", title: "Digital Marketing Specialist", company: "HubSpot Marketing", location: "Remote", category: "Sales & Marketing", logo: "H" },
  { id: 10, date: "7 days ago", title: "Hotel Operations Manager", company: "Marriott International", location: "Miami, FL", category: "Hospitality", logo: "M" },
  { id: 11, date: "2 days ago", title: "Video Producer", company: "Netflix Studios", location: "Los Angeles, CA", category: "Media & Entertainment", logo: "N" },
  { id: 12, date: "4 days ago", title: "Instructional Designer", company: "Coursera Education", location: "Mountain View, CA", category: "Education", logo: "C" },
  { id: 13, date: "1 day ago", title: "NLP Engineer", company: "OpenAI Research", location: "San Francisco, CA", category: "Artificial Intelligence (AI)", logo: "O" },
  { id: 14, date: "5 days ago", title: "DevOps Engineer", company: "Cloudflare Inc.", location: "Austin, TX", category: "IT Services", logo: "C" },
  { id: 15, date: "3 days ago", title: "Transport Operations Manager", company: "FedEx Logistics", location: "Memphis, TN", category: "Transport", logo: "F" },
  { id: 16, date: "6 days ago", title: "Real Estate Analyst", company: "CBRE Group", location: "Dallas, TX", category: "Real Estate", logo: "C" },
  { id: 17, date: "2 days ago", title: "HR Manager", company: "Workday Solutions", location: "Pleasanton, CA", category: "General Operations", logo: "W" },
  { id: 18, date: "4 days ago", title: "Pharmacist", company: "CVS Health Corp", location: "Hartford, CT", category: "Healthcare", logo: "C" },
];

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

      {/* Section 2: Share, Save, Logo (top-right) */}
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobCardGrid;
