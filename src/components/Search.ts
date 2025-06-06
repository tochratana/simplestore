// components/Search.ts
export function SearchInput(onSearch: (query: string) => void): string {
  const inputId = "search-input";
  setTimeout(() => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    input?.addEventListener("input", () => {
      onSearch(input.value.trim().toLowerCase());
    });
  }, 0);

  return `
    <div class="p-4">
      <input
        id="${inputId}"
        type="text"
        placeholder="Search products..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
      />
    </div>
  `;
}
