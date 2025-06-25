import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';
import f_logo from '../assets/f_logo.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      setEmail('');
    }
  };

  const categoryLinks = [
    { name: 'Hoodies', value: 'hoodie' },
    { name: 'T-Shirts', value: 'tshirt' },
    { name: 'Backpacks', value: 'backpack' },
    { name: 'Shoes', value: 'shoes' },
  ];

  return (
    <section className="px-4">
      {/* Hero */}
      <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={f_logo}
          alt="Hero Background"
          className="absolute w-full h-full object-cover object-center opacity-20 z-0"
        />
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Welcome to <span className="text-zinc-400">ZRØ</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mt-4">
            Discover bold streetwear crafted with passion and individuality. Style that speaks for itself.
          </p>
          <Link
            to="/market"
            className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow transition mt-6"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categoryLinks.map(({ name, value }) => (
            <Link
              key={value}
              to={`/market?category=${value}`}
              className="bg-zinc-800 hover:bg-zinc-700 text-white py-8 rounded-lg transition shadow text-lg font-medium"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-24 space-y-12">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Featured Drops</h2>
        <div className="space-y-8">
          <ProductCard />
        </div>
      </div>

      {/* Slider */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold text-white text-center mb-6">What’s Trending</h2>
        <Slider />
      </div>

      {/* Story */}
      <div className="mt-24 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
        <p className="text-gray-400 text-lg">
          ZRØ was born from the streets — a statement brand that blends raw identity with clean design. Our goal is to empower youth expression with premium streetwear that doesn’t blend in.
        </p>
      </div>

      {/* Lifestyle Grid */}
      <div className="mt-24 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="h-40 bg-zinc-800 rounded-lg shadow-lg flex items-center justify-center text-gray-500 text-sm"
          >
            Coming Soon
          </div>
        ))}
      </div>

      
      <div className="mt-24 bg-zinc-900 py-12 rounded-xl text-center relative">
        <h2 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h2>
        <p className="text-gray-400 mb-6">Be the first to hear about new drops and exclusive offers.</p>
        <form onSubmit={handleSubscribe} className="flex justify-center flex-wrap gap-2 px-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-zinc-800 text-white placeholder-gray-500 border border-zinc-700 w-full sm:w-64"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Subscribe
          </button>
        </form>

        {showPopup && (
          <div className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded shadow-md transition-all">
            Thanks for subscribing!
          </div>
        )}
      </div>
    </section>
  );
}
