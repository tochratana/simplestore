import tshirt from "../assets/t-shirt.svg";

export function renderHome(): string {
  return `
  <section class="dark:bg-gray-900 bg-white text-white overflow-x-hidden">
    <!-- Animated Background Particles -->
    <div class="fixed inset-0 pointer-events-none">
        <div class="particle w-2 h-2 bg-purple-400 top-20 left-20" style="animation-delay: 0s;"></div>
        <div class="particle w-3 h-3 bg-blue-400 top-40 right-32" style="animation-delay: 2s;"></div>
        <div class="particle w-1 h-1 bg-pink-400 top-60 left-1/3" style="animation-delay: 4s;"></div>
        <div class="particle w-2 h-2 bg-indigo-400 bottom-40 right-20" style="animation-delay: 6s;"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <!-- Background Gradient -->
        <div class="absolute inset-0 gradient-bg opacity-10"></div>
        
        <!-- Main Content Container -->
        <div class="relative z-10 max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                
                <!-- Left Content -->
                <div class="text-center lg:text-left">
                    <!-- Badge -->
                    <div class="slide-in inline-flex items-center px-4 py-2 rounded-full glassmorphism mb-8">
                        <div class="w-2 h-2 bg-green-400 rounded-full mr-3 pulse-ring"></div>
                        <span class="text-sm font-medium text-black dark:text-white">New Collection Available</span>
                    </div>
                    
                    <!-- Main Heading -->
                    <h1 class="slide-in-delay text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-black dark:text-white">
                        Discover
                        <span class="text-gradient block">Premium</span>
                        Fashion
                    </h1>
                    
                    <!-- Subheading -->
                    <p class="slide-in-delay text-xl sm:text-2xl dark:text-gray-300 mb-8 max-w-2xl text-gray-700">
                        Elevate your style with our curated collection of premium fashion pieces designed for the modern lifestyle.
                    </p>
                    
                    <!-- CTA Buttons -->
                    <div class="slide-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button class="btn-gradient shine-effect px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300">
                            Shop Collection
                        </button>
                        <button class="glassmorphism px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 text-black dark:text-white">
                            Watch Story
                        </button>
                    </div>
                    
                    <!-- Stats -->
                    <div class="slide-in-delay-2 grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
                        <div class="text-center lg:text-left">
                            <div class="text-3xl font-bold text-gradient">500K+</div>
                            <div class="text-gray-400 text-sm">Happy Customers</div>
                        </div>
                        <div class="text-center lg:text-left">
                            <div class="text-3xl font-bold text-gradient">50+</div>
                            <div class="text-gray-400 text-sm">Premium Brands</div>
                        </div>
                        <div class="text-center lg:text-left">
                            <div class="text-3xl font-bold text-gradient">4.9★</div>
                            <div class="text-gray-400 text-sm">Customer Rating</div>
                        </div>
                    </div>
                </div>
                
                <!-- Right Content - Product Showcase -->
                <div class="relative">
                    <!-- Main Product Card -->
                    <div class="product-card glassmorphism rounded-3xl p-8 mb-8">
                        <div class="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 relative overflow-hidden">
                            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                <div class="text-[100px]">
                                  <img src=${tshirt} alt="T-shirt" />
                                </div>
                            </div>
                            <div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                30% OFF
                            </div>
                        </div>
                        <h3 class="text-2xl font-bold mb-2 text-black dark:text-gray-400">Premium Cotton Tee</h3>
                        <p class="text-gray-400 mb-4">Sustainable, comfortable, stylish</p>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <span class="text-3xl font-bold text-gradient">$49</span>
                                <span class="text-gray-500 line-through">$70</span>
                            </div>
                            <button class="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    
                    <!-- Floating Product Cards -->
                    <div class="absolute -top-8 -left-8 floating-animation">
                        <div class="glassmorphism rounded-2xl p-4 w-32">
                            <div class="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-6xl">
                                👟
                            </div>
                            <div class="text-sm font-semibold text-black dark:text-white">Sneakers</div>
                            <div class="text-xs text-gray-400">From $120</div>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-4 -right-8 floating-animation">
                        <div class="glassmorphism rounded-2xl p-4 w-32">
                            <div class="w-full h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-3 flex items-center justify-center text-6xl">
                                👜
                            </div>
                            <div class="text-sm font-semibold text-black dark:text-white">Handbags</div>
                            <div class="text-xs text-gray-400">From $200</div>
                        </div>
                    </div>
                    
                    <div class="absolute top-1/2 -right-12 floating-animation">
                        <div class="glassmorphism rounded-2xl p-4 w-28">
                            <div class="w-full h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3 flex items-center justify-center text-6xl">
                                ⌚
                            </div>
                            <div class="text-xs font-semibold text-black dark:text-white">Watches</div>
                            <div class="text-xs text-gray-400">From $300</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
        </div>
    </section>
  </section>
  <section class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Shop by <span class="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Category</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our carefully curated collections designed to elevate your style for every occasion
        </p>
      </div>

      <!-- Categories Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Men's Collection -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 h-96 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <h3 class="text-2xl font-bold text-white mb-2">Men's Collection</h3>
            <p class="text-blue-100 mb-4">Contemporary styles for the modern gentleman</p>
            <div class="flex items-center justify-between">
              <span class="text-blue-200">From $45</span>
              <div class="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            New
          </div>
        </div>

        <!-- Women's Collection -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 h-96 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <h3 class="text-2xl font-bold text-white mb-2">Women's Collection</h3>
            <p class="text-purple-100 mb-4">Elegant designs for every confident woman</p>
            <div class="flex items-center justify-between">
              <span class="text-purple-200">From $55</span>
              <div class="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute top-4 right-4 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
            Trending
          </div>
        </div>

        <!-- Accessories -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-teal-600 h-96 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <h3 class="text-2xl font-bold text-white mb-2">Accessories</h3>
            <p class="text-green-100 mb-4">Complete your look with premium accessories</p>
            <div class="flex items-center justify-between">
              <span class="text-green-200">From $25</span>
              <div class="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
            Sale
          </div>
        </div>
      </div>

      <!-- Special Offers Banner -->
      <div class="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-700/20 backdrop-blur-3xl"></div>
        <div class="relative z-10">
          <h3 class="text-3xl lg:text-4xl font-bold text-white mb-4">
            Limited Time Offer
          </h3>
          <p class="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
            Get up to 50% off on selected premium fashion items. Don't miss out on this exclusive deal!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Shop Now
            </button>
            <div class="flex items-center gap-4 text-white">
              <div class="text-center">
                <div class="text-2xl font-bold">24</div>
                <div class="text-sm text-blue-200">Hours</div>
              </div>
              <div class="text-blue-300">:</div>
              <div class="text-center">
                <div class="text-2xl font-bold">15</div>
                <div class="text-sm text-blue-200">Minutes</div>
              </div>
              <div class="text-blue-300">:</div>
              <div class="text-center">
                <div class="text-2xl font-bold">30</div>
                <div class="text-sm text-blue-200">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Why Choose Us Section -->
  <section class="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose <span class="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">SimpleStore</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're committed to providing the best shopping experience with quality products and exceptional service
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Feature 1 -->
        <div class="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Guaranteed</h3>
          <p class="text-gray-600 dark:text-gray-300">Every product is carefully selected and quality-tested before reaching you</p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Best Prices</h3>
          <p class="text-gray-600 dark:text-gray-300">Competitive pricing with regular discounts and exclusive member deals</p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast Shipping</h3>
          <p class="text-gray-600 dark:text-gray-300">Free shipping on orders over $100 with express delivery options</p>
        </div>

        <!-- Feature 4 -->
        <div class="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">24/7 Support</h3>
          <p class="text-gray-600 dark:text-gray-300">Round-the-clock customer support to help with all your shopping needs</p>
        </div>
      </div>
    </div>
  </section>
  `;
}
