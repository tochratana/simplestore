/**
 * ThemeManager - A standalone theme management utility
 * Handles dark/light mode switching and persistence
 */
export class ThemeManager {
  private static instance: ThemeManager;
  private currentTheme: "light" | "dark" = "light";
  private callbacks: Array<(theme: "light" | "dark") => void> = [];

  private constructor() {
    this.initialize();
  }

  /**
   * Get singleton instance
   */
  public static getInstance(): ThemeManager {
    if (!ThemeManager.instance) {
      ThemeManager.instance = new ThemeManager();
    }
    return ThemeManager.instance;
  }

  /**
   * Initialize theme on page load
   */
  private initialize(): void {
    const html = document.documentElement;

    // Check if HTML already has dark class (from your initial setup)
    const hasDarkClass = html.classList.contains("dark");

    if (hasDarkClass) {
      this.currentTheme = "dark";
    } else {
      // Default to system preference if no class is set
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      this.currentTheme = prefersDark ? "dark" : "light";
    }

    this.applyTheme();
    this.setupSystemThemeListener();
  }

  /**
   * Apply the current theme to the document
   */
  private applyTheme(): void {
    const html = document.documentElement;

    // Update data-theme attribute
    html.setAttribute("data-theme", this.currentTheme);

    // Update classList for Tailwind dark mode
    if (this.currentTheme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    // Notify callbacks
    this.callbacks.forEach((callback) => callback(this.currentTheme));
  }

  /**
   * Toggle between light and dark themes
   */
  public toggle(): void {
    this.currentTheme = this.currentTheme === "dark" ? "light" : "dark";
    this.applyTheme();
  }

  /**
   * Set specific theme
   */
  public setTheme(theme: "light" | "dark"): void {
    if (this.currentTheme !== theme) {
      this.currentTheme = theme;
      this.applyTheme();
    }
  }

  /**
   * Get current theme
   */
  public getCurrentTheme(): "light" | "dark" {
    return this.currentTheme;
  }

  /**
   * Check if current theme is dark
   */
  public isDark(): boolean {
    return this.currentTheme === "dark";
  }

  /**
   * Subscribe to theme changes
   */
  public onThemeChange(
    callback: (theme: "light" | "dark") => void
  ): () => void {
    this.callbacks.push(callback);

    // Return unsubscribe function
    return () => {
      const index = this.callbacks.indexOf(callback);
      if (index > -1) {
        this.callbacks.splice(index, 1);
      }
    };
  }

  /**
   * Setup system theme preference listener
   */
  private setupSystemThemeListener(): void {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        // Update theme to follow system preference
        this.currentTheme = e.matches ? "dark" : "light";
        this.applyTheme();
      });
  }

  /**
   * Mark theme as manually set (for future localStorage implementation)
   */
  public markAsManuallySet(): void {
    // This method is kept for API compatibility but doesn't use localStorage
    console.log("Theme marked as manually set");
  }

  /**
   * Reset to follow system theme
   */
  public followSystemTheme(): void {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    this.setTheme(prefersDark ? "dark" : "light");
  }

  /**
   * Static method for easy access
   */
  public static toggle(): void {
    ThemeManager.getInstance().toggle();
  }

  /**
   * Static method to get current theme
   */
  public static getCurrentTheme(): "light" | "dark" {
    return ThemeManager.getInstance().getCurrentTheme();
  }

  /**
   * Static method to check if dark mode
   */
  public static isDark(): boolean {
    return ThemeManager.getInstance().isDark();
  }

  /**
   * Initialize theme manager (call this in your main script)
   */
  public static init(): ThemeManager {
    return ThemeManager.getInstance();
  }
}

// Global window object for easy access from HTML
declare global {
  interface Window {
    ThemeManager: typeof ThemeManager;
  }
}

// Make ThemeManager globally available
if (typeof window !== "undefined") {
  window.ThemeManager = ThemeManager;
}

export default ThemeManager;
