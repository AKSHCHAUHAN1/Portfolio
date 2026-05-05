import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { blogPosts, projects, skills, terminalHelp } from '../utils/data';

const initialLines = [
  'SYSTEM SEQUENCE...',
  'LOADING KERNEL MODULES... [OK]',
  'MOUNTING FILESYSTEMS... [OK]',
  'PINGING NETWORK INTERFACES... [OK]',
  'ESTABLISHING SECURE CONNECTION TO SECTOR_DEV_OPS... [OK]',
  'LOADING USER PROFILE... [OK]',
  '',
  'NOTICE: UNAUTHORIZED ACCESS ATTEMPT DETECTED.',
  'ARMING COUNTERMEASURES... [STANDBY]',
  '',
  "GRANTED ROOT ACCESS. TYPE 'help' FOR COMMANDS."
];

const ABOUT_DETAILS = [
  'OPERATOR_PROFILE // AKSH CHAUHAN',
  'INSTITUTION // UPES (UNIVERSITY OF PETROLEUM AND ENERGY STUDIES)',
  'CURRENT_CYCLE // SEMESTER 06',
  'SUMMARY // PASSIONATE SOFTWARE ENGINEER FOCUSED ON ROBUST, HIGH-PERFORMANCE WEB APPLICATIONS.',
  'SPECIALIZATION // SCALABLE ARCHITECTURES, MODERN UI SYSTEMS, CLEAN PROBLEM-SOLVING.'
];

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function findBlogByQuery(query) {
  const key = normalize(query);
  if (!key) {
    return null;
  }

  const numericId = Number.parseInt(key, 10);
  if (Number.isInteger(numericId) && numericId >= 1 && numericId <= blogPosts.length) {
    return blogPosts[numericId - 1];
  }

  return (
    blogPosts.find((post) => normalize(post.id) === key) ||
    blogPosts.find((post) => normalize(post.title) === key) ||
    blogPosts.find((post) => normalize(post.title).includes(key)) ||
    blogPosts.find((post) => key.includes(normalize(post.title))) ||
    null
  );
}

function getBlogAccessId(post) {
  return blogPosts.findIndex((item) => item.id === post.id) + 1;
}

function findProjectByQuery(query) {
  const key = normalize(query);
  if (!key) {
    return null;
  }

  const numericId = Number.parseInt(key, 10);
  if (Number.isInteger(numericId) && numericId >= 1 && numericId <= projects.length) {
    return projects[numericId - 1];
  }

  return (
    projects.find((project) => normalize(project.id) === key) ||
    projects.find((project) => normalize(project.name) === key) ||
    projects.find((project) => normalize(project.repo) === key) ||
    projects.find((project) => normalize(project.type) === key) ||
    projects.find((project) => normalize(project.category) === key) ||
    projects.find((project) => normalize(project.name).includes(key)) ||
    projects.find((project) => key.includes(normalize(project.name))) ||
    null
  );
}

function getProjectAccessId(project) {
  return projects.findIndex((item) => item.id === project.id) + 1;
}

function buildHelpLines() {
  return [
    'AVAILABLE COMMANDS:',
    ...terminalHelp.map(([cmd, desc]) => ({ type: 'help', cmd, desc })),
    '',
    'TIP: TYPE blog <id> OR project <id> FOR QUICK ACCESS.'
  ];
}

export function TerminalOverlay({ open, onClose, onNavigate }) {
  const [lines, setLines] = useState(initialLines);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);
  const [caretOffset, setCaretOffset] = useState(0);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const updateCaretPosition = () => {
    const inputEl = inputRef.current;
    if (!inputEl) {
      return;
    }

    const caretIndex = inputEl.selectionStart ?? inputEl.value.length;
    const textBeforeCaret = inputEl.value.slice(0, caretIndex);
    const style = window.getComputedStyle(inputEl);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) {
      setCaretOffset(0);
      return;
    }

    context.font = `${style.fontStyle} ${style.fontVariant} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    let width = context.measureText(textBeforeCaret).width;
    const letterSpacing = Number.parseFloat(style.letterSpacing);
    if (!Number.isNaN(letterSpacing) && textBeforeCaret.length > 1) {
      width += letterSpacing * (textBeforeCaret.length - 1);
    }

    setCaretOffset(width);
  };

  useEffect(() => {
    if (open) {
      focusInput();
      updateCaretPosition();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !bodyRef.current) {
      return;
    }

    bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    updateCaretPosition();
  }, [input, lines, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (!inputRef.current) {
        return;
      }

      const isTypingKey = event.key.length === 1 || event.key === 'Backspace' || event.key === 'Delete';
      const isControlKey = event.key === 'Enter' || event.key === 'ArrowUp' || event.key === 'ArrowDown';

      if (document.activeElement !== inputRef.current && (isTypingKey || isControlKey)) {
        focusInput();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (event) => {
    event.preventDefault();
    const raw = input.trim();
    const command = raw.toLowerCase();
    const next = [`devops-core:~$ ${raw}`];

    if (!raw) {
      setLines((existing) => [...existing, ...next]);
      setInput('');
      return;
    }

    setHistory((existing) => [...existing, raw]);
    setHistoryIndex(null);

    if (command === 'help') {
      next.push('', ...buildHelpLines());
    } else if (command === 'history') {
      if (!history.length) {
        next.push('HISTORY_EMPTY.');
      } else {
        next.push('COMMAND_HISTORY:');
        history.forEach((entry, index) => {
          next.push(`${index + 1}. ${entry}`);
        });
      }
    } else if (command === 'history clear' || command === 'clear history') {
      setHistory([]);
      setHistoryIndex(null);
      next.push('COMMAND_HISTORY_PURGED.');
    } else if (command === 'resume') {
      window.location.href = '/resume.pdf';
      next.push('DOWNLOADING DOSSIER... [OK]');
    } else if (command === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (command === 'exit' || command === 'quit') {
      next.push('TERMINAL SESSION CLOSED.');
      setLines((existing) => [...existing, '', ...next]);
      setInput('');
      onClose();
      return;
    } else if (command === 'show projects' || command === 'projects') {
      onNavigate('projects');
      next.push('ROUTING TO SECTOR_04...', '', 'PROJECT_ARCHIVE:');
      projects.forEach((project, index) => {
        next.push(`[ID:${index + 1}] ${project.name} (${project.category})`);
      });
      next.push('', 'TYPE project <id|name> TO OPEN A PROJECT.');
    } else if (command.startsWith('project ')) {
      const projectQuery = raw.slice(8).trim();
      const project = findProjectByQuery(projectQuery);
      if (!project) {
        next.push(`PROJECT_NOT_FOUND: ${projectQuery}`);
      } else {
        onNavigate('projects');
        next.push(
          `OPENING_PROJECT: ${project.name}`,
          '',
          `ACCESS_ID: ${getProjectAccessId(project)}`,
          `TITLE    : ${project.name}`,
          `TYPE     : ${project.type}`,
          `CATEGORY : ${project.category}`,
          `REPO     : ${project.repo}`,
          '',
          project.about || project.description,
          '',
          'STACK:',
          ...(project.stack ?? []).map((item) => `- ${item}`),
          '',
          'HIGHLIGHTS:',
          ...(project.highlights ?? []).map((item) => `- ${item}`),
          '',
          `GITHUB   : ${project.github}`
        );
      }
    } else if (command === 'show skills' || command === 'skills') {
      onNavigate('skills');
      next.push('ROUTING TO PROTOCOL_ARSENAL...', '', 'SKILL_MATRIX:');
      skills.forEach((skill, index) => next.push(`${index + 1}. ${skill.name} [${skill.level}%]`));
    } else if (command === 'show blogs' || command === 'blogs') {
      onNavigate('blog');
      next.push('ROUTING TO SECTOR_05...', '', 'BLOG_ARCHIVE:');
      blogPosts.forEach((post, index) => {
        next.push(`[ID:${index + 1}] ${post.title} (${post.date})`);
      });
      next.push('', 'TYPE blog <id> TO OPEN A BLOG.');
    } else if (command === 'about') {
      onNavigate('about');
      next.push('DISPLAYING OPERATOR PARAMETERS...', '', ...ABOUT_DETAILS);
    } else if (command.startsWith('blog ')) {
      const blogQuery = raw.slice(5).trim();
      const post = findBlogByQuery(blogQuery);
      if (!post) {
        next.push(`BLOG_NOT_FOUND: ${blogQuery}`);
      } else {
        onNavigate('blog');
        next.push(
          `OPENING_BLOG: ${post.title}`,
          '',
          `ACCESS_ID: ${getBlogAccessId(post)}`,
          `TITLE    : ${post.title}`,
          `TAG      : ${post.tag}`,
          `DATE     : ${post.date}`,
          `READ     : ${post.read}`,
          `ID       : ${post.id}`,
          '',
          ...(post.body ?? [post.summary])
        );
      }
    } else {
      const directBlog = findBlogByQuery(raw);
      if (directBlog) {
        onNavigate('blog');
        next.push(
          `OPENING_BLOG: ${directBlog.title}`,
          '',
          `ACCESS_ID: ${getBlogAccessId(directBlog)}`,
          `TITLE    : ${directBlog.title}`,
          `TAG      : ${directBlog.tag}`,
          `DATE     : ${directBlog.date}`,
          `READ     : ${directBlog.read}`,
          `ID       : ${directBlog.id}`,
          '',
          ...(directBlog.body ?? [directBlog.summary])
        );
      } else {
        next.push('ERR_UNKNOWN_COMMAND. TYPE help.');
      }
    }

    setLines((existing) => [...existing, '', ...next]);
    setInput('');
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      if (!history.length) {
        return;
      }

      event.preventDefault();
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
      return;
    }

    if (event.key === 'ArrowDown') {
      if (!history.length || historyIndex === null) {
        return;
      }

      event.preventDefault();
      if (historyIndex >= history.length - 1) {
        setHistoryIndex(null);
        setInput('');
        return;
      }

      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    }
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div
        className="terminal-window"
        onClick={(event) => {
          event.stopPropagation();
          focusInput();
        }}
      >
        <header>
          <strong>SYSTEM_TERMINAL // MISSION_CONTROL</strong>
          <div className="terminal-header-actions">
            <span className="terminal-status">STATUS: ONLINE <i aria-hidden="true" /></span>
            <button type="button" className="terminal-close" onClick={onClose} aria-label="Close terminal">
              <X size={28} />
            </button>
          </div>
        </header>
        <div className="terminal-body" ref={bodyRef}>
          {lines.map((line, index) => (
            <pre
              key={typeof line === 'string' ? `${line}-${index}` : `${line.type}-${line.cmd}-${index}`}
              className={typeof line === 'string' && line.startsWith('devops-core:~$') ? 'terminal-line--prompt' : ''}
            >
              {typeof line === 'string' ? (
                line
              ) : line.type === 'help' ? (
                <>
                  <span className="terminal-help__command">{line.cmd}</span>
                  <span className="terminal-help__description"> - {line.desc}</span>
                </>
              ) : (
                ''
              )}
            </pre>
          ))}
          <div className={`terminal-input-zone${lines.length === 0 ? ' terminal-input-zone--clean' : ''}`}>
            <div className="terminal-guide">
              GUIDE: help | about | skills | blogs | blog &lt;id&gt; | projects | project &lt;id&gt; | resume | history | clear | exit
            </div>
            <form onSubmit={submit}>
              <label>devops-core:~$</label>
              <div className="terminal-input-wrap">
                <input
                  ref={inputRef}
                  autoFocus
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  onKeyUp={updateCaretPosition}
                  onClick={updateCaretPosition}
                  onSelect={updateCaretPosition}
                />
                <span className="block-cursor terminal-caret" style={{ left: `${caretOffset}px` }} />
              </div>
            </form>
          </div>
        </div>
        <footer>© 2026 DEPLOY_LOG :: SYSTEM_STABLE <span>UPTIME_99.9 &nbsp; SECTOR: 07</span></footer>
      </div>
    </div>
  );
}
