import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaFire, FaLinux, FaDocker,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiAntdesign, SiMongodb, SiPostgresql, SiNestjs, SiExpress,
  SiSupabase, SiVercel, SiVscodium, SiIntellijidea,
  SiGooglegemini, SiGithubcopilot, SiOpenai, SiPostman,
  SiN8N, SiJira, SiFigma, SiSwagger, SiGithub,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import './Skills.css';

const categories = [
  {
    label: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'Next.js',      icon: SiNextdotjs,        color: '#ffffff' },
      { name: 'React',        icon: FaReact,            color: '#61DAFB' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
      { name: 'TypeScript',   icon: SiTypescript,       color: '#60a5fa' },
      { name: 'JavaScript',   icon: SiJavascript,       color: '#fde68a' },
      { name: 'Tailwind CSS', icon: SiTailwindcss,      color: '#38bdf8' },
      { name: 'Ant Design',   icon: SiAntdesign,        color: '#ff4d4f' },
    ],
  },
  {
    label: 'Backend & Database',
    icon: '🗄️',
    skills: [
      { name: 'Node.js',    icon: FaNodeJs,     color: '#86efac' },
      { name: 'NestJS',     icon: SiNestjs,     color: '#e0234e' },
      { name: 'Express',    icon: SiExpress,    color: '#aaaaaa' },
      { name: 'Firebase',   icon: FaFire,       color: '#fbbf24' },
      { name: 'MongoDB',    icon: SiMongodb,    color: '#6ee7b7' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#93c5fd' },
      { name: 'Supabase',   icon: SiSupabase,   color: '#3ecf8e' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git',    icon: FaGitAlt, color: '#fca5a5' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Linux',  icon: FaLinux,  color: '#fde68a' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Docker', icon: FaDocker, color: '#60a5fa' },
    ],
  },
  {
    label: 'Tools & Automation',
    icon: '🛠️',
    skills: [
      { name: 'VS Code',        icon: SiVscodium,      color: '#007ACC' },
      { name: 'IntelliJ',       icon: SiIntellijidea,  color: '#fe2d55' },
      { name: 'Postman',        icon: SiPostman,       color: '#FF6C37' },
      { name: 'Figma',          icon: SiFigma,         color: '#f24e1e' },
      { name: 'Jira',           icon: SiJira,          color: '#0052cc' },
      { name: 'Swagger',        icon: SiSwagger,       color: '#85ea2d' },
      { name: 'n8n',            icon: SiN8N,           color: '#ea4b71' },
      { name: 'Gemini AI',      icon: SiGooglegemini,  color: '#4285F4' },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#aaaaaa' },
      { name: 'Claude AI',      icon: SiOpenai,        color: '#c47b3c' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="skills-subtitle">
            A comprehensive look at the tools and technologies I use to build
            modern applications
          </p>
        </motion.div>

        <div className="skills-categories">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="skill-category"
            >
              <div className="category-header">
                <span className="category-icon">{cat.icon}</span>
                <h3 className="category-label">{cat.label}</h3>
              </div>

              <div className="skill-grid">
                {cat.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="skill-card"
                  >
                    <skill.icon size={30} style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
