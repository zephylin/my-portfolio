# 🚀 Portfolio Deployment Guide - Step by Step

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/zephylin/my-portfolio
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

### Step 2: Wait for Deployment
- GitHub will build and deploy your site (usually takes 1-2 minutes)
- You'll see a green checkmark when it's ready
- Your site will be live at: `https://zephylin.github.io/my-portfolio`

### Step 3: Set Up Custom Domain (Optional)
If you want to use `zephylindusengimana.com`:

1. In the same **Pages** settings, scroll to **Custom domain**
2. Enter: `zephylindusengimana.com`
3. Click **Save**
4. GitHub will show you DNS records to add

5. **Configure DNS** (in your domain registrar):
   - Add a CNAME record:
     - **Name**: `@` or `www`
     - **Value**: `zephylin.github.io`
   - Or add A records (if CNAME doesn't work):
     - Point to GitHub IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

6. Wait for DNS propagation (can take up to 48 hours, usually much faster)

### Step 4: Verify Deployment
- Visit your site URL
- Check that all assets load correctly
- Test navigation and links

---

## Option 2: Netlify (Alternative - Also Free)

### Step 1: Sign Up
1. Go to https://www.netlify.com
2. Sign up with your GitHub account

### Step 2: Deploy
1. Click **Add new site** → **Import an existing project**
2. Select **GitHub**
3. Choose your `my-portfolio` repository
4. Click **Deploy site**

### Step 3: Custom Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Option 3: Vercel (Alternative - Also Free)

### Step 1: Sign Up
1. Go to https://vercel.com
2. Sign up with your GitHub account

### Step 2: Deploy
1. Click **Add New Project**
2. Import your `my-portfolio` repository
3. Click **Deploy**

### Step 3: Custom Domain (Optional)
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

---

## ✅ Quick Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Site accessible at GitHub Pages URL
- [ ] Custom domain configured (if desired)
- [ ] DNS records added (if using custom domain)
- [ ] Site tested and working

---

## 🔧 Troubleshooting

**Site not loading?**
- Check GitHub Pages settings
- Verify branch is set to `main`
- Wait a few minutes for deployment

**Custom domain not working?**
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check domain in GitHub Pages settings shows as "verified"

**Assets not loading?**
- Check file paths are relative (not absolute)
- Verify all files are committed and pushed
- Clear browser cache

---

**Need help?** Check GitHub Pages documentation: https://docs.github.com/en/pages

