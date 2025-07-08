# Hafiz Farhad - Security Researcher Website

A Paul Graham-inspired personal website built with Astro and deployed on Cloudflare Pages.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Package Manager**: [pnpm](https://pnpm.io)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Content**: Markdown with frontmatter

## 📦 Installation

Make sure you have [pnpm](https://pnpm.io) installed:

\`\`\`bash
npm install -g pnpm
\`\`\`

Clone and install dependencies:

\`\`\`bash
git clone <repository-url>
cd hafiz-farhad-website
pnpm install
\`\`\`

## 🛠️ Development

Start the development server:

\`\`\`bash
pnpm dev
\`\`\`

The site will be available at `http://localhost:4321`

## 🏗️ Building

Build for production:

\`\`\`bash
pnpm build
\`\`\`

Preview the production build:

\`\`\`bash
pnpm preview
\`\`\`

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `pnpm build`
3. Set build output directory: `dist`
4. Set Node.js version: `18.17.0`

### Environment Variables

Set these in your Cloudflare Pages dashboard:

- `NODE_VERSION`: `18.17.0`
- `PNPM_VERSION`: `8.0.0`

## 📁 Project Structure

\`\`\`
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tailwind.config.mjs
\`\`\`

## 📝 Adding Content

### Blog Posts

Add new blog posts in `src/content/blog/` as Markdown files:

\`\`\`markdown
---
slug: "post-slug"
title: "Post Title"
date: "2024-01-01"
tags: ["tag1", "tag2"]
excerpt: "Brief description"
---

# Post Content

Your markdown content here...
\`\`\`

### Projects

Update the projects array in `src/pages/projects.astro`

### Tags

Update the tags array in `src/pages/tags.astro`

## 🎨 Styling

The site uses a Paul Graham-inspired design with:

- **Fonts**: Times New Roman (home page), Verdana (other pages)
- **Layout**: Fixed sidebar (69px), content area (410px max-width)
- **Colors**: Muted palette with blue links
- **Mobile**: Responsive with hamburger navigation

## 📱 Mobile Support

- Responsive navigation with hamburger menu
- Optimized typography for mobile screens
- Touch-friendly interface
- Proper viewport handling

## 🔧 Configuration

### Astro Config

Key configurations in `astro.config.mjs`:

- Static site generation
- Cloudflare adapter
- Tailwind integration
- Sitemap generation

### pnpm Config

Optimized for pnpm with:

- Workspace configuration
- Sharp overrides for image processing
- Frozen lockfile for CI/CD

## 📊 Performance

- Static site generation for optimal performance
- Minimal JavaScript bundle
- Optimized images and assets
- Cloudflare CDN distribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `pnpm dev`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
