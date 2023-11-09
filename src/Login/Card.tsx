import { useState } from 'react'
import Bowser from './Bowser'
import Text from './Text'
import Login from './Login'

function Card() {
  return (
    <div className='bg-gray rounded flex flex-col items-center p-12'>
      <Bowser />
      <Text />
      <Login />
    </div>
  )
}

export default Card
