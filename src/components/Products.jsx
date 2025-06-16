import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section className="py-12 px-6 md:px-24">
      <div className="flex flex-col space-y-16">
        {/* Featured card: image first, centered text, larger */}
        <ProductCard isFeatured={true} />

        {/* Second card: text first, standard size */}
        <ProductCard reverse={true} />
      </div>

      {/* Page indicators */}
      <div className="flex justify-center mt-6">
        <div className="w-3 h-3 bg-pink-500 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full mx-1"></div>
      </div>
    </section>
  );
}
