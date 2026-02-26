const JobCardGrid = () => {
  const cards = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map((id) => (
        <div
          key={id}
          className="rounded-lg border border-border bg-card p-5 min-h-[180px] flex items-center justify-center hover:shadow-md hover:border-primary/30 transition-all"
        >
          <span className="text-sm text-muted-foreground">Job Card {id}</span>
        </div>
      ))}
    </div>
  );
};

export default JobCardGrid;
