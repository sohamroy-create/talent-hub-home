const cards = [
  {
    id: "jobs",
    header: "Jobs",
    items: [
      { text: "Post a Job", subtext: "Source talent, Globally", clickable: true },
      { text: "Look for a Job", subtext: "Look for jobs, Globally", clickable: true },
    ],
  },
  {
    id: "blogs",
    header: "Blogs",
    items: [
      { text: "Post a Blog", subtext: "Become a thought leader", clickable: true },
      { text: "Look for a Blog", subtext: "Look for Industry insights", clickable: false },
    ],
  },
  {
    id: "advertiseai",
    header: "AdvertiseAI",
    items: [
      { text: "Making your Jobs", subtext: "Reach the correct candidates", clickable: false },
    ],
  },
];

const JobsBlogsSection = () => {
  return (
    <section id="jobs" className="py-12 px-4">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-bold text-primary mb-4">{card.header}</h3>
              <div className="space-y-4">
                {card.items.map((item, idx) => (
                  <div key={idx}>
                    {item.clickable ? (
                      <a href="#" className="text-base font-semibold text-foreground hover:text-primary transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-foreground">{item.text}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-0.5">{item.subtext}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsBlogsSection;
