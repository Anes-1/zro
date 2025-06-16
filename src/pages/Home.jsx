import ProductCard from '../components/ProductCard';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <section className="py-12 px-4">
          <div className="space-y-8">
            <ProductCard /> 
            <ProductCard reverse={true} /> 
          </div>
          <Slider />
    </section>
  );
}
