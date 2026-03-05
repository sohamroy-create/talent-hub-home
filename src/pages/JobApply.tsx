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
}

const DetailSection = ({ title, content }: DetailSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const lines = content.split("\n").filter(Boolean);
  const needsTruncation = lines.length > 6;
  const displayContent = needsTruncation ? lines.slice(0, 6).join("\n") : content;

  return (
    <div className={`${SECTION_HEIGHT} flex flex-col`}>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed flex-1">
        {displayContent}
      </p>
      {needsTruncation && (
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
  <Link
    to={`/jobs/${job.id}`}
    className="block rounded-lg border border-border p-4 hover:shadow-md hover:border-primary/30 transition-all bg-card"
  >
    <span className="text-[10px] text-muted-foreground">{job.date}</span>
    <h4 className="text-sm font-semibold text-foreground mt-1 leading-snug">{job.title}</h4>
    <p className="text-xs text-muted-foreground mt-1">{job.company}</p>
    <p className="text-[11px] text-muted-foreground mt-0.5">{job.location}</p>
  </Link>
);

const JobApply = () => {
  const { id } = useParams();
  const job = generateJobDetail(id || "1");

  return (
    <div className="min-h-screen bg-background">
      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <Link to="/jobs" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4" />
          Back to Jobs
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Desktop: 4-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT: Header + Job Details (cols 1-3) */}
          <div className="lg:col-span-3 space-y-8">

            {/* HEADER SECTION */}
            <div className="rounded-xl border border-border bg-card p-8 md:p-10 relative">
              {/* Top-right: Share & Save */}
              <div className="absolute top-8 right-8 md:top-10 md:right-10 flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Share2 className="h-5 w-5 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bookmark className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>

              {/* Job info */}
              <div className="pr-28">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {job.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mt-3 flex items-center gap-1.5">
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
                <p className="text-xs text-muted-foreground/70 mt-3 flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {job.datePosted}
                </p>
              </div>

              {/* Bottom-right: Stats + Apply */}
              <div className="flex flex-col items-end mt-8 gap-2">
                <div className="flex flex-col items-end text-xs text-muted-foreground gap-0.5">
                  <span className="font-medium">1,247 people applied</span>
                  <span className="text-primary font-semibold">Top 12% of candidates</span>
                </div>
                <Button size="lg" className="px-8">
                  Apply Now
                </Button>
              </div>
            </div>

            {/* JOB DETAILS SECTIONS */}
            <div className="space-y-8">
              <DetailSection title="Job Description" content={job.description} />
              <DetailSection title="Skills & Experience" content={job.skills} />
              <DetailSection title="Responsibilities" content={job.responsibilities} />
              <DetailSection title="Benefits" content={job.benefits} />
            </div>
          </div>

          {/* RIGHT: Suggestions sidebar (col 4) */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground mb-4">Similar Jobs</h3>
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
