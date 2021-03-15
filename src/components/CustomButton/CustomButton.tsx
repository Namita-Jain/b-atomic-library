import React from 'react'
import styles from './CustomButton.module.scss'

interface ButtonProps {
  classList?: string[]
  id: string
  handleClick?: () => void
  isDisabled?: boolean
}

export const CustomButton: React.FC<ButtonProps> = ({
  classList = [],
  handleClick,
  isDisabled = false,
  id,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={classList.map((c) => styles[c] || c).join(' ')}
      onClick={handleClick}
      disabled={isDisabled}
      id={id}
      {...otherProps}
    >
      {children}
    </button>
  )
}
