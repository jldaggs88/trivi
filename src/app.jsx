import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';
const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};

export default App;