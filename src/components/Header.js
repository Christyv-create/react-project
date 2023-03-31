
import React from 'react'

import Button from './Button'

const header = ({title}) => {
  return (
    <header className='header'>
           <h2> Join our community! </h2>
   
      <Button color='red' text='Log In'/>
            <Button color='red' text='Book a Walk'/>
            <Button color='red' text='Become a Walker'/>
            
        </header>

          
  )
}
export default header

