<?php get_header(); ?>

<main class="main-content">
    <?php while (have_posts()) : the_post(); 
        $product_price = get_post_meta(get_the_ID(), '_product_price', true);
        $product_category = get_post_meta(get_the_ID(), '_product_category', true);
        $product_type = get_post_meta(get_the_ID(), '_product_type', true);
        $product_sizes = get_post_meta(get_the_ID(), '_product_sizes', true);
        $sizes_array = $product_sizes ? array_map('trim', explode(',', $product_sizes)) : array();
        $featured_image = get_the_post_thumbnail_url(get_the_ID(), 'large');
    ?>
    
    <div class="product-detail">
        <div class="product-detail-content" style="padding: 4rem 2rem;">
            <div class="product-detail-images">
                <?php if ($featured_image): ?>
                    <img src="<?php echo esc_url($featured_image); ?>" alt="<?php echo esc_attr(get_the_title()); ?>" class="product-detail-image">
                <?php endif; ?>
            </div>
            
            <div class="product-detail-info">
                <h1 class="product-detail-name"><?php the_title(); ?></h1>
                
                <?php if ($product_price): ?>
                    <p class="product-detail-price">€<?php echo esc_html($product_price); ?></p>
                <?php endif; ?>
                
                <div class="product-detail-description">
                    <?php the_content(); ?>
                </div>
                
                <?php if (!empty($sizes_array) && $sizes_array[0] !== ''): ?>
                    <div class="size-selector">
                        <h4>Size</h4>
                        <div class="size-options">
                            <?php foreach ($sizes_array as $size): ?>
                                <button class="size-option" onclick="selectSize('<?php echo esc_js(trim($size)); ?>')"><?php echo esc_html(trim($size)); ?></button>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>
                
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCartSingle(<?php echo get_the_ID(); ?>)">Add to Cart</button>
                    <button class="btn" onclick="buyNowSingle(<?php echo get_the_ID(); ?>)">Buy Now</button>
                </div>
                
                <div style="margin-top: 2rem;">
                    <a href="<?php echo home_url(); ?>" class="btn">← Back to Shop</a>
                </div>
            </div>
        </div>
    </div>
    
    <?php endwhile; ?>
</main>

<script>
let selectedSizeSingle = '';

function selectSize(size) {
    selectedSizeSingle = size;
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

function addToCartSingle(productId) {
    const sizeSelector = document.querySelector('.size-selector');
    if (sizeSelector && !selectedSizeSingle) {
        alert('Please select a size');
        return;
    }
    
    // Use the cart functionality from main.js
    if (window.addToCart) {
        window.addToCart(productId, selectedSizeSingle);
    } else {
        alert('Added to cart!');
    }
}

function buyNowSingle(productId) {
    addToCartSingle(productId);
    alert('Redirecting to checkout...');
}
</script>

<?php get_footer(); ?>