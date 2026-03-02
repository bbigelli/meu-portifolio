import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Olá, eu sou <span className={styles.highlight}>Bruno Bigelli</span>
          </h1>
          <h2 className={styles.heroSubtitle}>Desenvolvedor Web Full Stack</h2>
          <p className={styles.heroDescription}>
            Transformando ideias em soluções digitais através de código limpo 
            e experiências incríveis para o usuário.
          </p>
          <div className={styles.heroButtons}>
            <button 
              onClick={() => scrollToSection('contato')} 
              className={styles.btnPrimary}
            >
              Entre em Contato
            </button>
            <button 
              onClick={() => scrollToSection('projetos')} 
              className={styles.btnSecondary}
            >
              Ver Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;