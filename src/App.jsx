import { BrowserRouter as Router, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";

import ProjectIndex from "@/pages/projects/Index";
import Intro from "./components/Intro";
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <NavBar/>
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        
        <Intro/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>

      {/* <Router>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
          <Route path='/projects' element={ <ProjectIndex/>}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router> */}
    </div>
  );
}
