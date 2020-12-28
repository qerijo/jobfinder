import Vacancies from './pages/Vacancies/Vacancies'

import VacanciyDetails from './pages/DetailedInfo/DetailedInfo'
import { links } from './constants'

const routes = {
  [links.HOME]: () => <Vacancies />,
  [links.VACANCIES]: () => <Vacancies />,
  [links.VACANCY]: ({ id }) => <VacanciyDetails id={id} />,
}
export default routes
