import { useState, useEffect } from 'react';
import hoodie1 from '../assets/t_shirt1.png';
import hoodie2 from '../assets/t_shirt2.png';
import backpack from '../assets/backpack.png';
import tshirt from '../assets/t_shirt.png';
import Navbar from '../components/Navbar'; // Import Navbar

/* ---------------------------------------------------------------- products */
const products = [
  { id: 1,  name: 'Black Hoodie',        category: 'hoodie',   image: hoodie2, price: 49.99 },
  { id: 2,  name: 'Red T‑Shirt',         category: 'tshirt',   image: hoodie1, price: 19.99 },
  { id: 3,  name: 'Backpack X',          category: 'backpack', image: hoodie2, price: 59.99 },
  { id: 4,  name: 'Running Shoes',       category: 'shoes',    image: hoodie1, price: 89.99 },
  { id: 5,  name: 'White Hoodie',        category: 'hoodie',   image: hoodie2, price: 49.99 },
  { id: 6,  name: 'Blue T‑Shirt',        category: 'tshirt',   image: tshirt, price: 19.99 },
  { id: 7,  name: 'Urban Sneakers',      category: 'shoes',    image: hoodie2, price: 69.99 },
  { id: 8,  name: 'Travel Backpack',     category: 'backpack', image: hoodie1, price: 64.99 },
  { id: 9,  name: 'Oversized Hoodie',    category: 'hoodie',   image: hoodie2, price: 54.99 },
  { id: 10, name: 'Minimalist T‑Shirt',  category: 'tshirt',   image: tshirt, price: 17.99 },
  { id: 11, name: 'Performance Sneakers',category: 'shoes',    image: hoodie2, price: 94.99 },
  { id: 12, name: 'Canvas Backpack',     category: 'backpack', image: hoodie1, price: 57.50 },
  { id: 13, name: 'Cropped Hoodie',      category: 'hoodie',   image: hoodie2, price: 42.99 },
  { id: 14, name: 'Graphic Tee',         category: 'tshirt',   image: tshirt, price: 22.00 },
  { id: 15, name: 'Street Sneakers',     category: 'shoes',    image: hoodie1, price: 79.99 },
  { id: 16, name: 'Laptop Backpack',     category: 'backpack', image: backpack, price: 61.99 },
  { id: 17, name: 'Classic Hoodie',      category: 'hoodie',   image: hoodie2, price: 47.99 },
  { id: 18, name: 'V‑Neck T‑Shirt',      category: 'tshirt',   image: tshirt, price: 18.99 },
];

const categories = ['all', 'hoodie', 'tshirt', 'backpack', 'shoes'];

export default function Market() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  /* modal & checkout state */
  const [modalOpen, setModalOpen] = useState(false);
  const [checkout, setCheckout]   = useState(false);

  /* cart (persisted) */
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  /* derived */
  const shown = products.filter(
    p =>
      (filter === 'all' || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalItems = cart.reduce((n, i) => n + i.quantity, 0);
  const totalPrice = cart.reduce((n, i) => n + i.quantity * i.price, 0);

  /* cart helpers */
  const addToCart = product =>
    setCart(prev =>
      prev.some(i => i.id === product.id)
        ? prev.map(i =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...product, quantity: 1 }]
    );

  const removeOne = id =>
    setCart(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );

  /* ---------------------------------------------------------------- JSX */
  return (
    <>
      {/* Pass cart data & handler to Navbar */}
      <Navbar 
        showCart={true} 
        totalItems={totalItems} 
        onCartClick={() => {
          setModalOpen(true);
          setCheckout(false);
        }} 
      />

      {/* Padding top to offset fixed Navbar height */}
      <section className="relative pt-24 pb-10 px-6 max-w-7xl mx-auto">

        {/* search + filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <div className="flex flex-wrap gap-2">
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
                {cat[0].toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {shown.map(p => (
            <div
              key={p.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-transform hover:scale-105 flex flex-col"
            >
              <div className="w-full aspect-square relative mb-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>

              <h3 className="text-sm font-medium text-center">{p.name}</h3>
              <p className="text-center font-semibold mt-1">${p.price.toFixed(2)}</p>

              <button
                onClick={() => addToCart(p)}
                className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* MODAL CART */}
        {modalOpen && (
          <>
            {/* overlay */}
            <div
              onClick={() => { setModalOpen(false); setCheckout(false); }}
              className="fixed inset-0 bg-black/50 z-30"
            />

            {/* modal */}
            <div className="fixed z-40 inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-2xl bg-black text-white rounded-lg shadow-2xl flex flex-col max-h-[90vh]">

                {/* header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                  <h2 className="text-lg font-semibold">
                    {checkout ? 'Checkout' : `Your Cart (${totalItems})`}
                  </h2>
                  <button
                    onClick={() => { setModalOpen(false); setCheckout(false); }}
                    className="text-2xl font-bold leading-none"
                  >
                    ×
                  </button>
                </div>

                {/* content */}
                <div className="p-4 overflow-y-auto flex-1 space-y-4">
                  {/* CART LIST */}
                  {!checkout && (
                    <>
                      {cart.length === 0 ? (
                        <p className="text-center text-gray-400 mt-8">
                          Cart is empty
                        </p>
                      ) : (
                        cart.map(item => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 border-b border-gray-700 pb-3"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-contain bg-white rounded"
                            />
                            <div className="flex-1">
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gray-400">
                                ${item.price.toFixed(2)} × {item.quantity}
                              </p>
                            </div>
                            <button
                              onClick={() => removeOne(item.id)}
                              className="text-red-400 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))
                      )}
                    </>
                  )}

                  {/* CHECKOUT FORM */}
                  {checkout && (
                    <form
                      className="space-y-4"
                      onSubmit={e => {
                        e.preventDefault();
                        alert('Order placed (demo)');
                        setCart([]);
                        setCheckout(false);
                        setModalOpen(false);
                      }}
                    >
                      <div className="flex gap-2">
                        <input
                          required
                          placeholder="First name"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <input
                          required
                          placeholder="Last name"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                      <input
                        type="text"
                        inputMode="numeric"
                        required
                        placeholder="Card number"
                        className="w-full px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                      />
                      <div className="flex gap-2">
                        <input
                          required
                          placeholder="MM/YY"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                        <input
                          required
                          placeholder="CVV"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                      <textarea
                        required
                        placeholder="Shipping address"
                        className="w-full h-24 resize-none px-3 py-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-white text-black py-2 rounded font-semibold hover:opacity-90 transition"
                      >
                        Pay ${totalPrice.toFixed(2)}
                      </button>
                    </form>
                  )}
                </div>

                {/* footer */}
                {!checkout && (
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span>Total:</span>
                      <span className="font-semibold">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={() => setCheckout(true)}
                      disabled={cart.length === 0}
                      className={`w-full py-2 rounded font-semibold ${
                        cart.length
                          ? 'bg-white text-black hover:opacity-90 transition'
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Order&nbsp;Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
