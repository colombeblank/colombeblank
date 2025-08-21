# Overview

This is a minimalist high-end fashion website for "COLOMBE BLANK" converted to a complete WordPress theme. The project features clean, monospace typography-based design with a focus on simplicity and elegance. It includes product browsing, cart management, and order processing functionality in a luxury ecommerce experience, now fully exportable as a WordPress site.

# User Preferences

Preferred communication style: Simple, everyday language.
**Recent Update (Aug 21, 2025)**: Completely restructured from Node.js/TypeScript to WordPress PHP theme with exportable format.

# System Architecture

## Current Architecture (WordPress Theme - Aug 21, 2025)
- **Backend**: WordPress with PHP, MySQL database with custom post types
- **Frontend**: PHP templates with vanilla JavaScript for interactions
- **Theme Structure**: Complete WordPress theme in `wp-content/themes/colombe-blank/`
- **Styling**: Pure CSS with monospace design system (no build tools required)
- **State Management**: JavaScript localStorage for cart functionality
- **Database**: WordPress standard tables with custom product post type
- **Export Format**: Compressed archive with wp-content folder and SQL database dump

## Database Schema (WordPress)
- **wp_posts**: Standard WordPress posts table with custom 'product' post type
- **wp_postmeta**: Product metadata (price, category, type, sizes, stock status)
- **wp_users**: WordPress user authentication and management
- **wp_usermeta**: User preferences and capabilities
- **wp_options**: WordPress configuration and theme settings

## Design System (Maintained)
- **Typography**: Monospace fonts (Courier New) throughout for consistent branding
- **Color Scheme**: Neutral palette with black/white primary colors and CSS custom properties for theming
- **Layout**: Minimal navigation with hamburger menu, slide-out sidebars, and full-screen overlays for product details
- **Responsive**: Mobile-first approach with custom breakpoints
- **Interactions**: Smooth animations, modal overlays, accordion FAQ sections, contact forms

# External Dependencies

## WordPress Theme Dependencies
- **Core Requirements**: WordPress 5.0+, PHP 7.4+, MySQL 5.6+
- **No External Dependencies**: Pure PHP/CSS/JavaScript (no Node.js or build tools)
- **Fonts**: Google Fonts (Courier New) loaded via CSS import
- **JavaScript**: Vanilla ES6+ for cart functionality and startup animation
- **Database**: Standard WordPress tables with custom post type registration

## WordPress Conversion (Aug 21, 2025)
- **Complete Architecture Change**: Converted from Node.js/TypeScript to WordPress PHP theme
- **Theme Structure**: Created complete WordPress theme in `wp-content/themes/colombe-blank/`
- **Custom Post Types**: Product post type with price, category, type, sizes metadata
- **Template Files**: index.php, header.php, footer.php, page.php, single-product.php, functions.php
- **Styling**: Converted React/Tailwind to pure CSS with WordPress compatibility
- **JavaScript**: Vanilla JS for startup animation, cart functionality, and product interactions
- **Database Export**: Complete SQL dump with sample products and WordPress structure
- **Export Package**: `colombe-blank-wordpress-export.tar.gz` (17KB) ready for WordPress installation
- **Admin Features**: WordPress admin interface for easy product management
- **Sample Content**: 5 sample products, all essential pages (about, contact, FAQ, etc.)
- **Installation Guide**: Complete documentation for local and live server setup