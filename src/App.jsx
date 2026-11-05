import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Experience from "./components/experience.jsx";
import Achievements from "./components/achievements.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contacts.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;