import { BrowserRouter as Router, Routes, Route } from "react-router";

// pages imports
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import PageNotFound from './pages/PageNotFound';
// import ProjectIndex from '@/pages/projects/Index';
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    setIsDark(darkMode);
  }, []);
0
  useEffect(() => {
    console.log("Dark Mode:", isDark);

    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const sections = ["intro", "projects", "contact"];
    const targets = sections.map((section) => document.getElementById(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px",
        scrollMargin: "0px",
      }
    );

    targets.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme =() => setIsDark(currentMode => !currentMode); 

  return (
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='about' element={<About />} />
    //     <Route path='contact' element={<Contact />} />
    //     <Route path='projects' element={<ProjectIndex/>}/>

    //     <Route path='*' element={<PageNotFound />} />
    //   </Routes>
    //   <NavBar />
    // </Router>
    <div className="min-h-screen bg-background text-foreground relative">
      <NavBar activeSection={activeSection} />
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <Intro />
        <Projects />
        <Contact />
        <Footer toggleTheme={toggleTheme} isDark={isDark} />
      </main>

      <div className="fixed bottom-0 left-0 h-24 w-full bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
 