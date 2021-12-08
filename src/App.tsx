import Wrap from '@components/wrap/Wrap'
import { useRoutes } from '@routes/index'
import './App.css'

function App() {
  const routes = useRoutes()
  return <Wrap>{routes}</Wrap>
}

export default App
