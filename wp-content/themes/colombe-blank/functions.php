<?php
// Theme setup
function colombe_blank_setup() {
    // Add theme support for featured images
    add_theme_support('post-thumbnails');
    
    // Add theme support for title tag
    add_theme_support('title-tag');
    
    // Add theme support for HTML5 markup
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'colombe_blank_setup');

// Enqueue styles and scripts
function colombe_blank_scripts() {
    wp_enqueue_style('colombe-blank-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript if needed
    wp_enqueue_script('colombe-blank-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'colombe_blank_scripts');

// Register Custom Post Type for Products
function register_product_post_type() {
    $labels = array(
        'name'                  => 'Products',
        'singular_name'         => 'Product',
        'menu_name'             => 'Products',
        'name_admin_bar'        => 'Product',
        'archives'              => 'Product Archives',
        'attributes'            => 'Product Attributes',
        'parent_item_colon'     => 'Parent Product:',
        'all_items'             => 'All Products',
        'add_new_item'          => 'Add New Product',
        'add_new'               => 'Add New',
        'new_item'              => 'New Product',
        'edit_item'             => 'Edit Product',
        'update_item'           => 'Update Product',
        'view_item'             => 'View Product',
        'view_items'            => 'View Products',
        'search_items'          => 'Search Product',
        'not_found'             => 'Not found',
        'not_found_in_trash'    => 'Not found in Trash',
        'featured_image'        => 'Featured Image',
        'set_featured_image'    => 'Set featured image',
        'remove_featured_image' => 'Remove featured image',
        'use_featured_image'    => 'Use as featured image',
    );
    
    $args = array(
        'label'                 => 'Product',
        'description'           => 'Fashion products for the store',
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-products',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
    );
    
    register_post_type('product', $args);
}
add_action('init', 'register_product_post_type', 0);

// Add meta boxes for product custom fields
function add_product_meta_boxes() {
    add_meta_box(
        'product_details',
        'Product Details',
        'product_details_callback',
        'product',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'add_product_meta_boxes');

// Meta box callback function
function product_details_callback($post) {
    wp_nonce_field('save_product_details', 'product_details_nonce');
    
    $price = get_post_meta($post->ID, '_product_price', true);
    $category = get_post_meta($post->ID, '_product_category', true);
    $type = get_post_meta($post->ID, '_product_type', true);
    $sizes = get_post_meta($post->ID, '_product_sizes', true);
    $additional_images = get_post_meta($post->ID, '_product_additional_images', true);
    $in_stock = get_post_meta($post->ID, '_product_in_stock', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th scope="row"><label for="product_price">Price (€)</label></th>
            <td><input type="number" step="0.01" id="product_price" name="product_price" value="<?php echo esc_attr($price); ?>" /></td>
        </tr>
        <tr>
            <th scope="row"><label for="product_category">Category</label></th>
            <td>
                <select id="product_category" name="product_category">
                    <option value="">Select Category</option>
                    <option value="women" <?php selected($category, 'women'); ?>>Women</option>
                    <option value="men" <?php selected($category, 'men'); ?>>Men</option>
                </select>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="product_type">Type</label></th>
            <td>
                <select id="product_type" name="product_type">
                    <option value="">Select Type</option>
                    <option value="clothing" <?php selected($type, 'clothing'); ?>>Clothing</option>
                    <option value="accessories" <?php selected($type, 'accessories'); ?>>Accessories</option>
                    <option value="shoes" <?php selected($type, 'shoes'); ?>>Shoes</option>
                </select>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="product_sizes">Sizes (comma-separated)</label></th>
            <td>
                <input type="text" id="product_sizes" name="product_sizes" value="<?php echo esc_attr($sizes); ?>" />
                <p class="description">Enter sizes separated by commas (e.g., XS, S, M, L, XL)</p>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="product_additional_images">Additional Images (URLs)</label></th>
            <td>
                <textarea id="product_additional_images" name="product_additional_images" rows="3" cols="50"><?php echo esc_textarea($additional_images); ?></textarea>
                <p class="description">Enter image URLs separated by new lines</p>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="product_in_stock">In Stock</label></th>
            <td>
                <input type="checkbox" id="product_in_stock" name="product_in_stock" value="1" <?php checked($in_stock, '1'); ?> />
            </td>
        </tr>
    </table>
    <?php
}

// Save meta box data
function save_product_details($post_id) {
    if (!isset($_POST['product_details_nonce']) || !wp_verify_nonce($_POST['product_details_nonce'], 'save_product_details')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    // Save product fields
    if (isset($_POST['product_price'])) {
        update_post_meta($post_id, '_product_price', sanitize_text_field($_POST['product_price']));
    }
    
    if (isset($_POST['product_category'])) {
        update_post_meta($post_id, '_product_category', sanitize_text_field($_POST['product_category']));
    }
    
    if (isset($_POST['product_type'])) {
        update_post_meta($post_id, '_product_type', sanitize_text_field($_POST['product_type']));
    }
    
    if (isset($_POST['product_sizes'])) {
        update_post_meta($post_id, '_product_sizes', sanitize_text_field($_POST['product_sizes']));
    }
    
    if (isset($_POST['product_additional_images'])) {
        update_post_meta($post_id, '_product_additional_images', sanitize_textarea_field($_POST['product_additional_images']));
    }
    
    $in_stock = isset($_POST['product_in_stock']) ? '1' : '0';
    update_post_meta($post_id, '_product_in_stock', $in_stock);
}
add_action('save_post', 'save_product_details');

// AJAX handler for product details
function get_product_detail_ajax() {
    $product_id = intval($_POST['product_id']);
    
    if (!$product_id) {
        wp_send_json_error('Invalid product ID');
        return;
    }
    
    $product = get_post($product_id);
    
    if (!$product || $product->post_type !== 'product') {
        wp_send_json_error('Product not found');
        return;
    }
    
    $price = get_post_meta($product_id, '_product_price', true);
    $sizes = get_post_meta($product_id, '_product_sizes', true);
    $sizes_array = $sizes ? array_map('trim', explode(',', $sizes)) : array();
    $featured_image = get_the_post_thumbnail_url($product_id, 'large');
    
    $product_data = array(
        'name' => $product->post_title,
        'description' => $product->post_content,
        'price' => $price,
        'image' => $featured_image,
        'sizes' => $sizes_array
    );
    
    wp_send_json_success($product_data);
}
add_action('wp_ajax_get_product_detail', 'get_product_detail_ajax');
add_action('wp_ajax_nopriv_get_product_detail', 'get_product_detail_ajax');

// Modify main query to handle filtering
function modify_main_query($query) {
    if (!is_admin() && $query->is_main_query() && is_home()) {
        $query->set('post_type', 'product');
        $query->set('posts_per_page', -1);
        
        // Handle category filter
        if (isset($_GET['category']) && !empty($_GET['category'])) {
            $query->set('meta_query', array(
                array(
                    'key' => '_product_category',
                    'value' => sanitize_text_field($_GET['category']),
                    'compare' => '='
                )
            ));
        }
        
        // Handle type filter
        if (isset($_GET['type']) && !empty($_GET['type'])) {
            $meta_query = $query->get('meta_query') ?: array();
            $meta_query[] = array(
                'key' => '_product_type',
                'value' => sanitize_text_field($_GET['type']),
                'compare' => '='
            );
            $query->set('meta_query', $meta_query);
        }
        
        // Handle sorting
        if (isset($_GET['sort']) && !empty($_GET['sort'])) {
            switch ($_GET['sort']) {
                case 'price-low':
                    $query->set('meta_key', '_product_price');
                    $query->set('orderby', 'meta_value_num');
                    $query->set('order', 'ASC');
                    break;
                case 'price-high':
                    $query->set('meta_key', '_product_price');
                    $query->set('orderby', 'meta_value_num');
                    $query->set('order', 'DESC');
                    break;
                case 'newest':
                default:
                    $query->set('orderby', 'date');
                    $query->set('order', 'DESC');
                    break;
            }
        }
    }
}
add_action('pre_get_posts', 'modify_main_query');

// Remove WordPress admin bar for non-admin users
function remove_admin_bar_for_non_admins() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'remove_admin_bar_for_non_admins');

// Clean up WordPress head
function remove_wp_head_extras() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
}
add_action('init', 'remove_wp_head_extras');
?>