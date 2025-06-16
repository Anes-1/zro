// import icon from '../assets/zr_full.png';
import t_shirt2 from '../assets/t_shirt2.png'

export default function ProductCard({ reverse = false, isFeatured = false }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center space-y-6 md:space-y-0 md:space-x-6 md:space-x-reverse `}
    >
      <div className={`w-full ${isFeatured ? 'md:w-[500px]' : 'md:w-80'}`}>
        <img src={t_shirt2} alt="Product" className="rounded-lg shadow-md" />
      </div>

     
      <div
        className={`text-center md:text-center ${
          isFeatured ? 'max-w-md' : 'max-w-sm'
        }`}
      >
        <h3 className="text-2xl font-semibold mb-2">Produkti</h3>
        <p className="text-gray-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
