import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Sarvesh</h1>
          <h2 className="title">Full Stack Developer & Designer</h2>
          <p className="description">
            I build exceptional digital experiences that combine elegant code 
            with stunning design.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-image"
        >
          <div className="image-wrapper">
            <img
              src="/profileImage.jpeg"
              alt="Sarvesh"
              className="profile-img"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="scroll-indicator"
      >
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
