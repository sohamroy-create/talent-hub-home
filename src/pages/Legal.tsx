import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { privacyPolicies } from "@/data/privacyContent";
import { termsConditions } from "@/data/termsContent";
import { userTerms } from "@/data/userTermsContent";
import { Shield, FileText, Users, ChevronRight } from "lucide-react";
import type { RegionDocument } from "@/data/privacyContent";

const RegionSelector = ({
  regions,
  selectedRegion,
  onSelect,
}: {
  regions: RegionDocument[];
  selectedRegion: string;
  onSelect: (id: string) => void;
}) => (
  <div className="flex flex-wrap gap-2 mb-8">
    {regions.map((region) => (
      <button
        key={region.regionId}
        onClick={() => onSelect(region.regionId)}
        className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
          selectedRegion === region.regionId
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        {region.regionLabel}
      </button>
    ))}
  </div>
);

const LegalDocument = ({ document }: { document: RegionDocument }) => (
  <div>
    <div className="mb-8 pb-6 border-b border-border">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        {document.subtitle}
      </h2>
      <p className="text-sm text-muted-foreground">
        Effective Date: {document.effectiveDate} | Last Updated: {document.effectiveDate}
      </p>
      <div className="mt-4 p-4 bg-accent/50 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground italic">
          <strong>IMPORTANT:</strong> Please read this document carefully. By accessing or using
          Joblet.ai, you acknowledge that you have read, understood, and agree to be bound by
          this document. If you do not agree, please do not use our services.
        </p>
      </div>
    </div>

    <Accordion type="multiple" className="space-y-3">
      {document.sections.map((section, index) => (
        <AccordionItem
          key={index}
          value={`section-${index}`}
          className="border border-border rounded-lg px-0 overflow-hidden"
        >
          <AccordionTrigger className="px-5 py-4 hover:bg-accent/30 transition-colors text-left [&[data-state=open]]:bg-accent/20">
            <span className="text-sm md:text-base font-semibold text-foreground">
              {section.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5">
            <div
              className="prose prose-sm max-w-none text-muted-foreground leading-relaxed
                [&_h4]:text-foreground [&_h4]:font-semibold [&_h4]:mt-5 [&_h4]:mb-2 [&_h4]:text-sm
                [&_h5]:text-foreground [&_h5]:font-medium [&_h5]:mt-4 [&_h5]:mb-2 [&_h5]:text-sm
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:my-2 [&_ul]:space-y-1
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:my-2 [&_ol]:space-y-1
                [&_li]:text-sm
                [&_p]:text-sm [&_p]:my-2
                [&_strong]:text-foreground
                [&_table]:w-full [&_table]:my-4 [&_table]:text-sm [&_table]:border-collapse
                [&_th]:bg-accent/50 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-foreground [&_th]:font-semibold [&_th]:border [&_th]:border-border
                [&_td]:px-3 [&_td]:py-2 [&_td]:border [&_td]:border-border [&_td]:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

const Legal = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "privacy";
  const [privacyRegion, setPrivacyRegion] = useState("universal");
  const [userTermsRegion, setUserTermsRegion] = useState("universal");
  const [recruiterTermsRegion, setRecruiterTermsRegion] = useState("universal");

  const setActiveTab = (tab: string) => {
    setSearchParams({ tab });
  };

  const selectedPrivacy = privacyPolicies.find((p) => p.regionId === privacyRegion) || privacyPolicies[0];
  const selectedUserTerms = userTerms.find((t) => t.regionId === userTermsRegion) || userTerms[0];
  const selectedRecruiterTerms = termsConditions.find((t) => t.regionId === recruiterTermsRegion) || termsConditions[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/30 py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground font-medium">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Legal & Compliance
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Review our privacy policies and terms of service. Select your region to view the
            specific legal documents that apply to you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full md:w-auto mb-8 h-auto p-1">
              <TabsTrigger
                value="privacy"
                className="flex items-center gap-2 px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Shield className="h-4 w-4" />
                <span>Privacy Policy</span>
              </TabsTrigger>
              <TabsTrigger
                value="user-terms"
                className="flex items-center gap-2 px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">User Terms</span>
                <span className="sm:hidden">Users</span>
              </TabsTrigger>
              <TabsTrigger
                value="recruiter-terms"
                className="flex items-center gap-2 px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Recruiter Terms</span>
                <span className="sm:hidden">Recruiters</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="privacy">
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">Select your region:</span>
              </div>
              <RegionSelector
                regions={privacyPolicies}
                selectedRegion={privacyRegion}
                onSelect={setPrivacyRegion}
              />
              <LegalDocument document={selectedPrivacy} />
            </TabsContent>

            <TabsContent value="user-terms">
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">Select your region:</span>
              </div>
              <RegionSelector
                regions={userTerms}
                selectedRegion={userTermsRegion}
                onSelect={setUserTermsRegion}
              />
              <LegalDocument document={selectedUserTerms} />
            </TabsContent>

            <TabsContent value="recruiter-terms">
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">Select your region:</span>
              </div>
              <RegionSelector
                regions={termsConditions}
                selectedRegion={recruiterTermsRegion}
                onSelect={setRecruiterTermsRegion}
              />
              <LegalDocument document={selectedRecruiterTerms} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
