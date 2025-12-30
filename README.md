# David Lewis - Electrical Engineering Consultant Website

A modern, professional single-page website for an independent electrical engineering consultant.

## Features

- **Hero Section**: Name, title, value proposition, and professional headshot placeholder
- **About**: Brief bio, 30+ years experience, areas of expertise
- **Standards Contributions**: Visually appealing display of IEEE/NEC/other standards involvement
- **Experience Highlights**: Key career accomplishments and notable projects
- **Gallery**: 4 action photos with subtle hover effects
- **Contact**: Simple contact form (opens email client) and contact information

## Design

- Sophisticated, minimal aesthetic with ample whitespace
- Subtle scroll-triggered fade-in and slide-up animations (vanilla JavaScript)
- Smooth scrolling navigation
- Alternating light/dark sections for visual rhythm
- Fully responsive mobile design
- Professional color palette: Navy (#0b2545), White, Accent (#ffb400)
- Modern sans-serif typography (Inter from Google Fonts)

## Technical Details

- Single HTML file with linked CSS and JavaScript
- No frameworks or build steps required
- Clean, well-commented code for easy modification
- Uses IntersectionObserver for scroll animations
- Contact form opens user's email client (no backend needed)

## File Structure

```
/
├── index.html      # Main HTML structure
├── style.css       # All styles and responsive design
├── script.js       # JavaScript for animations and interactions
└── README.md       # This file
```

## Usage

1. Open `index.html` in any modern web browser
2. For local development, run a simple HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## Customization

- **Content**: Edit text directly in `index.html`
- **Styling**: Modify variables in `style.css` (e.g., colors, fonts, spacing)
- **Headshot**: Replace the SVG placeholder in the hero section with a real photo
- **Gallery Images**: Update image URLs in the gallery section
- **Contact Info**: Change email, phone, and LinkedIn in the contact section

## Placeholder Content

All content is realistic dummy text for a 30+ year electrical engineering veteran. Replace with real information as needed.