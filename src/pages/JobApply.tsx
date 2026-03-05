import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Share2, Bookmark, ChevronLeft, MapPin, Building2, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock job data generator
const generateJobDetail = (id: string) => ({
  id,
  title: "Machine Learning Engineer",
  company: "DeepMind Technologies",
  location: "San Francisco, CA",
  jobType: "Remote",
  datePosted: "Posted 2 days ago",
  description: `We are looking for a talented Machine Learning Engineer to join our growing AI research team. You will work on cutting-edge projects involving deep learning, reinforcement learning, and natural language processing. The ideal candidate has strong experience with Python, TensorFlow/PyTorch, and has published research in top-tier conferences.

You will collaborate with a diverse team of researchers and engineers to develop novel algorithms and deploy them at scale. Our team values intellectual curiosity, rigorous experimentation, and a passion for pushing the boundaries of what AI can achieve.

This role offers the opportunity to work on problems that have real-world impact, from healthcare diagnostics to climate modeling. You'll have access to world-class compute infrastructure and mentorship from leading researchers in the field.`,
  skills: `• 3+ years of experience in machine learning or related field
• Strong proficiency in Python, PyTorch or TensorFlow
• Experience with large-scale distributed training
• Familiarity with transformer architectures and attention mechanisms
• Published research in NeurIPS, ICML, ICLR, or similar venues preferred
• Strong mathematical foundations in linear algebra, probability, and optimization
• Experience with MLOps tools and model deployment pipelines
• Excellent communication and collaboration skills`,
  responsibilities: `• Design and implement novel ML models for production systems
• Conduct experiments and analyze results to drive research forward
• Collaborate with cross-functional teams to integrate ML solutions
• Write clean, maintainable, and well-documented code
• Mentor junior engineers and contribute to team knowledge sharing
• Present research findings to internal and external stakeholders
• Stay current with the latest developments in AI/ML research
• Participate in code reviews and contribute to engineering best practices`,
  benefits: `• Competitive salary range: $180,000 - $250,000
• Equity compensation package
• Comprehensive health, dental, and vision insurance
• Unlimited PTO with minimum 20 days encouraged
• $5,000 annual learning and development budget
• Home office stipend of $2,000
• 16 weeks paid parental leave
• 401(k) matching up to 6%
• Free daily meals and snacks at office
• Annual company retreats and team offsites`,
});

const suggestions = [
  { id: 101, title: "Senior ML Engineer", company: "OpenAI Research", location: "San Francisco, CA", date: "1 day ago" },
  { id: 102, title: "AI Research Scientist", company: "Google DeepMind", location: "Mountain View, CA", date: "3 days ago" },
  { id: 103, title: "Data Scientist", company: "Meta Platforms", location: "New York, NY", date: "2 days ago" },
  { id: 104, title: "NLP Engineer", company: "Anthropic", location: "San Francisco, CA", date: "5 days ago" },
  { id: 105, title: "Computer Vision Engineer", company: "Tesla", location: "Austin, TX", date: "1 week ago" },
  { id: 106, title: "MLOps Engineer", company: "Spotify AB", location: "Remote", date: "4 days ago" },
];

const SECTION_HEIGHT = "min-h-[220px]";

interface DetailSectionProps {
  title: string;
  content: string;
  mobileLines?: number;
}

