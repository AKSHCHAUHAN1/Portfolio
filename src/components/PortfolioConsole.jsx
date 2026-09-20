import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { personalInfo, projects } from '../utils/data';

const initialLines = [
  'aksh@portfolio:~$ status',
  'Portfolio console ready.',
  'Type help to see available commands.'
];

const sectionCommands = {
  projects: 'work',
  experience: 'experience',
  skills: 'skills',
  education: 'education',
  contact: 'contact'
};

export function PortfolioConsole({ open, onClose, dark }) {
  const [lines, setLines] = useState(initialLines);
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

  if (!open) return null;

  const run = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    const next = [`aksh@portfolio:~$ ${input.trim()}`];

    if (command === 'help') {
      next.push('Commands: projects, experience, skills, education, contact, resume, about, clear, exit');
    } else if (command === 'about') {
      next.push(`${personalInfo.name} — ${personalInfo.role}`, personalInfo.summary);
    } else if (command === 'resume') {
      next.push('Opening résumé…');
      window.open(personalInfo.resumeUrl, '_blank', 'noopener,noreferrer');
    } else if (command === 'projects') {
      next.push(...projects.map((project, index) => `${index + 1}. ${project.name} — ${project.category}`));
      document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionCommands[command]) {
      next.push(`Opening ${command}…`);
      document.querySelector(`#${sectionCommands[command]}`)?.scrollIntoView({ behavior: 'smooth' });
    } else if (command === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (command === 'exit') {
      onClose();
      return;
    } else if (command) {
      next.push(`Command not found: ${command}. Type help.`);
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
