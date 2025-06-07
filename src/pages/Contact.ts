export function Contact(): string {
  return `
  <!-- Page Header -->
  <section class="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      <div class="absolute top-40 right-32 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      <div class="absolute bottom-32 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        Get in <span class="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Touch</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
      <div class="flex justify-center space-x-8 text-gray-300">
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Response within 24 hours</span>
        </div>
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span>100% Satisfaction Guaranteed</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form & Info Section -->
  <section class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-slate-700">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send us a Message</h2>
          
          <form id="contactForm" class="space-y-6">
            <!-- Name Fields -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                <input type="text" id="firstName" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                <input type="text" id="lastName" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number (Optional)</label>
              <input type="tel" id="phone" class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
              <select id="subject" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Support</option>
                <option value="product">Product Question</option>
                <option value="return">Returns & Exchanges</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" rows="6" required class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us how we can help you..."></textarea>
            </div>

            <!-- Newsletter Signup -->
            <div class="flex items-center space-x-3">
              <input type="checkbox" id="newsletter" class="w-4 h-4 text-blue-600 border-gray-300 dark:border-slate-600 rounded focus:ring-blue-500">
              <label for="newsletter" class="text-sm text-gray-600 dark:text-gray-300">Subscribe to our newsletter for updates and exclusive offers</label>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800">
              <span class="flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="space-y-6">
            <!-- Location -->
            <div class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Visit Our Store</h3>
                  <p class="text-blue-100">Find us at our flagship location</p>
                </div>
              </div>
              <div class="space-y-2 text-blue-100">
                <p>123 Fashion Avenue</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Call Us</h3>
                  <p class="text-green-100">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
              <div class="space-y-2 text-green-100">
                <p class="text-lg font-semibold">1-800-FASHION</p>
                <p>(1-800-327-4466)</p>
                <p class="text-sm">International: +1-555-123-4567</p>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <div class="flex items-center space-x-4 mb-4">
                <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold">Email Us</h3>
                  <p class="text-purple-100">We respond within 24 hours</p>
                </div>
              </div>
              <div class="space-y-2 text-purple-100">
                <p>hello@simplestore.com</p>
                <p>support@simplestore.com</p>
                <p>partnerships@simplestore.com</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h3>
            <div class="grid grid-cols-2 gap-4">
              <a href="#" class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors group">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <span class="font-medium text-gray-900 dark:text-white">Twitter</span>
              </a>
              <a href="#" class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-pink-50 dark:hover:bg-slate-600 transition-colors group">
                <div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.119.112.22.085.402-.09.402-.293 1.177-.334 1.345-.053.225-.172.271-.402.163-1.507-.7-2.448-2.893-2.448-4.658 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <span class="font-medium text-gray-900 dark:text-white">Pinterest</span>
              </a>
              <a href="#" class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-purple-50 dark:hover:bg-slate-600 transition-colors group">
                <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.119.112.22.085.402-.09.402-.293 1.177-.334 1.345-.053.225-.172.271-.402.163-1.507-.7-2.448-2.893-2.448-4.658 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
                <span class="font-medium text-gray-900 dark:text-white">Instagram</span>
              </a>
              <a href="#" class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors group">
                <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span class="font-medium text-gray-900 dark:text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked <span class="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Questions</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Quick answers to common questions about our products and services
        </p>
      </div>

      <div class="space-y-4">
        <!-- FAQ Item 1 -->
        <div class="bg-white dark:bg-slate-700 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-600">
          <button class="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-2xl" onclick="toggleFAQ(1)">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">What is your return policy?</h3>
              <svg id="faq-icon-1" class="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
          </button>
          <div id="faq-content-1" class="hidden px-6 pb-6">
            <p class="text-gray-600 dark:text-gray-300">We offer a 30-day return policy for all items. Products must be in original condition with tags attached. Free returns on orders over $100.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}
