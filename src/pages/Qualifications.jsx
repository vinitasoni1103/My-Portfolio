import '../styles/qualifications.css';

const qualifications = [
  {
    degree: "Master of Computer Applications (MCA)",
    icon: "🎓",
    university: "Guru Ghasidas University",
    location: "Bilaspur, Chhattisgarh",
    year: "2023 - 2025",
    coursework: [ "FullStack Dev", "Machine Learning", "AI", "RDBMS", "E-Commerce"]
  },
  {
    degree: "Bachelor of Science in Computer Science (BSc CS)",
    icon: "🧑‍🎓",
    university: "Dr. C V Raman University",
    location: "Bilaspur, Chhattisgarh",
    year: "2020 - 2023",
    coursework: ["DSA", "Web Development", "Operating Systems", "Computer Networks", "DBMS"]
  }
];

const Qualifications = () => {
  return (
    <section className="qualification-section" id="qualifications">
      <h2 className="section-title">My Academic <span>Journey...</span></h2>

      <div className="timeline">
        {qualifications.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <p><strong>{item.university}</strong></p>
              <p>{item.location}</p>
              <p className="timeline-year">{item.year}</p>
              <div className="coursework">
                {item.coursework.map((cw, j) => (
                  <span className="course-tag" key={j}>{cw}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualifications;