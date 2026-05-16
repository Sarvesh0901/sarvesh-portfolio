import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub',   icon: FaGithub,   url: 'https://github.com/Sarvesh0901' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/sarvesh-patil-b7b8b5259' },
    { name: 'Email',    icon: FaEnvelope, url: 'mailto:sarvesh843910@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home',     href: '#home'     },
    { name: 'About',    href: '#about'    },
    { name: 'Skills',   href: '#skills'   },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact',  href: '#contact'  },
  ];

  return (
    <footer className="footer">
      {/* Top gradient line */}
      <div className="footer-gradient-line" />

      <div className="container">
        <div className="footer-content">

          {/* Brand column */}
          <div className="footer-brand">
            <span className="footer-logo">Sarvesh</span>
            <p className="footer-tagline">
              Full Stack Developer · AI Enthusiast · Bengaluru, India
            </p>
            <div className="footer-contact-mini">
              <a href="mailto:sarvesh843910@gmail.com" className="footer-contact-link">
                <FaEnvelope size={13} />
                sarvesh843910@gmail.com
              </a>
              <a href="tel:+919876543210" className="footer-contact-link">
                <FaPhone size={13} />
                +91 98765 43210
              </a>
              <span className="footer-contact-link footer-location">
                <FaMapMarkerAlt size={13} />
                Bengaluru, Karnataka
              </span>
            </div>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="footer-social-link"
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div className="footer-section">
            <h4>Tech Stack</h4>
            <div className="footer-stack">
              {['Next.js', 'React', 'Firebase', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase'].map((tech) => (
                <span key={tech} className="footer-stack-tag">{tech}</span>
              ))}
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="footer-bottom"
        >
          <p>
            © {currentYear} Sarvesh. Built with{' '}
            <FaHeart style={{ color: '#e74c3c' }} size={12} />{' '}
            using React & Framer Motion
          </p>
          <p className="footer-bottom-right">
            Deployed on Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
