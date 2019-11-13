import React, { Component } from 'react';
import CardList from './CardList';

class Board extends Component {
  render() {
    return (
      <div className="board">
        <ol className="board-lists">
          {
            this.props.lists.map(list => (
              <li key={list.id}>
                <CardList 
                  title={list.title}
                  cards={list.cards} 
                />
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
};

export default Board;
