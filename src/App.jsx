import { BrowserRouter as Router, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
//pages
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';

export default function App() {

  return (
    <>
      <Router>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          
          <Route path="/Projects" element={<Projects />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}