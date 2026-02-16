const HeroSection = () => {
  return (
    <section className="relative h-[28vh] min-h-[180px] overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-primary/60">
      {/* Abstract geometric patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[10%] left-[15%] w-32 h-32 border-2 border-primary-foreground/40 rounded-full" />
        <div className="absolute top-[20%] right-[20%] w-48 h-48 border border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-[15%] left-[40%] w-24 h-24 border border-primary-foreground/20 rotate-45" />
        <div className="absolute top-[40%] left-[60%] w-16 h-16 bg-primary-foreground/10 rounded-full" />
        <div className="absolute top-[10%] right-[35%] w-20 h-20 border border-primary-foreground/15 rotate-12" />
        <div className="absolute bottom-[30%] right-[10%] w-40 h-40 border border-primary-foreground/10 rounded-full" />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.3" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3">
          Your AI-Powered Career Platform
        </h1>
        <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl">
          Connecting talent with opportunity across the globe
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
