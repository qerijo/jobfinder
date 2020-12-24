import React from 'react'
import Vacancy from './Vacancy/Vacancy'
import s from './VacanciesList.module.css'

const VacanciesList = ({ vacancies }) => (
  <>
    {vacancies?.length === 0 && <div className={s.notFoundMsg}>По запросу ничего не найдено</div>}
    <div className={s.vacanciesWrapper}>
      {vacancies?.map((vac) => (
        <Vacancy
          key={vac.id}
          id={vac.id}
          position={vac.name}
          company={vac.employer.name}
          city={vac.area.name}
          published={vac.published_at}
          responsibility={vac.snippet.responsibility}
        />
      ))}
    </div>
  </>
)

export default VacanciesList
