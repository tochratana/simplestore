// pages/ProductDetail.ts
export function renderProductDetail(id: string): string {
  const containerId = "product-detail-container";

  // Fetch product detail
  fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => res.json())
    .then((product) => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `
          <div class="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <div class="grid md:grid-cols-2 gap-6">
              <img src="${product.images[0]}" class="w-full h-64 object-cover rounded" />
              <div>
                <h2 class="text-2xl font-bold mb-2 dark:text-white">${product.title}</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">$${product.price}</p>
                <p class="text-gray-700 dark:text-gray-400">${product.description}</p>
                <p class="mt-4 text-sm text-gray-500">Category: ${product.category.name}</p>
              </div>
            </div>
          </div>
        `;
      }
    });

  return `<div id="${containerId}" class="p-4">Loading product details...</div>`;
}
