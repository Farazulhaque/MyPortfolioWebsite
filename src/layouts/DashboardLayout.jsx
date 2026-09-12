import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import { useCountUp, useReveal } from '../hooks'
import { profile, about, experience, education, projects, achievements, skills, contact, social } from '../data'

function TypingText({ lines }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = lines[lineIndex % lines.length]
    const speed = deleting ? 30 : 45
    const pause = deleting ? 300 : 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
      return
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, lineIndex, lines])

  return (
    <p className="dash-typing">
      {text}
      <span className="dash-cursor">|</span>
    </p>
  )
}

function StatCard({ end, suffix, label, delay }) {
  const [ref, visible] = useReveal()
  const value = useCountUp(end, visible)
  return (
    <div ref={ref} className={`dash-stat reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}>
      <div className="dash-stat-number">{value}{suffix}</div>
      <div className="dash-stat-label">{label}</div>
    </div>
  )
}

export default function DashboardLayout() {
  return (
    <div className="dash">
      <header className="dash-hero">
        <div className="dash-hero-glow" />
        <img className="dash-photo" src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} />
        <span className="badge badge-status">{profile.status}</span>
        <h1 className="dash-name">{profile.name}</h1>
        <p className="dash-role">{profile.role} &middot; {profile.tagline}</p>
        <TypingText lines={profile.typing} />
        <div className="dash-social">
          {social.map((s) => (
            <a key={s.label} className="btn btn-outline" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </header>

      <section className="dash-section">
        <Reveal><h2 className="dash-title">About Me</h2></Reveal>
        <div className="dash-grid-2">
          {about.map((t, i) => (
            <Reveal key={i} delay={i * 80} className="dash-card">
              <p>{t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dash-section dash-section-alt">
        <Reveal><h2 className="dash-title">Experience</h2></Reveal>
        <div className="dash-timeline">
          {experience.map((role, i) => (
            <Reveal key={i} delay={i * 100} className="dash-timeline-item">
              <div className="dash-timeline-dot" />
              <div>
                <h3>{role.title}</h3>
                <p className="dash-meta">{role.company} &middot; {role.period}</p>
                <ul>{role.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            </Reveal>
          ))}
          {education.map((e, i) => (
            <Reveal key={`edu-${i}`} className="dash-timeline-item">
              <div className="dash-timeline-dot" />
              <div>
                <h3>{e.degree}</h3>
                <p className="dash-meta">{e.school} &middot; {e.period}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dash-section">
        <Reveal><h2 className="dash-title">Projects</h2></Reveal>
        <div className="dash-grid-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="dash-card dash-project">
              <h3>{p.name}</h3>
              <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <p>{p.body}</p>
              {p.link && <a className="card-link" href={p.link} target="_blank" rel="noreferrer">View on GitHub &rarr;</a>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dash-section dash-section-alt">
        <Reveal><h2 className="dash-title">Achievements</h2></Reveal>
        <div className="dash-stats-grid">
          {achievements.map((s, i) => <StatCard key={s.label} {...s} delay={i * 120} />)}
        </div>
      </section>

      <section className="dash-section">
        <Reveal><h2 className="dash-title">Tech Stack</h2></Reveal>
        <div className="dash-grid-3">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} className="dash-card">
              <h3>{g.title}</h3>
              <div className="tag-row">{g.items.map((s) => <span key={s} className="tag">{s}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="dash-section dash-contact">
        <Reveal>
          <h2 className="dash-title">Let's Connect</h2>
          <div className="contact-links">
            {contact.map((l) => <a key={l.label} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
        </Reveal>
        <footer className="footer">Built by {profile.name} &middot; {new Date().getFullYear()}</footer>
      </section>
    </div>
  )
}
