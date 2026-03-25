import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDribbble } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/sarvesh843910',
      color: '#333',
    },
    {
      name: 'Dribbble',
      icon: FaDribbble,
      url: 'https://dribbble.com/sarvesh843910',
      color: '#EA4C89',
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-content"
        >
          <div className="contact-text">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Whether you have a 
              question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  style={{ '--hover-color': link.color }}
                >
                  <link.icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
