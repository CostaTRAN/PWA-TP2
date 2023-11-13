import React, { useState } from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './Login/Card'
import Connected from './Login/Connected'
const App = () => {
  const [showCard, setShowCard] = useState(true);

  const handleCardButtonClick = () => {
    setShowCard(false);
  };

  const handleConnectButtonClick = () => {
    setShowCard(true);
  };

  return (
    <div>
      {showCard ? (
        <Card onButtonClick={handleCardButtonClick} />
      ) : (
        <Connected onButtonClick={handleConnectButtonClick} />
      )}
    </div>
  );
};

export default App 

