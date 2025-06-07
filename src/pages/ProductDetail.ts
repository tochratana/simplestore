// pages/ProductDetail.ts
export function renderProductDetail(id: string): string {
  const containerId = "product-detail-container";

  // Fetch product detail
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `
          <!-- Main Product Container -->
          <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
            <div class="max-w-7xl mx-auto">
              
              <!-- Breadcrumb Navigation -->
              <nav class="mb-6 text-sm text-gray-600 dark:text-gray-400">
                <span class="hover:text-blue-600 cursor-pointer">Home</span>
                <span class="mx-2">/</span>
                <span class="hover:text-blue-600 cursor-pointer">${
                  product.category.name
                }</span>
                <span class="mx-2">/</span>
                <span class="text-gray-900 dark:text-white font-medium">${
                  product.title
                }</span>
              </nav>

              <!-- Product Detail Card -->
              <div class="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                <div class="grid lg:grid-cols-2 gap-0">
                  
                  <!-- Image Section -->
                  <div class="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 lg:p-12 flex items-center justify-center">
                    <div class="relative group">
                      <img 
                        src="${product.images[0]}" 
                        alt="${product.title}"
                        class="w-full max-w-md h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                        onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'"
                      />
                      <!-- Image overlay effects -->
                      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <!-- Floating badges -->
                      <div class="absolute top-4 left-4 flex flex-col gap-2">
                        <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          ✨ Premium Quality
                        </span>
                        <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          🚚 Free Shipping
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Content Section -->
                  <div class="p-8 lg:p-12 flex flex-col justify-center">
                    
                    <!-- Category Badge -->
                    <div class="mb-4">
                      <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                        </svg>
                        ${product.category.name}
                      </span>
                    </div>

                    <!-- Product Title -->
                    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                      ${product.title}
                    </h1>

                    <!-- Price Section -->
                    <div class="flex items-center gap-4 mb-6">
                      <span class="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                        $${product.price}
                      </span>
                      <div class="flex flex-col">
                        <span class="text-sm text-gray-500 line-through">$${Math.round(
                          product.price * 1.3
                        )}</span>
                        <span class="text-xs text-green-600 font-semibold">Save ${Math.round(
                          product.price * 0.3
                        )}!</span>
                      </div>
                    </div>

                    <!-- Product Description -->
                    <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light">
                      ${product.description}
                    </p>

                    <!-- Product Features -->
                    <div class="grid grid-cols-2 gap-4 mb-8">
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-medium">2 Year Warranty</span>
                      </div>
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-medium">30-Day Returns</span>
                      </div>
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-medium">Fast Delivery</span>
                      </div>
                      <div class="flex items-center text-gray-600 dark:text-gray-400">
                        <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-medium">Secure Payment</span>
                      </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-4 mb-6">
                      <button 
                        onclick="addToCart(${product.id})" 
                        class="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98]"
                      >
                        <span class="flex items-center justify-center">
                          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0H17M17 18a1 1 0 11-2 0 1 1 0 012 0zM9 18a1 1 0 11-2 0 1 1 0 012 0z"/>
                          </svg>
                          Add to Cart
                        </span>
                      </button>
                      
                      <button 
                        onclick="toggleWishlist(${product.id})" 
                        class="sm:w-16 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-4 px-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      >
                        <svg class="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                      </button>
                    </div>

                    <!-- Additional Info -->
                    <div class="border-t dark:border-gray-700 pt-6">
                      <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span>Product ID: #${product.id}</span>
                        <div class="flex items-center gap-4">
                          <button 
                            onclick="shareProduct()" 
                            class="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"/>
                            </svg>
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Related Products Section -->
              <div class="mt-16">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  You might also like
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  ${Array.from(
                    { length: 3 },
                    (_, i) => `
                    <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-gray-100 dark:border-gray-700">
                      <div class="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                      <div class="p-6">
                        <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Related Product ${
                          i + 1
                        }</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Similar high-quality furniture piece</p>
                        <div class="flex items-center justify-between">
                          <span class="text-lg font-bold text-green-600">$${Math.round(
                            product.price * (0.8 + Math.random() * 0.4)
                          )}</span>
                          <button class="text-indigo-600 hover:text-indigo-700 font-medium text-sm">View →</button>
                        </div>
                      </div>
                    </div>
                  `
                  ).join("")}
                </div>
              </div>
            </div>
          </div>

          <script>
            // Interactive functions
            function addToCart(productId) {
              const button = event.target.closest('button');
              const originalContent = button.innerHTML;
              
              button.innerHTML = \`
                <span class="flex items-center justify-center">
                  <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </span>
              \`;
              
              setTimeout(() => {
                button.innerHTML = \`
                  <span class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Added to Cart!
                  </span>
                \`;
                button.classList.add('bg-green-600', 'hover:bg-green-700');
                button.classList.remove('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'hover:from-indigo-700', 'hover:to-purple-700');
                
                setTimeout(() => {
                  button.innerHTML = originalContent;
                  button.classList.remove('bg-green-600', 'hover:bg-green-700');
                  button.classList.add('bg-gradient-to-r', 'from-indigo-600', 'to-purple-600', 'hover:from-indigo-700', 'hover:to-purple-700');
                }, 2000);
              }, 1000);
            }

            function toggleWishlist(productId) {
              const button = event.target.closest('button');
              const svg = button.querySelector('svg');
              const isLiked = svg.getAttribute('fill') === 'currentColor';
              
              if (isLiked) {
                svg.setAttribute('fill', 'none');
                button.classList.remove('text-red-500');
                button.classList.add('text-gray-700', 'dark:text-gray-300');
              } else {
                svg.setAttribute('fill', 'currentColor');
                button.classList.add('text-red-500');
                button.classList.remove('text-gray-700', 'dark:text-gray-300');
              }
            }

            function shareProduct() {
              if (navigator.share) {
                navigator.share({
                  title: '${product.title}',
                  text: 'Check out this amazing product!',
                  url: window.location.href
                });
              } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  alert('Product link copied to clipboard!');
                });
              }
            }
          </script>
        `;
      }
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `
          <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
            <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
              <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Oops! Something went wrong</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">We couldn't load the product details. Please try again later.</p>
              <button onclick="location.reload()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                Try Again
              </button>
            </div>
          </div>
        `;
      }
    });

  return `
    <div id="${containerId}" class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-md mx-auto text-center">
        <div class="animate-spin w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Loading Product Details</h3>
        <p class="text-gray-600 dark:text-gray-400">Please wait while we fetch the product information...</p>
      </div>
    </div>
  `;
}
