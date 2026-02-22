# Landing Page Builder

A modern, drag-and-drop style landing page builder built with React, TypeScript, and Material-UI. Create professional landing pages in minutes without any coding knowledge.

![React](https://img.shields.io/badge/React-19.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![MUI](https://img.shields.io/badge/MUI-7.1-purple)
![Vite](https://img.shields.io/badge/Vite-6.3-yellow)

## Features

- **Step-by-Step Wizard**: Build your landing page in 5 simple steps
- **6 Business Types**: E-commerce, Services, Portfolio, Startup, Restaurant, Professional
- **6 Visual Styles**: Modern, Classic, Minimalist, Vibrant, Corporate, Creative
- **5 Layout Options**: Hero Centered, Hero Split, Hero Fullscreen, Grid, Sidebar
- **8 Color Themes**: Blue, Green, Red, Purple, Orange, Teal, Pink, Indigo
- **Dark/Light Mode**: Toggle between themes
- **Image Upload**: Upload custom images for hero, logo, gallery, and products
- **Live Preview**: See your landing page in real-time
- **Responsive Design**: Works on all devices
- **Product Modal**: Click products to see detailed view with image and description
- **Contact Form**: Built-in contact form with form fields
- **Animated Testimonials**: Staggered card layout for testimonials
- **SEO Friendly**: Clean, semantic HTML structure

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## How It Works

### Step 1: Choose Business Type
Select the category that best describes your business:
- 🛒 E-commerce - Online store
- 🔧 Services - Professional services
- 🎨 Portfolio - Creative portfolio
- 🚀 Startup - Technology & innovation
- 🍽️ Restaurant - Food & hospitality
- 👔 Professional - Lawyers, doctors, consultants

### Step 2: Select Visual Style
Choose your visual personality:
- ✨ Modern - Clean and contemporary
- 🏛️ Classic - Timeless elegance
- ◻️ Minimalist - Less is more
- 🌈 Vibrant - Bold and dynamic
- 🏢 Corporate - Professional & trustworthy
- 💡 Creative - Unique & memorable

Then pick your primary color.

### Step 3: Choose Layout
Select how content is arranged:
- ⬛ Hero Centered - Centered content with background image
- ⬜ Hero Split - Text on one side, image on the other
- 📱 Hero Fullscreen - Full screen banner
- ⊞ Grid - Product grid layout
- 📋 Sidebar - Fixed sidebar navigation

### Step 4: Add Images & Content
Upload your own images:
- Hero image (main banner)
- Logo
- Gallery images
- Product images

And customize:
- Title
- Subtitle
- Description
- CTA button text

### Step 5: Preview
See your finished landing page with:
- About section with statistics
- Services grid
- Products with modal details
- Testimonials with staggered layout
- Gallery
- Contact form
- Footer

## Project Structure

```
src/
├── components/
│   └── LandingBuilder/
│       ├── steps/              # Wizard step components
│       │   ├── StepTipoNegocio.tsx
│       │   ├── StepEstiloVisual.tsx
│       │   ├── StepLayout.tsx
│       │   └── StepImagens.tsx
│       ├── LandingBuilder.tsx   # Main wizard component
│       ├── LandingBuilderContext.tsx
│       ├── LandingPreview.tsx   # Preview renderer
│       ├── LandingDemo.tsx     # Demo/home page
│       └── types.ts             # TypeScript definitions
├── App.tsx
├── main.tsx
└── index.css
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Material-UI (MUI)** - Component library
- **ESLint** - Code linting

## Customization

### Adding New Business Types

Edit `src/components/LandingBuilder/types.ts`:

```typescript
export const TIPOS_NEGOCIO: { key: TipoNegocio; label: string; icon: string; descricao: string }[] = [
  // Add new type here
];
```

### Adding New Colors

Edit the colors in `StepEstiloVisual.tsx`:

```typescript
const cores = [
  { key: 'blue', cor: '#1976d2', nome: 'Blue' },
  // Add new color here
];
```

### Modifying Default Content

The preview generates default content based on business type. Customize `getDefaultContent()` in `LandingPreview.tsx`.

## License

MIT License - feel free to use this project for any purpose.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
