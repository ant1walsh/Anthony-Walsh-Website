export interface InlineLink {
  text: string;
  url: string;
}

export interface TimelineEntry {
  date: string;
  description: string;
  company?: string;
  companyUrl?: string;
  role?: string;
  inlineLinks?: InlineLink[];
}

export const timeline: TimelineEntry[] = [
  {
    date: "03/2024",
    description: "Launched Demodoc to direct GTM strategy for AI infrastructure & applications",
  },
  {
    date: "04/2022",
    description: "Led Product Marketing for Data Infrastructure & Security",
    company: "Meta",
    companyUrl: "http://meta.com/",
    role: "Product Marketing Lead"
  },
  {
    date: "02/2020",
    description: "Managed Product Marketing for Business Intelligence",
    company: "SalesIntel",
    companyUrl: "https://www.salesintel.io/",
    role: "Senior Product Marketing Manager"
  },
  {
    date: "03/2019",
    description: "Grew from GTM Associate at Plug & Play Tech Center to GTM Strategy Manager at portfolio company, Arena",
    role: "GTM Associate → GTM Strategy Manager",
    inlineLinks: [
      { text: "Plug & Play Tech Center", url: "https://www.pnptc.com" },
      { text: "Arena", url: "https://www.arena.im" }
    ]
  },
  {
    date: "11/2017",
    description: "Scaled growth as Account-Based Marketing Specialist at Mintigo, which was acquired by Anaplan",
    role: "Account-Based Marketing Specialist"
  },
  {
    date: "05/2016",
    description: "Started as Product Marketing Specialist for Physical AI & Digital Healthcare at BioVirtua",
    role: "Product Marketing Specialist"
  }
];
