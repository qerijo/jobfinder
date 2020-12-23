import { useState } from 'react'

import useData from '../../hooks/getData'
import Filters from '../../components/Filters/Filters'

import { configEndpoint } from '../../config'

import Layout from '../../components/Layout/Layout'

import VacanciesList from './VacanciesList/VacanciesList'
import ContentStatus from '../../components/ContentStatus/ContentStatus'

const Vacancies = ({ areas }) => {
  const [query, setQuery] = useState({})

  const { data, isLoading, isError } = useData(configEndpoint.getVacancies, query, [query])

  return (
    <>
      <Layout>
        <Filters areas={areas} query={query} setQuery={setQuery} />
        <ContentStatus isLoading={isLoading} isError={isError}>
          {() => <VacanciesList vacancies={data?.items} />}
        </ContentStatus>
      </Layout>
    </>
  )
}

export default Vacancies
