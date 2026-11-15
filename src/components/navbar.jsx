import { useState, useEffect } from "react";
import { HiHome, HiUser, HiAcademicCap, HiBriefcase, HiCode, HiMail } from "react-icons/hi";

const LINKS = [
  { id: "home", label: "beranda", icon: HiHome },
  { id: "about", label: "tentang", icon: HiUser },
  { id: "pengalaman", label: "pengalaman", icon: HiBriefcase },
  { id: "pencapaian", label: "pencapaian", icon: HiAcademicCap },
  { id: "project", label: "proyek", icon: HiCode },
  { id: "contact", label: "kontak", icon: HiMail },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      // Kapsul desktop disembunyikan saat scroll turun (setelah lewat 80px), muncul saat naik
      setHidden(y > lastY && y > 80);
      lastY = y;

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

  return (
    <>
      {/* Desktop: kapsul melayang di tengah atas, tersembunyi saat scroll turun */}
      <nav
        aria-label="Navigasi utama"
        className={
          "hidden md:flex fixed top-4 left-1/2 z-50 -translate-x-1/2 items-center gap-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-2 py-1.5 shadow-lg transition-all duration-300 " +
          (hidden ? "opacity-0 -translate-y-[150%]" : "opacity-100 translate-y-0")
        }
      >
        {LINKS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "page" : undefined}
            className={
              "rounded-full px-3.5 py-1.5 text-sm capitalize transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 " +
              (active === id
                ? "bg-white/10 text-white"
                : "text-gray-300 hover:bg-white/5 hover:text-white")
            }
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Mobile: bottom navbar yang selalu terlihat, mudah dijangkau jari */}
      <nav
        aria-label="Navigasi bawah"
        className="md:hidden fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-black/60 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      >
        <ul className="grid grid-cols-5">
          {/* Sengaja 5 item tanpa pencapaian: 6 label mepet di layar 360px; bagian pencapaian tetap dilewati saat scroll */}
          {LINKS.filter(({ id }) => id !== "pencapaian").map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "page" : undefined}
                className={
                  "flex flex-col items-center gap-0.5 py-2.5 text-[10px] capitalize transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/60 " +
                  (active === id ? "text-white" : "text-gray-400")
                }
              >
                <Icon
                  size={20}
                  aria-hidden="true"
                  className={
                    "transition-transform duration-200 " +
                    (active === id ? "scale-110" : "scale-100")
                  }
                />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
