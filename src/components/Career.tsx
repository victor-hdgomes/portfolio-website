import "./styles/Career.css";

const careerItems = [
  {
    role: "Software Engineer & PM",
    company: "Code Crafters Company",
    year: "2021",
    description:
      "Full-stack web and mobile development with React and React Native, leading frontend teams, designing workflows, writing technical documentation and managing the product lifecycle.",
  },
  {
    role: "Full Stack Engineer",
    company: "Frotabank",
    year: "2023",
    description:
      "Owned two React Native apps, the React web frontend and Node.js/C# backends at a fintech whose systems processed over BRL 8 billion in transfers in a single semester. Led the migration from Class to Function Components.",
  },
  {
    role: "Full Stack Engineer",
    company: "PowerComm",
    year: "NOW",
    description:
      "Full-stack development on a global internal communication platform used by Globo, B3, Azul, CNN, Dasa, C&A and Embraer, reaching 600k+ employees in 28+ countries. Migrated Azure Batch workloads to Azure Functions, cutting execution time by ~75%.",
  },
];

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
          {careerItems.map((item) => (
            <div className="career-info-box" key={item.company}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
