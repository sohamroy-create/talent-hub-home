import { RegionDocument } from '../types/common';
import { baseSections } from './baseContent';
import { europeAddendum } from './privacyAddendum/europe';
import { usAddendum } from './privacyAddendum/us';
import { latamAddendum } from './privacyAddendum/latam';
import { indiaAddendum } from './privacyAddendum/india';

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
