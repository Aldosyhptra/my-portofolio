import { useEffect } from "react";
import { useLenis } from "lenis/react";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Achievements from "./components/achievements.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contacts.jsx";
import Navbar from "./components/navbar.jsx";

// Jarak aman dari kapsul navbar desktop (top-4 + tinggi ~44px).
const NAV_OFFSET_DESKTOP = -72;

// Semua link "#..." dalam halaman digulir lewat Lenis (offset navbar), bukan lompatan native.
function useAnchorScroll() {
  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;
    const onClick = (e) => {
      const link = e.target instanceof Element ? e.target.closest('a[href^="#"]') : null;
      const id = link?.getAttribute("href");
      const target = id && id.length > 1 ? document.querySelector(id) : null;
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, {
        offset: window.matchMedia("(min-width: 768px)").matches ? NAV_OFFSET_DESKTOP : 0,
      });
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);
}

function App() {
  useAnchorScroll();
  return (
    <div className="w-full pb-[calc(4rem_+_env(safe-area-inset-bottom))] md:pb-0">
      <Navbar />
      <main>
      <Home />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      </main>
    </div>
  );
}

export default App;