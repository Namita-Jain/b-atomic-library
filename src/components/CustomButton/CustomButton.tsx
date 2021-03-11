import React from 'react'
import './CustomButton.module.scss'

export interface ButtonProps {
  type: string;
  handleClick?: () => void;
}

export const CustomButton: React.FC<ButtonProps> = ({
  type,
  handleClick,
  children
}) => {
  return (
    <button className={type} onClick={handleClick}>
      {children}
    </button>
  )
}
