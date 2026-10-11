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
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 18);

        const sections = ['work', 'experience', 'skills', 'education', 'contact'];
        let current = '';
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 240 && rect.bottom >= 120) {
              current = `#${id}`;
            }
          }
        }
        setActiveSection(current);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={`vp-nav ${scrolled ? 'vp-nav--scrolled' : ''}`}>
      <a className="vp-brand" href="#top" onClick={() => setOpen(false)} aria-label="Aksh Chauhan — home">
        <span>AC</span><strong>Aksh Chauhan</strong>
      </a>
      <nav className="vp-nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={activeSection === href ? 'active' : ''}
            onClick={() => setActiveSection(href)}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="vp-nav-actions">
        <button
          type="button"
          className="vp-theme-toggle"
          onClick={onThemeToggle}
          aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}
          title="Change theme"
        >
          {dark ? <Sun size={15} /> : <Moon size={15} />}
        </button>
        <a className="vp-nav-resume" href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf">
          <Download size={14} /> Résumé
        </a>
        <button type="button" className="vp-console-trigger" onClick={onConsoleOpen}>
          <TerminalSquare size={14} /> Console
        </button>
        <a className="vp-nav-contact" href="#contact">
          Contact <ArrowUpRight size={14} />
        </a>
        <button
          type="button"
          className="vp-menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="vp-mobile-navigation"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav id="vp-mobile-navigation" className="vp-mobile-menu" aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={activeSection === href ? 'active' : ''}
              onClick={() => {
                setActiveSection(href);
                setOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button type="button" onClick={() => { setOpen(false); onConsoleOpen(); }}>Open console</button>
          <a href={personalInfo.resumeUrl} download="Aksh_Chauhan_Resume.pdf">Download résumé</a>
        </nav>
      )}
    </header>
  );
}
