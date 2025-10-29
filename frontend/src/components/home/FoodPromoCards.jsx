import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What Do I Need To Rent A Car?',
      answer: 'Explore our diverse selection of high-end vehicles, choose your preferred pickup and return dates, and select a location that best fits your needs.'
    },
    {
      question: 'How Old Do I Need To Be To Rent A Car?',
      answer: 'The minimum age requirement to rent a car is typically 21 years old. However, drivers under 25 may be subject to additional fees. Some luxury or specialty vehicles may require the driver to be 25 or older.'
    },
    {
      question: 'Can I Rent A Car With A Debit Card?',
      answer: 'Yes, we accept debit cards for car rentals. However, additional verification and a deposit may be required. Please ensure your debit card has sufficient funds to cover the rental cost and security deposit.'
    },
    {
      question: 'What Is Your Cancellation Policy?',
      answer: 'You can cancel your reservation up to 24 hours before the pickup time for a full refund. Cancellations made within 24 hours of pickup may be subject to a cancellation fee.'
    },
    {
      question: 'Do You Offer Insurance Coverage?',
      answer: 'Yes, we offer comprehensive insurance coverage options including collision damage waiver, theft protection, and liability insurance. Your personal auto insurance may also provide coverage, so please check with your provider.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 py-16 px-4 md:py-24">
      <div className=" mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Bus Background Image */}
          <div className="relative order-2 lg:order-1 lg:h-[700px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop"
                alt="Luxury bus"
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              {/* Optional Decorative Element */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-8 right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary-600 text-xl">✱</span>
                <span className="text-primary-600 font-bold text-sm md:text-base tracking-wide uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Everything you need to know about our services
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {activeIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-primary-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-900" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}