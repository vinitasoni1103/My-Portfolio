import { FaCode, FaComments, FaEnvelope, FaGithub, FaGraduationCap, FaHome, FaInstagram, FaLinkedin, FaProjectDiagram, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Top bar for mobile */}
      <div className="navbar-top">
        <div className="initials">
          <span className="white">V</span><span className="blue">S</span>
        </div>
        <div className="social-links top-links">
          <a href="https://instagram.com/_vini_sn_tdl_" target="_blank"><FaInstagram /></a>
          <a href="https://linkedin.com/in/vinitasoni1103" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/vinitasoni1103" target="_blank"><FaGithub /></a>
        </div>
      </div>

      {/* Main vertical or bottom nav */}
      <nav className="navbar">
        {/* Only initials in desktop */}
        <div className="initials desktop-only">
          <span className="white">V</span><span className="blue">S</span>
        </div>

        <ul className="nav-links">
          <li><Link to="/"><FaHome /><span>&lt;Home/&gt;</span></Link></li>
          <li><Link to="/about"><FaUserAlt /><span>&lt;About/&gt;</span></Link></li>
          <li><Link to="/skills"><FaCode /><span>&lt;Skills/&gt;</span></Link></li>
          <li><Link to="/projects"><FaProjectDiagram /><span>&lt;Projects/&gt;</span></Link></li>
          <li><Link to="/qualifications"><FaGraduationCap /><span>&lt;Qualifications/&gt;</span></Link></li>
          <li><Link to="/testimonials"><FaComments /><span>&lt;Testimonials/&gt;</span></Link></li>
          <li><Link to="/contact"><FaEnvelope /><span>&lt;Contact/&gt;</span></Link></li>
        </ul>

        <div className="social-links desktop-only">
          <a href="https://instagram.com/_vini_sn_tdl_" target="_blank"><FaInstagram /></a>
          <a href="https://linkedin.com/in/vinitasoni1103" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/vinitasoni1103" target="_blank"><FaGithub /></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

