 // Sample product data
 const products = [
    {
        id: 1,
        name: "Sneakers",
        //price: "Ksh 500-1000",
        category: "shoes",
        image: "images/nike daybreak.jpg",
        description: "nice sneakers for perfect casual wear, combining comfort and style"
    },
    
    {
        id: 2,
        name: "New Balance",
        //price: "Ksh 250-500",
        category: "necklaces",
        image: "images/new balance .jpg",
        description: "new balance sneakers with a sleek design, perfect for everyday wear"
    },
    
    {
        id: 3,
        name: "Panda low dunks",
        //price: "Ksh 1300-2000",
        category: "shoes",
        image: "images/panda nike dunks.jpeg",
        description: "low dunks with panda design, perfect for casual wear"
    },
    // {
    //     id: 4,
    //     name: "Gold Chain Necklace",
    //     //price: "Ksh 250-400",
    //     category: "necklaces",
    //     icon: "📿",
    //     description: "Delicate gold chain"
    // },
    {
        id: 5,
        name: "Cocktail Dress",
       // price: "Ksh 800-1500",
        category: "dresses",
        image: "images/dress 1.jpg",
        description: "Perfect for special occasions"
    },
    {
        id: 6,
        name: "Sneakers",
       // price: "Ksh 1400-3000",
        category: "shoes",
        image: "images/Now Available_ Nike Dunk Low SE _Lottery_.jpeg",
        description: "Comfortable casual sneakers"
    },
    {
        id: 7,
        name: "Statement Handbags",
        //price: "Ksh 50-300",
        category: "necklaces",
        image: "images/bag 2 lv.jpg",
        description: "Bold fashion statement piece"
    }
];

let cart = []; 
let currentFilter = 'all';

// Load products on page load
window.addEventListener('load', function() {
    displayProducts(products);
});

// Display products
function displayProducts(productsToShow) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';





    productsToShow.forEach(product => {
const productCard = document.createElement('div');
productCard.className = 'product-card fade-in';
productCard.innerHTML = `
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <div class="overlay">
            <div class="overlay-text">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
               
            </div>
        `;
        grid.appendChild(productCard);
    });
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and display products
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
        
    displayProducts(filteredProducts);
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    let filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(product => product.category === currentFilter);
        
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
     displayProducts(filteredProducts);
});

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productIdj);
    if (product) {
        cart.push(product);
        updateCartCount();
        
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Added! ✅';
        button.style.background = 'linear-gradient(45deg, #11998e, #38ef7d)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #ff6b6b, #4ecdc4)';
        }, 1000);
    }
}

// Update cart count
// function updateCartCount() {
//     document.getElementById('cart-count').textContent = cart.length;
//}

// Toggle cart (placeholder)
function toggleCart() {
    if (cart.length === 0) {
        alert('Your cart is empty! Start treasure hunting! 🏴‍☠️');
    } else {
        const cartItems = cart.map(item => `${item.name} - ${item.price}`).join('\n');
        alert(`Your Treasure Cart:\n\n${cartItems}\n\nTotal Items: ${cart.length}`);
    }
}

// Newsletter subscription
function subscribeNewsletter(event) {
    event.preventDefault();
    const email = event.target.querySelector('input').value;
    alert(`Thank you for joining our treasure hunt, ${email}! You will receive updates on new treasures! 🏴‍☠️`);
    event.target.reset();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive animations
document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});