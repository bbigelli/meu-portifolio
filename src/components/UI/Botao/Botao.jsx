import React from 'react';
import styles from './Botao.module.css';

const Botao = ({ 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  disabled = false, 
  children,
  className = ''
}) => {
  const variantClass = styles[variant] || styles.primary;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.botao} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Botao;