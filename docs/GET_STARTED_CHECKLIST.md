# Getting Started Checklist ✅

Use this checklist to get your portfolio up and running quickly!

## Phase 1: Initial Setup (5 minutes)

- [ ] Open the preview browser to see your portfolio
- [ ] Navigate through all sections (Home, About, Projects, Contact)
- [ ] Check it on mobile view (resize browser)

## Phase 2: Basic Customization (15-20 minutes)

### Update Personal Information
- [ ] Open `src/components/Hero.jsx`
  - [ ] Change "Your Name" to your actual name (line 14)
  - [ ] Update "Full Stack Developer" to your title (line 15)
  - [ ] Modify the description text (lines 18-20)

- [ ] Open `src/components/About.jsx`
  - [ ] Update your bio in the about-text section (lines 37-50)
  - [ ] Keep the tone professional yet friendly

- [ ] Open `src/components/Contact.jsx`
  - [ ] Update GitHub URL (line 10)
  - [ ] Update LinkedIn URL (line 16)
  - [ ] Update Twitter URL (line 22)
  - [ ] Update email address (line 28)

- [ ] Open `src/components/Footer.jsx`
  - [ ] Update "Your Name" in copyright (around line 52)
  - [ ] Update social media links (lines 14-17)

## Phase 3: Add Your Photo (5 minutes)

- [ ] Get a professional photo of yourself
  - Recommended: Headshot, clear background, good lighting
  - Size: Around 400x400px (square works best)
  
- [ ] Save photo as `profile.jpg` in `public/` folder

- [ ] Update `src/components/Hero.jsx`:
  ```javascript
  // Replace lines 36-40:
  <img src="/profile.jpg" alt="Your Name" className="profile-photo" />
  ```

- [ ] Add this CSS to `src/components/Hero.css`:
  ```css
  .profile-photo {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
  ```

## Phase 4: Update Skills (10 minutes)

- [ ] Open `src/components/About.jsx`
- [ ] Find the skills array (lines 9-16)
- [ ] Add/remove skills based on your expertise
- [ ] Find icons at https://react-icons.github.io/react-icons/
- [ ] Example skill:
  ```javascript
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  ```

## Phase 5: Add Your Projects (15-20 minutes)

- [ ] Prepare project screenshots (800x600px recommended)
- [ ] Save images in `public/` folder (e.g., `project1.jpg`)

- [ ] Open `src/components/Projects.jsx`
- [ ] Update the projects array (lines 6-27)
- [ ] For each project include:
  - [ ] Project title
  - [ ] Clear description (what it does, technologies used)
  - [ ] Relevant tech tags
  - [ ] GitHub repository link
  - [ ] Live demo link (if available)
  - [ ] Image path

Example:
```javascript
{
  title: 'E-Commerce Platform',
  description: 'A full-stack e-commerce website with cart functionality, payment integration, and admin dashboard.',
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  github: 'https://github.com/yourusername/ecommerce',
  live: 'https://ecommerce-demo.com',
  image: '/ecommerce-screenshot.jpg',
}
```

## Phase 6: Test Everything (5 minutes)

- [ ] Click all navigation links
- [ ] Verify all buttons work
- [ ] Check hover effects
- [ ] Test on different screen sizes
- [ ] Open browser console (F12) - ensure no errors
- [ ] Scroll through entire page

## Phase 7: Final Preparations (5 minutes)

- [ ] Run build test:
  ```bash
  npm run build
  ```
- [ ] If successful, run preview:
  ```bash
  npm run preview
  ```
- [ ] Double-check for any placeholder text you missed
- [ ] Verify all links are correct
- [ ] Check spelling and grammar

## Phase 8: Deploy to Vercel (10 minutes)

### Option A: Via GitHub (Recommended)
- [ ] Create new repository on GitHub named "portfolio"
- [ ] Initialize git:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
  git push -u origin main
  ```
- [ ] Go to vercel.com
- [ ] Click "New Project"
- [ ] Import your GitHub repository
- [ ] Click "Deploy"

### Option B: Via Vercel CLI
- [ ] Install Vercel CLI:
  ```bash
  npm install -g vercel
  ```
- [ ] Login:
  ```bash
  vercel login
  ```
- [ ] Deploy:
  ```bash
  vercel
  ```
- [ ] Follow prompts

## Phase 9: Post-Deployment (5 minutes)

- [ ] Visit your deployed URL
- [ ] Test on desktop
- [ ] Test on mobile
- [ ] Share with friends for feedback
- [ ] Add to your resume/LinkedIn
- [ ] Celebrate! 🎉

---

## Time Estimate

- **Minimum (Basic Info Only):** 30-40 minutes
- **Recommended (Full Customization):** 60-80 minutes
- **Including Deployment:** 70-100 minutes

## Tips for Success

1. ⏰ **Take your time** - Better to do it right than fast
2. 📱 **Test frequently** - Check changes in browser often
3. 📸 **Use quality images** - Makes a huge difference
4. ✍️ **Be authentic** - Let your personality shine through
5. 🔍 **Proofread** - Typos look unprofessional
6. 🎨 **Stay consistent** - Use same style throughout

## Common Mistakes to Avoid

❌ Using low-quality images
❌ Leaving placeholder text
❌ Broken links
❌ Too much text (keep it concise)
❌ Not testing on mobile
❌ Skipping the build test

## Need Help?

- **Customization questions?** → See CUSTOMIZATION_GUIDE.md
- **Deployment issues?** → See DEPLOYMENT_GUIDE.md
- **Command reference?** → See QUICK_REFERENCE.md
- **General info?** → See README.md

---

## You're Ready! 🚀

Follow this checklist step by step, and you'll have a professional portfolio website ready to impress!

**Remember:** Your portfolio represents YOU. Take pride in making it awesome!

Good luck! 🍀
