import React, { useState } from "react";
import "../styles/Projects.css"; // Путь к стилям

const Projects = () => {
  const projects = [
    {
      title: "Dev Portfolio",
      description:
        "- Developer Portfolio Website made in React\n - Fully customizable and dynamic, easily change data and images.\n - Dark Mode Support",
      image: "images/projects/portfolio-poster.png",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/dev-portfolio" },
        { text: "Live", href: "https://mayankagarwal.me" }
      ],
      tags: ["React", "Portfolio", "JavaScript"]
    },
    {
      title: "Caaring - Cab Share App",
      description:
        "- A Cab Sharing web app made using **Django** for **VIT** Students. People can create a new cab or request to join an existing cab.\n - Added User authentication and password reset using **SendGrid**.\n - Deployed on **heroku** using **gunicorn**.",
      image: "images/projects/caaring-poster.png",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/Caaring" },
        { text: "Live", href: "http://caaring.herokuapp.com" }
      ],
      tags: ["Python", "Django", "BootStrap", "SendGrid", "Heroku", "Gunicorn", "VIT"]
    },
    {
      title: "Quiet Hours App",
      description:
        "- An Android App that **automatically silences** your phone during class hours, designed for **VITians**.\n - Option to select class **slots** and **custom time**.\n - Option to put on Vibrate instead of Silent.",
      image: "images/projects/quiet-hours-poster.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/QuietHours-Android" }
      ],
      tags: ["Java", "Android", "Alarm Manager", "VIT"]
    },
    {
      title: "Secure Chat App",
      description:
        "- An Android App that allows users to send texts in real time.\n - End to End encryption using **RSA** Algorithm.\n - Uses **Firebase** database to store texts.\n - Secured with **Fingerprint** lock.",
      image: "images/projects/secure-chat-app.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/SecureChatApp" }
      ],
      tags: ["Java", "Android", "Firebase", "RSA"]
    },
    {
      title: "MVVM Sample App",
      description:
        "- An Android App that loads data from mock API and show in both **LinearLayout** and **GridLayout RecyclerView**.\n - Offline support using **Room** DB and **NetworkBoundResource**.\n - Uses the **MVVM** architecture.",
      image: "images/projects/mvvm-sample-app.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/mvvm-sample-app" }
      ],
      tags: ["Kotlin", "Android", "MVVM", "Room", "Coroutines", "Flow", "Hilt-Dagger", "NetworkBoundResource"]
    },
    {
      title: "Feed List App",
      description:
        "- An Android App that loads list of feeds from a **paginated** API and shows in a RecyclerView.\n - Uses the **MVVM** architecture.\n - Uses **Paging 3** library along with other Architecture Components.",
      image: "images/projects/feed-list-app.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/Paginated-App-Feeds-List" }
      ],
      tags: ["Kotlin", "Android", "MVVM", "Paging 3", "Coroutines", "Flow"]
    },
    {
      title: "Task Tracker",
      description:
        "- A simple Task Tracker web app made with **Angular 12**.\n - Uses **mock JSON server** to get, add, delete or update tasks.",
      image: "images/projects/task-tracker.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/task-tracker-app" }
      ],
      tags: ["TypeScript", "Angular 12", "JavaScript"]
    },
    {
      title: "Image Encryption/Decryption",
      description:
        "- A Web App for Image Encryption and Decryption made in **Django**.\n - Uses **SDES** algorithm for encryption/decryption.",
      image: "images/projects/image-encryption.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/img-encrypt-sdes" }
      ],
      tags: ["Python", "Django", "SDES", "Cryptography"]
    },
    {
      title: "Weather App",
      description:
        "- A weather app that fetches data from the **OpenWeather API** to show current weather.\n - Designed with **React** and **Material-UI**.",
      image: "images/projects/weather-app.jpg",
      links: [
        { text: "GitHub", href: "https://github.com/mayankagarwal09/weather-app" }
      ],
      tags: ["React", "API", "JavaScript"]
    }
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
