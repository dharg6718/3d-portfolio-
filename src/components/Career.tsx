import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Tech Startup (Cloud Services) - Remote</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Developed and maintained MERN stack applications, improving overall system performance by 20%. Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time. Collaborated with the data science team to integrate AI models into the backend services. Gained hands-on experience with AWS cloud infrastructure and deployment strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
