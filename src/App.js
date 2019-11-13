import React from 'react';
// Components
import CardList from './components/CardList';
// Stylesheets
import './App.css';

const data = [
  {
    id: 0,
    description: 'This is my first card...'
  },
  {
    id: 1,
    description: 'This is a test'
  }
];

function App() {
  return (
    <div className="App">
      <CardList cards={data} />
    </div>
  );
}

export default App;
