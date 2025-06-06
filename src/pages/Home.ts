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
                                <div class="text-6xl">👕</div>
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
                            <div class="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-3 flex items-center justify-center text-2xl">
                                👟
                            </div>
                            <div class="text-sm font-semibold text-black dark:text-white">Sneakers</div>
                            <div class="text-xs text-gray-400">From $120</div>
                        </div>
                    </div>
                    
                    <div class="absolute -bottom-4 -right-8 floating-animation">
                        <div class="glassmorphism rounded-2xl p-4 w-32">
                            <div class="w-full h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mb-3 flex items-center justify-center text-2xl">
                                👜
                            </div>
                            <div class="text-sm font-semibold text-black dark:text-white">Handbags</div>
                            <div class="text-xs text-gray-400">From $200</div>
                        </div>
                    </div>
                    
                    <div class="absolute top-1/2 -right-12 floating-animation">
                        <div class="glassmorphism rounded-2xl p-4 w-28">
                            <div class="w-full h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mb-3 flex items-center justify-center text-xl">
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
  `;
}
