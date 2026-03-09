import type { LegalSection, RegionDocument } from "./privacyContent";

const userAcceptance = `These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Joveo Inc. ("Company," "we," "us," or "our"), the operator of Joblet.ai (the "Platform"). By accessing, browsing, or creating an account on the Platform, you agree to comply with and be bound by these Terms, our Privacy and Data Security Policy, and any applicable laws and regulations.

<p>We reserve the right to modify these Terms at any time. Material changes will be communicated to you via email or a prominent notice on the Platform at least 30 days before they take effect. Your continued use of the Platform after such changes constitutes acceptance of the modified Terms.</p>`;

const userEligibility = `You must be at least 16 years of age (or the applicable age of digital consent in your jurisdiction) to create an account or use our services. By creating an account, you represent and warrant that you meet the age requirement and that all information you provide is accurate, complete, and current. If you are under the applicable age of consent, you may not use the Platform.`;

const userAccountSecurity = `To access certain features of the Platform, you may be required to create an account. When creating an account, you agree to:
<ul>
<li>Provide accurate, complete, and current information during registration and keep your profile information up to date.</li>
<li>Maintain the confidentiality of your account credentials and not share your login information with any third party.</li>
<li>Accept responsibility for all activities that occur under your account.</li>
<li>Notify us immediately at support@joblet.ai if you suspect any unauthorized access to or use of your account.</li>
</ul>
<p>We reserve the right to suspend or terminate accounts that violate these Terms, contain false or misleading information, or are used for fraudulent or unlawful purposes.</p>`;

const userDataCollection = `By creating an account and using the Platform, you acknowledge and consent to the collection, processing, and use of your personal data as described in our Privacy and Data Security Policy, which is incorporated into these Terms by reference. Specifically, you understand that:
<ul>
<li>We collect the personal information you voluntarily provide, including your name, email address, phone number, resume/CV, work experience, education, skills, profile photograph, and any other information you choose to include in your profile.</li>
<li>We use cookies and tracking technologies (including Google Analytics 4 with gtags and advertising pixels from Google Ads and Meta) to analyze Platform usage, measure advertising effectiveness, and improve our services.</li>
<li>When you click "Apply" on a job listing and are redirected to an employer's external website, a tracking pixel on the employer's site may track your application start and completion events for conversion measurement purposes. This tracking occurs on the employer's website, not on Joblet.ai.</li>
<li>Your profile information and application materials may be shared with recruiters and employers when you apply for jobs or make your profile visible for recruitment purposes.</li>
</ul>`;

const userConsent = `By checking the consent checkbox and submitting your registration, you provide your free, specific, informed, and unambiguous consent to:
<ol>
<li>The collection and processing of your personal data for the purposes of account creation, profile management, job matching, and communication regarding your account and applications.</li>
<li>The use of strictly necessary cookies for Platform functionality without additional consent, and the use of analytics and advertising cookies subject to your cookie preferences (which you may manage at any time).</li>
<li>The sharing of your profile and application data with recruiters and employers when you apply for positions or opt to make your profile visible.</li>
<li>The processing of your data by our third-party service providers (including cloud hosting, analytics, and advertising platforms) under data processing agreements, as detailed in our Privacy Policy.</li>
</ol>
<p>You may withdraw your consent at any time by contacting us at support@joblet.ai or by deleting your account through your account settings. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</p>`;

const userContent = `You retain ownership of the content you upload to the Platform (including your resume, profile information, and any other materials). By uploading content, you grant Joveo Inc. a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and distribute your content solely for the purpose of operating the Platform and providing our services. This license terminates when you delete your content or your account.

<p>You represent and warrant that:</p>
<ul>
<li>All information you provide is truthful, accurate, and does not infringe the intellectual property or other rights of any third party.</li>
<li>You will not upload any content that is defamatory, obscene, fraudulent, misleading, or otherwise unlawful.</li>
<li>You will not use the Platform for any purpose other than legitimate job-seeking activities.</li>
<li>You will not scrape, crawl, or use automated tools to extract data from the Platform without our prior written consent.</li>
<li>You will not attempt to gain unauthorized access to any part of the Platform, other accounts, or systems connected to the Platform.</li>
</ul>`;

const userIP = `All content, features, and functionality of the Platform (including but not limited to text, graphics, logos, icons, images, software, and the overall look and feel of the Platform) are owned by or licensed to Joveo Inc. and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on our Platform or its content without our prior written consent.`;

const userThirdParty = `The Platform contains links to third-party websites, including employer career pages and external job application portals. We are not responsible for the content, privacy practices, or terms of service of any third-party website. When you click "Apply" and are redirected to an employer's website, that employer's terms and privacy policy govern your interaction with their site. We encourage you to review the terms and privacy policies of any third-party website before providing personal information.`;

