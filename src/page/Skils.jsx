import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiGit, SiVercel, SiNpm, SiVite } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import '../styles/Skills.css';  // Убедитесь, что путь правильный

function Skills() {
  const data = {
    intro: "I love to learn new things and experiment with new technologies. These are some of the major languages, technologies, tools, and platforms I have worked with:",
    skills: [
      {
        title: "Languages & Databases",
        items: [
          { icon: <FaHtml5 />, title: "HTML" },
          { icon: <FaCss3Alt />, title: "CSS" },
          { icon: <FaJsSquare />, title: "JavaScript" },
        ],
      },
      {
        title: "Frameworks & Technologies",
        items: [
          { icon: <FaBootstrap />, title: "Bootstrap" },
          { icon: <FaReact />, title: "React" },
          { icon: <SiTailwindcss />, title: "Tailwind CSS" },
          { icon: <SiVite />, title: "Vite" }, {/* Заменил на SiVite */}
        ],
      },
      {
        title: "Tools & Platforms",
        items: [
          { icon: <SiFirebase />, title: "Firebase" },
          { icon: <SiGit />, title: "Git" },
          { icon: <SiVercel />, title: "Vercel" },
          { icon: <SiNpm />, title: "NPM" },
        ],
      },
      {
        title: "Other:",
        items: [
          { icon: <FaSass />, title: "SASS" },
          { icon: <IoLogoFigma />, title: "UI/UX: Figma" },
        ],
      },
    ],
  };

  return (
    <div className="skills-container">
      <h2 className="skills-intro">{data.intro}</h2>
      <div className="skills-content">
        {data.skills.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-list">
              {category.items.map((item, idx) => (
                <div key={idx} className="skills-item">
                  <div className="skills-icon">{item.icon}</div>
                  <p className="skills-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
