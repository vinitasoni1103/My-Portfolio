// import { motion } from 'framer-motion';
// import '../styles/about.css';

// import d1 from '../assets/about/logo1.png';
// import d10 from '../assets/about/logo10.png';
// import l1 from '../assets/about/logo11.png';
// import l2 from '../assets/about/logo12.png';
// import l3 from '../assets/about/logo13.png';
// import l4 from '../assets/about/logo14.png';
// import l5 from '../assets/about/logo15.png';
// import l6 from '../assets/about/logo16.png';
// import l7 from '../assets/about/logo17.png';
// import d2 from '../assets/about/logo2.png';
// import d3 from '../assets/about/logo3.png';
// import d4 from '../assets/about/logo4.png';
// import d5 from '../assets/about/logo5.png';
// import d6 from '../assets/about/logo6.png';
// import d7 from '../assets/about/logo7.png';
// import d8 from '../assets/about/logo8.png';
// import d9 from '../assets/about/logo9.png';
// import formalPhoto from '../assets/images/formal.png';
// import informalPhoto from '../assets/images/informal.png';


// const humanIntroLines = [
//   "Hey there, curious mind! 👋",
//   "I’m not just a developer — I’m a storyteller in motion.",
//   "While I code logic and build apps by day...",
//   "...I express rhythm and emotion through Kathak by heart.",
//   "My brain loves problem-solving.",
//   "My soul lives in 8-beat cycles, footwork, and grace.",
//   "From debugging bugs to spinning pirouettes — it's all part of me.",
//   "This is the other side of my journey — the expressive, emotional, artistic one."
// ];
// const images = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];
// const humanLogos = [l1, l2, l3, l4, l5, l6, l7];

// const About = () => {
//   // const floatingWords = [
//   //   "Kathak", "Guitar", "Expression", "Rhythm", "Grace",
//   //   "Developer", "Creativity", "Soul"
//   // ];
//   return (
//     <>
//   <section className="about-container">
//     <h2 className="about-heading">Let me tell you about <span>DEV ME...</span></h2>
//     <div className="about-content">
//       {/* Left Carousel Section */}
//       <div className="left-about-section">
//         <div className="carousel-wrapper">
//           <div className="carousel">
//             {images.map((src, index) => (
//               <div className="carousel-item" style={{ '--position': index + 1 }} key={index}>
//                 <img src={src} alt={`item-${index}`} />
//               </div>
//             ))}
//           </div>
//           <div className="center-image">
//             <img src={formalPhoto} alt="my-photo" />
//           </div>
//         </div>
//       </div>

//       {/* Right Intro Section */}
//       <div className="right-about-section">
//         <p>
//           Hi, I'm a MERN stack developer with a passion for creating immersive UIs and
//           solving real-world problems through full-stack web solutions. I also enjoy classical dance and blend creativity with code!
//         </p>
//         <div className="about-buttons">
//           <button className="btn-primary">&lt; Let's Talk /&gt;</button>
//           <button className="btn-outline">&lt; Download CV /&gt;</button>
//         </div>
//       </div>
//     </div>

//     {/* Transition Section */}
//       <a href="#humanMe" className="scroll-invite">
//         &lt; Meet Other Me /&gt;
//       </a>
//   </section>

//   {/* Human Me Section */}
//   <section className="human-section" id='humanMe'>
//       <h2 className="human-heading">Now, Let me tell you about <span>Other Me</span>...</h2>

//       <div className="human-content">
//         {/* Text Section */}
//         <div className="human-text">
//           <div className="human-text-section">
//             {humanIntroLines.map((line, index) => (
//       <motion.p
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ delay: index * 0.2 }}
//         className="human-line"
//       >
//         {line}
//       </motion.p>
//       ))}
//     </div>
//         </div>

//         {/* Polaroid Image */}
//         <motion.div
//           className="polaroid"
//           whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img src={informalPhoto} alt="human-me" />
//           <span className="caption">Kathak is my canvas 🩰</span>
//         </motion.div>
//       </div>
//     </section>
// </>
//   );
// };

// export default About;

import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react';
import myImage2 from '../assets/images/informal.png';
import myImage from '../assets/images/profile.png';
import '../styles/about.css';


const RotatingText = ({ texts = [], rotationInterval = 2000 }) => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts, rotationInterval]);

  return (
    <motion.span className="text-rotate">
      <span className="text-rotate-sr-only">{texts[current]}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[current]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="text-rotate-element"
        >
          {texts[current]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

const About = () => {
  const scrollRef = useRef(null);

  const scrollCards = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.9;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="about-scroll-section">
      <h2 className="about-title">
        Let me tell you <span>About ME...</span>
      </h2>

      {/* Slider Container with Buttons */}
      <div className="slider-container">
        <button className="slider-btn left" onClick={() => scrollCards('left')}>&#8249;</button>

        {/* Card Wrapper for scroll in mobile */}
        <div className="cards-wrapper" ref={scrollRef}>
          {/* First Card */}
          <div className="flip-horizontal-card" style={{ borderColor: "#00ffff" }}>
            <div className="flip-card-inner-horizontal">
              {/* Front */}
              <div className="flip-card-front-horizontal">
                <div className="front-content">
                  <img src={myImage} alt="My Image" />
                  <div className="front-text">
                    <span className="static-part">Creative</span>
                    <RotatingText texts={["Thinking!", "Coding!", "Concepts!", "Tools!"]} />
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back-horizontal">
                <h4>“I craft interfaces with passion.”</h4>
                <p>
                  I'm a passionate full-stack developer with a curious mind for how things work and a drive to build impactful digital experiences. With a strong foundation in both frontend and backend technologies, I enjoy blending clean code with thoughtful design. I'm always exploring new tech, improving my skills, and looking for creative ways to bring ideas to life through code.
                </p>
                <div className="about-buttons">
                  <a href="/contact" className="btn btn-primary">Let’s Talk</a>
                  <a href="/assets/files/MY_RESUME.pdf" className="btn btn-outline" download>Here's my CV</a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="flip-horizontal-card" style={{ borderColor: "#f88080" }}>
            <div className="flip-card-inner-horizontal">
              {/* Front */}
              <div className="flip-card-front-horizontal">
                <div className="front-content">
                  <img src={myImage2} alt="My Image 2" />
                  <div className="front-text">
                    <span className="static-part">Creative</span>
                    <RotatingText texts={["Components!", "Ideas!", "Concepts!", "Tools!"]} />
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="flip-card-back-horizontal">
                <h4>“Movement is my second language.”</h4>
                <p>
                  Through Kathak and artistic expression, I stay grounded, inspired, and emotionally connected to the world around me.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="slider-btn right" onClick={() => scrollCards('right')}>&#8250;</button>
      </div>
    </section>
  );
};

export default About;