import Preloader from '../Preloader/Preloader'
import s from './ContentStatus.module.css'

const ContentStatus = ({ isLoading, isError, children }) => {
  if (!isLoading && !isError) {
    return children()
  }

  return (
    <div className={s.root}>
      <div>{isLoading && <Preloader />}</div>
      <div>{isError && <span className={s.message}>Что-то пошло не так</span>}</div>
    </div>
  )
}

export default ContentStatus
