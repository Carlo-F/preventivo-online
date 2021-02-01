import React from 'react';

class Preventivo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stileDesign: 10,
        numeroPagine: 10,
        contenuti: 0,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      let name = event.target.name;
      let value = parseInt(event.target.value);
      this.setState({[name]: value});
    }
  
    handleSubmit(event) {
      alert("E' stato selezionato: "+this.state.value);
      event.preventDefault();
    }
  
    render() {

      // const totale = this.state.stileDesign + this.state.numeroPagine + this.state.contenuti;
      let totale = 0;

      for (let key in this.state) {
        totale += this.state[key];
      }
  
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="Section">
            <h2>Sezione 1: Design</h2>
            <div className="Option">
              <label>Stile di design</label>
              <select name="stileDesign" value={this.state.stileDesign} onChange={this.handleChange}>
                <option value="10">Basilare</option>
                <option value="20">Semplice ma attrattivo</option>
              </select>
            </div>
            <div className="Option">
              <label>Numero di pagine</label>
              <select name="numeroPagine" value={this.state.numeroPagine} onChange={this.handleChange}>
                <option value="10">1-5</option>
                <option value="20">6-10</option>
                <option value="30">11+</option>
              </select>
            </div>
          </div>
          <div className="Section">
            <h2>Sezione 2: Contenuti</h2>
            <div className="Option">
              <input type="radio" id="si" name="contenuti" value="0" defaultChecked onChange={this.handleChange}/>
              <label for="si">Ho gia'  i contenuti</label>
              <input type="radio" id="no" name="contenuti" value="10" onChange={this.handleChange}/>
              <label for="no">Mi servono anche i contenuti</label>
            </div>
          </div>
          <div className="Section">
            <h2>Totale preventivo: {totale}</h2>
          </div>
        </form>
      )
    }
  }

export default Preventivo;