import { RegionDocument } from '../types/common';
import { baseSections } from './baseContent';

const europeTermsAddendum = {
  title: 'Europe Addendum',
  content:
    'These additional terms apply to recruiters located in the European Economic Area, the United Kingdom, and Switzerland.',
};

const usTermsAddendum = {
  title: 'United States Addendum',
  content:
    'These additional terms apply to recruiters located in the United States.',
};

const latamTermsAddendum = {
  title: 'Latin America Addendum',
  content:
    'These additional terms apply to recruiters located in Latin America.',
};

const indiaTermsAddendum = {
  title: 'India Addendum',
  content:
    'These additional terms apply to recruiters located in India.',
};

export const termsConditions: RegionDocument[] = [
  {
    regionId: "universal",
    regionLabel: "Universal",
    subtitle: "Recruiter Terms and Conditions (All Regions)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeTermsAddendum, usTermsAddendum, latamTermsAddendum, indiaTermsAddendum],
  },
  {
    regionId: "europe",
    regionLabel: "Europe",
    subtitle: "Recruiter Terms and Conditions (EEA/UK/Switzerland)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeTermsAddendum],
  },
  {
    regionId: "us",
    regionLabel: "United States",
    subtitle: "Recruiter Terms and Conditions (United States)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, usTermsAddendum],
  },
  {
    regionId: "india",
    regionLabel: "India",
    subtitle: "Recruiter Terms and Conditions (India)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, indiaTermsAddendum],
  },
  {
    regionId: "latam",
    regionLabel: "Latin America",
    subtitle: "Recruiter Terms and Conditions (Latin America)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, latamTermsAddendum],
  },
];
