import { type LegalSection, type RegionDocument } from "./privacyContent";

const commonAcceptance = `These Recruiter Terms and Conditions ("Recruiter Terms") constitute a legally binding agreement between you (the "Recruiter," "Employer," or "you"), whether acting individually or on behalf of an organization, and Joveo Inc. ("Company," "we," "us," or "our"), the operator of Joblet.ai (the "Platform"). These Recruiter Terms supplement and incorporate by reference our general Terms and Conditions and Privacy and Data Security Policy.

<p>By clicking "Post Job" or any similar action that submits a job listing, you confirm that you have the authority to bind the organization you represent, that all information provided is accurate and lawful, and that you agree to these Recruiter Terms in their entirety.</p>`;

const commonEligibility = `By using the Platform as a recruiter or employer, you represent and warrant that:
<ul>
<li>You are an authorized representative of the organization posting the job listing and have the legal authority to bind that organization to these Recruiter Terms.</li>
<li>The organization you represent is a legitimate, legally registered business entity operating in compliance with all applicable laws.</li>
<li>All job listings you post are for genuine, legitimate employment opportunities and are not fraudulent, misleading, or deceptive.</li>
<li>You comply with all applicable employment laws, including but not limited to anti-discrimination laws, equal opportunity regulations, minimum wage laws, and labor standards.</li>
<li>You are at least 18 years of age.</li>
</ul>`;

const commonDataCollection = `When you create a recruiter account and post jobs on Joblet.ai, you provide and we collect the following data:

<h4>3.1 Recruiter Personal Data</h4>
<ul>
<li>Full name, professional email address, phone number, job title, and professional profile information.</li>
<li>Account credentials and authentication data.</li>
</ul>

<h4>3.2 Company Data</h4>
<ul>
<li>Company name, company logo, website URL, industry, company size, company description, office location(s), and employer branding content.</li>
</ul>

<h4>3.3 Job Listing Data</h4>
<ul>
<li>Job title, job description, requirements and qualifications, compensation range, benefits, job location, employment type, application deadline, and application instructions or external application URL.</li>
</ul>

<h4>3.4 Analytics and Tracking Data</h4>
<ul>
<li>Views, clicks, and engagement metrics on your job listings (via GA4 and gtags).</li>
<li>Apply Start and Apply Finish events tracked via pixel on your designated landing page (with your consent).</li>
<li>Advertising conversion data from Google Ads and Meta pixels placed on Platform pages.</li>
</ul>
<p>All automated data collection is described in detail in our Privacy and Data Security Policy.</p>`;

const commonConsent = `By clicking "Post Job," you provide your free, specific, informed, and unambiguous consent to:
<ol>
<li>The collection, storage, and processing of your personal data, company data, and job listing data for the purpose of publishing job listings, managing your recruiter account, and facilitating recruiter-job seeker connections.</li>
<li>The display of your company information and job listings to job seekers and other Platform visitors worldwide.</li>
<li>The collection and use of apply tracking data (Apply Start, Apply Finish) via pixels placed on your designated landing page.</li>
<li>The processing of your data by our third-party service providers under data processing agreements compliant with applicable data protection law.</li>
<li>Receiving service-related communications regarding your account, listings, and Platform updates.</li>
</ol>
<p>You may withdraw consent at any time by contacting support@joblet.ai. Withdrawal does not affect lawfulness of prior processing.</p>`;

