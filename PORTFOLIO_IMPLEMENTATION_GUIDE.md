# Portfolio Implementation Guide
**Developer:** Sarvesh | **Stack:** React + Vite + Framer Motion  
**Theme:** Warm Gradient (Red → Pink → Purple on Dark Background)

---

## Table of Contents
1. [Color System & CSS Variables](#1-color-system--css-variables)
2. [Responsive Breakpoints](#2-responsive-breakpoints)
3. [Section Order & Structure](#3-section-order--structure)
4. [About Section — Two-Column Layout](#4-about-section--two-column-layout)
5. [Skills / Technologies Section](#5-skills--technologies-section)
6. [Projects Section — Alternating Layout](#6-projects-section--alternating-layout)
7. [Services Section](#7-services-section)
8. [Remaining Sections (Contact & Footer)](#8-remaining-sections-contact--footer)
9. [Full CSS Reference](#9-full-css-reference)
10. [File Change Summary](#10-file-change-summary)

---

## 1. Color System & CSS Variables

All colors are defined in `src/index.css` inside `:root {}`. Never use raw hex values in component CSS — always use these variables.

```css
/* src/index.css */
:root {
  /* === PRIMARY GRADIENT THEME === */
  --clr-primary:        #c0392b;   /* deep red */
  --clr-primary-light:  #e74c3c;   /* bright red */
  --clr-secondary:      #9b59b6;   /* purple */
  --clr-accent:         #e91e8c;   /* hot pink */

  /* Gradients */
  --clr-gradient:       linear-gradient(135deg, #c0392b 0%, #e91e8c 50%, #8e44ad 100%);
  --clr-gradient-btn:   linear-gradient(135deg, #e74c3c 0%, #c0392b 40%, #9b59b6 100%);
  --clr-gradient-text:  linear-gradient(135deg, #ff6b6b 0%, #e91e8c 50%, #a855f7 100%);

  /* === DARK BACKGROUNDS === */
  --clr-bg:             #0e0b14;   /* main page background */
  --clr-bg-2:           #120d1a;   /* alternate section background */
  --clr-bg-card:        rgba(255, 255, 255, 0.04);  /* glass card */
  --clr-bg-glass:       rgba(255, 255, 255, 0.05);

  /* === TEXT === */
  --clr-text:           #e8dff0;   /* body text */
  --clr-text-muted:     #9e8fb0;   /* secondary text */
  --clr-text-heading:   #f5eeff;   /* headings */

  /* === BORDERS === */
  --clr-border:         rgba(255, 255, 255, 0.07);
  --clr-border-hover:   rgba(192, 57, 43, 0.5);

  /* === GLASS EFFECT === */
  --glass-bg:           rgba(255, 255, 255, 0.05);
  --glass-border:       1px solid rgba(255, 255, 255, 0.09);
  --glass-shadow:       0 8px 32px rgba(0, 0, 0, 0.5);
  --glass-blur:         blur(16px);

  /* === LAYOUT === */
  --section-padding:    clamp(60px, 8vw, 120px) 5%;
  --container-max:      1200px;

  /* === BORDER RADIUS === */
  --radius-sm:    8px;
  --radius-md:    16px;
  --radius-lg:    24px;
  --radius-xl:    32px;

  /* === TRANSITIONS === */
  --transition:       all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow:  all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tag / Badge Colors

| Use Case | Background | Text Color |
|---|---|---|
| Section tag | `rgba(192,57,43,0.12)` | `#ff8a7a` |
| Tag border | `rgba(192,57,43,0.25)` | — |
| Skill card hover | `rgba(192,57,43,0.06)` | — |
| Border hover | `rgba(192,57,43,0.4)` | — |
| Tool chip hover | `rgba(142,68,173,0.4)` | `--clr-text-heading` |

### Gradient Text (for headings)
```css
.gradient-text {
  background: var(--clr-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 2. Responsive Breakpoints

Use these exact breakpoints throughout **all** component CSS files.

```css
/* Desktop first — all base styles are for desktop (1200px+) */

/* === TABLET === */
@media (max-width: 968px) {
  /* Two-column grids → single column */
  /* Font sizes may reduce slightly */
  /* Padding reduces */
}

/* === MOBILE === */
@media (max-width: 480px) {
  /* Further padding reduction */
  /* Stacked buttons go full-width */
  /* Smaller font sizes */
}
```

**Rule:** Every `grid-template-columns` that uses `1fr 1fr` or `1fr 1.4fr` must collapse to `1fr` at `max-width: 968px`.

---

## 3. Section Order & Structure

The `src/App.jsx` section order must be:

```jsx
// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';       // intro text + image
import Skills from './components/Skills';     // all tech skills + tools
import Projects from './components/Projects'; // alternating layout
import Services from './components/Services'; // NEW — add this
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
```

> **Important:** The current `About.jsx` has skills mixed in. Split them into two separate components: `About.jsx` (text + image only) and `Skills.jsx` (all technology grids).

---

## 4. About Section — Two-Column Layout

### File: `src/components/About.jsx`

**What it shows:**
- Left side: "Let me introduce myself" heading, bio paragraphs, highlight bullets
- Right side: Profile photo (`/profileImage.jpeg`) with spinning gradient border

```jsx
// src/components/About.jsx
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
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
                <span>Full Stack Dev @ Adeptek Solutions, Bengaluru</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤖</span>
                <span>Built Aurali — AI voice chat with real-time voice-to-text</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📍</span>
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-image"
          >
            <div className="about-image-wrapper">
              <img src="/profileImage.jpeg" alt="Sarvesh" className="about-profile-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

### File: `src/components/About.css`

```css
.about {
  padding: var(--section-padding);
  background: var(--clr-bg-2);
}

.about-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;  /* text wider than image */
  gap: clamp(3rem, 6vw, 6rem);
  align-items: center;
}

/* --- Left: Text --- */
.about-text h3 {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  font-weight: 700;
  margin-bottom: 1.25rem;
  background: var(--clr-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text p {
  color: var(--clr-text-muted);
  line-height: 1.85;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.about-text p strong {
  color: #e74c3c;
  -webkit-text-fill-color: #e74c3c;
}

.highlight {
  color: #a78bfa;
  font-weight: 600;
  -webkit-text-fill-color: #a78bfa;
}

.about-highlights {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--clr-text-muted);
  background: var(--clr-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-sm);
  padding: 0.7rem 1rem;
  transition: var(--transition);
}

.highlight-item:hover {
  border-color: rgba(192, 57, 43, 0.3);
  color: var(--clr-text);
}

.highlight-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

/* --- Right: Image --- */
.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image-wrapper {
  width: clamp(220px, 28vw, 320px);
  height: clamp(220px, 28vw, 320px);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.about-profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.about-image-wrapper:hover .about-profile-img {
  transform: scale(1.05);
}

/* Spinning gradient border */
.about-image-wrapper::before {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #c0392b, #e91e8c, #8e44ad, #c0392b);
  z-index: -1;
  animation: rotateBorder 8s linear infinite;
  mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px));
}

@keyframes rotateBorder {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* === RESPONSIVE === */
@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;   /* stack vertically */
    text-align: center;
    gap: 2.5rem;
  }
  .about-image {
    order: -1;                    /* image goes above text on tablet/mobile */
  }
  .highlight-item {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .about-image-wrapper {
    width: 200px;
    height: 200px;
  }
}
```

---

## 5. Skills / Technologies Section

### Create new file: `src/components/Skills.jsx`

This is a **brand new component** split out from About. It has three parts:
1. Section heading + subtitle
2. Four category grids (Frontend / Backend & DB / DevOps & Cloud / Tools & Automation)
3. Each category is a labeled card group with icons

```jsx
// src/components/Skills.jsx
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
      { name: 'Next.js',       icon: SiNextdotjs,        color: '#ffffff' },
      { name: 'React',         icon: FaReact,            color: '#61DAFB' },
      { name: 'React Native',  icon: TbBrandReactNative, color: '#61DAFB' },
      { name: 'TypeScript',    icon: SiTypescript,       color: '#60a5fa' },
      { name: 'JavaScript',    icon: SiJavascript,       color: '#fde68a' },
      { name: 'Tailwind CSS',  icon: SiTailwindcss,      color: '#38bdf8' },
      { name: 'Ant Design',    icon: SiAntdesign,        color: '#ff4d4f' },
    ],
  },
  {
    label: 'Backend & Database',
    icon: '🗄️',
    skills: [
      { name: 'Node.js',     icon: FaNodeJs,    color: '#86efac' },
      { name: 'NestJS',      icon: SiNestjs,    color: '#e0234e' },
      { name: 'Express',     icon: SiExpress,   color: '#aaaaaa' },
      { name: 'Firebase',    icon: FaFire,      color: '#fbbf24' },
      { name: 'MongoDB',     icon: SiMongodb,   color: '#6ee7b7' },
      { name: 'PostgreSQL',  icon: SiPostgresql,color: '#93c5fd' },
      { name: 'Supabase',    icon: SiSupabase,  color: '#3ecf8e' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git',     icon: FaGitAlt,  color: '#fca5a5' },
      { name: 'GitHub',  icon: SiGithub,  color: '#ffffff' },
      { name: 'Linux',   icon: FaLinux,   color: '#fde68a' },
      { name: 'Vercel',  icon: SiVercel,  color: '#ffffff' },
      { name: 'Docker',  icon: FaDocker,  color: '#60a5fa' },
    ],
  },
  {
    label: 'Tools & Automation',
    icon: '🛠️',
    skills: [
      { name: 'VS Code',         icon: SiVscodium,      color: '#007ACC' },
      { name: 'IntelliJ',        icon: SiIntellijidea,  color: '#fe2d55' },
      { name: 'Postman',         icon: SiPostman,       color: '#FF6C37' },
      { name: 'Figma',           icon: SiFigma,         color: '#f24e1e' },
      { name: 'Jira',            icon: SiJira,          color: '#0052cc' },
      { name: 'Swagger',         icon: SiSwagger,       color: '#85ea2d' },
      { name: 'n8n',             icon: SiN8N,           color: '#ea4b71' },
      { name: 'Gemini AI',       icon: SiGooglegemini,  color: '#4285F4' },
      { name: 'GitHub Copilot',  icon: SiGithubcopilot, color: '#aaaaaa' },
      { name: 'Claude AI',       icon: SiOpenai,        color: '#c47b3c' },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        {/* Section heading */}
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

        {/* Category grids */}
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
```

### Create new file: `src/components/Skills.css`

```css
.skills {
  padding: var(--section-padding);
  background: var(--clr-bg);   /* alternates with About's --clr-bg-2 */
}

/* Header */
.skills-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.skills-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: var(--clr-text-muted);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Category layout */
.skills-categories {
  display: grid;
  grid-template-columns: 1fr 1fr;   /* 2 columns on desktop */
  gap: 2rem;
}

/* Single category card */
.skill-category {
  background: var(--clr-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: var(--transition);
}

.skill-category:hover {
  border-color: rgba(192, 57, 43, 0.25);
}

/* Category header row */
.category-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.category-icon {
  font-size: 1.3rem;
}

.category-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--clr-text-heading);
  background: var(--clr-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Skill icon grid inside each category */
.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.75rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.03);
  border: var(--glass-border);
  border-radius: var(--radius-md);
  padding: 0.85rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  cursor: default;
  transition: var(--transition);
}

.skill-card:hover {
  border-color: rgba(192, 57, 43, 0.4);
  background: rgba(192, 57, 43, 0.06);
}

.skill-card span {
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--clr-text-muted);
  text-align: center;
  line-height: 1.2;
}

/* === RESPONSIVE === */
@media (max-width: 968px) {
  .skills-categories {
    grid-template-columns: 1fr;   /* single column on tablet */
  }
}

@media (max-width: 480px) {
  .skill-category {
    padding: 1.25rem;
  }
  .skill-grid {
    grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
  }
}
```

> **Icon import note:** The `SiN8N` icon may not exist in your version of react-icons. If the build fails, replace it with `SiZapier` or remove it and use a plain text fallback.

---

## 6. Projects Section — Alternating Layout

### File: `src/components/Projects.jsx`

The layout alternates: odd projects have image-left / details-right, even projects have details-left / image-right.

```jsx
// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Aurali — AI Voice Chat',
    description:
      'Conversational AI product with real-time voice-to-text. Built the full chat UI and integrated live voice input/output using Gemini AI. Features natural language understanding and voice response.',
    tags: ['Next.js', 'Firebase', 'Gemini AI', 'Voice API'],
    github: 'https://github.com/Sarvesh0901',
    live: '#',
    image: '/project1.jpeg',
  },
  {
    title: 'DevPulse AI',
    description:
      'Full-Stack GitHub Analytics & Repository Health Dashboard. Features a custom algorithm to score code quality and leverages Google Gemini 2.0 for automated AI commit summaries.',
    tags: ['Next.js 15', 'Express', 'Supabase', 'Gemini AI'],
    github: 'https://github.com/Sarvesh0901/devpulse-ui.git',
    live: 'https://devpulse-ui.vercel.app/',
    image: '/devpulse.png',
  },
  {
    title: 'E-Shop E-commerce',
    description:
      'A feature-rich e-commerce platform with a modern UI, product filtering, shopping cart, and Firebase backend. Supports real-time inventory updates and user authentication.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/Sarvesh0901/E-commerce-.git',
    live: 'https://www.youreshop.in/',
    image: '/project4.png',
  },
  {
    title: 'See Your Weather',
    description:
      'A dynamic weather application providing real-time forecasts, interactive maps, and detailed atmospheric data using the OpenWeather API.',
    tags: ['React', 'OpenWeather API', 'CSS'],
    github: 'https://github.com/Sarvesh0901/Weather.git',
    live: 'https://seeyourweather.vercel.app/',
    image: '/weather-project.png',
  },
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
              {/* Image */}
              <div className="project-image-wrap">
                <div className="project-img-inner">
                  <img src={project.image} alt={project.title} />
                  <div className="project-img-overlay">
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="overlay-btn" title="Live Demo">
                      <FaExternalLinkAlt size={16} />
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
                  <a href={project.github} className="proj-btn" target="_blank"
                     rel="noopener noreferrer">
                    <FaGithub size={16} /> View Code
                  </a>
                  <a href={project.live} className="proj-btn proj-btn-outline"
                     target="_blank" rel="noopener noreferrer">
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
```

### File: `src/components/Projects.css`

```css
.projects {
  padding: var(--section-padding);
  background: var(--clr-bg-2);
}

/* Header */
.projects-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.projects-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: var(--clr-text-muted);
  max-width: 480px;
  margin: 0 auto;
}

/* List of project rows */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
}

/* Single project row — image LEFT, details RIGHT */
.project-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
}

/* Even rows — details LEFT, image RIGHT */
.project-row.reverse {
  direction: rtl;   /* flip columns */
}

.project-row.reverse > * {
  direction: ltr;   /* reset text direction inside */
}

/* Image wrapper */
.project-image-wrap {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.project-img-inner {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: var(--glass-border);
}

.project-img-inner img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.project-img-inner:hover img {
  transform: scale(1.04);
}

.project-img-overlay {
  position: absolute;
  inset: 0;
  background: rgba(14, 11, 20, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: var(--transition);
  backdrop-filter: blur(4px);
}

.project-img-inner:hover .project-img-overlay {
  opacity: 1;
}

.overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0.65rem 1.4rem;
  background: var(--clr-gradient-btn);
  color: #fff;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: var(--transition);
}

.overlay-btn:hover {
  transform: scale(1.05);
}

/* Details */
.project-details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-number {
  font-size: 3rem;
  font-weight: 800;
  background: var(--clr-gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.25;
  line-height: 1;
}

.project-title {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--clr-text-heading);
  margin-top: -0.5rem;
}

.project-desc {
  font-size: 0.925rem;
  color: var(--clr-text-muted);
  line-height: 1.8;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
  background: rgba(192, 57, 43, 0.12);
  border: 1px solid rgba(192, 57, 43, 0.25);
  color: #ff8a7a;
  letter-spacing: 0.02em;
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.proj-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 0.65rem 1.3rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  background: var(--clr-gradient-btn);
  color: #fff;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(192, 57, 43, 0.3);
}

.proj-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(192, 57, 43, 0.45);
}

.proj-btn-outline {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--clr-text);
  box-shadow: none;
}

.proj-btn-outline:hover {
  border-color: rgba(192, 57, 43, 0.5);
  color: #fff;
  background: rgba(192, 57, 43, 0.08);
  box-shadow: none;
}

/* === RESPONSIVE === */
@media (max-width: 968px) {
  .project-row,
  .project-row.reverse {
    grid-template-columns: 1fr;   /* single column */
    direction: ltr;               /* reset reverse direction */
  }

  .project-img-inner img {
    height: 220px;
  }

  .project-number {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .project-img-inner img {
    height: 180px;
  }

  .proj-btn {
    padding: 0.6rem 1rem;
    font-size: 0.8rem;
  }
}
```

---

## 7. Services Section

### Create new file: `src/components/Services.jsx`

```jsx
// src/components/Services.jsx
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
    <section className="services" id="services">
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
              <div className="service-icon-wrap" style={{ '--icon-color': service.color }}>
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
```

### Create new file: `src/components/Services.css`

```css
.services {
  padding: var(--section-padding);
  background: var(--clr-bg);
}

.services-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 5vw, 4rem);
}

.services-subtitle {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: var(--clr-text-muted);
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.7;
}

/* 3-column grid on desktop */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: var(--clr-bg-card);
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: var(--transition);
  cursor: default;
}

.service-card:hover {
  border-color: rgba(192, 57, 43, 0.3);
  background: rgba(192, 57, 43, 0.03);
}

/* Icon circle */
.service-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.service-card:hover .service-icon-wrap {
  background: rgba(var(--icon-color), 0.1);
  border-color: rgba(192, 57, 43, 0.25);
}

.service-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--clr-text-heading);
  line-height: 1.3;
}

.service-desc {
  font-size: 0.875rem;
  color: var(--clr-text-muted);
  line-height: 1.75;
  flex: 1;   /* pushes tags to bottom */
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}

.service-tag {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 50px;
  background: rgba(192, 57, 43, 0.1);
  border: 1px solid rgba(192, 57, 43, 0.2);
  color: #ff8a7a;
}

/* === RESPONSIVE === */
@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);   /* 2 columns on tablet */
  }
}

@media (max-width: 580px) {
  .services-grid {
    grid-template-columns: 1fr;   /* 1 column on mobile */
  }

  .service-card {
    padding: 1.25rem;
  }
}
```

---

## 8. Remaining Sections (Contact & Footer)

These sections remain mostly unchanged. Ensure the Contact and Footer CSS files use the warm-red theme variables.

**Key color replacements in existing CSS:**
- All `#7c3aed` (old purple) → `#c0392b` (new red)
- All `rgba(124, 58, 237, ...)` → `rgba(192, 57, 43, ...)`
- All `#06b6d4` (old cyan) → `#9b59b6` (purple)
- All `rgba(6, 182, 212, ...)` → `rgba(142, 68, 173, ...)`

Also add `Skills` and `Services` to the Navbar links:

```jsx
// src/components/Navbar.jsx — update navLinks array
const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Skills',   href: '#skills'   },  // ADD
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },  // ADD
  { name: 'Contact',  href: '#contact'  },
];
```

---

## 9. Full CSS Reference

### Section background alternation pattern

| Section | Background Variable |
|---|---|
| Hero | `--clr-bg` (`#0e0b14`) |
| About | `--clr-bg-2` (`#120d1a`) |
| Skills | `--clr-bg` |
| Projects | `--clr-bg-2` |
| Services | `--clr-bg` |
| Contact | `--clr-bg-2` |
| Footer | `#080510` (darkest) |

This alternation creates visual separation between sections without borders.

### Section title — reusable style

Already defined in `index.css`. Just add `className="section-title"` to any `<h2>`.

```css
/* Already in index.css — do not duplicate */
.section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: clamp(3rem, 6vw, 5rem);
  background: var(--clr-gradient-text);  /* red → pink → purple */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: block;
  width: 100%;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--clr-gradient);
  border-radius: 2px;
}
```

### Glass card — reusable pattern

```css
.glass-card {
  background: var(--clr-bg-card);    /* rgba(255,255,255,0.04) */
  border: var(--glass-border);       /* 1px solid rgba(255,255,255,0.09) */
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: var(--transition);
}

.glass-card:hover {
  border-color: rgba(192, 57, 43, 0.3);
}
```

### Gradient button — reusable pattern

```css
.btn-gradient {
  background: var(--clr-gradient-btn);
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.85rem 1.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.35);
}

.btn-gradient:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(192, 57, 43, 0.5);
}
```

---

## 10. File Change Summary

| Action | File | What Changes |
|---|---|---|
| **MODIFY** | `src/index.css` | Full color system — warm red/pink/purple |
| **MODIFY** | `src/App.jsx` | Add `Skills` + `Services` imports & rendering |
| **MODIFY** | `src/components/About.jsx` | Remove skills, add profile image on right |
| **MODIFY** | `src/components/About.css` | Two-column layout, spinning image border |
| **CREATE** | `src/components/Skills.jsx` | New component — all 4 tech categories |
| **CREATE** | `src/components/Skills.css` | Category grid layout + responsive |
| **MODIFY** | `src/components/Projects.jsx` | Alternating left/right layout |
| **MODIFY** | `src/components/Projects.css` | Row-based alternating layout |
| **CREATE** | `src/components/Services.jsx` | New component — 6 service cards |
| **CREATE** | `src/components/Services.css` | 3-col → 2-col → 1-col responsive grid |
| **MODIFY** | `src/components/Navbar.jsx` | Add Skills + Services to nav links |
| **MODIFY** | `src/components/Navbar.css` | Red accent colors |
| **MODIFY** | `src/components/Contact.css` | Red accent colors |
| **MODIFY** | `src/components/Footer.jsx` | Update name, links |
| **MODIFY** | `src/components/Footer.css` | Red accent colors |
| **MODIFY** | `src/components/Hero.css` | Red/pink/purple gradient orbs |

### Installation check

```bash
# Verify react-icons supports all used icons before building
npm run build

# If SiN8N fails, replace in Skills.jsx with any valid icon or remove it
# Check icon availability at: https://react-icons.github.io/react-icons/
```

### Deploy

```bash
npm run build    # verify clean build
git add -A
git commit -m "feat: redesign with warm gradient theme + skills/projects/services"
git push
# Vercel auto-deploys on push
```

---

*Guide version 1.0 — for Sarvesh portfolio at iamsarvesh.vercel.app*
