import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

const Index = () => {
  return <div>Welcome to Trivi!
    <App />
  </div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));