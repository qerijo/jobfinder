import cl from 'classnames'
import s from './Button.module.css'

const Button = ({ children, type, className = null, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <button type={type} className={cl(s.root, className)} {...props}>
    {children}
  </button>
)

export default Button
