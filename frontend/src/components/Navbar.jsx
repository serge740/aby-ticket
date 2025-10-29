import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

export default function NovaRideHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Menu items with paths and dropdown info
  const menuItems = [
    { name: 'Home', to: '/', hasDropdown: false },
    { name: 'About Us', to: '/about-us', hasDropdown: false },
    { name: 'Services', to: '/services', hasDropdown: false },
    { name: 'Blogs', to: '/blogs', hasDropdown: false },
    
    { name: 'Contact Us', to: '/contact-us', hasDropdown: false },
  ];

  // Dropdown submenus (customize as needed)
  const dropdownItems = {
   
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Reusable menu item renderer
  const renderMenuItem = (item, isMobile = false) => {
    const hasDrop = item.hasDropdown && dropdownItems[item.name];
    const dropdown = hasDrop ? dropdownItems[item.name] : [];

    const linkClasses = ({ isActive }) => {
      const base = isMobile
        ? 'flex items-center justify-between w-full text-left font-medium py-3 px-4 rounded-lg transition-colors'
        : 'flex items-center gap-1 font-medium text-base py-2 transition-colors';

      const active = isActive ? 'text-orange-600' : 'text-gray-900';
      const hover = isMobile
        ? 'hover:bg-orange-50 hover:text-orange-600'
        : 'hover:text-orange-600';

      return `${base} ${active} ${hover}`;
    };

    return (
      <div key={item.name} className={isMobile ? '' : 'relative group'}>
        {/* Main NavLink */}
        <NavLink
          to={item.to}
          className={linkClasses}
          onClick={() => hasDrop && toggleDropdown(item.name)}
          end
        >
          {item.name}
          {hasDrop && (
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                activeDropdown === item.name ? 'rotate-180' : ''
              }`}
            />
          )}
        </NavLink>

        {/* Desktop Dropdown */}
        {hasDrop && !isMobile && activeDropdown === item.name && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {dropdown.map((sub) => (
              <NavLink
                key={sub.to}
                to={sub.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {sub.name}
              </NavLink>
            ))}
          </div>
        )}

        {/* Mobile Dropdown */}
        {hasDrop && isMobile && activeDropdown === item.name && (
          <div className="pl-8 py-2 space-y-1">
            {dropdown.map((sub) => (
              <NavLink
                key={sub.to}
                to={sub.to}
                className="block text-sm text-gray-600 hover:text-orange-600 py-2 px-4 hover:bg-orange-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {sub.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <span className="text-3xl font-black tracking-tight">
                <span className="text-orange-600">NOVA</span>
                <span className="text-gray-900">RIDE</span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => renderMenuItem(item))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Book A Rental
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:rotate-45">
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-900 hover:text-orange-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="text-2xl font-black">
                <span className="text-orange-600">NOVA</span>
                <span className="text-gray-900">RIDE</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-6 space-y-1">
              {menuItems.map((item) => renderMenuItem(item, true))}

              {/* Mobile CTA */}
              <div className="pt-6">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book A Rental
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}