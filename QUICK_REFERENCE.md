# Quick Reference Card

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name

# Install dev dependency
npm install --save-dev package-name
```

## Git Commands

```bash
# Initialize repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Check status
git status

# View commit history
git log --oneline
```

## File Structure

```
portfolio/
├── src/
│   ├── components/      # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   └── index.css       # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
└── vercel.json         # Vercel config
```

## Common Customizations

### Update Personal Info
- **Name/Title:** `src/components/Hero.jsx` (lines 14-15)
- **Bio:** `src/components/About.jsx` (lines 37-50)
- **Contact:** `src/components/Contact.jsx` (lines 7-29)

### Add Projects
Edit `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Description',
    tags: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
    image: '/image.jpg',
  }
];
```

### Update Skills
Edit `src/components/About.jsx`:
```javascript
const skills = [
  { name: 'Skill', icon: IconComponent, color: '#COLOR' }
];
```

### Change Colors
Search in CSS files for:
- `#667eea` (primary purple)
- `#764ba2` (secondary purple)

Replace with your colors.

## Deployment Checklist

✅ Test locally: `npm run build`
✅ Update all placeholder content
✅ Add your photo to `/public`
✅ Optimize images
✅ Update social links
✅ Add real projects
✅ Test on mobile
✅ Push to GitHub
✅ Deploy on Vercel

## Useful Links

- **Icons:** https://react-icons.github.io/react-icons/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Color Picker:** https://htmlcolorcodes.com/
- **Image Optimization:** https://squoosh.app/

## Tips

1. **Hot Reload:** Changes appear instantly in dev
2. **Console:** Check browser console for errors
3. **Responsive:** Test on different screen sizes
4. **Performance:** Keep images under 200KB
5. **SEO:** Update meta tags in `index.html`

## Emergency Fixes

### Site not loading?
```bash
npm run dev
# Check terminal for errors
```

### Styles broken?
```bash
# Clear cache and restart
rm -rf node_modules
npm install
npm run dev
```

### Build fails?
```bash
# Fix errors shown by:
npm run build
```

---

Keep this handy for quick reference! 📝
