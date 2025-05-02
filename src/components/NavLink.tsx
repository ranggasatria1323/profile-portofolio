import React, { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 20);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <a 
      href={href}
      className={`group relative px-2 py-1 font-medium transition-colors duration-300 hover:text-blue-600 ${
        scrolled ? 'text-gray-800' : 'text-white'
      }`}
    >
      <span>{children}</span>
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavLink;