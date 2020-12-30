import { useState } from 'react'
import useData from '../../hooks/getData'

import { configEndpoint } from '../../config'
import ContentStatus from '../../components/ContentStatus/ContentStatus'

import Filters from '../../components/Filters/Filters'

import Layout from '../../components/Layout/Layout'

import VacanciesList from './VacanciesList/VacanciesList'

const Vacancies = () => {
  const [query, setQuery] = useState({})

  const { data, isLoading, isError } = useData(configEndpoint.getVacancies, query, [query])

  const vacancies = isError ? [] : data?.items

  return (
    <Layout>
      <Filters query={query} setQuery={setQuery} />
      <ContentStatus isLoading={isLoading}>{() => <VacanciesList vacancies={vacancies} />}</ContentStatus>
    </Layout>
  )
}

export default Vacancies
