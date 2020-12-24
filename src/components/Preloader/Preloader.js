import preloader from '../../assets/preloader.svg'
import s from './Preloader.module.css'

const Preloader = () => (
  <div className={s.root}>
    <img src={preloader} />
  </div>
)

export default Preloader
