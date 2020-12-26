/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["data"] }] */
import { useForm, Controller } from 'react-hook-form'
import findTownIdByName from '../../utils/findTownIdByName'
import removeEmptyFields from '../../utils/removeEmptyFields'
import Button from '../Button/Button'
import FilterInput from '../FilterInput/FilterInput'
import NumericFilterInput from '../NumericFilterInput/NumericFilterInput'
import s from './Filters.module.css'

const Filters = ({ areas, setQuery }) => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    removeEmptyFields(data)
    if (data.area) {
      data.area = findTownIdByName(areas, data.area)
    }

    setQuery({ ...data })
  }

  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.filters}>
          <FilterInput type="text" placeholder="Город" name="area" autoComplete="off" register={register} />
          <FilterInput type="text" placeholder="Ключевые слова" name="text" autoComplete="off" register={register} />
          <Controller
            name="salary"
            control={control}
            render={({ value, name }, { invalid }) => (
              <NumericFilterInput
                placeholder="Уровень дохода"
                autoComplete="off"
                invalid={invalid}
                value={value}
                name={name}
                register={register}
              />
            )}
          />
          <Button type="submit">Найти</Button>
        </div>
      </form>
    </div>
  )
}

export default Filters

const filterInputNumeric = (Cpomponent) => {}
