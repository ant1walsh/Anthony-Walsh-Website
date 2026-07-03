export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  company: string;
  program: string;
  metric: string;
  scenario: string;
  challenge: string;
  objective: string;
  solution: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    slug: "go-to-market-strategy",
    title: "Go-to-Market Strategy",
    subtitle: "Planning product launches",
    company: "Meta",
    program: "Go-to-Market Strategy",
    metric: "+22% active usage",
    scenario: `As Product Marketing Lead at Meta, I managed a team that scaled the adoption of critical data infrastructure and security applications. I also led the development of standardized go-to-market strategies across the organization's product portfolio.`,
    challenge: `When I joined the Enterprise Infrastructure & Security department, there were no standard operating procedures for feature releases or product launches. New features were pushed to production without advance notice to cross-functional teams. Timelines and deliverables were unclear, and collaborators were often left guessing.

Technical documentation was outdated, incomplete, and disorganized. Promotion efforts were minimal — so much so that even our most avid users were unaware of the comprehensive product offering.`,
    objective: `I strived to define the scope of marketing activities tied to new product updates — determining whether they warranted informal feature releases or formal product launches. I created a checklist of tasks to be completed before, during, and after each release.`,
    solution: [
      `I developed two programs: a release management plan with 27 tasks to raise user awareness of new features, and a product launch strategy with 36 tasks to scale the growth of new products. Each was organized into four categories: launch preparation, product promotion, soft launch, and public announcement.`,
      `These programs featured action items sequenced chronologically, with definitions of done, functional ownership, priority, and effort predetermined and attributed to each task — entered into our project management dashboard.`,
      `The two programs would be selected based on the objectives set forth by a product team. Once designs were finalized, tasks would automatically be delegated to their respective owner.`
    ],
    impact: `The Data Operations team embraced my product launch strategy to debut data engineering solutions timely and effectively. Tasks were committed to biweekly sprints and completed promptly, enabling the team to generate demand, acquire thousands of new users, increase active usage by as much as 22%, optimize retention, and improve customer satisfaction at unprecedented pace.`
  },
  {
    slug: "audience-segmentation",
    title: "Audience Segmentation",
    subtitle: "Identifying target ICPs & personas",
    company: "Mintigo",
    program: "Audience Segmentation",
    metric: "+32% lead conversion",
    scenario: `I joined Mintigo in 2017 as the one-and-only Product Specialist to replace an outsourced appointment-setting vendor. I helped 5 Account Executives promote solutions that predicted corporate buying behavior.`,
    challenge: `The lack of alignment between ideal customer profiles and personas for inbound and outbound leads was evident from the beginning. Account Executives only targeted leads at the largest technology companies, yet the profile of inbound leads included sellers and marketers at mid-market commercial businesses. Few inbound leads met the minimum data threshold required for effective scoring.`,
    objective: `My goal was to establish a tiered approach to market segmentation, identifying the highest-value targets with the greatest likelihood of conversion. I aimed to grade accounts and prospects based on propensity to purchase, resemblance to current customers, and strength of purchase intent.`,
    solution: [
      `I leveraged Mintigo's predictive analytics and Bombora's buyer intent scores to create a matrix that objectively identified outbound targets and qualified inbound leads.`,
      `Accounts with high intent or predictive scores were Tier 1. Moderate scores were Tier 2. Low intent and predictive scores were Tier 3 and disqualified. We focused outbound prospecting on Tier 1 targets and qualified inbound leads classified as Tier 2.`
    ],
    impact: `This tiered segmentation model improved efficiency in lead targeting and qualification. I launched integrated marketing campaigns that increased organic lead conversion by 32%, supporting Account Executives in closing 12 new enterprise customers and generating $1.2 million in revenue.`
  },
  {
    slug: "competitive-analysis",
    title: "Competitive Analysis",
    subtitle: "Overtaking market share",
    company: "SalesIntel",
    program: "Competitive Analysis",
    metric: "9 features · +53% ACV",
    scenario: `SalesIntel operates in the competitive category of company and contact data vendors, of which there are hundreds. When I joined, SalesIntel held the fifth position in global market share, measured by total active users.`,
    challenge: `Several contenders held greater market share, while other entrants grew at alarming rates. Although many customers had previously used other alternatives, SalesIntel often lost competitive negotiations with large, more established industry leaders who claimed to produce superior products.`,
    objective: `My goal was to determine the strongest, most competitive vendors based on functionality and market share, in addition to adjacent and indirect competitors. I reviewed all relevant, publicly available information impacting the market and synthesized key insights to cross-functional teams.`,
    solution: [
      `Through win/loss interviews, we determined that customers evaluated our solutions against three dozen competitors. Our team focused on overtaking market share from the more popular vendors.`,
      `I identified the common denominators in features, built a feature comparison chart, and maintained a spreadsheet of quantifiable metrics indicating product quality, differentiation, pricing, and scalability. I demoed each solution in search of bugs, feature limitations, and poor UX.`,
      `I disseminated competitive intelligence via a dedicated Slack channel, monthly training sessions, battle cards for sales teams, and by making myself available to address prospects' questions.`
    ],
    impact: `Based on my findings, I proposed 9 novel features that many competitors did not offer. The cross-functional enablement program contributed to the acquisition of 8 customers in less than 3 months with contract values 53% higher than average.`
  },
  {
    slug: "positioning-and-messaging",
    title: "Positioning & Messaging",
    subtitle: "Defining value propositions",
    company: "SalesIntel",
    program: "Positioning & Messaging",
    metric: "4x faster messaging",
    scenario: `I joined SalesIntel as Senior Product Marketing Manager to launch a new data enrichment product that de-duplicates, updates, and appends contact data records for CRM and Marketing Automation platforms.`,
    challenge: `During early development, I recognized that each team member described the product inconsistently. The extent of its capabilities and limitations were unclear. The market was heavily commoditized with dozens of competing vendors.`,
    objective: `My goal was to establish a clear, concise positioning statement that distinguished SalesIntel's Data Enrichment product. I would craft messaging, gain consensus from cross-functional leaders, and conduct A/B tests to select the highest-converting messaging.`,
    solution: [
      `After reviewing competitive solutions, I noticed few could de-duplicate, update, and append records with human-verified contact information. I leveraged my framework to draft multiple positioning statements and value propositions.`,
      `I surveyed leaders of cross-functional teams to gain consensus, then conducted A/B tests by incorporating variations of the copy into landing pages, digital ads, and account-based marketing campaigns — comparing impressions, click-through rates, and lead conversion.`
    ],
    impact: `These efforts contributed to a successful launch for SalesIntel Enrichment. Within 3 months, the new tool attracted 8 customers with contract values 53% higher than average. I accelerated the process of proposing and validating messaging by a factor of 4 — from 3 months to 3 weeks.`
  },
  {
    slug: "technical-documentation",
    title: "Technical Documentation",
    subtitle: "Demonstrating product utilization",
    company: "Meta",
    program: "Technical Documentation",
    metric: "+22% active usage",
    scenario: `Before I joined Meta, the Enterprise Infrastructure and Security team did not prioritize publishing technical documentation for new products, nor did they regularly update it following redesigns and feature releases.`,
    challenge: `With outdated technical documentation, users were unable to utilize our products effectively. This led to repetitive questions, low customer satisfaction scores, and reduced retention rates.`,
    objective: `My goals included auditing existing technical documentation and publishing new user guides as necessary. I partnered with Technical Copywriters to identify product workflows and enumerate step-by-step instructions.`,
    solution: [
      `First, I audited dozens of existing guides, flagging outdated workflows and incomplete instructions. Then I collaborated with Technical Copywriters to produce user guides for 3 new products before their release date — including sequential workflow steps, a glossary of product terminology, and answers to frequently asked questions.`
    ],
    impact: `Improving documentation quality reduced support requests and accelerated user onboarding. User guides for new products garnered positive feedback, increasing customer satisfaction scores and active usage for at least one product by as much as 22%.`
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    subtitle: "Producing multimedia assets",
    company: "SalesIntel",
    program: "Content Creation",
    metric: "7-figure ARR",
    scenario: `After finalizing positioning and messaging for SalesIntel's Data Enrichment launch, I collaborated with counterparts across marketing, sales, account management, and customer success to execute strategic campaigns that increased demand.`,
    challenge: `Before joining, account-based marketing campaigns routinely underperformed industry benchmarks for impressions, viewership, lead generation, and conversion rates across the funnel.`,
    objective: `I strived to audit content for previously launched campaigns, then partner with marketing colleagues to develop copy and content that increased the volume of inbound and outbound leads.`,
    solution: [
      `I produced content in various formats to drive inbound leads: landing pages, case studies, blogs, promotional and tutorial videos on owned channels, plus sponsored digital ads, press releases, and eBooks through third-party channels.`,
      `I drafted a 4-touch outbound email sequence for thousands of leads across hundreds of target accounts, progressing from the consequences of unaddressed data quality challenges to the benefits of SalesIntel's new solution.`,
      `I collaborated with sales and account management to incorporate marketing assets into campaigns delivered to qualified prospects and existing customers.`
    ],
    impact: `Content optimized conversion for each stage of the funnel. Collectively, SalesIntel acquired dozens of customers, thousands of users, and 7-figures in annual recurring revenue within 6 months. By 2022, SalesIntel had exceeded the $10 million ARR milestone.`
  },
  {
    slug: "beta-testing",
    title: "Beta Testing",
    subtitle: "Understanding & improving UX",
    company: "Meta",
    program: "Beta Testing",
    metric: "9 features shipped",
    scenario: `I joined Meta as Product Marketing Lead to scale adoption of developer tools that optimized engineering efficiency. Our most widely used solution helped Data Engineers detect, troubleshoot, and remediate data pipeline failures.`,
    challenge: `Although thousands of Data Engineers actively used the product each month, analytics indicated a drastic decline in retention for our upstream analytics solution. User surveys and interviews consistently signaled frustration with the experience.`,
    objective: `My goal was to identify champions and disgruntled users, invite them to try new functionality, demonstrate features, collect feedback, and promote adoption while resolving bugs and implementing viable feature requests.`,
    solution: [
      `I identified approximately 100 beta users based on satisfaction reviews and product analytics — 40 for high usage and satisfaction, 30 nominated due to requests, and 30 who had provided constructive criticism. I hosted a group demonstration for 30 current and former users, fielding 9 requests from 3 user groups.`
    ],
    impact: `This beta program shaped our product roadmap and restored customer trust, converting detractors into power users. All nine feature requests were committed to sprints with high priority and implemented immediately, delivering record-high customer satisfaction scores.`
  },
  {
    slug: "pricing-and-packaging",
    title: "Pricing & Packaging",
    subtitle: "Optimizing value & satisfaction",
    company: "SalesIntel",
    program: "Pricing & Packaging",
    metric: "+53% ACV",
    scenario: `I joined SalesIntel to launch a new Data Enrichment solution ensuring CRM and Marketing Automation records are current, correct, and complete — verified by humans every 90 days to be at least 95% accurate.`,
    challenge: `The organization struggled to define a pricing model that could displace established competitors while providing additional value to existing customers and attracting new prospects.`,
    objective: `I aimed to propose pricing and packaging plans that provided attractive options compared to competing solutions, and determine whether to issue monthly or annual subscriptions and unlimited usage or credit-based fees.`,
    solution: [
      `I proposed a credit-based fee that effectively equated to $0.10 per verified lead with a 50,000 credit minimum — comparable to competitors but with greater value. This pay-as-you-go model let users realize value through continuous usage while applying the highest standard for data accuracy, displacing an industry leader priced five to six times the average rate.`
    ],
    impact: `This pricing and packaging plan contributed to the acquisition of 8 customers in less than 3 months with contract values 53% higher than average — winning over price-sensitive buyers while positioning SalesIntel as a premium-yet-accessible alternative.`
  },
  {
    slug: "sales-enablement",
    title: "Sales Enablement",
    subtitle: "Guiding sales success",
    company: "SalesIntel",
    program: "Sales Enablement",
    metric: "$10M ARR milestone",
    scenario: `When I joined SalesIntel, our team included more than 100 BDRs, Account Executives, Account Managers, Marketers, and Customer Success Managers focused on revenue-generating activities. Many were early-career or new to the team.`,
    challenge: `Revenue teams had struggled to meet quotas. New team members had limited awareness of competitors and new products. Those with more tenure struggled to overcome objections or competitive negotiations.`,
    objective: `My goal was to host enablement workshops for the field team, showcasing product functionality and competitive differentiators while demonstrating how to overcome objections and competition.`,
    solution: [
      `I organized four online sales enablement workshops — two to prepare for product launches and two devoted to competitive intelligence.`,
      `During launch workshops, I conducted product demos, presented the value proposition, answered FAQs, and shared marketing collateral, instructing teams on when to use each asset in the customer journey.`,
      `During competitive workshops, I compared our solution with alternatives, identified differentiators, highlighted competitors' weaknesses, and instructed sales teams on defending against objections.`
    ],
    impact: `These workshops enabled the organization to acquire dozens of customer accounts, thousands of users, and 7-figures in annual recurring revenue within 6 months. By 2022, SalesIntel had exceeded the $10 million ARR milestone.`
  },
  {
    slug: "partner-marketing",
    title: "Partner Marketing",
    subtitle: "Expanding through channels",
    company: "Mintigo",
    program: "Partner Marketing",
    metric: "New revenue channel",
    scenario: `In late 2018, Mintigo partnered with Marketo to integrate the former's predictive lead-scoring API into the latter's marketing automation platform, promoting the tool as a standalone solution for mid-market corporate marketing teams.`,
    challenge: `Before the partnership, many small and mid-market companies did not meet our qualification criteria because they lacked sufficient budget or lead volume for precise predictive insights, and rarely expressed demand for premium features.`,
    objective: `As Mintigo's one-and-only Product Specialist, I aimed to capture interest and generate demand from this previously underserved market, introducing interested corporate marketers to their local account executives.`,
    solution: [
      `I co-developed solution briefs published on our webpage and distributed across Marketo's owned media. I delivered omnichannel campaigns by phone, email, and social media to hundreds of prospects that matched target personas within previously disqualified accounts and lookalike audiences.`
    ],
    impact: `I developed relationships with a fast-growing cybersecurity provider that converted from MQL to SQL to closed-won. This program opened a new revenue channel, re-engaged disqualified accounts, and positioned both vendors for acquisitions by Anaplan and Adobe, respectively.`
  },
  {
    slug: "product-launch",
    title: "Product Launch",
    subtitle: "Going live with general availability",
    company: "SalesIntel",
    program: "Product Launch",
    metric: "+53% ACV in 90 days",
    scenario: `When I joined SalesIntel, the company was preparing to launch its new Data Enrichment product using human-verified contact data with at least 95% accuracy.`,
    challenge: `At the time, SalesIntel lacked a formalized go-to-market process for new product releases — no standard operating procedures, defined deliverables, or estimated timelines, making cross-functional coordination difficult.`,
    objective: `My goal was to lead a timely and successful launch that increased average contract values by at least 20%, by defining a product launch plan, aligning key stakeholders, and executing coordinated campaigns.`,
    solution: [
      `I produced content to drive inbound leads: a product landing page, FAQs, instruction guides, promotional and tutorial videos on owned channels, plus digital ads, social posts, and press releases through third-party channels.`,
      `Influenced by my positioning framework, I incorporated messaging into outbound email sequences sent to thousands of leads at hundreds of target accounts, and collaborated with sales and account management teams.`
    ],
    impact: `Within 90 days of production, the new product attracted 8 customers and increased average contract values by 53%, vastly exceeding our benchmark. Today, the solution has been adopted by the Kansas City Royals to expand corporate sponsorships and box-office sales.`
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    subtitle: "Developing & engaging champions",
    company: "Meta",
    program: "Community Engagement",
    metric: "500+ event attendees",
    scenario: `I initially joined Meta as Product Marketing Lead to raise awareness and adoption of solutions provided by the Data Operations team. At the time, Data Engineers were largely unaware of our products and services.`,
    challenge: `Those who adopted Data Operations tooling were highly susceptible to attrition because supporting technical documentation was incomplete, outdated, and incomprehensible. Many customers weren't aware of the full potential of our solutions.`,
    objective: `My goal was to promote products and services to hundreds of Data Engineers at large-scale events, and host demonstrations from individual user groups to collect and follow up on actionable feedback.`,
    solution: [
      `I hosted monthly demonstrations of new products and quarterly informational sessions advocating for our portfolio. I invited satisfied, disgruntled, churned, and power users to critique our solutions through live focus groups and in-app surveys. Dozens of data engineers participated monthly, and as many as 500 attended every quarter.`
    ],
    impact: `These events raised awareness among data engineering audiences and served as a channel for actionable insights. Upon implementing new products and features, active usage increased by as much as 22% and we earned record-setting customer satisfaction ratings.`
  }
];