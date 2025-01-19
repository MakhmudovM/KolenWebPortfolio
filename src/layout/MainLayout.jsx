import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import StarryBackground from '../components/StarryBackground'; // Подключаем компонент с фоном

function MainLayout() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Звездопад на фоне */}
      <StarryBackground />

      {/* Контент страницы */}
      <Navbar />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
