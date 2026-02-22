import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Your specific EmailJS Credentials
    const serviceID = 'service_id9jzpd';
    const templateID = 'template_ki7fh8l';
    const publicKey = 'LOTjJgY-JCWnci1g7';

    // This object matches the {{name}}, {{email}}, and {{message}} in your template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((result) => {
        alert("Success! Your message has been sent to Shivam.");
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert("Failed to send message. Please try again or contact me directly via email.");
        console.error("EmailJS Error:", error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        
        <div className="contact-grid">
          {/* Professional Contact Information from Resume */}
          <div className="contact-info">
            <div className="info-block">
              <span className="info-label">Email</span>
              <p className="info-value">shete.s8484@gmail.com</p>
            </div>
            <div className="info-block">
              <span className="info-label">Phone</span>
              <p className="info-value">+91 8484092539</p>
            </div>
            <div className="info-block">
              <span className="info-label">Location</span>
              <p className="info-value">Yavatmal, Maharashtra</p>
            </div>
          </div>

          {/* Minimalist Contact Form */}
          <div className="form-container">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="NAME" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="EMAIL" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="MESSAGE" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="hero-btn" 
                disabled={isSending}
              >
                {isSending ? 'SENDING...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© 2026 SHIVAM B. SHETE</p>
          <div className="footer-links">
            <a href="https://github.com/shivamshete1036" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://linkedin.com/in/shivam-shete-b631b32a1" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;