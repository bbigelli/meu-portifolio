import React, { useEffect } from 'react';
import styles from './Projetos.module.css';

const ModalProjeto = ({ projeto, onFechar }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onFechar();
    };
    
    if (projeto) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [projeto, onFechar]);

  if (!projeto) return null;

  return (
    <div className={styles.modal} onClick={onFechar}>
      <div className={styles.modalConteudo} onClick={e => e.stopPropagation()}>
        <button className={styles.modalFechar} onClick={onFechar}>×</button>
        
        <img 
          src={projeto.imagem} 
          alt={projeto.titulo}
          className={styles.modalImagem}
        />
        
        <h3 className={styles.modalTitulo}>{projeto.titulo}</h3>
        <p className={styles.modalData}>{projeto.data}</p>
        
        <p className={styles.modalDescricao}>
          {projeto.descricaoCompleta}
        </p>
        
        <div className={styles.modalTechs}>
          {projeto.tecnologias.map(tech => (
            <span key={tech} className={styles.modalTech}>{tech}</span>
          ))}
        </div>
        
        <div className={styles.modalLinks}>
          <a 
            href={projeto.repo} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.modalLink}
          >
            <button className={styles.btnPrimary}>📁 Ver Código</button>
          </a>
          {projeto.demo && (
            <a 
              href={projeto.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              <button className={styles.btnSecondary}>🚀 Ver Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalProjeto;