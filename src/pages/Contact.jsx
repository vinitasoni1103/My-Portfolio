import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'Viniyo_EmailJs',      
        'template_ibiyogd',     
        formRef.current,
        'lLIX3KbC3XONH60WH'       
      )
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      {/* Main Heading */}
      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build Something <span>Unusual</span> Together...
      </motion.h2>

      {/* Easter Eggs */}
      <div className="easter-eggs">
        <div className="egg" title="Idea Unlocked 💡">💡</div>
        <div className="egg" title="Mysterious Click ✨">🕳️</div>
        <div className="egg" title="Cosmic Ping 🪐">🪐</div>
      </div>

      {/* Contact Form */}
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <span className="icon">👤</span>
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="input-group">
          <span className="icon">📧</span>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <span className="icon">💬</span>
          <textarea rows="5" name="message" placeholder="Your Message..." required></textarea>
        </div>

        <button type="submit">Deploy the Message 🚀</button>
      </form>

      <AnimatePresence>
  {isSent && (
    <motion.div
      className="toast-success"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
    >
      <span>🚀 Message deployed successfully!</span>
    </motion.div>
  )}
</AnimatePresence>


      <p className="contact-quote">“Great ideas begin with a curious hello.”</p>
    </section>
  );
};

export default Contact;
