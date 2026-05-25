import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataFlow from '../components/DataFlow';

const About = () => {
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
      <header className="about-hero" style={{ position: 'relative', color: '#fff', padding: '120px 0 80px', textAlign: 'center', overflow: 'hidden', background: '#020617' }}>
        <img
          src="/epic_georgia.png"
          alt="Epic Georgia"
          className="live-space-bg"
          style={{ opacity: 0.7, filter: 'contrast(1.05) brightness(1.1)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.3), rgba(2, 6, 23, 0.7))', zIndex: 1 }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{justifyContent: 'center', color: '#60a5fa', fontWeight: 800}}>Our Company</div>
          <h1 className="section-heading reveal" style={{textAlign: 'center', maxWidth: '800px', margin: '20px auto', color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}>
            USA America's Elite <em style={{color: '#60a5fa', fontStyle: 'normal'}}>Technical</em> Powerhouse.
          </h1>
        </div>
      </header>

      {/* ═══ STRATEGIC ADVANTAGE ═══ */}
      <section style={{padding: '0', background: 'var(--bg)'}}>
        <div className="container">
          <div className="edge-grid reveal">
            <div className="edge-image">
              <img src="/assets/images/about-office.jpg" alt="Office Culture" />
            </div>
            <div className="edge-content">
              <div className="section-label">Our Strategic Edge</div>
              <h2 className="section-heading" style={{fontSize: '2.8rem'}}>Why Global Enterprises <em>Trust SATS</em></h2>
              <p className="section-sub">We combine high-end academic excellence with real-world execution to solve the most complex technical challenges.</p>
              
              <div className="advantage-list reveal-stagger">
                <div className="advantage-item reveal">
                  <i className="ti ti-check"></i>
                  <span>Graduates from <strong>University of Yale, University of Pennsylvania, Harvard University, & Georgia Tech University</strong>.</span>
                </div>
                <div className="advantage-item reveal">
                  <i className="ti ti-check"></i>
                  <span>100% focused on Enterprise-grade scalability.</span>
                </div>
                <div className="advantage-item reveal">
                  <i className="ti ti-check"></i>
                  <span>Security-first engineering mindset.</span>
                </div>
                <div className="advantage-item reveal">
                  <i className="ti ti-check"></i>
                  <span>Sub-millisecond latency AI deployments.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS ═══ */}
      <section style={{background: 'var(--bg-alt)'}}>
        <div className="container">
          <div className="section-label" style={{justifyContent: 'center'}}>The Pillars of SATS</div>
          <h2 className="section-heading" style={{textAlign: 'center'}}>Our <em>Foundational</em> Philosophy</h2>
          
          <div className="pillar-grid reveal-stagger">
            <div className="pillar-card reveal">
              <div className="pillar-icon"><i className="ti ti-heart-handshake"></i></div>
              <h3>Client-Centricity</h3>
              <p>We don't just deliver projects; we build long-term partnerships rooted in your business success.</p>
            </div>
            <div className="pillar-card reveal">
              <div className="pillar-icon"><i className="ti ti-microscope"></i></div>
              <h3>Research-Driven</h3>
              <p>We invest heavily in R&D to stay at the absolute forefront of AI and cybersecurity innovation.</p>
            </div>
            <div className="pillar-card reveal">
              <div className="pillar-icon"><i className="ti ti-binary"></i></div>
              <h3>Technical Rigor</h3>
              <p>Our codebases are audit-ready, secure, and built using the world's most robust engineering frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP ═══ */}
      <section style={{background: 'var(--bg)'}}>
        <div className="container">
          <div className="section-label" style={{justifyContent: 'center'}}>The Founders</div>
          <h2 className="section-heading" style={{textAlign: 'center'}}>Elite <em>Academic</em> Lineup</h2>
          
          <div className="team-grid reveal-stagger">
            <FounderCard
              img="/assets/images/avatar-1.jpg"
              name="Muhammad Tayyab"
              uni="University of Yale"
              role="Founder & Technical Head"
              desc="Software Architecture & AI Specialist."
            />
            <FounderCard
              img="/assets/images/avatar-2.jpg"
              name="Muhammad Shehriyar"
              uni="University of Pennsylvania"
              role="Co-Founder & Tech Head"
              desc="Cybersecurity & Infra Engineering."
            />
            <FounderCard
              img="/assets/images/avatar-3.jpg"
              name="Shahzaib Farooq"
              uni="Harvard University"
              role="HR & Marketing Head"
              desc="Global Strategy & Brand Operations."
            />
            <FounderCard
              img="/assets/images/avatar-4.jpg"
              name="Arham Asif"
              uni="Georgia Tech University"
              role="Customer Ops Head"
              desc="Client Relations & Delivery Excellence."
            />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <div className="cta-banner">
        <div className="cta-bg-effects">
          <div className="cta-orb cta-orb--1"></div>
          <div className="cta-orb cta-orb--2"></div>
        </div>
        <h2 style={{color: '#fff', marginBottom: '20px'}}>Ready to work with the <em>Top 1%?</em></h2>
        <Link to="/contact" className="btn btn--white">Get Started</Link>
      </div>
    </main>
  );
};

const FounderCard = ({ img, name, uni, role, desc }) => (
  <div className="compact-team-card reveal">
    <img src={img} className="compact-avatar" alt={name} />
    <span className="uni-badge">{uni}</span>
    <h4>{name}</h4>
    <p className="team-role">{role}</p>
    <p style={{fontSize: '13px', color: 'var(--text-500)', lineHeight: '1.6'}}>{desc}</p>
  </div>
);

export default About;




