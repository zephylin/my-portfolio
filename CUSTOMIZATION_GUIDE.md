# Portfolio Customization Guide

Welcome! This guide will help you customize this portfolio template to make it your own.

## 🚀 Quick Start Checklist

### 1. **Personal Information** (Start Here!)
Update these in `index.html`:

#### Meta Tags & SEO (Lines 8-166)
- **Title** (Line 8): Change "Zephylin Dusengimana" to your name
- **Description** (Line 11): Update with your own description
- **Keywords** (Line 12): Add your relevant keywords
- **Author** (Line 13): Your name
- **Open Graph URLs** (Line 30): Your website URL
- **Twitter handle** (Line 44): Your Twitter username
- **Structured Data** (Lines 92-192): Update all personal information

#### Sidebar Section (Lines 216-292)
- **Avatar Image** (Line 219): Replace `my-avatar.png` with your photo
- **Name** (Line 223): Your full name
- **Title** (Line 224): Your professional title
- **Email** (Line 243): Your email address
- **Phone** (Line 253): Your phone number
- **Location** (Line 263): Your location
- **Social Links** (Lines 272-280): Your LinkedIn and GitHub URLs
- **Resume PDF** (Line 286): Link to your resume PDF

#### Hero Section (Lines 332-355)
- **Name** (Line 335): Your name
- **Subtitle** (Line 336): Your professional title
- **Description** (Lines 337-341): Your personal introduction
- **Button Links**: Update navigation links if needed

### 2. **About Section** (Lines 358-454)
- **About Text** (Lines 362-368): Write your personal story
- **Skills Tab** (Lines 376-395): Update your skills and descriptions
- **Experience Tab** (Lines 397-423): Add your experiences
- **Education Tab** (Lines 425-451): Update your education details

### 3. **Services Section** (Lines 457-486)
- Update the three service items with your core competencies
- Modify icons, titles, and descriptions

### 4. **Portfolio Section** (Lines 489-646)
This is where you showcase your projects:

- **Search Functionality**: Already implemented
- **Filter Buttons**: Customize categories (Python, Web Dev, AI/ML, Security)
- **Project Items**: Replace with your own projects
  - Update project titles
  - Change project categories
  - Add/remove project links (GitHub, Live Demo)
  - Update project descriptions

**To add a new project:**
```html
<div class="project-item" data-filter-item data-category="your-category">
  <figure class="project-img">
    <div class="project-placeholder project-placeholder-1">
      <div class="project-icon">🎯</div>
      <div class="project-overlay">
        <h4>Your Project Name</h4>
        <p>Project Description</p>
      </div>
    </div>
  </figure>
  <div class="project-content">
    <h3 class="project-title">Your Project Title</h3>
    <p class="project-category">Category Name</p>
    <div class="project-links">
      <a href="your-url" target="_blank" class="project-link">
        <ion-icon name="logo-github"></ion-icon>
        GitHub
      </a>
    </div>
  </div>
</div>
```

### 5. **Resume Section** (Lines 651-858)
- **Resume PDF Link** (Line 657): Update path to your resume
- **Education Tab** (Lines 672-702): Your education history
- **Experience Tab** (Lines 705-741): Your work experience
- **Skills Tab** (Lines 744-807): Your technical skills
- **Certifications Tab** (Lines 810-856): Your certifications

### 6. **Contact Section** (Lines 861-916)
- **Contact Text** (Lines 864-867): Personalize the message
- **Email** (Line 877): Your email
- **Phone** (Line 886): Your phone number
- **Location** (Line 895): Your location
- **Social Links** (Lines 905-912): Your social media profiles

### 7. **Footer** (Lines 922-950)
- **Name** (Line 926): Your name
- **Title** (Line 927): Your title
- **Description** (Line 928): Your description
- **Contact Info** (Lines 941-943): Your contact details
- **Copyright** (Line 947): Update year and name

## 🎨 Customization Options

### Images to Replace
1. **Avatar**: `assets/images/my-avatar.png` → Replace with your photo (120x120px recommended)
2. **Logo**: `assets/images/logo.svg` → Your logo
3. **Favicon**: `favicon.svg` → Your favicon

### Colors & Styling
The color scheme is defined in `assets/css/style.css`:
- **Primary Colors**: Lines 10-50 (CSS variables)
- **Dark Theme**: Default theme
- **Light Theme**: Available via theme toggle

To change colors, modify the CSS variables in `:root`:
```css
--bg-primary: #0a0e13;        /* Main background */
--bg-accent: #6366f1;         /* Accent color */
--text-primary: #f8fafc;      /* Main text */
--text-accent: #3b82f6;       /* Accent text */
```

### Fonts
Currently using **Inter** font from Google Fonts (Line 71 in index.html).
To change: Update the Google Fonts link and CSS font-family.

## 📝 Files to Edit

### Primary Files:
1. **`index.html`** - All content and structure
2. **`assets/css/style.css`** - Styling and colors
3. **`assets/js/script.js`** - Functionality (usually no changes needed)

### Optional Files:
- **`README.md`** - Update with your information
- **`robots.txt`** - SEO configuration
- **`sitemap.xml`** - SEO sitemap
- **`CNAME`** - Custom domain (if using GitHub Pages)

## 🔧 Advanced Customization

### Adding New Sections
1. Add navigation link in navbar (around line 303)
2. Create new section with unique ID
3. Add smooth scroll functionality (already handled in script.js)

### Modifying Animations
Animations are in `assets/css/style.css`:
- Search for `@keyframes` for animation definitions
- Modify transition properties for speed

### Adding Contact Form
Currently uses EmailJS (line 89). To set up:
1. Create EmailJS account
2. Update service ID, template ID, and public key in `script.js`
3. Configure email template in EmailJS dashboard

## ✅ Testing Checklist

Before publishing:
- [ ] All personal information updated
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Mobile responsive (test on phone)
- [ ] All sections scroll smoothly
- [ ] Portfolio filters work
- [ ] Theme toggle works
- [ ] Social media links correct
- [ ] Resume PDF accessible
- [ ] SEO meta tags updated
- [ ] Favicon displays correctly

## 🚀 Deployment Options

### GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Your site will be live at `username.github.io/repository-name`

### Netlify (Free)
1. Drag and drop the folder to Netlify
2. Or connect GitHub repository
3. Automatic deployments

### Vercel (Free)
1. Import GitHub repository
2. Automatic deployments

## 📚 Resources

- **Ionicons**: https://ionic.io/ionicons (for icons)
- **Google Fonts**: https://fonts.google.com (for fonts)
- **EmailJS**: https://www.emailjs.com (for contact forms)

## 🆘 Need Help?

If you get stuck:
1. Check browser console for errors (F12)
2. Validate HTML at https://validator.w3.org
3. Test CSS at https://jigsaw.w3.org/css-validator
4. Check that all file paths are correct

---

**Good luck with your portfolio! 🎉**



