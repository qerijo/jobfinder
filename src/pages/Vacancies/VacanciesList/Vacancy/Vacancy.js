import moment from 'moment'
import { navigate } from 'hookrouter'
import s from './Vacancy.module.css'
import { links } from '../../../../constants'

const Vacancy = ({ id, position, company, city, published, responsibility }) => (
  <div className={s.vacancy}>
    <p className={s.position} onClick={() => navigate(`${links.VACANCIES}/${id}`)} aria-hidden="true">
      {position}
    </p>
    <p className={s.companyBlock}>
      <span className={s.companyName}>{company}</span>
      <span>{city}</span>
    </p>
    <p>{responsibility}</p>
    <span>Опубликована {moment(published).format('DD/MM HH:mm')}</span>
  </div>
)

export default Vacancy
