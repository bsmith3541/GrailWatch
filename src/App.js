import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

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

const store = createStore(reducers);

const render = () => ReactDOM.render(
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
        onKeyUp={(e) => {store.dispatch({
          type: 'UPDATE_SEARCH_CRITERIA',
          query: e.target.value
        })}}
      />
    </div>
    <Button
      buttonName="Search"
      className="search"
      onClick={() => {console.log('he clicked some shit')}}
    />
  </div>,
  document.getElementById('app')
);
render();
store.subscribe(render);
