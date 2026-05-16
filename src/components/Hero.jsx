import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const TITLES = [
  'Full Stack Developer',
  'React & Next.js Engineer',
  'Firebase Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="hero" id="home">
      {/* Floating particles */}
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-dot" />
            Available for work
          </motion.div>

          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Sarvesh</h1>

          <h2 className="title">
            <span className="typed-text">{displayed}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="description">
            I craft high-performance web applications using modern technologies.
            Passionate about clean code, great UX, and turning ideas into
            production-ready products.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Coding</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope size={15} /> Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Sarvesh0901" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/sarvesh-patil-b7b8b5259" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:sarvesh843910@gmail.com" className="hero-social-link" aria-label="Email">
              <FaEnvelope size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-image"
        >
          <div className="image-ring-outer">
            <div className="image-wrapper">
              <img
                src="/SarveshPortfolio.jpeg"
                alt="Sarvesh"
                className="profile-img"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="scroll-indicator"
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
