import React from 'react';
import styles from './SobreMim.module.css';
import fotoPerfil from '../../assets/images/FotoProfissional.webp';

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
              Desenvolvedor Full Stack com 1 ano de experiência prática na criação de aplicações web completas — do backend ao frontend. Especialista em transformar ideias em soluções digitais funcionais, responsivas e com foco na melhor experiência do usuário.
            </p>
            <p>
              Minha abordagem combina lógica sólida no backend com interfaces intuitivas no frontend, sempre priorizando código limpo, performance e boas práticas de arquitetura. Estou em constante evolução, buscando desafios que me tirem da zona de conforto e me permitam entregar soluções reais com tecnologia.
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