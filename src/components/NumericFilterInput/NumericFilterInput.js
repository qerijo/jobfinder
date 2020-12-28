import React from 'react'
import FilterInput from '../FilterInput/FilterInput'
import s from './NumericFilterInput.module.css'

const NumericFilterInput = ({ name, invalid, message, ...rest }) => {
  const patternMsg = message || 'Вводить можно только цифры'
  return (
    <div className={s.root}>
      {invalid?.message && <span className={s.error_msg}>{invalid?.message}</span>}
      <FilterInput
        className={s.no_spin_button}
        name={name}
        pattern={{ value: /^[0-9]\d*\.?\d*$/, message: patternMsg }}
        {...rest}
      />
    </div>
  )
}

export default NumericFilterInput
