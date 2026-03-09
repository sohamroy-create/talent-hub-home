export interface LegalSection {
  title: string;
  content: string;
}

export interface RegionDocument {
  regionId: string;
  regionLabel: string;
  subtitle: string;
  effectiveDate: string;
  sections: LegalSection[];
}

const commonIntro = `Joblet.ai ("Platform," "we," "us," or "our") is a job board and recruitment platform operated by Joveo Inc., a company incorporated in the United States. This Privacy and Data Security Policy ("Policy") describes how we collect, use, store, share, and protect personal data when you access or use our Platform, whether as a job seeker, recruiter, employer, or casual visitor. We are committed to protecting your privacy and ensuring that your personal data is handled responsibly, transparently, and in compliance with applicable data protection laws worldwide, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA), Brazil's Lei Geral de Protecao de Dados (LGPD), India's Digital Personal Data Protection Act (DPDPA), and other applicable national and regional privacy frameworks.`;

const commonDataController = `The data controller responsible for processing your personal data is:
<ul>
<li><strong>Entity:</strong> Joveo Inc.</li>
<li><strong>Platform:</strong> Joblet.ai</li>
<li><strong>Contact Email:</strong> support@joblet.ai</li>
</ul>
For privacy-specific inquiries, data subject access requests, or complaints, please contact us at support@joblet.ai with the subject line "Privacy Inquiry."`;

const commonDataCollection = `We collect different categories of data depending on how you interact with our Platform. Below is a comprehensive overview of the data we collect, the sources, and the purposes for each category.

<h4>3.1 Data Collected from All Visitors (Automated Collection)</h4>
<p>When you visit Joblet.ai, we automatically collect certain technical and behavioral data through cookies, tracking pixels, and analytics tools.</p>

<h5>A. Google Analytics 4 (GA4) Data</h5>
<p>We use Google Analytics 4 with Google Tags (gtags) placed on key interactive elements throughout the Platform to understand user behavior and improve our services. GA4 collects:</p>
<ul>
<li><strong>Device and Browser Information:</strong> Device type, operating system, browser type and version, screen resolution, and device category.</li>
<li><strong>Traffic and Session Data:</strong> Referring website or source, landing pages, session duration, pages per session, bounce rate, and geographic location at the country/region level.</li>
<li><strong>User Interaction Events:</strong> Clicks on key buttons (tracked via gtags), scroll depth, form interactions, navigation patterns, and user journey flow.</li>
<li><strong>Engagement Metrics:</strong> Page views, event counts, engagement time, and conversion events.</li>
</ul>
<p>Google Analytics 4 does not collect personally identifiable information (PII). IP addresses are anonymized by default in GA4.</p>

<h5>B. Advertising Pixels and Tags</h5>
<ul>
<li><strong>Google Ads Pixel/Conversion Tag:</strong> Tracks conversions from Google Ads campaigns, measures ad effectiveness, and enables remarketing.</li>
<li><strong>Meta (Facebook/Instagram) Pixel:</strong> Tracks user interactions with our Platform after viewing or clicking a Meta advertisement.</li>
</ul>
<p>These pixels may collect: pages visited on our Platform, referral information, browser and device identifiers, and actions taken.</p>

<h5>C. Apply Tracking (Third-Party Client Websites)</h5>
<p>When a user clicks the "Apply" button on a job listing on Joblet.ai, they are redirected to the employer's external career page. We place a tracking pixel on the client's landing page (with the client's consent) to track:</p>
<ul>
<li><strong>Apply Start:</strong> The user has initiated the application process on the client's website.</li>
<li><strong>Apply Finish:</strong> The user has completed and submitted the application on the client's website.</li>
</ul>
<p>We do not collect the content of the application, personal details entered on the client's site, or any sensitive personal data through this tracking mechanism.</p>

<h4>3.2 Data Collected from Job Seekers (Voluntary Submission)</h4>
<ul>
<li><strong>Account and Profile Information:</strong> Full name, email address, phone number, profile photograph, location/city, and account credentials.</li>
<li><strong>Professional Information:</strong> Resume/CV, work experience details, current and desired job titles, salary expectations, and availability.</li>
<li><strong>Contact and Communication Preferences:</strong> Preferred method of contact, email notification preferences, and job alert settings.</li>
<li><strong>Any Additional Information:</strong> Any other information you voluntarily include in your profile, resume, cover letter, or communications.</li>
</ul>

<h4>3.3 Data Collected from Recruiters and Employers (Voluntary Submission)</h4>
<ul>
<li><strong>Recruiter Profile Information:</strong> Full name, email address, phone number, job title/role, and professional profile details.</li>
<li><strong>Company Information:</strong> Company name, company logo, company website, industry, company size, company description, company location(s), and employer branding content.</li>
<li><strong>Job Listing Information:</strong> Job title, job description, requirements, qualifications, compensation range, benefits, job location, employment type, and application instructions.</li>
</ul>`;

