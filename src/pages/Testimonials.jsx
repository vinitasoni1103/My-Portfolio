import { useState } from 'react';
import he from '../assets/testimonialLog/he.png';
import he1 from '../assets/testimonialLog/he1.png';
import she from '../assets/testimonialLog/she.png';
import '../styles/testimonials.css';
const testimonials = [
  {
    name: 'Aryan Sharma',
    role: 'Fellow Classmate',
    quote: 'An outstanding developer with creativity and discipline.',
    short: 'Outstanding Developer',
    image: he1,
  },
  {
    name: 'Deepesh Verma',
    role: 'Fellow Classmate',
    quote: 'Blends tradition with tech beautifully.',
    short: 'Tech + Tradition',
    image: he,
  },
  {
    name: 'Shruti Mishra',
    role: 'Fellow Classmate',
    quote: 'A promising learner with sharp instincts.',
    short: 'Promising Learner',
    image: she,
  },
  {
    name: 'J Pranav',
    role: 'Collaborator',
    quote: 'Her energy and passion inspire everyone around.',
    short: 'Inspiring!',
    image: he,
  },
  {
    name: 'Deepak Rao',
    role: 'Senior',
    quote: 'Balances performance and precision beautifully.',
    short: 'Balanced & Precise',
    image: he,
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
            <h3>{testimonials[activeIndex].name}</h3>
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