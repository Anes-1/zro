import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <section className="px-4">
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Welcome to <span className="text-zinc-400">ZRØ</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Discover bold streetwear crafted with passion and individuality. Style that speaks for itself.
        </p>
        <Link
          to="/market"
          className="inline-block bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 rounded-full text-sm font-medium shadow transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <div className="mt-20 space-y-12">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Featured Drops</h2>
        <div className="space-y-8">
          <ProductCard />
        </div>
      </div>

      {/* Slider Section */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">What’s Trending</h2>
        <Slider />
      </div>
    </section>
  );
}
