import React, { useState } from "react";
import "../styles/Projects.css"; // Путь к стилям

const Projects = () => {
  const projects = [
    {
      title: "Kolen Dev Portfolio",
      description:
        "- Developer Portfolio Website made in React\n - Fully customizable and dynamic, easily change data and images.",
        image: "/image/Projects/portfolio.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/KolenWebPortfolio" },
        { text: "Live", href: "https://kolen-web-portfolio-mmz.vercel.app/" }
      ],
      tags: ["React", "Portfolio", "JavaScript"]
    },
    {
      title: "Sushito restaurant",
      description:
        "- Japanese style restaurant focused on sushi preparation. The project integrates such functions as a database of dishes and food orders, and a telegram bot is also included.",
        image: "/image/Projects/sushito.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/sushito" },
        { text: "Live", href: "https://sushito-mmz.vercel.app/" }
      ],
      tags: ["React", "TypeScript", "API", "Firebase", "Python", "TailWind", ]
    },
    {
      title: "Kolen Kitchen APP",
      description:
        "- This website is built with JavaScript and React, using libraries and a database for storage. It serves as a platform for storing and sharing recipes for various dishes.",
      image: "/image/Projects/kitchen.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/12darsimtihon" },
        { text: "Live", href: "https://my-kitchen-app-3-mmz.vercel.app/" }
      ],
      tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Java Script", "NPM", "API"]
    },
    {
      title: "Audiophile",
      description:
        "- A website for an audio equipment store built with React and Vite, using styling libraries.",
      image: "/image/Projects/audiosale.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/12darsImtihon-7-oy" } ,
        { text: "Live", href: "https://audiophile-store-mmz.vercel.app/" }
        
      ],
      tags: ["React", "vite", "Tailwind CSS", "API" , "Daisy UI", "Firebase"]
    },
    {
      title: "Designo",
      description:
        "- This is a multi-page website for a design school built with pure HTML, CSS, and JavaScript.",
      image: "/image/Projects/designo.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/exam-work" },
        { text: "Live", href: "https://exam-work-mmz.vercel.app/index.html" }
      ],
      tags: ["Java Script", "HTML", "CSS", ]
    },
    {
      title: "Coffeeroasters",
      description:
        "- This is a multi-page website for a coffee shop built with pure HTML, CSS, and JavaScript. It features a stylish and user-friendly design, showcasing the menu, special offers, and location details. The site also includes a contact form and an interactive gallery to enhance the customer experience.",
      image: "/image/Projects/coffeRaster.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/CoffeeRasters-home-work-" },
        { text: "Live", href: "https://coffee-rasters-mmz-home-work.vercel.app/" }
      ],
      tags: ["Java Script", "HTML", "CSS", ]
    },
    {
      title: "Ansor Med",
      description:
        "-A short one-page website for a hospital briefly describing its services and contact information.",
      image: "/image/Projects/AnsorMed.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/Ansor-Med" },
        { text: "Live", href: "https://ansor-med-henna-mmz.vercel.app/" }
      ],
      tags: [ "HTML", "CSS", ]
    },
    {
      title: "Random Gradient web",
      description:
        "- A website for randomly generating beautiful color gradients for various uses, built with JavaScript. The generated gradients dynamically affect the site's style as the background.",
      image: "/image/Projects/gradient.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/linear-gradient" },
        { text: "Live", href: "https://linear-gradient-mmz.vercel.app/" }
      ],
      tags: ["Java Script", "HTML", "CSS", ]
    },
    {
      title: "Weather App",
      description:
        "- A weather app that fetches data from the **OpenWeather API** to show current weather.\n - Designed with **React** and **Material-UI**.",
        image: "/image/Projects/Weather-App.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/MakhmudovM/wather-app" },
        { text: "Live", href: "https://wather-app-mmz.vercel.app/" }
      ],
      tags: ["React", "API", "JavaScript"]
    },
    
  ];

  const [showMore, setShowMore] = useState(false);

  const numberOfItems = showMore ? projects.length : 6;

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.slice(0, numberOfItems).map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              {project.links.map((link, index) => (
                <a key={index} href={link.href} className="project-link" target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {projects.length > 6 && (
        <button className="show-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Projects;
