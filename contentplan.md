# Radical Intelligence Website Content Plan

This document contains all content and structure for the Radical Intelligence website.
Last updated: January 2025

---

## Brand

**Company Name:** Radical Intelligence
**Tagline:** The AI Transformation Company
**Primary Color:** #F06840 (Bright Orange)
**Email:** hello@radicalintelligence.com
**LinkedIn:** https://linkedin.com/company/radical-intelligence
**GitHub:** https://github.com/radical-intelligence

---

## Site Structure

```
/                           - Main landing page
/work                       - Case studies overview
/work/[slug]                - Individual case study pages
/perspectives               - ASCII art visualization
/perspectives/manifesto     - Full manifesto (planned)
```

---

## Navigation
*Component: `src/components/Header.tsx`*

- What We Do → /#framework
- Services → /#offerings
- RIOS → /#rios
- Philosophy → /#philosophy
- Work → /work
- Perspectives → /perspectives
- Contact (button) → Opens contact modal

---

## Hero Section
*Component: `src/components/Hero.tsx`*

**Pre-headline:**
THE AI TRANSFORMATION COMPANY

**Main Headline:**
Closing the gap between what AI can do and what you're doing with it.

**Sub-headline:**
Capability that compounds. Embedded across your people, processes and products.

**CTA Buttons:**
- "See how we work" → #framework
- "Our services" → #offerings

**Floating Card:**
- Label: "AI TRANSFORMATION"
- Content: "Sight → Capability → Sustenance"

**Hero Image:** `/images/hero.jpg`

---

## Framework Section
*Component: `src/components/Framework.tsx`*

**Section Label:** THE FRAMEWORK

**Headline:**
Three movements. Three domains.
One transformation.

**Description:**
AI transformation isn't a single project. It's a journey through three movements — and we guide you through each, across every dimension of your organisation.

**Framework Image:** `/images/framework visual.jpg`

### The 3x3 Grid

**Movements (Columns):**
| Movement | Description |
|----------|-------------|
| SIGHT | We help you see what should exist. |
| CAPABILITY | We build your ability to build. |
| SUSTENANCE | We stay with you as it evolves. |

**Domains (Rows):**
| Domain | Description |
|--------|-------------|
| PEOPLE | Your workforce, augmented. |
| PROCESS | Your operations, intelligent. |
| PRODUCT | Your systems, agentic. |

**Grid Content:**
| | Sight | Capability | Sustenance |
|---|-------|------------|------------|
| People | Role transformation mapping | AI fluency programs | Ongoing learning |
| Process | Workflow opportunity analysis | Operating model redesign | Continuous improvement |
| Product | Build vs buy decisions | Embedded engineering | Nurture retainers |

---

## Offerings Section
*Component: `src/components/Offerings.tsx`*

**Section Label:** HOW WE WORK

**Headline:**
Enter anywhere. We meet you where you are.

### Offering 1: Sight
**Tagline:** See what should exist.

**Description:**
In a world where everyone can build, clarity is the scarcest resource. We help you identify where AI creates real leverage — not everywhere, but in the right places.

**Deliverables:**
- AI Opportunity Map across People, Process, Product
- Prioritised transformation roadmap
- Build vs Buy analysis
- Risk and readiness assessment

**Format:** 2-4 week engagement. Workshop-led. Executive and operational stakeholders.

**Image:** `/images/sight.jpg`

### Offering 2: Capability
**Tagline:** Build your ability to build.

**Description:**
We don't build for you. We build with you — in a way that transfers the muscle. Your team finishes with working systems and the skills to evolve them.

**Deliverables:**
- Working AI systems
- Trained internal teams
- Documentation and playbooks
- Handover protocols

**Format:** Embedded sprints. Our Friendgineers working alongside your people. 6-16 weeks typical.

**Image:** `/images/capability.jpg`

### Offering 3: Sustenance
**Tagline:** Stay with you as it evolves.

**Description:**
AI systems need tending. Models improve. Workflows shift. Your competitors adapt. We stay close to keep your AI capability evolving and compounding over time.

**Deliverables:**
- Technical maintenance and iteration
- Process optimisation
- Capability refresh as AI advances
- Quarterly reviews to surface new opportunities

