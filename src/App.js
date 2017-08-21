import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section>Kies je stijl</Section>
      </div>
    );
  }
}

export default App;
