import React, { Component } from 'react';
import CardList from './CardList';

const data = [
  {
    id: 0,
    title: 'Product Backlog',
    cards: [
      { id: 0, description: 'This is my first card...' },
      { id: 1, description: 'This is a test' },
      { id: 2, description: 'This is a test' },
      { id: 3, description: 'This is a test' },
      { id: 4, description: 'This is a test' },
      { id: 5, description: 'This is a test' },
      { id: 6, description: 'This is a test' },
      { id: 7, description: 'This is a test' },
      { id: 8, description: 'This is a test' },
      { id: 9, description: 'This is a test' },
      { id: 10, description: 'This is a test' },
      { id: 11, description: 'This is a test' },
      { id: 12, description: 'This is a test' },
      { id: 13, description: 'This is a test' },
      { id: 14, description: 'This is a test' },
      { id: 15, description: 'This is a test' },
      { id: 16, description: 'This is a test' },
      { id: 17, description: 'This is a test' },
      { id: 18, description: 'This is a test' },
      { id: 19, description: 'This is a test' },
      { id: 20, description: 'This is a test' },
      { id: 21, description: 'This is a test' },
      { id: 22, description: 'This is a test' },
      { id: 23, description: 'This is a test' },
      { id: 24, description: 'This is a test' },
    ]
  },
  {
    id: 1,
    title: 'Work In Progress',
    cards: [
      { id: 0, description: 'A card for my second list' },
      { id: 1, description: 'Another one!' }
    ]
  },
  {
    id: 2,
    title: 'Done',
    cards: [
      { id: 0, description: 'A card for my third list' },
      { id: 1, description: 'Another one!' }
    ]
  },
  {
    id: 3,
    title: 'Done',
    cards: [
      { id: 0, description: 'A card for my third list' },
      { id: 1, description: 'Another one!' }
    ]
  },
  {
    id: 4,
    title: 'Done',
    cards: [
      { id: 0, description: 'A card for my third list' },
      { id: 1, description: 'Another one!' }
    ]
  },
  {
    id: 5,
    title: 'Done',
    cards: [
      { id: 0, description: 'A card for my third list' },
      { id: 1, description: 'Another one!' }
    ]
  },
  {
    id: 6,
    title: 'Done',
    cards: [
      { id: 0, description: 'A card for my third list' },
      { id: 1, description: 'Another one!' }
    ]
  },
];

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      nextIndex: -1,
    };

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
  }

  componentWillMount() {
    // Compute next index
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].cards.length;
    }
    // Init state with data
    this.setState({ lists: data, nextIndex: sum + 1 });
  }

  handleAddList() {
    let lists = [...this.state.lists];
    lists.push({
      id: lists.length,
      title: 'New list',
      cards: []
    });
    this.setState({ lists });
  }

  handleAddCard(listId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists[i].cards.push({
          id: this.state.nextIndex,
          description: 'New card'
        });
        this.setState({ lists, nextIndex: this.state.nextIndex + 1 });
        return;
      }
    }
  }

  handleRemoveCard(listId, cardId) {
    let lists = [...this.state.lists];
    let index = -1;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        for (let j = 0; j < lists[i].cards.length; j++) {
          if (lists[i].cards[j].id === cardId) {
            index = j;
          }
        }
        if (index !== -1) {
          lists[i].cards.splice(index, 1);
          this.setState({ lists });
          return;
        }
      }
    }
  }

  render() {
    return (
      <div className="board">
        <ol className="board-lists">
          {
            this.state.lists.map(list => (
              <li key={list.id}>
                <CardList 
                  data={list}
                  onAddCard={this.handleAddCard}
                  onRemoveCard={this.handleRemoveCard}
                />
              </li>
            ))
          }
          <li>
            <button 
              className="board-button"
              onClick={this.handleAddList}
            >
              + Add a list
            </button>
          </li>
        </ol>
      </div>
    );
  }
};

export default Board;
