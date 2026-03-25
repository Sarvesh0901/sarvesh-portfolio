import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypescript, SiJavascript, SiNextdotjs } from 'react-icons/si';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Database', icon: FaDatabase, color: '#FFD700' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

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
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="about-text"
          >
            <h3>Let me introduce myself</h3>
            <p>
              I'm a passionate Full Stack Developer and Designer with a love for creating 
              beautiful, functional, and user-friendly applications. With expertise 
              in modern web technologies, I transform ideas into reality through 
              clean, efficient code.
            </p>
            <p>
              My journey in software development is driven by curiosity and a 
              commitment to continuous learning. I believe in writing code that 
              is not only functional but also maintainable and scalable.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              designing creative solutions, or sharing knowledge with 
              the developer community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="skills-section"
          >
            <h3>My Tech Stack</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="skill-card"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <skill.icon 
                    size={40} 
                    style={{ color: skill.color }}
                  />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
