import { useEffect, useRef, useState } from 'react'

const SECTIONS = ['about', 'experience', 'education', 'projects', 'achievements', 'contact']

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

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

function useActiveSection() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return active
}

function useCountUp(end, active, duration = 1400) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    let frame
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [active, end, duration])
  return value
}

function StatCard({ end, suffix, label, delay }) {
  const [ref, visible] = useReveal()
  const value = useCountUp(end, visible)
  return (
    <div
      ref={ref}
      className={`stat-card reveal ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      <div className="stat-number">{value}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

function Sidebar() {
  const active = useActiveSection()
  const [open, setOpen] = useState(false)

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img
          className="sidebar-photo"
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt="Md Farazul Haque"
        />
        <h1 className="sidebar-name">Md Farazul Haque</h1>
        <p className="sidebar-role">Backend Engineer</p>
        <span className="badge badge-status">Open to Work</span>
        <p className="sidebar-desc">
          4.5+ years building production Spring Boot services with a security-first mindset.
        </p>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`sidebar-nav ${open ? 'sidebar-nav-open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={active === l.id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            <span className="nav-indicator" />
            {l.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-social">
        <a href="https://github.com/Farazulhaque" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/md-farazul-haque-b42200127/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noreferrer">Naukri</a>
      </div>
    </aside>
  )
}

function About() {
  const items = [
    'Backend Software Engineer at ARC Document Solutions with 4.5+ years of experience, owning production Spring Boot microservices end-to-end.',
    'Security-first engineering -- closed 9 High-severity security findings (auth, CSRF, IDOR, SSRF) across two full adversarial codebase audits, and built a full-stack support ticketing platform (Spring Boot, React, AWS S3) now running in production.',
    'Cloud & reliability -- shipped integrations across AWS (ECS, Lambda, SQS, S3) and Azure Blob Storage, and root-caused several live production incidents end-to-end.',
    'Currently building an AI-powered job-application automation platform (Java, Spring Boot, Selenium, Spring AI + Google Gemini).',
  ]
  return (
    <section id="about" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">01.</span> About</h2></Reveal>
      <Reveal delay={100}>
        <div className="about-text">
          {items.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
      </Reveal>
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
  return (
    <section id="experience" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">02.</span> Experience</h2></Reveal>
      <div className="row-list">
        {roles.map((role, i) => (
          <Reveal key={i} delay={i * 100} className="timeline-row">
            <div className="row-period">{role.period}</div>
            <div className="row-body">
              <h3>{role.title} <span className="row-company">&middot; {role.company}</span></h3>
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

function Education() {
  return (
    <section id="education" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">03.</span> Education</h2></Reveal>
      <div className="row-list">
        <Reveal className="timeline-row">
          <div className="row-period">2016 -- 2020</div>
          <div className="row-body">
            <h3>B.Tech, Computer Science Engineering <span className="row-company">&middot; Aliah University</span></h3>
            <p className="row-plain">Kolkata, West Bengal</p>
          </div>
        </Reveal>
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
    <section id="projects" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">04.</span> Projects</h2></Reveal>
      <div className="row-list">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100} className="project-row">
            <div className="project-row-header">
              <h3>{p.name}</h3>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View &rarr;</a>
              )}
            </div>
            <div className="tag-row">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <p>{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Achievements() {
  const stats = [
    { end: 9, suffix: '', label: 'High-Severity Security Findings Closed' },
    { end: 2, suffix: '', label: 'Full Adversarial Security Audits Led' },
    { end: 30, suffix: '', label: 'Job Applications Auto-Processed / Run' },
    { end: 5, suffix: '+', label: 'Cloud Services Integrated' },
  ]
  return (
    <section id="achievements" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">05.</span> Achievements</h2></Reveal>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 120} />
        ))}
      </div>
    </section>
  )
}

function Skills() {
  const groups = [
    { title: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'Spring Security', 'Spring AI', 'React', 'JavaScript'] },
    { title: 'Databases & Messaging', items: ['MySQL', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Apache Solr', 'RabbitMQ'] },
    { title: 'Cloud, DevOps & Security', items: ['AWS', 'Azure', 'Docker', 'Git', 'Linux', 'OWASP remediation'] },
  ]
  return (
    <section id="skills" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">06.</span> Tech Stack</h2></Reveal>
      <div className="row-list">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 100} className="skills-row">
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
    <section id="contact" className="content-section">
      <Reveal><h2 className="section-heading"><span className="heading-num">07.</span> Let's Connect</h2></Reveal>
      <Reveal delay={100}>
        <p className="row-plain">Open to backend, full-stack, and AI-assisted tooling opportunities.</p>
        <div className="contact-links">
          {links.map((l) => (
            <a key={l.label} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
      <footer className="footer">Built by Md Farazul Haque &middot; {new Date().getFullYear()}</footer>
    </section>
  )
}

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
