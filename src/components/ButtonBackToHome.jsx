import React from 'react'
import { Link } from 'react-router-dom'

export const ButtonBackToHome = () => (
  <Link
    className='button-back'
    to='/'>
    Volver a la portada
  </Link>
)