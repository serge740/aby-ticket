import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function TestimonialsSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const testimonials = [
    {
      id: 1,
      rating: 4,
      text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      name: "Annette Black",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      rating: 3,
      text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      name: "Leslie Alexander",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 3,
      rating: 5,
      text: "Renting a car from nova ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive.",
      name: "Alis White",
      position: "Project Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      rating: 5,
      text: "Excellent service and great value for money. The car was in perfect condition and the booking process was seamless.",
      name: "John Smith",
      position: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 5,
      rating: 4,
      text: "Very professional service. The team was helpful and the vehicle exceeded my expectations. Highly recommended!",
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    }
  ];

  // Create extended array with clones for infinite effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Handle infinite loop
  React.useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      
      // Reset to middle set when reaching clones
      if (currentSlide >= testimonials.length * 2) {
        setCurrentSlide(testimonials.length);
      } else if (currentSlide <= testimonials.length - 1) {
        setCurrentSlide(testimonials.length + testimonials.length - 1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, testimonials.length]);

  // Start from middle set
  React.useEffect(() => {
    setCurrentSlide(testimonials.length);
  }, []);

  const getIndicatorIndex = () => {
    let index = currentSlide % testimonials.length;
    if (index < 0) index = testimonials.length + index;
    return index;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-primary-600 text-primary-600'
            : 'fill-none text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-16 overflow-hidden">
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-primary-600 text-xl">✱</span>
            <span className="text-primary-600 font-semibold text-base tracking-wide">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            What our customers are<br />saying about us
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden p-4 " ref={sliderRef}>
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{
                transform: `translateX(-${(currentSlide * 100) / 3}%)`
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary-100"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 bg-primary-600 text-white hover:bg-primary-700 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(testimonials.length + index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  getIndicatorIndex() === index
                    ? 'w-8 bg-primary-600'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}