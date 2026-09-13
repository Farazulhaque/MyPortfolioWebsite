export const profile = {
  name: 'Md Farazul Haque',
  role: 'Backend Engineer',
  tagline: 'Java / Spring Boot',
  status: 'Open to Work',
  summary:
    '4.5+ years building production Spring Boot services with a security-first mindset.',
  typing: [
    '4.5+ years building production Spring Boot services',
    'Closed 9 High-severity security findings',
    'Building an AI-powered job-application platform',
  ],
}

export const about = [
  'Backend Software Engineer at ARC Document Solutions with 4.5+ years of experience, owning production Spring Boot microservices end-to-end.',
  'Security-first engineering -- closed 9 High-severity security findings (auth, CSRF, IDOR, SSRF) across two full adversarial codebase audits, and built a full-stack support ticketing platform (Spring Boot, React, AWS S3) now running in production.',
  'Cloud & reliability -- shipped integrations across AWS (ECS, Lambda, SQS, S3) and Azure Blob Storage, and root-caused several live production incidents end-to-end.',
  'Currently building an AI-powered job-application automation platform (Java, Spring Boot, Selenium, Spring AI + Google Gemini).',
]

export const experience = [
  {
    title: 'Software Engineer',
    company: 'ARC Document Solutions',
    period: 'Jan 2025 -- Present',
    bullets: [
      'Closed 9 High-severity security findings across two adversarial codebase audits by moving auth into httpOnly/Secure cookies with double-submit CSRF and fixing IDOR/SSRF/XSS gaps.',
      'Built a support ticketing platform end-to-end using Spring Boot, React, and AWS S3, now running in production.',
      'Migrated a client delivery pipeline onto Azure Blob Storage using Azure AD auth and staged block-upload for 5GB+ files.',
      'Root-caused and fixed live production incidents including a stuck Kubernetes pod from an unbounded ClickHouse JDBC timeout.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'ARC Document Solutions',
    period: 'May 2022 -- Dec 2024',
    bullets: [
      'Developed backend services using Core Java and Spring Boot, maintaining high-availability production systems.',
      'Replaced hardcoded branching logic with a Strategy design pattern for dynamic tool routing.',
      'Built a Redis-first data access layer using the cache-aside pattern, cutting database load significantly.',
      'Tuned Java internals, multithreading, and SQL queries while extending search via Elasticsearch and Solr.',
    ],
  },
]

export const education = [
  {
    degree: 'M.Tech, Software Engineering',
    school: 'Babasaheb Bhimrao Ambedkar University',
    period: '2020 -- 2022',
    location: 'Lucknow, Uttar Pradesh',
  },
  {
    degree: 'B.Tech, Computer Science Engineering',
    school: 'Aliah University',
    period: '2016 -- 2020',
    location: 'Kolkata, West Bengal',
  },
]

export const projects = [
  {
    name: 'Production Security Hardening',
    tags: ['Spring Security', 'CSRF', 'SSRF', 'OWASP'],
    body: 'Closed 9 High-severity findings across two adversarial audits -- session hijacking, CSRF, IDOR, and a WAF-bypass SSRF gap -- verified live end-to-end rather than just in theory.',
    problem: 'Two independent adversarial security audits surfaced 9 High-severity findings: JWTs stored in localStorage and stealable via any XSS for up to 8 hours, CSRF gaps, IDOR access-control holes, and an SSRF path where the app mangled "://" in URL fields to slip past the perimeter WAF, then un-mangled it server-side -- meaning the WAF inspected nothing else in those requests either.',
    approach: 'Moved auth into an httpOnly/Secure/SameSite cookie (unreadable by page scripts) with double-submit CSRF protection across both frontend and backend. Since the WAF itself couldn’t be patched from this repo, added app-side compensating controls -- rejecting control characters, oversized input, and non-http/https schemes -- across all 6 affected endpoints.',
    outcome: 'All 9 High-severity findings closed and verified live through real cross-origin browser flows (not just curl): login/logout/session-validation confirmed working, document.cookie confirmed never exposing the auth token, and each hardened endpoint returning a clean 400 instead of a generic 500 against real attack payloads.',
    link: null,
  },
  {
    name: 'Automated Job Application Platform',
    tags: ['Java', 'Spring Boot', 'Selenium', 'Spring AI'],
    body: 'A modular automation platform that applies to jobs on LinkedIn and Naukri using Selenium, replacing a monolithic handler with detector/extractor/resolver/submitter components. Integrated Google Gemini via Spring AI to auto-answer recruiter chatbot questions.',
    problem: 'Manually applying to jobs across LinkedIn and Naukri is slow and repetitive, and a single monolithic apply-handler was brittle against every site’s slightly different form flow and recruiter chatbot questions.',
    approach: 'Rebuilt the apply flow around modular detector/extractor/resolver/submitter components instead of one handler, added dedup logic to avoid re-applying, and integrated Google Gemini via Spring AI to auto-answer recruiter chatbot questions in real time.',
    outcome: '30+ job applications auto-processed and running end-to-end across both platforms; the resilience and dedup fixes are verified live rather than just in local testing.',
    link: 'https://github.com/Farazulhaque',
  },
  {
    name: 'Support Ticketing Platform',
    tags: ['Spring Boot', 'React', 'AWS S3'],
    body: 'Full-stack ticketing platform built end-to-end for production use: assignment and status-history tracking, per-user visibility/RBAC scoping, unread-notification badges, and S3-backed file attachments.',
    problem: 'No existing internal tool to track, assign, and resolve support tickets with proper per-user visibility, assignment history, and file attachments -- teams were coordinating over email and chat.',
    approach: 'Built end-to-end on Spring Boot + React: assignment and status-history tracking, per-user visibility/RBAC scoping, unread-notification badges, and S3-backed attachments -- including fixing an intermittent upload failure (switching to buffered byte uploads for AWS SDK v2’s signer) and a presigned-URL region-mismatch bug via cross-region S3 client resolution.',
    outcome: 'Running in production and in active daily use for ticket assignment, tracking, and resolution; both attachment bugs verified live end-to-end against the real S3 bucket.',
    link: null,
  },
  {
    name: 'This Portfolio',
    tags: ['React', 'Vite', 'GitHub Actions'],
    body: 'This site itself -- a React + Vite single-page app with multiple switchable layouts and themes, built and deployed automatically via a GitHub Actions workflow to GitHub Pages.',
    problem: 'Needed a portfolio that actually reflects real production work instead of a generic template, and that could keep evolving without a rebuild each time.',
    approach: 'Built as a React + Vite single-page app with a shared data layer and multiple independently-designed, switchable layouts (Sidebar, Dashboard, Terminal, Observability, Blueprint) and themes, deployed automatically via a GitHub Actions workflow to GitHub Pages.',
    outcome: 'Live and iterating in place -- every layout, theme, and content change ships through the same CI pipeline with no manual deploy step.',
    link: 'https://github.com/Farazulhaque/MyPortfolioWebsite',
  },
]

export const achievements = [
  { end: 9, suffix: '', label: 'High-Severity Security Findings Closed' },
  { end: 2, suffix: '', label: 'Full Adversarial Security Audits Led' },
  { end: 30, suffix: '', label: 'Job Applications Auto-Processed / Run' },
  { end: 5, suffix: '+', label: 'Cloud Services Integrated' },
  { end: 6, suffix: '', label: 'Endpoints Hardened Against SSRF/WAF Bypass' },
  { end: 5, suffix: 'GB+', label: 'Max File Size Supported (Staged Uploads)' },
]

export const now = [
  'Iterating on the Automated Job Application Platform -- improving recruiter-chatbot answer accuracy and apply-flow resilience.',
  'Owning production Spring Boot services end-to-end at ARC Document Solutions, with a continued security-first focus after closing 9 High-severity findings this year.',
  'Deepening AWS/Azure integration patterns (S3, Blob Storage, staged uploads) from real production incidents and fixes.',
]

export const skills = [
  {
    title: 'Languages & Frameworks',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Spring AI', 'React', 'JavaScript'],
  },
  {
    title: 'Databases & Messaging',
    items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Apache Solr', 'RabbitMQ'],
  },
  {
    title: 'Cloud, DevOps & Security',
    items: ['AWS', 'Azure', 'Docker', 'Git', 'Linux', 'OWASP remediation'],
  },
]

export const social = [
  { label: 'GitHub', href: 'https://github.com/Farazulhaque' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-farazul-haque-b42200127/' },
  { label: 'Naukri', href: 'https://www.naukri.com/mnjuser/profile' },
]

export const contact = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-farazul-haque-b42200127/' },
  { label: 'GitHub', href: 'https://github.com/Farazulhaque' },
  { label: 'Naukri', href: 'https://www.naukri.com/mnjuser/profile' },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=917596885401&text=Hi%20there!%20I%20have%20a%20question%20:%29',
  },
  { label: 'Email', href: 'mailto:mdfarazhaq@gmail.com' },
]
