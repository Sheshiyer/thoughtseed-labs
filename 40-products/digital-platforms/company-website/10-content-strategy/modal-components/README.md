# Modal Components for Thoughtseed Website

This directory contains React components for the modal windows in Thoughtseed's 3D website experience.

## Components

### 1. ServicesBentoGrid.tsx
- Modern bento grid layout showcasing Thoughtseed's services
- Uses Aceternity UI's BentoGrid component
- Features gradient backgrounds and Lucide icons
- Responsive design with a 2-column feature item

### 2. ProjectsTimeline.tsx
- Interactive timeline showing Thoughtseed's major projects
- Uses Aceternity UI's Timeline component
- Incorporates Lucide icons for visual markers
- Chronological display of achievements

## Usage Notes

1. These components require the following dependencies:
   - @/components/ui/bento-grid (Aceternity UI)
   - @/components/ui/timeline (Aceternity UI)
   - lucide-react for icons
   - Tailwind CSS for styling

2. Component Integration:
   - Components are designed to be used within modal windows
   - Built to complement the 3D environment
   - Uses Thoughtseed's brand colors and styling

3. Styling Considerations:
   - Uses Tailwind CSS classes for consistent styling
   - Incorporates gradients for visual interest
   - Responsive design for different screen sizes
   - Interactive hover states for engagement

## Next Steps

- Create components for remaining modal windows
- Add loading states and animations
- Implement accessibility features
- Add interactive state management
- Create documentation for component props