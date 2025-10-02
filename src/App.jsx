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