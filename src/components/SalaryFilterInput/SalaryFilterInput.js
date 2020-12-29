import NumericFilterInput from '../NumericFilterInput/NumericFilterInput'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

import { currencySelectOptions, defaultCurrency, currencyValues } from './constants'
import s from './SalaryFilterInput.module.css'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '100%',
    minWidth: '80px',
    '&:hover': { borderColor: 'gray' },
    boxShadow: 'none',
    borderColor: '#ccc',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    fontSize: '15px;',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#4b4b4b',
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#4b4b4b',
    fontSize: '15px;',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '17px',
  }),
  indicatorSeparator: (styles) => ({ display: 'none' }),
}

const SalaryFilterInput = ({ register, control }) => {
  return (
    <div className={s.root}>
      <Controller
        name="salary"
        control={control}
        render={({ value, name }, { invalid }) => (
          <NumericFilterInput
            className={s.numeric_filter}
            placeholder="Уровень дохода"
            autoComplete="off"
            invalid={invalid}
            value={value}
            name={name}
            register={register}
          />
        )}
      />
      <Controller
        name="currency"
        control={control}
        render={({ name, onChange }) => (
          <Select
            options={currencySelectOptions}
            name={name}
            onChange={({ value }) => onChange(value)}
            styles={customStyles}
            defaultValue={defaultCurrency}
          />
        )}
        defaultValue={currencyValues.RUR}
      />
    </div>
  )
}

export default SalaryFilterInput
