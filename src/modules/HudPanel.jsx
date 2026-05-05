import { motion } from 'framer-motion';

export function HudPanel({ children, className = '', label, meta, delay = 0, as = 'section' }) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      className={`hud-panel clip-chamfer ${className}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {(label || meta) && (
        <div className="hud-panel__bar">
          <span>{label}</span>
          <span>{meta}</span>
        </div>
      )}
      <div className="scan-pass" />
      {children}
    </Component>
  );
}
