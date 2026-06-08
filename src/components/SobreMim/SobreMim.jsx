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
              alt="Bruno Bigelli, desenvolvedor Full Stack"
              className={styles.foto}
            />
          </div>

          <div className={styles.sobreTexto}>
            <p className={styles.sobreParagrafo}>
              Sou desenvolvedor Full Stack com foco em Front-end React,
              construindo interfaces responsivas e projetos reais — do briefing ao deploy.
            </p>
            <p className={styles.sobreParagrafo}>
              Tenho experiência prática com <strong>React, JavaScript, CSS Modules</strong> e
              integrações com APIs externas, sempre com atenção a performance e experiência
              do usuário. Já entrego sites em produção com foco em resultado: agendamentos,
              geração de contatos e presença digital para pequenos negócios.
            </p>
            <p className={styles.sobreParagrafo}>
              Estou em busca de oportunidade como{' '}
              <strong>Desenvolvedor Full Stack, </strong>
              <strong>Desenvolvedor Back-end, </strong>
              <strong>Desenvolvedor Front-end</strong>, onde possa evoluir e
              contribuir com times ágeis.
            </p>

            <div className={styles.infoPessoal}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📍 Localização</span>
                <span>São Paulo, SP — remoto ou híbrido</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>📧 Email</span>
                <a href="mailto:bbigelli@hotmail.com">bbigelli@hotmail.com</a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>🎓 Formação</span>
                <span>Fullstack Python — EBAC</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>💼 Disponibilidade</span>
                <span>Imediata</span>
              </div>
            </div>

            <div className={styles.sobreActions}>
              {}
              <a
                href="/cv-bruno-bigelli.pdf"
                download
                className={styles.btnDownloadCV}
              >
              <span role="img" aria-label="CV">📄</span> Baixar CV
              </a>
              <br></br>
              <span role="img" aria-label="LinkedIn">🔗</span>
              <a
                href="https://www.linkedin.com/in/brunobigelli/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnLinkedIn}
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreMim;