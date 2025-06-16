import logo from '../assets/zr.png'

export default function Footer() {
  return (
    <footer className="bg-black-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <img src={logo} alt="Zro Logo" className="h-12 w-auto " />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white">YourBrand</h2>
          <p className="text-sm mt-2">Clothing made with passion.</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-8 text-sm">
          <a href="#" className="hover:text-white transition">Shop</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end space-x-4">
          {/* Replace with actual icons */}
          <a href="#" className="hover:text-white transition">FB</a>
          <a href="#" className="hover:text-white transition">IG</a>
          <a href="#" className="hover:text-white transition">X</a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
