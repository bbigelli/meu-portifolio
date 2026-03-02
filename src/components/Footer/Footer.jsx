import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <p>© {new Date().getFullYear()} Bruno Bigelli. Todos os direitos reservados.</p>
          <p className={styles.footerCredits}>Desenvolvido com React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;