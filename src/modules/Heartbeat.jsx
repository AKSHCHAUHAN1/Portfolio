import { motion } from 'framer-motion';

export function Heartbeat() {
  return (
    <div className="heartbeat" style={{ padding: 0, overflow: 'hidden' }}>
      <svg viewBox="0 0 340 92" aria-hidden="true" style={{ width: '100%', height: '100%', display: 'block' }}>
        <path 
          className="heartbeat__grid" 
          d="M0 46h340" 
          stroke="rgba(136, 146, 157, 0.18)"
          strokeWidth="1"
        />
        <motion.path
          className="heartbeat__line"
          d="M0 46H112l20-34 16 72 26-38h68l20-28 18 58 24-30h36"
          fill="none"
          stroke="#00d8d8"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5
          }}
        />
      </svg>
    </div>
  );
}
