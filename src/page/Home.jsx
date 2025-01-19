import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden', // Запрещаем прокрутку
      }}
    >
      {/* Верхний текст */}
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', margin: 0 }}>Hi, I'm Kolеn</h1>
      
      {/* Нижний текст с эффектом печати */}
      <p style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '20px', marginBottom: 0 }}>
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
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <a
          href="https://www.linkedin.com/in/muhammadzoir-mahmudov-a14150335/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: 'white', fontSize: '2.5rem' }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MakhmudovM"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px', color: 'white', fontSize: '2.5rem' }}
        >
          <FaGithub />
        </a>
        <a
          href="kolenweb@gmail.com"
          style={{ margin: '0 15px', color: 'white', fontSize: '2.5rem' }}
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default Home;
