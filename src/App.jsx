import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Header } from './components/Header';
import { TerminalOverlay } from './components/TerminalOverlay';
import { CrosshairCursor } from './systems/CrosshairCursor';
import { GridBackground } from './systems/GridBackground';
import { ScanlineOverlay } from './systems/ScanlineOverlay';
import { navItems } from './utils/data';

const pages = {
  home: lazy(() => import('./pages/Home')),
  about: lazy(() => import('./pages/About')),
  skills: lazy(() => import('./pages/Skills')),
  projects: lazy(() => import('./pages/Projects')),
  blog: lazy(() => import('./pages/Blog')),
  contact: lazy(() => import('./pages/Contact'))
};

function getInitialRoute() {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  return navItems.some((item) => item.id === hash) ? hash : 'home';
}

export default function App() {
  const [activeRoute, setActiveRoute] = useState(getInitialRoute);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const onHash = () => setActiveRoute(getInitialRoute());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((route) => {
    window.location.hash = route;
    setActiveRoute(route);
  }, []);

  const Page = useMemo(() => pages[activeRoute] || pages.home, [activeRoute]);

  return (
    <>
      <GridBackground />
      <ScanlineOverlay />
      <CrosshairCursor />
      {!booted ? (
        <LoadingScreen onComplete={() => setBooted(true)} />
      ) : (
        <div className="app-frame">
          <Header active={activeRoute} onNavigate={navigate} onTerminal={() => setTerminalOpen(true)} />
          <Suspense fallback={<div className="route-loading">LOADING_SECTOR<span className="block-cursor" /></div>}>
            <AnimatePresence mode="wait">
              <Page key={activeRoute} onNavigate={navigate} />
            </AnimatePresence>
          </Suspense>
        </div>
      )}
      <TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} onNavigate={navigate} />
    </>
  );
}
