# Deployment Guide to Vercel

This guide covers multiple methods to deploy your portfolio to Vercel.

## Prerequisites

- Node.js installed
- GitHub account (recommended)
- Vercel account (free tier is sufficient)

## Method 1: Deploy via GitHub (Recommended)

This is the easiest method and provides automatic deployments on push.

### Step 1: Push Your Code to GitHub

```bash
# Navigate to your portfolio directory
cd /home/adeptek-sarvesh/Downloads/React\ App/portfolio

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main

# Add remote repository (replace with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Select **"Import Git Repository"**
4. Find and select your `portfolio` repository
5. Configure project:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **"Deploy"**

### Step 3: Automatic Deployments

After initial setup:
- Every push to `main` branch will automatically deploy
- Preview deployments for pull requests
- Check deployment status in Vercel dashboard

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```bash
# Navigate to portfolio directory
cd /home/adeptek-sarvesh/Downloads/React\ App/portfolio

# Deploy
vercel
```

### Step 4: Follow Prompts

```
? Set up and deploy "~/path/to/portfolio"? [Y/n] y
? Which scope do you want to deploy to? (Select your account)
? Link to existing project? [y/N] n
? What's your project's name? portfolio
? In which directory is your code located? ./
? Want to override settings? N
```

### Step 5: Production Deployment

First deployment creates a preview URL. For production:

```bash
vercel --prod
```

## Method 3: Deploy via Vercel Desktop App

1. Download [Vercel Desktop App](https://vercel.com/download)
2. Sign in to your account
3. Click **"Add New Project"**
4. Select your project folder
5. Configure settings (same as Method 2)
6. Click **"Deploy"**

## Post-Deployment Steps

### 1. Set Up Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project
2. Navigate to **Settings** → **Domains**
3. Add your domain
4. Update DNS records as instructed

### 2. Environment Variables

If you have environment variables:

1. Go to project in Vercel Dashboard
2. **Settings** → **Environment Variables**
3. Add each variable from your `.env.local` file
4. Deploy again for changes to take effect

### 3. Verify Deployment

Visit your deployed URL and check:
- All pages load correctly
- Images display properly
- Links work
- Forms function (if implemented)
- Mobile responsiveness

## Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Make sure all dependencies are installed
npm install
git add package.json package-lock.json
git commit -m "Fix dependencies"
git push
```

**Error: Build script failed**
```bash
# Test build locally
npm run build

# If it fails locally, check error messages
# Common issues:
# - Syntax errors in code
# - Missing imports
# - Incorrect file paths
```

### Images Not Loading

Ensure images are in the `public/` folder and referenced correctly:

```javascript
// ✅ Correct
<img src="/my-image.jpg" alt="Description" />

// ❌ Incorrect
<img src="./my-image.jpg" alt="Description" />
```

### Routing Issues

The `vercel.json` file handles routing. Make sure it contains:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## Deployment Checklist

Before deploying:

- [ ] Test build locally: `npm run build`
- [ ] Test all links and navigation
- [ ] Optimize images
- [ ] Remove console.log statements
- [ ] Update all placeholder content
- [ ] Check mobile responsiveness
- [ ] Test contact form (if implemented)
- [ ] Update social media links
- [ ] Add your actual projects
- [ ] Update copyright year in footer

After deploying:

- [ ] Verify site loads correctly
- [ ] Test on different devices
- [ ] Check browser console for errors
- [ ] Test all interactive elements
- [ ] Share your portfolio! 🎉

## Continuous Deployment Setup

For automatic deployments on every push:

1. Keep your code on GitHub
2. Vercel will auto-deploy on push to main branch
3. For preview deployments:
   - Create feature branches
   - Open pull requests
   - Vercel creates preview URLs

## Performance Optimization

Vercel automatically optimizes your site, but you can help:

### Image Optimization

Use optimized images:
- Max width: 1920px
- Format: WebP or compressed JPEG
- Tools: TinyPNG, Squoosh

### Code Splitting

Vite automatically code-splits, but you can also:

```javascript
// Lazy load components
const Projects = lazy(() => import('./components/Projects'));
```

### Enable Analytics (Optional)

Add to Vercel Dashboard:
1. **Analytics** → **Enable**
2. Or add Google Analytics via environment variables

## Monitoring

After deployment:

1. **Vercel Analytics:** View in dashboard
2. **Speed Curve:** Monitor performance
3. **Visitor Geography:** See where traffic comes from

## Updating Your Site

```bash
# Make changes locally
# Test
npm run dev

# Commit and push
git add .
git commit -m "Update: Description of changes"
git push

# Vercel automatically deploys!
```

## Rollback if Needed

If something breaks:

1. Go to Vercel Dashboard
2. Select your project
3. Click **"Deployments"**
4. Find previous working version
5. Click **"Promote to Production"**

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

🎉 Congratulations! Your portfolio is now live on Vercel!
