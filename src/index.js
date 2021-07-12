import React from 'react';
import ReactDOM from 'react-dom';
// import Temperature from './Temperature';
// import Title from './composition';
import Routing from './Routing';
import './index.scss';
// import Singup from './App';
// import Title from './Title';
import reportWebVitals from './reportWebVitals';

// const titleHeader = <h1 className="title">Hello World</h1>;
// ReactDOM.render(
//   titleHeader,
//   document.getElementById('root')
// );


// ReactDOM.render(<Temperature />, document.getElementById('root'));




// ReactDOM.render(<Title />, document.getElementById('root'));



ReactDOM.render(<Routing />, document.getElementById('root'));





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
