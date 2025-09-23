# ZSecuredTech Website

A comprehensive cybersecurity company website built with React, TypeScript, and Tailwind CSS v4.

## Features

- **Complete Navigation System**: Multi-level dropdown navigation with state management
- **Cybersecurity Services**: Threat Detection, Data Encryption, Security Auditing, etc.
- **Training Programs**: CISSP, CISM, ISO Standards, Network Security, and more
- **Resource Center**: Free downloads, whitepapers, and security guides
- **News & Updates**: Latest cybersecurity news and industry insights
- **Responsive Design**: Mobile-first responsive design
- **Dark Theme**: Professional cybersecurity aesthetic

## Navigation Structure

### Services
- Threat Detection & Response
- Data Encryption & Protection
- Security Auditing
- Infrastructure Security
- Incident Response
- Security Training

### Consultancy
- ISO 9001:2015 (QMS)
- ISO 20000 (ITSM)
- ISO 22301 (BCMS)
- ISO 31000 Risk Management

### Training & Certificate
- **Cybersecurity Training**
  - CyberSecurity Fundamentals
  - Cyber Essentials
  - CISSP
  - CISM
  - Virtual Chief Information Security Officer
- ISO Standard Training
- Network Training
- Database Training

### Resources
- Downloads
- WhitePapers

### News
- Latest News
- Press Releases
- Industry Updates
- Security Alerts

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zsecuredtech-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── services/          # Service-specific components
│   ├── training/          # Training course components
│   ├── consultancy/       # Consultancy service components
│   ├── resources/         # Resource center components
│   ├── news/             # News and updates components
│   ├── ui/               # Reusable UI components (shadcn)
│   └── figma/            # Figma-specific components
├── styles/
│   └── globals.css       # Global styles and Tailwind configuration
└── App.tsx              # Main application component
```

## Technologies Used

- **React 18**: Frontend framework
- **TypeScript**: Type safety
- **Tailwind CSS v4**: Styling and design system
- **Vite**: Build tool and development server
- **Lucide React**: Icons
- **shadcn/ui**: UI component library

## Component Architecture

The application uses a context-based navigation system that allows for:
- Single-page application experience
- Conditional rendering based on active section
- Multi-level navigation support
- Mobile-responsive menus

## Key Features

### Navigation System
- **State Management**: React Context for tracking current section
- **Multi-level Dropdowns**: Services → Training → Specific Courses
- **Mobile Responsive**: Collapsible navigation for mobile devices
- **Smooth Transitions**: Animated hover effects and transitions

### Training Sections
Each training course has its own dedicated page with:
- Course overview and objectives
- Detailed curriculum and modules
- Prerequisites and certification info
- Enrollment and contact forms

### Service Pages
Comprehensive service pages including:
- Service descriptions and benefits
- Implementation processes
- Client testimonials and case studies
- Call-to-action sections

## Customization

### Colors and Theming
The site uses a dark cybersecurity theme with green accents. Colors can be customized in `src/styles/globals.css`.

### Adding New Sections
1. Create component in appropriate directory
2. Add route to `App.tsx` switch statement
3. Update navigation in `Header.tsx`

### Content Updates
All content is contained within individual components, making it easy to update text, images, and structure.

## License

Copyright © 2025 ZSecuredTech. All rights reserved.