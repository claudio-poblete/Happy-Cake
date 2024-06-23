import '../styles/home.css'
import cakeImg from '../assets/cake.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className='home__section'>
      <div className='title__container'>
        <h2 className='title'><span>Bienvenido a</span> Happy Cake</h2>
      </div>
      <div className='subtitle__container'>
        <h4 className='subtitle'>El lugar de los pasteles felices</h4>
      </div>
      <div className='img__container'>
        <Link to='/contact'>
          <img src={cakeImg} alt='Pastel de Chocolate' />
        </Link>
        <div className='img__text'>
          <FontAwesomeIcon icon={faArrowUp} />
          <p>Presiona el pastel</p>
        </div>
      </div>
    </section>
  )
}

export default Home
