// Colombe Blank Theme JavaScript
// Main functionality for the WordPress theme

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeCart();
    initializeFilters();
    
    // Handle startup screen on homepage
    if (document.getElementById('startup-screen')) {
        initializeStartupScreen();
    }
});

// Cart functionality
function initializeCart() {
    // Load cart from localStorage
    window.cart = JSON.parse(localStorage.getItem('colombeBlankCart') || '[]');
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = window.cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = `(${cartCount})`;
    }
}

function addToCart(productId, size = '') {
    // Check if item already exists
    const existingItemIndex = window.cart.findIndex(item => 
        item.productId === productId && item.size === size
    );
    
    if (existingItemIndex !== -1) {
        window.cart[existingItemIndex].quantity += 1;
    } else {
        window.cart.push({
            productId: productId,
            size: size,
            quantity: 1,
            timestamp: Date.now()
        });
    }
    
    // Save to localStorage
    localStorage.setItem('colombeBlankCart', JSON.stringify(window.cart));
    updateCartDisplay();
    
    // Show success message
    showNotification('Item added to cart');
}

function removeFromCart(productId, size = '') {
    window.cart = window.cart.filter(item => 
        !(item.productId === productId && item.size === size)
    );
    
    localStorage.setItem('colombeBlankCart', JSON.stringify(window.cart));
    updateCartDisplay();
}

function clearCart() {
    window.cart = [];
    localStorage.removeItem('colombeBlankCart');
    updateCartDisplay();
}

// Filter functionality
function initializeFilters() {
    // Get current URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Highlight active filters
    const category = urlParams.get('category');
    const type = urlParams.get('type');
    const sort = urlParams.get('sort');
    
    // Apply active states to filter buttons
    if (category) {
        highlightActiveFilter('category', category);
    }
    if (type) {
        highlightActiveFilter('type', type);
    }
    if (sort) {
        highlightActiveFilter('sort', sort);
    }
}

function highlightActiveFilter(filterType, value) {
    // Add active class to current filter buttons
    const buttons = document.querySelectorAll(`[onclick*="${value}"]`);
    buttons.forEach(button => {
        button.classList.add('active');
        button.style.fontWeight = 'bold';
    });
}

// Product detail functionality
function openProductDetail(productId) {
    // Fetch product data
    fetch(ajaxurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=get_product_detail&product_id=${productId}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            displayProductDetail(data.data, productId);
        } else {
            showNotification('Error loading product details', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Error loading product details', 'error');
    });
}

function displayProductDetail(product, productId) {
    // Populate product details
    document.getElementById('product-detail-name').textContent = product.name;
    document.getElementById('product-detail-price').textContent = `€${product.price}`;
    document.getElementById('product-detail-description').innerHTML = product.description;
    
    // Set main image
    const mainImage = document.getElementById('product-detail-image');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    
    // Handle sizes
    const sizeSelector = document.getElementById('size-selector');
    const sizeOptions = document.getElementById('size-options');
    
    if (product.sizes && product.sizes.length > 0 && product.sizes[0] !== '') {
        sizeSelector.style.display = 'block';
        sizeOptions.innerHTML = '';
        
        product.sizes.forEach(size => {
            const button = document.createElement('button');
            button.className = 'size-option';
            button.textContent = size.trim();
            button.onclick = () => selectSize(size.trim());
            sizeOptions.appendChild(button);
        });
    } else {
        sizeSelector.style.display = 'none';
    }
    
    // Store current product ID for cart actions
    window.currentProductId = productId;
    window.selectedSize = '';
    
    // Show overlay
    document.getElementById('product-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductDetail() {
    document.getElementById('product-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Clear selections
    window.currentProductId = null;
    window.selectedSize = '';
    
    // Clear size selections
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('selected');
    });
}

function selectSize(size) {
    window.selectedSize = size;
    
    // Update UI
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
}

// Cart actions in product detail
function addToCartFromDetail() {
    if (!window.currentProductId) return;
    
    // Check if size is required and selected
    const sizeSelector = document.getElementById('size-selector');
    if (sizeSelector.style.display !== 'none' && !window.selectedSize) {
        showNotification('Please select a size', 'error');
        return;
    }
    
    addToCart(window.currentProductId, window.selectedSize);
    closeProductDetail();
}

function buyNowFromDetail() {
    addToCartFromDetail();
    // In a real implementation, redirect to checkout
    showNotification('Redirecting to checkout...');
}

// Startup screen with 7-pointed star animation
function initializeStartupScreen() {
    const canvas = document.getElementById('startup-canvas');
    const ctx = canvas.getContext('2d');
    let mousePosition = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Set canvas size with device pixel ratio
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
        requestAnimationFrame(drawStar);
    }
    
    // Draw 7-pointed star with mouse-responsive lighting
    function drawStar() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2 + 50;
        const starRadius = Math.min(window.innerWidth, window.innerHeight) * 0.12;
        
        // Create 7 lines from center
        const lines = [];
        for (let i = 0; i < 7; i++) {
            const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2; // Start from top
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
        
        // Calculate mouse direction from center
        const mouseAngle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
        const normalizedMouseAngle = ((mouseAngle + Math.PI * 2) % (Math.PI * 2));
        
        // Draw lines with directional lighting
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        lines.forEach((line) => {
            const lineAngle = ((line.angle + Math.PI * 2) % (Math.PI * 2));
            
            // Calculate angle difference between mouse direction and line
            let angleDiff = Math.abs(normalizedMouseAngle - lineAngle);
            if (angleDiff > Math.PI) {
                angleDiff = Math.PI * 2 - angleDiff;
            }
            
            // Calculate lighting intensity based on alignment
            const maxAngleDiff = Math.PI / 3; // 60 degrees for detection range
            const intensity = angleDiff < maxAngleDiff 
                ? Math.max(0.2, 1 - (angleDiff / maxAngleDiff))
                : 0.2;
            
            // Set line appearance based on intensity
            const baseGray = 100;
            const highlightGray = 220;
            const gray = Math.floor(baseGray + (highlightGray - baseGray) * intensity);
            
            ctx.strokeStyle = `rgb(${gray}, ${gray}, ${gray})`;
            ctx.lineWidth = intensity > 0.7 ? 3 : 2;
            
            // Draw the line
            ctx.beginPath();
            ctx.moveTo(line.startX, line.startY);
            ctx.lineTo(line.endX, line.endY);
            ctx.stroke();
        });
    }
    
    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    
    // Click to enter site
    document.getElementById('startup-screen').addEventListener('click', function() {
        this.style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
        document.body.style.overflow = 'auto';
    });
    
    // Initial setup
    resizeCanvas();
}

// Utility functions
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#dc3545' : '#28a745'};
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Export functions for inline onclick handlers
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.selectSize = selectSize;
window.addToCart = addToCartFromDetail;
window.buyNow = buyNowFromDetail;