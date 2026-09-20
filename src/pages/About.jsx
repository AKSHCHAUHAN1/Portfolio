import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
  School,
  Shield,
  ShieldCheck,
  Terminal,
  Trophy
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../modules/SectionHeader';
import { accomplishments, educationHistory, personalInfo } from '../utils/data';

export default function About({ onNavigate }) {
  const [selectedEdu, setSelectedEdu] = useState(0);

  return (
    <PageShell className="about-page">
      <SectionHeader
        sector="02"
        title="A little about me"
        accent="Background"
        copy="A computer science student who enjoys connecting clear product experiences with dependable infrastructure."
      />

      <div className="about-dossier-grid">
        {/* Left Column: Operator Identity & Narrative */}
        <div className="about-col-main">
          {/* Executive Overview Panel */}
          <div className="dossier-panel">
            <div className="dossier-panel__header">
              <div className="panel-title-wrap">
                <ShieldCheck size={18} className="text-primary" />
                <span className="panel-title">OPERATOR BIOGRAPHY & ETHOS</span>
              </div>
              <span className="panel-badge">STATUS: VERIFIED</span>
            </div>

            <div className="dossier-bio-content">
              <p className="bio-lead">
                I am a Computer Science undergraduate specializing in <strong>DevOps and Cloud Engineering</strong> at UPES, with hands-on full-stack development experience across front-end interfaces, back-end runtimes, and distributed API layers.
              </p>
              <p>
                My engineering philosophy centers on <strong>reliability, automation, and observability</strong>. I believe that writing clean, performant application code is only half the battle — shipping software reliably requires reproducible containerization, automated testing workflows, and resilient cloud architectures.
              </p>
              <p>
                Whether building responsive React dashboards for university client systems at <strong>Xebia</strong>, engineering end-to-end full-stack architectures with automated CI/CD at <strong>Bhavyaa Enterprises</strong>, or training ML models that forecast SLA anomalies 15 minutes ahead in <strong>IncidentIQ</strong>, I focus on delivering production-quality value.
              </p>
            </div>

            {/* Quick Contact & Spec Matrix */}
            <div className="bio-specs-grid">
              <div className="spec-box">
                <span className="spec-label">FULL NAME</span>
                <span className="spec-val">{personalInfo.name}</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">SPECIALIZATION</span>
                <span className="spec-val">DevOps & Cloud Engineering</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">LOCATION</span>
                <span className="spec-val">{personalInfo.location}</span>
              </div>
              <div className="spec-box">
                <span className="spec-label">CORE CLOUD</span>
                <span className="spec-val">AWS (EC2, ASG, ALB, EKS, IAM)</span>
              </div>
            </div>
          </div>

          {/* Education Breakdown */}
          <div className="dossier-panel">
            <div className="dossier-panel__header">
              <div className="panel-title-wrap">
                <GraduationCap size={18} className="text-primary" />
                <span className="panel-title">ACADEMIC CREDENTIALS & CURRICULUM</span>
              </div>
              <span className="panel-badge">DEGREE_VERIFIED</span>
            </div>

            <div className="education-cards">
              {educationHistory.map((edu, idx) => (
                <div key={edu.institution + edu.degree} className="education-card">
                  <div className="edu-card-top">
                    <div className="edu-icon-wrap">
                      <School size={20} className="text-primary" />
                    </div>
                    <div className="edu-meta-head">
                      <span className="edu-period">
                        <Calendar size={13} /> {edu.period}
                      </span>
                      <span className="edu-grade-pill">{edu.grade}</span>
                    </div>
                  </div>

                  <h3 className="edu-inst-name">{edu.institution}</h3>
                  <div className="edu-degree-line">
                    <span className="edu-degree">{edu.degree}</span>
                    {edu.specialization && (
                      <span className="edu-spec">({edu.specialization})</span>
                    )}
                  </div>

                  <div className="edu-location">
                    <MapPin size={13} /> {edu.location} &bull; <span>{edu.status}</span>
                  </div>

                  <p className="edu-details">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Accomplishments & Key Milestones */}
        <div className="about-col-side">
          <div className="dossier-panel">
            <div className="dossier-panel__header">
              <div className="panel-title-wrap">
                <Trophy size={18} className="text-primary" />
                <span className="panel-title">ACCOMPLISHMENTS & AWARDS</span>
              </div>
              <span className="panel-badge">OFFICIAL RECORD</span>
            </div>

            <div className="accomplishments-list">
              {accomplishments.map((item, i) => (
                <div key={item.title} className="accomplishment-item">
                  <div className="acc-header">
                    <span className="acc-tag">{item.tag}</span>
                    <span className="acc-period">{item.period}</span>
                  </div>
                  <h4 className="acc-title">{item.title}</h4>
                  <p className="acc-issuer">Issued by: {item.issuer}</p>
                  <p className="acc-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick CTA Box */}
          <div className="about-action-callout">
            <h4 className="callout-heading">READY TO COLLABORATE?</h4>
            <p className="callout-sub">
              Review my technical project blueprints or connect directly for software engineering and DevOps roles.
            </p>
            <div className="callout-btn-group">
              <button
                type="button"
                className="btn btn--primary btn--wide"
                onClick={() => onNavigate('projects')}
              >
                VIEW PROJECTS & ARCHITECTURE
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--wide"
                onClick={() => onNavigate('contact')}
              >
                INITIATE CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
