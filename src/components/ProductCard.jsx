// import t_shirt2 from '../assets/t_shirt2.png'

// export default function ProductCard({ reverse = false, isFeatured = false }) {
//   return (
//     <div className=''>
//     <div
//       className={`flex flex-col ${
//         reverse ? 'md:flex-row-reverse' : 'md:flex-row'
//       } items-center space-y-6 md:space-y-0 md:space-x-6 md:space-x-reverse`}
//     >
//       <div className={`w-full ${isFeatured ? 'md:w-[500px]' : 'md:w-80'}`}>
//         <img src={t_shirt2} alt="Product" className="rounded-lg shadow-md" />
//       </div>

     
//       <div
//         className={`text-center md:text-center ${
//           isFeatured ? 'max-w-md' : 'max-w-sm'
//         }`}
//       >
//         <h3 className="text-2xl font-semibold mb-2">Produkti</h3>
//         <p className="text-gray-400 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//         </p>
//       </div>
//     </div>
//     </div>
//   );
// }

import t_shirt2 from '../assets/t_shirt2.png'

export default function ProductSection() {
  return (
    <div className="space-y-16 px-12 md:px-36 lg:px-64">
      {/* Product 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        {/* Image */}
        <div className="w-full md:w-80 mt-6 md:mt-0">
          <img src={t_shirt2} alt="Product 1" className="rounded-lg shadow-md" />
        </div>

        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-2">Produkti 1</h3>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
      </div>

      {/* Product 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse">
        {/* Image */}
        <div className="w-full md:w-80 mt-6 md:mt-0">
          <img src={t_shirt2} alt="Product 2" className="rounded-lg shadow-md" />
        </div>
        {/* Text */}
        <div className="text-center md:text-left max-w-md">
          <h3 className="text-2xl font-semibold mb-2">Produkti 2</h3>
          <p className="text-gray-400 text-lg">
            Aliquam eget justo nec arcu ultricies hendrerit. Nulla facilisi. Integer posuere erat a ante venenatis dapibus.
          </p>
        </div>
        
      </div>
    </div>
  );
}

