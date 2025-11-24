import { BrowserRouter as Router, Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
//pages
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import NavigateExample from './pages/examples/NavigateExample';

import BooksIndex from './pages/examples/books/Index';
import BooksShow from './pages/examples/books/Show';
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
    <>
      <Router>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path='/examples/navigate' element={<NavigateExample />} />
          <Route path='/examples/books' element={<BooksIndex />} />
          <Route path='/examples/books/:id' element={<BooksShow />} />
          
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}