import { useEffect, useMemo, useState } from 'react';
import { FileCode2, Folder, FolderOpen } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { HudPanel } from '../modules/HudPanel';
import { SectionHeader } from '../modules/SectionHeader';
import { projects } from '../utils/data';

export default function Projects() {
  const [coverRevealed, setCoverRevealed] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.localStorage.getItem('projects-cover-revealed') === 'true';
  });
  const [selectedId, setSelectedId] = useState(projects[0].id);
  const [intelOpen, setIntelOpen] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.localStorage.getItem('projects-cover-revealed') === 'true';
  });
  const [isOpening, setIsOpening] = useState(false);
  const [glow, setGlow] = useState({ x: '50%', y: '35%' });
  const selected = useMemo(() => projects.find((project) => project.id === selectedId) || projects[0], [selectedId]);

  useEffect(() => {
    if (!coverRevealed || typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem('projects-cover-revealed', 'true');
  }, [coverRevealed]);

  const selectProject = (id) => {
    setSelectedId(id);
    setIntelOpen(coverRevealed);
    setIsOpening(false);
  };

  const openIntel = () => {
    if (coverRevealed) {
      setIntelOpen(true);
      return;
    }

    if (intelOpen || isOpening) {
      return;
    }

    setIsOpening(true);
    window.setTimeout(() => {
      setIntelOpen(true);
      setCoverRevealed(true);
    }, 90);
    window.setTimeout(() => {
      setIsOpening(false);
    }, 660);
  };

  return (
    <PageShell>
      <SectionHeader
        sector="04"
        title="DEPLOYMENT HISTORY"
        accent="HISTORY"
        copy="LOG OF SUCCESSFUL OPERATIONS AND CRITICAL INFRASTRUCTURE IMPLEMENTATIONS. DATA VERIFIED AND TIMESTAMPED."
      />
      <section className="projects-browser">
        <div className="sector-line">
          <span>DIRECTORY: /ROOT/PROJECTS</span>
          <strong>{selected.category}</strong>
        </div>
        <div className="projects-grid">
          <HudPanel className="directory-panel project-tree-panel" label="SYSTEM_TREE" as="div">
            <div className="project-tree">
              <div className="project-tree__branch is-root">
                <button type="button" className="is-active">
                  <FolderOpen size={16} /> ROOT
                </button>
                <div className="project-tree__children">
                  <button type="button">
                    <Folder size={16} /> BIN
                  </button>
                  <button type="button" className="is-active">
                    <FolderOpen size={16} /> PROJECTS
                  </button>
                  <div className="project-tree__children project-tree__children--files">
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        type="button"
                        className={project.id === selectedId ? 'is-active' : ''}
                        onClick={() => selectProject(project.id)}
                      >
                        <FileCode2 size={14} /> {project.name}
                      </button>
                    ))}
                  </div>
                  <button type="button">
                    <Folder size={16} /> SYS
                  </button>
                </div>
              </div>
            </div>
          </HudPanel>

          <HudPanel className="project-inspector" as="div" label="FILE_INSPECTOR_ACTIVE">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                className={`project-inspector__content ${intelOpen || coverRevealed ? 'is-open' : ''}`}
                style={{ '--glow-x': glow.x, '--glow-y': glow.y }}
                initial={{ opacity: 0, x: 16, rotateY: -14, rotateX: 10, scale: 0.96 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  rotateX: 0,
                  scale: 1,
                }}
                exit={{ opacity: 0, x: -16, rotateY: 8, rotateX: -6, scale: 0.96 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                onMouseMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
                  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
                  setGlow({ x: `${x}%`, y: `${y}%` });
                }}
                onMouseLeave={() => setGlow({ x: '50%', y: '35%' })}
              >
                <div className="project-inspector__book" aria-live="polite">
                  {!coverRevealed && (
                    <motion.button
                      className="project-inspector__file project-inspector__cover"
                      type="button"
                      aria-label={`Open ${selected.name} project details`}
                      onClick={openIntel}
                      animate={
                        intelOpen
                          ? { rotateY: -112, x: -12, z: 36, opacity: 0.42, filter: 'brightness(0.64)' }
                          : { rotateY: isOpening ? -34 : 0, x: 0, z: 0, opacity: 1, filter: 'brightness(1)' }
                      }
                      transition={{ duration: intelOpen ? 0.62 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={!intelOpen ? { rotateY: -8, rotateX: 2, scale: 1.012 } : undefined}
                      whileTap={!intelOpen ? { rotateY: -18, scale: 0.985 } : undefined}
                    >
                      <div className="project-inspector__stamp">CONFIDENTIAL</div>
                      <span className="project-inspector__open-hint">CLICK TO OPEN</span>
                    </motion.button>
                  )}

                  <AnimatePresence>
                    {(intelOpen || coverRevealed) && (
                      <motion.article
                        className="project-inspector__detail project-intel-card project-intel-card--book"
                        data-cursor-hidden="true"
                        initial={{ opacity: 0, x: 26, scale: 0.97, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: 18, scale: 0.98, filter: 'blur(2px)' }}
                        transition={{ duration: 0.42, delay: coverRevealed ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="project-intel-card__header">
                          <div>
                            <span>{selected.type}</span>
                            <h2>{selected.name}</h2>
                          </div>
                        </div>

                        <div className="project-intel-card__body">
                          <div className={`project-intel-card__visual project-intel-card__visual--${selected.image}`}>
                            {selected.previewImage ? (
                              <img
                                className={`project-intel-card__image project-intel-card__image--${selected.id}`}
                                src={selected.previewImage}
                                alt={`${selected.name} preview`}
                                loading="lazy"
                              />
                            ) : (
                              <span>{selected.screenshotLabel || 'SCREENSHOT'}</span>
                            )}
                          </div>

                          <div className="project-intel-card__content">
                            <div className="project-intel-card__stack">
                              {selected.stack.map((item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </div>

                            <p>{selected.about || selected.description}</p>

                            <div className="project-intel-card__highlights">
                              {selected.highlights.map((item) => (
                                <div key={item}>
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>

                            <a className="btn btn--ghost btn--wide" href={selected.github} target="_blank" rel="noreferrer">
                              OPEN GITHUB
                            </a>
                          </div>
                        </div>
                      </motion.article>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </HudPanel>
        </div>
      </section>
    </PageShell>
  );
}
