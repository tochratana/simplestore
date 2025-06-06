// components/ProductCard.ts

interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export function ProductCard(product: Product): string {
  console.log(product);

  // Clean up the title (remove extra text like "bangggsssss")
  const cleanTitle = product.title
    .replace(/\s+(bangggsssss|banggg|bang)+/gi, "")
    .trim();

  // Truncate description to fit the card better
  const truncatedDescription =
    product.description.length > 120
      ? product.description.substring(0, 120) + "..."
      : product.description;

  // Use the first image from the images array
  const primaryImage =
    product.images[0] || "https://via.placeholder.com/400x300?text=No+Image";

  // Generate a random rating (since it's not in the API)
  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);
  const fullStars = Math.floor(parseFloat(rating));
  const hasHalfStar = parseFloat(rating) % 1 >= 0.5;

  // Check if product is new (created within last 7 days)
  const isNew =
    new Date(product.creationAt) >
    new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

  return `
    <div class="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group" onclick="window.location.hash='#product-${
      product.id
    }'">
        
        <!-- Product Image Container -->
        <div class="relative mb-6 overflow-hidden rounded-2xl bg-slate-700/30">
            <img 
                src="${primaryImage}" 
                alt="${cleanTitle}"
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'"
            >
            
            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
                <span class="bg-blue-500/20 backdrop-blur-sm text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-400/20">
                    ${product.category.name}
                </span>
            </div>
            
            <!-- New Badge (if applicable) -->
            ${
              isNew
                ? `
            <div class="absolute top-4 right-4">
                <span class="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    NEW
                </span>
            </div>
            `
                : ""
            }
        </div>
        
        <!-- Product Info -->
        <div class="space-y-4">
            <!-- Title -->
            <h3 class="text-white text-xl font-semibold leading-tight line-clamp-2" title="${
              product.title
            }">
                ${cleanTitle}
            </h3>
            
            <!-- Description -->
            <p class="text-slate-400 text-sm leading-relaxed line-clamp-3" title="${
              product.description
            }">
                ${truncatedDescription}
            </p>
            
            <!-- Price Section -->
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <span class="text-white text-2xl font-bold">$${
                      product.price
                    }</span>
                </div>
                
                <!-- Rating -->
                <div class="flex items-center space-x-1">
                    <div class="flex text-yellow-400">
                        ${Array.from({ length: 5 }, (_, i) => {
                          if (i < fullStars) {
                            return `<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>`;
                          } else if (i === fullStars && hasHalfStar) {
                            return `<svg class="w-4 h-4 fill-current opacity-60" viewBox="0 0 20 20">
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>`;
                          } else {
                            return `<svg class="w-4 h-4 fill-current opacity-30" viewBox="0 0 20 20">
                                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                    </svg>`;
                          }
                        }).join("")}
                    </div>
                    <span class="text-slate-400 text-sm">${rating}</span>
                </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex space-x-3 pt-2">
                <button 
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:transform active:scale-95"
                    onclick="addToCart(${product.id})"
                >
                    Add to Cart
                </button>
                
                <button 
                    class="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
                    onclick="toggleWishlist(${product.id})"
                >
                    <svg class="w-5 h-5 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  `;
}

// Optional: Helper functions for button interactions
export function addToCart(productId: number): void {
  console.log(`Adding product ${productId} to cart`);
  // Add your cart logic here
}

export function toggleWishlist(productId: number): void {
  console.log(`Toggling wishlist for product ${productId}`);
  // Add your wishlist logic here
}
