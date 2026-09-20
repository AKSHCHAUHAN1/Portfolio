import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { personalInfo, projects } from '../utils/data';

const rise = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
};

export default function Home({ onNavigate }) {
  return (
    <PageShell className="home-page editorial-home">
      <section className="editorial-hero">
        <motion.p {...rise} className="eyebrow"><span /> DevOps & full-stack engineer · India</motion.p>
        <motion.div {...rise} transition={{ ...rise.transition, delay: 0.08 }} className="hero-layout">
          <div>
            <h1>Building reliable systems,<br /><em>from interface to infrastructure.</em></h1>
            <p className="hero-intro">
              I’m {personalInfo.name}, a computer science student focused on cloud infrastructure,
              automation, and thoughtful product engineering.
            </p>
            <div className="hero-actions">
              <button className="btn btn--primary" type="button" onClick={() => onNavigate('projects')}>
                View selected work <ArrowDownRight size={17} />
              </button>
              <a className="text-link" href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf">
                <Download size={16} /> Download résumé
              </a>
            </div>
          </div>
          <aside className="hero-profile-card">
            <div className="hero-photo-wrap"><img src={personalInfo.avatar} alt={personalInfo.name} /></div>
            <div className="hero-profile-copy">
              <span>Currently</span>
              <strong>B.Tech CSE · DevOps</strong>
              <p>UPES, Dehradun<br />Class of 2027</p>
            </div>
          </aside>
        </motion.div>
        <motion.div {...rise} transition={{ ...rise.transition, delay: 0.18 }} className="hero-footnote">
          <div><span>Focus</span><strong>Cloud · CI/CD · Full stack</strong></div>
          <div><span>Based in</span><strong>Dehradun / Haridwar, India</strong></div>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail size={18} /></a>
          </div>
        </motion.div>
      </section>

      <section className="home-work-preview">
        <div className="section-intro"><p className="eyebrow"><span /> Selected work</p><h2>Engineering projects with real systems at the center.</h2></div>
        <div className="home-project-list">
          {projects.map((project, index) => (
            <button className="home-project-row" key={project.id} type="button" onClick={() => onNavigate('projects')}>
              <span>0{index + 1}</span><strong>{project.name}</strong><p>{project.type}</p><ArrowUpRight size={20} />
            </button>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
