import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contacts.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;