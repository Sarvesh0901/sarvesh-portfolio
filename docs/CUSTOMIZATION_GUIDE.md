# Portfolio Customization Guide

This guide will help you customize your portfolio website. Follow these steps to personalize it with your information.

## Quick Start Checklist

### 1. Update Personal Information

#### Hero Section (`src/components/Hero.jsx`)
```javascript
// Line 14-15: Update your name and title
<p className="greeting">Hello, I'm</p>
<h1 className="name">Your Name</h1>
<h2 className="title">Full Stack Developer</h2>

// Line 18-20: Update your description
<p className="description">
  I build exceptional digital experiences...
</p>
```

#### About Section (`src/components/About.jsx`)
```javascript
// Line 37-50: Update your bio
<p>
  I'm a passionate Full Stack Developer...
</p>
```

### 2. Add Your Photo

In `Hero.jsx`, replace the placeholder with your photo:

```javascript
// Replace this (lines 36-40):
<div className="image-placeholder">
  <span>Add Your Photo</span>
</div>

// With this:
<img src="/your-photo.jpg" alt="Your Name" className="profile-photo" />
```

Then add your photo to the `public/` folder.

### 3. Update Skills (`src/components/About.jsx`)

```javascript
const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  // Add or remove skills as needed
];
```

You can find more icons at: https://react-icons.github.io/react-icons/

### 4. Add Your Projects (`src/components/Projects.jsx`)

Replace the placeholder projects with your actual projects:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'A detailed description of what your project does...',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project-name',
    live: 'https://your-live-demo.com',
    image: '/project-screenshot.jpg',
  },
  // Add more projects
];
```

**Tips for projects:**
- Use high-quality screenshots (recommended size: 800x600px)
- Write clear, concise descriptions
- Include relevant technologies in tags
- Always provide working links when possible

### 5. Update Contact Information (`src/components/Contact.jsx`)

```javascript
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/yourusername',  // Update this
    color: '#333',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/yourusername',  // Update this
    color: '#0077B5',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/yourusername',  // Update this
    color: '#1DA1F2',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:your.email@example.com',  // Update this
    color: '#EA4335',
  },
];
```

### 6. Update Footer (`src/components/Footer.jsx`)

```javascript
// Line 10: Update copyright year and name
© {currentYear} Your Name. Made with <FaHeart className="heart-icon" /> and React

// Lines 14-17: Update social links
const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/yourusername' },
  // ... update all links
];
```

## Color Scheme Customization

The main color scheme uses a purple gradient:
- Primary: `#667eea`
- Secondary: `#764ba2`

To change colors, search and replace in CSS files:
- `src/components/Hero.css`
- `src/components/About.css`
- `src/components/Projects.css`
- `src/components/Contact.css`
- `src/components/Navbar.css`
- `src/components/Footer.css`

## Font Customization

Fonts are defined in `src/index.css`. To change them:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...;
}
```

## Adding New Sections

1. Create new component in `src/components/`
2. Import in `App.jsx`
3. Add to the component tree
4. Create corresponding CSS file
5. Add navigation link in `Navbar.jsx`

## Testing Locally

After making changes:

```bash
npm run dev
```

Visit `http://localhost:5173` to see your changes.

## Building for Production

Before deploying:

```bash
npm run build
npm run preview
```

This ensures everything works correctly in production mode.

## Common Issues

### Images Not Loading
- Make sure images are in the `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

### Styles Not Updating
- Clear browser cache
- Restart dev server
- Check for CSS syntax errors

### Icons Not Showing
- Ensure you've imported the icon from react-icons
- Check icon name spelling

## Best Practices

1. **Keep it simple:** Don't overcrowd with information
2. **Use high-quality images:** Compressed but clear
3. **Test on mobile:** Most visitors will use mobile devices
4. **Keep loading fast:** Optimize images, limit animations
5. **Proofread:** Check for typos and broken links

## Next Steps

After customization:

1. Test thoroughly on different devices
2. Push to GitHub
3. Deploy to Vercel
4. Share your portfolio!

---

Need help? Check the main README.md for more details.