const commonLegalBasis = `We process your personal data based on one or more of the following legal grounds, depending on the context and jurisdiction:
<table>
<thead><tr><th>Legal Basis</th><th>Description</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>Consent</td><td>You have given clear, informed, and freely given consent for specific processing purposes.</td><td>Creating an account, submitting a resume, opting into job alerts, accepting advertising cookies.</td></tr>
<tr><td>Contractual Necessity</td><td>Processing is necessary to perform a contract with you or to take pre-contractual steps at your request.</td><td>Processing your profile to match you with job listings, facilitating recruiter-job seeker connections.</td></tr>
<tr><td>Legitimate Interest</td><td>Processing is necessary for our legitimate business interests, provided these interests are not overridden by your rights and freedoms.</td><td>Improving Platform functionality, analyzing aggregated usage patterns, preventing fraud, ensuring Platform security.</td></tr>
<tr><td>Legal Obligation</td><td>Processing is necessary to comply with a legal obligation to which we are subject.</td><td>Responding to lawful requests from regulators or law enforcement, tax and accounting obligations.</td></tr>
</tbody></table>`;

const commonUsage = `We use the personal data we collect for the following purposes:

<h4>Service Delivery and Platform Operations</h4>
<ul>
<li>To create and manage your user account and profile.</li>
<li>To display job listings and match job seekers with relevant opportunities.</li>
<li>To enable recruiters to post job listings and manage applications.</li>
<li>To facilitate communication between job seekers and recruiters/employers.</li>
<li>To process and track job applications (including apply start and apply finish events via third-party tracking).</li>
</ul>

<h4>Analytics and Platform Improvement</h4>
<ul>
<li>To analyze aggregated user behavior and usage patterns via Google Analytics 4.</li>
<li>To monitor and improve Platform performance, usability, and content relevance.</li>
<li>To conduct A/B testing and feature optimization.</li>
</ul>

<h4>Advertising and Marketing</h4>
<ul>
<li>To measure the effectiveness of advertising campaigns via Google Ads and Meta pixels.</li>
<li>To deliver relevant advertisements and remarketing campaigns to Platform visitors.</li>
<li>To send job alerts, newsletters, and promotional communications (with your consent, where required).</li>
</ul>

<h4>Security and Compliance</h4>
<ul>
<li>To detect, prevent, and address fraud, abuse, security incidents, and technical issues.</li>
<li>To comply with applicable legal obligations, regulations, and lawful requests.</li>
<li>To enforce our Terms and Conditions and protect the rights and safety of our users and the Platform.</li>
</ul>`;

const commonCookies = `We use cookies and similar tracking technologies to collect and store information when you visit our Platform.
<table>
<thead><tr><th>Cookie Type</th><th>Purpose</th><th>Duration</th><th>Consent Required</th></tr></thead>
<tbody>
<tr><td>Strictly Necessary</td><td>Essential for Platform functionality (session management, security, load balancing).</td><td>Session / Persistent</td><td>No</td></tr>
<tr><td>Analytics (GA4)</td><td>Measure site usage, user journeys, and engagement via Google Analytics 4.</td><td>Up to 2 years</td><td>Yes</td></tr>
<tr><td>Advertising (Google Ads)</td><td>Track conversions from Google Ads, enable remarketing, measure ad effectiveness.</td><td>Up to 2 years</td><td>Yes</td></tr>
<tr><td>Advertising (Meta Pixel)</td><td>Track conversions from Meta ads, build audiences for remarketing, optimize ad delivery.</td><td>Up to 2 years</td><td>Yes</td></tr>
<tr><td>Functional</td><td>Remember user preferences (language, region, display settings).</td><td>Up to 1 year</td><td>Yes</td></tr>
</tbody></table>
<p>You can manage your cookie preferences at any time through our cookie consent banner or by adjusting your browser settings.</p>`;

