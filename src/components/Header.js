import React from 'react'
import Button from './Button'

const Header = ({title, subtitle}) => {
  return (
    <header className='header'>
      {subtitle && <p>{subtitle}</p>}
      <h2>{title}</h2>
      <Button color='red' text='Log In'/>
      <Button color='red' text='Book a Walk'/>
      <Button color='red' text='Become a Walker'/>
    </header>
  )
}

export default Header

