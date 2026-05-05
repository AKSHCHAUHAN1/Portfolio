import { motion } from 'framer-motion';

export function PageShell({ children, className = '' }) {
  return (
    <motion.main
      className={`page-shell ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.main>
  );
}
