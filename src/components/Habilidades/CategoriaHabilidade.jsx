import React from 'react';
import styles from './Habilidades.module.css';

const CategoriaHabilidade = ({ categoria, itens }) => {
  return (
    <div className={styles.habilidadeCategoria}>
      <h3 className={styles.categoriaTitulo}>{categoria}</h3>
      <div className={styles.habilidadesLista}>
        {itens.map((item, index) => (
          <div key={index} className={styles.habilidadeItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriaHabilidade;