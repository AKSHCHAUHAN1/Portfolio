import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Code2, ExternalLink, GitBranch, Layers, ShieldCheck } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../modules/SectionHeader';
import { experiences } from '../utils/data';

export default function Experience({ onNavigate }) {
  const [activeExp, setActiveExp] = useState(0);
  const current = experiences[activeExp];

  return (
    <PageShell className="experience-page">
      <SectionHeader
        sector="03"
        title="Experience that ships"
        accent="Experience"
        copy="Internships spanning production front-end delivery, API integration, CI/CD, and secure full-stack systems."
      />

      <div className="experience-container">
        {/* Navigation Selector Tabs */}
        <div className="experience-nav">
          <div className="experience-nav-header">
            <Briefcase size={16} className="text-primary" />
            <span>SELECT ENGAGEMENT</span>
          </div>
          <div className="experience-tabs">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                type="button"
                className={`experience-tab ${activeExp === idx ? 'is-active' : ''}`}
                onClick={() => setActiveExp(idx)}
              >
                <div className="experience-tab-meta">
                  <span className="experience-tab-badge">{exp.badge}</span>
                  <span className="experience-tab-period">{exp.period}</span>
                </div>
                <div className="experience-tab-title">{exp.company}</div>
                <div className="experience-tab-role">{exp.role}</div>
                <ChevronRight className="experience-tab-arrow" size={16} />
              </button>
            ))}
          </div>

          {/* Quick Metrics Callout */}
          <div className="experience-callout">
            <div className="callout-header">
              <ShieldCheck size={16} className="text-primary" />
              <span>CORE COMPETENCIES APPLIED</span>
            </div>
            <ul className="callout-list">
              <li>
                <CheckCircle2 size={13} className="text-primary" />
                <span>Enterprise CRUD & Automated ID Generation</span>
              </li>
              <li>
                <CheckCircle2 size={13} className="text-primary" />
                <span>Automated GitHub Actions & GitLab CI Pipelines</span>
              </li>
              <li>
                <CheckCircle2 size={13} className="text-primary" />
                <span>Production RBAC & Authentication Guardrails</span>
              </li>
              <li>
                <CheckCircle2 size={13} className="text-primary" />
                <span>REST API Integration under Strict SLAs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Experience Dossier */}
        <motion.div
          key={current.company}
          className="experience-dossier"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <div className="dossier-header">
            <div className="dossier-headline">
              <div className="dossier-badge-row">
                <span className="dossier-pill">{current.type}</span>
                <span className="dossier-pill dossier-pill--cyan">{current.badge}</span>
                <span className="dossier-status">● VERIFIED RECORD</span>
              </div>
              <h2 className="dossier-company">{current.company}</h2>
              <div className="dossier-role-row">
                <span className="dossier-role">{current.role}</span>
                <span className="dossier-divider">/</span>
                <span className="dossier-period">
                  <Calendar size={14} /> {current.period} ({current.duration})
                </span>
              </div>
            </div>
          </div>

          <div className="dossier-body">
            <p className="dossier-overview">{current.description}</p>

            <div className="dossier-section-title">
              <Layers size={15} className="text-primary" />
              <span>KEY ENGINEERING DELIVERABLES</span>
            </div>

            <div className="dossier-points">
              {current.points.map((pt, i) => (
                <div key={i} className="dossier-point">
                  <span className="point-indicator">
                    <span className="point-num">0{i + 1}</span>
                  </span>
                  <p className="point-text">{pt}</p>
                </div>
              ))}
            </div>

            <div className="dossier-section-title">
              <Code2 size={15} className="text-primary" />
              <span>TECHNOLOGY STACK USED</span>
            </div>

            <div className="dossier-tech-tags">
              {current.tech.map((t) => (
                <span key={t} className="tech-tag">
                  <GitBranch size={12} className="text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="dossier-footer">
            <span className="dossier-signoff">
              REFERENCE: VERIFIED VIA RESUME // GITLAB & GITHUB WORKFLOWS
            </span>
            <button
              type="button"
              className="dossier-link-btn"
              onClick={() => onNavigate('projects')}
            >
              EXPLORE RELEVANT PROJECTS <ExternalLink size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
