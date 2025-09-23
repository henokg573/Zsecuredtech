# Complete Setup Instructions

## Quick Start

Since you already have the components in the current directory, you'll need to copy them to the src folder structure. Here's how to set up the complete project:

### 1. Copy Existing Components

You'll need to copy all existing components from the current `/components` directory to `/src/components`. Here are the main files you need to copy:

#### Core Components (copy to `/src/components/`)
- Header.tsx
- Hero.tsx
- Footer.tsx
- About.tsx
- Contact.tsx
- Services.tsx
- Training.tsx
- Consultancy.tsx
- Resource.tsx
- News.tsx
- Solutions.tsx
- HexagonalBackground.tsx

#### UI Components (copy to `/src/components/ui/`)
Copy all files from `/components/ui/` to `/src/components/ui/`

#### Figma Components (copy to `/src/components/figma/`)
Copy all files from `/components/figma/` to `/src/components/figma/`

#### Service Components (copy to `/src/components/services/`)
Copy existing service components and the new ones I created:
- ThreatDetection.tsx (existing)
- DataEncryption.tsx (new)
- SecurityAuditing.tsx (new)

#### Training Components (copy to `/src/components/training/`)
Copy existing training components and the new ones I created:
- CybersecurityTraining.tsx (existing)
- CybersecurityFundamentals.tsx (new)
- CyberEssentials.tsx (new)
- CISSPTraining.tsx (new)
- CISMTraining.tsx (new)
- VCISOTraining.tsx (new)
- ISOStandardTraining.tsx (existing)
- NetworkTraining.tsx (existing)
- DatabaseTraining.tsx (existing)

### 2. Update Import Paths

After copying, you may need to update import paths in the copied components to use relative paths from the src directory.

### 3. Install Dependencies and Run

```bash
npm install
npm run dev
```

## Manual File Copying Commands

If you're on macOS/Linux, you can use these commands:

```bash
# Create the src structure
mkdir -p src/components/{services,training,consultancy,resources,news,ui,figma}

# Copy core components
cp components/*.tsx src/components/

# Copy UI components
cp -r components/ui/* src/components/ui/

# Copy figma components
cp -r components/figma/* src/components/figma/

# Copy service components
cp -r components/services/* src/components/services/

# Copy training components
cp -r components/training/* src/components/training/
```

## What's New in This Setup

### Complete Navigation System
- All dropdown menu items now have dedicated pages
- Multi-level navigation (Training → Cybersecurity → Fundamentals)
- State-based routing without page refreshes

### New Components Created
1. **Service Components**:
   - DataEncryption.tsx
   - SecurityAuditing.tsx

2. **Training Components**:
   - CybersecurityFundamentals.tsx
   - CyberEssentials.tsx
   - CISSPTraining.tsx
   - CISMTraining.tsx
   - VCISOTraining.tsx

3. **Consultancy Components**:
   - ISO9001.tsx

4. **Resource Components**:
   - Downloads.tsx

5. **News Components**:
   - LatestNews.tsx

### Project Structure
```
zsecuredtech-website/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── README.md
├── SETUP.md
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── styles/
    │   └── globals.css
    └── components/
        ├── NavigationContext.tsx
        ├── Header.tsx
        ├── Hero.tsx
        ├── Footer.tsx
        ├── services/
        ├── training/
        ├── consultancy/
        ├── resources/
        ├── news/
        ├── ui/
        └── figma/
```

## Key Features

1. **Complete Navigation**: Every navbar item has its own section
2. **Training Courses**: Individual pages for each training type
3. **Service Pages**: Detailed pages for each service offering
4. **Resource Center**: Downloads and documentation
5. **News Section**: Latest cybersecurity news and updates
6. **Mobile Responsive**: Works on all device sizes
7. **Professional Design**: Dark theme with green accents

## Troubleshooting

If you encounter import errors after setup:
1. Check that all files are in the correct directories
2. Ensure import paths use relative paths (e.g., `./components/Header`)
3. Verify all dependencies are installed with `npm install`

The website should now be fully functional with complete navigation and all sections working!