const userDisclaimers = `THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

<p>We do not guarantee that:</p>
<ul>
<li>The Platform will be available, uninterrupted, secure, or error-free at all times.</li>
<li>Job listings are accurate, current, or complete. We are not responsible for the content of job listings posted by recruiters or employers.</li>
<li>Use of the Platform will result in employment, interviews, or any particular outcome.</li>
</ul>

<p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, JOVEO INC. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.</p>`;

const userIndemnification = `You agree to indemnify, defend, and hold harmless Joveo Inc., its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney's fees) arising out of or related to: (a) your use of the Platform; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content you upload or submit through the Platform.`;

const userTermination = `You may terminate your account at any time by contacting us at support@joblet.ai or through your account settings. Upon termination, we will delete your personal data in accordance with the retention periods specified in our Privacy Policy, unless we are required to retain certain data by law. We may suspend or terminate your account at any time, with or without notice, if we reasonably believe that you have violated these Terms, engaged in fraudulent or unlawful activity, or posed a risk to the Platform, other users, or third parties. Sections 7, 9, 10, and 12 shall survive termination.`;

const userGoverningLaw = `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms or the Platform shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction.

<p>YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. If this class action waiver is found to be unenforceable, the entirety of this arbitration provision shall be null and void.</p>`;

const userSeverability = `If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the intent of the original provision.`;

const userEntireAgreement = `These Terms, together with our Privacy and Data Security Policy and any other policies or guidelines referenced herein, constitute the entire agreement between you and Joveo Inc. regarding your use of the Platform and supersede all prior agreements and understandings.`;

const userContact = `For questions about these Terms, please contact us at:
<p><strong>Joveo Inc.</strong><br/>Email: support@joblet.ai<br/>Subject Line: "Terms of Service Inquiry"</p>`;

const baseSections: LegalSection[] = [
  { title: "1. Acceptance of Terms", content: userAcceptance },
  { title: "2. Eligibility", content: userEligibility },
  { title: "3. Account Registration and Security", content: userAccountSecurity },
  { title: "4. Data Collection and Privacy", content: userDataCollection },
  { title: "5. Consent to Data Processing", content: userConsent },
  { title: "6. User Content and Responsibilities", content: userContent },
  { title: "7. Intellectual Property", content: userIP },
  { title: "8. Third-Party Links and Services", content: userThirdParty },
  { title: "9. Disclaimers and Limitation of Liability", content: userDisclaimers },
  { title: "10. Indemnification", content: userIndemnification },
  { title: "11. Termination", content: userTermination },
  { title: "12. Governing Law and Dispute Resolution", content: userGoverningLaw },
  { title: "13. Severability", content: userSeverability },
  { title: "14. Entire Agreement", content: userEntireAgreement },
  { title: "15. Contact Us", content: userContact },
];

const europeUserAddendum: LegalSection = {
  title: "Addendum: EEA/UK/Switzerland (GDPR)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to users in the EEA, UK, and Switzerland and supplements the Terms above. Where conflict exists, this addendum prevails.</div>

<h4>GDPR-Specific Consent Provisions</h4>
<p>In accordance with the GDPR, your consent to data processing is separate from your acceptance of these Terms. You will be presented with granular consent options for:</p>
<ul>
<li>Essential account data processing (required for service provision under contractual necessity).</li>
<li>Analytics cookies (optional, managed through our cookie consent banner).</li>
<li>Advertising and remarketing cookies (optional, managed through our cookie consent banner).</li>
<li>Marketing communications (optional, separate opt-in).</li>
</ul>
<p>You may withdraw consent or adjust preferences at any time without affecting the lawfulness of prior processing. Refusal of non-essential cookies will not affect your ability to use the core Platform features.</p>

<h4>Right to Withdraw and Data Portability</h4>
<p>You have the right to request a copy of your data in a structured, commonly used, and machine-readable format (e.g., JSON or CSV). Requests will be fulfilled within 30 days. You also have the right to have your data transmitted directly to another controller where technically feasible.</p>

<h4>Governing Law (EEA/UK Override)</h4>
<p>For users in the EEA, the mandatory consumer protection laws of your country of residence shall apply to the extent they provide greater protection. For UK users, English law shall apply in addition to the main governing law, and disputes may be brought before UK courts.</p>

<h4>Complaints to Supervisory Authority</h4>
<p>If you are not satisfied with our response to your privacy concerns, you have the right to lodge a complaint with your local Data Protection Authority.</p>`
};

const usUserAddendum: LegalSection = {
  title: "Addendum: United States (CCPA/CPRA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to users in the United States, with specific provisions for California residents. Where conflict exists, this addendum prevails.</div>

<h4>California Residents: Your CCPA/CPRA Rights</h4>
<p>If you are a California resident, you have additional rights under the CCPA/CPRA. At or before the point of account creation, we inform you that we collect the following categories of personal information: Identifiers (name, email, phone), Professional Information (resume, work history), and Internet Activity (browsing patterns via analytics tools). You have the right to know, delete, correct, and opt out of the sale/sharing of your personal information.</p>

<h4>Do Not Sell or Share</h4>
<p>You may opt out of the "sharing" of your personal information for cross-context behavioral advertising at any time via the "Do Not Sell or Share My Personal Information" link in the Platform footer. We do not sell your personal information for monetary consideration.</p>

<h4>Financial Incentive Disclosure</h4>
<p>We do not offer financial incentives that are related to the collection, sale, or deletion of personal information. If we do so in the future, we will provide a clear notice and obtain your opt-in consent.</p>

<h4>Arbitration (U.S.)</h4>
<p>Disputes will be resolved through binding arbitration under AAA Consumer Rules. You retain the right to bring claims in small claims court if eligible. The class action waiver in Section 12 applies to California residents to the extent permitted by California law.</p>`
};

