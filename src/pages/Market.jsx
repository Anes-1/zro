import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import hoodie1 from '../assets/t_shirt1.png';
import hoodie2 from '../assets/t_shirt2.png';
import backpack from '../assets/backpack.png';
import tshirt from '../assets/t_shirt.png';
import Navbar from '../components/Navbar';

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
  const [modalOpen, setModalOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [searchParams] = useSearchParams();

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);

  useEffect(() => {
    const catFromURL = searchParams.get('category');
    if (catFromURL && categories.includes(catFromURL)) {
      setFilter(catFromURL);
    }
  }, [searchParams]);

  const shown = products.filter(
    p =>
      (filter === 'all' || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalItems = cart.reduce((n, i) => n + i.quantity, 0);
  const totalPrice = cart.reduce((n, i) => n + i.quantity * i.price, 0);

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

  return (
    <>
      <Navbar 
        showCart={true} 
        totalItems={totalItems} 
        onCartClick={() => {
          setModalOpen(true);
          setCheckout(false);
        }} 
      />

      <section className="relative pt-24 pb-10 px-6 max-w-7xl mx-auto">
        {/* Search and Filters */}
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

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {shown.map(p => (
            <div
              key={p.id}
              onClick={() => {
                setSelectedProduct(p);
                setQuantity(1);
              }}
              className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-transform hover:scale-105 flex flex-col"
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
                onClick={e => {
                  e.stopPropagation();
                  addToCart(p);
                }}
                className="mt-auto bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Product Zoom Modal with Quantity */}
        {selectedProduct && (
          <>
            <div
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 z-30 bg-transparent backdrop-blur-sm"
            />
            <div className="fixed z-40 inset-0 flex items-center justify-center p-4">
              <div className="backdrop-blur-md bg-white/70 max-w-md w-full rounded-xl p-6 relative shadow-2xl">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-black"
                >
                  ×
                </button>
                <div className="aspect-square mb-4">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-center text-gray-700 font-medium mb-4">
                  ${selectedProduct.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button
                    className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold"
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  >−</button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold"
                    onClick={() => setQuantity(q => q + 1)}
                  >+</button>
                </div>
                <button
                  onClick={() => {
                    for (let i = 0; i < quantity; i++) {
                      addToCart(selectedProduct);
                    }
                    setSelectedProduct(null);
                    setQuantity(1);
                  }}
                  className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Add {quantity} to Cart
                </button>
              </div>
            </div>
          </>
        )}

        {/* Cart Modal */}
        {modalOpen && (
          <>
            <div
              onClick={() => { setModalOpen(false); setCheckout(false); }}
              className="fixed inset-0 bg-black/50 z-30"
            />
            <div className="fixed z-40 inset-0 flex items-center justify-center p-4">
              <div className="w-full max-w-2xl bg-black text-white rounded-lg shadow-2xl flex flex-col max-h-[90vh]">
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

                <div className="p-4 overflow-y-auto flex-1 space-y-4">
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

                  {checkout && (
                    <form
                      className="space-y-4"
                      onSubmit={e => {
                        e.preventDefault();
                        setOrderPlaced(true);
                        setCheckout(false);
                        setModalOpen(false);
                        setCart([]); // 👈 Clear cart after successful order
                      }}
                    >
                      <div className="flex gap-2">
                        <input
                          required
                          placeholder="First name"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
                          value={customerFirstName}
                          onChange={e => setCustomerFirstName(e.target.value)}
                        />
                        <input
                          required
                          placeholder="Last name"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
                        />
                      </div>

                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="\d{16}"
                        maxLength={16}
                        required
                        placeholder="Card number (16 digits)"
                        className="w-full px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
                        onInput={(e) => {
                          e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16);
                        }}
                      />

                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          pattern="^(0[1-9]|1[0-2])\/\d{2}$"
                          maxLength={5}
                          required
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
                          onInput={e => {
                            e.target.value = e.target.value
                              .replace(/[^\d]/g, '')
                              .replace(/(\d{2})(\d{1,2})/, '$1/$2')
                              .slice(0, 5);
                          }}
                        />
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="\d{3,4}"
                          maxLength={4}
                          required
                          placeholder="CVV"
                          className="w-1/2 px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4);
                          }}
                        />
                      </div>

                      <textarea
                        required
                        placeholder="Shipping address"
                        className="w-full h-24 resize-none px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none"
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

                {!checkout && (
                  <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span>Total:</span>
                      <span className="font-semibold">${totalPrice.toFixed(2)}</span>
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

        {/* Order Confirmation Modal */}
        {orderPlaced && (
          <>
            <div
              onClick={() => setOrderPlaced(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed z-60 inset-0 flex items-center justify-center p-4">
              <div className="max-w-sm w-full text-center rounded-lg border-2 border-purple-600 bg-white/10 backdrop-blur-md p-6 shadow-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-600">
                  Thank you{customerFirstName ? `, ${customerFirstName}` : ''} for your order!
                </h2>
                <p className="mb-6 text-gray-300">
                  Your purchase was successful. We appreciate your business and hope you enjoy your new items.
                </p>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    setCustomerFirstName('');
                  }}
                  className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
