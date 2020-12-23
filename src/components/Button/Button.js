import React from 'react'
import s from './Button.module.css'

const Button = ({ children, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button className={s.root} {...props}>
    {children}
  </button>
)

export default Button
