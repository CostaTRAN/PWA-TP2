import React from 'react';
import MarioImg from "../../public/mario.webp"
import VImg from "../../public/V.webp"
import HaloImg from "../../public/halo.jpeg"
import EthanImg from "../../public/ethan.jpeg"
import SolidSnakeImg from "../../public/solidSnake.webp"
import kratosImg from "../../public/kratos.png"
import SaloyImg from "../../public/aloy.webp"
import PikachuImg from "../../public/pikachu.png"

import './Connected.css';

const Connected = ({ onButtonClick }) => {
  return (
    <div>
      
    <div className="container">
        <h2 className='deco' onClick={onButtonClick}>Se deconnecter</h2>
      <div className="left-section">
    <div className='b'>
      <div className="bottom-cards">
      <div className="card1">
      <img src={MarioImg} className="mario" alt="Mario" />
        <h2>Mario Bros</h2>
        <p>Un petit plombier moustachu</p>
      </div>

      <div className="card11">
      <img src={VImg} className="mario" alt="V" />
        <h2>V</h2>
      <p>La cybernétique au service de l'humain</p>
      </div>

        </div>
        
            <div className="card2">
              <div className="a">
              <img src={HaloImg} className="a1" alt="Halo" />
              <div className="a2">
                <h2>Master Chief</h2>
                <p className='tes'>La peur incarnie des covenants</p>
                </div>
                </div>
            </div>
            </div>
            <div className="bottom-cardss">
      <div className="card3">
      <img src={EthanImg} className="SolidSnake" alt="Ethan" />
        <h2>Ethan Winters</h2>
        <p>L'homme malchanceux de Resident Evil</p>
      </div>

      <div className="card33">
      <img src={SolidSnakeImg} className="SolidSnake" alt="SolidSnake" />
        <h2>Solid Snake</h2>
      <p>L'agent secret contre Metam Gear</p>
      </div>

        </div>
      </div>



      <div className="right-section">
      <div className='b'>
        <div className="top-cards">
          
        <div className="card4">
          
        <img src={PikachuImg} className="pikachu" alt="Pikachu" />
        
      <h2>Pikatchu</h2>
      <p>Est-ce vraiment nécessaire de vous le présenter?</p>
    </div>

        </div>
        </div>
        <div className="bottom-cardss">

        <div className="card3">
        <img src={kratosImg} className="SolidSnake" alt="kratos" />
      <h2>Cartos</h2>
      <p>Le papa contre les dieux qui voulait protéger son fils</p>
    </div>

          <div className="card33">
          <img src={SaloyImg} className="SolidSnake" alt="Saloy" />
      <h2>Aloy</h2>
      <p>L'héroine à l'arc contre les méca.</p>
    </div>

        </div>


  
      </div>
    </div>
    </div>
  );
};



export default Connected;
