import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <div className="container">
    <nav className="nav mb-3 p-2 pl-4 bg-secondary rounded">
      <h3 className="text-light nav-font">Studio Ghibli API Data</h3>
    </nav>
    <App />
  </div>,
  document.getElementById('root')
);
