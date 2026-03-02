import React from 'react';
import styles from './SobreMim.module.css';
import fotoPerfil from '../../assets/images/profile-photo.jpg';

const SobreMim = () => {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Sobre Mim</h2>
        <div className={styles.sobreContent}>
          <div className={styles.fotoContainer}>
            <img 
  src={fotoPerfil} 
  alt="Bruno Bigelli" 
  className={styles.foto}
/>
          </div>
          <div className={styles.sobreTexto}>
            <p>
              Sou um desenvolvedor web com 1 ano de experiência, apaixonado por criar 
              soluções inovadoras e experiências digitais incríveis. Minha jornada na 
              tecnologia começou com curiosidade e se transformou em uma carreira 
              dedicada ao desenvolvimento de aplicações web modernas e eficientes.
            </p>
            <p>
              Minha filosofia é escrever código limpo, testável e de fácil manutenção, 
              sempre seguindo as melhores práticas de desenvolvimento. Estou constantemente 
              aprendendo novas tecnologias e buscando desafios que me permitam crescer 
              profissionalmente.
            </p>
            
            <div className={styles.infoPessoal}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📍 Localização:</span>
                <span>São Paulo, SP</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📧 Email:</span>
                <span>bbigelli@hotmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>🎓 Formação:</span>
                <span>Fullstack Python na EBAC</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>💼 Experiência:</span>
                <span>1+ ano</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMim;