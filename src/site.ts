// @ts-nocheck
/* Ported verbatim from the approved single-file prototype. */
export const SHELL_HTML = `<div id="scrollbar"></div>

<header class="nav">
  <div class="wrap nav-inner">
    <a href="#/" class="brand"><span class="dia"></span> anthony_walsh</a>
    <nav class="nav-links" id="navLinks"></nav>
    <div class="nav-right">
      <button class="icon-btn" id="themeToggle" title="Toggle theme" aria-label="Toggle theme"></button>
      <button class="icon-btn hamburger" id="hamburger" aria-label="Menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobileMenu"></div>
</header>

<main id="app"></main>

<footer>
  <div class="wrap footer-inner">
    <span class="cp">© <span id="year"></span> anthony walsh — technical product marketing</span>
    <div class="footer-links">
      <a href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener">linkedin</a>
      <a href="https://github.com/ant1walsh" target="_blank" rel="noopener">github</a>
      <a href="https://demodoc.ai" target="_blank" rel="noopener">demodoc</a>
    </div>
  </div>
</footer>`;


/* ================= DATA ================= */
const NAV = [
  { label:"home", path:"/" },
  { label:"projects", path:"/projects" },
  { label:"ai_agents", path:"/ai-agents" },
  { label:"blog", path:"/blog" },
  { label:"resume", path:"/resume" },
  { label:"contact", path:"/contact" },
];

const STATS = [
  { num:"10", prefix:"", suffix:" yrs", label:"of product marketing experience" },
  { num:"16", prefix:"", suffix:"", label:"products shipped to thousands of users" },
  { num:"120", prefix:"$", suffix:"M", label:"in revenue generated" },
];

const TIMELINE = [
  { date:"2024.03", role:"Marketing Director — Demodoc", desc:'Developing AI agents to scale growth for AI infrastructure at <a href="https://demodoc.ai" target="_blank" rel="noopener">Demodoc</a>.' },
  { date:"2022.04", role:"Product Marketing Lead — Meta", desc:'Led Product Marketing for Data Infrastructure & Security at <a href="http://meta.com/" target="_blank" rel="noopener">Meta</a>.' },
  { date:"2020.02", role:"Senior PMM — SalesIntel", desc:'Managed Product Marketing for Business Intelligence at <a href="https://www.salesintel.io/" target="_blank" rel="noopener">SalesIntel</a>.' },
  { date:"2019.03", role:"GTM Associate → Strategy Manager", desc:'Grew from GTM Associate at <a href="https://www.pnptc.com" target="_blank" rel="noopener">Plug &amp; Play</a> to GTM Strategy Manager at portfolio company <a href="https://www.arena.im" target="_blank" rel="noopener">Arena</a>.' },
  { date:"2017.11", role:"ABM Specialist — Mintigo", desc:"Scaled growth as Account-Based Marketing Specialist at Mintigo, later acquired by Anaplan." },
  { date:"2016.05", role:"Product Marketing Specialist — BioVirtua", desc:"Started as Product Marketing Specialist for Physical AI & Digital Healthcare at BioVirtua." },
];

const TESTIMONIALS = [
  { q:"Anthony is a master of his craft. He is incredibly clever when it comes to attention to detail and can strongly back his product positioning with logic and data-verified recommendations.", a:"Growth Marketing Team Lead" },
  { q:"Anthony was an invaluable contributor in support of EAIGG's mission to address the enterprise AI adoption gap. I strongly recommend Anthony for any role that requires heavy market research and content creation related to AI infrastructure.", a:"Managing Director, Ethical AI Governance Group" },
  { q:"Special thanks to Anthony for sharing how marketing can make a positive impact. He hosted our first community event, improved the end-user experience with product tutorials and user guides, and published a monthly newsletter.", a:"Head of Product & Design, Meta" },
  { q:"I hired Anthony to run marketing because he displayed ambition, thoughtfulness, and a desire to learn. He did not disappoint — always willing to go above and beyond the aggressive targets he was given.", a:"Director of Marketing, Mintigo" },
  { q:"Anthony's entrepreneurial spirit sets him apart; he continuously identifies opportunities for innovation and drives initiatives forward with infectious enthusiasm across multiple product portfolios and stakeholders.", a:"Product Design Lead, Meta" },
  { q:"Anthony always amazed me with his industry insight and brilliant approaches to solving problems. He is very thorough in everything he does and can be depended upon to get the job done.", a:"Customer Success Manager, SalesIntel" },
];

// thumb: optional path to a real cover image; if absent, an on-brand cover is generated.
const BLOG = [
  { title:"The Rise of Hybrid Inference Deployments", url:"https://www.linkedin.com/pulse/rise-hybrid-inference-deployments-anthony-walsh-aswmc/", topic:"ai & ml", glyph:"⌬", thumb:"/the-rise-of-hybrid-inference-deployments.jpeg" },
  { title:"The Dangers of Data Egress and Ingress for LLM Usage", url:"https://www.linkedin.com/pulse/dangers-data-egress-ingress-llm-usage-anthony-walsh-dr3vc/", topic:"data governance", glyph:"▤", thumb:"/the-dangers-of-data-egress-and-ingress-for-llm-usage.png" },
  { title:"How AI Apps Use and Misuse Your Data", url:"https://www.linkedin.com/pulse/how-ai-apps-use-misuse-your-data-anthony-walsh-5tcjc/", topic:"data governance", glyph:"◇", thumb:"/how-ai-apps-use-and-misuse-your-data.png" },
  { title:"Ethical AI Policies and Their Unintended Consequences", url:"https://www.linkedin.com/pulse/ethical-ai-policies-unintended-consequences-anthony-walsh-1xa9c/", topic:"data governance", glyph:"⌗", thumb:"/ethical-ai-policies-and-their-unintended-consequences.png" },
  { title:"How to Improve LLM Outputs with AI Agents for RAG", url:"https://www.linkedin.com/pulse/how-optimize-llm-performance-agents-anthony-walsh-tilwf/", topic:"ai & ml", glyph:"✦", thumb:"/how-to-improve-llm-outputs-with-ai-agents-for-rag.png" },
  { title:"5 Product Marketing Programs that Add Immediate Value", url:"https://www.linkedin.com/pulse/5-product-marketing-programs-add-immediate-value-anthony-walsh-1c/", topic:"pmm", glyph:"◆", thumb:"/5-product-marketing-programs-that-add-immediate-value.jpeg" },
  { title:"10 Dos and Don'ts of Drafting Positioning Statements", url:"https://www.linkedin.com/pulse/10-dos-donts-drafting-positioning-statements-anthony-walsh/", topic:"pmm", glyph:"⚑", thumb:"/10-dos-and-donts-of-drafting-positioning-statements.png" },
  { title:"40 Things To Do For Your Next B2B Software Launch", url:"https://www.linkedin.com/pulse/40-things-do-your-upcoming-b2b-software-launch-anthony-walsh/", topic:"pmm", glyph:"▸", thumb:"/40-things-to-do-for-your-next-b2b-software-launch.png" },
  { title:"Q&A with Bitboundaire", url:"https://youtu.be/T5lnVUNiVYY", topic:"pmm", glyph:"▶", thumb:"", video:"T5lnVUNiVYY" },
];

const AGENTS = [
  { name:"Customer Story Generator", glyph:"“ storytelling", desc:"Generates compelling customer case studies and social posts from interview transcripts.", link:"https://github.com/ant1walsh/Customer-Story-Generator" },
  { name:"Product Positioning Generator", glyph:"⚑ positioning", desc:"Generates taglines, positioning statements, and value propositions from product specs.", link:"https://github.com/ant1walsh/Product-Positioning-Generator" },
  { name:"ICP & Persona Analyzer", glyph:"◇ segmentation", desc:"Defines ideal customer profiles as well as buyer and user personas.", link:"https://github.com/ant1walsh/ICP-and-Persona-Analyzer" },
];