const commonDataSharing = `We may share your personal data with the following categories of recipients, strictly for the purposes described in this Policy:
<ul>
<li><strong>Recruiters and Employers:</strong> If you apply for a job or make your profile visible to recruiters, your profile information and application materials may be shared with the relevant recruiter or employer.</li>
<li><strong>Analytics Providers:</strong> Google (for Google Analytics 4 and Google Ads), in accordance with Google's data processing terms and privacy policy.</li>
<li><strong>Advertising Partners:</strong> Meta Platforms, Inc. (for Meta Pixel/Facebook Ads), in accordance with Meta's data policy.</li>
<li><strong>Client Employers (Apply Tracking):</strong> We share aggregated apply tracking data with our client employers to measure recruitment campaign performance.</li>
<li><strong>Service Providers:</strong> Cloud hosting providers, email delivery services, customer support tools, and other vendors who process data on our behalf under strict data processing agreements.</li>
<li><strong>Legal and Regulatory Authorities:</strong> When required by law, court order, or regulatory request.</li>
<li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets.</li>
</ul>`;

const commonInternationalTransfers = `Joveo Inc. is based in the United States. If you access the Platform from outside the United States, your personal data may be transferred to, stored, and processed in the United States or other jurisdictions where our service providers operate.

We ensure that such transfers are conducted in compliance with applicable data protection laws by implementing appropriate safeguards, including:
<ul>
<li>Standard Contractual Clauses (SCCs) approved by the European Commission for transfers from the EEA.</li>
<li>The EU-U.S. Data Privacy Framework (DPF) for eligible data transfers from the EU/EEA to the United States.</li>
<li>Transfer Impact Assessments (TIAs) to evaluate the adequacy of data protection in recipient jurisdictions.</li>
<li>Binding contractual obligations on all third-party processors requiring them to protect your data in accordance with this Policy and applicable law.</li>
</ul>`;

const commonRetention = `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law.
<table>
<thead><tr><th>Data Category</th><th>Retention Period</th><th>Justification</th></tr></thead>
<tbody>
<tr><td>Job Seeker Account Data</td><td>Duration of account + 12 months after deletion request</td><td>Service provision; legal compliance</td></tr>
<tr><td>Recruiter/Employer Account Data</td><td>Duration of account + 12 months after deletion request</td><td>Service provision; legal compliance</td></tr>
<tr><td>Job Applications (on Joblet.ai)</td><td>Up to 12 months after application date, unless extended by consent</td><td>Recruitment process; legal claims defense</td></tr>
<tr><td>Apply Tracking Data (pixels)</td><td>12 months from collection</td><td>Campaign performance analysis</td></tr>
<tr><td>GA4 Analytics Data</td><td>Up to 26 months (Google default retention)</td><td>Platform improvement and analytics</td></tr>
<tr><td>Advertising Pixel Data</td><td>Per platform policies (up to 2 years)</td><td>Ad campaign measurement</td></tr>
<tr><td>Cookie Data</td><td>Per cookie type (session to 2 years)</td><td>Functionality and analytics</td></tr>
</tbody></table>
<p>After the retention period expires, your data will be securely deleted or anonymized. You may request earlier deletion at any time by contacting us at support@joblet.ai.</p>`;

