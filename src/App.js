import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';

const centerInnerDiv = {
    display: 'table',
    margin: '0 auto',
    'textAlign': 'center',
    'verticalAlign': 'middle'
};

const fullInput = {
  width: '100%',
  padding: '.5em 2em',
  'textAlign': 'center'
};

ReactDOM.render(
  <div style={centerInnerDiv}>
    <div>
      <h1>GrailWatch</h1>
    </div>
    <div id="search-input" style={centerInnerDiv}>
      <input
        type="text"
        name="search"
        placeholder="What are you looking for?"
        style={fullInput}
        onKeyUp={(e) => {
          console.log(`oh he typin ${e.target.value} doe!`);
        }}
      />
    </div>
    <Button
      buttonName="Search"
      className="search"
      onClick={() => {console.log('Now I would search Grailed')}}
    />
  </div>,
  document.getElementById('app')
);
