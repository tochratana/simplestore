export function Contact(): string {
  return `
  <div class="min-h-screen px-4 py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
  <div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Contact Us</h1>
    <p class="text-gray-600 dark:text-gray-300 text-center mb-10">
      We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
    </p>

    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
        <input type="text" id="name" name="name" required
               class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
        <input type="email" id="email" name="email" required
               class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Subject</label>
        <input type="text" id="subject" name="subject"
               class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500">
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
        <textarea id="message" name="message" rows="5" required
                  class="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div class="text-center">
        <button type="submit"
                class="inline-block w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300">
          Send Message
        </button>
      </div>
    </form>
  </div>
</div>

  `;
}
