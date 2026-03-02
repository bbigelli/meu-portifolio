import React from 'react';
import styles from './Habilidades.module.css';

const BarraProficiencia = ({ nome, nivel }) => {
  return (
    <div className={styles.nivelItem}>
      <span className={styles.nivelNome}>{nome}</span>
      <div className={styles.nivelBarra}>
        <div 
          className={styles.nivelPreenchimento} 
          style={{width: `${nivel}%`}}
        >
          {nivel}%
        </div>
      </div>
    </div>
  );
};

export default BarraProficiencia;