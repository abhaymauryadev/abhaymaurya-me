# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, showcasing skills, projects, and experience as a DevOps Engineer, Designer, and Developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion and GSAP for engaging user interactions
- **Interactive Skills Section**: Hover effects and animations on skill items
- **Project Showcase**: Highlight key projects with descriptions and demo videos
- **Contact Form**: Integrated contact functionality using Nodemailer
- **SEO Optimized**: Includes sitemap, robots.txt, and meta tags
- **PWA Ready**: Web app manifest for installable experience

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Fonts**: Geist (optimized with next/font)
- **Icons & Images**: Next.js Image component
- **Email**: Nodemailer
- **Smooth Scrolling**: Lenis

## 📁 Project Structure

```
personal-portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (contact)
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   └── ...
├── components/            # Reusable components
├── sections/              # Page sections
├── public/                # Static assets
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install


3. Run the development server:
```bash
npm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Contact Form Setup

To enable the contact form, configure your email settings in `app/api/contact/route.js`:

```javascript
// Update with your email service details
const transporter = nodemailer.createTransporter({
  // Your SMTP configuration
});
```

## 🎨 Customization

### Personal Information
- Update name, bio, and contact details in the respective sections
- Replace placeholder projects in `app/page.jsx`
- Modify skills in `sections/Skills.jsx`

### Styling
- Colors and themes can be adjusted in `app/globals.css`
- Tailwind classes are used throughout for easy customization

### Assets
- Replace images in `public/` directory
- Update videos in `public/videos/`
- Modify icons and favicons as needed

## 📱 PWA Features

The site includes PWA capabilities:
- Web app manifest in `public/site.webmanifest`
- Service worker ready (can be added for offline functionality)
- Installable on mobile devices

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- Self-hosted

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

---

Built with ❤️ by Abhay
