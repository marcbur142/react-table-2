import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/Table1';
import App2 from './components/Table2';

const A = <App1/>;
const B = <App2/>;
const MyApp = <div>{A}{B}</div>;

// Render the main component into the dom
ReactDOM.render(<MyApp />, document.getElementById('app'));