**Format:** Story points model. Draw down as needed. Quarterly Sight sessions feed new opportunities back into the loop.

**Image:** `/images/sustenance.jpg`

---

## RIOS Section
*Component: `src/components/RIOS.tsx`*

**Section Label:** OUR PLATFORM

**Headline:**
RIOS
The Radical Intelligence Operating System

**Description:**
A comprehensive AI transformation platform that guides organisations from initial assessment through to working systems that transform how you operate.

**Dashboard Image:** `/images/rios-image.png` (1794x908)

**Floating Card:** "In-depth reporting and actionable insights"

### Features
1. **AI Readiness Assessment** - Multi-dimensional assessment across Strategy, Data, Technology, Talent, Governance, and Culture.
2. **Use Case Library** - Comprehensive database of AI use cases categorized by industry, function, and technology type.
3. **Intelligent Recommendations** - AI-powered engine that matches use cases to your organisation's readiness and priorities.
4. **Transformation Roadmap** - Visual portfolio management to prioritize, sequence, and track your AI initiatives.

**CTA:** "Request a demo" + email link

---

## Philosophy Section
*Component: `src/components/Philosophy.tsx`*

**Section Label:** OUR PHILOSOPHY

**Headline:**
The antidote to transformation theatre.

**Paragraph 1:**
AI capability has outpaced our collective understanding of what's possible. Every organisation senses there's more they could be doing, but the gap between what AI can do and knowing where to apply it has never been wider.

**Paragraph 2:**
We're not strategists who hand over slide decks and walk away. We're builders who work alongside you — practical partners who write code, transfer skills, and stay until the systems are working and your teams can run them. The measure of our success is the real difference we make together.

**Team Image:** `/images/team.png` (926x836, max-w-sm)

### Principles (3 cards)

**1. Practice Together**
We don't build for you. We build with you. Progressive handover from hands-on to hands-off.

**2. Capability Transfer**
When we leave, you're more capable, not more dependent. That's the measure of success.

**3. Compounding Returns**
Every engagement makes your organisation more intelligent. The flywheel spins faster over time.

---

## Manifesto Section
*Component: `src/components/Manifesto.tsx`*

**Headline (Blockquote):**
Clarity is the new bottleneck.
AI capability is everywhere.
Knowing where to apply it is rare.

**Paragraph 1:**
Every organisation understands there's a stack of possibility in AI. The companies that are pulling ahead aren't the ones with the biggest AI budgets. They're the ones who've figured out which workflows actually matter, which roles should transform first, and which use cases compound into real advantage.

**Paragraph 2:**
Engineering capacity is no longer the constraint. The constraint is strategic clarity, which means understanding your business deeply enough to know where AI creates leverage versus theatre. That's the work we help you do.

**Closing Question (Box):**
What do you know so well that software has been waiting for you to encode it?

**CTA:** "Read the full manifesto" → /perspectives/manifesto

**Image:** `/images/manifesto.jpg`

---

## Footer
*Component: `src/components/Footer.tsx`*

**Logo:** `/RI-logo3.png` (200x50)

**Tagline:**
Capability that compounds. AI transformation across People, Process & Product.

**Navigation Links:**
- What We Do → /#framework
- How We Work → /#philosophy
- Work → /work
- Perspectives → /perspectives

**Social Links:**
- LinkedIn → https://linkedin.com/company/radical-intelligence
- GitHub → https://github.com/radical-intelligence

**Copyright:** © 2025 Radical Intelligence. All rights reserved.

---

## Work Page
*Component: `src/app/work/page.tsx`*

**Section Label:** OUR WORK

**Headline:**
AI transformation in practice.

**Description:**
Real systems. Real capability transfer. Real results across industries and organisations.

**Filter Tabs:** All | Sight | Capability | Sustenance

---

## Case Studies
*Component: `src/app/work/[slug]/page.tsx`*

### 1. REA Group
**Slug:** `rea-group`
**Year:** 2025
**Category:** Capability
**Title:** AI Agents for Sales Operations
**Description:** AI agents that deliver real-time customer insights and automate administrative tasks for sales teams.

