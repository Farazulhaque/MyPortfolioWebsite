import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <a className="nav-brand" href="#home">MFH</a>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" />
      <img
        className="hero-photo"
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Md Farazul Haque"
      />
      <span className="badge badge-status">Open to Work</span>
      <h1>Md Farazul Haque</h1>
      <p className="hero-tagline">Backend Engineer &middot; Java / Spring Boot</p>
      <p className="hero-sub">
        4.5+ years building production Spring Boot services, security-first engineering,
        and AI-powered automation.
      </p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#contact">Get in touch</a>
        <a className="btn btn-outline" href="https://github.com/Farazulhaque" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  )
}

function About() {
  const items = [
    {
      icon: '👨‍💻',
      title: 'Backend Software Engineer',
      body: 'At ARC Document Solutions with 4.5+ years of experience, owning production Spring Boot microservices end-to-end.',
    },
    {
      icon: '🔒',
      title: 'Security-first engineering',
      body: 'Closed 9 High-severity security findings (auth, CSRF, IDOR, SSRF) across two full adversarial codebase audits, and built a full-stack support ticketing platform (Spring Boot, React, AWS S3) now running in production.',
    },
    {
      icon: '☁️',
      title: 'Cloud & reliability',
      body: 'Shipped integrations across AWS (ECS, Lambda, SQS, S3) and Azure Blob Storage, and root-caused several live production incidents (Kubernetes, ClickHouse, SQL) end-to-end.',
    },
    {
      icon: '🌱',
      title: 'Currently building',
      body: 'An AI-powered job-application automation platform (Java, Spring Boot, Selenium, Spring AI + Google Gemini) that auto-applies to relevant roles and answers recruiter chatbot questions.',
    },
  ]
  return (
    <section id="about" className="section">
      <Reveal><h2 className="section-title">About Me</h2></Reveal>
      <div className="about-grid">
        {items.map((item) => (
          <Reveal key={item.title} className="card">
            <span className="card-icon">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const roles = [
    {
      title: 'Software Engineer',
      company: 'ARC Document Solutions',
      period: 'Jan 2025 -- Present',
      bullets: [
        'Closed 9 High-severity security findings across two adversarial codebase audits by moving auth into httpOnly/Secure cookies with double-submit CSRF and fixing IDOR/SSRF/XSS gaps.',
        'Built a support ticketing platform end-to-end using Spring Boot, React, and AWS S3, now running in production for real support tickets.',
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
  return (
    <section id="experience" className="section section-alt">
      <Reveal><h2 className="section-title">Experience</h2></Reveal>
      <div className="timeline">
        {roles.map((role, i) => (
          <Reveal key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{role.title}</h3>
              <p className="timeline-meta">{role.company} &middot; {role.period}</p>
              <ul>
                {role.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
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
      body: 'This site itself -- a React + Vite single-page app, built and deployed automatically via a GitHub Actions workflow to GitHub Pages.',
      link: 'https://github.com/Farazulhaque/MyPortfolioWebsite',
    },
  ]
  return (
    <section id="projects" className="section">
      <Reveal><h2 className="section-title">Projects</h2></Reveal>
      <div className="projects-grid">
        {projects.map((p) => (
          <Reveal key={p.name} className="card project-card">
            <h3>{p.name}</h3>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <p>{p.body}</p>
            {p.link && (
              <a className="card-link" href={p.link} target="_blank" rel="noreferrer">
                View on GitHub &rarr;
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    { title: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Spring Security', 'Spring AI', 'React', 'JavaScript'] },
    { title: 'Databases & Messaging', items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Apache Solr', 'RabbitMQ'] },
    { title: 'Cloud, DevOps & Security', items: ['AWS', 'Azure', 'Docker', 'Git', 'Linux', 'OWASP / CSRF / IDOR remediation'] },
  ]
  return (
    <section id="skills" className="section section-alt">
      <Reveal><h2 className="section-title">Tech Stack</h2></Reveal>
      <div className="skills-grid">
        {groups.map((g) => (
          <Reveal key={g.title} className="card">
            <h3>{g.title}</h3>
            <div className="tag-row">
              {g.items.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-farazul-haque-b42200127/' },
    { label: 'GitHub', href: 'https://github.com/Farazulhaque' },
    { label: 'Naukri', href: 'https://www.naukri.com/mnjuser/profile' },
    { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=917596885401&text=Hi%20there!%20I%20have%20a%20question%20:%29' },
    { label: 'Email', href: 'mailto:mdfarazhaq@gmail.com' },
  ]
  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-sub">Open to backend, full-stack, and AI-assisted tooling opportunities.</p>
        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Built by Md Farazul Haque &middot; {new Date().getFullYear()}</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
