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
      <nav className={'backdrop-blur-md bg-black/20 text-white px-6 py-4 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ' + (isScrollingDown ? 'translate-y-[-100%]' : 'translate-y-0')}>
      <div className="flex items-center justify-end">

        {/* Hamburger Button - only visible on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu - hidden on mobile */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><a href="#home" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                home
            </span>
          </a></li>
          <li><a href="#about" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                about
            </span>
          </a></li>
          <li><a href="#projects" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                projects
            </span>
          </a></li>
          <li><a href="#contact" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                contact
            </span>
          </a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-end gap-2 mr-1 justify-end text-lg">
          <li><a onClick={toggleMenu} href="#home" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                home
            </span>
          </a></li>
          <li><a onClick={toggleMenu} href="#about" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                about
            </span>
          </a></li>
          <li><a onClick={toggleMenu} href="#projects" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                projects
            </span>
          </a></li>
          <li><a onClick={toggleMenu} href="#contact" className="text-gray-300 transition-all transition-200 hover:text-white hover:underline ">
            <span className="relative capitalize inline-block text-gray-300 hover:text-white transition-colors duration-200
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white
                hover:after:w-full after:transition-all after:duration-300">
                contact
            </span>
          </a></li>
        </ul>
      )}
    </nav>
  );
}


export default Navbar;