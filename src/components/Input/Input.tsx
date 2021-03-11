import React from 'react'

import styles from './Input.module.scss'

export interface InputProps {
  placeholder?: string
}

// TODO: the css is not working
export const Input: React.FC<InputProps> = ({ placeholder }) => (
  <input placeholder={placeholder} className={styles.input} />
)
