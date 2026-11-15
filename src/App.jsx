import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Achievements from "./components/achievements.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contacts.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
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