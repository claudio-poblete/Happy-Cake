import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='links__container'>
        <Link to='/' className='links'>
          Inicio
        </Link>
        <Link to='/contact' className='links'>
          Contacto
        </Link>
      </ul>
      <div className='logo__container'>
        <Link to='/' className='logo'>
          Happy Cake
          <FontAwesomeIcon icon={faCakeCandles} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
