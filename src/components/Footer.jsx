import logo from '../assets/zr.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <img src={logo} alt="Zro Logo" className="h-12 w-auto" />

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white text-center">ZRØ</h2>
          <p className="text-sm mt-2 text-center">Clothing made with passion.</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-8 text-sm">
          <Link to="/market" className="hover:text-white transition">Shop now</Link>
          <Link to="/info" className="hover:text-white transition">Info</Link>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"  className="hover:text-red transition">FB</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">IG</a>
          <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">X</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ZRØ. All rights reserved.
      </div>
    </footer>
  );
}
