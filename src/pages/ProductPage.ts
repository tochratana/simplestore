// pages/ProductPage.ts
import { ProductCard } from "../components/ProductCard";
import { SearchInput } from "../components/Search";

let allProducts: any[] = [];

export function renderProductPage(): string {
  // Start fetching but don't wait — just return skeleton immediately
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      renderProducts(data);
    });

  return `
    ${SearchInput(handleSearch)}
    <div id="product-list" class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-4">
      ${renderSkeletons(12)}
    </div>
  `;
}

// Skeleton loader for multiple cards
function renderSkeletons(count: number): string {
  return Array.from({ length: count })
    .map(
      () => `
    <div class="dark:bg-slate-800/50 bg-slate-100/10 backdrop-blur-sm rounded-3xl p-6 max-w-sm w-full shadow-2xl border dark:border-slate-700/50 border-slate-100/50 animate-pulse">
      <div class="relative mb-6 overflow-hidden rounded-2xl bg-slate-700/30 h-64 w-full">
        <div class="absolute top-4 left-4 w-20 h-6 bg-blue-400/20 rounded-full"></div>
        <div class="absolute top-4 right-4 w-12 h-6 bg-red-500/80 rounded-full"></div>
      </div>
      <div class="space-y-4">
        <div class="h-5 dark:bg-slate-600 bg-gray-200 rounded w-3/4"></div>
        <div class="space-y-2">
          <div class="h-4 dark:bg-slate-600 bg-gray-200 rounded w-full"></div>
          <div class="h-4 dark:bg-slate-600 bg-gray-200 rounded w-11/12"></div>
          <div class="h-4 dark:bg-slate-600 bg-gray-200 rounded w-10/12"></div>
        </div>
        <div class="flex items-center justify-between">
          <div class="h-6 dark:bg-slate-600 bg-gray-200 rounded w-16"></div>
          <div class="flex items-center space-x-2">
            <div class="flex space-x-1">
              ${'<div class="w-4 h-4 bg-yellow-400 rounded-full"></div>'.repeat(
                5
              )}
            </div>
            <div class="h-4 dark:bg-slate-600 bg-gray-200 rounded w-6"></div>
          </div>
        </div>
        <div class="flex space-x-3 pt-2">
          <div class="flex-1 h-12 dark:bg-slate-600 bg-gray-200 rounded-xl"></div>
          <div class="w-12 h-12 dark:bg-slate-600 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function renderProducts(products: any[]) {
  const container = document.getElementById("product-list");
  if (container) {
    container.innerHTML = products.map(ProductCard).join("");
  }
}

function handleSearch(query: string) {
  const filtered = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  renderProducts(filtered);
}
