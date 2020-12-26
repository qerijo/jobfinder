import useData from '../../hooks/getData'

import { configEndpoint } from '../../config'
import Layout from '../../components/Layout/Layout'

import ContentStatus from '../../components/ContentStatus/ContentStatus'
import Info from './Info/Info'

const DetailedInfo = ({ id }) => {
  const { data, isError, isLoading } = useData(configEndpoint.getVacancyById, {
    vacancy_id: id,
  })

  return (
    <Layout>
      <ContentStatus isLoading={isLoading} isError={isError}>
        {() => <Info detailedInfo={data} />}
      </ContentStatus>
    </Layout>
  )
}

export default DetailedInfo
