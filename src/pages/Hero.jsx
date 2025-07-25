import { useEffect, useState } from "react";
import Tilt from 'react-parallax-tilt';
import htmlIcon from '../assets/images/css.png';
import cssIcon from '../assets/images/html.png';
import jsIcon from '../assets/images/js.png';
import mongodbIcon from '../assets/images/mongodb.png';
import nodeIcon from '../assets/images/node.png';
import reactIcon from '../assets/images/react.png';
import '../styles/hero.css';

const techIcons = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'React', icon: reactIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'MongoDB.js', icon: mongodbIcon },
];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopHeights = [280, 530, 370, 680, 500, 330];
  const mobileHeights = [280, 480, 360, 590, 460, 310];

  return (
    <section className="hero-section">
      {/* Left Section */}
      <div className="hero-left">
        <h1 className={isMobile ? "blur-text" : ""}>
          Hi, I'm <span>Vinita Soni</span>
        </h1>
        <p className={isMobile ? "blur-text" : ""}>
          A MERN Stack Developer | Building full-stack applications
        </p>
        <a href="/projects" className="btn btn-primary">Explore Projects</a>
      </div>

      {/* Right Section */}
      <div className="hero-right">
        {techIcons.map((tech, index) => {
          const lineHeight = isMobile ? mobileHeights[index] : desktopHeights[index];
          return (
            <div
              className="hanger-wrapper"
              key={index}
              style={{ height: `${lineHeight}px` }}
            >
              <p className="tech-label">{tech.name}</p>
              <div className="hanger-line"></div>
              <Tilt
                className="tech-card hanging-card"
                style={{ animationDelay: `${index * 0.2}s` }}
                tiltMaxAngleX={100}
                tiltMaxAngleY={100}
              >
                <img src={tech.icon} alt={tech.name} />
              </Tilt>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;