import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anrede: '',
      vorname: '',
      nachname: '',
      strasse: '',
      hausnummer: '',
      plz: '',
      ort: '',
      eweMail: '',
      telefon: '',
      iban: '',
      pflichtEmail: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.id || e.target.name]: e.target.value })
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.handleChange(nextState)
  }

  render() {
    // todo use name instead of id for everything (see also appropriate section in official react documentation)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>

          <label>Anrede</label>
          <label><input type="radio" name="anrede" value="Frau" onChange={this.handleChange} />Frau</label>
          <label><input type="radio" name="anrede" value="Herr" onChange={this.handleChange} />Herr</label>

          <hr />

          <label>Vorname
            <input type="text" id="vorname" value={this.state.vorname} onChange={this.handleChange} />
          </label>

          <hr />

          <label>Nachname
            <input type="text" id="nachname" value={this.state.nachname} onChange={this.handleChange} />
          </label>

          <hr />

          <label>Geburtsdatum</label> {this.props.geburtsdatum}

          <hr />
          <label>Straße / Hausnummer
            <input type="text" id="strasse" value={this.state.strasse} onChange={this.handleChange} />
            <input type="text" id="hausnummer" value={this.state.hausnummer} onChange={this.handleChange} />
          </label>

          <hr />
          <label>PLZ / Ort
            <input type="text" id="plz" value={this.state.plz} onChange={this.handleChange} />
            <input type="text" id="ort" value={this.state.ort} onChange={this.handleChange} />
          </label>
          <hr />
          <label>E-Mail *
            <input type="text" id="eweMail" value={this.state.eweMail} onChange={this.handleChange} />
          </label>

          <hr />
          <label>Telefon *
            <input type="text" id="telefon" value={this.state.telefon} onChange={this.handleChange} />
          </label>
          <hr />
          <label>IBAN
            <input type="text" id="iban" value={this.state.iban} onChange={this.handleChange} />
          </label>
          <hr />
          <label>Pflicht-E-Mail
            <input type="text" id="pflichtEmail" value={this.state.pflichtEmail} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

        </form>
      </div>
    );
  }
}

export default App;
