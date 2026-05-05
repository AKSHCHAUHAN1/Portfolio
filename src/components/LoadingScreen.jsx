import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TerminalSquare, Circle } from 'lucide-react';

const LOGS = [
  { status: 'OK', text: 'Kernel loaded successfully.', color: 'text-[#007f80]' },
  { status: 'OK', text: 'Mounting root filesystem...', color: 'text-[#007f80]' },
  { status: 'OK', text: 'Initializing hardware abstraction layer.', color: 'text-[#007f80]' },
  { status: 'INFO', text: 'Checking network interfaces (eth0, wlan0)...', color: 'text-muted', textColor: 'text-muted' },
  { status: 'OK', text: 'Secure connection established.', color: 'text-[#007f80]' },
  { status: 'WARN', text: 'Non-critical sensor module offline. Bypassing.', color: 'text-[#ffb875]' },
  { status: 'INFO', text: 'Verifying biometric clearance data...', color: 'text-muted', textColor: 'text-muted' }
];

export function LoadingScreen({ onComplete }) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reveal logs one by one
    if (currentLogIndex < LOGS.length) {
      const timer = setTimeout(() => {
        setCurrentLogIndex(prev => prev + 1);
        setProgress(Math.floor(((currentLogIndex + 1) / LOGS.length) * 78));
      }, Math.random() * 400 + 200);
      return () => clearTimeout(timer);
    } else {
      // After logs finish, wait a bit then complete
      const finishTimer = setTimeout(() => {
        onComplete();
      }, 1500);
      return () => clearTimeout(finishTimer);
    }
  }, [currentLogIndex, onComplete]);

  return (
    <AnimatePresence>
      <motion.div 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] bg-[#0A0A0A] font-mono text-xs flex items-center justify-center overflow-hidden"
      >
        {/* Background Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #353535 1px, transparent 1px), linear-gradient(to bottom, #353535 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Top Left */}
        <div className="absolute top-6 left-8 text-[#bec7d3] tracking-widest leading-relaxed">
          LAT/LON: 34.0522° N, 118.2437° W<br/>
          UPLINK: ENCRYPTED // AES-256
        </div>

        {/* Top Right */}
        <div className="absolute top-6 right-8 text-[#bec7d3] tracking-widest leading-relaxed text-right">
          SYS.TIME: 14:02:45.998Z<br/>
          BATTERY: OPTIMAL [98%]
        </div>

        {/* Center Container */}
        <div className="relative w-full max-w-[700px] border border-[#2a2a2a] bg-[#131313]/80 backdrop-blur-sm p-10 flex flex-col items-center">
          
          <Shield className="w-12 h-12 text-[#00d8d8] mb-4" strokeWidth={1.5} />
          
          <h1 className="text-5xl font-bold text-[#00d8d8] tracking-tight mb-2 heading-glow" style={{ textShadow: '0 0 15px rgba(0,216,216,0.6)' }}>
            SYSTEM BOOT
          </h1>
          
          <div className="text-[#bec7d3] tracking-[0.2em] mb-6">
            AKSH CHAUHAN V1.0 INITIALIZATION SEQUENCE
          </div>

          <div className="w-24 h-[1px] bg-[#00d8d8] mb-10" />

          {/* Terminal Box */}
          <div className="w-full border border-[#2a2a2a] bg-[#0A0A0A] p-4 relative mb-6">
            <TerminalSquare className="absolute top-2 right-2 w-4 h-4 text-[#88929d]" strokeWidth={1.5} />
            
            <div className="flex flex-col gap-1.5 text-[13px] leading-tight min-h-[160px]">
              {LOGS.slice(0, currentLogIndex).map((log, i) => (
                <div key={i} className={`flex gap-2 ${log.textColor || 'text-[#e4e2e1]'}`}>
                  <span className={log.color}>[{log.status}]</span>
                  <span>{log.text}</span>
                </div>
              ))}
              
              {currentLogIndex === LOGS.length && (
                <div className="flex gap-2 text-[#00d8d8] mt-2">
                  <span className="w-2.5 h-4 bg-[#00d8d8] animate-blink inline-block translate-y-0.5" />
                  <span>Awaiting authorization token...</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress */}
          <div className="w-full mb-8">
            <div className="flex justify-between text-[#e4e2e1] tracking-widest font-bold mb-2">
              <span>AWAITING FINAL CLEARANCE</span>
              <span>{progress}%</span>
            </div>
            <div className="h-4 border border-[#2a2a2a] p-[2px] flex gap-[2px]">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-full flex-1 ${i < Math.floor(progress/10) ? 'bg-[#00d8d8]' : 'bg-[#2a2a2a]'}`}
                />
              ))}
            </div>
          </div>

          {/* Status Indicators */}
          <div className="w-full flex justify-between items-center text-[#bec7d3] tracking-widest text-[11px] px-4 border-t border-[#2a2a2a] pt-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#007f80] shadow-[0_0_8px_#007f80]" />
              SECURE_LINK
            </div>
            <div className="h-3 w-[1px] bg-[#353535]" />
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d8d8] shadow-[0_0_8px_#00d8d8]" />
              DATA_STREAM
            </div>
            <div className="h-3 w-[1px] bg-[#353535]" />
            <div className="flex items-center gap-2 text-[#88929d]">
              <Circle className="w-3 h-3" strokeWidth={2} />
              MANUAL_OVERRIDE
            </div>
          </div>

        </div>

        {/* Bottom Standby */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 text-[#88929d] tracking-widest">
          <div className="w-[1px] h-6 bg-[#353535]" />
          STANDBY
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
