import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  // Auto-dismiss success and error messages after 5 seconds
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Sarvesh0901',
      color: '#a78bfa',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/sarvesh-patil-b7b8b5259',
      color: '#0A66C2',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:sarvesh843910@gmail.com',
      color: '#EA4335',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setStatusMessage(
        'EmailJS keys are missing in the .env file. Please configure VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
      );
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      title: formData.subject,
      to_name: 'Sarvesh',
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setStatusMessage(
        'Oops! Failed to send message. Please try again or email directly at sarvesh843910@gmail.com.'
      );
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-text"
          >
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>

            {/* Direct contact info */}
            <div className="contact-info">
              <a href="mailto:sarvesh843910@gmail.com" className="contact-info-item">
                <div className="contact-info-icon">
                  <FaEnvelope size={18} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">sarvesh843910@gmail.com</span>
                </div>
              </a>
              <a href="tel:+918431644930" className="contact-info-item">
                <div className="contact-info-icon">
                  <FaPhone size={18} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 84316 44930</span>
                </div>
              </a>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="social-link"
                  style={{ '--hover-color': link.color }}
                  title={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="form-alert form-alert-success"
                >
                  <FaCheckCircle className="alert-icon" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="form-alert form-alert-error"
                >
                  <FaExclamationCircle className="alert-icon" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                disabled={status === 'loading'}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                disabled={status === 'loading'}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn-submit ${status === 'loading' ? 'btn-loading' : ''}`}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <FaSpinner className="spin-icon" /> Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane style={{ marginRight: '8px' }} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
