import React from "react";
import '../styles/Education.css';  // Убедитесь, что путь правильный

function Education() {
  const educationData = {
    education: [
      {
        title: "",
        cardTitle: "Computer Engineering and Artificial Intelligence",
        cardSubtitle: "TATUFF",
        cardDetailedText: "CGPA - 4.1/5",
        icon: {
          src: "" // Место для иконки (если необходимо добавить)
        }
      },
      {
        title: "",
        cardTitle: "High School",
        cardSubtitle: "School No.1, Fergana",
        cardDetailedText: "Marks - 95%"
      }
    ]
  };

  return (
    <div className="education-container">
      <h2 className="education-title">Education</h2>
      <div className="education-cards">
        {/* Университетская карточка */}
        <div className="university-card">
          {educationData.education[0] && (
            <div className="education-card">
              <div className="education-card-header">
                {/* Если есть иконка, отобразим ее */}
                {educationData.education[0].icon && educationData.education[0].icon.src && (
                  <img src={educationData.education[0].icon.src} alt="icon" className="education-card-icon" />
                )}
                <h3 className="education-card-title">{educationData.education[0].cardTitle}</h3>
                <h4 className="education-card-subtitle">{educationData.education[0].cardSubtitle}</h4>
              </div>
              <p className="education-card-detail">{educationData.education[0].cardDetailedText}</p>
            </div>
          )}
        </div>

        {/* Линия между картами */}
        <div className="education-line"></div>

        {/* Школьная карточка */}
        <div className="school-card">
          {educationData.education[1] && (
            <div className="education-card">
              <div className="education-card-header">
                {/* Если есть иконка, отобразим ее */}
                {educationData.education[1].icon && educationData.education[1].icon.src && (
                  <img src={educationData.education[1].icon.src} alt="icon" className="education-card-icon" />
                )}
                <h3 className="education-card-title">{educationData.education[1].cardTitle}</h3>
                <h4 className="education-card-subtitle">{educationData.education[1].cardSubtitle}</h4>
              </div>
              <p className="education-card-detail">{educationData.education[1].cardDetailedText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
