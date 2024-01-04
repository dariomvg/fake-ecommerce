import { HashRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './Routes/Menu'
import { SectionProducts } from './Routes/SectionProducts'
import { SectionMain } from './Routes/SectionMain'
import { Cart } from './Routes/Cart'
import './styles/App.scss'

function App() {

  return (
    <section className='wrapper'>
      <HashRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<SectionMain />} />
          <Route path='/products' element={<SectionProducts />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </HashRouter>
    </section>
  )
}

export default App
