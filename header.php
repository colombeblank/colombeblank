<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="site-header">
    <div class="header-content">
        <!-- Menu Button -->
        <button class="menu-toggle" onclick="toggleLeftSidebar()" aria-label="Toggle Menu">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
        </button>
        
        <!-- Logo -->
        <a href="<?php echo home_url(); ?>" class="site-logo">
            COLOMBE BLANK
        </a>
        
        <!-- Text Menu -->
        <button class="text-menu-toggle" onclick="toggleRightSidebar()">
            MENU
        </button>
    </div>
</header>

<!-- Left Sidebar -->
<aside id="left-sidebar" class="sidebar sidebar-left">
    <div class="sidebar-content">
        <div class="sidebar-section">
            <h3>SHOP</h3>
            <nav class="sidebar-nav">
                <button onclick="filterProducts('women')">WOMEN</button>
                <button onclick="filterProducts('men')">MEN</button>
                <button onclick="filterProducts('')">ALL</button>
            </nav>
        </div>
        
        <div class="sidebar-section">
            <h3>FILTER</h3>
            <nav class="sidebar-nav">
                <button onclick="filterProductType('clothing')">CLOTHING</button>
                <button onclick="filterProductType('accessories')">ACCESSORIES</button>
                <button onclick="filterProductType('shoes')">SHOES</button>
                <button onclick="filterProductType('')">ALL</button>
            </nav>
        </div>
        
        <div class="sidebar-section">
            <h3>SORT</h3>
            <nav class="sidebar-nav">
                <button onclick="sortProducts('newest')">NEWEST</button>
                <button onclick="sortProducts('price-low')">PRICE LOW</button>
                <button onclick="sortProducts('price-high')">PRICE HIGH</button>
            </nav>
        </div>
    </div>
</aside>

<!-- Right Sidebar -->
<aside id="right-sidebar" class="sidebar sidebar-right">
    <div class="sidebar-content">
        <div class="sidebar-section">
            <h3>ACCOUNT</h3>
            <nav class="sidebar-nav">
                <?php if (is_user_logged_in()): ?>
                    <a href="<?php echo wp_logout_url(home_url()); ?>">SIGN OUT</a>
                <?php else: ?>
                    <a href="<?php echo wp_login_url(); ?>">SIGN IN</a>
                    <p style="font-size: 12px; color: #666; margin-top: 0.5rem;">Sign in to save items to cart</p>
                <?php endif; ?>
            </nav>
        </div>
        
        <div class="sidebar-section">
            <h3>SUPPORT</h3>
            <nav class="sidebar-nav">
                <a href="<?php echo get_permalink(get_page_by_path('faq')); ?>">FAQ</a>
                <a href="<?php echo get_permalink(get_page_by_path('support')); ?>">SUPPORT</a>
                <a href="<?php echo get_permalink(get_page_by_path('contact')); ?>">CONTACT</a>
                <a href="<?php echo get_permalink(get_page_by_path('shipping')); ?>">SHIPPING</a>
                <a href="<?php echo get_permalink(get_page_by_path('returns')); ?>">RETURNS</a>
                <a href="<?php echo get_permalink(get_page_by_path('size-guide')); ?>">SIZE GUIDE</a>
            </nav>
        </div>
        
        <div class="sidebar-section">
            <h3>EXPLORE</h3>
            <nav class="sidebar-nav">
                <a href="<?php echo get_permalink(get_page_by_path('about')); ?>">ABOUT</a>
            </nav>
        </div>
        
        <div class="sidebar-section">
            <button onclick="toggleCart()">
                CART <span id="cart-count">(0)</span>
            </button>
        </div>
    </div>
</aside>

<!-- Menu Overlay -->
<div id="menu-overlay" class="menu-overlay" style="display: none;" onclick="closeSidebars()"></div>