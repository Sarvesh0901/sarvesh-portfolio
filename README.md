# Portfolio Website

A modern, interactive portfolio website built with React.js, ready for deployment on Vercel.

## Features

- 🎨 Modern and responsive design
- ⚡ Smooth animations with Framer Motion
- 🎯 Interactive UI components
- 📱 Mobile-friendly layout
- 🔗 Social media integration
- 📧 Contact form
- 🚀 Ready for Vercel deployment

## Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Styling:** CSS3
- **Deployment:** Vercel

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── About.jsx & About.css
│   │   ├── Projects.jsx & Projects.css
│   │   ├── Contact.jsx & Contact.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Adding Your Information

1. **Personal Details:** Update the text content in each component:
   - `Hero.jsx` - Your name, title, and introduction
   - `About.jsx` - Your bio and skills
   - `Contact.jsx` - Your email and social media links
   - `Footer.jsx` - Your name and copyright

2. **Projects:** Edit the `projects` array in `Projects.jsx`:
   ```javascript
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       tags: ['React', 'Node.js'],
       github: 'https://github.com/yourusername/project',
       live: 'https://yourproject.com',
       image: '/path/to/image.jpg',
     },
     // Add more projects
   ];
   ```

3. **Skills:** Update the `skills` array in `About.jsx`:
   ```javascript
   const skills = [
     { name: 'Your Skill', icon: YourIcon, color: '#COLOR' },
     // Add more skills
   ];
   ```

4. **Social Links:** Update links in `Contact.jsx` and `Footer.jsx`:
   ```javascript
   url: 'https://github.com/yourusername'
   url: 'https://linkedin.com/in/yourusername'
   url: 'https://twitter.com/yourusername'
   ```

### Styling

Each component has its own CSS file. You can customize:
- Colors
- Spacing
- Typography
- Animations
- Responsive breakpoints

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy the project:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? (Select your account)
   - Link to existing project? **N**
   - Project name? **portfolio**
   - Directory? **./portfolio** (or just press Enter if you're in the portfolio directory)
   - Want to override settings? **N**

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Configure project:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. Click "Deploy"

### Environment Variables

If you need to add environment variables later:

1. In Vercel Dashboard, go to your project
2. Navigate to Settings → Environment Variables
3. Add your variables

## Sections

### Navigation
- Fixed navigation bar
- Smooth scroll to sections
- Mobile hamburger menu

### Hero Section
- Introduction with your name
- Call-to-action buttons
- Animated elements
- Scroll indicator

### About Section
- Personal bio
- Skills showcase with icons
- Animated skill cards

### Projects Section
- Project cards with images
- Hover effects
- Links to GitHub and live demos
- Technology tags

### Contact Section
- Contact form
- Social media links
- Animated icons

### Footer
- Quick links
- Social media icons
- Copyright information

## Future Enhancements

- [ ] Add GitHub API integration for real-time project data
- [ ] Implement dark mode toggle
- [ ] Add blog section
- [ ] Integrate contact form with email service
- [ ] Add testimonials section
- [ ] Implement analytics

## Tips for Customization

1. **Images:** Add your images to the `public/` folder and reference them with absolute paths
2. **Icons:** Browse available icons at [React Icons](https://react-icons.github.io/react-icons/)
3. **Colors:** Maintain consistency by using the same color palette throughout
4. **Content:** Keep descriptions concise and impactful
5. **Performance:** Optimize images before adding them

## Support

For any issues or questions, feel free to reach out or check:
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## License

This project is open source and available under the MIT License.

---

Made with ❤️ and React