const commonRights = `<table>
<thead><tr><th>Right</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Right of Access</td><td>Request a copy of the personal data we hold about you, including the categories of data, purposes of processing, and recipients.</td></tr>
<tr><td>Right to Rectification</td><td>Request correction of inaccurate or incomplete personal data.</td></tr>
<tr><td>Right to Erasure (Right to Be Forgotten)</td><td>Request deletion of your personal data, subject to legal exceptions.</td></tr>
<tr><td>Right to Restrict Processing</td><td>Request that we limit the processing of your data in certain circumstances.</td></tr>
<tr><td>Right to Data Portability</td><td>Receive your personal data in a structured, commonly used, machine-readable format and transmit it to another controller.</td></tr>
<tr><td>Right to Object</td><td>Object to processing based on legitimate interest or for direct marketing purposes.</td></tr>
<tr><td>Right to Withdraw Consent</td><td>Withdraw previously given consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.</td></tr>
<tr><td>Right to Non-Discrimination</td><td>You will not be discriminated against for exercising your privacy rights.</td></tr>
<tr><td>Right to Opt Out of Sale/Sharing</td><td>Where applicable, opt out of the sale or sharing of your personal data for targeted advertising.</td></tr>
</tbody></table>
<p>To exercise any of these rights, please contact us at support@joblet.ai. We will respond to your request within the timeframe required by applicable law (generally 30 days for GDPR/DPDPA, 45 days for CCPA/CPRA, or 15 days for LGPD).</p>`;

const commonSecurity = `We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
<ul>
<li><strong>Encryption:</strong> All data transmitted between your browser and our Platform is encrypted using TLS/SSL (HTTPS). Data at rest is encrypted using industry-standard encryption algorithms.</li>
<li><strong>Access Controls:</strong> Role-based access controls ensure that only authorized personnel can access personal data, and only to the extent necessary for their role.</li>
<li><strong>Infrastructure Security:</strong> Our Platform is hosted on enterprise-grade cloud infrastructure with physical security, network firewalls, intrusion detection systems, and regular security audits.</li>
<li><strong>Vendor Security:</strong> All third-party service providers are required to maintain appropriate security measures and are bound by data processing agreements.</li>
<li><strong>Incident Response:</strong> We maintain a data breach response plan. In the event of a data breach, we will notify the appropriate supervisory authority and affected individuals within the timeframes required by applicable law.</li>
</ul>
<p>While we strive to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed to implementing and maintaining reasonable safeguards.</p>`;

const commonChildren = `Joblet.ai is not intended for use by individuals under the age of 16 (or the applicable age of majority for digital consent in your jurisdiction). We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without appropriate parental consent, we will take steps to delete that data promptly. If you believe a child has provided us with personal data, please contact us at support@joblet.ai.`;

const commonThirdParty = `Our Platform may contain links to third-party websites, including employer career pages, social media platforms, and partner services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party website before providing your personal data.`;

const commonAutomatedDecisions = `Joblet.ai may use automated systems to match job seekers with relevant job listings based on profile information, search history, and preferences. This matching is designed to improve your experience and is not used to make decisions that produce legal effects or similarly significant effects on you without human involvement.`;

const commonDNT = `Some browsers transmit "Do Not Track" (DNT) signals. At this time, we do not respond to DNT signals in a standard manner, as there is no industry-wide standard for DNT compliance. However, you can manage tracking through our cookie consent mechanism and your browser settings.`;

const commonChanges = `We may update this Privacy and Data Security Policy from time to time to reflect changes in our practices, technologies, legal requirements, or for other operational reasons. When we make material changes, we will:
<ul>
<li>Post the updated Policy on this page with a revised "Last Updated" date.</li>
<li>Notify you via email (if you have an account) or through a prominent notice on our Platform.</li>
<li>Where required by applicable law, obtain your renewed consent before implementing changes that affect how we process your data.</li>
</ul>
<p>We encourage you to review this Policy periodically. Your continued use of the Platform after any changes constitutes your acceptance of the updated Policy.</p>`;

const commonContact = `If you have any questions, concerns, or requests regarding this Privacy and Data Security Policy or our data practices, please contact us:
<p><strong>Joveo Inc.</strong><br/>Email: support@joblet.ai<br/>Subject Line: "Privacy Inquiry"</p>
<p>We aim to respond to all inquiries within 30 days.</p>`;

