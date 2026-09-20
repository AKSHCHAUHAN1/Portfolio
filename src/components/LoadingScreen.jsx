import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, Cpu, FastForward } from 'lucide-react';
import { personalInfo } from '../utils/data';

const BOOT_STEPS = [
  'INITIALIZING HIGH-AVAILABILITY CLUSTER...',
  'CONTAINER ENGINE (DOCKER / K8S) [ONLINE]',
  'AWS VPC & ALB ROUTING [VERIFIED]',
  'OPERATOR CREDENTIALS: AKSH CHAUHAN [AUTHENTICATED]'
];

export function LoadingScreen({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    // Check if session already initialized
    if (sessionStorage.getItem('portfolio_booted') === 'true') {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < BOOT_STEPS.length - 1) {
          setProgress(Math.round(((prev + 2) / BOOT_STEPS.length) * 100));
          return prev + 1;
        }
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem('portfolio_booted', 'true');
          onComplete();
        }, 180);
        return prev;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('portfolio_booted', 'true');
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-0 z-[9999] bg-[#070B14] font-mono text-xs flex items-center justify-center overflow-hidden p-6 cursor-pointer"
        onClick={handleSkip}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1527] via-[#070B14] to-[#070B14] opacity-80" />
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(100, 255, 218, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 255, 218, 0.15) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Center Modal Card */}
        <div className="relative w-full max-w-[560px] border border-[#1E2D4A] bg-[#0D1527]/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-[#1E2D4A] pb-4 mb-6">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-[13px]">
              <Cpu size={16} className="text-primary animate-pulse" />
              <span>MISSION CONTROL // SYSTEM_INIT</span>
            </div>
            <button
              type="button"
              onClick={handleSkip}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors px-2.5 py-1 rounded bg-[#111C35] border border-[#1E2D4A]"
            >
              <span>SKIP</span>
              <FastForward size={12} />
            </button>
          </div>

          {/* Identity highlight */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 text-primary mb-3 shadow-glow">
              <ShieldCheck size={24} />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wider mb-1">
              {personalInfo.name.toUpperCase()}
            </h1>
            <p className="text-xs text-primary tracking-widest">
              {personalInfo.role.toUpperCase()}
            </p>
          </div>

          {/* Terminal Step Output */}
          <div className="w-full bg-[#070B14] border border-[#1E2D4A] rounded-xl p-4 font-mono text-[11px] mb-6 space-y-1.5 min-h-[105px]">
            {BOOT_STEPS.slice(0, stepIndex + 1).map((log, i) => (
              <div key={i} className="flex items-center gap-2 text-text/90">
                <span className="text-primary font-bold">&gt;</span>
                <span className={i === stepIndex ? 'text-primary' : 'text-muted'}>{log}</span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-bold tracking-widest text-muted">
              <span>INITIALIZATION PROGRESS</span>
              <span className="text-primary">{progress}%</span>
            </div>
            <div className="w-full h-1.5 bg-[#111C35] rounded-full overflow-hidden border border-[#1E2D4A]">
              <div
                className="h-full bg-gradient-to-r from-primary to-cyan transition-all duration-150 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-between text-[10px] text-subtle tracking-widest pt-4 mt-6 border-t border-[#1E2D4A]">
            <span>ENV: PRODUCTION // STABLE</span>
            <span>CLICK ANYWHERE TO ENTER</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
