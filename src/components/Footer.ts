export function Footer(): string {
  return `
  <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <!-- Main Footer Content -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div class="space-y-4">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold text-sm">S</span>
                            </div>
                            <span class="text-xl font-bold text-gray-900 dark:text-white">ShopMart</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            Your trusted online marketplace for quality products at unbeatable prices. Shop with confidence and enjoy fast, secure delivery.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                                </svg>
                            </a>
                            <a href="#" class="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                                <svg class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.036 6.329c-3.193 0-5.777 2.584-5.777 5.777s2.584 5.777 5.777 5.777 5.777-2.584 5.777-5.777-2.584-5.777-5.777-5.777zm0 9.531c-2.07 0-3.754-1.684-3.754-3.754s1.684-3.754 3.754-3.754 3.754 1.684 3.754 3.754-1.684 3.754-3.754 3.754zm7.408-9.814c0 .747-.606 1.353-1.353 1.353s-1.353-.606-1.353-1.353.606-1.353 1.353-1.353 1.353.606 1.353 1.353zm3.845 1.375c-.086-1.816-.501-3.428-1.832-4.758-1.329-1.329-2.942-1.745-4.758-1.832-1.875-.106-7.497-.106-9.372 0-1.815.086-3.428.501-4.758 1.832-1.329 1.329-1.745 2.942-1.832 4.758-.106 1.875-.106 7.497 0 9.372.086 1.816.501 3.428 1.832 4.758 1.329 1.329 2.942 1.745 4.758 1.832 1.875.106 7.497.106 9.372 0 1.816-.086 3.428-.501 4.758-1.832 1.329-1.329 1.745-2.942 1.832-4.758.106-1.875.106-7.497 0-9.372zm-2.414 11.36c-.389.974-1.14 1.725-2.115 2.115-1.464.58-4.938.446-6.563.446s-5.1.133-6.563-.446c-.974-.389-1.725-1.14-2.115-2.115-.58-1.464-.446-4.938-.446-6.563s-.133-5.1.446-6.563c.389-.974 1.14-1.725 2.115-2.115 1.464-.58 4.938-.446 6.563-.446s5.1-.133 6.563.446c.974.389 1.725 1.14 2.115 2.115.58 1.464.446 4.938.446 6.563s.133 5.1-.446 6.563z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About Us</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Press</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Affiliate Program</a></li>
                        </ul>
                    </div>

                    <!-- Customer Service -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Customer Service</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Contact Us</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">FAQ</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Shipping Info</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Returns & Exchanges</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Size Guide</a></li>
                        </ul>
                    </div>

                    <!-- Policies -->
                    <div>
                        <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Legal</h4>
                        <ul class="space-y-3">
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Cookie Policy</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Accessibility</a></li>
                            <li><a href="#" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Sitemap</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Payment Methods & Certifications -->
                <div class="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
                    <div class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
                        <div class="text-center lg:text-left">
                            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Secure payments with</p>
                            <div class="flex items-center justify-center lg:justify-start space-x-4">
                                <div class="h-8 bg-gray-100 dark:bg-gray-700 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">VISA</span>
                                </div>
                                <div class="h-8 bg-gray-100 dark:bg-gray-700 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">MC</span>
                                </div>
                                <div class="h-8 bg-gray-100 dark:bg-gray-700 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">AMEX</span>
                                </div>
                                <div class="h-8 bg-gray-100 dark:bg-gray-700 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-gray-700 dark:text-gray-300">PayPal</span>
                                </div>
                            </div>
                        </div>
                        <div class="text-center lg:text-right">
                            <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Certified by</p>
                            <div class="flex items-center justify-center lg:justify-end space-x-4">
                                <div class="h-8 bg-green-100 dark:bg-green-900 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-green-700 dark:text-green-300">SSL</span>
                                </div>
                                <div class="h-8 bg-blue-100 dark:bg-blue-900 rounded px-3 flex items-center">
                                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-300">PCI DSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                        <p class="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
                            © 2024 ShopMart. All rights reserved. Built with ❤️ for amazing shopping experiences.
                        </p>
                        <div class="flex items-center space-x-6">
                            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Help Center</a>
                            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Track Order</a>
                            <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Live Chat</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  `;
}
