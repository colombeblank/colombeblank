# COLOMBE BLANK - WordPress Theme Installation Guide

## Package Contents

This WordPress export contains:
- **wp-content/** - Complete WordPress content directory with theme and uploads
- **colombe-blank-database.sql** - Database structure and sample data
- **README-WordPress-Installation.md** - This installation guide

## Installation Instructions

### Option 1: Local WordPress Installation

1. **Set up WordPress locally:**
   - Download WordPress from wordpress.org
   - Extract to your local server directory (XAMPP, MAMP, Local, etc.)
   - Create a new database in phpMyAdmin or your database manager

2. **Import the database:**
   - Open phpMyAdmin or your database management tool
   - Select your WordPress database
   - Import the `colombe-blank-database.sql` file
   - This will create all necessary tables and sample data

3. **Install the theme:**
   - Copy the `wp-content` folder to your WordPress installation
   - This will install the Colombe Blank theme and any uploads

4. **Configure WordPress:**
   - Update `wp-config.php` with your database credentials
   - Access your WordPress admin at `/wp-admin`
   - Login with: username: `admin`, password: `admin123`
   - Go to Appearance > Themes and activate "Colombe Blank"

### Option 2: Live Server Installation

1. **Upload files:**
   - Upload WordPress core files to your server
   - Upload the `wp-content` folder to your WordPress installation
   - Import `colombe-blank-database.sql` to your hosting database

2. **Update configuration:**
   - Configure `wp-config.php` with your hosting database details
   - Update the site URL in WordPress admin or database

## Theme Features

### Included Functionality:
- **Custom Product Post Type** - Manage fashion products with prices, categories, sizes
- **Interactive Startup Animation** - 7-pointed star with mouse-responsive lighting
- **Responsive Design** - Mobile-first approach with clean typography
- **Filtering System** - Filter products by category, type, and price
- **Cart System** - JavaScript-based shopping cart with localStorage
- **Clean Admin Interface** - Easy product management in WordPress admin

### Sample Products Included:
- Classic White Shirt (Women's Clothing)
- Black Wool Coat (Women's Clothing)  
- Minimalist Leather Bag (Women's Accessories)
- Tailored Blazer (Men's Clothing)
- Oxford Shoes (Men's Shoes)

### Pages Included:
- About
- Contact
- FAQ
- Support
- Shipping
- Returns
- Size Guide

## Customization

### Adding Products:
1. Go to WordPress Admin > Products > Add New
2. Add product title, description, and featured image
3. Fill in Product Details:
   - Price in euros
   - Category (men/women)
   - Type (clothing/accessories/shoes)
   - Available sizes (comma-separated)
   - Stock status

### Customizing Design:
- Edit `/wp-content/themes/colombe-blank/style.css` for styling changes
- Modify color variables in the `:root` section
- Update typography by changing the font-family declarations

### Adding Functionality:
- Edit `/wp-content/themes/colombe-blank/functions.php` for backend changes
- Modify `/wp-content/themes/colombe-blank/js/main.js` for frontend interactions

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Support

For technical support or customization requests, contact the development team.

## License

This theme is for the exclusive use of COLOMBE BLANK. All rights reserved.