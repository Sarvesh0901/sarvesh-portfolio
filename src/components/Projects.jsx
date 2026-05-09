import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Shop E-commerce',
      description: 'A feature-rich e-commerce platform with a modern UI, product filtering, and shopping cart functionality.',
      tags: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/Sarvesh0901/E-commerce-.git',
      live: 'https://www.youreshop.in/',
      image: '/project4.png',
    },
    {
      title: 'See Your Weather',
      description: 'A dynamic weather application providing real-time forecasts, interactive maps, and detailed atmospheric data.',
      tags: ['React', 'OpenWeather API', 'CSS'],
      github: 'https://github.com/Sarvesh0901/Weather.git',
      live: 'https://seeyourweather.vercel.app/',
      image: '/weather-project.png',
    },
    {
      title: 'AI Content Generator',
      description: 'A powerful tool that uses AI to generate high-quality content for blogs and social media.',
      tags: ['JavaScript', 'MongoDB', 'CSS'],
      github: '#',
      live: '#',
      image: '/project3.jpeg',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" title="View Code">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.live} className="project-link" title="Live Demo">
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
