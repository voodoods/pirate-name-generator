import React from 'react';
import {ReactComponent as PirateLogo} from './assets/logo.svg';
import './App.css';
import { generatePirateName, generatePirateSlur, generatePirateTitle } from './generate';

function App() {

  const refresh = () => {
    window.location.href = "/"
  }
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>

    <div className="App-wrapper">
      <div className="App-content">
        <section className="App-name-section-top">
            <span className="sub-title">Captain Norman's Best</span><br/>
            <span className="page-title">Pirate Name Generator</span><br/>

            <PirateLogo className="App-logo" />
        </section>

        <section className="App-name-section">
          <div>
            <span className="generated-slur">{generatePirateSlur()}</span><br/>
            <span className="generated-title">{generatePirateTitle()}</span><br/>
            <span className="generated-name">{generatePirateName()}</span><br/>
          </div>

        </section>

        <section className="App-name-bottom">
          <button onClick={refresh}>Fetch me a new name, yarrrr!</button>
        </section>

        <footer>
            The priate name generator was created by Norman Steger - <a href="mailto:me@normansteger.com">me@normansteger.com</a> - <a href="https://github.com/voodoods/pirate-name-generator" target="_blank" rel="noreferrer">View on GitHub</a>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
