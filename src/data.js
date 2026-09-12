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
    degree: 'B.Tech, Computer Science Engineering',
    school: 'Aliah University',
    period: '2016 -- 2020',
    location: 'Kolkata, West Bengal',
  },
]

export const projects = [
  {
    name: 'Automated Job Application Platform',
    tags: ['Java', 'Spring Boot', 'Selenium', 'Spring AI'],
    body: 'A modular automation platform that applies to jobs on LinkedIn and Naukri using Selenium, replacing a monolithic handler with detector/extractor/resolver/submitter components. Integrated Google Gemini via Spring AI to auto-answer recruiter chatbot questions.',
    link: 'https://github.com/Farazulhaque',
  },
  {
    name: 'Support Ticketing Platform',
    tags: ['Spring Boot', 'React', 'AWS S3'],
    body: 'Full-stack ticketing platform built end-to-end for production use: assignment and status-history tracking, per-user visibility/RBAC scoping, unread-notification badges, and S3-backed file attachments.',
    link: null,
  },
  {
    name: 'This Portfolio',
    tags: ['React', 'Vite', 'GitHub Actions'],
    body: 'This site itself -- a React + Vite single-page app with multiple switchable layouts and themes, built and deployed automatically via a GitHub Actions workflow to GitHub Pages.',
    link: 'https://github.com/Farazulhaque/MyPortfolioWebsite',
  },
]

export const achievements = [
  { end: 9, suffix: '', label: 'High-Severity Security Findings Closed' },
  { end: 2, suffix: '', label: 'Full Adversarial Security Audits Led' },
  { end: 30, suffix: '', label: 'Job Applications Auto-Processed / Run' },
  { end: 5, suffix: '+', label: 'Cloud Services Integrated' },
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
