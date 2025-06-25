import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import t_shirt1 from '../assets/t_shirt1.png';
import t_shirt2 from '../assets/t_shirt2.png';
import backpack from '../assets/backpack.png';

export default function Slider() {
  const sliderRef = useRef(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    let animationFrameId;
    const speed = 0.5;

    function step() {
      if (!slider) return;
      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleClick = () => {
    navigate('/market'); 
  };

  const productImages = [t_shirt1, t_shirt2, backpack];

  const getImage = (index) => {
    const image = productImages[index % productImages.length];
    return (
      <img
        src={image}
        alt={`Product ${index + 1}`}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <section className="py-12 w-full">
      <div ref={sliderRef} className="w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap select-none"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex space-x-6 pr-6">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i + loopIdx * 10}
                  className="w-52 h-52 rounded-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={handleClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleClick();
                  }}
                >
                  {getImage(i)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
