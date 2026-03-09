import {
  usUserAddendum,
  europeUserAddendum,
  latamUserAddendum,
  indiaUserAddendum,
} from './addendums/userAddendums';
import { baseSections } from './baseContent';
import { RegionDocument } from './types';

export const userTerms: RegionDocument[] = [
  {
    regionId: "universal",
    regionLabel: "Universal",
    subtitle: "Terms and Conditions for Job Seekers (All Regions)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeUserAddendum, usUserAddendum, latamUserAddendum, indiaUserAddendum],
  },
  {
    regionId: "europe",
    regionLabel: "Europe",
    subtitle: "Terms and Conditions for Job Seekers (EEA/UK/Switzerland)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, europeUserAddendum],
  },
  {
    regionId: "us",
    regionLabel: "United States",
    subtitle: "Terms and Conditions for Job Seekers (United States)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, usUserAddendum],
  },
  {
    regionId: "india",
    regionLabel: "India",
    subtitle: "Terms and Conditions for Job Seekers (India)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, indiaUserAddendum],
  },
  {
    regionId: "latam",
    regionLabel: "Latin America",
    subtitle: "Terms and Conditions for Job Seekers (Latin America)",
    effectiveDate: "March 6, 2026",
    sections: [...baseSections, latamUserAddendum],
  },
];
