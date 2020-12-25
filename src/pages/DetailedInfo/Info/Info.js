import { A } from 'hookrouter'
import { ReactComponent as LeftArrowIcon } from '../../../assets/icons/leftArrow.svg'
import { formatSalary, capitalizeLetter, firstLetterToLowerCase } from '../utils'
import { links } from '../../../constants'
import s from './Info.module.css'

const Info = ({ detailedInfo }) => (
  <div className={s.root}>
    <div className={s.go_back_container}>
      <A className={s.go_back_link} href={`${links.VACANCIES}`}>
        <LeftArrowIcon className={s.go_back_icon} /> Вернуться к результатам
      </A>
    </div>
    <div className={s.detailed_info}>
      <h1 className={s.title}>{detailedInfo?.name}</h1>
      <section className={s.section}>
        <div className={s.salary_block}>
          <span className={s.salary}>Зарплата:</span>
          <span>{formatSalary(detailedInfo?.salary)} </span>
        </div>
      </section>
      <section className={s.section}>
        <div className={s.employer_name}>
          <a className={s.employer_link} href={detailedInfo?.employer?.alternate_url}>
            {detailedInfo?.employer?.name}
          </a>
        </div>

        <div className={s.address}>{detailedInfo?.address?.city}</div>
      </section>
      <section className={s.section}>
        {detailedInfo?.experience?.name && (
          <div>
            Требуемый опыт работы:
            {firstLetterToLowerCase(detailedInfo?.experience?.name)}
          </div>
        )}
        {detailedInfo?.employment?.name && <div>{capitalizeLetter(detailedInfo?.employment?.name)}</div>}
      </section>
      <section className={s.section} dangerouslySetInnerHTML={{ __html: detailedInfo?.description }} />
    </div>
  </div>
)

export default Info
