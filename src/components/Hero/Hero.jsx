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
          <p className={styles.heroGreeting}>Olá, eu sou</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Bruno Bigelli</span>
          </h1>
          <h2 className={styles.heroSubtitle}>  
            Desenvolvedor Full Stack Python
          </h2>
          <p className={styles.heroDescription}>
            Crio interfaces responsivas e rápidas com projetos reais em produção —
            do briefing ao deploy.
          </p>
          <div className={styles.heroButtons}>
            <button
              onClick={() => scrollToSection('projetos')}
              className={styles.btnPrimary}
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={styles.btnSecondary}
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;