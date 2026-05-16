import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          {/* LEFT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-image"
          >
            <div className="about-image-wrapper">
              <img src="/AboutSarvesh.jpeg" alt="Sarvesh" className="about-profile-img" />
            </div>
            {/* Second image slot — replace src when ready */}
            
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-text"
          >
            <h3>Let me introduce myself</h3>
            <p>
              I'm a <strong>Full Stack Developer</strong> based in Bengaluru, India,
              currently working at <span className="highlight">Adeptek Solutions</span>.
              I graduated with a B.Sc. in IT from Graphic Era University in 2025.
            </p>
            <p>
              My core stack is <strong>Next.js + React + Firebase</strong>. I build
              AI-powered products, e-commerce dashboards, and mobile apps with
              React Native. I love integrating AI APIs (Gemini, Claude) into products.
            </p>
            <p>
              I believe in clean, maintainable code and beautiful user experiences.
              Always learning, always building.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎓</span>
                <span>B.Sc. IT — Graphic Era University, 2025</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <span>Full Stack Dev @ Adeptek Solutions, Beng</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
