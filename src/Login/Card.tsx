import { useState } from 'react'
import Bowser from './Bowser'
import Text from './Text'
import Login from './Login'

const Card = ({ onButtonClick }) => {
  return (
    <div className='bg-gray rounded flex flex-col items-center p-12'>
      <Bowser />
      <Text />
      <button className='bg-white rounded' onClick={onButtonClick}>
        <p className='text-black'>
        Se connecter
            
        </p>
    </button>
    </div>
  )
};

export default Card
