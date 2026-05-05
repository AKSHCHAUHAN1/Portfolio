import { Download, FileTerminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { FaceScan } from '../modules/FaceScan';
import { SectionHeader } from '../modules/SectionHeader';

export default function Home({ onNavigate }) {
  return (
    <PageShell className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <SectionHeader
            sector="01"
            title="VELOCITY"
            copy={
              <>
                Welcome to my operational interface. I am <span className="hero-name-highlight">Aksh Chauhan</span>, a software engineer specializing in scalable applications and robust digital infrastructure. Systems are online and rendering with precision.
              </>
            }
          />
          <div className="action-row">
            <a className="btn btn--primary" href="/resume.pdf" download>
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
            <button className="btn btn--ghost" type="button" onClick={() => onNavigate('blog')}>
              <FileTerminal size={16} />
              VIEW LOGS
            </button>
          </div>
        </div>
        <motion.div
          className="home-hero__scan"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <div className="bracket-frame">
            <FaceScan />
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
