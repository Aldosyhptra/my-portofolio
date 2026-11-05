import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const LINKS = [
  { id: "home", label: "beranda" },
  { id: "about", label: "tentang" },
  { id: "pengalaman", label: "pengalaman" },
  { id: "project", label: "proyek" },
  { id: "contact", label: "kontak" },
];

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;

      // Bagian aktif = yang terakhir melewati area tepat di bawah navbar
      let current = LINKS[0].id;
      for (const { id } of LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (id) =>
    "relative capitalize inline-block transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 " +
    (active === id
      ? "text-white font-semibold after:w-full"
      : "text-gray-300 hover:text-white after:w-0 hover:after:w-full");

  return (
      <nav className={'backdrop-blur-md bg-black/50 text-white px-6 py-4 fixed w-full top-0 z-50 shadow-md transition-all duration-300 ' + (isScrollingDown ? 'translate-y-[-100%]' : 'translate-y-0')}>
      <div className="flex items-center justify-end">

        {/* Hamburger Button - only visible on small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Tutup menu" : "Buka menu"}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu - hidden on mobile */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "page" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-end gap-2 mr-1 justify-end text-lg">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <a onClick={toggleMenu} href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "page" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
