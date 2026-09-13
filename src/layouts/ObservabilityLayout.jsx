import { useEffect, useState } from 'react'
import Reveal from '../Reveal'
import { useCountUp, useReveal } from '../hooks'
import { profile, about, experience, education, projects, achievements, skills, contact, social } from '../data'

const BAR_HEIGHTS = [35, 55, 40, 70, 50, 85, 60, 95, 75, 100]

function useElapsed() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

function MetricPanel({ end, suffix, label, delay, offset }) {
  const [ref, visible] = useReveal()
  const value = useCountUp(end, visible)
  return (
    <div ref={ref} className={`obs-panel obs-metric reveal ${visible ? 'reveal-visible' : ''}`} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}>
      <div className="obs-metric-top">
        <span className="obs-panel-label">{label}</span>
        <span className="obs-live-dot" />
      </div>
      <div className="obs-metric-number">{value}{suffix}</div>
      <div className="obs-sparkline">
        {BAR_HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="obs-bar"
            style={{ height: visible ? `${BAR_HEIGHTS[(i + offset) % BAR_HEIGHTS.length]}%` : '4%', transitionDelay: `${delay + i * 30}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

function LogLine({ time, level, msg, sub }) {
  return (
    <div className={`obs-log-line ${sub ? 'obs-log-sub' : ''}`}>
      <span className="obs-log-time">{time}</span>
      <span className={`obs-log-level obs-log-level-${level.toLowerCase()}`}>{level}</span>
      <span className="obs-log-msg">{msg}</span>
    </div>
  )
}

export default function ObservabilityLayout() {
  const uptime = useElapsed()

  return (
    <div className="obs">
      <div className="obs-scanlines" />

      <header className="obs-topbar">
        <div className="obs-topbar-left">
          <img className="obs-avatar" src={`${import.meta.env.BASE_URL}profile.jpg`} alt={profile.name} />
          <div>
            <div className="obs-service-name">{profile.name} <span className="obs-service-tag">/{profile.role.toLowerCase().replace(/\s+/g, '-')}</span></div>
            <div className="obs-service-sub">{profile.tagline}</div>
          </div>
        </div>
        <div className="obs-topbar-right">
          <span className="obs-status-pill"><span className="obs-live-dot" />OPERATIONAL</span>
          <span className="obs-uptime">session {uptime}</span>
        </div>
      </header>

      <p className="obs-summary">{profile.summary}</p>

      <div className="obs-social">
        {social.map((s) => (
          <a key={s.label} className="btn btn-outline" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
        ))}
      </div>

      <section className="obs-section">
        <h2 className="obs-section-title">// metrics</h2>
        <div className="obs-metrics-row">
          {achievements.map((s, i) => <MetricPanel key={s.label} {...s} delay={i * 100} offset={i * 2} />)}
        </div>
      </section>

      <section className="obs-section">
        <h2 className="obs-section-title">// service.info -- about</h2>
        <Reveal className="obs-panel obs-info">
          {about.map((t, i) => (
            <p key={i}><span className="obs-info-key">[{String(i + 1).padStart(2, '0')}]</span> {t}</p>
          ))}
        </Reveal>
      </section>

      <section className="obs-section">
        <h2 className="obs-section-title">// event.log -- experience &amp; education</h2>
        <Reveal className="obs-panel obs-logstream">
          {experience.map((role, i) => (
            <div key={i} className="obs-log-group">
              <LogLine time={role.period} level="DEPLOY" msg={`${role.title} @ ${role.company}`} />
              {role.bullets.map((b, j) => <LogLine key={j} time="" level="INFO" msg={b} sub />)}
            </div>
          ))}
          {education.map((e, i) => (
            <div key={`edu-${i}`} className="obs-log-group">
              <LogLine time={e.period} level="GRAD" msg={`${e.degree} -- ${e.school}${e.location ? `, ${e.location}` : ''}`} />
            </div>
          ))}
        </Reveal>
      </section>

      <section className="obs-section">
        <h2 className="obs-section-title">// deployed.services -- projects</h2>
        <div className="obs-services-grid">
          {projects.map((p, i) => (
            <Reveal key={p.name} className="obs-panel obs-service-card" delay={i * 90}>
              <div className="obs-service-head">
                <span className="obs-status-pill obs-status-pill-sm"><span className="obs-live-dot" />RUNNING</span>
              </div>
              <h3>{p.name}</h3>
              <div className="tag-row">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              <p>{p.body}</p>
              {p.link && <a className="card-link" href={p.link} target="_blank" rel="noreferrer">endpoint: repo &rarr;</a>}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="obs-section">
        <h2 className="obs-section-title">// health.check -- tech stack</h2>
        <div className="obs-health-grid">
          {skills.map((g, i) => (
            <Reveal key={g.title} className="obs-panel" delay={i * 90}>
              <h4 className="obs-panel-label">{g.title}</h4>
              <div className="obs-health-list">
                {g.items.map((s) => (
                  <span key={s} className="obs-check"><span className="obs-live-dot" />{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="obs-section">
        <h2 className="obs-section-title">// alert.routes -- contact</h2>
        <Reveal className="obs-panel obs-routes">
          {contact.map((l) => (
            <a key={l.label} className="obs-route" href={l.href} target="_blank" rel="noreferrer">
              <span className="obs-live-dot" />
              <span className="obs-route-label">{l.label}</span>
              <span className="obs-route-arrow">&rarr;</span>
            </a>
          ))}
        </Reveal>
      </section>

      <footer className="footer obs-footer">Built by {profile.name} &middot; {new Date().getFullYear()}</footer>
    </div>
  )
}
