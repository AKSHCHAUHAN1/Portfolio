import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Braces, Cloud, Code2, Database, Download, Github, GitBranch, GraduationCap, Linkedin, Mail,
  MapPin, ShieldCheck
} from 'lucide-react';
import { Header } from './components/Header';
import { PortfolioConsole } from './components/PortfolioConsole';
import { accomplishments, educationHistory, experiences, personalInfo, projects, skillCategories } from './utils/data';

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.18 },
  transition: { duration: 0.74, ease: [0.16, 1, 0.3, 1] }
};

const experienceIcons = [Code2, ShieldCheck];
const skillIcons = { cloud: Cloud, fullstack: Code2, languages: Braces, databases: Database };

const techLogos = {
  'React.js': ['react', '61DAFB'],
  'REST APIs': ['swagger', '85EA2D'],
  'GitLab CI': ['gitlab', 'FC6D26'],
  JavaScript: ['javascript', 'F7DF1E'],
  'Tailwind CSS': ['tailwindcss', '06B6D4'],
  'State Management': ['redux', '764ABC'],
  'Node.js': ['nodedotjs', '5FA04E'],
  'Express.js': ['express', '111827'],
  MongoDB: ['mongodb', '47A248'],
  'GitHub Actions': ['githubactions', '2088FF'],
  'RBAC & Auth': ['auth0', 'EB5424'],
  Docker: ['docker', '2496ED']
};

const projectLogoAliases = {
  'React 18': ['react', '61DAFB'],
  'FastAPI (Python)': ['fastapi', '009688'],
  PyTorch: ['pytorch', 'EE4C2C'],
  'scikit-learn': ['scikitlearn', 'F7931E'],
  'PostgreSQL (TimescaleDB)': ['postgresql', '4169E1'],
  'Docker Compose': ['docker', '2496ED'],
  Python: ['python', '3776AB'],
  'AWS (EC2, ASG, ALB)': ['aws-official', 'FF9900'],
  Nginx: ['nginx', '009639'],
  'Google OAuth': ['google', '4285F4'],
  'Three.js': ['threedotjs', '111827'],
  'Tesseract.js': ['javascript', 'F7DF1E']
};

function Eyebrow({ children }) {
  return <p className="vp-eyebrow"><span />{children}</p>;
}

function SectionIntro({ eyebrow, title, copy, side = 'left' }) {
  const words = title.split(' ');
  const directionalReveal = { ...reveal, initial: { opacity: 0, x: side === 'right' ? 62 : -62, y: 18 } };
  return <motion.div {...directionalReveal} className="vp-section-intro">
    <Eyebrow>{eyebrow}</Eyebrow><h2 aria-label={title}>{words.map((word, index) => <motion.span key={`${word}-${index}`} initial={{ opacity: 0, y: '105%' }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: .52, delay: .1 + index * .065, ease: [0.16, 1, 0.3, 1] }}>{word}&nbsp;</motion.span>)}</h2>{copy && <p>{copy}</p>}
  </motion.div>;
}

