import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your amazing project. Describe what it does and the technologies used.',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Project+1',
    },
    {
      title: 'Project 2',
      description: 'Another impressive project showcasing your skills. Highlight key features and technologies.',
      tags: ['TypeScript', 'PostgreSQL', 'Express'],
      github: '#',
      live: '#',
      image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Project+2',
    },
    {
      title: 'Project 3',
      description: 'Your third fantastic project. Describe the problem it solves and your approach.',
      tags: ['JavaScript', 'MongoDB', 'CSS'],
      github: '#',
      live: '#',
      image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Project+3',
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
