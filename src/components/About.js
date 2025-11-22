import React, { useState } from 'react';

const techStack = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 'Advanced' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 'Advanced' },
  { name: 'Javascript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 'Advanced' },
  { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 'Intermediate' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 'Beginner' },
  { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 'Intermediate' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', level: 'Intermediate' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg', level: 'Intermediate' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 'Intermediate' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', level: 'Intermediate' },
  { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', level: 'Intermediate' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', level: 'Advanced' },
];

const tools = [
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 'Advanced' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 'Intermediate' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 'Advanced' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 'Beginner' },
  { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg', level: 'Intermediate' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', level: 'Intermediate' },
];


const About = () => {
  const [activeSkillTab, setActiveSkillTab] = useState('techStack');

  const displaySkills = activeSkillTab === 'techStack' ? techStack : tools;

  return (
    <section className="container-fluid py-5 about-section text-dark text-start">
      <h1 className="display-5 fw-bold mb-1">ABOUT ME</h1>
      <p className="text-uppercase small text-secondary mb-4">My Profile At A Glance</p>
      <div className="bg-white rounded-4 p-5 shadow-lg mb-5">
        <h2 className="mb-4 d-flex align-items-center text-dark">
          Information
          <span className="ms-3 flex-grow-1 border-bottom border-secondary"></span>
        </h2>
        <div className="row align-items-center">
          {/* Avatar + Info */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/images/z6946900614155_02e44d2ebc84aa97cc418a202a321445.jpg"
              alt="Avatar"
              className="img-fluid rounded-circle"
              style={{
                width: 260,
                height: 260,
                objectFit: 'cover',
                border: '4px solid #ccc'
              }}
            />
            {/* Personal Info */}
            <ul className="list-unstyled mt-4 text-start text-dark small mt-5">
              <li className="mb-2">
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Location:</strong> <span className="text-muted">Nha Trang, Vietnam</span>
              </li>
              <li className="mb-2">
                <i class="fa-regular fa-calendar me-2"></i>
                <strong>Date of Birth:</strong> <span className="text-muted">16/10/2005</span>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-graduation-cap me-2"></i>
                <strong>School:</strong> <span className="text-muted">College of IT, HCM City</span>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-paper-plane me-2"></i>
                <strong>Email:</strong> <span className="text-muted">trannguyentruong6@example.com</span>
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-grip me-2"></i>
                <strong>Role:</strong> <span className="text-muted">Final-Year IT Student & Web Developer</span>
              </li>
              <li className="mb-2">
                <i class="fa-solid fa-language me-2"></i>
                <strong>Language:</strong> <span className="text-muted">Vietnamese (native), English (intermediate)</span>
              </li>
            </ul>


          </div>

          {/* Content */}
          <div className="col-md-8 text-dark">
            {/* Introduction */}
            <div className="mb-5">
              <h5 className="fw-bold text-uppercase d-flex align-items-center text-dark">
                Introduction
                <span className="ms-3 flex-grow-1 border-bottom border-secondary"></span>
              </h5>
              <p className="lh-lg text-justify text-muted fs-6" style={{ textIndent: '2em' }}>
                Nice to meet you! My name is Truong, I'm from Nha Trang and currently a final-year student majoring in Information Technology at the College of Information Technology in Ho Chi Minh City. I'm passionate about technology, especially the web.
              </p>
            </div>

            {/* Values & Personality */}
            <div className="mb-5">
              <h5 className="fw-bold text-uppercase d-flex align-items-center text-dark">
                Values & Personality
                <span className="ms-3 flex-grow-1 border-bottom border-secondary"></span>
              </h5>
              <p className="lh-lg text-justify text-muted fs-6" style={{ textIndent: '2em' }}>
                I’m a curious and adaptable person who enjoys solving problems and exploring new technologies. I value simplicity, collaboration, and building useful, user-friendly products. I’m also responsible and open-minded when working with others.
              </p>
            </div>

            {/* Career Goals */}
            <div className="mb-5">
              <h5 className="fw-bold text-uppercase d-flex align-items-center text-dark">
                Career Goals
                <span className="ms-3 flex-grow-1 border-bottom border-secondary"></span>
              </h5>

              <p className="lh-lg text-muted fs-6" style={{ textIndent: '2em' }}>
                <i className="fa-solid fa-minus text-secondary me-2"></i>
                <strong>Short-Term:</strong> I aim to gain real-world experience through internships or entry-level roles where I can apply my web development skills, improve code quality, and learn from experienced teams.
              </p>

              <p className="lh-lg text-muted fs-6" style={{ textIndent: '2em' }}>
                <i className="fa-solid fa-minus text-secondary me-2"></i>
                <strong>Long-Term:</strong> I aspire to become a professional full-stack developer who contributes to impactful digital products, explores modern technologies, and supports others through collaboration and mentorship.
              </p>
            </div>
          </div>


        </div>
      </div>



      <div className="bg-white rounded-4 p-5 ">
        <h2 className="mb-4 d-flex align-items-center text-dark ">
          Skills
          <span className="ms-3 flex-grow-1 border-bottom border-secondary"></span>
        </h2>
        <div className="d-flex mb-4 justify-content-center justify-content-md-start">
          <button
            className={`btn btn-tool-skill me-2 fw-bold rounded-pill ${activeSkillTab === 'techStack' ? 'btn-info text-white' : 'btn-outline-secondary text-dark'}`}
            onClick={() => setActiveSkillTab('techStack')}
          >
            Tech Stack
          </button>
          <button
            className={`btn sbtn-tool-skill rounded-pill fw-bold ${activeSkillTab === 'tools' ? 'btn-info text-white' : 'btn-outline-secondary text-dark'}`}
            onClick={() => setActiveSkillTab('tools')}
          >
            Tools
          </button>
        </div>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 row-cols-lg-8 row-cols-xl-10 g-1">
          {displaySkills.map((skill, index) => (
            <div className="col" key={index}>
              <div className="p-3 border rounded-3 border-secondary skill-card-wrapper" style={{ minHeight: '120px' }}>
                <div className="skill-content-area d-flex flex-column align-items-center justify-content-center w-100">
                  <img src={skill.icon} alt={skill.name} style={{ width: 40, height: 40, marginBottom: '0.3rem' }} />
                  <span className="fw-bold text-dark text-center" style={{ fontSize: '0.8rem' }}>{skill.name}</span>
                </div>
                <div className="skill-level-display fw-bold text-center w-100">
                  {skill.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 