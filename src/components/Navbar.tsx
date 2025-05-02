import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import NavLink from './NavLink';
import Logo from "./../../public/logo-rangga.svg"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="navbar-animation absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-gradient-x bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 h-full w-[200%]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 relative z-10">
          {/* Logo and site name */}
          <div className="flex items-center space-x-2">
            <img className={`w-[38px] h-[38px] md:w-[58px] md:h-[58px] ${scrolled ? '' : 'invert'}`} src={Logo} alt="Logo" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Rangga Satria</span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills & Expertise</NavLink>
            <NavLink href="#work">Featured Work</NavLink>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className={`block h-6 w-6 ${scrolled ? '' : 'invert'}`} aria-hidden="true" />
              ) : (
                <Menu className={`block h-6 w-6 ${scrolled ? '' : 'invert'}`} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm shadow-lg">
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Skills & Expertise
          </a>
          <a 
            href="#work" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            Featured Work
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;