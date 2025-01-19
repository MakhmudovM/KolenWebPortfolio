import React from "react";
import "../styles/About.css"; // Подключение стилей из отдельной папки

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        {/* Left Text Section */}
        <div className="about-text">
          <p className="about-description">
            My name is Kolen. I am a beginner programmer and student with great
            enthusiasm and interest in technology. I have experience in 3D
            modeling and programming, as well as proficiency in tools like C++
            and JavaScript. My interests include artificial intelligence, web
            development, and design.
          </p>
          <p className="about-description">
            I am passionate about my work. Because I love what I do, I have a
            constant source of motivation that drives me to give my best
            effort. In my previous job, this passion encouraged me to acquire
            new skills to perform tasks better. For example, I improved my
            skills in 3D graphics and programming tools, which allowed me to
            become a key specialist in my field. I am always open to new
            knowledge and strive to enhance my professional qualities.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="about-image">
          <div className="image-placeholder">
            {/* Место для изображения */}
            <img
              src="/image/profile.jpg" // Замените на путь к вашему изображению
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
