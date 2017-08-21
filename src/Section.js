import React from 'react';
import './css/Section.css';

const Section = props =>
  <div className="section-container">
    <div className="section-title">
      {props.children}
    </div>
  </div>;

export default Section;
