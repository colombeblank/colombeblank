<?php get_header(); ?>

<main class="main-content">
    <?php if (is_front_page()): ?>
        <!-- Startup Screen -->
        <div id="startup-screen" class="startup-screen">
            <div class="startup-title">COLOMBE BLANK</div>
            <canvas id="startup-canvas" class="startup-canvas"></canvas>
            <div class="startup-instruction">Click to enter</div>
        </div>
        
        <!-- Main Content (hidden initially) -->
        <div id="main-site" style="display: none;">
    <?php endif; ?>
    
    <div class="product-grid">
        <?php
        $products = new WP_Query(array(
            'post_type' => 'product',
            'posts_per_page' => -1,
            'post_status' => 'publish'
        ));
        
        if ($products->have_posts()): 
            while ($products->have_posts()): $products->the_post();
                $product_price = get_post_meta(get_the_ID(), '_product_price', true);
                $product_category = get_post_meta(get_the_ID(), '_product_category', true);
                $product_type = get_post_meta(get_the_ID(), '_product_type', true);
                $product_image = get_the_post_thumbnail_url(get_the_ID(), 'large');
                ?>
                <div class="product-card" data-product-id="<?php echo get_the_ID(); ?>" onclick="openProductDetail(<?php echo get_the_ID(); ?>)">
                    <?php if ($product_image): ?>
                        <img src="<?php echo esc_url($product_image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" class="product-image">
                    <?php endif; ?>
                    <div class="product-info">
                        <h3 class="product-name"><?php echo esc_html(get_the_title()); ?></h3>
                        <?php if ($product_price): ?>
                            <p class="product-price">€<?php echo esc_html($product_price); ?></p>
                        <?php endif; ?>
                    </div>
                </div>
                <?php
            endwhile;
            wp_reset_postdata();
        else:
            ?>
            <div class="no-products">
                <p>No products available at the moment.</p>
            </div>
            <?php
        endif;
        ?>
    </div>
    
    <?php if (is_front_page()): ?>
        </div> <!-- #main-site -->
    <?php endif; ?>
</main>

<!-- Product Detail Overlay -->
<div id="product-overlay" class="product-overlay" style="display: none;">
    <button class="close-btn" onclick="closeProductDetail()">×</button>
    <div class="product-detail">
        <div class="product-detail-content">
            <div class="product-detail-images">
                <img id="product-detail-image" src="" alt="" class="product-detail-image">
            </div>
            <div class="product-detail-info">
                <h2 id="product-detail-name" class="product-detail-name"></h2>
                <p id="product-detail-price" class="product-detail-price"></p>
                <div id="product-detail-description" class="product-detail-description"></div>
                
                <div class="size-selector" id="size-selector" style="display: none;">
                    <h4>Size</h4>
                    <div class="size-options" id="size-options"></div>
                </div>
                
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart()">Add to Cart</button>
                    <button class="btn" onclick="buyNow()">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>