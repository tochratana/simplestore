export function Aboutus(): string {
return `
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Section -->
        <section class="mb-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1">
                    <h1 class="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        Our Story
                    </h1>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Founded in 2020, we started as a small team passionate about bringing high-quality products to customers worldwide. 
                        Today, we've grown into a trusted e-commerce platform serving millions of happy customers.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="font-medium">1M+ Happy Customers</span>
                        </div>
                        <div class="flex items-center">
                            <div class="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span class="font-medium">100% Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2">
                    <div class="relative rounded-2xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                             alt="Our team working together" 
                             class="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                        <div class="absolute bottom-6 left-6 text-white">
                            <p class="text-sm font-medium">Our amazing team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="mb-16 py-12 bg-gray-100 dark:bg-gray-800 rounded-3xl px-8">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    To revolutionize online shopping by providing an exceptional customer experience, 
                    curated high-quality products, and seamless delivery - all while maintaining 
                    sustainable and ethical business practices.
                </p>
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>Ethically Sourced Products</span>
                </div>
            </div>
        </section>

        <!-- Values Section -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Value 1 -->
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="w-14 h-14 bg-indigo-50 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Customer Trust</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        We prioritize building long-term relationships with our customers through transparency and reliability.
                    </p>
                </div>
                
                <!-- Value 2 -->
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="w-14 h-14 bg-indigo-50 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Innovation</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        We constantly evolve to bring you the latest products and shopping experiences.
                    </p>
                </div>
                
                <!-- Value 3 -->
                <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div class="w-14 h-14 bg-indigo-50 dark:bg-indigo-900 rounded-xl flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Fair Pricing</h3>
                    <p class="text-gray-600 dark:text-gray-300">
                        We work directly with suppliers to bring you quality products at competitive prices.
                    </p>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section class="mb-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold mb-4">Meet The Team</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Our diverse team of professionals is dedicated to making your shopping experience exceptional.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Team Member 1 -->
                <div class="group text-center">
                    <div class="relative overflow-hidden rounded-2xl mb-4">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                             alt="Sarah Johnson" 
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div class="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p class="text-sm">Head of Customer Experience</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold">Sarah Johnson</h3>
                    <p class="text-indigo-600 dark:text-indigo-400">CEO & Founder</p>
                </div>
                
                <!-- Team Member 2 -->
                <div class="group text-center">
                    <div class="relative overflow-hidden rounded-2xl mb-4">
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                             alt="Michael Chen" 
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div class="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p class="text-sm">10+ years in e-commerce</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold">Michael Chen</h3>
                    <p class="text-indigo-600 dark:text-indigo-400">CTO</p>
                </div>
                
                <!-- Team Member 3 -->
                <div class="group text-center">
                    <div class="relative overflow-hidden rounded-2xl mb-4">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" 
                             alt="Emma Rodriguez" 
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div class="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p class="text-sm">Product curation expert</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold">Emma Rodriguez</h3>
                    <p class="text-indigo-600 dark:text-indigo-400">Head of Merchandising</p>
                </div>
                
                <!-- Team Member 4 -->
                <div class="group text-center">
                    <div class="relative overflow-hidden rounded-2xl mb-4">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" 
                             alt="David Kim" 
                             class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <div class="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p class="text-sm">Customer satisfaction focus</p>
                            </div>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold">David Kim</h3>
                    <p class="text-indigo-600 dark:text-indigo-400">Customer Support Lead</p>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div class="p-4">
                        <p class="text-4xl font-bold mb-2">10M+</p>
                        <p class="text-indigo-100">Products Sold</p>
                    </div>
                    <div class="p-4">
                        <p class="text-4xl font-bold mb-2">50+</p>
                        <p class="text-indigo-100">Countries Served</p>
                    </div>
                    <div class="p-4">
                        <p class="text-4xl font-bold mb-2">24/7</p>
                        <p class="text-indigo-100">Customer Support</p>
                    </div>
                    <div class="p-4">
                        <p class="text-4xl font-bold mb-2">100+</p>
                        <p class="text-indigo-100">Team Members</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
`
}