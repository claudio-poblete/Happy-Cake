import Navbar from './components/Navbar'
import Home from './views/Home'
import Contact from './views/Contact'
import { Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contact'
          element={<Contact />}
        />
      </Routes>
    </>
  )
}

export default App
