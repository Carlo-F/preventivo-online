import React from 'react';
import Button from '@material-ui/core/Button';

class Preventivo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        stileDesign: 399,
        numeroLingue: 0,
        testi: 0,
        immagini: 0,
        numeroPagine: 0,
        seo: 0,
        prodotti: 0,
        blog: false,
        formContatti: false,
        gallery: false,
        prenotazioni: false,
        registrazioni: false,
        analytics: false,
        chat: false,
        isVisible: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {

        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
        this.setState({[name]: value});

    }
  
    handleSubmit(event) {
      event.preventDefault();
    }

    toggle() {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  
    render() {

      let totale = 0;

      for (let key in this.state) {
        if (key === 'blog' && this.state['blog'] === true) {
          totale += 40;
        } else if (key === 'formContatti' && this.state['formContatti'] === true) {
          totale += 20;
        } else if (key === 'gallery' && this.state['gallery'] === true) {
          totale += 20;
        } else if (key === 'prenotazioni' && this.state['prenotazioni'] === true) {
          totale += 200;
        } else if (key === 'registrazioni' && this.state['registrazioni'] === true) {
          totale += 500;
        } else if (key === 'analytics' && this.state['analytics'] === true) {
          totale += 20;
        } else if (key === 'chat' && this.state['chat'] === true) {
          totale += 20;
        } else if (key === 'isVisible') {
          continue;
        } else {
          totale += this.state[key];
        }

      }
  
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="Section">
            <h2>1. Design</h2>
            <ul className="List">
            <li className="Option">
              <label>Grafica</label>
              <select name="stileDesign" value={this.state.stileDesign} onChange={this.handleChange}>
                <option value="399">😐 Basilare</option>
                <option value="449">😏 Semplice ma accattivante</option>
                <option value="549">😉 Professionale</option>
                <option value="699">😎 Totalmente personalizzata</option>
              </select>
            </li>
            <li className="Option">
              <label>Responsive (gratuito)</label>
            </li>
            </ul>
          </div>
          <div className="Section">
            <h2>2. Contenuti</h2>
            <ul className="List">
            <li className="Option">
              <label>Numero di lingue</label>
              <select name="numeroLingue" value={this.state.numeroLingue} onChange={this.handleChange}>
                <option value="0">Una lingua</option>
                <option value="200">2 lingue</option>
                <option value="250">3 lingue</option>
                <option value="300">4 lingue</option>
                <option value="450">5 lingue +</option>
              </select>
            </li>
            <li className="Option">
              <label>Hai gia' i testi?</label>
              <select name="testi" value={this.state.testi} onChange={this.handleChange}>
                <option value="0">😌 Si</option>
                <option value="100">🥺 No</option>
              </select>
            </li>
            <li className="Option">
              <label>Hai gia' le immagini?</label>
              <select name="immagini" value={this.state.immagini} onChange={this.handleChange}>
                <option value="0">😌 Si</option>
                <option value="80">🥺 No</option>
              </select>
            </li>
            <li className="Option">
              <label>Numero di pagine</label>
              <select name="numeroPagine" value={this.state.numeroPagine} onChange={this.handleChange}>
                <option value="0">Pagina singola</option>
                <option value="250">2-5</option>
                <option value="300">6-10</option>
                <option value="450">11+</option>
              </select>
            </li>
            </ul>
          </div>
          <div className="Section">
            <h2>3. Presenza su internet</h2>
            <ul className="List">
            <li className="Option">
              <label>Dominio (gratuito)</label>
            </li>
            <li className="Option">
              <label>Hosting (gratuito)</label>
            </li>
            <li className="Option">
              <label>Certificato HTTPS (gratuito)</label>
            </li>
            <li className="Option">
              <label>Ottimizzazione SEO</label>
              <select name="seo" value={this.state.seo} onChange={this.handleChange}>
                <option value="0">😐 Base</option>
                <option value="100">😌 Ottimizzato</option>
                <option value="300">🤩 Professionale</option>
              </select>
            </li>
            </ul>
          </div>
          <div className="Section">
            <h2>4. E-Commerce</h2>
            <ul className="List">
            <li className="Option">
              <label>Numero prodotti</label>
              <select name="prodotti" value={this.state.prodotti} onChange={this.handleChange}>
                <option value="0">Non ne ho bisogno</option>
                <option value="500">🛍 1-10 prodotti</option>
                <option value="650">🛒 11-100 prodotti</option>
                <option value="950">🏬 100 + prodotti</option>
              </select>
            </li>
            </ul>
          </div>
          <div className="Section">
            <h2>5. Opzioni aggiuntive</h2>
            <ul className="List">
              <li className="Option">
                <label for="blog">✍️ Blog</label>
                <input type="checkbox" id="blog" name="blog" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="formContatti">✉️ Form di contatti</label>
                <input type="checkbox" id="formContatti" name="formContatti" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="gallery">📷 Foto/Video gallery</label>
                <input type="checkbox" id="gallery" name="gallery" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="prenotazioni">🗓 Sistema di prenotazioni</label>
                <input type="checkbox" id="prenotazioni" name="prenotazioni" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="registrazioni">🤵🏻‍♂️ Login utenti (Registrati/Accedi)</label>
                <input type="checkbox" id="registrazioni" name="registrazioni" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="analytics">📈 Google Analytics</label>
                <input type="checkbox" id="analytics" name="analytics" onChange={this.handleChange}></input>
              </li>
              <li className="Option">
                <label for="chat">💬 Live chat</label>
                <input type="checkbox" id="chat" name="chat" onChange={this.handleChange}></input>
              </li>
            </ul>
          </div>
          <div className="Section">
            <h2>✨ Costo stimato: {this.state.isVisible? 
              <span className="amount">€ {totale}</span> : 
              <Button className="primary" size="large" variant="contained" color="secondary" onClick={this.toggle.bind(this)}>Calcola ora</Button>
            } ✨</h2>
          </div>
        </form>
      )
    }
  }

export default Preventivo;