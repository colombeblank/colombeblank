-- WordPress Database Export for Colombe Blank Theme
-- Generated: 2025-01-21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- --------------------------------------------------------

-- WordPress Core Tables Structure
-- These are standard WordPress tables with the wp_ prefix

-- Table structure for table `wp_posts`

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `post_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_date_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `post_password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `post_name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `to_ping` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pinged` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_modified_gmt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `post_content_filtered` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `guid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT '0',
  `post_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`),
  KEY `post_name` (`post_name`(191)),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `wp_postmeta`

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`meta_id`),
  KEY `post_id` (`post_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `wp_users`

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_nicename` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_activation_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT '0',
  `display_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`ID`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`),
  KEY `user_email` (`user_email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `wp_usermeta`

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT '0',
  `meta_key` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_value` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`umeta_id`),
  KEY `user_id` (`user_id`),
  KEY `meta_key` (`meta_key`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table structure for table `wp_options`

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `option_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `option_value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `autoload` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'yes',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Sample data for the site

-- Insert products
INSERT INTO `wp_posts` (`post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_name`, `post_modified`, `post_modified_gmt`, `post_type`, `guid`) VALUES
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'Timeless white cotton shirt with clean lines. Crafted from premium cotton with meticulous attention to detail. Perfect for any occasion.', 'Classic White Shirt', '', 'publish', 'closed', 'closed', 'classic-white-shirt', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'product', '/?post_type=product&#038;p=1'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'Premium wool coat for modern elegance. Tailored to perfection with a minimalist aesthetic that embodies sophisticated style.', 'Black Wool Coat', '', 'publish', 'closed', 'closed', 'black-wool-coat', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'product', '/?post_type=product&#038;p=2'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'Clean-lined leather handbag with minimalist design. Handcrafted from the finest leather for lasting durability and timeless appeal.', 'Minimalist Leather Bag', '', 'publish', 'closed', 'closed', 'minimalist-leather-bag', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'product', '/?post_type=product&#038;p=3'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'Sharp silhouette for any occasion. Expertly tailored blazer that combines contemporary style with classic sophistication.', 'Tailored Blazer', '', 'publish', 'closed', 'closed', 'tailored-blazer', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'product', '/?post_type=product&#038;p=4'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'Classic leather oxford shoes. Handcrafted with attention to detail, these shoes combine traditional craftsmanship with modern comfort.', 'Oxford Shoes', '', 'publish', 'closed', 'closed', 'oxford-shoes', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'product', '/?post_type=product&#038;p=5');

-- Insert product metadata
INSERT INTO `wp_postmeta` (`post_id`, `meta_key`, `meta_value`) VALUES
(1, '_product_price', '89.00'),
(1, '_product_category', 'women'),
(1, '_product_type', 'clothing'),
(1, '_product_sizes', 'XS, S, M, L, XL'),
(1, '_product_in_stock', '1'),
(1, '_thumbnail_id', '6'),
(2, '_product_price', '245.00'),
(2, '_product_category', 'women'),
(2, '_product_type', 'clothing'),
(2, '_product_sizes', 'XS, S, M, L'),
(2, '_product_in_stock', '1'),
(2, '_thumbnail_id', '7'),
(3, '_product_price', '156.00'),
(3, '_product_category', 'women'),
(3, '_product_type', 'accessories'),
(3, '_product_sizes', 'One Size'),
(3, '_product_in_stock', '1'),
(3, '_thumbnail_id', '8'),
(4, '_product_price', '198.00'),
(4, '_product_category', 'men'),
(4, '_product_type', 'clothing'),
(4, '_product_sizes', 'S, M, L, XL'),
(4, '_product_in_stock', '1'),
(4, '_thumbnail_id', '9'),
(5, '_product_price', '167.00'),
(5, '_product_category', 'men'),
(5, '_product_type', 'shoes'),
(5, '_product_sizes', '40, 41, 42, 43, 44'),
(5, '_product_in_stock', '1'),
(5, '_thumbnail_id', '10');

-- Insert pages
INSERT INTO `wp_posts` (`post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_name`, `post_modified`, `post_modified_gmt`, `post_type`, `guid`) VALUES
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<p>COLOMBE BLANK represents the intersection of minimalism and luxury. Founded on the principle that true elegance lies in simplicity, we create timeless pieces that transcend seasonal trends.</p>\n\n<p>Our commitment to quality craftsmanship and sustainable practices guides every decision we make. Each piece is carefully designed and ethically produced to ensure lasting beauty and durability.</p>', 'About', '', 'publish', 'closed', 'closed', 'about', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=11'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<p>Get in touch with our team. We are here to help with any questions or concerns you may have.</p>\n\n<p><strong>Email:</strong> hello@colombeblank.com<br>\n<strong>Phone:</strong> +1 (555) 123-4567</p>\n\n<p><strong>Address:</strong><br>\nCOLOMBE BLANK<br>\n123 Fashion Street<br>\nNew York, NY 10001</p>', 'Contact', '', 'publish', 'closed', 'closed', 'contact', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=12'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<h3>Frequently Asked Questions</h3>\n\n<p><strong>Q: How do I determine my size?</strong><br>\nA: Please refer to our size guide for detailed measurements.</p>\n\n<p><strong>Q: What is your return policy?</strong><br>\nA: We accept returns within 30 days of purchase for unworn items.</p>\n\n<p><strong>Q: Do you ship internationally?</strong><br>\nA: Yes, we ship worldwide. Shipping costs vary by location.</p>', 'FAQ', '', 'publish', 'closed', 'closed', 'faq', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=13'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<p>Need support? We are here to help.</p>\n\n<p>Contact our support team for any questions about your order, sizing, or product information.</p>\n\n<p><strong>Support Hours:</strong><br>\nMonday - Friday: 9:00 AM - 6:00 PM EST<br>\nSaturday: 10:00 AM - 4:00 PM EST<br>\nSunday: Closed</p>', 'Support', '', 'publish', 'closed', 'closed', 'support', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=14'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<h3>Shipping Information</h3>\n\n<p><strong>Standard Shipping:</strong> 5-7 business days - Free on orders over €100<br>\n<strong>Express Shipping:</strong> 2-3 business days - €15<br>\n<strong>Next Day Delivery:</strong> 1 business day - €25</p>\n\n<p>All orders are processed within 1-2 business days. You will receive a tracking number once your order ships.</p>', 'Shipping', '', 'publish', 'closed', 'closed', 'shipping', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=15'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<h3>Returns & Exchanges</h3>\n\n<p>We want you to love your purchase. If you are not completely satisfied, you can return unworn items within 30 days of delivery.</p>\n\n<p><strong>Return Process:</strong></p>\n<ol>\n<li>Contact our support team</li>\n<li>Receive return authorization</li>\n<li>Pack items securely with original tags</li>\n<li>Ship using provided return label</li>\n</ol>\n\n<p>Refunds will be processed within 5-7 business days after we receive your return.</p>', 'Returns', '', 'publish', 'closed', 'closed', 'returns', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=16'),
(1, '2025-01-21 00:00:00', '2025-01-21 00:00:00', '<h3>Size Guide</h3>\n\n<p><strong>Women\'s Clothing</strong></p>\n<table>\n<tr><th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th></tr>\n<tr><td>XS</td><td>81-84 cm</td><td>63-66 cm</td><td>86-89 cm</td></tr>\n<tr><td>S</td><td>86-89 cm</td><td>68-71 cm</td><td>91-94 cm</td></tr>\n<tr><td>M</td><td>91-94 cm</td><td>73-76 cm</td><td>96-99 cm</td></tr>\n<tr><td>L</td><td>96-99 cm</td><td>78-81 cm</td><td>101-104 cm</td></tr>\n<tr><td>XL</td><td>101-104 cm</td><td>83-86 cm</td><td>106-109 cm</td></tr>\n</table>\n\n<p><strong>Men\'s Clothing</strong></p>\n<table>\n<tr><th>Size</th><th>Chest</th><th>Waist</th></tr>\n<tr><td>S</td><td>91-96 cm</td><td>76-81 cm</td></tr>\n<tr><td>M</td><td>99-104 cm</td><td>84-89 cm</td></tr>\n<tr><td>L</td><td>107-112 cm</td><td>92-97 cm</td></tr>\n<tr><td>XL</td><td>115-120 cm</td><td>100-105 cm</td></tr>\n</table>', 'Size Guide', '', 'publish', 'closed', 'closed', 'size-guide', '2025-01-21 00:00:00', '2025-01-21 00:00:00', 'page', '/?page_id=17');

-- Insert WordPress options
INSERT INTO `wp_options` (`option_name`, `option_value`, `autoload`) VALUES
('blogname', 'COLOMBE BLANK', 'yes'),
('blogdescription', 'Minimalist High-End Fashion', 'yes'),
('template', 'colombe-blank', 'yes'),
('stylesheet', 'colombe-blank', 'yes'),
('show_on_front', 'posts', 'yes'),
('posts_per_page', '10', 'yes'),
('date_format', 'F j, Y', 'yes'),
('time_format', 'g:i a', 'yes'),
('timezone_string', '', 'yes'),
('start_of_week', '1', 'yes');

-- Insert admin user (password: admin123)
INSERT INTO `wp_users` (`user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_status`, `display_name`) VALUES
('admin', '$P$BZlPX7.LsYpz2oZnJLKt/HqXhOqFOT/', 'admin', 'admin@colombeblank.com', '', '2025-01-21 00:00:00', 0, 'Admin');

-- Insert admin user metadata
INSERT INTO `wp_usermeta` (`user_id`, `meta_key`, `meta_value`) VALUES
(1, 'wp_capabilities', 'a:1:{s:13:"administrator";b:1;}'),
(1, 'wp_user_level', '10'),
(1, 'first_name', ''),
(1, 'last_name', ''),
(1, 'nickname', 'admin'),
(1, 'description', ''),
(1, 'rich_editing', 'true'),
(1, 'syntax_highlighting', 'true'),
(1, 'comment_shortcuts', 'false'),
(1, 'admin_color', 'fresh'),
(1, 'use_ssl', '0'),
(1, 'show_admin_bar_front', 'false');

-- Auto increment values
ALTER TABLE `wp_posts` AUTO_INCREMENT=18;
ALTER TABLE `wp_postmeta` AUTO_INCREMENT=50;
ALTER TABLE `wp_users` AUTO_INCREMENT=2;
ALTER TABLE `wp_usermeta` AUTO_INCREMENT=20;
ALTER TABLE `wp_options` AUTO_INCREMENT=200;