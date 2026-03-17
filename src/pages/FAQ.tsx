import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What is Joblet.ai?",
        answer: "Joblet.ai is a job search platform for tech professionals. Every listing and employer on the site is verified, and it's free for anyone looking for work.<br/><br/>We're also building four AI tools: MatchAI, ApplyAI, SalaryAI, and InterviewAI. They'll cover matching, applications, salary analysis, and interview prep. The idea is to replace the usual grind of 150+ scattered applications with a handful of well-targeted ones.",
      },
      {
        question: "How do I create an account?",
        answer: "Go to joblet.ai and sign up with your email or Google account. Takes about five minutes. Once you're in, you can browse job listings right away and filter by role, location, salary, etc.<br/><br/>When we launch the AI features, your profile info will be used to power MatchAI scores, so it helps to fill things out in detail from the start.",
      },
      {
        question: "Do I need to upload multiple resumes?",
        answer: "Nope, just one. Upload a PDF or DOCX and Joblet pulls out your skills, experience, and work history. When ApplyAI launches, it'll automatically adjust your resume for each role you apply to, putting the most relevant stuff up front.",
      },
      {
        question: "What roles and industries does Joblet.ai cover?",
        answer: "Tech roles only. That includes software engineering at any level, ML/AI, data science, data engineering, DevOps/SRE, product management, and UX/product design.<br/><br/>Right now we cover the US and Europe. More regions are on the way.",
      },
      {
        question: "Is Joblet.ai free?",
        answer: "Yes. Free to browse, free to apply, no paid tiers. You get the same access as everyone else. When the AI features launch we'll share pricing for those, but searching for jobs and applying won't ever cost you anything.",
      },
    ],
  },
  {
    title: "MatchAI (Coming Soon)",
    items: [
      {
        question: "What will a MatchAI score mean?",
        answer: "It'll be a number from 0 to 100 that tells you how well a job fits your skills, experience, and preferences. An 87 means your profile overlaps with roughly the top 13% of candidates for that role.<br/><br/>We're building MatchAI so that focusing on 80+ scores gets you meaningfully more callbacks than applying everywhere.",
      },
      {
        question: "How will the score be calculated?",
        answer: "Skill-based matching, not keyword matching. Most ATS systems do exact string lookups. MatchAI will understand that \"built distributed systems in Go\" and \"Golang microservices\" are the same thing.<br/><br/>It'll look at your technical skills, whether the seniority is right (not too senior, not too junior), whether the role type fits (IC vs. manager, product vs. infra), and how your location and work-style preferences line up.",
      },
      {
        question: "Will I be able to see why I matched or didn't match?",
        answer: "Yes. Every score will come with a breakdown showing which skills drove the match, what the job requires that you're missing, and suggestions for closing the gap. You'll always know why you got the number you got.",
      },
      {
        question: "What if my score is low?",
        answer: "It's useful information. A low score tells you exactly what's missing. Sometimes Joblet will suggest specific skills to pick up. Other times the score just means a different role would be a better use of your time. As a rule of thumb, 75+ is where applications start to pay off.",
      },
      {
        question: "Can I share my MatchAI score?",
        answer: "Yes. Once MatchAI is live, you'll be able to generate a shareable card for LinkedIn showing your score, the role category, and your percentile (e.g., \"Top 12% Backend Engineering\").",
      },
    ],
  },
  {
    title: "ApplyAI (Coming Soon)",
    items: [
      {
        question: "How will ApplyAI tailor my resume?",
        answer: "It reads the job description and rearranges your resume so the most relevant experience is front and center. It might reword a bullet or reorder your sections, but everything comes from what you actually uploaded. Nothing gets made up.",
      },
      {
        question: "Will it change the facts on my resume?",
        answer: "No. It reorganizes and reframes what you gave it, but it won't invent experience, add skills you don't have, or upgrade your title. Everything on the output traces back to your original resume.",
      },
      {
        question: "How long will an application take with ApplyAI?",
        answer: "About 30 seconds. You review the tailored resume, check it looks right, and hit submit. Compare that to ~45 minutes per application when you're doing it manually.",
      },
      {
        question: "What's the difference between one-click apply and auto-apply?",
        answer: "One-click apply lets you review each tailored resume before submitting. You see what goes out.<br/><br/>Auto-apply will handle it for you. You set a score threshold (say, 85+) and Joblet.ai applies on your behalf without you having to review each one. Good if you'd rather spend that time prepping for interviews.<br/><br/>Both are part of ApplyAI, launching soon.",
      },
      {
        question: "How many applications should I send?",
        answer: "10 well-matched applications beat 160 random ones. When MatchAI launches, aim for roles where your score is 75+.<br/><br/>Below that, you're spending time on long shots. Better to tighten your profile or look at different roles than to keep applying where the fit isn't there.",
      },
      {
        question: "Can I apply to jobs outside the US?",
        answer: "Yes. Joblet.ai covers both the US and Europe. EU listings will include gross-to-net salary estimates by country, Blue Card eligibility flags, and work-life balance filters. Applying works the same way regardless of where the job is.",
      },
    ],
  },
  {
    title: "SalaryAI (Coming Soon)",
    items: [
      {
        question: "Will every listing show a salary?",
        answer: "We already show salary data where it's available. When SalaryAI launches, every listing will have compensation info. No more \"competitive package\" or blank salary fields. If a job is on Joblet.ai, you'll know what it pays.",
      },
      {
        question: "What will be included in the compensation breakdown?",
        answer: "US listings will show base salary, equity/RSUs, signing bonus, 401(k) match, and a 4-year equity projection. $150K base with $200K in RSUs is a very different offer than $150K with nothing else, and SalaryAI will make that obvious.<br/><br/>EU listings will include base salary, equity where applicable, and a gross-to-net estimate by country so you can see your actual take-home.",
      },
      {
        question: "What is the Cost-of-Living Salary Translator?",
        answer: "It compares what a salary actually buys you in different cities. $180K in San Francisco and $180K in Austin are very different numbers once you factor in rent and cost of living. The translator shows you the adjusted equivalent so you can compare offers properly.",
      },
      {
        question: "How will SalaryAI help with negotiation?",
        answer: "Most people negotiate blind. SalaryAI is designed to fix that.<br/><br/>You'll have a full comp breakdown, a 4-year equity projection, and market data for your role and level before the conversation even starts. Joblet will also generate a Total Comp Report as a PDF you can share or reference during the negotiation.",
      },
      {
        question: "How does gross-to-net work for EU listings?",
        answer: "SalaryAI will estimate your monthly take-home after taxes and social contributions for Germany, the UK, the Netherlands, France, and Sweden. The numbers are based on standard tax tables and should be accurate for most single filers. If your tax situation is more complicated, you'll want to check with a local advisor.",
      },
    ],
  },
  {
    title: "InterviewAI (Coming Soon)",
    items: [
      {
        question: "How is InterviewAI different from generic interview prep?",
        answer: "Most prep tools give you the same 50 questions no matter where you're interviewing. InterviewAI will be tailored to the specific company and role. Prepping for an L5 SWE loop at Google looks nothing like a Staff Engineer interview at a Series B startup. Different technical depth, different behavioral expectations, different system design scope. InterviewAI will know the difference.",
      },
      {
        question: "What does a practice session look like?",
        answer: "Pick the company and role. InterviewAI generates a mock interview with technical questions matched to the stack and level, behavioral questions based on how that company actually interviews, and system design prompts for senior roles. You get specific feedback on your answers afterward.<br/><br/>Sessions run 30–45 minutes. You can redo them as many times as you want.",
      },
      {
        question: "How many practice sessions do I need?",
        answer: "Two practice sessions is where the data shows the biggest jump in offer rates.<br/><br/>More sessions keep helping, but going from zero prep to two sessions makes the biggest difference. We're building InterviewAI around that.",
      },
      {
        question: "Does InterviewAI work for non-engineering roles?",
        answer: "Yes. It'll cover PMs, data scientists, ML engineers, DevOps, and everything else on the platform. The question sets and style will be different depending on the role. PM interviews at a growth-stage startup look nothing like PM interviews at a Fortune 500.",
      },
      {
        question: "How can I get notified when InterviewAI launches?",
        answer: "Sign up for a free account. We'll email you when InterviewAI and the other AI features are ready. In the meantime, you can browse jobs and start applying.",
      },
    ],
  },
  {
    title: "Trust, Safety & Privacy",
    items: [
      {
        question: "Does Joblet filter for H1B visa sponsorship?",
        answer: "Yes. Turn on the H1B Sponsor Search filter in your preferences and you'll only see roles where the employer has actually sponsored H1B visas before. We use real sponsorship data for this, not whatever the job description happens to say.",
      },
      {
        question: "What is the Blue Card Checker?",
        answer: "Same idea as the H1B filter, but for Europe. It flags roles where the employer supports EU Blue Card applications, which is the main work permit route for non-EU nationals. You can turn it on in your EU job search preferences.",
      },
      {
        question: "Does Joblet charge job seekers?",
        answer: "No. Free to use, free to apply, no upsells. We don't think people looking for work should have to pay for the privilege.",
      },
      {
        question: "Are the jobs and employers on Joblet verified?",
        answer: "Every one. We check that the company is real, the role is actually open, and the listing details are accurate. No fake companies, no scam postings, no recruiter spam.",
      },
      {
        question: "How does Joblet handle ghost jobs?",
        answer: "Ghost jobs are listings that stopped hiring but never got taken down. They waste everyone's time. Joblet runs freshness checks on every listing and flags anything that hasn't shown recent activity. Every job has a timestamp showing when it was last confirmed active.",
      },
      {
        question: "Is my data private?",
        answer: "Yes. You own your data, you can export or delete everything at any time, and we never sell your resume or profile to employers or anyone else. We're GDPR-compliant by default, including data minimization, right to erasure, and explicit consent for all processing.",
      },
      {
        question: "What makes Joblet different from other job platforms?",
        answer: "Most job platforms charge employers for job slots and sponsored listings, which means candidates are the product being sold, not the customer being served.<br/><br/>Joblet works the other way. Free for job seekers. Every listing and employer is verified. Ghost jobs get removed. Salary data is visible. Your data stays yours. And we're adding four AI tools (MatchAI, ApplyAI, SalaryAI, InterviewAI) to make the whole process faster and less painful.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">FAQ</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Answers to common questions about joblet.ai, how it works, and what's coming next.
          </p>
        </div>
      </section>

      <section className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl mx-auto px-4 space-y-10">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <Accordion type="multiple" className="space-y-3">
                {section.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.title}-${index}`}
                    className="border border-border rounded-lg px-0 overflow-hidden"
                  >
                    <AccordionTrigger className="px-5 py-4 hover:bg-accent/30 transition-colors text-left [&[data-state=open]]:bg-accent/20">
                      <span className="text-sm md:text-base font-semibold text-foreground">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-5">
                      <div
                        className="prose prose-sm max-w-none text-muted-foreground leading-relaxed [&_p]:text-sm [&_p]:my-2"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