const baseSections: LegalSection[] = [
  { title: "1. Introduction", content: commonIntro },
  { title: "2. Data Controller Information", content: commonDataController },
  { title: "3. Categories of Personal Data We Collect", content: commonDataCollection },
  { title: "4. Legal Basis for Processing Personal Data", content: commonLegalBasis },
  { title: "5. How We Use Your Personal Data", content: commonUsage },
  { title: "6. Cookies and Tracking Technologies", content: commonCookies },
  { title: "7. Data Sharing and Disclosure", content: commonDataSharing },
  { title: "8. International Data Transfers", content: commonInternationalTransfers },
  { title: "9. Data Retention", content: commonRetention },
  { title: "10. Your Rights as a Data Subject", content: commonRights },
  { title: "11. Data Security", content: commonSecurity },
  { title: "12. Children's Privacy", content: commonChildren },
  { title: "13. Third-Party Links and Services", content: commonThirdParty },
  { title: "14. Automated Decision-Making and Profiling", content: commonAutomatedDecisions },
  { title: "15. Do Not Track Signals", content: commonDNT },
  { title: "16. Changes to This Policy", content: commonChanges },
  { title: "17. Contact Us", content: commonContact },
];

const europeAddendum: LegalSection = {
  title: "Addendum: EEA/UK/Switzerland (GDPR)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to individuals located in the European Economic Area, United Kingdom, and Switzerland.</div>

<h4>A.1 GDPR Compliance Statement</h4>
<p>Joblet.ai processes personal data in compliance with Regulation (EU) 2016/679 (General Data Protection Regulation, "GDPR") and the UK General Data Protection Regulation (UK GDPR). Joveo Inc. acts as the data controller for personal data collected through the Platform.</p>

<h4>A.2 Legal Basis for Processing</h4>
<p>For individuals in the EEA/UK/Switzerland, we process personal data based on the following legal bases as defined under Article 6(1) of the GDPR:</p>
<ul>
<li><strong>Consent (Article 6(1)(a)):</strong> For non-essential cookies, marketing communications, and any processing where we specifically request your consent.</li>
<li><strong>Contractual Necessity (Article 6(1)(b)):</strong> For creating and managing your account, processing job applications, and facilitating recruiter-job seeker connections.</li>
<li><strong>Legitimate Interest (Article 6(1)(f)):</strong> For Platform security, fraud prevention, aggregated analytics for service improvement, and internal record-keeping.</li>
<li><strong>Legal Obligation (Article 6(1)(c)):</strong> Where processing is necessary to comply with EU/UK law.</li>
</ul>

<h4>A.3 Cookie Consent Under ePrivacy Directive</h4>
<p>In accordance with the ePrivacy Directive (2002/58/EC), we obtain your prior, informed, and freely given consent before placing any non-essential cookies or tracking technologies on your device.</p>

<h4>A.4 Your Rights Under GDPR</h4>
<ul>
<li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe your data has been processed unlawfully.</li>
<li><strong>Right to Object to Legitimate Interest Processing:</strong> You may object to processing based on legitimate interest at any time.</li>
<li><strong>Right Not to Be Subject to Automated Decision-Making:</strong> You have the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects.</li>
</ul>
<p>To exercise your rights, contact us at support@joblet.ai. We will respond within 30 days as required by Article 12 of the GDPR.</p>

<h4>A.5 International Transfers from the EEA/UK</h4>
<p>We safeguard transfers through Standard Contractual Clauses (SCCs), the EU-U.S. Data Privacy Framework, Transfer Impact Assessments, and supplementary measures including encryption and pseudonymization.</p>

<h4>A.6 Data Retention for EEA/UK Users</h4>
<p>Inactive job seeker accounts will be flagged after 12 months of inactivity, and users will be notified before deletion. You may request deletion at any time.</p>

<h4>A.7 Data Protection Impact Assessments (DPIAs)</h4>
<p>We conduct DPIAs for any processing that is likely to result in a high risk to the rights and freedoms of individuals.</p>`
};

const usAddendum: LegalSection = {
  title: "Addendum: United States (CCPA/CPRA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to individuals located in the United States, including California residents.</div>

<h4>B.1 CCPA/CPRA Compliance (California Residents)</h4>
<p>If you are a California resident, you have specific rights under the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("CCPA/CPRA").</p>

<h4>B.2 Categories of Personal Information Collected</h4>
<table>
<thead><tr><th>Category</th><th>Examples</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Identifiers</td><td>Name, email address, phone number, account credentials</td><td>Directly from you</td></tr>
<tr><td>Internet Activity</td><td>Browsing history on Platform, search history, interaction with ads</td><td>Automated collection (GA4, pixels)</td></tr>
<tr><td>Professional Information</td><td>Resume, work history, skills, education, certifications</td><td>Directly from you</td></tr>
<tr><td>Geolocation (General)</td><td>Country/region-level location from IP address</td><td>Automated collection (GA4)</td></tr>
<tr><td>Inferences</td><td>Job preferences, career interests based on usage patterns</td><td>Derived from your activity</td></tr>
</tbody></table>

<h4>B.3 Sale and Sharing of Personal Information</h4>
<p>Joblet.ai does NOT sell your personal information for monetary consideration. However, the use of advertising pixels may constitute "sharing" under CCPA/CPRA. You have the right to opt out of this sharing.</p>

<h4>B.4 Your Rights Under CCPA/CPRA</h4>
<ul>
<li><strong>Right to Know:</strong> Request disclosure of categories and specific pieces of personal information collected.</li>
<li><strong>Right to Delete:</strong> Request deletion of personal information collected from you.</li>
<li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
<li><strong>Right to Opt Out of Sale/Sharing:</strong> Opt out of the "sale" or "sharing" of your personal information.</li>
<li><strong>Right to Limit Use of Sensitive Personal Information.</strong></li>
<li><strong>Right to Non-Discrimination.</strong></li>
</ul>
<p>To exercise these rights, contact support@joblet.ai. We will respond within 45 days.</p>

<h4>B.5 Do Not Sell or Share My Personal Information</h4>
<p>We provide a "Do Not Sell or Share My Personal Information" link accessible from the footer of every page. We will process your opt-out request within 15 business days.</p>

<h4>B.6 Other U.S. State Privacy Laws</h4>
<p>We comply with applicable state privacy laws, including VCDPA, CPA, CTDPA, UCPA, and other state laws as they come into effect.</p>

<h4>B.7 Privacy Risk Assessments</h4>
<p>In compliance with CPRA requirements, we conduct privacy risk assessments before engaging in processing activities that present significant risk to consumer privacy.</p>`
};

