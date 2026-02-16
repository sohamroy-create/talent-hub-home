const logoSlots = Array.from({ length: 10 }, (_, i) => i + 1);

const TrustedBySection = () => {
  return (
    <section className="pt-11 pb-8 bg-secondary/50">
      <div className="container text-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Trusted by Industry Leaders</h2>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "200%" }}>
          {[...logoSlots, ...logoSlots].map((slot, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[10%] flex items-center justify-center p-4"
            >
              <div className="w-16 h-16 rounded-lg bg-transparent border border-border/50 flex items-center justify-center text-xs text-muted-foreground">
                Logo {slot}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
