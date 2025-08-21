<?php wp_footer(); ?>

<script>
// Global variables
let leftSidebarOpen = false;
let rightSidebarOpen = false;
let selectedProductId = null;
let selectedSize = '';
let cart = JSON.parse(localStorage.getItem('colombeBlankCart') || '[]');

// Update cart count on load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Initialize startup screen on homepage
    if (document.getElementById('startup-screen')) {
        initializeStartupScreen();
    }
});

// Startup Screen Functions
function initializeStartupScreen() {
    const startupScreen = document.getElementById('startup-screen');
    const canvas = document.getElementById('startup-canvas');
    const ctx = canvas.getContext('2d');
    let mousePosition = { x: 0, y: 0 };
    
    // Set canvas size
    function resizeCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        
        canvas.width = displayWidth * devicePixelRatio;
        canvas.height = displayHeight * devicePixelRatio;
        canvas.style.width = displayWidth + 'px';
        canvas.style.height = displayHeight + 'px';
        
        ctx.scale(devicePixelRatio, devicePixelRatio);
        drawStar();
    }
    
    // Mouse move handler
    function handleMouseMove(e) {
        mousePosition.x = e.clientX;
        mousePosition.y = e.clientY;
        drawStar();
    }
    
    // Draw 7-pointed star
    function drawStar() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2 + 50;
        const starRadius = Math.min(window.innerWidth, window.innerHeight) * 0.12;
        
        // Create 7-pointed star lines
        const lines = [];
        for (let i = 0; i < 7; i++) {
            const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
            const endX = centerX + starRadius * Math.cos(angle);
            const endY = centerY + starRadius * Math.sin(angle);
            lines.push({
                startX: centerX,
                startY: centerY,
                endX: endX,
                endY: endY,
                angle: angle
            });
        }
        
        // Calculate mouse angle
        const mouseAngle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
        const normalizedMouseAngle = ((mouseAngle + Math.PI * 2) % (Math.PI * 2));
        
        // Draw lines with directional lighting
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        lines.forEach((line) => {
            const lineAngle = ((line.angle + Math.PI * 2) % (Math.PI * 2));
            
            // Calculate angle difference
            let angleDiff = Math.abs(normalizedMouseAngle - lineAngle);
            if (angleDiff > Math.PI) {
                angleDiff = Math.PI * 2 - angleDiff;
            }
            
            // Calculate intensity
            const maxAngleDiff = Math.PI / 3;
            const intensity = angleDiff < maxAngleDiff 
                ? Math.max(0.2, 1 - (angleDiff / maxAngleDiff))
                : 0.2;
            
            // Set color based on intensity
            const baseGray = 100;
            const highlightGray = 220;
            const gray = Math.floor(baseGray + (highlightGray - baseGray) * intensity);
            
            ctx.strokeStyle = `rgb(${gray}, ${gray}, ${gray})`;
            ctx.lineWidth = intensity > 0.7 ? 3 : 2;
            
            // Draw line
            ctx.beginPath();
            ctx.moveTo(line.startX, line.startY);
            ctx.lineTo(line.endX, line.endY);
            ctx.stroke();
        });
    }
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    // Click to enter
    startupScreen.addEventListener('click', function() {
        startupScreen.style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
    });
    
    // Initial draw
    resizeCanvas();
}

// Sidebar Functions
function toggleLeftSidebar() {
    leftSidebarOpen = !leftSidebarOpen;
    rightSidebarOpen = false;
    updateSidebars();
}

function toggleRightSidebar() {
    rightSidebarOpen = !rightSidebarOpen;
    leftSidebarOpen = false;
    updateSidebars();
}

function closeSidebars() {
    leftSidebarOpen = false;
    rightSidebarOpen = false;
    updateSidebars();
}

function updateSidebars() {
    const leftSidebar = document.getElementById('left-sidebar');
    const rightSidebar = document.getElementById('right-sidebar');
    const overlay = document.getElementById('menu-overlay');
    
    leftSidebar.classList.toggle('open', leftSidebarOpen);
    rightSidebar.classList.toggle('open', rightSidebarOpen);
    
    if (leftSidebarOpen || rightSidebarOpen) {
        overlay.style.display = 'block';
    } else {
        overlay.style.display = 'none';
    }
}

// Product Functions
function openProductDetail(productId) {
    selectedProductId = productId;
    
    // Fetch product data via AJAX
    fetch('<?php echo admin_url('admin-ajax.php'); ?>', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=get_product_detail&product_id=' + productId
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayProductDetail(data.data);
        }
    });
}

function displayProductDetail(product) {
    document.getElementById('product-detail-name').textContent = product.name;
    document.getElementById('product-detail-price').textContent = '€' + product.price;
    document.getElementById('product-detail-description').textContent = product.description;
    document.getElementById('product-detail-image').src = product.image;
    document.getElementById('product-detail-image').alt = product.name;
    
    // Handle sizes
    const sizeSelector = document.getElementById('size-selector');
    const sizeOptions = document.getElementById('size-options');
    
    if (product.sizes && product.sizes.length > 0) {
        sizeSelector.style.display = 'block';
        sizeOptions.innerHTML = '';
        
        product.sizes.forEach(size => {
            const button = document.createElement('button');
            button.className = 'size-option';
            button.textContent = size;
            button.onclick = () => selectSize(size);
            sizeOptions.appendChild(button);
        });
    } else {
        sizeSelector.style.display = 'none';
    }
    
    document.getElementById('product-overlay').style.display = 'block';
}

function closeProductDetail() {
    document.getElementById('product-overlay').style.display = 'none';
    selectedProductId = null;
    selectedSize = '';
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// Cart Functions
function addToCart() {
    if (!selectedProductId) return;
    
    const existingItem = cart.find(item => 
        item.productId === selectedProductId && item.size === selectedSize
    );
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: selectedProductId,
            size: selectedSize,
            quantity: 1
        });
    }
    
    localStorage.setItem('colombeBlankCart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    alert('Added to cart!');
}

function buyNow() {
    addToCart();
    // In a real implementation, redirect to checkout
    alert('Redirecting to checkout...');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = '(' + totalItems + ')';
    }
}

function toggleCart() {
    // In a real implementation, show cart overlay
    alert('Cart functionality would open here');
}

// Filter Functions
function filterProducts(category) {
    // Reload page with category filter
    const url = new URL(window.location);
    if (category) {
        url.searchParams.set('category', category);
    } else {
        url.searchParams.delete('category');
    }
    window.location = url;
    closeSidebars();
}

function filterProductType(type) {
    // Reload page with type filter
    const url = new URL(window.location);
    if (type) {
        url.searchParams.set('type', type);
    } else {
        url.searchParams.delete('type');
    }
    window.location = url;
    closeSidebars();
}

function sortProducts(sort) {
    // Reload page with sort parameter
    const url = new URL(window.location);
    if (sort) {
        url.searchParams.set('sort', sort);
    } else {
        url.searchParams.delete('sort');
    }
    window.location = url;
    closeSidebars();
}
</script>

</body>
</html>