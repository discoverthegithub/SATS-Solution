import React, { useState } from 'react';
import { submitContactForm } from '../services/contactService';
import SEO from '../components/SEO';

const Contact = () => {
  const [selectedService, setSelectedService] = useState('');
  const [formStatus, setStatus] = useState({ show: false, type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
      interest: selectedService
    };

    if (!selectedService) {
      setStatus({ show: true, type: 'error', msg: 'Please select an area of interest.' });
      return;
    }

    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="btn-spinner" style="border-top-color:#fff;"></span> Processing...';

    try {
      await submitContactForm(formData);
      setStatus({ show: true, type: 'success', msg: 'Consultation request sent successfully!' });
      e.target.reset();
      setSelectedService('');
    } catch (error) {
      setStatus({ show: true, type: 'error', msg: error.message });
    } finally {
      btn.disabled = false;
      btn.innerHTML = originalText;
    }
  };

  return (
    <main id="main-content">
      <SEO
        title="Contact Us | Enterprise AI Consultation"
        description="Initiate your project consultation with SATS Solutions. Connect with our elite engineering council to architect your next AI or cloud transformation."
        keywords="Contact SATS, AI Consultation, Tech Project Inquiry, Hire AI Engineers USA"
      />
      <div className="contact-split-wrapper">
        <div className="contact-split-bg"></div>
        
        <div className="contact-split-container reveal in">
          
          {/* LEFT SIDE: BRAND & INFO */}
          <div className="contact-info-panel">
            <div className="contact-info-content">
              <div className="contact-info-header">
                <h2>Architecting<br /><em>The Future.</em></h2>
                <p>Connect with our technical leadership council to engineer your organization's next breakthrough AI project.</p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="ti ti-mail"></i></div>
                  <div className="contact-info-text">
                    <h4>Direct Email</h4>
                    <a href="mailto:info@satssolutions.com">info@satssolutions.com</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="ti ti-phone"></i></div>
                  <div className="contact-info-text">
                    <h4>Engineering Desk</h4>
                    <a href="tel:+924231234567">+92 423 123 4567</a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><i className="ti ti-map-pin"></i></div>
                  <div className="contact-info-text">
                    <h4>Headquarters</h4>
                    <p>Financial District, San Francisco,<br />California, USA America</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 20px', background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(10px)', borderRadius: '100px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
                  <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Open for Strategic Partnerships</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="contact-form-panel">
            <h3>Consultation Brief</h3>
            <p>Articulate your organization’s technical requirements, and our senior architects will perform a comprehensive feasibility analysis.</p>

            <form onSubmit={handleSubmit}>
              {formStatus.show && (
                <div style={{
                  marginBottom: '32px', padding: '16px 20px', borderRadius: 'var(--radius-sm)',
                  background: formStatus.type === 'success' ? 'var(--accent-emerald-light)' : 'var(--accent-rose-light)',
                  border: `1px solid ${formStatus.type === 'success' ? 'rgba(16,185,129,0.3)' : 'rgba(244,63,94,0.3)'}`,
                  color: formStatus.type === 'success' ? '#047857' : '#be123c',
                  fontWeight: 500, fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '12px'
                }}>
                  <i className={formStatus.type === 'success' ? 'ti ti-circle-check' : 'ti ti-alert-circle'} style={{ fontSize: '20px' }}></i>
                  {formStatus.msg}
                </div>
              )}

              {/* Service Selection Grid */}
              <div className="premium-service-grid">
                <div className={`premium-service-tile ${selectedService === 'software' ? 'selected' : ''}`} onClick={() => setSelectedService('software')}>
                  <i className="ti ti-code"></i><span>Software</span>
                </div>
                <div className={`premium-service-tile ${selectedService === 'cloud' ? 'selected' : ''}`} onClick={() => setSelectedService('cloud')}>
                  <i className="ti ti-cloud"></i><span>Cloud</span>
                </div>
                <div className={`premium-service-tile ${selectedService === 'ai' ? 'selected' : ''}`} onClick={() => setSelectedService('ai')}>
                  <i className="ti ti-brain"></i><span>AI & Data</span>
                </div>
                <div className={`premium-service-tile ${selectedService === 'erp' ? 'selected' : ''}`} onClick={() => setSelectedService('erp')}>
                  <i className="ti ti-building-factory-2"></i><span>ERP/CRM</span>
                </div>
                <div className={`premium-service-tile ${selectedService === 'security' ? 'selected' : ''}`} onClick={() => setSelectedService('security')}>
                  <i className="ti ti-shield-check"></i><span>Security</span>
                </div>
                <div className={`premium-service-tile ${selectedService === 'other' ? 'selected' : ''}`} onClick={() => setSelectedService('other')}>
                  <i className="ti ti-dots"></i><span>Other</span>
                </div>
              </div>

              {/* Floating Label Inputs */}
              <div className="premium-input-row">
                <div className="premium-input-group">
                  <input type="text" name="name" required placeholder=" " />
                  <label>Full Name</label>
                </div>
                <div className="premium-input-group">
                  <input type="text" name="company" required placeholder=" " />
                  <label>Company</label>
                </div>
              </div>

              <div className="premium-input-row">
                <div className="premium-input-group">
                  <input type="email" name="email" required placeholder=" " />
                  <label>Work Email</label>
                </div>
                <div className="premium-input-group">
                  <input type="tel" name="phone" required placeholder=" " />
                  <label>Phone</label>
                </div>
              </div>

              <div className="premium-input-group" style={{ marginBottom: '40px' }}>
                <textarea name="message" required placeholder=" "></textarea>
                <label>Technical Briefing / Project Scope</label>
              </div>

              <button type="submit" className="premium-submit-btn">
                <span>Request Technical Consultation</span>
                <i className="ti ti-arrow-right"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;


