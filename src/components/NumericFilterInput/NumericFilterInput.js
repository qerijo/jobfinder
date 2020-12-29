import cl from 'classnames'
import FilterInput from '../FilterInput/FilterInput'
import s from './NumericFilterInput.module.css'

const NumericFilterInput = ({ name, invalid, message, className = null, ...rest }) => {
  const patternMsg = message || 'Вводить можно только цифры'
  return (
    <div className={s.root}>
      {invalid?.message && <span className={s.error_msg}>{invalid?.message}</span>}
      <FilterInput
        className={cl(s.no_spin_button, className)}
        name={name}
        pattern={{ value: /^[0-9]\d*\.?\d*$/, message: patternMsg }}
        {...rest}
      />
    </div>
  )
}

export default NumericFilterInput
