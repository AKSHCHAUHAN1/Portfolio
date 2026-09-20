import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  GitBranch,
  Github,
  Layers,
  Server,
  ShieldCheck,
  Terminal,
  Zap
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../modules/SectionHeader';
import { projects } from '../utils/data';

export default function Projects() {
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const selected = useMemo(
    () => projects.find((p) => p.id === selectedId) || projects[0],
    [selectedId]
  );

  return (
    <PageShell className="projects-page">
      <SectionHeader
        sector="05"
        title="Selected projects"
        accent="Projects"
        copy="Cloud-native and full-stack systems designed around reliability, automation, and useful developer experiences."
      />

      <div className="projects-layout">
        {/* Project Selector Ribbon */}
        <div className="projects-selector-tabs">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              className={`project-tab-card ${selectedId === proj.id ? 'is-active' : ''}`}
              onClick={() => setSelectedId(proj.id)}
            >
              <div className="proj-tab-header">
                <span className="proj-tab-badge">{proj.badge}</span>
                <span className="proj-tab-num">0{idx + 1}</span>
              </div>
              <h3 className="proj-tab-title">{proj.name}</h3>
              <p className="proj-tab-cat">{proj.category}</p>
            </button>
          ))}
        </div>

        {/* Selected Project Main Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="project-showcase"
          >
            {/* Top Row: Meta & Links */}
            <div className="project-showcase-header">
              <div className="project-title-group">
                <div className="project-type-row">
                  <span className="type-badge">{selected.type}</span>
                  <span className="repo-badge">
                    <GitBranch size={13} className="text-primary" /> {selected.repo}
                  </span>
                </div>
                <h2 className="project-title">{selected.title}</h2>
              </div>

              <div className="project-header-actions">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  <Github size={16} />
                  VIEW SOURCE REPO
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Middle Grid: Screenshot Preview + Metrics */}
            <div className="project-media-grid">
              {/* Screenshot Frame with Tactical Accents */}
              <div className="project-preview-frame">
                <span className="hud-corner hud-corner--tl" />
                <span className="hud-corner hud-corner--tr" />
                <span className="hud-corner hud-corner--bl" />
                <span className="hud-corner hud-corner--br" />

                <div className="frame-meta-bar">
                  <span className="frame-dot" />
                  <span className="frame-title">LIVE ARCHITECTURE TELEMETRY // {selected.name.toUpperCase()}</span>
                </div>

                <div className="frame-image-wrap">
                  <img
                    src={selected.previewImage}
                    alt={selected.screenshotLabel}
                    className="project-preview-img"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Architectural Metrics Bar */}
              <div className="project-metrics-column">
                <div className="metrics-column-header">
                  <Cpu size={16} className="text-primary" />
                  <span>SYSTEM METRICS & TOPOLOGY</span>
                </div>

                <div className="metrics-cards-grid">
                  {selected.metrics?.map((m, i) => (
                    <div key={i} className="metric-tile">
                      <span className="metric-tile-label">{m.label}</span>
                      <span className="metric-tile-value">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="project-stack-section">
                  <span className="stack-heading">TECHNOLOGIES & PROTOCOLS</span>
                  <div className="project-stack-tags">
                    {selected.stack.map((item) => (
                      <span key={item} className="stack-tag">
                        <Code2 size={12} className="text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Deep Technical Dossier */}
            <div className="project-details-card">
              <div className="details-header">
                <Layers size={16} className="text-primary" />
                <span>ARCHITECTURAL SPECIFICATION & HIGHLIGHTS</span>
              </div>

              <p className="project-description-lead">{selected.about}</p>

              <div className="project-highlights-grid">
                {selected.highlights.map((highlight, idx) => (
                  <div key={idx} className="project-highlight-item">
                    <div className="highlight-icon-box">
                      <CheckCircle2 size={16} className="text-primary" />
                    </div>
                    <p className="highlight-text">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </PageShell>
  );
}
