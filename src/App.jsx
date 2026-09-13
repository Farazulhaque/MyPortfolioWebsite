import { useEffect } from 'react'
import { usePersistentState } from './hooks'
import SidebarLayout from './layouts/SidebarLayout'
import DashboardLayout from './layouts/DashboardLayout'
import TerminalLayout from './layouts/TerminalLayout'
import ObservabilityLayout from './layouts/ObservabilityLayout'

const LAYOUTS = {
  sidebar: { label: 'Sidebar', Component: SidebarLayout },
  dashboard: { label: 'Dashboard', Component: DashboardLayout },
  terminal: { label: 'Terminal', Component: TerminalLayout },
  observability: { label: 'Observability', Component: ObservabilityLayout },
}

const THEMES = {
  emerald: { label: 'Emerald', swatch: '#2bbc8a' },
  violet: { label: 'Violet', swatch: '#a78bfa' },
  amber: { label: 'Amber', swatch: '#f59e0b' },
  light: { label: 'Light', swatch: '#0969da' },
}

export default function App() {
  const [layout, setLayout] = usePersistentState('portfolio-layout', 'sidebar')
  const [theme, setTheme] = usePersistentState('portfolio-theme', 'emerald')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const { Component } = LAYOUTS[layout] || LAYOUTS.sidebar

  return (
    <>
      <div className="switcher">
        <div className="switcher-group">
          <span className="switcher-label">Layout</span>
          {Object.entries(LAYOUTS).map(([key, l]) => (
            <button
              key={key}
              className={`switcher-btn ${layout === key ? 'switcher-btn-active' : ''}`}
              onClick={() => setLayout(key)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="switcher-group">
          <span className="switcher-label">Theme</span>
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              className={`switcher-swatch ${theme === key ? 'switcher-swatch-active' : ''}`}
              style={{ background: t.swatch }}
              title={t.label}
              onClick={() => setTheme(key)}
              aria-label={`${t.label} theme`}
            />
          ))}
        </div>
      </div>
      <Component />
    </>
  )
}
