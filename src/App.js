import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App () {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/:id`} element={<Detail />} />
        {/* la pagina de error esta definida en Detail debido a la ruta de arriba */}
      </Routes>
    </Layout>
  )
}

export default App