**Challenge:**
Knowledge workers at REA Group spent excessive time navigating multiple dashboards and gathering customer insights. The organisation needed a streamlined, real-time solution to surface critical customer information and automate administrative tasks.

**Approach:**
1. Designed AI agents to integrate seamlessly with REA's internal systems
2. Built assistants that deliver real-time information and status updates
3. Developed capability to execute actions and simplify multi-step workflows
4. Created instant data retrieval for essential customer context
5. Implemented agents that enhance meeting readiness with rich customer insights

**Outcomes:**
- Reduced time spent on administrative tasks
- Improved self-service resolution rates
- Enhanced meeting preparedness with rich customer context
- Increased productivity for sales teams
- Sales professionals now concentrate on high-value activities rather than data gathering

---

### 2. The Squiz
**Slug:** `the-squiz`
**Year:** 2024
**Category:** Capability
**Title:** AI Content Studio
**Description:** A comprehensive AI content studio for story ideation, co-authoring, and editorial evaluation.

**Challenge:**
The Squiz needed to scale their content planning with greater efficiency while maintaining the sharp editorial judgment that sets them apart. As an independent news outlet serving time-poor, information-hungry women underserved by traditional media, they couldn't compromise on their distinctive voice.

**Approach:**
1. Built a comprehensive AI content studio with robust pipeline across ingestion, research, and data
2. Developed AI-assisted tools for story ideation and headline generation
3. Created talking points generation to support editorial workflows
4. Built custom models to evaluate tone, consistency, and accuracy against editorial standards
5. Integrated co-authoring capabilities while preserving editorial control

**Outcomes:**
- Enhanced editorial workflow efficiency and scalability
- Journalists freed to focus on higher-value editorial tasks
- Maintained editorial integrity throughout content operations
- Discovered new revenue and IP opportunities through system scalability
- Successfully harnessed AI to amplify editorial strengths and deliver impactful news coverage more efficiently

---

### 3. Reece Group
**Slug:** `reece-group`
**Year:** 2025
**Category:** Capability
**Title:** Customer Intelligence Platform
**Description:** LLM-powered platform aggregating customer data for personalised engagement and win-back campaigns.

**Challenge:**
Today's omnichannel marketing environment requires more than generic outreach — it needs deep understanding of customers' past behaviours, preferences, and interactions to personalise engagement. Reece's customer data was scattered across multiple platforms, making it challenging to develop actionable insights about disengaged customers.

**Approach:**
1. Developed an LLM-powered platform that aggregates data from multiple sources
2. Built capability to synthesise behavioral, transactional, and CRM insights
3. Created comprehensive customer profiles from disparate data
4. Enabled identification of disengagement patterns across customer base
5. Supported data-driven strategy development for marketing teams

**Outcomes:**
- Empowered marketing teams to engage lapsed customers with enhanced relevance
- Enabled more effective win-back campaigns with personalised messaging
- Improved conversion rates through targeted engagement
- Strengthened customer retention across channels
- Positioned for long-term business growth through better customer intelligence

---

### 4. MYOB
**Slug:** `myob`
**Year:** 2024
**Category:** Sight
**Title:** AI Strategy & Roadmap
**Description:** Strategic masterclasses and workshops producing a prioritised backlog of AI-driven initiatives.

**Challenge:**
MYOB, as a leading Australian small business software company, understood AI's potential impact but needed external perspective and expertise to advance their AI initiatives. They required support to explore AI's current state and industry-specific implications, moving from exploration to execution.

**Approach:**
1. Designed strategic masterclasses and workshops for key stakeholders
2. Explored AI's current state and industry-specific implications for small business software
3. Facilitated hands-on experimentation and ideation sessions
4. Generated AI-driven concepts through collaborative workshops
5. Refined and prioritised ideas into a strategic backlog

**Outcomes:**
- Cross-functional alignment achieved across teams
- Well-defined backlog of AI-driven initiatives created
- Enabled transition from exploration to execution
- Enhanced organisational confidence in testing and integrating AI solutions
- Positioned MYOB to leverage generative AI for innovation, efficiency, and competitive advantage

---

### 5. Northern Territory Government
**Slug:** `nt-government`
**Year:** 2023
**Category:** Sight
**Title:** Government AI Strategy
**Description:** Executive workshops, AI workflow design, and working prototypes for government AI adoption.