const commonCandidateData = `When job seekers apply to your listings or when you access candidate profiles through the Platform, you become an independent data controller for the candidate data you receive. You agree to the following obligations:
<ul>
<li><strong>Lawful Processing:</strong> You will process candidate personal data only for legitimate recruitment purposes.</li>
<li><strong>No Unauthorized Use:</strong> You will not use candidate data for purposes unrelated to recruitment, including marketing, advertising, resale, or sharing with unauthorized third parties.</li>
<li><strong>Data Security:</strong> You will implement appropriate technical and organizational security measures to protect candidate data.</li>
<li><strong>Data Retention:</strong> You will not retain candidate data longer than necessary. Unless the candidate provides explicit consent, you will delete their data within 6 months of the conclusion of the recruitment process.</li>
<li><strong>Data Subject Rights:</strong> You will honor candidate requests to access, correct, or delete their personal data.</li>
<li><strong>Compliance:</strong> You will comply with all applicable data protection laws regarding the processing of candidate data.</li>
</ul>
<p>Joblet.ai is not responsible for how you process candidate data after it is received by you. You indemnify Joveo Inc. against any claims arising from your misuse of candidate data.</p>`;

const commonListingStandards = `All job listings posted on the Platform must comply with the following standards:
<ul>
<li><strong>Accuracy:</strong> Job descriptions must accurately reflect the position, requirements, compensation, and working conditions.</li>
<li><strong>Non-Discrimination:</strong> Job listings must not discriminate based on race, color, religion, sex, sexual orientation, gender identity, national origin, disability, age, or any other characteristic protected by applicable law.</li>
<li><strong>Legality:</strong> Jobs must be for lawful employment. Listings for illegal activities, scams, pyramid schemes, or positions requiring payment from the applicant are strictly prohibited.</li>
<li><strong>Transparency:</strong> If the job involves commission-only compensation, contract work, or non-standard employment arrangements, this must be clearly disclosed.</li>
<li><strong>No Misleading Content:</strong> Listings must not contain misleading salary ranges, false company information, or bait-and-switch tactics.</li>
</ul>
<p>We reserve the right to remove any job listing that violates these standards, without prior notice. Repeated violations may result in account suspension or termination.</p>`;

const commonApplyTracking = `Joblet.ai may place tracking pixels on your designated landing pages (with your prior consent) to track Apply Start and Apply Finish events. By consenting to this tracking:
<ul>
<li>You confirm that you have the authority and legal right to allow the placement of tracking pixels.</li>
<li>You acknowledge that the pixel tracks only application initiation and completion events and does not collect application content or personal data.</li>
<li>You agree that your own privacy policy and cookie consent mechanisms govern data collection on your website.</li>
<li>You will inform applicants on your website about the use of tracking technologies, including the Joblet.ai tracking pixel.</li>
</ul>`;

const commonIP = `By uploading company logos, branding materials, and job listing content, you grant Joveo Inc. a non-exclusive, worldwide, royalty-free license to display, reproduce, and distribute such content on the Platform and in related marketing materials for the purpose of promoting your job listings. This license terminates when you remove the content or close your account. You represent and warrant that you have the right to grant this license and that your content does not infringe the intellectual property rights of any third party.`;

const commonDisclaimers = `THE PLATFORM IS PROVIDED "AS IS." WE DO NOT GUARANTEE THAT YOUR JOB LISTINGS WILL RECEIVE A SPECIFIC NUMBER OF VIEWS, APPLICATIONS, OR HIRES. WE ARE NOT RESPONSIBLE FOR THE QUALITY, QUALIFICATIONS, OR CONDUCT OF ANY CANDIDATES WHO APPLY THROUGH THE PLATFORM. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, JOVEO INC. SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.`;

const commonIndemnification = `You agree to indemnify, defend, and hold harmless Joveo Inc. from any claims, damages, losses, or expenses arising from: (a) your job listings or content; (b) your processing of candidate data; (c) your violation of these Recruiter Terms or any applicable law; (d) any discrimination or unlawful employment practices; or (e) any third-party claims related to your use of the Platform.`;

const commonTermination = `Either party may terminate the recruiter relationship at any time. You may deactivate your account and remove your listings by contacting support@joblet.ai. We may suspend or terminate your account for violations of these Recruiter Terms, receipt of candidate complaints, or fraudulent activity. Upon termination, active job listings will be removed. Data will be retained and deleted in accordance with our Privacy Policy retention schedule.`;

