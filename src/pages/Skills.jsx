import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../modules/SectionHeader';
import { SkillCard } from '../modules/SkillCard';
import {
  Atom,
  Binary,
  Code2,
  Database,
  FileCode2,
  Github,
  GitBranch,
  Globe,
  HardDrive,
  Laptop,
  Layers,
  Cloud,
  Server,
  TerminalSquare,
  Braces,
  Workflow,
} from 'lucide-react';

import { useState } from 'react';

const skillsList = [
  { name: 'C', icon: Binary },
  { name: 'C++', icon: Binary },
  { name: 'PYTHON', icon: Code2 },
  { name: 'BASH', icon: TerminalSquare },
  { name: 'LINUX', icon: Server },
  { name: 'DOCKER', icon: Layers },
  { name: 'JENKINS', icon: Workflow },
  { name: 'GIT', icon: GitBranch },
  { name: 'GITHUB', icon: Github },
  { name: 'GITLAB', icon: GitBranch },
  { name: 'AWS', icon: Cloud },
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Laptop },
  { name: 'JAVASCRIPT', icon: Braces },
  { name: 'NODE.JS', icon: FileCode2 },
  { name: 'REACT.JS', icon: Atom },
  { name: 'SQL', icon: Database },
  { name: 'MONGODB', icon: HardDrive }
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [spotlight, setSpotlight] = useState({ x: '50%', y: '50%' });

  const updateSpotlight = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: `${rect.left + rect.width / 2}px`,
      y: `${rect.top + rect.height / 2}px`
    });
  };

  return (
    <PageShell>
      <SectionHeader
        sector="03"
        title="PROTOCOL ARSENAL"
        accent="ARSENAL"
        copy="SYS_STATUS: OPTIMAL. EXPLORING THE CORE TECHNOLOGIES POWERING THE STACK."
      />
      <section className="skills-stage">
        <div
          className={`skills-spotlight${hoveredSkill ? ' is-visible' : ''}`}
          style={{ '--spotlight-x': spotlight.x, '--spotlight-y': spotlight.y }}
          aria-hidden="true"
        />
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <SkillCard
              key={skill.name}
              {...skill}
              delay={index * 0.08}
              isHovered={hoveredSkill === skill.name}
              onHoverStart={(event) => {
                setHoveredSkill(skill.name);
                updateSpotlight(event);
              }}
              onHoverEnd={() => setHoveredSkill(null)}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
