import { useState } from 'react';
import he from '../assets/testimonialLog/he.png';
import he1 from '../assets/testimonialLog/he1.png';
import she from '../assets/testimonialLog/she.png';
import '../styles/testimonials.css';
const testimonials = [
  {
    name: 'Aryan Sharma',
    role: 'Fellow Classmate',
    quote: 'Vinita’s ability to break down complex problems and bring structure to chaos truly stood out during our collaboration.',
    short: 'Structured Thinker',
    image: he1,
    linkedin: 'https://www.linkedin.com/in/aryanastic/'
  },
  {
    name: 'Deepesh Verma',
    role: 'Fellow Classmate',
    quote: 'Blends tradition with tech beautifully.',
    short: 'Tech + Tradition',
    image: he,
    linkedin: 'https://www.linkedin.com/in/deepeshverma12/'
  },
  {
    name: 'Shruti Mishra',
    role: 'Fellow Classmate',
    quote: 'She’s intuitive, observant, and always brings a thoughtful perspective. A fast learner who uplifts any team.',
    short: 'Sharp & Insightful',
    image: she,
    linkedin: 'https://www.linkedin.com/in/shrutimishra1102/'
  },
  {
    name: 'J Pranav',
    role: 'Collaborator',
    quote: 'Vinita brings contagious energy and a can-do attitude. It’s a pleasure collaborating with someone so dedicated.',
    short: 'High-Energy Collaborator',
    image: he,
    linkedin: 'https://www.linkedin.com/in/pranav-jandhyala-12b943251/'
  },
  {
    name: 'Gaurav Laguri',
    role: 'Fellow Classmate',
    quote: 'Her discipline, attention to detail, and ability to execute under pressure are commendable. A professional through and through.',
    short: 'Disciplined & Reliable',
    image: he,
    // linkedin: 'https://www.linkedin.com/in/shrutimishra1102/'
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-heading">What Others Say <span> About ME...</span></h2>

      <div className="orbit-container">
        <div className="orbit-ring">
  {testimonials.map((item, index) => (
    <div
      key={index}
      className={`orbit-card ${activeIndex === index ? 'active' : ''}`}
      style={{
        '--i': index,
        '--total': testimonials.length,
      }}
      onClick={() => setActiveIndex(index)}
    >
      {/* Circular Profile Photo */}
      <div className="card-photo">
        <img src={item.image} alt={`testimonial-${index}`} />
      </div>

      {/* Testimonial Text */}
      <p className="card-text">{item.short}</p>
    </div>
  ))}
</div>


        {activeIndex !== null && (
          <div className="expanded-testimonial">
            <h3>
              {testimonials[activeIndex].name}
              {testimonials[activeIndex].linkedin && (
                <a 
                  href={testimonials[activeIndex].linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="linkedin-link"
              >
                ↗ LinkedIn
              </a>
            )}
          </h3>
            <h4>{testimonials[activeIndex].role}</h4>
            <p>{testimonials[activeIndex].quote}</p>
            <button onClick={() => setActiveIndex(null)}>Close</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;