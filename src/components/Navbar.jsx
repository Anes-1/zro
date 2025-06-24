import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/zr.png';

export default function Navbar({ showCart, totalItems = 0, onCartClick }) {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-700 z-10 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-lg font-bold">
          <img src={logo} alt="Zro Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/market" className="hover:text-red-500">Market</Link>

          {/* Show cart if passed */}
          {showCart && (
            <button
              onClick={onCartClick}
              className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              Cart ({totalItems})
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
