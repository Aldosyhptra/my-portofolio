import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = window.scrollY;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrollingDown(currentScrollY > lastScrollY);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
      <nav className={'bg-gradient-to-r from-gray-500 to-gray-900 text-white px-6 py-4 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ' + (isScrollingDown ? 'translate-y-[-100%]' : 'translate-y-0')}>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Hamburger Button - only visible on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu - hidden on mobile */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#project" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-end gap-2 mr-1 justify-end text-lg">
          <li><a onClick={toggleMenu} href="#home">Home</a></li>
          <li><a onClick={toggleMenu} href="#about">About</a></li>
          <li><a onClick={toggleMenu} href="#projects">Projects</a></li>
          <li><a onClick={toggleMenu} href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}


export default Navbar;