import { useTypewriter } from '../hooks/useTypewriter';

export function TerminalText({ text, className = '', speed = 22, delay = 0 }) {
  const output = useTypewriter(text, { speed, delay });
  return (
    <pre className={`terminal-text ${className}`}>
      {output}
      <span className="block-cursor" />
    </pre>
  );
}
