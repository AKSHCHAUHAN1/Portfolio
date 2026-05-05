import { motion } from 'framer-motion';
import { useScrambleText } from '../hooks/useScrambleText';

export function SectionHeader({ sector, title, accent, copy, className = '' }) {
  const scrambled = useScrambleText(title);
  const parts = accent ? scrambled.split(accent) : [scrambled];
  const sectorLabel = sector ? `SECTOR_${sector}` : 'CORE_MODULE';

  return (
    <motion.header
      className={`section-header ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <p className="hud-eyebrow">
        <span className="eyebrow-square" /> 
        {'SYS.LOC // '}
        {sectorLabel}
        {' // ACTIVE'}
      </p>
      <h1>
        {accent && parts.length > 1 ? (
          <>
            {parts[0]}
            <span>{accent}</span>
            {parts.slice(1).join(accent)}
          </>
        ) : (
          scrambled
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
