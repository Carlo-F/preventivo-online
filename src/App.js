import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Preventivo from './Preventivo';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <div className="Section title">
                <h1>Preventivo online per siti internet</h1>
                <p>Calcola il preventivo per il tuo <strong>sito internet</strong> gratuitamente.<br></br>Seleziona le opzioni che ti interessano e ottieni un preventivo istantaneo.</p>
            </div>
            <Preventivo></Preventivo>
            <div className="Section cta">
              <p><Button className="primary" size="large" variant="contained" color="primary" href="mailto:info@carlof.it?subject= Preventivo online">✉️ Contattaci subito</Button><br></br> per confermare il preventivo</p>
            </div>
            <div className="Section">
            <p className="Notes">🤓 Note:<br></br>Il preventivo generato e' da considerarsi una stima basata sulle informazioni fornite.<br></br>I costi effettivi potrebbero variare.</p>
            </div>
            <div className="Section credits">
              <p>Strumento di preventivo online gratuito per siti internet sviluppato da <Button className="secondary" href="https://www.carlof.it" target="_blank" color="secondary">Carlo F. Web Solutions</Button></p>
            </div>
          </header>
        </div>
      );
    }
  }

export default App;
