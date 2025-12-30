# Speciphy | Electrical Engineering Consulting Website

A modern, professional single-page website for an independent electrical engineering consultant.

## Features

- **Hero Section**: Professional label, compelling headline, description, call-to-action buttons, and headshot placeholder
- **About**: Engineering expertise overview with skills list
- **Standards Contributions**: Grid of key standards with detailed descriptions
- **Experience**: Timeline-style career highlights
- **Gallery**: 4-column grid with hover effects and captions
- **Contact**: Centered contact information with direct links
- **Navigation**: Fixed navbar with scroll effects and smooth scrolling

## Design

- **Color Scheme**: Navy (#0a1628), Blue accent (#3b82f6), Clean grays and whites
- **Typography**: Inter font family for modern, professional appearance
- **Layout**: Full-width sections with generous spacing
- **Animations**: Scroll-triggered fade-in animations and smooth transitions
- **Mobile Responsive**: Optimized for all device sizes with mobile navigation

## Technical Details

- Single HTML file with linked CSS and JavaScript
- No frameworks or build steps required
- Modern CSS Grid and Flexbox layouts
- Intersection Observer for scroll animations
- Smooth scrolling navigation
- Mobile-first responsive design

## File Structure

```
/
├── index.html      # Main HTML structure
├── style.css       # Complete styling with CSS variables
├── script.js       # JavaScript for interactions and animations
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
- **Colors**: Modify CSS variables in `:root` section of `style.css`
- **Headshot**: Replace the placeholder div in the hero section with an actual image
- **Gallery Images**: Update the placeholder divs with real images
- **Contact Info**: Change email, phone, and LinkedIn links in the contact section

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers