import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const element = <h1 className="testClass">React Demo</h1>;



// const element = (

//   <div>

//     <h1>React Demo</h1>

//     <h2>React Rendering</h2>

//   </div>

// );


// without JSX
// const element = React.createElement("div",{className:"testClass"},'React Demo');

const element = React.createElement("div",{className:"testClass"},

React.createElement("h1",{className:"h1Class"}, "React Demo"),
React.createElement("h2",{className:"h2Class"}, "Rendering without JSX")

);

ReactDOM.render(element, document.getElementById("root"));

