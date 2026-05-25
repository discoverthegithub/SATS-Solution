import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for animated counters
const useAnimatedCounter = (target, duration = 2000) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let startTime = null;
          const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
          
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            
            if (elementRef.current) {
              elementRef.current.textContent = Math.round(easedProgress * target);
            }
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { elementRef };
};

// Extracted component for the stats to keep JSX clean
const AnimatedStat = ({ target, suffix = '', label }) => {
  const { elementRef } = useAnimatedCounter(target);
  
  return (
    <div className="sv-stat">
      <div className="sv-stat-num"><span ref={elementRef}>0</span><span>{suffix}</span></div>
      <div className="sv-stat-label">{label}</div>
    </div>
  );
};

const Services = () => {
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
      <section className="sv-hero" style={{ position: 'relative', color: '#fff', textAlign: 'center', overflow: 'hidden', background: '#020617', padding: '120px 0 80px' }}>
        <img
          src="/epic_newyork.png"
          alt="Epic New York"
          className="live-space-bg"
          style={{ opacity: 0.7, filter: 'contrast(1.05) brightness(1.1)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.3), rgba(2, 6, 23, 0.7))', zIndex: 1 }}></div>

        <div className="hero-bg-effects" style={{ zIndex: 1 }}>
          <div className="hero-orb hero-orb--1" style={{ opacity: 0.2 }}></div>
          <div className="hero-orb hero-orb--2" style={{ opacity: 0.15 }}></div>
          <div className="hero-orb hero-orb--3" style={{ opacity: 0.1 }}></div>
          <div className="hero-grid-pattern" style={{ opacity: 0.05 }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label" style={{justifyContent: 'center', marginBottom: '24px', color: '#60a5fa', fontWeight: 800}}>Enterprise AI & Automation</div>
          <h1 className="reveal" style={{ color: '#fff', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            Scale Operations. <em style={{color: '#60a5fa', fontStyle: 'normal'}}>Reduce Headcount.</em><br />Automate Everything.
          </h1>
          <p className="sv-hero-sub reveal" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '800px', margin: '0 auto 48px' }}>We deploy highly secure, intelligent AI systems for medical and technical enterprises to eliminate manual data entry, streamline operations, and drastically lower operational costs without hiring more staff.</p>
          <div className="hero-btns" style={{justifyContent: 'center', animationDelay: '0.2s'}}>
            <Link to="/contact" className="btn btn--primary"><i className="ti ti-arrow-right"></i> Get a Free Automation Audit</Link>
            <a href="#capabilities" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(12px)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}><i className="ti ti-layers-intersect"></i> View Capabilities</a>
          </div>
          
          {/* Stats Bar */}
          <div className="sv-stats-bar reveal">
            <AnimatedStat target={60} suffix="%" label="Cost Reduction" />
            <AnimatedStat target={99} suffix=".9%" label="Uptime SLA" />
            <AnimatedStat target={24} suffix="/7" label="Autonomous Ops" />
            <AnimatedStat target={100} suffix="x" label="Faster Processing" />
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section id="capabilities" style={{paddingTop: '80px'}}>
        <div className="container">
          <div className="section-label">Core Automation Focus</div>
          <h2 className="section-heading">Intelligent <em>Workflows</em></h2>
          <p className="section-sub" style={{marginBottom: '60px'}}>Specialized AI integrations designed to replace repetitive human tasks across high-compliance industries.</p>

          <div className="services-grid reveal-stagger">
            <div className="svc-card svc-card--accent-blue reveal">
              <div className="svc-num">01</div>
              <div className="svc-icon svc-icon--blue"><i className="ti ti-stethoscope"></i></div>
              <h3>Medical AI Automation</h3>
              <p>Automate patient onboarding, clinical documentation, and complex medical billing. Our compliant NLP models read and extract patient histories 100x faster than administrative staff.</p>
              <div className="tag-row"><span className="tag">HIPAA Compliant</span><span className="tag">Clinical NLP</span><span className="tag">Billing Automation</span></div>
            </div>

            <div className="svc-card svc-card--accent-amber reveal">
              <div className="svc-num">02</div>
              <div className="svc-icon svc-icon--amber"><i className="ti ti-cpu"></i></div>
              <h3>Technical Ops Automation</h3>
              <p>Replace manual IT ticketing, L1 support, and infrastructure monitoring with autonomous AI agents. Reduce your IT department headcount while achieving 24/7 resolution times.</p>
              <div className="tag-row"><span className="tag">AIOps</span><span className="tag">Autonomous Agents</span><span className="tag">RPA</span></div>
            </div>

            <div className="svc-card reveal">
              <div className="svc-num">03</div>
              <div className="svc-icon"><i className="ti ti-code"></i></div>
              <h3>Custom Software Engineering</h3>
              <p>Enterprise-grade web and mobile applications engineered to serve as the secure foundation for your new automated AI capabilities.</p>
              <div className="tag-row"><span className="tag">Java</span><span className="tag">.NET</span><span className="tag">React</span><span className="tag">Node.js</span></div>
            </div>

            <div className="svc-card reveal">
              <div className="svc-num">04</div>
              <div className="svc-icon"><i className="ti ti-cloud-computing"></i></div>
              <h3>Cloud & Infrastructure</h3>
              <p>Secure cloud environments configured specifically to handle high-bandwidth AI inference and large-scale enterprise data processing.</p>
              <div className="tag-row"><span className="tag">AWS</span><span className="tag">Azure</span><span className="tag">GCP</span></div>
            </div>

            <div className="svc-card reveal">
              <div className="svc-num">05</div>
              <div className="svc-icon"><i className="ti ti-building-factory-2"></i></div>
              <h3>ERP & CRM AI Integration</h3>
              <p>Supercharge your existing Dynamics, Salesforce, or SAP instances with predictive analytics and automated data entry pipelines.</p>
              <div className="tag-row"><span className="tag">Dynamics 365</span><span className="tag">Salesforce</span><span className="tag">SAP</span></div>
            </div>

            <div className="svc-card reveal">
              <div className="svc-num">06</div>
              <div className="svc-icon"><i className="ti ti-shield-check"></i></div>
              <h3>Cybersecurity & Compliance</h3>
              <p>Rigorous security frameworks ensuring that all automated data pipelines adhere strictly to global privacy and data protection standards.</p>
              <div className="tag-row"><span className="tag">ISO 27001</span><span className="tag">SOC 2</span><span className="tag">Zero Trust</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE & AFTER ═══ */}
      <section className="ba-section">
        <div className="container">
          <div className="section-label">Business Impact</div>
          <h2 className="section-heading">Why <em>Automate?</em></h2>
          <p className="section-sub">See how traditional manual workflows in medical and technical fields compare against our AI-automated environments.</p>

          <div className="ba-matrix reveal">
            <div className="ba-col before">
              <div className="ba-head"><i className="ti ti-circle-x"></i> Traditional Workflow</div>
              <ul className="ba-list">
                <li><i className="ti ti-users"></i> Requires massive administrative headcount</li>
                <li><i className="ti ti-clock-pause"></i> 9-to-5 processing limits business growth</li>
                <li><i className="ti ti-alert-triangle"></i> Prone to human error in data entry & billing</li>
                <li><i className="ti ti-trending-down"></i> High operational overhead and salary costs</li>
                <li><i className="ti ti-file-text"></i> Slow response times to technical/patient tickets</li>
              </ul>
            </div>
            <div className="ba-col after">
              <div className="ba-head"><i className="ti ti-circle-check"></i> SATS AI Automation</div>
              <ul className="ba-list">
                <li><i className="ti ti-users-minus"></i> Scale infinitely without hiring more staff</li>
                <li><i className="ti ti-bolt"></i> 24/7/365 continuous autonomous processing</li>
                <li><i className="ti ti-target"></i> Zero-error extraction using advanced LLMs</li>
                <li><i className="ti ti-trending-up"></i> Drastic reduction in operational OPEX</li>
                <li><i className="ti ti-rocket"></i> Instantaneous L1 support and triage routing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY STACK ═══ */}
      <section>
        <div className="container">
          <div className="section-label">Our Stack</div>
          <h2 className="section-heading">Enterprise AI <em>Technologies</em></h2>

          <div className="tech-grid reveal-stagger">
            <div className="tech-card reveal">
              <div className="tech-icon"><i className="ti ti-brain"></i></div>
              <h4>Custom LLMs</h4>
              <p>Privately hosted, secure Large Language Models fine-tuned for medical terminology and technical IT support.</p>
            </div>
            <div className="tech-card reveal">
              <div className="tech-icon"><i className="ti ti-robot"></i></div>
              <h4>RPA Agents</h4>
              <p>Robotic Process Automation scripts that seamlessly click, type, and navigate legacy software like a human.</p>
            </div>
            <div className="tech-card reveal">
              <div className="tech-icon"><i className="ti ti-scan"></i></div>
              <h4>Computer Vision</h4>
              <p>Advanced OCR and layout recognition to digitize handwritten medical charts and technical schematics instantly.</p>
            </div>
            <div className="tech-card reveal">
              <div className="tech-icon"><i className="ti ti-database-export"></i></div>
              <h4>Cloud Data Lakes</h4>
              <p>Centralized, scalable, and compliant data storage solutions powered by AWS and Azure for real-time analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="process-section">
        <div className="container">
          <div className="section-label">Engagement Model</div>
          <h2 className="section-heading">How We <em>Implement</em></h2>

          <div className="process-grid reveal-stagger">
            <div className="process-step reveal">
              <div className="step-num">1</div>
              <h4>Workflow Audit</h4>
              <p>We analyze your business to identify high-volume, manual tasks that are inflating your headcount costs.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-num">2</div>
              <h4>Architecture</h4>
              <p>We design a secure, compliant AI architecture tailored to integrate directly with your existing software stack.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-num">3</div>
              <h4>Implementation</h4>
              <p>Our engineers deploy the AI agents, train the models, and establish the automated data pipelines.</p>
            </div>
            <div className="process-step reveal">
              <div className="step-num">4</div>
              <h4>Optimization</h4>
              <p>Continuous monitoring and refinement of the AI systems to ensure maximum efficiency and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <div className="cta-banner">
        <div className="cta-bg-effects">
          <div className="cta-orb cta-orb--1"></div>
          <div className="cta-orb cta-orb--2"></div>
        </div>
        <h2>Ready to Automate Your <em>Enterprise?</em></h2>
        <p className="cta-sub">Schedule a free automation audit to see exactly how much overhead our AI solutions can cut from your business operations.</p>
        <Link to="/contact" className="btn btn--white">Request Automation Audit</Link>
      </div>
    </main>
  );
};

export default Services;
