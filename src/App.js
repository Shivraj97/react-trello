import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
// Components
import Board from './components/Board';
import Header from './components/Header';
// Stylesheets
import './App.css';

function App() {
  return (
    <DragDropContext onDragEnd={() => null}>
      <div className="App">
        <Header />
        <Board />
      </div>
    </DragDropContext>
  );
}

export default App;
