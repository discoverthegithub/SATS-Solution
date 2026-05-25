import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticleNetwork from '../components/ParticleNetwork';

const Careers = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-pic').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content">
      {/* ═══ HERO ═══ */}
      <header className="careers-hero" style={{ position: 'relative', color: '#fff', padding: '120px 0 80px', textAlign: 'center', overflow: 'hidden' }}>
        <ParticleNetwork />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(10, 22, 40, 0.4), rgba(10, 22, 40, 0.8))', zIndex: 1 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label reveal" style={{ color: 'var(--accent)' }}>Elite Engineering Careers</div>
          <h1 className="section-heading reveal" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px' }}>Build the <em>Infrastructure</em> of Tomorrow.</h1>
          <p className="section-sub reveal" style={{ color: 'rgba(255,255,255,0.8)', margin: '0 auto', maxWidth: '700px' }}>We are recruiting the top 1% of talent from USA America's most prestigious institutions to solve complex global enterprise challenges.</p>
          <div className="reveal" style={{ marginTop: '40px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#positions" className="btn btn--primary">View Open Roles</a>
            <a href="#culture" className="btn btn--outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Our Culture</a>
          </div>
        </div>
      </header>

      {/* ═══ CULTURE SECTION ═══ */}
      <section id="culture" style={{padding: '100px 0'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px'}}>
            <div className="section-label" style={{justifyContent: 'center'}}>Life at SATS</div>
            <h2 className="section-heading">Innovation in <em>Every</em> Pixel.</h2>
            <p className="section-sub" style={{margin: '0 auto'}}>Beyond the code, SATS is a community of lifelong learners, university champions, and problem solvers.</p>
          </div>

          <div className="culture-grid reveal-stagger">
            <div className="culture-img reveal-pic" style={{height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}><img src="/assets/images/career-1.jpg" alt="Team Work" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div className="culture-img reveal-pic" style={{height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}><img src="/assets/images/career-2.jpg" alt="Office Collaboration" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
            <div className="culture-img reveal-pic" style={{height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}><img src="/assets/images/career-3.jpg" alt="Digital Strategy" style={{width: '100%', height: '100%', objectFit: 'cover'}} /></div>
          </div>

          <div className="perks-grid reveal-stagger">
            <Perk icon="ti-rocket" title="Hyper-Growth" text="Work directly with founders from University of Yale & University of Pennsylvania in a high-stakes, rewarding atmosphere." />
            <Perk icon="ti-certificate" title="Upskilling" text="We fund your professional certifications in AI, Cloud, and Cybersecurity." />
            <Perk icon="ti-device-laptop" title="Hardware" text="Access the best tools: High-end MacBooks and peripherals for all engineers." />
            <Perk icon="ti-heart-rate-monitor" title="Premium Health" text="Full medical coverage for you and your family, including mental health support." />
            <Perk icon="ti-plane-departure" title="Hybrid-First" text="Choose between our high-end San Francisco HQ or your home office. We value results." />
            <Perk icon="ti-gift" title="Performance" text="Quarterly profit-sharing and milestone bonuses. We win as a team." />
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="hiring-process" style={{padding: '100px 0', background: 'var(--bg-alt)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '60px'}}>
            <div className="section-label" style={{justifyContent: 'center'}}>The Path to SATS</div>
            <h2 className="section-heading">How We <em>Hire</em></h2>
          </div>

          <div className="process-visual reveal-stagger">
            <Step num="01" title="Review" desc="Portfolio & Academic screening (Yale/UPenn focus)." />
            <Step num="02" title="Engineering" desc="Deep technical dive with our technical heads." />
            <Step num="03" title="DNA Match" desc="Discussion with HR Lead Shahzaib Farooq." />
            <Step num="04" title="The Offer" desc="Welcome to the elite team of innovators." />
          </div>
        </div>
      </section>

      {/* ═══ OPEN POSITIONS ═══ */}
      <section id="positions" className="open-positions" style={{padding: '100px 0'}}>
        <div className="container">
          <div className="job-list-header reveal" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', borderBottom: '1px solid var(--border)', paddingBottom: '24px', flexWrap: 'wrap', gap: '20px'}}>
            <div>
              <div className="section-label">Opportunities</div>
              <h2 className="section-heading" style={{marginBottom: 0}}>Open <em>Roles</em></h2>
            </div>
            <p style={{color: 'var(--text-500)', fontWeight: 600}}>3 Available Positions</p>
          </div>

          <div className="reveal-stagger">
            <JobCard
              title="Senior AI/ML Engineer"
              desc="Architecting Large Language Models and RAG pipelines for global health-tech enterprises. Requires expertise in Python, PyTorch, and Vector DBs."
              tags={[{ icon: 'ti-briefcase', text: 'Full-Time' }, { icon: 'ti-map-pin', text: 'Hybrid / SF' }, { icon: 'ti-flame', text: 'Hot Role', highlight: true }]}
            />
            <JobCard
              title="Full-Stack JavaScript Architect"
              desc="Leading the development of our autonomous agency dashboards. Deep proficiency in Next.js, TypeScript, and high-performance UI engineering."
              tags={[{ icon: 'ti-briefcase', text: 'Full-Time' }, { icon: 'ti-world', text: 'Remote' }, { icon: 'ti-code', text: 'Frontend / UX' }]}
            />
            <JobCard
              title="Cybersecurity Specialist"
              desc="Ensuring zero-trust standards across enterprise infrastructure. Auditing codebases and hardening our cloud environments for 2026 standards."
              tags={[{ icon: 'ti-lock', text: 'Full-Time' }, { icon: 'ti-map-pin', text: 'San Francisco HQ' }, { icon: 'ti-shield-check', text: 'Security' }]}
            />
          </div>

          <div style={{marginTop: '80px', textAlign: 'center', background: 'var(--bg-alt)', padding: '60px 20px', borderRadius: 'var(--radius-lg)'}} className="reveal">
            <h3 style={{fontWeight: 800, marginBottom: '12px'}}>Don't see your role?</h3>
            <p style={{color: 'var(--text-500)', marginBottom: '30px'}}>We are always looking for the top 1% of engineers. Send us your resume for a general application.</p>
            <Link to="/contact" className="btn btn--outline">Send General Application</Link>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <div className="cta-banner" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', padding: '120px 20px'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{color: '#fff', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '24px'}}>Level <em>Up</em> Your Career.</h2>
          <p style={{color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px'}}>Join a team that values technical mastery, radical transparency, and absolute engineering excellence.</p>
          <Link to="/contact" className="btn btn--primary" style={{padding: '18px 40px', fontSize: '1rem'}}>Join the SATS Network</Link>
        </div>
      </div>
    </main>
  );
};

const Perk = ({ icon, title, text }) => (
  <div className="perk reveal" style={{background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '32px'}}>
    <i className={`ti ${icon}`} style={{fontSize: '28px', color: 'var(--primary)', marginBottom: '16px', display: 'block'}}></i>
    <h4>{title}</h4>
    <p style={{fontSize: '13.5px', color: 'var(--text-500)', lineHeight: 1.65}}>{text}</p>
  </div>
);

const Step = ({ num, title, desc }) => (
  <div className="step-node reveal" style={{textAlign: 'center', flex: 1}}>
    <div className="step-circle" style={{width: '60px', height: '60px', background: '#fff', border: '2px solid var(--primary)', borderRadius: '50%', margin: '0 auto 20px', display: 'grid', placeItems: 'center', fontWeight: 800, color: 'var(--primary)', boxShadow: '0 0 0 8px #f0f7ff'}}>{num}</div>
    <h4 style={{fontWeight: 700, marginBottom: '8px'}}>{title}</h4>
    <p style={{fontSize: '13px', color: 'var(--text-500)'}}>{desc}</p>
  </div>
);

const JobCard = ({ title, desc, tags }) => (
  <div className="job-card-premium reveal">
    <div className="job-main-info">
      <div className="job-meta-pills">
        {tags.map((t, i) => (
          <span key={i} className="pill" style={{padding: '6px 14px', background: t.highlight ? 'var(--primary-light)' : 'var(--bg-alt)', borderRadius: '20px', fontSize: '12px', fontWeight: 600, color: t.highlight ? 'var(--primary)' : 'var(--text-500)', display: 'flex', alignItems: 'center', gap: '6px'}}>
            <i className={t.icon}></i> {t.text}
          </span>
        ))}
      </div>
      <h4>{title}</h4>
      <p style={{fontSize: '14.5px', color: 'var(--text-500)', maxWidth: '600px', lineHeight: 1.6}}>{desc}</p>
    </div>
    <Link to="/contact" className="btn btn--primary">Apply for Role <i className="ti ti-arrow-right"></i></Link>
  </div>
);

export default Careers;



