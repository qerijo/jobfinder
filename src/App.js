import { useRoutes } from 'hookrouter'
import useData from './hooks/getData'
import Preloader from './components/Preloader/Preloader'
import NotFound from './pages/NotFound/NotFound'
import routes from './routes'
import { configEndpoint } from './config'

const App = () => {
  const { data, isError } = useData(configEndpoint.getAreas, {})

  const routeResult = useRoutes(routes)

  if (!routeResult) {
    return <NotFound />
  }
  if (!data && !isError) {
    return <Preloader />
  }
  if (isError) {
    return <div>Что-то пошло не так</div>
  }

  return routeResult(data)
}

export default App
