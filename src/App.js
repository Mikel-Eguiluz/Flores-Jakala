import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App () {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Detail' element={<Detail />} />
      </Routes>
    </Layout>
  )
}

export default App