const latamUserAddendum: LegalSection = {
  title: "Addendum: Latin America (LGPD / Regional)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to users in Latin America, with specific provisions for Brazilian residents under the LGPD. Where conflict exists, this addendum prevails.</div>

<h4>Brazilian Residents: LGPD Consent</h4>
<p>Under the LGPD, your consent must be free, informed, and unequivocal. By checking the consent checkbox, you confirm that you have read and understood the data processing purposes described in these Terms and our Privacy Policy. Your consent is specific to each identified purpose. You may revoke consent at any time, and revocation will be processed within 15 days.</p>

<h4>Data Subject Rights (LGPD)</h4>
<p>Brazilian residents have the right to: confirmation of processing, access, correction, anonymization/blocking/deletion of unnecessary data, portability, deletion of consent-based data, information on data sharing, information on consent consequences, and consent revocation. Requests will be processed within 15 days.</p>

<h4>Governing Law (Brazil Override)</h4>
<p>For users in Brazil, the Brazilian Consumer Defense Code (CDC) and the LGPD shall apply to the extent they provide greater protection. Disputes may be brought before Brazilian courts in accordance with applicable law. The arbitration clause in Section 12 does not limit your rights under Brazilian consumer protection law.</p>

<h4>Other LATAM Jurisdictions</h4>
<p>For users in Mexico, Argentina, Colombia, Chile, Peru, and other Latin American countries, the mandatory consumer protection laws of your country of residence shall apply to the extent they provide greater protection. Local data protection regulations are respected and you may exercise your rights by contacting support@joblet.ai.</p>`
};

const indiaUserAddendum: LegalSection = {
  title: "Addendum: India (DPDPA)",
  content: `<div class="bg-accent/50 p-4 rounded-lg mb-4 text-sm italic">This addendum applies to users in India and supplements the Terms above. Where conflict exists, this addendum prevails.</div>

<h4>DPDPA Consent Notice</h4>
<p>In accordance with the DPDPA, this serves as your Consent Notice. Before creating your account, you are informed that we collect the following digital personal data: your name, email, phone number, profile information, resume/CV, and work experience. This data is processed for the purpose of providing you with job matching services, managing your account, and facilitating recruiter-job seeker connections. You consent to this processing by checking the consent checkbox.</p>

<h4>Data Principal Rights</h4>
<p>Under the DPDPA, you have the right to: access your personal data and a summary of processing activities, request correction and erasure, file complaints with our Grievance Officer or the Data Protection Board of India, and nominate another person to exercise your rights. Contact our Grievance Officer at support@joblet.ai.</p>

<h4>Children's Data</h4>
<p>Users under 18 in India must obtain verifiable parental or guardian consent before using the Platform. We do not knowingly collect data from individuals under 18 in India without such consent.</p>

<h4>Governing Law (India Override)</h4>
<p>For users in India, the DPDPA and the Information Technology Act, 2000, along with applicable Indian consumer protection laws, shall apply to the extent they provide greater protection. Indian courts shall have jurisdiction for disputes arising from use of the Platform by Indian residents, in accordance with applicable Indian law.</p>`
};

export const userTerms: RegionDocument[] = [
  {
    regionId: "universal",
    regionLabel: ",
    subtitle: "Terms and Conditions for Job Seekers (All Regions)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeUserAddendum, usUserAddendum, latamUserAddendum, indiaUserAddendum],
  },
  {
    regionId: "europe",
    regionLabel: "🇪�e",
 le: "Terms and Conditions for Job Seekers (EEA/UK/Switzerland)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeUserAddendum],
  },
  {
    regionId: "us",
    regionLabel: "🇺🇸 United States",
    subtitle: "Terms and Conditions for Job Seekers (United States)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, usUserAddendum],
  },
  {
    regionId: "india",
    regionLabel: "🇮🇳 India",
    subtitle: "Terms and Conditions for Job Seekers (India)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, indiaUserAddendum],
  },
  {
    regionId: "latam",
    regionLabel: "🌎 Latin America",
    subtitle: "Terms and Conditions for Job Seekers (Latin America)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, latamUserAddendum],
  },
];
