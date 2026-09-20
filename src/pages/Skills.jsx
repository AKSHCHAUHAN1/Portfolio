import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  Binary,
  Boxes,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  HardDrive,
  Laptop,
  Layers,
  Server,
  Shield,
  TerminalSquare,
  Workflow
} from 'lucide-react';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../modules/SectionHeader';
import { skillCategories } from '../utils/data';

const ICON_MAP = {
  cloud: Cloud,
  container: Container,
  boxes: Boxes,
  workflow: Workflow,
  server: Server,
  github: Github,
  terminalsquare: TerminalSquare,
  atom: Atom,
  filecode2: FileCode2,
  braces: Braces,
  code2: Code2,
  globe: Globe,
  laptop: Laptop,
  binary: Binary,
  database: Database,
  harddrive: HardDrive,
  layers: Layers,
  shield: Shield
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = useMemo(() => {
    return [
      { id: 'all', name: 'All Domains', tag: 'COMPLETE_MATRIX' },
      ...skillCategories
    ];
  }, []);

  const displayedSkills = useMemo(() => {
    if (activeCategory === 'all') {
      return skillCategories.flatMap((cat) => cat.skills);
    }
    return skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];
  }, [activeCategory]);

  return (
    <PageShell className="skills-page">
      <SectionHeader
        sector="04"
        title="Tools I work with"
        accent="Skills"
        copy="A practical toolkit across cloud infrastructure, web development, automation, and computer science foundations."
      />

      {/* Category Filter Tabs */}
      <div className="skills-category-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`skills-cat-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="cat-btn-text">{cat.name}</span>
            <span className="cat-btn-tag">{cat.tag}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-matrix-grid">
        <AnimatePresence mode="popLayout">
          {displayedSkills.map((skill, index) => {
            const Icon = ICON_MAP[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="skill-protocol-card group"
              >
                {/* Tactical Corner Accents */}
                <span className="hud-corner hud-corner--tl" />
                <span className="hud-corner hud-corner--br" />

                <div className="skill-card-top">
                  <div className="skill-icon-box">
                    <Icon size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="skill-level-pill">{skill.level}%</span>
                </div>

                <h3 className="skill-card-title">{skill.name}</h3>

                <div className="skill-card-highlight">
                  <span className="highlight-bullet">&bull;</span>
                  <span>{skill.highlight}</span>
                </div>

                {/* Tactical Progress Meter */}
                <div className="skill-meter-wrap">
                  <div className="skill-meter-bar">
                    <motion.div
                      className="skill-meter-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.03, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Bottom Summary Ticker */}
      <div className="skills-footer-strip">
        <div className="skills-stat">
          <span className="stat-label">TOTAL PROTOCOLS:</span>
          <span className="stat-val">{skillCategories.flatMap((c) => c.skills).length} Core Systems</span>
        </div>
        <div className="skills-stat">
          <span className="stat-label">PRIMARY CLUSTER:</span>
          <span className="stat-val">AWS (EC2, ASG, ALB, EKS) + Docker + Kubernetes</span>
        </div>
        <div className="skills-stat">
          <span className="stat-label">AUTOMATION:</span>
          <span className="stat-val">GitLab CI + GitHub Actions + Terraform</span>
        </div>
      </div>
    </PageShell>
  );
}