function TechSymbols({ tech, className = '' }) {
  return (
    <div className={`vp-tech-symbols ${className}`} aria-label="Technologies used">
      {tech.map((item) => {
        const [logo, color] = projectLogoAliases[item] || techLogos[item] || ['codeberg', '0F766E'];
        const source = logo === 'aws-official'
          ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
          : `https://cdn.simpleicons.org/${logo}/${color}`;
        return <span key={item} className={`vp-tech-symbol vp-tech-symbol--${logo}`} data-tooltip={item} aria-label={item}>
          <img src={source} alt="" aria-hidden="true" />
        </span>;
      })}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => window.localStorage.getItem('portfolio-theme') === 'dark');
  const [consoleOpen, setConsoleOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('vp-dark-root', dark);
  }, [dark]);

  const toggleTheme = (event) => {
    const nextTheme = !dark;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => setDark(nextTheme));
      transition.ready.then(() => document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius + 80}px at ${x}px ${y}px)`] },
        { duration: 720, easing: 'cubic-bezier(.22, 1, .36, 1)', pseudoElement: '::view-transition-new(root)' }
      ));
    } else {
      setDark(nextTheme);
    }
  };

  return (
    <div className={`voxel-portfolio ${dark ? 'vp-dark' : ''}`} id="top">
      <motion.div className="vp-scroll-progress" style={{ scaleX: progress }} />
      <div className="vp-glow vp-glow-one" aria-hidden="true" />
      <div className="vp-glow vp-glow-two" aria-hidden="true" />
      <div className="vp-glow vp-glow-three" aria-hidden="true" />
      <Header dark={dark} onThemeToggle={toggleTheme} onConsoleOpen={() => setConsoleOpen(true)} />
      <main>
        <section className="vp-hero">
          <div className="vp-wrap vp-hero-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.16, 1, 0.3, 1] }} className="vp-hero-copy">
              <Eyebrow>{personalInfo.role}</Eyebrow>
              <h1>Engineering thoughtful<br /><span>cloud-native software.</span></h1>
              <p>{personalInfo.summary}</p>
              <div className="vp-hero-actions">
                <a className="vp-button vp-button-primary" href="#profile">View profile <ArrowRight size={17} /></a>
                <a className="vp-button vp-button-secondary" href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf"><Download size={16} /> Download résumé</a>
              </div>
              <div className="vp-hero-meta"><span><MapPin size={15} /> {personalInfo.location}</span><span><GraduationCap size={16} /> {personalInfo.degree}</span></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 26, scale: .975 }} animate={{ opacity: 1, y: 0, scale: 1 }} whileHover={{ y: -6, rotate: .3 }} transition={{ duration: .8, delay: .12, ease: [0.16, 1, 0.3, 1] }} className="vp-portrait-panel">
              <div className="vp-portrait-image-wrap"><img src={personalInfo.avatar} alt={`${personalInfo.name}, ${personalInfo.role}`} /></div>
              <div className="vp-portrait-caption"><div><span>{personalInfo.name}</span><strong>{personalInfo.role}</strong></div><p>{personalInfo.institution}</p></div>
            </motion.div>
          </div>
        </section>

        <section className="vp-proof" id="profile"><div className="vp-wrap vp-proof-grid">
          <motion.div {...reveal}><strong>2</strong><span>engineering internships</span></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: .07 }}><strong>3</strong><span>in-depth project case studies</span></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: .14 }}><strong>100+</strong><span>DSA problems on LeetCode</span></motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: .21 }}><strong>AWS</strong><span>Cloud Quest: Cloud Practitioner</span></motion.div>
        </div></section>

        <section className="vp-work" id="work"><div className="vp-wrap">
          <SectionIntro eyebrow="Selected projects" title="Work grounded in real systems." copy="Each project below includes its actual stack, implementation highlights, and technical outcomes." side="left" />
          <div className="vp-project-list">{projects.map((project, index) => <motion.article {...reveal} whileHover={{ y: -6 }} transition={{ ...reveal.transition, delay: index * .08 }} id={`project-${project.id}`} key={project.id} className="vp-project-card">
            <div className="vp-project-preview"><div className="vp-preview-bar"><span /><span /><span /><em>{project.repo}</em></div><img src={project.previewImage} alt={project.screenshotLabel} /></div>
            <div className="vp-project-body"><div className="vp-card-number">0{index + 1}</div><p className="vp-project-category">{project.category}</p><h3>{project.name}</h3><h4>{project.title}</h4><p className="vp-project-description">{project.about}</p><div className="vp-project-metric-grid">{project.metrics.map(metric => <div key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}</div><ul>{project.highlights.map(highlight => <li key={highlight}><Check size={15} />{highlight}</li>)}</ul><TechSymbols tech={project.stack} className="vp-project-tech-symbols" /><a className="vp-repo-link" href={project.github} target="_blank" rel="noreferrer">Open repository <ArrowUpRight size={16} /></a></div>
          </motion.article>)}</div>
        </div></section>

        <section className="vp-experience" id="experience"><div className="vp-wrap">
          <SectionIntro eyebrow="Experience" title="Practical delivery in teams." copy="Internship work across product interfaces, APIs, CI/CD, and secure application delivery." side="right" />
          <div className="vp-experience-grid">{experiences.map((experience, index) => { const Icon = experienceIcons[index] || BriefcaseBusiness; return <motion.article initial={{ opacity: 0, x: index % 2 ? 56 : -56 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: .2 }} whileHover={{ y: -5 }} transition={{ duration: .65, delay: index * .1, ease: [0.16, 1, 0.3, 1] }} key={experience.company} className="vp-experience-card"><div className="vp-experience-icon"><Icon size={21} /></div><p>{experience.period} · {experience.duration}</p><h3>{experience.company}</h3><h4>{experience.role}</h4><div className="vp-experience-summary">{experience.description}</div><ul>{experience.points.map(point => <li key={point}><Check size={15} />{point}</li>)}</ul><TechSymbols tech={experience.tech} /></motion.article>; })}</div>
        </div></section>

        <section className="vp-skills" id="skills"><div className="vp-wrap">
          <SectionIntro eyebrow="Technical toolkit" title="The tools behind the work." copy="A résumé-backed overview of the platforms, languages, and fundamentals I work with." side="left" />
          <div className="vp-skill-grid">{skillCategories.map((category, index) => { const Icon = skillIcons[category.id] || GitBranch; return <motion.article initial={{ opacity: 0, x: index % 2 ? 48 : -48, y: 18 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: false, amount: .2 }} whileHover={{ y: -7, scale: 1.012 }} transition={{ duration: .62, delay: index * .09, ease: [0.16, 1, 0.3, 1] }} key={category.id} className="vp-skill-card"><div><span>0{index + 1}</span><Icon size={18} /></div><h3>{category.name}</h3><ul>{category.skills.map(skill => <li key={skill.name}>{skill.name}</li>)}</ul></motion.article>; })}</div>
        </div></section>

        <section className="vp-education" id="education"><div className="vp-wrap">
          <SectionIntro eyebrow="Education & recognition" title="A strong technical foundation." side="right" />
          <div className="vp-education-grid"><div className="vp-education-list">{educationHistory.map(education => <motion.article {...reveal} key={`${education.degree}-${education.period}`}><p>{education.period} · {education.location}</p><h3>{education.degree}</h3><h4>{education.institution}</h4><span>{education.specialization} · {education.grade}</span></motion.article>)}</div><div className="vp-achievement-list">{accomplishments.map(accomplishment => <motion.article {...reveal} key={accomplishment.title}><p>{accomplishment.period}</p><h3>{accomplishment.title}</h3><span>{accomplishment.issuer}</span></motion.article>)}</div></div>
        </div></section>

        <section className="vp-contact" id="contact"><div className="vp-wrap"><motion.div {...reveal} className="vp-contact-card"><div><Eyebrow>Get in touch</Eyebrow><h2>Let’s discuss the next<br /><span>engineering challenge.</span></h2></div><div className="vp-contact-actions"><a className="vp-button vp-button-primary" href={`mailto:${personalInfo.email}`}>Email me <ArrowRight size={17} /></a><div><a href={personalInfo.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={`mailto:${personalInfo.email}`}><Mail size={17} /> {personalInfo.email}</a></div></div></motion.div></div></section>
      </main>
      <PortfolioConsole open={consoleOpen} onClose={() => setConsoleOpen(false)} dark={dark} />
      <footer className="vp-footer"><div className="vp-wrap"><span>© {new Date().getFullYear()} Aksh Chauhan</span><span>DevOps & Full-Stack Engineering Portfolio</span></div></footer>
    </div>
  );
}
