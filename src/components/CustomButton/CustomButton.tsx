import React from 'react'
import styles from './CustomButton.module.scss'

export interface ButtonProps {
  type: string;
  handleClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  type,
  handleClick,
  children
}) => {
  console.log(type, styles[type]);
  return (
    <button className={styles[type]} onClick={handleClick}>
      {children}
    </button>
  )
}
