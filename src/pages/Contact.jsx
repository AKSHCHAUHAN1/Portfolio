import { Download, Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { PageShell } from '../components/PageShell';
import { HudPanel } from '../modules/HudPanel';
import { SectionHeader } from '../modules/SectionHeader';
import { RadarAnimation } from '../modules/RadarAnimation';

const nodes = [
  ['NODE_01', 'GITHUB_REPO', Github, 'https://github.com'],
  ['NODE_02', 'LINKEDIN_NET', Linkedin, 'https://linkedin.com'],
  ['NODE_03', 'EMAIL_DIRECT', Mail, 'mailto:comms@devops.sys']
];

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();

    if (!name || !email.includes('@') || message.length < 8) {
      setStatus('[WARN] PAYLOAD_VALIDATION_FAILED. CHECK REQUIRED FIELDS.');
      return;
    }

    setStatus('[OK] TRANSMISSION_ACCEPTED. RESPONSE_DELTA: RAPID.');
    event.currentTarget.reset();
  };

  return (
    <PageShell className="contact-page">
      <div className="contact-header-flex">
        <SectionHeader
          sector="06"
          title="COMMUNICATION CHANNELS"
          accent="CHANNELS"
          copy="SYS.COMM // SECURE_CONNECTION_ESTABLISHED. EXPECT RAPID RESPONSE DELTA."
        />
        <div className="contact-header-radar">
          <RadarAnimation />
        </div>
      </div>
      <section className="contact-grid">
        <HudPanel className="contact-form-panel" meta="OP-REQ-007">
          <h2>INITIATE CONTACT</h2>
          <p>SECURE CHANNELS ARE OPEN. TRANSMIT PROTOCOLS FOR COLLABORATION, INQUIRIES, OR DEPLOYMENT DIRECTIVES. EXPECT RAPID RESPONSE DELTA.</p>
          <form onSubmit={submit}>
            <label>
              <span>ID_STRING</span>
              <input name="name" placeholder="ENTER_NAME" autoComplete="name" />
            </label>
            <label>
              <span>COMM_LINK</span>
              <input name="email" placeholder="ENTER_EMAIL@SYS.NET" autoComplete="email" />
            </label>
            <label className="payload">
              <span>PAYLOAD</span>
              <textarea name="message" placeholder="ENCODE_MESSAGE_HERE..." rows="5" />
            </label>
            <button className="btn btn--primary" type="submit"><Send size={16} /> TRANSMIT_DATA</button>
          </form>
          {status && <pre className="submit-status">{status}<span className="block-cursor" /></pre>}
        </HudPanel>
        <aside className="contact-side">
          <a className="resume-node" href="/resume.pdf" download>
            <Download size={34} />
            <strong>EXTRACT_RESUME</strong>
            <span>PDF_FORMAT // 2.4MB // V.9.2</span>
          </a>
          {nodes.map(([node, label, Icon, href]) => (
            <a className="link-node" href={href} target="_blank" rel="noreferrer" key={label}>
              <span>{node}</span>
              <strong>{label}</strong>
              <Icon size={32} />
            </a>
          ))}
        </aside>
      </section>
    </PageShell>
  );
}
