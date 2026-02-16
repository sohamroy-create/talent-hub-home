import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FloatingSearchBar from "@/components/FloatingSearchBar";
import CategoriesSection from "@/components/CategoriesSection";
import SocialProofSection from "@/components/SocialProofSection";
import TrustedBySection from "@/components/TrustedBySection";
import JobsBlogsSection from "@/components/JobsBlogsSection";
import ApplyInterviewSection from "@/components/ApplyInterviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FloatingSearchBar />
      <CategoriesSection />
      <SocialProofSection />
      <TrustedBySection />
      <JobsBlogsSection />
      <ApplyInterviewSection />
      <Footer />
    </div>
  );
};

export default Index;
