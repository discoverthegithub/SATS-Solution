import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    category: 'ai',
    tag: 'Enterprise Tooling',
    name: 'Neural Scrum Architect',
    client: 'Global Tech Conglomerate',
    desc: 'An autonomous project management engine that replaces legacy manual workflows by generating precise technical specifications.',
    metric: '40% Accelerated Sprint Velocity',
    img: '/assets/images/work-1.jpg',
    problem: 'Enterprises struggle with the high manual overhead of translating complex requirements into actionable technical documentation, leading to developmental bottlenecks.',
    solution: "We engineered a proprietary Neural Engine powered by specialized LLMs. It autonomously parses unstructured client requests into high-fidelity technical user stories and dependency maps.",
    impact: "This system reclaimed thousands of senior-level engineering hours, enabling the organization to double their developmental output without increasing headcount.",
    tech: ['LLM Quantization', 'React / Next.js', 'Asynchronous Python', 'Vector Databases']
  },
  {
    id: 2,
    category: 'medical ai',
    tag: 'Health-Tech',
    name: 'Autonomous Clinical Triage',
    client: 'Fortune 500 Health Provider',
    desc: 'A HIPAA-certified conversational AI agent engineered for instantaneous patient triage and large-scale appointment orchestration.',
    metric: '85% Operational Cost Recovery',
    img: '/assets/images/work-2.jpg',
    problem: "Patient dissatisfaction was critical due to extreme wait times in call centers, resulting in high churn rates and inefficient resource allocation.",
    solution: "We deployed a resilient, voice-integrated AI ecosystem utilizing advanced NLP. The system securely accesses EHR databases to provide real-time triage and medical scheduling.",
    impact: "Achieved instantaneous resolution for 70% of routine interactions, drastically improving the patient experience while redirecting administrative staff to high-value care.",
    tech: ['HIPAA-Cloud NLP', 'Voice Orchestration', 'HL7/FHIR Data Pipelines']
  },
  {
    id: 3,
    category: 'vision',
    tag: 'Computer Vision',
    name: 'High-Fidelity 3D Reconstruction',
    client: 'Heritage Preservation Global',
    desc: 'Advanced computer vision algorithms that autonomously transform 2D visual data into immersive, sub-millimeter 3D environments.',
    metric: '90% Reduction in Modeling Costs',
    img: '/assets/images/work-3.jpg',
    problem: "Digital archiving of complex architectural structures previously required prohibitive expenditures on specialized hardware and manual cleanup.",
    solution: "We developed an automated vision pipeline using photogrammetry and neural radiance fields. It extracts structural geometry from standard video feeds to generate precise 3D meshes.",
    impact: "Democratized digital preservation, creating a scalable, cost-effective framework for archiving global cultural landmarks with absolute structural integrity.",
    tech: ['Neural Radiance Fields', 'Photogrammetry Engines', 'OpenCV / WebXR']
  },
  {
    id: 4,
    category: 'ai',
    tag: 'Industrial Automation',
    name: 'Predictive Logistics Ecosystem',
    client: 'Multi-National Logistics Firm',
    desc: 'A complete modernization of legacy ERP systems, integrating predictive neural networks to autonomously optimize supply chain routing.',
    metric: '22% Efficiency Optimization',
    img: '/assets/images/work-4.jpg',
    problem: "Inefficient manual routing and outdated inventory predictions were causing significant margin erosion and operational delays across a global fleet.",
    solution: "We overhauled the legacy infrastructure by embedding real-time predictive models into the ERP core, enabling the system to self-correct inventory levels and fleet routes.",
    impact: "Transformed the supply chain into a self-healing ecosystem, virtually eliminating fuel waste and stock-out incidents.",
    tech: ['Predictive ML', 'ERP Neural Integration', 'Cloud Orchestration']
  },
  {
    id: 5,
    category: 'medical ai',
    tag: 'Medical NLP',
    name: 'Neural Clinical Digitsation',
    client: 'Premier Clinical Network',
    desc: 'An automated OCR and NLP pipeline that transforms unstructured physician data into structured, actionable clinical insights.',
    metric: '100x Accelerated Data Throughput',
    img: '/assets/images/work-5.jpg',
    problem: "The manual transcription of millions of handwritten clinical histories was creating severe security risks and prohibitive labor expenditures.",
    solution: "We engineered a secure cloud extraction framework. High-fidelity OCR coupled with specialized Medical NLP models structures unstructured data into compliant formats.",
    impact: "Digitized multi-decade clinical archives in weeks with 99.8% precision, reclaiming years of administrative labor and securing patient data.",
    tech: ['Neural OCR', 'Medical NLP', 'Zero-Trust Architecture']
  },
  {
    id: 6,
    category: 'ai',
    tag: 'FinTech',
    name: 'Real-Time Risk Orchestrator',
    client: 'Global FinTech Disruptor',
    desc: 'A sub-millisecond fraud detection engine that utilizes ensemble learning to secure high-volume financial transactions.',
    metric: '$12M Annual Loss Mitigation',
    img: '/assets/images/work-6.jpg',
    problem: "Sophisticated fraud patterns were bypassing traditional security layers, leading to significant financial leakage and merchant risk.",
    solution: "We developed a low-latency Risk Engine that processes massive data streams, scoring every transaction via a custom ensemble model in real-time.",
    impact: "Eliminated chargeback vulnerabilities and successfully mitigated over $12M in fraudulent activity within the first operational year.",
    tech: ['Ensemble Learning', 'Redis In-Memory', 'Auto-Scaling Clusters']
  },
  {
    id: 7,
    category: 'ai',
    tag: 'Infrastructure',
    name: 'Self-Healing AIOps',
    client: 'Enterprise SaaS Provider',
    desc: 'An autonomous infrastructure management system that predicts and remediates anomalies before they impact global services.',
    metric: '99.999% Service Continuity',
    img: '/assets/images/work-7.jpg',
    problem: "Frequent micro-outages and manual incident response were draining SRE resources and impacting service-level agreements.",
    solution: "We implemented an AIOps framework that utilizes anomaly detection on historical server telemetry to autonomously execute corrective runbooks.",
    impact: "Achieved the 'Five Nines' gold standard for uptime, allowing the engineering team to focus purely on innovation rather than firefighting.",
    tech: ['Anomaly Detection', 'Infrastructure as Code', 'Cloud Orchestration']
  },
  {
    id: 8,
    category: 'vision',
    tag: 'Industrial Automation',
    name: 'Vision-Driven Logistics',
    client: 'International E-Commerce Leader',
    desc: 'A massive integration of IoT sensors and computer vision to orchestrate fully autonomous warehouse sorting and fulfillment.',
    metric: '300% Operational Throughput Boost',
    img: '/assets/images/work-8.jpg',
    problem: "Logistics bottlenecks during peak demand periods were causing fulfillment failures due to the limitations of manual labor.",
    solution: "We designed an end-to-end vision network where real-time object tracking orchestrates Automated Guided Vehicles for seamless fulfillment.",
    impact: "Dramatically scaled fulfillment capacity while reducing error rates to negligible levels, ensuring total operational resilience.",
    tech: ['Real-time Vision', 'IoT Orchestration', 'Autonomous Systems']
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
      <SEO
        title="Case Studies | Engineering Excellence"
        description="Explore our portfolio of high-impact AI deployments, from autonomous medical triage to self-healing enterprise infrastructure."
        keywords="AI Case Studies, AI Projects, Machine Learning Portfolio, SATS Solutions Work"
      />
      {/* ═══ HERO ═══ */}
      <section className="sv-hero" style={{padding: '120px 0 80px'}}>
        <div className="container">
          <div className="section-label" style={{justifyContent: 'center', marginBottom: '24px'}}>Selected Engagements</div>
          <h1 className="reveal">Precision <em>AI Engineering.</em></h1>
          <p className="sv-hero-sub reveal">Witness the transformation of legacy enterprise workflows through our high-fidelity AI agents, advanced computer vision, and predictive neural architectures.</p>
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




