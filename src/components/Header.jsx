import { Terminal } from 'lucide-react';
import { navItems } from '../utils/data';

export function Header({ active, onNavigate, onTerminal }) {
  return (
    <header className="app-header">
      <button className="brand" type="button" onClick={() => onNavigate('home')}>
        AKSH CHAUHAN
      </button>
      <nav className="nav-strip" aria-label="Primary sectors">
        {navItems.map((item) => (
          <button
            type="button"
            key={item.id}
            className={active === item.id ? 'is-active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button type="button" onClick={onTerminal} aria-label="Open terminal">
          <Terminal size={24} />
        </button>
      </div>
    </header>
  );
}
