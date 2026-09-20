import { Download, Github, Linkedin, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { PageShell } from '../components/PageShell';
import { HudPanel } from '../modules/HudPanel';
import { SectionHeader } from '../modules/SectionHeader';
import { RadarAnimation } from '../modules/RadarAnimation';
import { personalInfo } from '../utils/data';

const nodes = [
  ['GitHub', 'View my code', Github, personalInfo.github],
  ['LinkedIn', 'Connect professionally', Linkedin, personalInfo.linkedin],
  ['Email', personalInfo.email, Mail, `mailto:${personalInfo.email}`]
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
      setStatus('Please complete each field with a valid email address and a short message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus('Opening your email app with the message pre-filled.');
    event.currentTarget.reset();
  };

  return (
    <PageShell className="contact-page">
      <div className="contact-header-flex">
        <SectionHeader
          sector="06"
          title="Let’s build something useful."
          accent="Contact"
          copy="I’m open to internship, graduate, and engineering collaboration opportunities."
        />
        <div className="contact-header-radar">
          <RadarAnimation />
        </div>
      </div>
      <section className="contact-grid">
        <HudPanel className="contact-form-panel" meta="OP-REQ-007">
          <h2>Send a message</h2>
          <p>Tell me a little about the role, project, or problem you’re working on.</p>
          <form onSubmit={submit}>
            <label>
              <span>Name</span>
              <input name="name" placeholder="Your name" autoComplete="name" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" placeholder="you@example.com" autoComplete="email" />
            </label>
            <label className="payload">
              <span>Message</span>
              <textarea name="message" placeholder="How can I help?" rows="5" />
            </label>
            <button className="btn btn--primary" type="submit"><Send size={16} /> Send message</button>
          </form>
          {status && <pre className="submit-status">{status}<span className="block-cursor" /></pre>}
        </HudPanel>
        <aside className="contact-side">
          <a className="resume-node" href="/resume.pdf" download>
            <Download size={34} />
            <strong>Download resume</strong>
            <span>PDF · Experience, projects & skills</span>
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
