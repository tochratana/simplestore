// main.ts
import { Navbar, SimpleNavbar } from "./components/Navbar";
import ThemeManager from "./ts/ThemeManager";
import { renderHome } from "./pages/Home";
import { renderProductPage } from "./pages/ProductPage";

function router() {
  const app = document.getElementById("app");
  if (!app) return;

  let content = "";
  const hash = window.location.hash;

  // Route handling
  switch (hash) {
    case "#products":
      content = renderProductPage();
      break;
    case "#categories":
      content =
        "<div class='p-8'><h2 class='text-3xl font-bold mb-4'>Categories</h2><p>Browse by category...</p></div>";
      break;
    case "#about":
      content =
        "<div class='p-8'><h2 class='text-3xl font-bold mb-4'>About Us</h2><p>Learn more about SimpleStore...</p></div>";
      break;
    case "#contact":
      content =
        "<div class='p-8'><h2 class='text-3xl font-bold mb-4'>Contact</h2><p>Get in touch with us...</p></div>";
      break;
    case "#account":
      content =
        "<div class='p-8'><h2 class='text-3xl font-bold mb-4'>My Account</h2><p>Manage your account...</p></div>";
      break;
    default:
      content = renderHome();
      break;
  }

  // Render navbar + content
  app.innerHTML = Navbar() + content;

  // Update active nav link styling
  updateActiveNavLink(hash);

  // Update cart count if needed (example)
  setTimeout(() => {
    SimpleNavbar.setCartCount(5); // This will update the cart badge
  }, 100);
}

function updateActiveNavLink(currentHash: string) {
  // Remove active class from all nav links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove(
      "text-blue-600",
      "dark:text-blue-400",
      "bg-blue-50",
      "dark:bg-blue-900"
    );
    link.classList.add("text-gray-700", "dark:text-gray-200");
  });

  // Add active class to current link
  const activeLink = document.querySelector(
    `a[href="${currentHash || "#home"}"]`
  );
  if (activeLink && activeLink.classList.contains("nav-link")) {
    activeLink.classList.remove("text-gray-700", "dark:text-gray-200");
    activeLink.classList.add(
      "text-blue-600",
      "dark:text-blue-400",
      "bg-blue-50",
      "dark:bg-blue-900"
    );
  }
}

// Initialize application
function initializeApp() {
  // Initialize theme manager first
  const themeManager = ThemeManager.init();

  // Optional: Listen to theme changes for additional functionality
  themeManager.onThemeChange((theme) => {
    console.log(`Theme changed to: ${theme}`);
    // You can add additional theme change handling here
    // For example, update analytics, save user preferences, etc.
  });

  // Initialize router
  router();

  console.log(
    "SimpleStore initialized with theme:",
    themeManager.getCurrentTheme()
  );
}

// Event listeners
window.addEventListener("load", initializeApp);
window.addEventListener("hashchange", router);

// Optional: Add smooth scrolling to top when route changes
window.addEventListener("hashchange", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Optional: Handle browser back/forward buttons
window.addEventListener("popstate", router);

// Export for global access
declare global {
  interface Window {
    SimpleStore: {
      router: () => void;
      updateCart: (count: number) => void;
      toggleTheme: () => void;
      getCurrentTheme: () => "light" | "dark";
      setTheme: (theme: "light" | "dark") => void;
    };
  }
}

// Create global SimpleStore object
window.SimpleStore = {
  router,
  updateCart: (count: number) => {
    SimpleNavbar.setCartCount(count);
  },
  toggleTheme: () => {
    ThemeManager.toggle();
  },
  getCurrentTheme: () => {
    return ThemeManager.getCurrentTheme();
  },
  setTheme: (theme: "light" | "dark") => {
    ThemeManager.getInstance().setTheme(theme);
  },
};
