import React from 'react';
// Components
import Board from './components/Board';
// Stylesheets
import './App.css';

const data = [
  {
    id: 0,
    cards: [
      { id: 0, description: 'This is my first card...' },
      { id: 1, description: 'This is a test' }
    ]
  },
  {
    id: 1,
    cards: [
      { id: 0, description: 'A card for my second list' },
      { id: 1, description: 'Another one!' }
    ]
  },
];

function App() {
  return (
    <div className="App">
      <Board lists={data} />
    </div>
  );
}

export default App;
