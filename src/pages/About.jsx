import { Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { PageShell } from '../components/PageShell';
import { HudPanel } from '../modules/HudPanel';
import { Heartbeat } from '../modules/Heartbeat';
import { SegmentedBar } from '../modules/SegmentedBar';
import { StatusPill } from '../modules/StatusPill';
import { SectionHeader } from '../modules/SectionHeader';

export default function About() {
  return (
    <PageShell>
      <SectionHeader
        sector="02"
        title="THE BUILDER MINDSET"
        accent="MINDSET"
        copy="OPERATIONAL DOSSIER // ACCESS_LEVEL: ALPHA"
      />
      <div className="about-grid">
        <HudPanel className="about-portrait" label="ID: DEVOPS-OP-01" meta={<StatusPill />}>
          <div className="portrait-box">
            <span className="target-label">TARGET_LOCKED</span>
            <Spline className="portrait-spline" scene="https://prod.spline.design/T6dgmkJPV5TiOv2R/scene.splinecode" />
            <span className="data-stream">DATA_STREAM...</span>
          </div>
        </HudPanel>
        <HudPanel label="INSTITUTION_NODE" meta="01" delay={0.08}>
          <h2>UPES</h2>
          <p>University of Petroleum and Energy Studies (UPES) is a premier multidisciplinary university in India, renowned for its industry-aligned programs in engineering, management, law, and design.</p>
        </HudPanel>
        <HudPanel label="CURRENT_CYCLE" meta="02" delay={0.12}>
          <h2>SEMESTER 06</h2>
          <SegmentedBar value={74} segments={8} />
        </HudPanel>
        <HudPanel className="about-reliability" label="OPERATOR_PROFILE" meta="03" delay={0.16}>
          <div className="about-reliability-content">
            <div>
              <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                AKSH CHAUHAN
              </motion.h2>
              <p>I am a passionate software engineer focused on building robust, high-performance web applications. My expertise lies in designing scalable architectures, developing elegant user interfaces, and solving complex problems with clean code.</p>
            </div>
            <Heartbeat />
          </div>
        </HudPanel>
      </div>
      <div className="ticker-strip">
        <div className="ticker-strip__inner">
          {[
            'KUBERNETES', 'DOCKER', 'TERRAFORM', 'GITHUB ACTIONS', 
            'PROMETHEUS', 'INCIDENT RESPONSE', 'THREAT MODELING', 
            'TELEMETRY ANALYSIS', 'ANOMALY DETECTION', 'ZERO-TRUST ARCHITECTURE', 
            'SERVICE MESH', 'CI/CD AUTOMATION'
          ].map((item, index) => (
            <span key={index}>
              <Activity size={14} /> {`${item} //`}
            </span>
          ))}
          {/* Duplicate for infinite effect */}
          {[
            'KUBERNETES', 'DOCKER', 'TERRAFORM', 'GITHUB ACTIONS', 
            'PROMETHEUS', 'INCIDENT RESPONSE', 'THREAT MODELING', 
            'TELEMETRY ANALYSIS', 'ANOMALY DETECTION', 'ZERO-TRUST ARCHITECTURE', 
            'SERVICE MESH', 'CI/CD AUTOMATION'
          ].map((item, index) => (
            <span key={`dup-${index}`}>
              <Activity size={14} /> {`${item} //`}
            </span>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
