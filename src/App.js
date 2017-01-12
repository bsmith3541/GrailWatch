import React from 'react';
import ReactDOM from 'react-dom';

const innerDiv = {
    display: 'table',
    margin: '0 auto'
};

ReactDOM.render(
  <div style={innerDiv}>
      GrailWatch, who dis?
  </div>,
  document.getElementById('app')
);
