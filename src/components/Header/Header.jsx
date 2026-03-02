import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Header.module.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuAberto(false);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logo}>Bruno Bigelli</div>
        
        <div className={styles.headerActions}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button className={styles.menuMobile} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`${styles.navLinks} ${menuAberto ? styles.aberto : ''}`}>
          <li><button onClick={() => scrollToSection('home')}>Início</button></li>
          <li><button onClick={() => scrollToSection('projetos')}>Projetos</button></li>
          <li><button onClick={() => scrollToSection('habilidades')}>Habilidades</button></li>
          <li><button onClick={() => scrollToSection('contato')}>Contato</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;