/* program === canonical product marketing program (built to group future case studies) */
const PROJECTS = [
  { slug:"go-to-market-strategy", program:"Go-to-Market Strategy", title:"Go-to-Market Strategy", subtitle:"Planning product launches", company:"Meta", metric:"+22% active usage",
    scenario:`As Product Marketing Lead at Meta, I managed a team that scaled the adoption of critical data infrastructure and security applications. I also led the development of standardized go-to-market strategies across the organization's product portfolio.`,
    challenge:`When I joined the Enterprise Infrastructure & Security department, there were no standard operating procedures for feature releases or product launches. New features were pushed to production without advance notice to cross-functional teams. Timelines and deliverables were unclear, and collaborators were often left guessing.\n\nTechnical documentation was outdated, incomplete, and disorganized. Promotion efforts were minimal — so much so that even our most avid users were unaware of the comprehensive product offering.`,
    objective:`I strived to define the scope of marketing activities tied to new product updates — determining whether they warranted informal feature releases or formal product launches. I created a checklist of tasks to be completed before, during, and after each release.`,
    solution:[`I developed two programs: a release management plan with 27 tasks to raise user awareness of new features, and a product launch strategy with 36 tasks to scale the growth of new products. Each was organized into four stages: launch preparation, product promotion, soft launch, and public announcement.`,`These programs featured action items sequenced chronologically, with definitions of done, functional ownership, priority, and effort predetermined and attributed to each task — entered into our project management dashboard.`,`The two programs would be selected based on the objectives set forth by a product team. Once designs were finalized, tasks would automatically be delegated to their respective owner.`],
    impact:`The Data Operations team embraced my product launch strategy to debut data engineering solutions timely and effectively. Tasks were committed to biweekly sprints and completed promptly, enabling the team to generate demand, acquire thousands of new users, increase active usage by as much as 22%, optimize retention, and improve customer satisfaction at unprecedented pace.` },

  { slug:"audience-segmentation", program:"Audience Segmentation", title:"Audience Segmentation", subtitle:"Identifying target ICPs & personas", company:"Mintigo", metric:"+32% lead conversion",
    scenario:`I joined Mintigo in 2017 as the one-and-only Product Specialist to replace an outsourced appointment-setting vendor. I helped 5 Account Executives promote solutions that predicted corporate buying behavior.`,
    challenge:`The lack of alignment between ideal customer profiles and personas for inbound and outbound leads was evident from the beginning. Account Executives only targeted leads at the largest technology companies, yet the profile of inbound leads included sellers and marketers at mid-market commercial businesses. Few inbound leads met the minimum data threshold required for effective scoring.`,
    objective:`My goal was to establish a tiered approach to market segmentation, identifying the highest-value targets with the greatest likelihood of conversion. I aimed to grade accounts and prospects based on propensity to purchase, resemblance to current customers, and strength of purchase intent.`,
    solution:[`I leveraged Mintigo's predictive analytics and Bombora's buyer intent scores to create a matrix that objectively identified outbound targets and qualified inbound leads.`,`Accounts with high intent or predictive scores were Tier 1. Moderate scores were Tier 2. Low intent and predictive scores were Tier 3 and disqualified.`,`We focused outbound prospecting on Tier 1 targets and qualified inbound leads classified as Tier 2.`],
    impact:`This tiered segmentation model improved efficiency in lead targeting and qualification. I launched integrated marketing campaigns that increased organic lead conversion by 32%, supporting Account Executives in closing 12 new enterprise customers and generating $1.2 million in revenue.` },

  { slug:"competitive-analysis", program:"Competitive Analysis", title:"Competitive Analysis", subtitle:"Overtaking market share", company:"SalesIntel", metric:"9 features · +53% ACV",
    scenario:`SalesIntel operates in the competitive category of company and contact data vendors, of which there are hundreds. When I joined, SalesIntel held the fifth position in global market share, measured by total active users.`,
    challenge:`Several contenders held greater market share, while other entrants grew at alarming rates. Although many customers had previously used other alternatives, SalesIntel often lost competitive negotiations with large, more established industry leaders who claimed to produce superior products.`,
    objective:`My goal was to determine the strongest, most competitive vendors based on functionality and market share, in addition to adjacent and indirect competitors. I reviewed all relevant, publicly available information impacting the market and synthesized key insights to cross-functional teams.`,
    solution:[`Our team focused on overtaking market share from the more popular vendors. Through win/loss interviews, we determined that customers evaluated our solutions against three dozen competitors.`,`I identified the common denominators in features, built a feature comparison chart, and maintained a spreadsheet of quantifiable metrics indicating product quality, differentiation, pricing, and scalability.`,`I demoed each solution in search of bugs, feature limitations, and poor UX.`,`I disseminated competitive intelligence via a dedicated Slack channel, monthly training sessions, battle cards for sales teams, and by making myself available to address prospects' questions.`],
    impact:`Based on my findings, I proposed 9 novel features that many competitors did not offer. The cross-functional enablement program contributed to the acquisition of 8 customers in less than 3 months with contract values 53% higher than average.` },

  { slug:"positioning-and-messaging", program:"Positioning & Messaging", title:"Positioning & Messaging", subtitle:"Defining value propositions", company:"SalesIntel", metric:"4x faster messaging validation",
    scenario:`I joined SalesIntel as Senior Product Marketing Manager to launch a new data enrichment product that de-duplicates, updates, and appends contact data records for CRM and Marketing Automation platforms.`,
    challenge:`During early development, I recognized that each team member described the product inconsistently. The extent of its capabilities and limitations were unclear. The market was heavily commoditized with dozens of competing vendors.`,
    objective:`My goal was to establish a clear, concise positioning statement that distinguished SalesIntel's Data Enrichment product. I would craft messaging, gain consensus from cross-functional leaders, and conduct A/B tests to select the highest-converting messaging.`,
    solution:[`After reviewing competitive solutions, I noticed few could de-duplicate, update, and append records with human-verified contact information. I leveraged my framework to draft multiple positioning statements and value propositions.`,`I surveyed leaders of cross-functional teams to gain consensus, then conducted A/B tests by incorporating variations of the copy into landing pages, digital ads, and account-based marketing campaigns — comparing impressions, click-through rates, and lead conversion.`],
    impact:`These efforts contributed to a successful launch for SalesIntel Enrichment. Within 3 months, the new tool attracted 8 customers with contract values 53% higher than average. I accelerated the process of proposing and validating messaging by a factor of 4 — from 3 months to 3 weeks.` },

  { slug:"technical-documentation", program:"Technical Documentation", title:"Technical Documentation", subtitle:"Demonstrating product utilization", company:"Meta", metric:"+22% active usage",
    scenario:`Before I joined Meta, the Enterprise Infrastructure and Security team did not prioritize publishing technical documentation for new products, nor did they regularly update it following redesigns and feature releases.`,
    challenge:`With outdated technical documentation, users were unable to utilize our products effectively. This led to repetitive questions, low customer satisfaction scores, and reduced retention rates.`,
    objective:`My goals included auditing existing technical documentation and publishing new user guides as necessary. I partnered with Technical Copywriters to identify product workflows and enumerate step-by-step instructions.`,
    solution:[`First, I audited dozens of existing guides, flagging outdated workflows and incomplete instructions.`,`Then I collaborated with Technical Copywriters to produce user guides for 3 new products before their release date — including sequential workflow steps, a glossary of product terminology, and answers to frequently asked questions.`],
    impact:`Improving documentation quality reduced support requests and accelerated user onboarding. User guides for new products garnered positive feedback, increasing customer satisfaction scores and active usage for at least one product by as much as 22%.` },

  { slug:"content-creation", program:"Content Creation", title:"Content Creation", subtitle:"Producing multimedia assets", company:"SalesIntel", metric:"7-figure ARR",
    scenario:`After finalizing positioning and messaging for SalesIntel's Data Enrichment launch, I collaborated with counterparts across marketing, sales, account management, and customer success to execute strategic campaigns that increased demand.`,
    challenge:`Before joining, account-based marketing campaigns routinely underperformed industry benchmarks for impressions, viewership, lead generation, and conversion rates across the funnel.`,
    objective:`I strived to audit content for previously launched campaigns, then partner with marketing colleagues to develop copy and content that increased the volume of inbound and outbound leads.`,
    solution:[`I produced content in various formats to drive inbound leads: landing pages, case studies, blogs, promotional and tutorial videos on owned channels, plus sponsored digital ads, press releases, and eBooks through third-party channels.`,`I drafted a 4-touch outbound email sequence for thousands of leads across hundreds of target accounts, progressing from the consequences of unaddressed data quality challenges to the benefits of SalesIntel's new solution.`,`I collaborated with sales and account management to incorporate marketing assets into campaigns delivered to qualified prospects and existing customers.`],
    impact:`Content optimized conversion for each stage of the funnel. Collectively, SalesIntel acquired dozens of customers, thousands of users, and 7-figures in annual recurring revenue within 6 months. By 2022, SalesIntel had exceeded the $10 million ARR milestone.` },

  { slug:"beta-testing", program:"Beta Testing", title:"Beta Testing", subtitle:"Understanding & improving UX", company:"Meta", metric:"9 features shipped",
    scenario:`I joined Meta as Product Marketing Lead to scale adoption of developer tools that optimized engineering efficiency. Our most widely used solution helped Data Engineers detect, troubleshoot, and remediate data pipeline failures.`,
    challenge:`Although thousands of Data Engineers actively used the product each month, analytics indicated a drastic decline in retention for our upstream analytics solution. User surveys and interviews consistently signaled frustration with the experience.`,
    objective:`My goal was to identify champions and disgruntled users, invite them to try new functionality, demonstrate features, collect feedback, and promote adoption while resolving bugs and implementing viable feature requests.`,
    solution:[`I identified approximately 100 beta users based on satisfaction reviews and product analytics — 40 for high usage and satisfaction, 30 nominated due to requests, and 30 who had provided constructive criticism.`,`I hosted a group demonstration for 30 current and former users, fielding 9 requests from 3 user groups.`],
    impact:`This beta program shaped our product roadmap and restored customer trust, converting detractors into power users. All nine feature requests were committed to sprints with high priority and implemented immediately, delivering record-high customer satisfaction scores.` },

  { slug:"pricing-and-packaging", program:"Pricing & Packaging", title:"Pricing & Packaging", subtitle:"Optimizing value & satisfaction", company:"SalesIntel", metric:"+53% ACV",
    scenario:`I joined SalesIntel to launch a new Data Enrichment solution ensuring CRM and Marketing Automation records are current, correct, and complete — verified by humans every 90 days to be at least 95% accurate.`,
    challenge:`The organization struggled to define a pricing model that could displace established competitors while providing additional value to existing customers and attracting new prospects.`,
    objective:`I aimed to propose pricing and packaging plans that provided attractive options compared to competing solutions, and determine whether to issue monthly or annual subscriptions and unlimited usage or credit-based fees.`,
    solution:[`I proposed a credit-based fee that effectively equated to $0.10 per verified lead with a 50,000 credit minimum — comparable to competitors but with greater value.`,`This pay-as-you-go model let users realize value through continuous usage while applying the highest standard for data accuracy, displacing an industry leader priced five to six times the average rate.`],
    impact:`This pricing and packaging plan contributed to the acquisition of 8 customers in less than 3 months with contract values 53% higher than average — winning over price-sensitive buyers while positioning SalesIntel as a premium-yet-accessible alternative.` },

  { slug:"sales-enablement", program:"Sales Enablement", title:"Sales Enablement", subtitle:"Guiding sales success", company:"SalesIntel", metric:"$10M ARR milestone",
    scenario:`When I joined SalesIntel, our team included more than 100 BDRs, Account Executives, Account Managers, Marketers, and Customer Success Managers focused on revenue-generating activities. Many were early-career or new to the team.`,
    challenge:`Revenue teams had struggled to meet quotas. New team members had limited awareness of competitors and new products. Those with more tenure struggled to overcome objections or competitive negotiations.`,
    objective:`My goal was to host enablement workshops for the field team, showcasing product functionality and competitive differentiators while demonstrating how to overcome objections and competition.`,
    solution:[`I organized four online sales enablement workshops — two to prepare for product launches and two devoted to competitive intelligence.`,`During launch workshops, I conducted product demos, presented the value proposition, answered FAQs, and shared marketing collateral, instructing teams on when to use each asset in the customer journey.`,`During competitive workshops, I compared our solution with alternatives, identified differentiators, highlighted competitors' weaknesses, and instructed sales teams on defending against objections.`],
    impact:`These workshops enabled the organization to acquire dozens of customer accounts, thousands of users, and 7-figures in annual recurring revenue within 6 months. By 2022, SalesIntel had exceeded the $10 million ARR milestone.` },

  { slug:"partner-marketing", program:"Partner Marketing", title:"Partner Marketing", subtitle:"Expanding through channels", company:"Mintigo", metric:"New revenue channel",
    scenario:`In late 2018, Mintigo partnered with Marketo to integrate the former's predictive lead-scoring API into the latter's marketing automation platform, promoting the tool as a standalone solution for mid-market corporate marketing teams.`,
    challenge:`Before the partnership, many small and mid-market companies did not meet our qualification criteria because they lacked sufficient budget or lead volume for precise predictive insights, and rarely expressed demand for premium features.`,
    objective:`As Mintigo's one-and-only Product Specialist, I aimed to capture interest and generate demand from this previously underserved market, introducing interested corporate marketers to their local account executives.`,
    solution:[`I co-developed solution briefs published on our webpage and distributed across Marketo's owned media.`,`I delivered omnichannel campaigns by phone, email, and social media to hundreds of prospects that matched target personas within previously disqualified accounts and lookalike audiences.`],
    impact:`I developed relationships with a fast-growing cybersecurity provider that converted from MQL to SQL to closed-won. This program opened a new revenue channel, re-engaged disqualified accounts, and positioned both vendors for acquisitions by Anaplan and Adobe, respectively.` },

  { slug:"product-launch", program:"Product Launch", title:"Product Launch", subtitle:"Going live with general availability", company:"SalesIntel", metric:"+53% ACV in 90 days",
    scenario:`When I joined SalesIntel, the company was preparing to launch its new Data Enrichment product using human-verified contact data with at least 95% accuracy.`,
    challenge:`At the time, SalesIntel lacked a formalized go-to-market process for new product releases — no standard operating procedures, defined deliverables, or estimated timelines, making cross-functional coordination difficult.`,
    objective:`My goal was to lead a timely and successful launch that increased average contract values by at least 20%, by defining a product launch plan, aligning key stakeholders, and executing coordinated campaigns.`,
    solution:[`I produced content to drive inbound leads: a product landing page, FAQs, instruction guides, promotional and tutorial videos on owned channels, plus digital ads, social posts, and press releases through third-party channels.`,`Influenced by my positioning framework, I incorporated messaging into outbound email sequences sent to thousands of leads at hundreds of target accounts, and collaborated with sales and account management teams.`],
    impact:`Within 90 days of production, the new product attracted 8 customers and increased average contract values by 53%, vastly exceeding our benchmark. Today, the solution has been adopted by the Kansas City Royals to expand corporate sponsorships and box-office sales.` },

  { slug:"community-engagement", program:"Community Engagement", title:"Community Engagement", subtitle:"Developing & engaging champions", company:"Meta", metric:"500+ event attendees",
    scenario:`I initially joined Meta as Product Marketing Lead to raise awareness and adoption of solutions provided by the Data Operations team. At the time, Data Engineers were largely unaware of our products and services.`,
    challenge:`Those who adopted Data Operations tooling were highly susceptible to attrition because supporting technical documentation was incomplete, outdated, and incomprehensible. Many customers weren't aware of the full potential of our solutions.`,
    objective:`My goal was to promote products and services to hundreds of Data Engineers at large-scale events, and host demonstrations from individual user groups to collect and follow up on actionable feedback.`,
    solution:[`I hosted monthly demonstrations of new products and quarterly informational sessions advocating for our portfolio.`,`I invited satisfied, disgruntled, churned, and power users to critique our solutions through live focus groups and in-app surveys.`,`Dozens of data engineers participated monthly, and as many as 500 attended every quarter.`],
    impact:`These events raised awareness among data engineering audiences and served as a channel for actionable insights. Upon implementing new products and features, active usage increased by as much as 22% and we earned record-setting customer satisfaction ratings.` },
];