const commonGoverningLaw = `These Recruiter Terms shall be governed by the laws of the State of Delaware, United States, without regard to conflict of laws principles. Disputes shall be resolved through binding arbitration under AAA Commercial Arbitration Rules, except that either party may seek injunctive relief in a court of competent jurisdiction. Claims may be brought only on an individual basis.`;

const commonContactTerms = `For questions about these Recruiter Terms, please contact:
<p><strong>Joveo Inc.</strong><br/>Email: support@joblet.ai<br/>Subject Line: "Recruiter Terms Inquiry"</p>`;

const baseSections: LegalSection[] = [
  { title: "1. Acceptance of Terms", content: commonAcceptance },
  { title: "2. Recruiter Eligibility and Representations", content: commonEligibility },
  { title: "3. Data Collection and Processing", content: commonDataCollection },
  { title: "4. Consent to Data Processing", content: commonConsent },
  { title: "5. Recruiter Obligations Regarding Candidate Data", content: commonCandidateData },
  { title: "6. Job Listing Standards", content: commonListingStandards },
  { title: "7. Apply Tracking Pixels", content: commonApplyTracking },
  { title: "8. Intellectual Property", content: commonIP },
  { title: "9. Disclaimers and Limitation of Liability", content: commonDisclaimers },
  { title: "10. Indemnification", content: commonIndemnification },
  { title: "11. Termination", content: commonTermination },
  { title: "12. Governing Law and Dispute Resolution", content: commonGoverningLaw },
  { title: "13. Contact Us", content: commonContactTerms },
];

const europeTermsAddendum: LegalSection = {
  title: "Addendum: EEA/UK/Switzerland (GDPR)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to recruiters and employers operating in or targeting candidates in the EEA, UK, and Switzerland.</div>

<h4>Joint Controller / Independent Controller Relationship</h4>
<p>When you receive candidate data through Joblet.ai, you become an independent data controller for that data under the GDPR. Joveo Inc. and you each act as independent controllers; we are not joint controllers.</p>

<h4>GDPR Obligations for Recruiters</h4>
<p>As a data controller receiving candidate data from EEA/UK/Swiss candidates, you must:</p>
<ul>
<li>Have a lawful basis for processing candidate data (typically consent or legitimate interest).</li>
<li>Provide candidates with a transparent privacy notice explaining how you process their data.</li>
<li>Honor data subject rights requests (access, rectification, erasure, portability) within 30 days.</li>
<li>Implement appropriate security measures per Article 32 GDPR.</li>
<li>Report data breaches involving candidate data to the relevant supervisory authority within 72 hours.</li>
<li>Conduct a DPIA where required for high-risk processing of candidate data.</li>
</ul>

<h4>Cross-Border Transfers</h4>
<p>If you transfer candidate data outside the EEA/UK, you must ensure appropriate safeguards (SCCs, adequacy decisions, or BCRs) are in place per GDPR Chapter V.</p>

<h4>Governing Law Override</h4>
<p>For recruiters in the EEA/UK, the mandatory provisions of GDPR and applicable consumer/employment protection laws of your country shall apply.</p>`
};

const usTermsAddendum: LegalSection = {
  title: "Addendum: United States (CCPA/CPRA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to recruiters and employers operating in the United States.</div>

<h4>Service Provider Relationship (CCPA)</h4>
<p>To the extent that Joveo Inc. processes personal information on your behalf, we act as a "service provider" under the CCPA. We will not sell, retain, use, or disclose candidate personal information for any purpose other than performing the services specified in these Terms.</p>

<h4>Your CCPA/CPRA Obligations</h4>
<p>As an employer/recruiter receiving candidate data from California residents, you are responsible for:</p>
<ul>
<li>Providing the required CCPA "notice at collection" to California applicants.</li>
<li>Honoring California candidates' rights to know, delete, correct, and opt out.</li>
<li>Conducting privacy risk assessments as required by CPRA for high-risk processing of candidate data.</li>
<li>Not discriminating against candidates who exercise their CCPA/CPRA rights.</li>
</ul>

<h4>Employment-Specific Provisions</h4>
<p>You acknowledge that candidate data received through the Platform may be considered "employment-related personal information" under the CPRA. You agree to comply with all applicable CPRA provisions regarding such data.</p>`
};

