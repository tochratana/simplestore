export interface NavItem {
  href: string;
  label: string;
}

export class SimpleNavbar {
  private static cartCount = 3;
  private static navItems: NavItem[] = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  public static setCartCount(count: number): void {
    this.cartCount = count;
    this.updateCartBadge();
  }

  private static updateCartBadge(): void {
    const cartBadge = document.getElementById("cart-badge");
    const cartBadgeMobile = document.getElementById("cart-badge-mobile");

    if (cartBadge) {
      cartBadge.textContent = this.cartCount.toString();
      cartBadge.style.display = this.cartCount > 0 ? "flex" : "none";
    }

    if (cartBadgeMobile) {
      cartBadgeMobile.textContent = this.cartCount.toString();
      cartBadgeMobile.style.display = this.cartCount > 0 ? "flex" : "none";
    }
  }

  public static render(): string {
    return `
      <nav class="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            
            <!-- Logo -->
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SimpleStore
                </a>
              </div>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-8">
                ${this.navItems
                  .map(
                    (item) => `
                  <a
                    href="${item.href}"
                    class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 nav-link"
                  >
                    ${item.label}
                  </a>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Right Side Icons -->
            <div class="hidden md:flex items-center space-x-4">
              <!-- Search -->
              
              
              <!-- Theme Toggle -->
              <button onclick="ThemeManager.toggle()" class="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                <svg class="w-5 h-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
                <svg class="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </button>
              
              <!-- User Account -->
              <button onclick="SimpleNavbar.handleAccount()" class="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>
              
              <!-- Shopping Cart -->
              <button onclick="SimpleNavbar.handleCart()" class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.1"></path>
                </svg>
                <span id="cart-badge" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium ${
                  this.cartCount > 0 ? "" : "hidden"
                }">
                  ${this.cartCount}
                </span>
              </button>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center space-x-2">
              <!-- Mobile Cart Icon -->
              <button onclick="SimpleNavbar.handleCart()" class="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.1"></path>
                </svg>
                <span id="cart-badge-mobile" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-medium ${
                  this.cartCount > 0 ? "" : "hidden"
                }">
                  ${this.cartCount}
                </span>
              </button>
              
              <!-- Hamburger Menu -->
              <button onclick="SimpleNavbar.toggleMobileMenu()" class="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div id="mobile-menu" class="md:hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            ${this.navItems
              .map(
                (item) => `
              <a
                href="${item.href}"
                onclick="SimpleNavbar.closeMobileMenu()"
                class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                ${item.label}
              </a>
            `
              )
              .join("")}
            
            <!-- Mobile-only links -->
            <div class="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
              <button
                onclick="SimpleNavbar.handleSearch(); SimpleNavbar.closeMobileMenu();"
                class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center w-full text-left"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                Search
              </button>
              <button
                onclick="ThemeManager.toggle(); SimpleNavbar.closeMobileMenu();"
                class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center w-full text-left"
              >
                <svg class="w-5 h-5 mr-2 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
                <svg class="w-5 h-5 mr-2 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                Toggle Theme
              </button>
              <button
                onclick="SimpleNavbar.handleAccount(); SimpleNavbar.closeMobileMenu();"
                class="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center w-full text-left"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                My Account
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <script>
        // Create SimpleNavbar object if it doesn't exist
        window.SimpleNavbar = window.SimpleNavbar || {};
        
        // Global methods for the navbar functionality
        window.SimpleNavbar.toggleMobileMenu = function() {
          const mobileMenu = document.getElementById('mobile-menu');
          const hamburgerIcon = document.getElementById('hamburger-icon');
          const closeIcon = document.getElementById('close-icon');
          
          if (mobileMenu && hamburgerIcon && closeIcon) {
            const isOpen = mobileMenu.classList.contains('max-h-96');
            
            if (isOpen) {
              mobileMenu.classList.add('max-h-0', 'opacity-0');
              mobileMenu.classList.remove('max-h-96', 'opacity-100');
              hamburgerIcon.classList.remove('hidden');
              closeIcon.classList.add('hidden');
            } else {
              mobileMenu.classList.remove('max-h-0', 'opacity-0');
              mobileMenu.classList.add('max-h-96', 'opacity-100');
              hamburgerIcon.classList.add('hidden');
              closeIcon.classList.remove('hidden');
            }
          }
        };
        
        window.SimpleNavbar.closeMobileMenu = function() {
          const mobileMenu = document.getElementById('mobile-menu');
          const hamburgerIcon = document.getElementById('hamburger-icon');
          const closeIcon = document.getElementById('close-icon');
          
          if (mobileMenu && hamburgerIcon && closeIcon) {
            mobileMenu.classList.add('max-h-0', 'opacity-0');
            mobileMenu.classList.remove('max-h-96', 'opacity-100');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          }
        };
        
        window.SimpleNavbar.handleCart = function() {
          alert('Cart opened! Items: ' + ${this.cartCount});
        };
        
        window.SimpleNavbar.handleSearch = function() {
          const query = prompt('Search for products:');
          if (query) {
            console.log('Searching for:', query);
          }
        };
        
        window.SimpleNavbar.handleAccount = function() {
          window.location.hash = '#account';
        };
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
          const mobileMenu = document.getElementById('mobile-menu');
          const mobileMenuBtn = e.target.closest('button[onclick*="toggleMobileMenu"]');
          
          if (mobileMenu && !mobileMenu.contains(e.target) && !mobileMenuBtn) {
            window.SimpleNavbar.closeMobileMenu();
          }
        });
      </script>
    `;
  }

  public static handleCart(): void {
    alert(`Cart opened! Items: ${this.cartCount}`);
  }

  public static handleSearch(): void {
    const query = prompt("Search for products:");
    if (query) {
      console.log("Searching for:", query);
    }
  }

  public static handleAccount(): void {
    window.location.hash = "#account";
  }

  public static toggleMobileMenu(): void {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    if (mobileMenu && hamburgerIcon && closeIcon) {
      const isOpen = mobileMenu.classList.contains("max-h-96");

      if (isOpen) {
        mobileMenu.classList.add("max-h-0", "opacity-0");
        mobileMenu.classList.remove("max-h-96", "opacity-100");
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      } else {
        mobileMenu.classList.remove("max-h-0", "opacity-0");
        mobileMenu.classList.add("max-h-96", "opacity-100");
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
      }
    }
  }

  public static closeMobileMenu(): void {
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    if (mobileMenu && hamburgerIcon && closeIcon) {
      mobileMenu.classList.add("max-h-0", "opacity-0");
      mobileMenu.classList.remove("max-h-96", "opacity-100");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
}

// Export function to match your existing pattern
export function Navbar(): string {
  return SimpleNavbar.render();
}

// Export the class for advanced usage
export default SimpleNavbar;


// <button onclick="SimpleNavbar.handleSearch()" class="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
//                 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
//                 </svg>
//               </button>