import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'E-Shop E-commerce',
    description:
      'A feature-rich e-commerce platform with a modern UI, product filtering, shopping cart, and Firebase backend. Supports real-time inventory updates and user authentication.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Sarvesh0901/E-commerce-.git',
    live: 'https://www.youreshop.in/',
    video: '/videos/eshop_new.webp',
    image: '/eshop_new.png',
  },
  {
    title: 'DevPulse AI',
    description:
      'Full-Stack GitHub Analytics & Repository Health Dashboard. Features a custom algorithm to score code quality and leverages Google Gemini 2.0 for automated AI commit summaries.',
    tags: ['Next.js 15', 'Express', 'Supabase', 'Gemini AI'],
    github: 'https://github.com/Sarvesh0901/devpulse-ui.git',
    live: 'https://devpulse-ui.vercel.app/',
    video: '/videos/devpulse.webp',
    image: '/devpulse.png',
  },
  {
    title: 'See Your Weather',
    description:
      'A dynamic weather application providing real-time forecasts, interactive maps, and detailed atmospheric data using the OpenWeather API.',
    tags: ['React', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/Sarvesh0901/Weather.git',
    live: 'https://seeyourweather.vercel.app/',
    video: '/videos/weather_new.webp',
    image: '/weather_new.png',
  },
  // Hidden — uncomment when Aurali is ready to launch
  // {
  //   title: 'Aurali — AI Voice Chat',
  //   description:
  //     'Conversational AI product with real-time voice-to-text. Built the full chat UI and integrated live voice input/output using Gemini AI. Features natural language understanding and voice response.',
  //   tags: ['Next.js', 'Firebase', 'Gemini AI', 'Voice API'],
  //   github: 'https://github.com/Sarvesh0901',
  //   live: '#',
  //   video: null,
  //   image: '/project1.jpeg',
  // },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className={`project-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >
              {/* Video / Image */}
              <div className="project-image-wrap">
                <div className="project-img-inner">
                  <img
                    src={project.video ?? project.image}
                    alt={project.title}
                    className={`project-video${!project.video ? ' project-kenburns' : ''}`}
                  />
                  <div className="project-img-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-btn"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="project-details">
                <span className="project-number">0{index + 1}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    href={project.github}
                    className="proj-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                  <a
                    href={project.live}
                    className="proj-btn proj-btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
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
