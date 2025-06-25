
import t_shirt2 from '../assets/t_shirt2.png'

export default function ProductSection() {
  return (
    <div className="space-y-16 px-12 md:px-36 lg:px-64">
      {/* Product 1 */}
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        
        <div className="w-full md:w-80 mt-6 md:mt-0">
          <img src={t_shirt2} alt="Product 1" className="rounded-lg shadow-md" />
        </div>

        
        <div className="text-center md:text-center max-w-md">
          <h3 className="text-2xl font-semibold mb-2 ">Product 1</h3>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
      </div>

      {/* Product 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse">
        
        <div className="w-full md:w-80 mt-6 md:mt-0">
          <img src={t_shirt2} alt="Product 2" className="rounded-lg shadow-md" />
        </div>
        
        <div className="text-center md:text-center max-w-md">
          <h3 className="text-2xl font-semibold mb-2">Product 2</h3>
          <p className="text-gray-400 text-lg">
            Aliquam eget justo nec arcu ultricies hendrerit. Nulla facilisi. Integer posuere erat a ante venenatis dapibus.
          </p>
        </div>
        
      </div>
    </div>
  );
}

