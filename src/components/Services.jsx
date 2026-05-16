import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRobot, FaDatabase, FaPalette, FaCloud } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: FaCode,
    color: '#61DAFB',
    title: 'Full Stack Web Development',
    description:
      'End-to-end web applications using Next.js, React, Node.js, and NestJS. From responsive frontends to robust REST APIs — I handle the complete stack.',
    tags: ['Next.js', 'React', 'Node.js', 'REST API'],
  },
  {
    icon: FaMobile,
    color: '#a78bfa',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps using React Native. Single codebase, native performance, and polished UI for both platforms.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: FaRobot,
    color: '#fbbf24',
    title: 'AI Integration',
    description:
      'Integrate AI capabilities into your products — chatbots, voice assistants, content generation, and analytics using Gemini AI and Claude APIs.',
    tags: ['Gemini AI', 'Claude AI', 'Voice API'],
  },
  {
    icon: FaDatabase,
    color: '#6ee7b7',
    title: 'Database Design & Backend',
    description:
      'Scalable database architecture using PostgreSQL, MongoDB, Firebase, and Supabase. Optimized queries, real-time listeners, and secure auth flows.',
    tags: ['Firebase', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    icon: FaPalette,
    color: '#f24e1e',
    title: 'UI/UX Design & Implementation',
    description:
      'Pixel-perfect, responsive interfaces using Ant Design, Tailwind CSS, and Framer Motion. Designed in Figma and built with clean, maintainable code.',
    tags: ['Figma', 'Tailwind', 'Ant Design', 'Framer Motion'],
  },
  {
    icon: FaCloud,
    color: '#38bdf8',
    title: 'Deployment & DevOps',
    description:
      'Deploying applications on Vercel, managing CI/CD workflows, Linux server setup, Docker containerization, and GitHub Actions automation.',
    tags: ['Vercel', 'Docker', 'GitHub Actions', 'Linux'],
  },
];

const Services = () => {
  return (
    <section className="services" id="offer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="services-header"
        >
          <h2 className="section-title">What I Offer</h2>
          <p className="services-subtitle">
            Comprehensive solutions to help your business grow and succeed online
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="service-card"
            >
              <div
                className="service-icon-wrap"
                style={{ '--icon-color': service.color }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