const DetailSection = ({ title, content, mobileLines = 4 }: DetailSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const lines = content.split("\n").filter(Boolean);
  // Desktop: show 6 lines, Mobile: show fewer lines
  const desktopTruncation = lines.length > 6;
  const mobileTruncation = lines.length > mobileLines;
  const desktopContent = desktopTruncation ? lines.slice(0, 6).join("\n") : content;
  const mobileContent = mobileTruncation ? lines.slice(0, mobileLines).join("\n") : content;

  return (
    <div className={`lg:${SECTION_HEIGHT} flex flex-col rounded-xl border border-border bg-card p-4 md:p-6`}>
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 md:mb-3">{title}</h3>
      {/* Desktop content */}
      <p className="hidden md:block text-sm text-muted-foreground whitespace-pre-line leading-relaxed flex-1">
        {desktopContent}
      </p>
      {/* Mobile content */}
      <p className="md:hidden text-xs text-muted-foreground whitespace-pre-line leading-relaxed flex-1">
        {mobileContent}
      </p>
      {((desktopTruncation) || (mobileTruncation)) && (
        <>
          <Button
            variant="link"
            className="self-start px-0 text-xs mt-1"
            onClick={() => setDialogOpen(true)}
          >
            See more
          </Button>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="max-w-lg max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {content}
                </p>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

const SuggestionCard = ({ job }: { job: typeof suggestions[0] }) => (
  <div className="rounded-lg border border-border p-3 md:p-4 hover:shadow-md hover:border-primary/30 transition-all bg-card h-[130px] flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <Link to={`/jobs/${job.id}`} className="flex-1 min-w-0">
        <h4 className="text-xs md:text-sm font-semibold text-foreground leading-snug line-clamp-2">{job.title}</h4>
        <p className="text-[11px] text-muted-foreground mt-1">{job.company}</p>
      </Link>
      <div className="flex items-center gap-0.5 shrink-0 ml-1">
        <button className="p-1 rounded-md hover:bg-muted transition-colors">
          <Share2 className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="p-1 rounded-md hover:bg-muted transition-colors">
          <Bookmark className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
      </div>
    </div>
    <div className="flex justify-between items-end">
      <p className="text-[10px] text-muted-foreground">{job.location}</p>
      <span className="text-[10px] text-muted-foreground">{job.date}</span>
    </div>
  </div>
);

const JobApply = () => {
  const { id } = useParams();
  const job = generateJobDetail(id || "1");

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Desktop: 4-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">

          {/* LEFT: Header + Job Details (cols 1-3) */}
          <div className="lg:col-span-3 space-y-4 md:space-y-8">

            {/* HEADER SECTION */}
            <div className="rounded-xl border border-border bg-card p-4 md:p-8 relative">
              {/* Back button on top border */}
              <Link
                to="/jobs"
                className="absolute -top-[10px] left-4 inline-flex items-center gap-0.5 text-[11px] font-medium text-primary-foreground bg-primary px-2 py-0.5 rounded hover:bg-primary/90 transition-colors"
              >
                <ChevronLeft className="h-3 w-3" />
                Back to Jobs
              </Link>

              {/* Desktop layout */}
              <div className="hidden md:flex justify-between">
                {/* Job info */}
                <div className="pr-8 flex flex-col justify-between">
                  <h1 className={`font-bold text-foreground leading-tight ${
                    job.title.length < 20 ? 'text-3xl md:text-4xl' : 
                    job.title.length < 35 ? 'text-2xl md:text-3xl' : 
                    'text-xl md:text-2xl'
                  }`}>
                    {job.title}
                  </h1>
                  <div>
                    <p className="text-base md:text-lg text-muted-foreground flex items-center gap-1.5">
                      <Building2 className="h-4 w-4 shrink-0" />
                      {job.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" />
                        {job.jobType}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground mt-3">
                      $180,000 - $250,000 / year
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-2 flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {job.datePosted}
                    </p>
                  </div>
                </div>

                {/* Right side: icons + stats + apply */}
                <div className="flex flex-col items-end justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <button className="p-3 rounded-lg hover:bg-muted transition-colors">
                      <Share2 className="h-7 w-7 text-muted-foreground" />
                    </button>
                    <button className="p-3 rounded-lg hover:bg-muted transition-colors">
                      <Bookmark className="h-7 w-7 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="flex flex-col items-stretch gap-1.5 w-full">
                    <div className="flex gap-1.5">
                      <div className="rounded border border-border bg-muted/50 px-3 h-7 flex items-center justify-center flex-1">
                        <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">1,247 applied</span>
                      </div>
                      <div className="rounded border border-primary/30 bg-primary/5 px-3 h-7 flex items-center justify-center flex-1">
                        <span className="text-[10px] font-semibold text-primary whitespace-nowrap">Top 12%</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile layout */}
              <div className="md:hidden mt-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0 pr-2">
                    <h1 className="text-xl font-bold text-foreground leading-tight">{job.title}</h1>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1.5">
                      <Building2 className="h-3.5 w-3.5 shrink-0" />
                      {job.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.jobType}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/70 mt-1.5 flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" />
                      {job.datePosted}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                      <Share2 className="h-4 w-4 text-muted-foreground" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                      <Bookmark className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                </div>
                {/* Stats + Apply - below job details on mobile */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="rounded-md border border-border bg-muted/50 px-3 h-8 flex items-center justify-center flex-1">
                    <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">1,247 applied</span>
                  </div>
                  <div className="rounded-md border border-primary/30 bg-primary/5 px-3 h-8 flex items-center justify-center flex-1">
                    <span className="text-[10px] font-semibold text-primary whitespace-nowrap">Top 12%</span>
                  </div>
                  <Button size="sm" className="px-4 h-8 text-xs">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>

            {/* MOBILE: Horizontal Job Suggestions between header and details */}
            <div className="lg:hidden">
              <div className="flex items-center gap-2 mb-2">
                <div className="rounded-md bg-primary px-3 py-1">
                  <span className="text-[11px] font-semibold text-primary-foreground whitespace-nowrap">Similar Jobs For You</span>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {suggestions.map((s) => (
                  <div key={s.id} className="shrink-0 w-[180px]">
                    <SuggestionCard job={s} />
                  </div>
                ))}
              </div>
            </div>

            {/* JOB DETAILS SECTIONS */}
            <div className="space-y-4 md:space-y-8">
              <DetailSection title="Job Description" content={job.description} mobileLines={3} />
              <DetailSection title="Skills & Experience" content={job.skills} mobileLines={4} />
              <DetailSection title="Responsibilities" content={job.responsibilities} mobileLines={4} />
              <DetailSection title="Benefits" content={job.benefits} mobileLines={4} />
            </div>
          </div>

          {/* RIGHT: Suggestions sidebar (col 4) - desktop only */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="rounded-md bg-primary h-11 flex items-center justify-center mb-4">
              <span className="text-sm font-semibold text-primary-foreground">Similar Jobs For You</span>
            </div>
            <div className="space-y-3">
              {suggestions.map((s) => (
                <SuggestionCard key={s.id} job={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
