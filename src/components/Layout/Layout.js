import cn from 'classnames'

import s from './Layout.module.css'

const Layout = ({ children, className = null }) => <div className={cn(s.root, className)}>{children}</div>

export default Layout
