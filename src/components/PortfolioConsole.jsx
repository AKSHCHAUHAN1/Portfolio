import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { personalInfo, projects, experiences, skillCategories, educationHistory, accomplishments } from '../utils/data';

const WELCOME = [
  '╔══════════════════════════════════════════════════╗',
  '║       aksh@portfolio — interactive console       ║',
  '╚══════════════════════════════════════════════════╝',
  '',
  'Portfolio console ready. Type \u001bhelp\u001b to see commands.',
  ''
];

function getSectionInfo(command) {
  switch (command) {
    case 'about':
      return [
        `┌─ ${personalInfo.name} ──────────────────────────`,
        `│  Role       : ${personalInfo.role}`,
        `│  Degree     : ${personalInfo.degree}`,
        `│  University : ${personalInfo.institution}`,
        `│  CGPA       : ${personalInfo.cgpa}`,
        `│  Location   : ${personalInfo.location}`,
        `│  Email      : ${personalInfo.email}`,
        `│  GitHub     : ${personalInfo.github}`,
        `│  LinkedIn   : ${personalInfo.linkedin}`,
        `└──────────────────────────────────────────────`,
        '',
        '  Summary:',
        `  ${personalInfo.summary}`,
        ''
      ];

    case 'projects':
      return [
        `┌─ Projects (${projects.length}) ──────────────────────`,
        ...projects.flatMap((p, i) => [
          `│`,
          `│  [0${i + 1}] ${p.name}`,
          `│       ${p.title}`,
          `│       Category : ${p.category}`,
          `│       Stack    : ${p.stack.join(', ')}`,
          `│       Metrics  : ${p.metrics.map(m => `${m.label}: ${m.value}`).join(' · ')}`,
          `│       Repo     : ${p.repo}`,
          `│       ─────`,
          `│       ${p.about.slice(0, 160)}…`,
        ]),
        `│`,
        `└──────────────────────────────────────────────`,
        ''
      ];

    case 'experience':
      return [
        `┌─ Experience (${experiences.length}) ─────────────────────`,
        ...experiences.flatMap((exp) => [
          `│`,
          `│  ◆ ${exp.company}`,
          `│    ${exp.role} · ${exp.period} (${exp.duration})`,
          `│    ${exp.description.slice(0, 140)}…`,
          `│    Tech: ${exp.tech.join(', ')}`,
          `│    Highlights:`,
          ...exp.points.map(pt => `│      ✓ ${pt.slice(0, 120)}${pt.length > 120 ? '…' : ''}`),
        ]),
        `│`,
        `└──────────────────────────────────────────────`,
        ''
      ];

    case 'skills':
      return [
        `┌─ Technical Skills ────────────────────────────`,
        ...skillCategories.flatMap((cat) => [
          `│`,
          `│  ▸ ${cat.name}`,
          ...cat.skills.map(s => `│      • ${s.name}`),
        ]),
        `│`,
        `└──────────────────────────────────────────────`,
        ''
      ];

    case 'education':
      return [
        `┌─ Education ───────────────────────────────────`,
        ...educationHistory.flatMap((edu) => [
          `│`,
          `│  ◆ ${edu.degree}`,
          `│    ${edu.institution}`,
          `│    ${edu.specialization} · ${edu.grade}`,
          `│    ${edu.period} · ${edu.location}`,
          `│    Status: ${edu.status}`,
        ]),
        `│`,
        `├─ Achievements ─────────────────────────────────`,
        ...accomplishments.flatMap((ach) => [
          `│`,
          `│  ★ ${ach.title}`,
          `│    ${ach.issuer} · ${ach.period}`,
          `│    ${ach.desc.slice(0, 130)}${ach.desc.length > 130 ? '…' : ''}`,
        ]),
        `│`,
        `└──────────────────────────────────────────────`,
        ''
      ];

    case 'contact':
      return [
        `┌─ Contact ─────────────────────────────────────`,
        `│`,
        `│  ✉  Email    : ${personalInfo.email}`,
        `│  📱 Phone    : ${personalInfo.phone}`,
        `│  🔗 GitHub   : ${personalInfo.github}`,
        `│  🔗 LinkedIn : ${personalInfo.linkedin}`,
        `│  🔗 LeetCode : ${personalInfo.leetcode}`,
        `│  📍 Location : ${personalInfo.location}`,
        `│`,
        `└──────────────────────────────────────────────`,
        ''
      ];

    default:
      return null;
  }
}

const HELP_TEXT = [
  '  Available commands:',
  '',
  '  about        — Personal profile & summary',
  '  projects     — Detailed project case studies',
  '  experience   — Internships & work history',
  '  skills       — Technical skill matrix',
  '  education    — Academics & achievements',
  '  contact      — Contact channels',
  '  resume       — Download résumé (opens new tab)',
  '  clear        — Clear console output',
  '  exit         — Close console',
  ''
];

export function PortfolioConsole({ open, onClose, dark }) {
  const [lines, setLines] = useState([...WELCOME]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open && outputRef.current) outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [lines, open]);

  // Reset lines when console closes so it starts fresh next time
  useEffect(() => {
    if (!open) {
      setLines([...WELCOME]);
      setInput('');
    }
  }, [open]);

  if (!open) return null;

  const run = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    const next = [`aksh@portfolio:~$ ${input.trim()}`];

    if (!command) {
      setLines((current) => [...current, '']);
      setInput('');
      return;
    }

    if (command === 'help') {
      next.push(...HELP_TEXT);
    } else if (command === 'resume') {
      next.push('  ↗ Opening résumé in new tab…', '');
      window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
    } else if (command === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (command === 'exit') {
      onClose();
      return;
    } else {
      const info = getSectionInfo(command);
      if (info) {
        next.push('', ...info);
      } else {
        next.push(`  Command not found: "${command}". Type help for available commands.`, '');
      }
    }

    setLines((current) => [...current, '', ...next]);
    setInput('');
  };

  return (
    <div className="vp-console-backdrop" role="presentation" onMouseDown={onClose}>
      <section className={`vp-console ${dark ? 'vp-console--dark' : ''}`} role="dialog" aria-modal="true" aria-label="Portfolio console" onMouseDown={(event) => event.stopPropagation()}>
        <header><div><span /><span /><span /></div><strong>portfolio console</strong><button type="button" onClick={onClose} aria-label="Close console"><X size={18} /></button></header>
        <div className="vp-console-output" ref={outputRef}>{lines.map((line, index) => <p key={`${line}-${index}`}>{line || ' '}</p>)}</div>
        <form onSubmit={run}><span>›</span><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type a command…" autoComplete="off" /><kbd>ESC</kbd></form>
      </section>
    </div>
  );
}
