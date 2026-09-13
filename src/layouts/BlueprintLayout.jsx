import Reveal from '../Reveal'
import { useCountUp, useReveal } from '../hooks'
import { profile, about, experience, education, projects, achievements, skills, contact } from '../data'

function Readout({ end, suffix, label, delay }) {
  const [ref, visible] = useReveal()
  const value = useCountUp(end, visible)
  return (
    <div ref={ref} className={`bp-readout reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}>
      <div className="bp-readout-number">{value}{suffix}</div>
      <div className="bp-readout-label">{label}</div>
    </div>
  )
}

function Node({ num, title, children }) {
  return (
    <Reveal className="bp-node">
      <div className="bp-node-box">
        <div className="bp-node-head">
          <span className="bp-node-num">{num}</span>
          <span className="bp-node-title">{title}</span>
        </div>
        <div className="bp-node-body">{children}</div>
      </div>
    </Reveal>
  )
}

export default function BlueprintLayout() {
  return (
    <div className="bp">
      <div className="bp-grid-bg" />

      <header className="bp-header">
        <div className="bp-title-block">
          <span className="bp-sheet">SHEET 01/01 &middot; REV {new Date().getFullYear()}</span>
          <h1>SYSTEM SCHEMATIC</h1>
        </div>
        <div className="bp-id-card">
          <div className="bp-photo-frame">
            <img className="bp-photo" src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} />
          </div>
          <div>
            <div className="bp-id-name">{profile.name}</div>
            <div className="bp-id-role">{profile.role} &middot; {profile.tagline}</div>
            <div className="bp-id-status">{profile.status}</div>
          </div>
        </div>
      </header>

      <div className="bp-bus">
        <Node num="01" title="ABOUT">
          {about.map((t, i) => <p key={i}>{t}</p>)}
        </Node>

        <Node num="02" title="EXPERIENCE">
          {experience.map((role, i) => (
            <div key={i} className="bp-sub">
              <div className="bp-sub-head">{role.title} <span className="bp-dim">&middot; {role.company}</span></div>
              <div className="bp-dim bp-sub-period">{role.period}</div>
              <ul>{role.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            </div>
          ))}
        </Node>

        <Node num="03" title="EDUCATION">
          {education.map((e, i) => (
            <div key={i} className="bp-sub">
              <div className="bp-sub-head">{e.degree}</div>
              <div className="bp-dim">{e.school} &middot; {e.period}{e.location ? `, ${e.location}` : ''}</div>
            </div>
          ))}
        </Node>

        <Node num="04" title="PROJECTS">
          <div className="bp-projects-grid">
            {projects.map((p, i) => (
              <div key={p.name} className="bp-project-card">
                <div className="bp-project-tag">P-{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.name}</h3>
                <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                <p>{p.body}</p>
                {p.link && <a className="card-link" href={p.link} target="_blank" rel="noreferrer">View on GitHub &rarr;</a>}
              </div>
            ))}
          </div>
        </Node>

        <Node num="05" title="ACHIEVEMENTS">
          <div className="bp-readout-row">
            {achievements.map((s, i) => <Readout key={s.label} {...s} delay={i * 90} />)}
          </div>
        </Node>

        <Node num="06" title="TECH STACK">
          <div className="bp-skills-grid">
            {skills.map((g) => (
              <div key={g.title} className="bp-skill-block">
                <div className="bp-skill-title">{g.title}</div>
                <div className="tag-row">{g.items.map((s) => <span key={s} className="tag">{s}</span>)}</div>
              </div>
            ))}
          </div>
        </Node>

        <Node num="07" title="CONTACT">
          <div className="bp-pins">
            {contact.map((l) => (
              <a key={l.label} className="bp-pin" href={l.href} target="_blank" rel="noreferrer">
                <span className="bp-pin-dot" />
                {l.label}
              </a>
            ))}
          </div>
        </Node>
      </div>

      <footer className="footer bp-footer">Built by {profile.name} &middot; {new Date().getFullYear()}</footer>
    </div>
  )
}