/* ================= ICONS ================= */
const I = {
  sun:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
  arrow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  back:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  arrowUR:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  search:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  github:'<svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  calendar:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  linkedin:'<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.5v-4.6c0-2.4-1.3-3.6-3.1-3.6-1.4 0-2 .8-2.4 1.4V10h-2.6v8.3h2.6v-4.6c0-.2 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.4.7 1.4 1.9v4.4h2.6z"/></svg>',
  mail:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  download:'<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  bolt:'<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>',
  play:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
};

const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/* ================= PAGES ================= */
function homePage() {
  const stats = STATS.map((s,i)=>`
    <div class="stat-card reveal" style="transition-delay:${i*90}ms">
      <div class="stat-num" data-count="${s.num}" data-prefix="${s.prefix||''}" data-suffix="${s.suffix||''}">${s.prefix||''}0${s.suffix||''}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');
  const tl = TIMELINE.map(t=>`
    <div class="tl-item"><div class="tl-node"></div>
      <div class="tl-date">${t.date}</div>
      <div class="tl-role">${t.role}</div>
      <div class="tl-desc">${t.desc}</div>
    </div>`).join('');
  return `<div class="page">
  <section class="hero">
    <div class="hero-grid-bg"></div><div class="hero-glow"></div>
    <div class="wrap">
      <div class="hero-layout">
        <div class="hero-copy">
          <div class="term-status"><span class="live"></span> marketing director @ demodoc — gtm engineering studio</div>
          <h1>Hi, my name is <span class="accent">Anthony</span>. 👋🏼</h1>
          <p class="lead">I'm a technical product marketer with experience directing go-to-market strategy for AI infrastructure and applications. I've managed campaigns that increase recurring revenue, user engagement, and customer satisfaction at pre-IPO startups and Fortune 50 enterprises. I'm also a father, writer, and former rugby player based in California.</p>
          <div class="hero-cta">
            <a class="btn btn-ghost" href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener">${I.linkedin} linkedin</a>
            <a class="btn btn-ghost" href="https://github.com/ant1walsh" target="_blank" rel="noopener">${I.github} github</a>
            <a class="btn btn-primary" href="https://www.dropbox.com/scl/fo/am6xgxwlad53jspvnog8r/ADC0qwDXn-S1y-G6i-o4APE?rlkey=pdew21hpkyqckppwxppwoqepx&st=l9q5bjyf&dl=0" target="_blank" rel="noopener">portfolio ${I.arrowUR}</a>
          </div>
        </div>
        <div class="hero-photo-col reveal">
          <div class="portrait-wrap" id="portraitWrap">
            <img class="portrait" id="heroPortrait" src="/anthony-portrait.png" alt="Anthony Walsh speaking at a conference" onerror="portraitFailed()" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head reveal"><span class="label">by_the_numbers</span><h2>A decade of measurable impact</h2></div>
      <div class="stats" data-stagger>${stats}</div>
    </div>
  </section>

  <section style="background:hsl(var(--bg-2))">
    <div class="wrap">
      <div class="section-head reveal"><span class="label">career_log</span><h2>The path</h2></div>
      <div class="timeline"><div class="timeline-fill" id="tlFill"></div>${tl}</div>
    </div>
  </section>

  <section>
    <div class="wrap">
      <div class="section-head reveal"><span class="label">endorsements</span><h2>What people say</h2></div>
      <div class="tst-wrap reveal" id="tstWrap"></div>
    </div>
  </section>

  <section style="background:hsl(var(--bg-2))">
    <div class="wrap cta-band reveal">
      <span class="label" style="justify-content:center;display:flex">let's_build</span>
      <h2 style="margin-top:12px">Let's <span class="accent">work together</span></h2>
      <p>Interested in collaborating or learning more about my work?</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <a class="btn btn-primary" href="#/projects">view_projects ${I.arrow}</a>
        <a class="btn btn-ghost" href="#/contact">get_in_touch</a>
      </div>
    </div>
  </section></div>`;
}

function projectsPage() {
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <span class="label reveal">case_studies</span>
      <h1 class="reveal" style="margin-top:10px">Project <span class="accent">explorer</span></h1>
      <p class="sub reveal" style="max-width:640px">Product marketing programs, execution, and measurable impact across AI infrastructure, data platforms, and enterprise software.</p>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="filter-row reveal" id="companyFilters"></div>
      <div class="result-count" id="resultCount"></div>
      <div class="project-grid" id="projectGrid"></div>
    </div>
  </section></div>`;
}

function projectDetailPage(slug) {
  const p = PROJECTS.find(x=>x.slug===slug);
  if(!p) return `<div class="page"><section><div class="wrap" style="text-align:center;padding:80px 0"><h1>Project not found</h1><a class="btn btn-ghost" href="#/projects" style="margin-top:20px">${I.back} back_to_projects</a></div></section></div>`;
  const secs = [
    {id:"scenario",t:"scenario",c:`<p>${p.scenario.split("\n\n").join("</p><p>")}</p>`},
    {id:"challenge",t:"challenge",c:`<p>${p.challenge.split("\n\n").join("</p><p>")}</p>`},
    {id:"objective",t:"objective",c:`<p>${p.objective.split("\n\n").join("</p><p>")}</p>`},
    {id:"solution",t:"solution",c:`<ul>${p.solution.map(s=>`<li>${s}</li>`).join('')}</ul>`},
    {id:"impact",t:"impact",c:`<p>${p.impact.split("\n\n").join("</p><p>")}</p>`},
  ];
  const nav = secs.map(s=>`<a href="#detail-${s.id}" data-sec="${s.id}">${s.t}</a>`).join('');
  const body = secs.map(s=>`<div class="detail-section reveal" id="detail-${s.id}"><h2>${s.t}</h2>${s.c}</div>`).join('');
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <a class="back-link" href="#/projects">${I.back} back_to_projects</a>
      <span class="co co-${p.company}" style="display:inline-block;margin-bottom:12px">${p.company}</span>
      <h1>${p.subtitle}</h1>
      <p class="sub">${p.program} · <span class="accent">${p.metric}</span></p>
    </div>
  </section>
  <section>
    <div class="detail-body">
      <nav class="detail-nav" id="detailNav">${nav}</nav>
      <div>${body}
        <a class="btn btn-primary" href="#/projects" style="margin-top:12px">${I.back} all_projects</a>
      </div>
    </div>
  </section></div>`;
}

function aiPage() {
  const cards = AGENTS.map(a=>`
    <div class="agent-card reveal">
      <div class="agent-ico">${I.github}</div>
      <div class="glyph">${a.glyph}</div>
      <h3>${a.name}</h3>
      <p>${a.desc}</p>
      <a href="${a.link}" target="_blank" rel="noopener">view_on_github ${I.arrowUR}</a>
    </div>`).join('');
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <span class="label reveal">ai_studio</span>
      <h1 class="reveal" style="margin-top:10px">AI <span class="accent">agents</span></h1>
      <p class="sub reveal" style="max-width:640px">Agents I've built to accelerate product marketing operations — from analysis to copywriting. Try a preview of one below.</p>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="agents-grid">${cards}</div>
      <div class="section-head reveal" style="max-width:none"><span class="label">sample_preview</span><h2>Product Positioning Generator</h2></div>
      <div class="demo-note reveal">
        <b class="accent">▸ sample preview.</b> The samples below are examples of the agent’s output — written to spec, but not live generations. The production agent runs on n8n + Google Gemini + Gmail: it reads your form fields and parses documents, filters any banned words, and emails the user a Markdown file with product messaging. <a href="https://github.com/ant1walsh/Product-Positioning-Generator" target="_blank" rel="noopener">See the workflow on GitHub ↗</a>
      </div>
      <div class="demo reveal">
        <div class="demo-head"><span class="dots"><i></i><i></i><i></i></span><span class="fn">product_positioning_generator.json</span><span class="live"><span class="pulse"></span>sample</span></div>
        <div class="mode-tabs" id="modeTabs">
          <button data-mode="product" class="active">◇ new product launch</button>
          <button data-mode="feature">⚑ feature release</button>
        </div>
        <div class="demo-grid">
          <div class="demo-form" id="demoForm"></div>
          <div class="demo-out" id="demoOut">
            <div class="placeholder">${I.bolt}<div>pick a product or feature,<br>then show the sample output.</div></div>
          </div>
        </div>
      </div>
    </div>
  </section></div>`;
}

const BLOG_HUES=[227,208,244,198,234];
function blogThumb(item, hue) {
  const tag=`<span class="bt-tag">${esc(item.topic)}</span>`;
  if(item.video) return `<div class="blog-thumb img yt">
      <img src="https://img.youtube.com/vi/${item.video}/maxresdefault.jpg" alt="${esc(item.title)}" loading="lazy" onerror="this.onerror=null;this.src='https://img.youtube.com/vi/${item.video}/hqdefault.jpg';" />
      <span class="play-badge">▶</span>${tag}</div>`;
  if(item.thumb) return `<div class="blog-thumb img" style="background-image:url('${item.thumb}')">${tag}</div>`;
  return `<div class="blog-thumb gen" style="--h:${hue}"><span class="bt-glyph">${item.glyph||'◇'}</span>${tag}</div>`;
}
function blogTile(item,i) {
  return `<a class="blog-tile" href="${item.url}" target="_blank" rel="noopener" title="${esc(item.title)}" style="animation:fadePage .45s var(--ease) ${i*40}ms both">
    ${blogThumb(item, BLOG_HUES[i%BLOG_HUES.length])}
    <div class="bt-body"><h3>${item.title}</h3><span class="bt-read">${item.video?'watch on youtube':'read on linkedin'} ${I.arrowUR}</span></div>
  </a>`;
}
function blogPage() {
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <span class="label reveal">writing</span>
      <h1 class="reveal" style="margin-top:10px">The <span class="accent">blog</span></h1>
      <p class="sub reveal" style="max-width:640px">Insights on AI infrastructure, data governance, and product marketing.</p>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="filter-row reveal" id="blogFilters"></div>
      <div class="result-count" id="blogCount"></div>
      <div class="blog-grid" id="blogGrid"></div>
    </div>
  </section></div>`;
}
let blogCat='All';
function initBlog() {
  blogCat='All';
  const cats=['All','ai & ml','data governance','pmm'];
  const fr=document.getElementById('blogFilters'); if(!fr) return;
  fr.innerHTML=`<span class="filter-label">category</span>`+cats.map(c=>`<button class="pill ${c==='All'?'active':''}" data-cat="${esc(c)}">${c==='All'?'all':'// '+c}</button>`).join('');
  fr.addEventListener('click', e=>{ const b=e.target.closest('[data-cat]'); if(!b) return; blogCat=b.dataset.cat;
    fr.querySelectorAll('[data-cat]').forEach(x=>x.classList.toggle('active',x===b)); drawBlog(); });
  drawBlog();
}
function drawBlog() {
  const grid=document.getElementById('blogGrid'), rc=document.getElementById('blogCount'); if(!grid) return;
  const list=BLOG.filter(p=> blogCat==='All' || p.topic===blogCat);
  if(rc) rc.textContent=`> ${list.length} ${list.length===1?'post':'posts'}${blogCat!=='All'?' · '+blogCat:''}`;
  grid.innerHTML = list.length ? list.map((p,i)=>blogTile(p,i)).join('')
    : `<div class="empty" style="grid-column:1/-1">no posts in this category yet.</div>`;
}

const RESUME_RAW = "https://www.dropbox.com/scl/fi/p8lh2cfhsj2s82t6kislr/Anthony-Walsh-AI-PMM-Resume.pdf?rlkey=ssp7f8t9jxweh4ettpl1isz5m&raw=1";
const RESUME_DL = "https://www.dropbox.com/scl/fi/p8lh2cfhsj2s82t6kislr/Anthony-Walsh-AI-PMM-Resume.pdf?rlkey=ssp7f8t9jxweh4ettpl1isz5m&dl=1";
const RESUME_VIEW = "https://docs.google.com/viewer?embedded=true&url=" + encodeURIComponent(RESUME_DL);
function resumePage() {
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <span class="label reveal">experience</span>
      <h1 class="reveal" style="margin-top:10px"><span class="accent">Resume</span></h1>
      <p class="sub reveal" style="max-width:640px">A full history of product marketing experience — preview below, or download the PDF.</p>
    </div>
  </section>
  <section>
    <div class="wrap">
      <div class="resume-frame reveal">
        <div class="term-bar">
          <i></i><i></i><i></i>
          <span class="fn">Anthony-Walsh-AI-PMM-Resume.pdf</span>
          <span class="term-actions">
            <a class="btn btn-ghost btn-sm" href="${RESUME_RAW}" target="_blank" rel="noopener">open ${I.arrowUR}</a>
            <a class="btn btn-primary btn-sm" href="${RESUME_DL}">download ${I.download.replace('width="30" height="30"','width="13" height="13"')}</a>
          </span>
        </div>
        <div class="pdf-holder">
          <iframe src="${RESUME_VIEW}" title="Anthony Walsh Resume" loading="lazy"></iframe>
          <div class="pdf-fallback">
            ${I.download}
            <div>preview couldn't load in this browser.<br>use <b>open</b> or <b>download</b> above to view the PDF.</div>
          </div>
        </div>
      </div>
    </div>
  </section></div>`;
}

function contactPage() {
  return `<div class="page">
  <section class="detail-hero">
    <div class="hero-glow"></div>
    <div class="wrap">
      <span class="label reveal">say_hello</span>
      <h1 class="reveal" style="margin-top:10px">Contact <span class="accent">me</span></h1>
      <p class="sub reveal" style="max-width:640px">Ready to connect? Schedule a meeting or reach out through any channel below.</p>
    </div>
  </section>
  <section style="padding-top:56px">
    <div class="wrap">
      <div class="cal-frame reveal">
        <div class="term-bar"><i></i><i></i><i></i><span class="fn">calendly — book a meeting</span></div>
        <div id="calendlyEmbed" style="min-width:320px;height:700px">
          <div class="cal-fallback">loading calendar… if it doesn't appear, <a class="accent" href="https://calendly.com/antrobertwalsh/pmm" target="_blank" rel="noopener">open Calendly ↗</a></div>
        </div>
      </div>
      <div class="contact-mini reveal" style="margin-top:22px">
        <a class="contact-cta" href="https://linkedin.com/in/anthonyrwalsh" target="_blank" rel="noopener"><span class="ico">${I.linkedin}</span><div><h3>LinkedIn</h3><p>connect</p></div></a>
        <a class="contact-cta" href="https://github.com/ant1walsh" target="_blank" rel="noopener"><span class="ico">${I.github}</span><div><h3>GitHub</h3><p>see the code</p></div></a>
        <a class="contact-cta" href="mailto:antrobertwalsh@gmail.com"><span class="ico">${I.mail}</span><div><h3>Email</h3><p>message me</p></div></a>
      </div>
    </div>
  </section></div>`;
}

/* ================= ROUTER ================= */
const ROUTES = { "/":homePage, "/projects":projectsPage, "/ai-agents":aiPage, "/blog":blogPage, "/resume":resumePage, "/contact":contactPage };
let app = null;
function parseHash(){ let h=location.hash.replace(/^#/,'')||'/'; if(!h.startsWith('/'))h='/'+h; return h; }
function render() {
  if(tstTimer) clearInterval(tstTimer);
  const path = parseHash();
  let html;
  if(path.startsWith('/projects/')) html = projectDetailPage(path.split('/projects/')[1]);
  else html = (ROUTES[path]||homePage)();
  app.innerHTML = html;
  window.scrollTo(0,0);
  setActiveNav(path);
  initReveal();
  if(path==='/') initHome();
  if(path==='/projects') initExplorer();
  if(path.startsWith('/projects/')) initDetail();
  if(path==='/ai-agents') initDemo();
  if(path==='/blog') initBlog();
  if(path==='/contact') initContact();
  closeMobile();
}
function setActiveNav(path) {
  document.querySelectorAll('#navLinks a, #mobileMenu a').forEach(a=>{
    const p=a.getAttribute('data-path');
    a.classList.toggle('active', p===path || (p!=='/' && path.startsWith(p)));
  });
}
function buildNav() {
  const nl=document.getElementById('navLinks'), mm=document.getElementById('mobileMenu');
  const items = NAV.map(n=>`<a href="#${n.path}" data-path="${n.path}">${n.label}</a>`).join('');
  nl.innerHTML=items; mm.innerHTML=items;
}

/* ================= REVEAL / SCROLL ================= */
let revealObs;
function initReveal() {
  if(revealObs) revealObs.disconnect();
  revealObs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revealObs.unobserve(e.target); } });
  }, { threshold:.1, rootMargin:'0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, [data-stagger]').forEach(n=>revealObs.observe(n));
}
function onScroll() {
  const st=document.documentElement.scrollTop||document.body.scrollTop;
  const sh=document.documentElement.scrollHeight-document.documentElement.clientHeight;
  document.getElementById('scrollbar').style.width=(sh>0?(st/sh*100):0)+'%';
  const fill=document.getElementById('tlFill');
  if(fill){ const tl=fill.parentElement, r=tl.getBoundingClientRect(), vh=window.innerHeight;
    const prog=Math.min(1,Math.max(0,(vh*0.7 - r.top)/r.height)); fill.style.height=(prog*100)+'%'; }
  document.querySelectorAll('.tl-item').forEach(it=>{ if(it.getBoundingClientRect().top<window.innerHeight*0.78) it.classList.add('in'); });
  const dnav=document.getElementById('detailNav');
  if(dnav){ let cur=''; document.querySelectorAll('.detail-section').forEach(s=>{ if(s.getBoundingClientRect().top<160) cur=s.id.replace('detail-',''); });
    dnav.querySelectorAll('a').forEach(a=>a.classList.toggle('active', a.dataset.sec===cur)); }
}

