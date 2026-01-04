# Deploying BYAMN Festhub on Vercel

## Overview
This guide explains how to successfully deploy the BYAMN Festhub project on Vercel. BYAMN Festhub is a static website with multiple HTML pages that can be easily deployed on Vercel.

## Deployment Steps

### 1. Manual Deployment via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and create an account or sign in
2. Click "New Project" and select "Import Git Repository"
3. Enter the URL of your BYAMN Festhub repository
4. Vercel will automatically detect this as a static site
5. Click "Deploy" and your site will be live within minutes

### 2. Using Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to your project directory
3. Run `vercel` and follow the prompts
4. Your project will be deployed to a unique URL

### 3. GitHub Integration
1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Import your repository into Vercel
4. Vercel will automatically deploy on every push to main branch

## Configuration
The project includes a `vercel.json` file that specifies:
- All files should be treated as static assets
- Proper deployment settings for a multi-page static site

## Features
- ✅ Multi-page support (index.html, Christmas.html, Janmashtami.html, etc.)
- ✅ Static asset optimization
- ✅ Automatic HTTPS
- ✅ Global CDN distribution
- ✅ Instant cache invalidation

## Troubleshooting
If you encounter any issues during deployment:

1. Ensure all relative paths in HTML files use `./` format instead of `/`
2. Check that all assets (images, CSS, JS) are properly referenced
3. Verify the `vercel.json` file is in the root directory
4. Make sure the `logo.png` file exists in the root directory

## Environment Variables (Optional)
This project doesn't require any environment variables, but if you add analytics or other services, you can configure them in the Vercel dashboard.

## Custom Domain
To use a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains" section
3. Add your custom domain and follow DNS configuration instructions