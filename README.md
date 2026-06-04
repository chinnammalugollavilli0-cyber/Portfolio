# Dinesh Sai — Portfolio Website

A luxury black & gold themed personal portfolio website.

## 🚀 Quick Start

Just open `index.html` in any modern browser — no build tools or server needed!

## 📁 Folder Structure

```
portfolio/
├── index.html              ← Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles (black & gold theme)
│   └── js/
│       └── main.js         ← Interactions & animations
└── README.md
```

## ✏️ Customization Checklist

### Personal Details
- [ ] Replace `your-email@example.com` with your real email
- [ ] Replace `+91 XXXXX XXXXX` with your phone number
- [ ] Update `[College Name]` and `[Year]` in the About section
- [ ] Add your real GitHub, LinkedIn, Instagram, X profile links

### Photos
- In `index.html`, find the `.profile-placeholder` and `.about-photo-placeholder` divs
- Replace them with `<img src="assets/images/your-photo.jpg" alt="Dinesh Sai" />`

### Resume
- Add your resume PDF as `assets/resume.pdf`
- Update the `href="#"` in the `.btn-resume` and Download Resume button to `assets/resume.pdf`

### Projects
- Add real screenshots/thumbnails to `assets/images/`
- Replace the `project-img-placeholder` divs with `<img>` tags
- Update GitHub links and live demo URLs for each project

### Stats (About Section)
- Update `data-count="10"`, `data-count="8"`, etc. to your real numbers

## ✨ Features Included

| Feature | Description |
|---|---|
| Custom Cursor | Gold dot + animated outline that follows mouse |
| Typewriter Effect | Cycles through roles in the hero section |
| Scroll Reveal | Elements fade in as you scroll down |
| Skill Bars | Animated progress bars triggered on scroll |
| Counter Animation | Numbers count up when stats come into view |
| Project Filter | Filter projects by category (All/Web/Java/Design) |
| 3D Tilt Effect | Project cards tilt on mouse hover |
| Particle Burst | Gold sparkles on primary button click |
| Sticky Navbar | Frosted glass effect, hides on mobile with hamburger |
| Back to Top | Appears after scrolling, smooth scroll to top |
| Contact Form | Client-side validation + success notification |
| Noise Overlay | Subtle film-grain texture for luxury feel |
| Responsive | Works on mobile, tablet, and desktop |
| Certifications Section | Bonus section not in original spec |

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0A0E1A` |
| Card BG | `#111827` |
| Gold | `#D4AF37` |
| Display Font | Cormorant Garamond |
| Body Font | Poppins |

## 🌐 Deployment

Simply upload the entire `portfolio/` folder to:
- **GitHub Pages** — push to a repo, enable Pages in Settings
- **Netlify** — drag & drop the folder on netlify.com
- **Vercel** — import GitHub repo
- **Any web host** — upload via FTP
