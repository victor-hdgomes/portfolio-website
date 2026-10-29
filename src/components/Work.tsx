import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    name: "PowerComm Platform",
    category: "Enterprise SaaS",
    tools:
      "React, Next.js, TypeScript, C#, .NET, Azure. Internal communication used by 600k+ employees in 28+ countries",
  },
  {
    name: "Azure Functions Migration",
    category: "Cloud & Backend",
    tools:
      "Azure Batch to Azure Functions, C#, .NET. ~75% shorter execution time on critical workloads",
  },
  {
    name: "Frotabank Mobile Apps",
    category: "Fintech · Mobile",
    tools:
      "React Native, TypeScript. Two apps migrated from Class to Function Components",
  },
  {
    name: "Frotabank Web & APIs",
    category: "Fintech · Full Stack",
    tools:
      "React, Node.js, C#. Systems that processed BRL 8B+ in transfers in a semester",
  },
  {
    name: "MongoDB User Group Brasília",
    category: "Community",
    tools:
      "MongoDB. Leading MUG Brasília: organizing events with 200+ attendees and giving talks",
  },
];

const Work = () => {
  useGSAP(() => {
    // Horizontal distance the cards need to travel; recalculated on every
    // ScrollTrigger refresh (resize, lazy sections mounting, fonts loading).
    function getTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      return Math.max(
        0,
        rect.width * box.length - (rectLeft + parentWidth) + padding
      );
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
