import React, { useEffect } from 'react'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Favorites from './pages/Favorites'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { loadUserAction } from './store/actions/user.actions'

function App() {

  const user = useSelector(state => state.user)


  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUserAction())
  }, [])

  
  return (<>
    <h1>Hoşgeldin <span>{user.email}</span></h1>
    <ul>
      <li><Link to='/'> Home</Link></li>
      <li><Link to='/about'> About</Link></li>
      <li><Link to='/contact'> Contact</Link></li>
      <li><Link to='/dashboard'> Dashboard</Link></li>
      <li><Link to='/products'> Products</Link></li>
      <li><Link to='/favorites'> Favorites</Link></li>

    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/products' element={<Products />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>

    <footer>
      <p>© 2024</p>
    </footer>

  </>
  )
}

export default App