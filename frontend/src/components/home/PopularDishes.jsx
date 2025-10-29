import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function CarRentalProcess() {
  const [activeItem, setActiveItem] = useState(0);

  const accordionItems = [
    {
      title: 'Browse And Select',
      content: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'
    },
    {
      title: 'Book And Confirm',
      content: 'Complete your reservation with our secure booking system. Review your selection, add any extras you need, and confirm your dates with instant confirmation.'
    },
    {
      title: 'Book And Enjoy',
      content: 'Pick up your vehicle at your chosen location and hit the road. Our team ensures your car is pristine and ready for your journey.'
    }
  ];

  const toggleAccordion = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className=" w-full px-4 md:px-16 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 w-full max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-primary-600 text-xl">✱</span>
              <h3 className="text-primary-600 font-bold text-base tracking-wide">
                How It Work
              </h3>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Streamlined processes for a hassle-free experience
            </h1>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              Our streamlined process ensures a seamless car rental experience from start to finish. 
              With easy online booking, flexible pick-up and drop-off options.
            </p>

            {/* Accordion */}
            <div className="border-t border-b border-gray-200">
              {accordionItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-lg font-bold text-gray-900">
                      {item.title}
                    </span>
                    {activeItem === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-900 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-900 transition-transform" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeItem === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-5 pl-0 md:pl-9 text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-1 w-full max-w-4xl relative flex justify-center items-center">
            <div className="relative w-full">
              {/* Main Image */}
              <div className="relative rounded-3xl lg:rounded-[50px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1563376043-8ad2936236fa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzJTIwc3RhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1600&h=1080" 
                  alt="Woman in car"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -right-10 md:bottom-8  bg-primary-600 text-white rounded-xl p-5 shadow-2xl max-w-[220px] z-10">
                <p className="text-base font-semibold leading-snug mb-3">
                  5m+ Trusted world wide global clients
                </p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -mr-2">
                    <img 
                      src="https://randomuser.me/api/portraits/women/1.jpg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -mr-2">
                    <img 
                      src="https://randomuser.me/api/portraits/men/2.jpg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden -mr-2">
                    <img 
                      src="https://randomuser.me/api/portraits/women/3.jpg" 
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-primary-600 font-bold text-sm">
                    +
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -right-6 text-primary-600 text-6xl opacity-80 hidden lg:block">
                ✱
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}