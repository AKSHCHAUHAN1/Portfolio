import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export function FaceScan({ dark = false }) {
  return (
    <div className={`face-scan ${dark ? 'face-scan--dark' : ''}`}>
      <div className="face-scan__grid" />
      <motion.div
        className="face-scan__beam"
        aria-hidden="true"
        initial={{ top: '-16%', opacity: 0 }}
        animate={{ top: '102%', opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          repeatDelay: 0.25,
          ease: 'linear',
          times: [0, 0.07, 0.9, 1],
        }}
      >
        <span className="face-scan__beam-glow" />
        <span className="face-scan__beam-core" />
      </motion.div>
      <svg viewBox="0 0 320 360" className="face-scan__avatar" role="img" aria-label="profile scan avatar">
        <defs>
          <linearGradient id="skin" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#c9c9c9" />
            <stop offset="1" stopColor="#555" />
          </linearGradient>
          <linearGradient id="shade" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#111" />
            <stop offset="1" stopColor="#2d2d2d" />
          </linearGradient>
        </defs>
        <path d="M100 302h120l18 48H82z" fill="url(#shade)" />
        <path d="M94 121c2-60 38-92 66-92s64 32 66 92l-9 92c-10 52-36 86-57 86s-47-34-57-86z" fill="url(#skin)" />
        <path d="M88 126c-8 8-10 37 5 55l12-8-1-48zM232 126c8 8 10 37-5 55l-12-8 1-48z" fill="#7c7c7c" />
        <path d="M89 121c3-57 38-104 75-104 42 0 75 36 83 88-21-22-45-32-72-29-21 2-40 9-59 20-9 6-17 14-27 25z" fill="#161616" />
        <path d="M88 127c30-21 62-25 98-19 24 5 39 2 58-3-1-25-21-53-47-69-32-20-77-12-101 19-16 21-19 44-8 72z" fill="#232323" />
        <path d="M120 156c18-8 33-8 49 0M180 156c16-8 31-8 49 0" stroke="#151515" strokeWidth="10" strokeLinecap="square" />
        <path d="M132 178h36M188 178h36" stroke="#0d0d0d" strokeWidth="5" />
        <path d="M168 166l-13 45 28-2z" fill="#777" opacity=".55" />
        <path d="M120 226c17 15 29 26 40 26s23-11 40-26c-10 46-26 62-40 62s-30-16-40-62z" fill="#121212" />
        <path d="M128 220c18-10 45-10 64 0-10 10-20 15-32 15s-22-5-32-15z" fill="#c2c2c2" opacity=".55" />
        <path d="M86 313c22-25 47-38 74-38s52 13 74 38" fill="none" stroke="#3b3b3b" strokeWidth="18" />
      </svg>
      <div className="face-scan__status">
        <ShieldCheck size={14} />
        TARGET_ACQUIRED
      </div>
    </div>
  );
}
