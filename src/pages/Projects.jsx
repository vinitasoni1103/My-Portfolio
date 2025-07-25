import project2Img from '../assets/project/sss.png';
import project1Img from '../assets/skills/js.png';
import '../styles/projects.css';

const projectData = [
  {
    title: 'Swarajya Seva Sansthan',
    description: 'A community-driven website built for a rural development initiative that promotes eco-friendly, handmade products crafted by local artisans and children. The platform highlights their creativity, showcases event activities, and integrates their Instagram presence.| Currently in development – working on integrating all website pages and features.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'],
    image: project2Img,
    live: 'https://swarajyasevasansthan.netlify.app/',
    code: 'https://github.com/vinitasoni1103/SSS-website',
  },
  {
    title: 'Amazon Clone',
    description: 'A full-stack MERN e-commerce app with user auth, cart, admin panel, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: project1Img,
    live: '',
    code: 'https://github.com/vinitasoni1103/AmazonCloneMERN',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Here’s What <span> I've Built...</span></h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">Live Preview</a>
                <a href={project.code} target="_blank" rel="noreferrer">GitHub Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
