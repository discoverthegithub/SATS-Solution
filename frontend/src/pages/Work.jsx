import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    category: 'ai',
    tag: 'Software House Tooling',
    name: 'AI Scrum Assistant (Jira Replacement)',
    client: 'Global Tech Agency',
    desc: 'An end-to-end AI project management tool replacing Jira, autonomously generating user stories.',
    metric: '40% Faster Sprint Planning',
    img: '/assets/images/work-1.jpg',
    problem: 'Software houses rely heavily on Jira, requiring immense manual effort from Scrum Masters to write stories and map dependencies, which slows down development.',
    solution: "We engineered a proprietary Project Management ecosystem with an AI Scrum Assistant powered by Flan-T5. It automatically parses client requests and generates detailed technical user stories.",
    impact: "This workflow eliminated thousands of hours of manual sprint planning, allowing Project Managers to handle 3x more projects simultaneously without burnout.",
    tech: ['Flan-T5 Large Language Model', 'React / Next.js', 'Node.js & Python FastAPI', 'PostgreSQL & Vector DB']
  },
  {
    id: 2,
    category: 'medical ai',
    tag: 'Medical / Healthcare',
    name: 'Autonomous Hospital Voice Agent',
    client: 'National Healthcare Provider',
    desc: 'A HIPAA-compliant conversational AI voice agent deployed for instant triage and appointment scheduling.',
    metric: '85% Reduction in Wait Times',
    img: '/assets/images/work-2.jpg',
    problem: "The hospital's call centers were overwhelmed with routine inquiries, leading to 45-minute average hold times and severe patient dissatisfaction.",
    solution: "We deployed a conversational Voice Agent utilizing NLP and Text-to-Speech. It accesses medical records securely and schedules appointments directly in the database.",
    impact: "The hospital scaled its call center operations instantly. 70% of routine calls are now resolved entirely by the AI without human intervention.",
    tech: ['Conversational Voice API (Twilio)', 'HIPAA-Compliant Cloud NLP', 'HL7/FHIR Integration Engine']
  },
  {
    id: 3,
    category: 'vision',
    tag: 'Computer Vision / VR',
    name: '3D VR Monument Stitching',
    client: 'Global Heritage Foundation',
    desc: 'Computer vision algorithms stitching thousands of 2D photos into immersive 3D VR environments.',
    metric: 'Sub-Millimeter 3D Accuracy',
    img: '/assets/images/work-3.jpg',
    problem: "Preserving historical architecture digitally requires extremely expensive LIDAR scanning equipment, making it difficult to catalog remote sites.",
    solution: "We built a Computer Vision pipeline using Photogrammetry. Researchers take standard drone video, and our AI automatically extracts frames and stitches them into a 3D mesh.",
    impact: "Reduced the cost of digital preservation by 90% and created a scalable platform for educators to archive global architecture.",
    tech: ['Computer Vision (OpenCV)', 'Photogrammetry Pipelines', 'Unity 3D / WebXR']
  },
  {
    id: 4,
    category: 'ai',
    tag: 'Enterprise Automation',
    name: 'Intelligent ERP Modernization',
    client: 'Logistics Conglomerate',
    desc: 'An upgrade of a legacy ERP system, integrating predictive ML models to automate supply chain routing.',
    metric: '22% Reduction in Logistics Overhead',
    img: '/assets/images/work-4.jpg',
    problem: "A major logistics provider was bleeding margin due to an outdated, manual ERP system, leading to overstocking and inefficient routing.",
    solution: "We overhauled their legacy ERP by embedding predictive Machine Learning models directly into the core to autonomously predict inventory shortages and route fleets.",
    impact: "Created a truly autonomous supply chain, slashing fuel costs and virtually eliminating stock-outs.",
    tech: ['Predictive Machine Learning (Python)', 'SAP Integration API', 'AWS SageMaker']
  },
  {
    id: 5,
    category: 'medical ai',
    tag: 'Medical NLP',
    name: 'Clinical Data Extraction Pipeline',
    client: 'Regional Clinic Network',
    desc: 'An OCR and NLP pipeline that digitizes handwritten medical records into structured clinical data.',
    metric: '100x Faster than Manual Data Entry',
    img: '/assets/images/work-5.jpg',
    problem: "The clinic possessed millions of pages of unstructured, handwritten patient histories, posing massive security risks and data-entry costs.",
    solution: "We built a secure cloud extraction pipeline. Advanced OCR scans documents, and a Medical NLP model identifies diagnoses and structures the data into compliant JSON formats.",
    impact: "Digitized 2 million patient records in weeks with 99.8% accuracy, a feat that would have taken human clerks years.",
    tech: ['Advanced OCR (Tesseract)', 'Clinical NLP Models', 'Zero-Trust Private Cloud architecture']
  },
  {
    id: 6,
    category: 'ai',
    tag: 'FinTech AI',
    name: 'Predictive Financial Risk Engine',
    client: 'International FinTech Startup',
    desc: 'A sub-millisecond machine learning engine designed to detect fraudulent transactions in real-time.',
    metric: '$12M Fraud Prevented Annually',
    img: '/assets/images/work-6.jpg',
    problem: "The FinTech platform suffered from sophisticated fraud attacks that bypassed traditional rule-based checks. They needed real-time analysis before approving transactions.",
    solution: "We engineered a highly optimized Machine Learning Risk Engine that ingests massive streams of transactional data and scores the transaction via an ensemble model.",
    impact: "Significantly lowered chargeback rates and prevented over $12M in fraudulent transactions within the first year.",
    tech: ['Python / XGBoost / TensorFlow', 'Redis In-Memory Datastore', 'Kubernetes Auto-Scaling']
  },
  {
    id: 7,
    category: 'ai',
    tag: 'IT Operations',
    name: 'Autonomous DevOps Pipeline',
    client: 'SaaS Enterprise',
    desc: 'A self-healing infrastructure that uses AI to detect anomalies and autonomously deploy fixes.',
    metric: '99.999% Uptime Achieved',
    img: '/assets/images/work-7.jpg',
    problem: "The infrastructure was prone to micro-outages during peak traffic. Their SRE team was constantly fighting fires manually.",
    solution: "We introduced AIOps. We trained an anomaly detection model on historical server logs. When the AI detects a pattern preceding a crash, it autonomously executes runbook scripts.",
    impact: "Achieved 'Five Nines' (99.999%) uptime and allowed the DevOps team to focus on building features instead of firefighting.",
    tech: ['AIOps Anomaly Detection', 'Kubernetes / Terraform', 'AWS CloudWatch Integration']
  },
  {
    id: 8,
    category: 'vision',
    tag: 'Industrial IoT',
    name: 'Smart Warehouse Automation',
    client: 'Global E-Commerce Brand',
    desc: 'Integration of IoT sensors, robotics, and computer vision to fully automate warehouse sorting.',
    metric: '300% Increase in Throughput',
    img: '/assets/images/work-8.jpg',
    problem: "During holiday seasons, manual warehouse pickers could not keep up with order volume, leading to mispacked items and delayed shipping.",
    solution: "We designed an IoT and Computer Vision network. Cameras track packages in real-time, and Automated Guided Vehicles navigate the warehouse to transport goods automatically.",
    impact: "Throughput increased dramatically, error rates dropped to near zero, and the reliance on temporary seasonal labor was eliminated.",
    tech: ['Edge Computing / IoT', 'Real-time Object Tracking', 'Robotics Integration API']
  }
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('challenge');

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

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
  }, [filter]); // Re-observe when filter changes

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <main id="main-content">
      {/* ═══ HERO ═══ */}
      <section className="sv-hero" style={{padding: '120px 0 80px'}}>
        <div className="container">
          <div className="section-label" style={{justifyContent: 'center', marginBottom: '24px'}}>Our Projects</div>
          <h1 className="reveal">Real World <em>AI Engineering.</em></h1>
          <p className="sv-hero-sub reveal">Explore how we are replacing legacy systems with autonomous AI agents, 3D computer vision, and predictive models across global enterprises.</p>
        </div>
      </section>

      {/* ═══ PORTFOLIO GRID ═══ */}
      <section id="portfolio" style={{paddingTop: '20px'}}>
        <div className="container">
          <div className="filters-row reveal">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
            <button className={`filter-btn ${filter === 'ai' ? 'active' : ''}`} onClick={() => setFilter('ai')}>AI & Automation</button>
            <button className={`filter-btn ${filter === 'medical' ? 'active' : ''}`} onClick={() => setFilter('medical')}>Medical</button>
            <button className={`filter-btn ${filter === 'vision' ? 'active' : ''}`} onClick={() => setFilter('vision')}>Computer Vision</button>
          </div>

          <div className="work-grid reveal-stagger">
            {filteredProjects.map((p) => (
              <div key={p.id} className="work-card reveal" onClick={() => { setSelectedProject(p); setActiveTab('challenge'); }}>
                <div className="work-thumb">
                  <img src={p.img} alt={p.name} className="work-thumb-bg" />
                  <div className="work-overlay">
                    <div style={{textAlign: 'center'}}>
                      <i className="ti ti-maximize" style={{fontSize: '24px', marginBottom: '8px'}}></i><br />
                      View Project Details
                    </div>
                  </div>
                </div>
                <div className="work-body">
                  <div className="work-tag">{p.tag}</div>
                  <h3 className="work-name">{p.name}</h3>
                  <div className="work-client">{p.client}</div>
                  <p className="work-desc">{p.desc}</p>
                  <div className="work-metric"><i className="ti ti-trending-up"></i> {p.metric}</div>
                  <button className="btn btn--outline" style={{marginTop:'16px', width:'100%', justifyContent:'center'}}>Read Full Case Study</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODAL UI ═══ */}
      {selectedProject && (
        <div className="cs-modal-overlay active" onClick={() => setSelectedProject(null)}>
          <div className="cs-modal" onClick={e => e.stopPropagation()}>
            <div className="cs-modal-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.95)), url(${selectedProject.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div>
                <div className="cs-modal-meta" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>{selectedProject.client}</div>
                <h2 className="cs-modal-title" style={{ color: '#fff' }}>{selectedProject.name}</h2>
              </div>
              <button className="cs-modal-close" onClick={() => setSelectedProject(null)} aria-label="Close modal" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}><i className="ti ti-x"></i></button>
            </div>
            
            <div className="cs-modal-tabs-nav">
              <button className={`cs-tab-btn ${activeTab === 'challenge' ? 'active' : ''}`} onClick={() => setActiveTab('challenge')}>The Challenge</button>
              <button className={`cs-tab-btn ${activeTab === 'solution' ? 'active' : ''}`} onClick={() => setActiveTab('solution')}>AI Solution</button>
              <button className={`cs-tab-btn ${activeTab === 'impact' ? 'active' : ''}`} onClick={() => setActiveTab('impact')}>Impact & Tech</button>
            </div>

            <div className="cs-modal-body" style={{ flex: 1, paddingBottom: '80px' }}>
              {activeTab === 'challenge' && (
                <div className="cs-tab-panel reveal in">
                  <div className="cs-panel-icon"><i className="ti ti-target"></i></div>
                  <h4>The Problem</h4>
                  <p>{selectedProject.problem}</p>
                </div>
              )}
              {activeTab === 'solution' && (
                <div className="cs-tab-panel reveal in">
                  <div className="cs-panel-icon"><i className="ti ti-bulb"></i></div>
                  <h4>Our Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>
              )}
              {activeTab === 'impact' && (
                <div className="cs-tab-panel reveal in">
                  <div className="cs-panel-icon"><i className="ti ti-trending-up"></i></div>
                  <h4>Business Impact</h4>
                  <p>{selectedProject.impact}</p>
                  
                  <div className="cs-tech-stack" style={{ marginTop: '32px' }}>
                    <h5>Core Technologies</h5>
                    <div className="cs-tech-list" style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                      {selectedProject.tech.map((t, i) => (
                        <div key={i} className="cs-tech-item" style={{ background: '#fff', padding: '6px 12px', borderRadius: '20px', border: '1px solid var(--border)', fontSize: '12px' }}><i className="ti ti-check"></i> {t}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Work;