const latamAddendum: LegalSection = {
  title: "Addendum: Latin America (LGPD)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to individuals located in Latin America, with specific provisions for Brazilian residents under the LGPD.</div>

<h4>C.1 LGPD Compliance (Brazilian Residents)</h4>
<p>If you are located in Brazil, the processing of your personal data is governed by the Lei Geral de Protecao de Dados (Law No. 13.709/2018, "LGPD"), as enforced by the Autoridade Nacional de Protecao de Dados (ANPD). Joveo Inc. acts as the data controller (controlador).</p>

<h4>C.2 Legal Basis for Processing Under LGPD</h4>
<p>Under the LGPD (Article 7), we process your personal data based on:</p>
<ul>
<li><strong>Consent (Article 7, I):</strong> For non-essential cookies, advertising tracking, marketing communications.</li>
<li><strong>Contractual Performance (Article 7, V):</strong> For creating your account, processing your profile and job applications.</li>
<li><strong>Legitimate Interest (Article 7, IX):</strong> For Platform improvement through aggregated analytics, fraud prevention, and security.</li>
<li><strong>Legal Obligation (Article 7, II):</strong> Where processing is required by Brazilian law or regulation.</li>
</ul>

<h4>C.3 Your Rights Under LGPD</h4>
<p>Under Article 18 of the LGPD, you have the following rights:</p>
<ul>
<li><strong>Confirmation:</strong> Confirm whether your personal data is being processed.</li>
<li><strong>Access:</strong> Obtain access to the personal data we hold about you.</li>
<li><strong>Correction:</strong> Request correction of incomplete, inaccurate, or outdated personal data.</li>
<li><strong>Anonymization, Blocking, or Deletion:</strong> Request anonymization, blocking, or deletion of unnecessary, excessive, or non-compliant data.</li>
<li><strong>Portability:</strong> Request portability of your personal data to another service provider.</li>
<li><strong>Deletion:</strong> Request deletion of personal data processed based on consent.</li>
<li><strong>Information on Sharing:</strong> Receive information about entities with whom we share your data.</li>
<li><strong>Consent Revocation:</strong> Revoke your consent at any time.</li>
</ul>
<p>We will respond to your request within 15 days as required by the LGPD. Contact us at support@joblet.ai with the subject line "LGPD Data Subject Request."</p>

<h4>C.4 Data Protection Officer (DPO/Encarregado)</h4>
<p>Our designated Data Protection Officer for LGPD purposes can be reached at support@joblet.ai with the subject line "LGPD DPO Inquiry."</p>

<h4>C.5 Other LATAM Jurisdictions</h4>
<p>For users in other Latin American countries, we comply with applicable local data protection laws. If your country has specific privacy legislation, your rights under that legislation apply in addition to the rights described in this Policy.</p>`
};

const indiaAddendum: LegalSection = {
  title: "Addendum: India (DPDPA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to individuals located in India, governed by the Digital Personal Data Protection Act (DPDPA).</div>

<h4>D.1 DPDPA Compliance</h4>
<p>If you are located in India, the processing of your personal data is governed by the Digital Personal Data Protection Act, 2023 ("DPDPA"). Joveo Inc. acts as a Data Fiduciary under the DPDPA.</p>

<h4>D.2 Consent Under DPDPA</h4>
<p>Under the DPDPA, we obtain your free, specific, informed, and unconditional consent through a clear Consent Notice before processing your personal data. You may withdraw consent at any time.</p>

<h4>D.3 Your Rights Under DPDPA</h4>
<ul>
<li><strong>Right to Access:</strong> Request information about the personal data being processed and the processing activities.</li>
<li><strong>Right to Correction and Erasure:</strong> Request correction of inaccurate data and erasure of data no longer necessary.</li>
<li><strong>Right to Grievance Redressal:</strong> Lodge a complaint with our grievance officer or the Data Protection Board of India.</li>
<li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity.</li>
</ul>
<p>We will respond to your request within 30 days. Contact us at support@joblet.ai with the subject line "DPDPA Data Subject Request."</p>

<h4>D.4 Data Fiduciary Obligations</h4>
<p>As a Data Fiduciary, we:</p>
<ul>
<li>Provide clear Consent Notices specifying the purpose of data collection.</li>
<li>Maintain reasonable security safeguards per DPDPA requirements.</li>
<li>Notify the Data Protection Board of India and affected individuals within 72 hours of any data breach.</li>
<li>Delete personal data when it is no longer necessary or when consent is withdrawn.</li>
<li>Do not process data of individuals under 18 without verifiable parental consent.</li>
</ul>

<h4>D.5 Consent Manager Integration</h4>
<p>When Consent Manager regulations come into effect (expected by November 2026), we will integrate with registered Consent Managers to enable Indian users to manage their consent preferences.</p>

<h4>D.6 Grievance Officer</h4>
<p>Our designated Grievance Officer can be reached at support@joblet.ai with the subject line "DPDPA Grievance." We will acknowledge your complaint within 48 hours and resolve it within 30 days.</p>`
};

export const privacyPolicies: RegionDocument[] = [
  {
    regionId: "universal",
    regionLabel: "Universal",
    subtitle: "Comprehensive Privacy and Data Security Policy (All Regions)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeAddendum, usAddendum, latamAddendum, indiaAddendum],
  },
  {
    regionId: "europe",
    regionLabel: "Europe",
    subtitle: "Privacy and Data Security Policy (EEA/UK/Switzerland - GDPR)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeAddendum],
  },
  {
    regionId: "us",
    regionLabel: "United States",
    subtitle: "Privacy and Data Security Policy (United States - CCPA/CPRA)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, usAddendum],
  },
  {
    regionId: "india",
    regionLabel: "India",
    subtitle: "Privacy and Data Security Policy (India - DPDPA)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, indiaAddendum],
  },
  {
    regionId: "latam",
    regionLabel: "Latin America",
    subtitle: "Privacy and Data Security Policy (Latin America - LGPD)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, latamAddendum],
  },
];
