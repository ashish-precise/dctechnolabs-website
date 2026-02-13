# DC technolabs Website

Professional website for DC technolabs - Digital Marketing Agency in Ahmedabad

## Built With
- Astro (Static Site Generator)
- Modern CSS
- Optimized for SEO and Performance

## Deployment Instructions

### Step 1: GitHub Setup

1. Go to https://github.com and sign in
2. Click the "+" icon (top right) → "New repository"
3. Name: `dctechnolabs-website`
4. Keep it Public
5. DON'T initialize with README
6. Click "Create repository"

### Step 2: Push Code to GitHub

Run these commands in your terminal:

```bash
cd /home/claude/dctechnolabs-website
git init
git add .
git commit -m "Initial commit - DC technolabs website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dctechnolabs-website.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Find your `dctechnolabs-website` repository
5. Click "Import"
6. Vercel will auto-detect Astro settings
7. Click "Deploy"
8. Wait 2-3 minutes for deployment

### Step 4: Add Custom Domain

1. In Vercel project dashboard, go to "Settings"
2. Click "Domains"
3. Add domain: `dctechnolabs.in`
4. Follow the instructions to update DNS records
5. Also add `www.dctechnolabs.in` if desired

### DNS Settings (at your domain registrar):
- Type: A
- Name: @
- Value: (Vercel will provide the IP)

- Type: CNAME
- Name: www
- Value: (Vercel will provide)

## After Deployment

1. Submit sitemap to Google Search Console
2. Set up Google Analytics
3. Configure contact form (replace Formspree placeholder)
4. Add real client logos and testimonials

## Contact

Phone: +91 96626-08986
Email: hello@dctechnolabs.com
