import { useState } from 'react'
import BowserImg from "../../public/bowser.webp"

function Bowser() {

  return (
    <img src={BowserImg} className="logo" alt="Bowser" />
  )
}

export default Bowser