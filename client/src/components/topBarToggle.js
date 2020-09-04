import React, {useState} from 'react'
import useLightMode from '../hooks/lightMode'




const lightMode = () => {
    const [lightMode, setLightMode] = uselightMode(false);
    const toggleMode = e => {
      e.preventDefault();
      document.body.classList.toggle("light-mode")
      setLightMode(!lightMode);
    };
    return (
      <nav className="navbar">
        <h1>Crypto Tracker</h1>
        <div className="light-mode__toggle">
          <div
            onClick={toggleMode}
            className={lightMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };
  
  export default lightMode;