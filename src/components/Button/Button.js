import React from 'react'
import s from './Button.module.css'

const Button = ({ children, type, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={s.root} {...props}>
    {children}
  </button>
)

export default Button
