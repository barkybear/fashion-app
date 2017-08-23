import React, { Component } from 'react';
import './css/Section.css';

class Section extends Component {
  render() {
    return (
      <div className="section-container">
        <div className="section-title">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Section;
