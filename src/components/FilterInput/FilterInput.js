import React from 'react'
import s from './FilterInput.module.css'

const FilterInput = ({ name, register, ...rest }) => <input className={s.root} name={name} ref={register} {...rest} />

export default FilterInput
