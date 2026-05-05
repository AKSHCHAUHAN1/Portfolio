import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowUpRight, CalendarDays, Eye, FileText, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageShell } from '../components/PageShell';
import { HudPanel } from '../modules/HudPanel';
import { SectionHeader } from '../modules/SectionHeader';
import { blogPosts } from '../utils/data';

function parsePostDate(value) {
  return new Date(value.replaceAll('.', '-')).getTime();
}

export default function Blog() {
  const posts = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => parsePostDate(b.date) - parsePostDate(a.date))
      .map((post) => post);
  }, []);

  const featured = posts[0];
  const archive = posts.slice(1);
  const [openId, setOpenId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(2);
  const openPost = posts.find((post) => post.id === openId) || null;

  const navigateToBlog = (id) => {
    setOpenId(id);
    window.history.pushState({ blogPost: id }, '', window.location.hash);
  };

  const closeBlog = () => {
    if (window.history.state?.blogPost) {
      window.history.back();
    } else {
      setOpenId(null);
    }
  };

  useEffect(() => {
    const onPopState = (e) => {
      if (!e.state?.blogPost) {
        setOpenId(null);
      } else {
        setOpenId(e.state.blogPost);
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (!openId) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [openId]);

  if (!featured) {
    return null;
  }

  return (
    <PageShell className="blog-page">
      <SectionHeader
        sector="05"
        title="OPERATIONAL INTELLIGENCE"
        accent="INTELLIGENCE"
        copy="SYSTEM_LOGS // DEPLOYMENT_REPORTS // INCIDENT_ANALYSIS // OPEN ALL ENTRIES"
      />
      {openPost ? (
        <section className="blog-reading" aria-label="Open blog post">
          <button
            type="button"
            className="btn btn--ghost blog-reading__back"
            onClick={closeBlog}
          >
            <ArrowLeft size={16} /> BACK TO ALL POSTS
          </button>
          <HudPanel className="blog-reading__panel" as="article">
            <p className="blog-open__eyebrow"><Eye size={14} /> OPEN ENTRY // {openPost.tag}</p>
            <h1>{openPost.title}</h1>
            <div className="blog-reading__meta">
              <span><CalendarDays size={14} /> {openPost.date}</span>
              <span><Timer size={14} /> {openPost.read}</span>
              <span>ID: {openPost.id}</span>
            </div>
            <div className="blog-reading__content text-text/80 space-y-5">
              {openPost.body?.map((block, index) => {
                const animationProps = {
                  initial: { opacity: 0, y: 25 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-10%" },
                  transition: { duration: 0.5, ease: "easeOut" }
                };

                if (typeof block === 'string') {
                  if (block.startsWith('### ')) {
                    return <motion.h3 key={index} {...animationProps} className="text-2xl mt-8 mb-4 font-bold text-white">{block.replace('### ', '')}</motion.h3>;
                  }
                  if (block.startsWith('**') && block.includes('**', 2)) {
                    const boldText = block.substring(2, block.indexOf('**', 2));
                    const restText = block.substring(block.indexOf('**', 2) + 2);
                    return <motion.p key={index} {...animationProps}><strong>{boldText}</strong>{restText}</motion.p>;
                  }
                  return <motion.p key={index} {...animationProps}>{block}</motion.p>;
                }
                if (block.type === 'image') {
                  return <motion.img key={index} src={block.src} alt={block.alt} className="w-full my-6 rounded border border-line/50 object-cover" {...animationProps} />;
                }
                if (block.type === 'cta') {
                  if (block.parts) {
                    return (
                      <motion.p key={index} {...animationProps} className="text-white mt-8 mb-6">
                        {block.parts.map((p, i) =>
                          typeof p === 'string' ? (
                            <span key={i}>{p}</span>
                          ) : (
                            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="text-mint font-bold hover:underline transition-colors">
                              {p.text}
                            </a>
                          )
                        )}
                      </motion.p>
                    );
                  }
                  return (
                    <motion.p key={index} {...animationProps} className="text-white mt-8 mb-6">
                      {block.text}
                      <a href={block.linkUrl} target="_blank" rel="noreferrer" className="text-mint font-bold hover:underline transition-colors">
                        {block.linkText}
                      </a>
                    </motion.p>
                  );
                }
                return null;
              })}
            </div>
          </HudPanel>
        </section>
      ) : (
        <section className="blog-list space-y-6" aria-label="Blog articles">
          {posts.slice(0, visibleCount).map((post, index) => (
            <HudPanel key={post.id} className="blog-card group p-0 overflow-hidden" delay={index * 0.05}>
              <div className="flex flex-col md:flex-row w-full bg-surface">
                {post.image && (
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative border-b md:border-b-0 md:border-r border-line/30">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                )}
                <div className={`p-6 md:p-8 flex flex-col justify-center ${post.image ? 'md:w-3/5' : 'w-full'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag">{post.tag}</span>
                    <span className="blog-card__id">ID: {post.id}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-text mb-3 leading-tight group-hover:text-mint transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-text/70 mb-6 line-clamp-3">
                    {post.summary}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-4 text-xs font-bold text-muted/70">
                      <span className="flex items-center gap-1"><CalendarDays size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Timer size={14} /> {post.read}</span>
                    </div>
                    <button
                      type="button"
                      className="text-mint text-sm font-bold flex items-center gap-2 hover:underline tracking-tech"
                      onClick={() => navigateToBlog(post.id)}
                    >
                      READ ENTRY <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </HudPanel>
          ))}
          
          {visibleCount < posts.length && (
            <button
              type="button"
              className="btn btn--ghost blog-more-intel mt-8 w-max mx-auto"
              onClick={() => setVisibleCount((count) => count + 2)}
            >
              <FileText size={16} /> SHOW MORE INTEL
            </button>
          )}
        </section>
      )}
    </PageShell>
  );
}
