import Reveal from '../Reveal'
import { profile, about, experience, education, projects, achievements, skills, contact, social } from '../data'

const NAV = ['about', 'experience', 'education', 'projects', 'achievements', 'skills', 'contact']

function Prompt({ cmd }) {
  return (
    <p className="term-prompt">
      <span className="term-user">guest@farazul</span>
      <span className="term-sep">:~$</span> {cmd}
    </p>
  )
}

export default function TerminalLayout() {
  return (
    <div className="term">
      <div className="term-window">
        <div className="term-titlebar">
          <span className="term-dot term-dot-red" />
          <span className="term-dot term-dot-yellow" />
          <span className="term-dot term-dot-green" />
          <span className="term-titletext">guest@farazul: ~/portfolio</span>
        </div>

        <div className="term-body">
          <Prompt cmd="whoami" />
          <p className="term-out">{profile.name} -- {profile.role} ({profile.tagline})</p>
          <p className="term-out term-accent">[status] {profile.status}</p>

          <nav className="term-nav">
            {NAV.map((id, i) => (
              <a key={id} href={`#${id}`}>
                cd {id}{i < NAV.length - 1 ? ' &&' : ''}
              </a>
            ))}
          </nav>

          <section id="about">
            <Prompt cmd="cat about.md" />
            {about.map((t, i) => (
              <Reveal key={i} delay={i * 60}><p className="term-out">&gt; {t}</p></Reveal>
            ))}
          </section>

          <section id="experience">
            <Prompt cmd="ls -la experience/" />
            {experience.map((role, i) => (
              <Reveal key={i} delay={i * 80} className="term-block">
                <p className="term-out term-accent">[{role.period}] {role.title} @ {role.company}</p>
                {role.bullets.map((b, j) => (
                  <p key={j} className="term-out term-indent">- {b}</p>
                ))}
              </Reveal>
            ))}
          </section>

          <section id="education">
            <Prompt cmd="cat education.md" />
            {education.map((e, i) => (
              <Reveal key={i}><p className="term-out">&gt; {e.degree} -- {e.school} ({e.period}), {e.location}</p></Reveal>
            ))}
          </section>

          <section id="projects">
            <Prompt cmd="ls projects/" />
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="term-block">
                <p className="term-out term-accent">
                  ./{p.name.toLowerCase().replace(/\s+/g, '-')}/ {p.link && (
                    <a className="term-link" href={p.link} target="_blank" rel="noreferrer">[open]</a>
                  )}
                </p>
                <p className="term-out term-indent">tags: {p.tags.join(', ')}</p>
                <p className="term-out term-indent">{p.body}</p>
              </Reveal>
            ))}
          </section>

          <section id="achievements">
            <Prompt cmd="cat achievements.json" />
            <Reveal className="term-block">
              <p className="term-out">{'{'}</p>
              {achievements.map((s, i) => (
                <p key={s.label} className="term-out term-indent">
                  "{s.label.toLowerCase().replace(/[^a-z0-9]+/g, '_')}": {s.end}{s.suffix ? `"${s.suffix}"` : ''}{i < achievements.length - 1 ? ',' : ''}
                </p>
              ))}
              <p className="term-out">{'}'}</p>
            </Reveal>
          </section>

          <section id="skills">
            <Prompt cmd="cat tech-stack.txt" />
            {skills.map((g, i) => (
              <Reveal key={g.title} delay={i * 60}>
                <p className="term-out term-accent">## {g.title}</p>
                <p className="term-out term-indent">{g.items.join(' | ')}</p>
              </Reveal>
            ))}
          </section>

          <section id="contact">
            <Prompt cmd="cat contact.md" />
            {contact.map((l) => (
              <p key={l.label} className="term-out">
                &gt; {l.label}: <a className="term-link" href={l.href} target="_blank" rel="noreferrer">{l.href}</a>
              </p>
            ))}
          </section>

          <p className="term-prompt">
            <span className="term-user">guest@farazul</span>
            <span className="term-sep">:~$</span>
            <span className="term-cursor">_</span>
          </p>

          <p className="term-footer">Built by {profile.name} &middot; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  )
}