const latamTermsAddendum: LegalSection = {
  title: "Addendum: Latin America (LGPD / Regional)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to recruiters and employers operating in or targeting candidates in Latin America.</div>

<h4>LGPD Obligations (Brazil)</h4>
<p>As a controller receiving candidate data from Brazilian residents, you must:</p>
<ul>
<li>Have a lawful basis under LGPD Article 7 for processing candidate data (consent or legitimate interest).</li>
<li>Respond to data subject rights requests within 15 days as required by the LGPD.</li>
<li>Ensure transparency about data processing purposes and third-party sharing.</li>
<li>If transferring candidate data internationally, comply with LGPD Article 33 transfer requirements.</li>
</ul>

<h4>Consent Requirements</h4>
<p>Under the LGPD, candidate consent must be free, informed, and unequivocal. If you process candidate data based on consent, you must ensure it is obtained properly and that candidates can revoke consent as easily as they provided it.</p>

<h4>Governing Law (LATAM Override)</h4>
<p>For recruiters in Brazil, the LGPD and the Brazilian Consumer Defense Code shall apply. For other LATAM jurisdictions, the applicable local data protection and employment laws shall prevail to the extent they provide greater protection.</p>`
};

const indiaTermsAddendum: LegalSection = {
  title: "Addendum: India (DPDPA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to recruiters and employers operating in or targeting candidates in India.</div>

<h4>Data Fiduciary Obligations</h4>
<p>As a Data Fiduciary under the DPDPA receiving candidate data from Indian residents, you must:</p>
<ul>
<li>Provide a clear Consent Notice to candidates specifying the purpose of data collection.</li>
<li>Obtain free, specific, informed, and unconditional consent before processing candidate data.</li>
<li>Maintain reasonable security safeguards per DPDPA requirements.</li>
<li>Notify the Data Protection Board of India and affected candidates within 72 hours of any data breach.</li>
<li>Delete candidate data when it is no longer necessary for the recruitment purpose or when consent is withdrawn.</li>
<li>Not process data of individuals under 18 without verifiable parental consent.</li>
</ul>

<h4>Consent Manager Integration</h4>
<p>When Consent Manager regulations come into effect (expected by November 2026), you must integrate with registered Consent Managers or provide equivalent mechanisms for Indian candidates to manage their consent.</p>

<h4>Governing Law (India Override)</h4>
<p>For recruiters in India, the DPDPA, the Information Technology Act, 2000, and applicable Indian employment and labor laws shall apply. Indian courts shall have jurisdiction for disputes involving Indian candidates or employers.</p>`
};

export const termsConditions: RegionDocument[] = [
  {
    regionId: "universal",
    regionLabel: "itle: "Recruiter Terms and Conditions (All Regions)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeTermsAddendum, usTermsAddendum, latamTermsAddendum, indiaTermsAddendum],
  },
  {
    regionId: "europe",
    regionLabel: "🇪�e",
 le: " Termditions (EEA/UK/Switzerland)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeTermsAddendum],
  },
  {
    regionId: "us",
    regionLabel: "🇺🇸 United States",
    subtitle: "Recruiter Terms and Conditions (United States)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, usTermsAddendum],
  },
  {
    regionId: "india",
    regionLabel: "🇮🇳 India",
    subtitle: "Recruiter Terms and Conditions (India)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, indiaTermsAddendum],
  },
  {
    regionId: "latam",
    regionLabel: "🌎 Latin America",
    subtitle: "Recruiter Terms and Conditions (Latin America)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, latamTermsAddendum],
  },
];
