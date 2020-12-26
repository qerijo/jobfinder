import React from 'react'
import cn from 'classnames'
import s from './FilterInput.module.css'

const FilterInput = ({ className, name, register, required, pattern, maxLength, minLength, ...rest }) => (
  <input
    className={cn(s.root, className)}
    name={name}
    ref={register({
      required,
      pattern,
      maxLength,
      minLength,
    })}
    {...rest}
  />
)

export default FilterInput