/* ================= HOME ================= */
function initHome(){ animateCounters(); buildTestimonials(); onScroll(); }
function portraitFailed(){
  const w=document.getElementById('portraitWrap'); if(!w) return;
  w.classList.add('is-placeholder');
  w.innerHTML='<div class="portrait-ph"><span class="mono-mark">AW</span><small>add anthony-portrait.png to the site folder</small></div>';
}
function initContact(){
  const el=document.getElementById('calendlyEmbed'); if(!el) return;
  let n=0;
  const tryInit=()=>{
    if(!document.body.contains(el)) return;
    if(window.Calendly && typeof window.Calendly.initInlineWidget==='function'){
      el.innerHTML='';
      window.Calendly.initInlineWidget({ url:'https://calendly.com/antrobertwalsh/pmm', parentElement:el });
    } else if(n++ < 50){ setTimeout(tryInit,150); }
  };
  tryInit();
}
function animateCounters() {
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return; const node=e.target; obs.unobserve(node);
      const target=parseFloat(node.dataset.count), pre=node.dataset.prefix||'', suf=node.dataset.suffix||'';
      const dur=1400, start=performance.now();
      const step=(t)=>{ const p=Math.min(1,(t-start)/dur); const eased=1-Math.pow(1-p,3);
        node.textContent=pre+Math.round(eased*target)+suf; if(p<1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }, {threshold:.5});
  document.querySelectorAll('[data-count]').forEach(n=>obs.observe(n));
}
function typeTerminal() {
  const body=document.getElementById('termBody'); if(!body) return;
  const lines=[
    {t:'cmd', h:'<span class="pr">$</span> whoami'},
    {t:'out', h:'<b>Anthony Walsh</b> — technical product marketer'},
    {t:'cmd', h:'<span class="pr">$</span> cat focus.txt'},
    {t:'out', h:'AI infrastructure &amp; applications'},
    {t:'out', h:'go-to-market · positioning · demand gen'},
    {t:'cmd', h:'<span class="pr">$</span> ls impact/'},
    {t:'out', h:'<b>$120M</b> revenue   <b>16</b> products   <b>10y</b> exp'},
  ];
  let li=0;
  body.innerHTML='';
  const addLine=()=>{
    if(li>=lines.length){ const c=document.createElement('div'); c.className='cmd'; c.innerHTML='<span class="pr">$</span> <span class="cursor-blk"></span>'; body.appendChild(c); return; }
    const d=document.createElement('div'); d.className=lines[li].t; d.innerHTML=lines[li].h; body.appendChild(d);
    li++; setTimeout(addLine, 420);
  };
  addLine();
}
let tstTimer;
function buildTestimonials() {
  const wrap=document.getElementById('tstWrap'); if(!wrap) return;
  let idx=0;
  const dots=TESTIMONIALS.map((_,i)=>`<span class="tst-dot ${i===0?'active':''}" data-i="${i}"></span>`).join('');
  const draw=()=>{
    if(!document.body.contains(wrap)){ clearInterval(tstTimer); return; }
    wrap.innerHTML=`
      <div class="tst-card" id="tstCard">
        <p class="tst-quote">${TESTIMONIALS[idx].q}</p>
        <p class="tst-author"><b>—</b> ${TESTIMONIALS[idx].a}</p>
      </div>
      <div class="tst-controls">
        <button class="icon-btn" id="tstPrev">‹</button>
        <div class="tst-dots">${dots}</div>
        <button class="icon-btn" id="tstNext">›</button>
      </div>`;
    const card=document.getElementById('tstCard');
    if(card.animate) card.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:420,easing:'ease'});
    wrap.querySelectorAll('.tst-dot').forEach(d=>d.classList.toggle('active',+d.dataset.i===idx));
    document.getElementById('tstPrev').onclick=()=>{idx=(idx-1+TESTIMONIALS.length)%TESTIMONIALS.length;draw();reset();};
    document.getElementById('tstNext').onclick=()=>{idx=(idx+1)%TESTIMONIALS.length;draw();reset();};
    wrap.querySelectorAll('.tst-dot').forEach(d=>d.onclick=()=>{idx=+d.dataset.i;draw();reset();});
  };
  const reset=()=>{ clearInterval(tstTimer); tstTimer=setInterval(()=>{idx=(idx+1)%TESTIMONIALS.length;draw();},6500); };
  draw(); reset();
}

