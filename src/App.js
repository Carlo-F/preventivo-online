import React from 'react';
import './App.css';
import Preventivo from './Preventivo';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div>
                <h1>Titolo</h1>
                <p>Sottotitolo</p>
            </div>
            <Preventivo></Preventivo>
            <div className="Section">
            <p>Note: </p>
            </div>
          </header>
        </div>
      );
    }
  }

export default App;
