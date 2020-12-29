import { navigate } from 'hookrouter'
import Button from '../../components/Button/Button'
import s from './NotFound.module.css'

const NotFound = () => (
  <div className={s.root}>
    <div className={s.wrap}>
      <div className={s.text}>404</div>
      <div className={s.layer}>
        <div className={s.subTitle}>
          <span>Страница появится в будущем</span>
        </div>
        <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
      </div>
    </div>
  </div>
)

export default NotFound
