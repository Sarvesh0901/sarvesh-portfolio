import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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
              <a href="tel:+919876543210" className="contact-info-item">
                <div className="contact-info-icon">
                  <FaPhone size={18} />
                </div>
                <div className="contact-info-body">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 98765 43210</span>
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
          >
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
