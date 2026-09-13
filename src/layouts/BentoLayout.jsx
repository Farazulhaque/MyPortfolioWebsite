import Reveal from '../Reveal'
import { useCountUp, useReveal } from '../hooks'
import { profile, about, experience, education, projects, achievements, skills, contact, social } from '../data'

const ICONS = {
  'Languages & Frameworks': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 17l6-10 6 10M6.5 13h7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18.5" cy="6" r="2.2" />
    </svg>
  ),
  'Databases & Messaging': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" strokeLinecap="round" />
    </svg>
  ),
  'Cloud, DevOps & Security': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 18a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17.4 8.1 4 4 0 0 1 17 18H7z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

function BentoStat({ end, suffix, label, delay }) {
  const [ref, visible] = useReveal()
  const value = useCountUp(end, visible)
  return (
    <div ref={ref} className={`bento-stat reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}>
      <div className="bento-stat-number">{value}{suffix}</div>
      <div className="bento-stat-label">{label}</div>
    </div>
  )
}

export default function BentoLayout() {
  return (
    <div className="bento">
      <div className="bento-blob bento-blob-a" />
      <div className="bento-blob bento-blob-b" />
      <div className="bento-blob bento-blob-c" />
      <div className="bento-grain" />

      <header className="bento-hero">
        <div className="bento-hero-ring">
          <img className="bento-photo" src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} />
        </div>
        <span className="badge badge-status bento-status">{profile.status}</span>
        <h1 className="bento-name">{profile.name}</h1>
        <p className="bento-role">{profile.role} <span className="bento-dot">&bull;</span> {profile.tagline}</p>
        <p className="bento-summary">{profile.summary}</p>
        <div className="bento-social">
          {social.map((s) => (
            <a key={s.label} className="btn btn-outline" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </header>

      <main className="bento-grid">
        <Reveal className="bento-card bento-card-wide" delay={0}>
          <h2 className="bento-card-title"><span className="bento-icon-dot" />About</h2>
          <div className="bento-about-list">
            {about.map((t, i) => <p key={i}>{t}</p>)}
          </div>
        </Reveal>

        <Reveal className="bento-card bento-card-tall" delay={80}>
          <h2 className="bento-card-title"><span className="bento-icon-dot" />Impact</h2>
          <div className="bento-stats-col">
            {achievements.map((s, i) => <BentoStat key={s.label} {...s} delay={i * 100} />)}
          </div>
        </Reveal>

        <Reveal className="bento-card bento-card-wide" delay={120}>
          <h2 className="bento-card-title"><span className="bento-icon-dot" />Experience</h2>
          <div className="bento-timeline">
            {experience.map((role, i) => (
              <div key={i} className="bento-timeline-item">
                <div className="bento-timeline-dot" />
                <div>
                  <h3>{role.title} <span className="bento-meta">&middot; {role.company}</span></h3>
                  <p className="bento-meta">{role.period}</p>
                  <ul>{role.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
                </div>
              </div>
            ))}
            {education.map((e, i) => (
              <div key={`edu-${i}`} className="bento-timeline-item">
                <div className="bento-timeline-dot bento-timeline-dot-alt" />
                <div>
                  <h3>{e.degree}</h3>
                  <p className="bento-meta">{e.school} &middot; {e.period}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {projects.map((p, i) => (
          <Reveal key={p.name} className="bento-card bento-card-project" delay={i * 90}>
            <h3>{p.name}</h3>
            <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            <p>{p.body}</p>
            {p.link && <a className="card-link" href={p.link} target="_blank" rel="noreferrer">View on GitHub &rarr;</a>}
          </Reveal>
        ))}

        <Reveal className="bento-card bento-card-wide" delay={0}>
          <h2 className="bento-card-title"><span className="bento-icon-dot" />Tech Stack</h2>
          <div className="bento-skills">
            {skills.map((g) => (
              <div key={g.title} className="bento-skill-group">
                <div className="bento-skill-icon">{ICONS[g.title]}</div>
                <div>
                  <h4>{g.title}</h4>
                  <div className="tag-row">{g.items.map((s) => <span key={s} className="tag">{s}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="bento-card bento-card-wide bento-card-contact" delay={60}>
          <h2 className="bento-card-title"><span className="bento-icon-dot" />Let's Connect</h2>
          <div className="contact-links">
            {contact.map((l) => <a key={l.label} className="btn btn-outline" href={l.href} target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
        </Reveal>
      </main>

      <footer className="footer bento-footer">Built by {profile.name} &middot; {new Date().getFullYear()}</footer>
    </div>
  )
}