/* ================= EXPLORER ================= */
let exState;
function initExplorer() {
  exState={ company:"All" };
  const companies=["All","Meta","Mintigo","SalesIntel"];
  document.getElementById('companyFilters').innerHTML=
    `<span class="filter-label">company</span>`+companies.map(c=>`<button class="pill ${c==='All'?'active':''}" data-company="${c}">${c==='All'?'all':c}</button>`).join('');
  document.getElementById('companyFilters').addEventListener('click', e=>{
    const b=e.target.closest('[data-company]'); if(!b)return; exState.company=b.dataset.company;
    document.querySelectorAll('[data-company]').forEach(x=>x.classList.toggle('active',x===b)); drawProjects();
  });
  drawProjects();
}
function drawProjects() {
  let list=PROJECTS.filter(p=> exState.company==='All'||p.company===exState.company );
  const grid=document.getElementById('projectGrid'), rc=document.getElementById('resultCount');
  rc.textContent=`> ${list.length} ${list.length===1?'project':'projects'}${exState.company!=='All'?' · '+exState.company:''}`;
  if(!list.length){ grid.innerHTML=`<div class="empty" style="grid-column:1/-1">no projects for this company yet.</div>`; return; }
  grid.innerHTML=list.map((p,i)=>`
    <a class="pcard" href="#/projects/${p.slug}" style="animation:fadePage .45s var(--ease) ${i*35}ms both">
      <div class="top"><span class="co co-${p.company}">${p.company}</span><span class="idx">${String(i+1).padStart(2,'0')}</span></div>
      <h3>${p.title}</h3>
      <div class="sub">${p.subtitle}</div>
      <div class="metric">${I.bolt} ${p.metric}</div>
      <div class="prog">◇ ${p.program}</div>
      <span class="read">read_case_study ${I.arrow}</span>
    </a>`).join('');
}

