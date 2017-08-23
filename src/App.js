import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Header from './Header';
import Section from './Section';
import './css/App.css';

class App extends Component {
  handleClick = () => {
    scrollToComponent(this.chooseYourStyle, {
      offset: 0,
      align: 'top',
      duration: 1000
    });
  };
  render() {
    return (
      <div className="App">
        <Header onClick={this.handleClick} />
        <Section
          ref={section => {
            this.chooseYourStyle = section;
          }}
        >
          Kies je stijl
        </Section>
      </div>
    );
  }
}

export default App;
