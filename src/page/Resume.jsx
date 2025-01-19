import React from 'react';
import '../styles/Resume.css';  // Подключаем стили

function Resume() {
  const resumeLink = 'https://drive.google.com/file/d/1m_Hsw8Hrg3gy6_tjTeHoK_0HnQB3autT/view?usp=drive_link';  // Вставьте ссылку на ваш Google Drive файл

  return (
    <div className="resume-container">
      <h2 className="resume-title">My Resume</h2>
      <div className="resume-button-container">
        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-button">
          View Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
