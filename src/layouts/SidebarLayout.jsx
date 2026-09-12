import { useState } from 'react'
import Reveal from '../Reveal'
import { useActiveSection, useCountUp, useReveal } from '../hooks'
import { profile, about, experience, education, projects, achievements, skills, contact, social } from '../data'

const SECTION_IDS = ['about', 'experience', 'education', 'projects', 'achievements', 'skills', 'contact']

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
  const active = useActiveSection(SECTION_IDS)
  const [open, setOpen] = useState(false)

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <img className="sidebar-photo" src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} />
        <h1 className="sidebar-name">{profile.name}</h1>
        <p className="sidebar-role">{profile.role}</p>
        <span className="badge badge-status">{profile.status}</span>
        <p className="sidebar-desc">{profile.summary}</p>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <nav className={`sidebar-nav ${open ? 'sidebar-nav-open' : ''}`}>
        {SECTION_IDS.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
            <span className="nav-indicator" />
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      <div className="sidebar-social">
        {social.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
        ))}
      </div>
    </aside>
  )
}

export default function SidebarLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <section id="about" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">01.</span> About</h2></Reveal>
          <Reveal delay={100}>
            <div className="about-text">
              {about.map((t, i) => <p key={i}>{t}</p>)}
            </div>
          </Reveal>
        </section>

        <section id="experience" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">02.</span> Experience</h2></Reveal>
          <div className="row-list">
            {experience.map((role, i) => (
              <Reveal key={i} delay={i * 100} className="timeline-row">
                <div className="row-period">{role.period}</div>
                <div className="row-body">
                  <h3>{role.title} <span className="row-company">&middot; {role.company}</span></h3>
                  <ul>{role.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">03.</span> Education</h2></Reveal>
          <div className="row-list">
            {education.map((e, i) => (
              <Reveal key={i} className="timeline-row">
                <div className="row-period">{e.period}</div>
                <div className="row-body">
                  <h3>{e.degree} <span className="row-company">&middot; {e.school}</span></h3>
                  <p className="row-plain">{e.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">04.</span> Projects</h2></Reveal>
          <div className="row-list">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 100} className="project-row">
                <div className="project-row-header">
                  <h3>{p.name}</h3>
                  {p.link && <a className="project-link" href={p.link} target="_blank" rel="noreferrer">View &rarr;</a>}
                </div>
                <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <p>{p.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="achievements" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">05.</span> Achievements</h2></Reveal>
          <div className="stats-grid">
            {achievements.map((s, i) => <StatCard key={s.label} {...s} delay={i * 120} />)}
          </div>
        </section>

        <section id="skills" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">06.</span> Tech Stack</h2></Reveal>
          <div className="row-list">
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 100} className="skills-row">
                <h3>{g.title}</h3>
                <div className="tag-row">{g.items.map((s) => <span key={s} className="tag">{s}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section">
          <Reveal><h2 className="section-heading"><span className="heading-num">07.</span> Let's Connect</h2></Reveal>
          <Reveal delay={100}>
            <p className="row-plain">Open to backend, full-stack, and AI-assisted tooling opportunities.</p>
            <div className="contact-links">
              {contact.map((l) => <a key={l.label} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
            </div>
          </Reveal>
          <footer className="footer">Built by {profile.name} &middot; {new Date().getFullYear()}</footer>
        </section>
      </main>
    </div>
  )
}
