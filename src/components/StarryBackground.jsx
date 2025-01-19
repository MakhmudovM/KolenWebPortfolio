import React from 'react';
import './StarryBackground.css';  // Подключаем наш CSS файл

const StarryBackground = () => {
  // Количество звезд
  const starsCount = 100;

  // Функция для генерации случайных звезд
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < starsCount; i++) {
      const randomX = Math.random(); // случайная горизонтальная позиция
      const size = Math.random() * 3 + 1; // случайный размер звезды
      const delay = Math.random() * 3; // случайная задержка для анимации
      const duration = Math.random() * 2 + 2; // случайная длительность падения

      stars.push(
        <div
          key={i}
          className="star"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            '--random-x': randomX,  // Сохраняем значение для random-x
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="starry-background">
      {generateStars()}
    </div>
  );
};

export default StarryBackground;