**Challenge:**
The NT Chief Minister's Office and Tourism NT needed to explore generative AI's potential and develop a strategic approach to AI adoption. Leadership teams required education on implementation opportunities while understanding the risks and practical applications specific to government contexts.

**Approach:**
1. Facilitated high-impact executive workshops to educate leadership on AI opportunities, risks, and practical applications
2. Mapped AI-powered processes to improve internal operations
3. Designed workflows to enhance service delivery
4. Developed working prototypes demonstrating AI potential in content generation
5. Created prototypes for personalised recommendations and automated decision support

**Outcomes:**
- Positioned NT agencies as leaders in government AI adoption
- Transitioned from theoretical discussions to tangible innovation
- Established foundation for AI-driven operational efficiencies
- Created new capabilities in content generation and recommendations
- Built internal confidence and capability for ongoing AI initiatives

---

### 6. Department for Education SA
**Slug:** `dfe-south-australia`
**Year:** 2023
**Category:** Capability
**Title:** AI Research Engine
**Description:** Automated qualitative analysis of school review reports using the Archer AI research engine.

**Challenge:**
The South Australian Department of Education faced inefficiencies in processing hundreds of external school review reports. Manual analysis of these documents was time-consuming and resource-intensive, limiting their ability to extract actionable insights and track patterns systematically across the education system.

**Approach:**
1. Implemented Archer, our AI enterprise research engine, to automate qualitative analysis
2. Scaled analysis across the entire report dataset
3. Identified thematic patterns across hundreds of documents
4. Extracted recurring insights for strategic planning
5. Enabled comparative analysis over time to track systemic changes

**Outcomes:**
- Significantly reduced time required for report analysis
- Decreased manual effort and resource allocation
- Processed large volumes of qualitative data without proportional cost increases
- Enabled more informed decision-making and clearer strategic focus
- Enhanced ability to identify and respond to systemic patterns across the education system

---

## Images

All images stored in `/public/images/`:

| File | Dimensions | Usage |
|------|------------|-------|
| `hero.jpg` | 1072x992 | Hero section |
| `framework visual.jpg` | 1072x992 | Framework section |
| `sight.jpg` | 1072x992 | Offerings - Sight card |
| `capability.jpg` | 1072x992 | Offerings - Capability card |
| `sustenance.jpg` | 1072x992 | Offerings - Sustenance card |
| `manifesto.jpg` | 1072x992 | Manifesto section |
| `rios-image.png` | 1794x908 | RIOS dashboard |
| `team.png` | 926x836 | Philosophy section |

**Logo:** `/public/RI-logo3.png`

---

## Design System

### Colors (defined in `globals.css`)

```css
--accent: #F06840;              /* Bright orange */
--accent-light: #F8805A;
--accent-dim: rgba(240, 104, 64, 0.1);
--background: #FAF9F6;          /* Off-white */
--background-secondary: #F5F4F1;
--background-tertiary: #EFEEEB;
--foreground: #1a1a1a;          /* Near-black */
--foreground-muted: #4a4a4a;
--foreground-subtle: #8a8a8a;
--border: #E8E7E4;
```

### Typography
- **Sans:** Inter
- **Mono:** JetBrains Mono

### Section Labels
All section labels use: `font-mono text-sm text-[var(--accent)] tracking-wider`

---

## Contact Modal

**Headline:**
Let's talk about what's possible.

**Subtext:**
Not sure where to start? Most organisations begin with a Sight engagement — a few weeks to map the landscape and identify where AI creates real leverage for you.

**Form Fields:**
- Name
- Email
- Company
- "What brings you here?" (dropdown: Sight engagement, Capability building, Nurture retainer, Just exploring, Other)
- Message (optional)

**Submit Button:** Start the conversation

**Alternative:** Or email us directly at hello@radicalintelligence.com

---

## Future Content Ideas

### Additional Pages (planned)
- /perspectives/manifesto - Full manifesto page
- /about - Full team page

### Blog/Thought Leadership Topics
- Agent Handoffs
- Digital Labour Protocols
- The New Enterprise OS
- Agentic Transformation in Enterprise
