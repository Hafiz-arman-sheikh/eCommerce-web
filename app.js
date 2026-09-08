let cardContainer = document.querySelector('.product-grid');

fetch("https://dummyjson.com/products")
    .then(data => data.json())
    .then(convertedData => {
        // DummyJSON se array extract kar rahe hain
        const products = convertedData.products; 

        for (var i = 0; i < products.length; i++) {
            const item = products[i];

            // Single dynamic product card
            cardContainer.innerHTML += `
            <div class="product-card">
                <div class="card-img">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <button class="wishlist-icon" onclick="toggleWishlist(${item.id}, this)">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
                <div class="card-details">
                    <span class="category">${item.category}</span>
                    <h3><a href="products.html">${item.title}</a></h3>
                    <div class="price">Rs. ${item.price} <span class="old-price">Rs. ${Math.round(item.price * 1.3)}</span></div>
                    <div class="card-actions">
                        <button class="btn-cart" onclick="addToCart('${item.title.replace(/'/g, "\\'")}', ${item.price})">Add to Cart</button>
                        <a href="product-detail.html" class="btn-buy">Buy Now</a>
                    </div>
                </div>
            </div>`;
        }
    })
    .catch(error => console.error("API Error:", error));

// // Cart & Wishlist Functions
// function addToCart(title, price) {
//     const cartCount = document.getElementById('cart-count');
//     cartCount.innerText = parseInt(cartCount.innerText) + 1;
// }

// function toggleWishlist(id, btn) {
//     const icon = btn.querySelector('i');
//     icon.classList.toggle('fa-solid');
//     icon.classList.toggle('fa-regular');

//     const wishlistCount = document.getElementById('wishlist-count');
//     if (icon.classList.contains('fa-solid')) {
//         wishlistCount.innerText = parseInt(wishlistCount.innerText) + 1;
//     } else {
//         wishlistCount.innerText = parseInt(wishlistCount.innerText) - 1;
//     }
// }        