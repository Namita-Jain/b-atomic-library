import React from 'react'
import styles from './CustomButton.module.scss'

interface ButtonProps {
  classList: string[]
  handleClick?: () => void
}

export const CustomButton: React.FC<ButtonProps> = ({
  classList,
  handleClick,
  children
}) => {
  return (
    <button
      className={classList.map((c) => styles[c]).join(' ')}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
