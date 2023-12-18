import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from './Routes/Menu'
import { SectionProducts } from './Routes/SectionProducts'
import { SectionMain } from './Routes/SectionMain'
import { Cart } from './Routes/Cart'
import { Page404 } from './Routes/Page404'
import './styles/App.scss'

function App() {

  return (
    <section className='wrapper'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<SectionMain />} />
          <Route path='/products' element={<SectionProducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </section>
  )
}

export default App
