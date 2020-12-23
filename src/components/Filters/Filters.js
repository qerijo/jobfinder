/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["data"] }] */
import { useForm } from 'react-hook-form'
import findTownIdByName from '../../utils/findTownIdByName'
import removeEmptyFields from '../../utils/removeEmptyFields'
import Button from '../Button/Button'
import FilterInput from '../FilterInput/FilterInput'
import s from './Filters.module.css'

const Filters = ({ areas, setQuery }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    removeEmptyFields(data)
    if (data.area) {
      data.area = findTownIdByName(areas, data.area)
    }
    if (!data.area) {
      delete data.area
    }
    setQuery({ ...data })
  }

  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.filters}>
          <FilterInput register={register} type="text" placeholder="Город" name="area" />
          <FilterInput register={register} type="text" placeholder="Ключевые слова" name="text" />
          <FilterInput register={register} type="number" placeholder="Уровень дохода от" name="salary" />
          <Button type="submit">Найти</Button>
        </div>
      </form>
    </div>
  )
}

export default Filters
