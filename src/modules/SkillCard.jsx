import { motion } from 'framer-motion';

export function SkillCard({ name, icon: Icon, delay = 0, isHovered = false, onHoverStart, onHoverMove, onHoverEnd }) {
  return (
    <motion.div
      className={`skill-tactical-card${isHovered ? ' is-hovered' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={onHoverStart}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      <div className="skill-tactical-card__header">
        <div className="skill-tactical-card__title">
          {Icon ? <Icon size={16} strokeWidth={2.25} aria-hidden="true" /> : null}
          <h3>{name}</h3>
        </div>
        <span className="skill-tactical-card__indicator" aria-hidden="true" />
      </div>

      <div className="skill-tactical-card__corner skill-tactical-card__corner--tl" />
      <div className="skill-tactical-card__corner skill-tactical-card__corner--br" />
    </motion.div>
  );
}
