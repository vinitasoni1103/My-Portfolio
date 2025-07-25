import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/qualifications" element={<Qualifications />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
