// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import '../styles/skill.css';


// const skillsData = {
//   frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
//   backend: ['Node.js', 'Express', 'Python'],
//   database: ['MongoDB', 'Firebase', 'MySQL'],
// };

// const Skills = () => {
//   const [openCategory, setOpenCategory] = useState(null);

//   const handleToggle = (category) => {
//     setOpenCategory(openCategory === category ? null : category);
//   };

//   return (
//     <section className="skills-section" id="skills">
//       <h2 className="skills-heading">My Technical Arsenal</h2>

//       <div className="skills-container">
//         {Object.entries(skillsData).map(([category, skills], index) => (
//           <div key={index} className="skills-box">
//             <div
//               className="skills-title"
//               onClick={() => handleToggle(category)}
//             >
//               {category.toUpperCase()}
//             </div>

//             {openCategory === category && (
//               <motion.div
//                 className="skills-list"
//                 initial={{ opacity: 0, scale: 0.7, y: 30 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {skills.map((skill, idx) => (
//                   <motion.div
//                     key={idx}
//                     className="skill-item"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {skill}
//                   </motion.div>
//                 ))}
//               </motion.div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

// 2nd Design
// import { useEffect, useState } from 'react';
// import '../styles/skill.css';

// const SkillTreeCard = ({ rootTitle, skills }) => (
//   <div className="skill-tree-card">
//     <div className="tree-root-wrapper">
//       <div className="tree-root">{rootTitle}</div>
//       <div className="vertical-line-root" />
//     </div>
//     <div className="horizontal-line" />
//     <div className="branches">
//       {skills.map((skill, index) => (
//         <div className="connector-wrapper" key={index}>
//           <div className="connector-line" />
//           <div className="skill-box">{skill}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const SkillGridCard = ({ rootTitle, skills, isOpen, toggleSection }) => (
//   <div className="grid-card">
//     <div className="grid-title" onClick={toggleSection}>
//       {rootTitle}
//       <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
//     </div>
//     {isOpen && (
//       <div className="grid-skills">
//         {skills.map((skill, index) => (
//           <div className="skill-box" key={index}>{skill}</div>
//         ))}
//       </div>
//     )}
//   </div>
// );


// const Skills = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [openSections, setOpenSections] = useState({});

//   const skillData = [
//     { title: 'Programming Languages', skills: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python'] },
//     { title: 'Frameworks & Libraries', skills: ['React', 'React Native', 'Electron', 'Bootstrap'] },
//     { title: 'Backend Technologies', skills: ['Node.js', 'Express.js'] },
//     { title: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
//     { title: 'Tools & Platforms', skills: ['VS Code', 'Git', 'GitHub', 'Heroku', 'Netlify'] }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleSection = (title) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [title]: !prev[title]
//     }));
//   };

//   return (
//     <section className="skills-section" id="skills">
//       <h2 className="skills-heading">My Tech Roots</h2>
//       <div className={`skills-container ${isMobile ? 'grid-view' : 'tree-view'}`}>
//         {skillData.map((data, index) =>
//           isMobile ? (
//             <SkillGridCard
//               key={index}
//               rootTitle={data.title}
//               skills={data.skills}
//               isOpen={!!openSections[data.title]}
//               toggleSection={() => toggleSection(data.title)}
//             />
//           ) : (
//             <SkillTreeCard key={index} rootTitle={data.title} skills={data.skills} />
//           )
//         )}
//       </div>
//     </section>
//   );
// };


// export default Skills;


// 3rd Design
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/skill.css';

// logo imports
import bootstrap from '../assets/skills/bootstrap.png';
import css from '../assets/skills/css.png';
import electron from '../assets/skills/electron1.png';
import express from '../assets/skills/express.png';
import firebase from '../assets/skills/firebase.png';
import git from '../assets/skills/git.png';
import github from '../assets/skills/github.png';
import heroku from '../assets/skills/heroku.png';
import html from '../assets/skills/html.png';
import js from '../assets/skills/js.png';
import mongo from '../assets/skills/mongo.png';
import mysql from '../assets/skills/mysql.png';
import netlify from '../assets/skills/netlify.png';
import node from '../assets/skills/node.png';
import postgres from '../assets/skills/postgresql.png';
import python from '../assets/skills/python.png';
import react from '../assets/skills/react.png';
import rn from '../assets/skills/reactnative.png';
import sql from '../assets/skills/sql.png';
import vscode from '../assets/skills/vscode.png';

const FloatingLogoBall = ({ logo, name }) => {
  return (
    <motion.div
      className="floating-ball"
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ duration: 0.3 }}
    >
      <img src={logo} alt={name} className="logo-img" />
      <span className="skill-label">{name}</span>
    </motion.div>
  );
};
const skillData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', logo: js },
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'SQL', logo: sql },
      { name: 'Python', logo: python }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', logo: react },
      { name: 'React Native', logo: rn },
      { name: 'Electron', logo: electron },
      { name: 'Bootstrap', logo: bootstrap }
    ]
  },
  {
    title: 'Backend Technologies',
    skills: [
      { name: 'Node.js', logo: node },
      { name: 'Express.js', logo: express }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: mongo },
      { name: 'MySQL', logo: mysql },
      { name: 'PostgreSQL', logo: postgres },
      { name: 'Firebase', logo: firebase }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', logo: vscode },
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'Heroku', logo: heroku },
      { name: 'Netlify', logo: netlify }
    ]
  }
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">My Tech Roots</h2>
      <div className={`skills-container ${isMobile ? 'grid-view' : 'tree-view'}`}>
        {skillData.map((data, index) =>
          isMobile ? (
            <div className="grid-card" key={index}>
              <div className="grid-title" onClick={() => toggleSection(data.title)}>
                {data.title}
                <span className={`arrow ${openSections[data.title] ? 'open' : ''}`}>▼</span>
              </div>
              {openSections[data.title] && (
                <div className="grid-skills">
                  {data.skills.map((skill, i) => (
                    <div className="skill-box logo-skill-box" key={i}>
                      <span>{skill.name}</span>
                      <img src={skill.logo} alt={skill.name} className="skill-logo" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="skill-tree-card" key={index}>
              <div className="tree-root-wrapper">
                <div className="tree-root">{data.title}</div>
                <div className="vertical-line-root" />
              </div>
              <div className="horizontal-line" />
              <div className="branches">
                {data.skills.map((skill, i) => (
                  <div className="connector-wrapper" key={i}>
                    <div className="connector-line" />
                    <FloatingLogoBall logo={skill.logo} name={skill.name} />
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;