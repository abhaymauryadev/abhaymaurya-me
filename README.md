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
```

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
  service: 'gmail', // or your email provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

Set the following environment variables in your `.env.local`:
```
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=
```

## 🎨 Customization

### Personal Information
- Update name, bio, and contact details in the respective sections
- Replace placeholder projects in `app/page.jsx`
- Modify skills in `sections/Skills.jsx`
- Update social links in `components/Footer.jsx`

### Styling
- Colors and themes can be adjusted in `app/globals.css`
- Tailwind CSS is configured in `tailwind.config.js`
- Tailwind classes are used throughout for easy customization

### Assets
- Replace images in `public/` directory
- Add demo videos in `public/videos/` (see [public/videos/README.md](public/videos/README.md))
- Modify icons and favicons as needed

## 📱 PWA Features

The site includes PWA capabilities:
- Web app manifest in `public/site.webmanifest`
- Installable on mobile and desktop devices
- Service worker ready (can be added for offline functionality)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your repository to GitHub
2. Import your project in [Vercel Dashboard](https://vercel.com)
3. Vercel automatically detects Next.js and deploys
4. Set environment variables in project settings

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Docker**: Create a Dockerfile for containerized deployment
- **Self-hosted**: Use `npm run build` then `npm start`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For questions or inquiries, please use the contact form on the portfolio website or reach out directly.
