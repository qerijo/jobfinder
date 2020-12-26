import Vacancies from './pages/Vacancies/Vacancies'

import VacanciyDetails from './pages/DetailedInfo/DetailedInfo'
import { links } from './constants'

const routes = {
  [links.HOME]: () => (data) => <Vacancies areas={data} />,
  [links.VACANCIES]: () => (data) => <Vacancies areas={data} />,
  [links.VACANCY]: ({ id }) => () => <VacanciyDetails id={id} />,
}
export default routes
