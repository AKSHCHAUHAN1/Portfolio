import { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Menu, Moon, Sun, TerminalSquare, X } from 'lucide-react';
import { personalInfo } from '../utils/data';

const links = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Education', '#education']
];

export function Header({ dark, onThemeToggle, onConsoleOpen }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`vp-nav ${scrolled ? 'vp-nav--scrolled' : ''}`}>
      <a className="vp-brand" href="#top" onClick={() => setOpen(false)} aria-label="Aksh Chauhan — home">
        <span>AC</span><strong>Aksh Chauhan</strong>
      </a>
      <nav className="vp-nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="vp-nav-actions">
        <button type="button" className="vp-theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`} title="Change theme">
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a className="vp-nav-resume" href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf"><Download size={15} /> Résumé</a>
        <button type="button" className="vp-console-trigger" onClick={onConsoleOpen}><TerminalSquare size={15} /> Console</button>
        <a className="vp-nav-contact" href="#contact">Contact <ArrowUpRight size={15} /></a>
        <button type="button" className="vp-menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && <nav className="vp-mobile-menu" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <button type="button" onClick={() => { setOpen(false); onConsoleOpen(); }}>Open console</button>
        <a href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf">Download résumé</a>
      </nav>}
    </header>
  );
}
