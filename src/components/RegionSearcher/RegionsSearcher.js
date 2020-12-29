import Select from 'react-select/async'
import { configEndpoint } from '../../config'
import req from '../../utils/request'

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: '100%',
    minWidth: '180px',
    '&:hover': { borderColor: 'gray' },
    boxShadow: 'none',
    borderColor: '#ccc',
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    marginLeft: '10px',
  }),
  input: (provided, state) => ({
    ...provided,
    color: '#4b4b4b',
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '17px',
  }),
  indicatorSeparator: (styles) => ({ display: 'none' }),
}

const RegionsSearcher = ({ onChange }) => {
  const getOptions = async (area, callback) => {
    if (area.length <= 2) {
      return
    }
    const data = await req(configEndpoint.getAreas, { text: area })
    callback(data.items.map((i) => ({ label: i.text, value: i.id })))
  }

  return (
    <Select
      placeholder="Введите регион"
      onChange={onChange}
      styles={customStyles}
      loadOptions={getOptions}
      noOptionsMessage={() => 'Ничего не найдено'}
      loadingMessage={() => 'Загрузка'}
    />
  )
}

export default RegionsSearcher
