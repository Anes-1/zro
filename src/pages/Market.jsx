import { useState } from 'react';

// Sample data — replace with your own products or props
const products = [
  { id: 1, name: 'Black Hoodie', category: 'hoodie' },
  { id: 2, name: 'Red T-Shirt', category: 'tshirt' },
  { id: 3, name: 'Backpack X', category: 'backpack' },
  { id: 4, name: 'Running Shoes', category: 'shoes' },
  { id: 5, name: 'White Hoodie', category: 'hoodie' },
  { id: 6, name: 'Blue T-Shirt', category: 'tshirt' },
];

const categories = ['all', 'hoodie', 'tshirt', 'backpack', 'shoes'];

export default function Market() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchCategory = filter === 'all' || product.category === filter;
    const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border text-sm ${
                filter === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            {/* Replace with actual image later */}
            <div className="w-full h-40 bg-gray-200 rounded mb-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">[Image]</span>
            </div>
            <h3 className="text-sm font-medium text-center">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