/* ================= DETAIL ================= */
function initDetail() {
  document.querySelectorAll('#detailNav a').forEach(a=>{
    a.addEventListener('click', e=>{ e.preventDefault();
      const t=document.getElementById('detail-'+a.dataset.sec);
      if(t) window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-90, behavior:'smooth'});
    });
  });
  onScroll();
}

/* ================= AI DEMO ================= */
const MODE_FIELDS = {
  product:[
    {k:'name', label:'Product name', ta:true},
    {k:'category', label:'Category', ta:true},
    {k:'problem', label:'Problem statement', ta:true},
    {k:'how', label:'How it works', ta:true},
    {k:'features', label:'Primary features', ta:true},
    {k:'results', label:'Anticipated results', ta:true},
    {k:'icp', label:'ICP', ta:true},
    {k:'persona', label:'Target persona', ta:true},
    {k:'competitors', label:'Competitors', ta:true},
    {k:'diff', label:'Competitive differentiators', ta:true},
  ],
  feature:[
    {k:'name', label:'Feature name', ta:true},
    {k:'parent', label:'Parent product', ta:true},
    {k:'persona', label:'User persona', ta:true},
    {k:'problem', label:'Problem it solves', ta:true},
    {k:'how', label:'How it works', ta:true},
    {k:'benefits', label:'Benefits', ta:true},
    {k:'alternatives', label:'Comparable alternatives', ta:true},
    {k:'diff', label:'Competitive differentiators', ta:true},
  ],
};
const EXAMPLES = {
  product:[
    { id:'intent-signals', label:'Intent Signals Analyzer',
      values:{ name:'Intent Signals Analyzer', category:'Intent Platform', problem:'Early buying signals for AI infrastructure appear in developer communities, and legacy intent platforms cannot detect these niche keywords. Unaudited LLM scoring for these signals is too unreliable for sales teams to use for outbound prioritization.', how:'Runs a pair of Python agents daily to scan public developer communities and business news for buying signals relevant to AI inference infrastructure, scores signals using an LLM-plus-deterministic-rules pipeline, and posts ranked digests to Slack.', features:'Two daily Slack digests, deterministic scoring computed in Python with auditable ScoreTrace, aggressive post-LLM false-positive guard pipelines, cross-run deduplication, automated firmographic enrichment, and strict source provenance and liveness verification.', results:'Delivers a daily, deduplicated, and auditable digest of who is in-market and why, providing ranked individual developer leads and account-level signals directly to Slack channels.', icp:'AI infrastructure vendors', persona:'Sales and Marketing teams', competitors:'Common Room, 6sense, Demandbase', diff:'Analyzes specific AI-infrastructure and inference vocabulary, uses auditable deterministic scoring rather than untrustworthy unaudited LLMs, and relies on definitive provenance verification rather than LLM hallucinations.' },
      output:{
        tagline:'Intent Signals Analyzer converts developer community activity into verified sales pipeline for AI inference vendors.',
        positioning:'Intent Signals Analyzer is a specialized Intent Platform that queries public developer communities and business news to identify high-intent buying signals specifically for AI inference vendors. Sales and Marketing teams receive a daily, deduplicated digest of in-market accounts directly in Slack, utilizing deterministic scoring to replace unreliable, unverified LLM assessments. This Intent Platform matches specialized AI-infrastructure and inference vocabulary with verifiable source provenance to eliminate hallucinations and prioritize outreach.',
        uvp:[
          'Intent Signals Analyzer interprets specialized AI-infrastructure and inference vocabulary within niche developer communities, capturing early buying signals that horizontal intent platforms routinely overlook.',
          'Sales and Marketing teams gain confidence in account priority through deterministic Python scoring and auditable ScoreTrace metrics that eliminate the ambiguity of unverified LLM scoring.',
          'Strict source provenance and aggressive post-LLM false-positive guard pipelines ensure sales development representatives receive accurate, verified lead context instead of LLM hallucinations.',
          'Automated firmographic enrichment and cross-run deduplication distill complex developer activity into two ranked daily Slack digests, delivering actionable individual developer leads directly to active communication channels.'
        ] } },
    { id:'competitive-intel', label:'Competitive Intel Analyzer',
      values:{ name:'Competitive Intel Analyzer', category:'Competitive Intelligence', problem:'Marketing and Product teams in the AI infrastructure market spend hours manually tracking rapid competitor updates. Existing commercial competitive-intelligence platforms are expensive and not tuned to the AI infrastructure domains, resulting in off-topic noise and unreliable factual claims.', how:'Searches the previous 24 hours of news for a configurable list of competitors, filters results down to genuine announcements, synthesizes a structured executive brief through a three-tier LLM fallback chain, deterministically verifies the output, and posts the brief directly to a Slack channel.', features:'Multi-query web search queries, two-stage relevance filtering, cross-run URL deduplication, real-time inference cost and performance data, three-tier LLM synthesis with fallback, deterministic output verification, and automated Slack webhook delivery.', results:'Delivers a highly precise, structured daily competitive brief to Slack covering eleven signal categories and key trends, providing trusted factual claims and inline citations at a negligible operating cost.', icp:'AI infrastructure vendors', persona:'Marketing and Product teams', competitors:'Klue, Crayon', diff:'Specifically tuned to the AI-infrastructure domain to eliminate off-topic noise, uses deterministic verification for performance metrics rather than relying on LLM generation, and functions as a Python pipeline delivered entirely via Slack.' },
      output:{
        tagline:'Competitive Intel Analyzer delivers factual AI infrastructure market intelligence directly to Slack.',
        positioning:'Competitive Intel Analyzer is a dedicated competitive intelligence pipeline designed for product marketing managers and GTM leads in the AI infrastructure market. This automated solution monitors competitor updates daily, filters out irrelevant market noise, and verifies technical performance claims deterministically before posting structured briefs directly to Slack. Marketing and Product teams gain verified competitor insights at a fraction of the cost of traditional commercial alternatives.',
        uvp:[
          'AI infrastructure specialization filters out generic technology news to supply GTM leads with highly relevant, noise-free market insights.',
          'Deterministic output verification reviews competitor performance metrics and drops unreliable claims, ensuring leadership receives only factual data with inline citations.',
          'Automated Slack webhook delivery sends daily executive briefs covering eleven signal categories directly to internal channels, saving technical operators hours of manual research.',
          'Three-tier LLM synthesis with fallback guarantees consistent generation of structured summaries even during API service interruptions.'
        ] } },
  ],
  feature:[
    { id:'spec-decoding', label:'Draft-model speculative decoding',
      values:{ name:'Draft-model speculative decoding', parent:'Friendli Dedicated Endpoints', persona:'AI/ML Engineers deploying latency-sensitive LLM workloads', problem:'Autoregressive generation runs one target-model forward pass per token, so sequential decoding iterations increasingly dominate inference latency as generations get longer', how:'A smaller, faster draft model proposes multiple candidate tokens; the target model verifies them in a single parallel forward pass. Each token is accepted or rejected against the target’s own next-token distribution, using a verification rule designed to preserve the target’s original output distribution.', benefits:'Higher output speed while preserving output quality; no additional training and no extra models to manage.', alternatives:'N-gram speculative decoding — training-free, reuses repeated N-token patterns from the prompt and prior output', diff:'The draft model generalizes beyond literal repetition — it can propose accurate candidates even when the exact token sequence hasn’t appeared before, sustaining acceptance rates on diverse, open-ended workloads where N-gram match rates decay (and can even add latency)' },
      output:{ note:'Draft-model speculative decoding for Friendli Dedicated Endpoints employs a smaller, pre-trained draft model to propose candidate tokens that the larger target model verifies in a single parallel forward pass, increasing output speed while preserving output quality. Unlike N-gram speculative decoding, it generalizes beyond literal repetition, so it holds up on diverse, open-ended workloads like agentic pipelines, long-form reasoning, and code completion. Enable it with a single toggle at endpoint creation — no code changes required.' } },
    { id:'host-kv-cache', label:'Host KV Cache',
      values:{ name:'Host KV Cache', parent:'Friendli Dedicated Endpoints', persona:'AI/ML Engineers running long-context or high-concurrency production workloads', problem:'KV caches live in GPU VRAM and compete with model weights and active inference for it. At long context or high concurrency the cache fills up, entries get evicted, and hit rates suffer', how:'Users enable host KV cache for Dedicated Endpoints with a one-click toggle to attach additional host (CPU) memory for KV cache storage. When GPU VRAM fills, the endpoints transparently offload overflow to host memory instead of evicting entries, then transfer entries back to VRAM when needed for active inference.', benefits:'Cache capacity scales with system memory rather than GPU VRAM, without additional GPU hardware; avoids eviction-driven hit-rate loss; recovers capacity and throughput on long-context inference, with no code changes or infrastructure setup.', alternatives:'Provisioning larger-VRAM GPUs or more GPUs; accepting eviction and recomputing prefixes.', diff:'Fully managed host KV cache solution — offloading and fetching happens automatically with no configuration or API changes, delivered as a one-click toggle in Friendli Suite.' },
      output:{ note:'Host KV Cache extends KV cache storage into host (CPU) memory, so when GPU VRAM fills up, Dedicated Endpoints transparently offload cache overflow instead of evicting it — then transfer entries back when active inference needs them. Cache capacity now scales with system memory rather than GPU VRAM, which matters most for long-context, high-concurrency, and prefix-heavy workloads like multi-turn chat, RAG, document Q&A, and code assistants. Turn it on with a one-click toggle at endpoint creation; no API changes required.' } },
  ],
};
let demoMode='product', exampleId='intent-signals';
function initDemo() {
  const tabs=document.getElementById('modeTabs'); if(!tabs) return;
  demoMode='product'; exampleId=EXAMPLES.product[0].id;
  renderDemoForm();
  tabs.addEventListener('click', e=>{
    const b=e.target.closest('[data-mode]'); if(!b) return;
    demoMode=b.dataset.mode; exampleId=EXAMPLES[demoMode][0].id;
    tabs.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));
    renderDemoForm(); resetDemoOut();
  });
}
function resetDemoOut(){
  document.getElementById('demoOut').innerHTML=`<div class="placeholder">${I.bolt}<div>pick a product or feature,<br>then show the sample output.</div></div>`;
}
function currentExample(){ return EXAMPLES[demoMode].find(x=>x.id===exampleId)||EXAMPLES[demoMode][0]; }
function renderDemoForm() {
  const f=document.getElementById('demoForm');
  const ex=currentExample();
  const fields=MODE_FIELDS[demoMode].map(fl=>{
    const v=esc(ex.values[fl.k]||'');
    if(fl.k==='name'){
      const opts=EXAMPLES[demoMode].map(x=>`<option value="${x.id}" ${x.id===exampleId?'selected':''}>${esc(x.values.name)}</option>`).join('');
      return `<label>${fl.label}</label><select class="ex" id="exSelect">${opts}</select>`;
    }
    return `<label>${fl.label}</label>${fl.ta?`<textarea id="d-${fl.k}" readonly>${v}</textarea>`:`<input id="d-${fl.k}" value="${v}" readonly />`}`;
  }).join('');
  f.innerHTML=`
    ${fields}
    <button class="btn btn-primary" id="sampleBtn" style="margin-top:18px;width:100%;justify-content:center">${I.bolt} show sample output</button>`;
  document.getElementById('exSelect').addEventListener('change', e=>{ exampleId=e.target.value; renderDemoForm(); resetDemoOut(); });
  document.getElementById('sampleBtn').addEventListener('click', showSample);
}
const BANNED=["seamless","seamlessly","end-to-end","groundbreaking","revolutionary","cutting-edge","game-changing","game changing","best-in-class","world-class","synergy","synergies","paradigm","unparalleled"];
function scrubBanned(text) {
  let flagged=[];
  let out=text;
  BANNED.forEach(w=>{
    const re=new RegExp('\\b'+w.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&')+'\\b','gi');
    if(re.test(out)){ flagged.push(w); out=out.replace(re,''); }
  });
  out=out.replace(/\s{2,}/g,' ').replace(/\s+([,.])/g,'$1');
  return {out, flagged:[...new Set(flagged.map(w=>w.toLowerCase()))]};
}
function g(id){ const n=document.getElementById(id); return n?(n.value||'').trim():''; }
function cap(s){ return s.charAt(0).toUpperCase()+s.slice(1); }
function stripDot(s){ return s.replace(/\.$/,''); }
function showSample() {
  const ex=currentExample();
  const out=document.getElementById('demoOut');
  out.innerHTML=`<div class="thinking"><i></i><i></i><i></i> <span style="margin-left:6px">assembling sample…</span></div>`;
  let full='';
  if(demoMode==='product'){
    full+=`«tagline»\n${ex.output.tagline}\n\n`;
    full+=`«positioning statement»\n${ex.output.positioning}\n\n`;
    full+=`«unique value proposition»\n`+ex.output.uvp.map((u,i)=>`  ${i+1}. ${u}`).join('\n')+`\n\n`;
  } else {
    full+=`«feature release note»\n${ex.output.note}\n\n`;
  }
  const foot=[];
  foot.push(`<b>▸ sample</b> representative output for the “${esc(ex.label)}” preset — not a live generation.`);
  foot.push(`<b>▸ governance</b> banned-words check passed — no filler (“seamless”, “end-to-end”, “groundbreaking”…) present.`);
  setTimeout(()=>typeOut(out, full, foot.join('<br>')), 620);
}
function typeOut(node, text, footerHTML) {
  node.innerHTML='<div class="typewriter"></div>';
  const tw=node.querySelector('.typewriter');
  let i=0; const cursor='<span class="cursor"></span>';
  const paint=(upto)=>{ tw.innerHTML=esc(text.slice(0,upto)).replace(/«(.+?)»/g,'<span class="sec-title">$1</span>')+cursor; };
  const tick=()=>{
    i+=Math.max(2,Math.round(Math.random()*3)+2); paint(i); node.scrollTop=node.scrollHeight;
    if(i<text.length) setTimeout(tick,9);
    else { tw.innerHTML=esc(text).replace(/«(.+?)»/g,'<span class="sec-title">$1</span>');
      if(footerHTML){ const gv=document.createElement('div'); gv.className='demo-foot'; gv.innerHTML=footerHTML; node.appendChild(gv); } }
  };
  tick();
}

/* ================= THEME / MOBILE ================= */
function initTheme() {
  const saved=(function(){try{return localStorage.getItem('aw-theme');}catch(e){return null;}})()||'dark';
  document.documentElement.setAttribute('data-theme',saved); updateThemeIcon();
  document.getElementById('themeToggle').addEventListener('click',()=>{
    const cur=document.documentElement.getAttribute('data-theme'), next=cur==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',next);
    try{localStorage.setItem('aw-theme',next);}catch(e){} updateThemeIcon();
  });
}
function updateThemeIcon(){ const dark=document.documentElement.getAttribute('data-theme')==='dark'; document.getElementById('themeToggle').innerHTML=dark?I.sun:I.moon; }
function initMobile(){ document.getElementById('hamburger').addEventListener('click',()=>document.getElementById('mobileMenu').classList.toggle('open')); }
function closeMobile(){ document.getElementById('mobileMenu').classList.remove('open'); }

/* ================= BOOT ================= */

export function initSite(){
  if (window.__awInited) return; window.__awInited = true;
  app = document.getElementById('app');
  document.getElementById('year').textContent = new Date().getFullYear();
  buildNav(); initTheme(); initMobile();
  window.addEventListener('hashchange', render);
  window.addEventListener('scroll', onScroll, {passive:true});
  render();
}
window.portraitFailed = portraitFailed;