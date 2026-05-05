import { motion } from 'framer-motion';

export function RadarAnimation() {
  return (
    <div className="radar-container">
      <svg viewBox="0 0 400 400" className="radar-svg">
        <defs>
          <radialGradient id="radar-sweep" cx="200" cy="200" r="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(0, 156, 157, 0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Grid Background */}
        <circle cx="200" cy="200" r="180" fill="rgba(0, 216, 216, 0.03)" />
        
        {/* Radar Rings */}
        {[180, 135, 90, 45].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="rgba(0, 216, 216, 0.15)" strokeWidth="1" />
        ))}

        {/* Crosshair Lines */}
        <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(0, 216, 216, 0.1)" strokeWidth="1" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(0, 216, 216, 0.1)" strokeWidth="1" />
        
        {/* Dynamic Targets (Blinking) */}
        <motion.circle
          cx="280" cy="120" r="3" fill="#00d8d8"
          animate={{ opacity: [0, 1, 0.2, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
        />
        <motion.circle
          cx="140" cy="260" r="3" fill="#ff4444"
          animate={{ opacity: [0, 1, 0.2, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.circle
          cx="230" cy="240" r="2.5" fill="var(--primary-hot)"
          animate={{ opacity: [0, 1, 0.2, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Sweep Arc */}
        <path
          d="M 200 200 L 200 20 A 180 180 0 0 1 327 73 Z"
          fill="url(#radar-sweep)"
          className="radar-sweep-rotating"
        />

        {/* Scanning Sweep Line */}
        <line
          x1="200" y1="200" x2="200" y2="20"
          stroke="var(--primary-hot)"
          strokeWidth="2.5"
          className="radar-sweep-rotating"
        />
        
        {/* Outer Frame */}
        <circle cx="200" cy="200" r="190" fill="none" stroke="var(--primary)" strokeWidth="2" strokeDasharray="10 5" opacity="0.3" />
      </svg>
      <div className="radar-scanner-glow" />
    </div>
  );
}
