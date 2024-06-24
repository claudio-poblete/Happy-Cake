import { useState } from 'react'
import '../styles/contact.css'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({ email: '', description: '' })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateDescription = (description) => {
    return description.trim().length > 0
  }

  const handleEmailBlur = () => {
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Por favor, introduce un correo electrónico válido (por ejemplo, usuario@dominio.com).'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: ''
      }))
    }
  }

  const handleDescriptionBlur = () => {
    if (!validateDescription(description)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: 'La descripción no puede estar vacía. Por favor, proporciona más detalles sobre tu solicitud.'
      }))
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        description: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let valid = true
    const newErrors = { email: '', description: '' }

    if (!validateEmail(email)) {
      newErrors.email = 'Por favor, introduce un correo electrónico válido (por ejemplo, usuario@dominio.com).'
      valid = false
    }

    if (!validateDescription(description)) {
      newErrors.description = 'La descripción no puede estar vacía. Por favor, proporciona más detalles sobre tu solicitud.'
      valid = false
    }

    setErrors(newErrors)

    if (valid) {
      // Enviar el formulario
      console.log('Formulario enviado', { email, description })
    }
  }

  return (
    <section className='contact__section'>
      <div className='title__container'>
        <h2 className='contact_title'>Cuéntanos, ¿en qué te podemos ayudar?</h2>
      </div>
      <form className='form__container' onSubmit={handleSubmit} noValidate>
        <div className='form__group'>
          <label htmlFor='email'>
            Correo Electrónico
          </label>
          <input
            type='email'
            id='email'
            placeholder='usuario@dominio.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='form__group'>
          <label htmlFor='description'>
            Descripción del pedido
          </label>
          <textarea
            name='description'
            id='description'
            placeholder='Proporciona más detalles sobre tu solicitud...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionBlur}
          />
          {errors.description && <p className='error'>{errors.description}</p>}
        </div>
        <div className='button__container'>
          <button className='form__button' type='submit'>
            Enviar Pedido
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
