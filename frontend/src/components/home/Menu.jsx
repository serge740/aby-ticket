import React from 'react';

export default function AbyTicketLocations() {
  const easternProvince = [
    {
      name: "Rwamagana",
      description: "Gateway to Eastern Province with modern facilities",
      price: "3,500",
    },
    {
      name: "Kayonza",
      description: "Strategic transit hub on major routes",
      price: "4,200",
      oldPrice: "5,000",
    },
    {
      name: "Kirehe",
      description: "Peaceful town with regular service",
      price: "5,500",
      recommended: true,
    },
    {
      name: "Ngoma",
      description: "Historic district with daily departures",
      price: "5,800",
    },
    {
      name: "Bugesera",
      description: "Near airport with convenient schedules",
      price: "3,000",
    },
  ];

  const westernProvince = [
    {
      name: "Rubavu (Gisenyi)",
      description: "Beautiful lakeside destination on Lake Kivu",
      price: "6,500",
      oldPrice: "7,500",
    },
    {
      name: "Rusizi (Cyangugu)",
      description: "Southern Lake Kivu with stunning views",
      price: "7,200",
      recommended: true,
    },
    {
      name: "Karongi (Kibuye)",
      description: "Scenic route along Lake Kivu shores",
      price: "5,800",
    },
    {
      name: "Nyamasheke",
      description: "Tea plantations and mountain scenery",
      price: "6,800",
    },
    {
      name: "Rutsiro",
      description: "Agricultural heartland with daily service",
      price: "4,500",
    },
  ];

  const southernProvince = [
    {
      name: "Huye (Butare)",
      description: "University town and cultural center",
      price: "4,800",
      recommended: true,
    },
    {
      name: "Muhanga (Gitarama)",
      description: "Central location with frequent departures",
      price: "3,200",
    },
    {
      name: "Nyanza",
      description: "Royal palace and historical sites",
      price: "4,000",
    },
    {
      name: "Nyamagabe",
      description: "Gateway to Nyungwe Forest",
      price: "5,500",
      oldPrice: "6,200",
    },
    {
      name: "Ruhango",
      description: "Growing town with modern transport",
      price: "3,800",
    },
  ];

  const northernProvince = [
    {
      name: "Musanze (Ruhengeri)",
      description: "Gateway to Volcanoes National Park",
      price: "5,200",
      recommended: true,
    },
    {
      name: "Gicumbi",
      description: "Northern district with regular service",
      price: "4,500",
    },
    {
      name: "Rulindo",
      description: "Agricultural region with daily routes",
      price: "3,500",
    },
    {
      name: "Burera",
      description: "Beautiful lakes and mountain views",
      price: "6,000",
    },
    {
      name: "Gakenke",
      description: "Northern highlands destination",
      price: "5,500",
    },
  ];

  return (
    <div id='our-locations' className="w-full min-h-screen bg-black">
      {/* Locations Section */}
      <div className="relative bg-black text-white overflow-hidden">
        {/* Background Image - Rwanda's 1000 Hills */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1650370619926-7158b8d33af0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1980&h=1080)`,
          }}
        />

        {/* Dark Overlay - makes image darker but still visible */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }} />

        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-4">
          <p className="text-sm italic text-emerald-400 mb-2 tracking-wider">Travel Destinations</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">We Serve Across Rwanda</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Connecting you to every corner of the Land of a Thousand Hills
          </p>
        </div>

        {/* Locations Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-16">
          {/* Eastern Province */}
          <div className="bg-opacity-40 rounded-3xl px-8 md:px-12 py-12 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="text-sm italic text-emerald-400 mb-2 tracking-wider">Popular Routes</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Eastern Province</h2>

            <div className="space-y-8">
              {easternProvince.map((item, index) => (
                <LocationItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  recommended={item.recommended}
                />
              ))}
            </div>
          </div>

          {/* Western Province */}
          <div className="bg-opacity-40 rounded-3xl px-8 md:px-12 py-12 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="text-sm italic text-emerald-400 mb-2 tracking-wider">Lake Kivu Routes</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Western Province</h2>

            <div className="space-y-8">
              {westernProvince.map((item, index) => (
                <LocationItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  recommended={item.recommended}
                />
              ))}
            </div>
          </div>

          {/* Southern Province */}
          <div className="bg-opacity-40 rounded-3xl px-8 md:px-12 py-12 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="text-sm italic text-emerald-400 mb-2 tracking-wider">Cultural Routes</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Southern Province</h2>

            <div className="space-y-8">
              {southernProvince.map((item, index) => (
                <LocationItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  recommended={item.recommended}
                />
              ))}
            </div>
          </div>

          {/* Northern Province */}
          <div className="bg-opacity-40 rounded-3xl px-8 md:px-12 py-12 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="text-sm italic text-emerald-400 mb-2 tracking-wider">Mountain Routes</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Northern Province</h2>

            <div className="space-y-8">
              {northernProvince.map((item, index) => (
                <LocationItem
                  key={index}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  recommended={item.recommended}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Routes Button */}
        <div className="relative z-10 text-center pb-16">
          <button className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Routes & Schedules
          </button>
        </div>
      </div>
    </div>
  );
}

function LocationItem({ name, description, price, oldPrice, recommended }) {
  return (
    <div className="border-b border-gray-700 pb-6 hover:border-emerald-500/50 transition-colors duration-300">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-xl font-semibold">{name}</h3>
          {recommended && (
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              Popular
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm">RWF {oldPrice}</span>
          )}
          <span className="text-emerald-400 font-semibold text-lg">RWF {price}</span>
        </div>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}