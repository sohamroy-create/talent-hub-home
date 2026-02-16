const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-10 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-3">
              Joblet<span className="text-primary-foreground/70">AI</span>
            </div>
            <p className="text-sm text-primary-foreground/60">
              Your AI-Powered Career Platform. Connecting talent with opportunity across the globe.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Platform</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">AdvertiseAI</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Coming Soon</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">ApplyAI</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">InterviewAI</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Resume Scorer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          © 2026 JobletAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
