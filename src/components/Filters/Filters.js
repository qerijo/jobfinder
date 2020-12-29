/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["data"] }] */
import { useForm, Controller } from 'react-hook-form'
import removeEmptyFields from '../../utils/removeEmptyFields'
import Button from '../Button/Button'
import FilterInput from '../FilterInput/FilterInput'
import RegionsSearcher from '../RegionSearcher/RegionsSearcher'
import s from './Filters.module.css'
import SalaryFilterInput from '../SalaryFilterInput/SalaryFilterInput'

const Filters = ({ setQuery }) => {
  const { register, handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    removeEmptyFields(data)
    setQuery({ ...data })
  }

  return (
    <div className={s.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.filters}>
          <Controller
            name="area"
            render={(props) => <RegionsSearcher onChange={({ value }) => props.onChange(value)} />}
            control={control}
            register={register}
          />
          <FilterInput type="text" placeholder="Ключевые слова" name="text" autoComplete="off" register={register} />
          <SalaryFilterInput register={register} control={control} />
          <Button type="submit" className={s.search_btn}>
            Найти
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Filters
