import { motion } from 'framer-motion';

export function SegmentedBar({ value = 0, segments = 10, className = '' }) {
  const lit = Math.round((Math.max(0, Math.min(100, value)) / 100) * segments);

  return (
    <div className={`segmented-bar ${className}`} aria-label={`${value}%`}>
      {Array.from({ length: segments }).map((_, index) => {
        const isLit = index < lit;
        const isLastLit = index === lit - 1;
        
        return (
          <motion.span
            key={index}
            className={isLit ? 'is-lit' : ''}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isLit ? { 
              opacity: isLastLit ? [0, 1, 1, 0, 1] : 1,
              scaleX: 1 
            } : {
              opacity: 0.2,
              scaleX: 1
            }}
            transition={{ 
              opacity: isLastLit ? {
                duration: 1.8, // Slower, constant blink
                times: [0, 0.1, 0.5, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 0,
                delay: index * 0.22 // Slower fill effect
              } : {
                duration: 0.2,
                delay: index * 0.22
              },
              scaleX: {
                duration: 0.2,
                delay: index * 0.22
              }
            }}
          />
        );
      })}
    </div>
  );
}
