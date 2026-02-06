# VA AI Learning Hub Landing Page

A modern, responsive landing page for the VA AI Learning Hub platform, built with Next.js 14 and Tailwind CSS.

## Features

- 🎯 **Modern Design**: Clean, tech-forward design with gradient accents
- 📱 **Fully Responsive**: Mobile-first approach with responsive breakpoints
- ⚡ **Fast Performance**: Optimized with Next.js 14
- 🎨 **Professional Color Scheme**: Blues and purples with tech vibe
- 🚀 **Deploy-Ready**: Includes Dockerfile for Coolify deployment

## Sections Included

1. **Hero Section** - "Master AI for Virtual Assistants" headline with stats
2. **Value Proposition** - 6 key benefits with icons
3. **Course Structure** - 8 comprehensive modules
4. **Features Showcase** - Premium learning experience features
5. **Target Audience** - Who the program is perfect for
6. **CTA Section** - Free vs Premium offers with email capture

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd va-ai-learning-hub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Docker Deployment (Coolify)

This project includes a Dockerfile optimized for Coolify deployment:

1. **Build the Docker image:**
```bash
docker build -t va-ai-learning-hub .
```

2. **Run the container:**
```bash
docker run -p 3000:3000 va-ai-learning-hub
```

### Coolify Deployment Steps

1. Connect your GitHub repository to Coolify
2. Configure the build settings:
   - **Build Method**: Dockerfile
   - **Dockerfile Path**: `Dockerfile`
   - **Build Context**: `.`
3. Set environment variables if needed
4. Deploy!

## Project Structure

```
va-ai-learning-hub/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ValueProposition.tsx # Value props
│   ├── CourseStructure.tsx  # Course modules
│   ├── FeaturesShowcase.tsx # Features
│   ├── TargetAudience.tsx  # Target audience
│   ├── CTASection.tsx      # Call-to-action
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── styles/
│   └── globals.css        # Global styles
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind config
├── postcss.config.js      # PostCSS config
├── next.config.js        # Next.js config
├── tsconfig.json         # TypeScript config
├── Dockerfile            # Docker configuration
└── README.md             # This file
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
primary: {
  500: '#6366f1', // Change this for primary color
},
secondary: {
  500: '#d946ef', // Change this for secondary color
}
```

### Content
Update the content in each component file:
- `components/Hero.tsx` - Main headline and stats
- `components/ValueProposition.tsx` - Value props
- `components/CourseStructure.tsx` - Course modules
- `components/CTASection.tsx` - Pricing and offers

### Images
Place images in the `public/` directory and update references in components.

## Performance Optimization

- ✅ **Image Optimization**: Next.js Image component for optimized images
- ✅ **Font Optimization**: Google Fonts with `next/font`
- ✅ **Code Splitting**: Automatic with Next.js
- ✅ **Minification**: Built-in with Next.js production build

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Proprietary - All rights reserved.

## Support

For support, email support@vaaihub.com or visit our website.