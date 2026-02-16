const cards = [
  {
    id: "applyai",
    header: "ApplyAI",
    text: "Applying for a job just got 83% easier!",
    subtext: (
      <>
        The more you apply, the less you need to apply. Curious?{" "}
        <span className="font-bold">27 days to launch</span>
      </>
    ),
  },
  {
    id: "interviewai",
    header: "InterviewAI",
    text: "Give AI Interviews without any hassle!",
    subtext: (
      <>
        Just send your AI avatar & Voila! Curious?{" "}
        <span className="font-bold">43 days to launch</span>
      </>
    ),
  },
  {
    id: "suggestions",
    header: "Suggestions",
    text: "Let us know what feature you want!",
    subtext: "And we will name the feature after you!",
  },
];

const ApplyInterviewSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{card.header}</h3>
              <p className="text-base font-semibold text-foreground mb-2">{card.text}</p>
              <p className="text-sm text-muted-foreground">{card.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplyInterviewSection;
