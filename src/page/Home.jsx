import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import '../styles/Home.css'; // Подключаем файл стилей

function Home() {
  return (
    <div className="home-container">
      {/* Верхний текст */}
      <h1 className="home-title">Hi, I'm Kolеn</h1>

      {/* Нижний текст с эффектом печати */}
      <p className="home-subtitle">
        <Typewriter
          words={["I'm a Freelancer", "I'm a Frontend Developer"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>

      {/* Иконки соцсетей */}
      <div className="home-icons">
        <a
          href="https://www.linkedin.com/in/muhammadzoir-mahmudov-a14150335/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MakhmudovM"
          target="_blank"
          rel="noopener noreferrer"
          className="home-icon"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:kolenweb@gmail.com"
          className="home-icon"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://t.me/KOLEN_Z"
          target="_blank"
          className="home-icon"
        >
          <FaTelegram />
        </a>
        
        <a
          href="https://www.instagram.com/kolen_z/"
          target="_blank"
          className="home-icon"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}

export default Home;
