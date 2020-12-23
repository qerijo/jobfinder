import { A } from 'hookrouter'
import { ReactComponent as LeftArrowIcon } from '../../../assets/icons/leftArrow.svg'
import formatSalary from '../../../utils/formatSalary'
import { links } from '../../../constants'
import s from './Info.module.css'

const firstLetterToLowerCase = (string) => {
  if (typeof string !== 'string') {
    console.error('only strings are accepted')
    return ''
  }
  return string[0].toLowerCase() + string.slice(1)
}

const capitalizeLetter = (string) => {
  if (typeof string !== 'string') {
    console.error('only strings are accepted')
    return ''
  }
  return string[0].toUpperCase() + string.slice(1)
}

const Info = ({ detailedInfo }) => (
  <div className={s.root}>
    <div className={s.buttonContainer}>
      <A className={s.buttonLink} href={`${links.VACANCIES}`}>
        <LeftArrowIcon className={s.buttonIcon} /> Вернуться к результатам
      </A>
    </div>
    <div className={s.detailedInfo}>
      <h1 className={s.title}>{detailedInfo?.name}</h1>
      <section className={s.vacancySection}>
        <div className={s.salaryWrapper}>
          <span className={s.salary}>Зарплата:</span>
          <span>{formatSalary(detailedInfo?.salary)} </span>
        </div>
      </section>
      <section className={s.vacancySection}>
        <div className={s.employerName}>
          <a className={s.employerLink} href={detailedInfo?.employer?.alternate_url}>
            {detailedInfo?.employer?.name}
          </a>
        </div>

        <div className={s.address}>{detailedInfo?.address?.city}</div>
      </section>
      <section className={s.vacancySection}>
        {detailedInfo?.experience?.name && (
          <div>
            Требуемый опыт работы:
            {firstLetterToLowerCase(detailedInfo?.experience?.name)}
          </div>
        )}
        {detailedInfo?.employment?.name && <div>{capitalizeLetter(detailedInfo?.employment?.name)}</div>}
      </section>
      <section className={s.vacancySection} dangerouslySetInnerHTML={{ __html: detailedInfo?.description }} />
    </div>
  </div>
)

export default Info
