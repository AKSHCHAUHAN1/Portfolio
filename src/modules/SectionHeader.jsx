import { motion } from 'framer-motion';

export function SectionHeader({ title, accent, copy, className = '' }) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <motion.header
      className={`section-header ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="hud-eyebrow">
        <span className="eyebrow-square" /> Portfolio
      </p>
      <h1>
        {accent && parts.length > 1 ? (
          <>
            {parts[0]}
            <span>{accent}</span>
            {parts.slice(1).join(accent)}
          </>
        ) : (
          title
        )}
      </h1>
      {copy && (
        <div className="section-header__copy-wrapper">
          <div className="section-header__accent-bar" />
          <p className="section-header__copy">{copy}</p>
        </div>
      )}
    </motion.header>
  );
}
