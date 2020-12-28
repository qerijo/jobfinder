import { useRoutes } from 'hookrouter'
import NotFound from './pages/NotFound/NotFound'
import routes from './routes'

const App = () => {
  const routeResult = useRoutes(routes)

  if (!routeResult) {
    return <NotFound />
  }

  return routeResult
}

export default App
