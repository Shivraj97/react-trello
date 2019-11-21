import React, { Component } from 'react';
import { FaTimes, FaPlus } from 'react-icons/fa';
import CardList from './CardList';

const data = [
  {
    id: 0,
    title: 'Product Backlog',
    cards: [
      { id: 1, description: 'This is my first card...', tags: ['Priority: Low', 'Front-end'] },
      { id: 2, description: 'This is a test', tags: ['Priority: Low'] },
      { id: 3, description: 'This is a test', tags: null },
    ]
  },
  {
    id: 1,
    title: 'Work In Progress',
    cards: [
      { id: 4, description: 'A card for my second list', tags: ['Priority: Low', 'Front-end'] },
      { id: 5, description: 'Another one!', tags: ['Priority: Medium', 'API', 'Database'] }
    ]
  },
  {
    id: 2,
    title: 'Done',
    cards: [
      { id: 6, description: 'A card for my third list', tags: ['Priority: High', 'Payment', 'API'] },
      { id: 7, description: 'Another one!', tags: null }
    ]
  },
];

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      nextCardIndex: -1,
      nextListIndex: -1,
      newListText: '',
      creatingNewList: false,
      openMenuId: null,
    };

    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleRemoveCard = this.handleRemoveCard.bind(this);
    this.handleAddList = this.handleAddList.bind(this);
    this.handleRemoveList = this.handleRemoveList.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentWillMount() {
    // Compute next index
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].cards.length;
    }
    // Init state with data
    this.setState({ 
      lists: data, 
      nextCardIndex: sum + 1,
      nextListIndex: data.length + 1
    });
  }

  handleAddList(e) {
    e.preventDefault();

    let lists = [...this.state.lists];
    lists.push({
      id: this.state.nextListIndex,
      title: this.state.newListText,
      cards: []
    });
    this.setState({ 
      lists, 
      nextListIndex: this.state.nextListIndex + 1,
      newListText: '',
      creatingNewList: false,
    });
  }

  handleRemoveList(listId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists.splice(i, 1);
        this.setState({ lists });
        return;
      }
    }
  }

  handleAddCard(listId, text) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists[i].cards.push({
          id: this.state.nextCardIndex,
          description: text
        });
        this.setState({ lists, nextCardIndex: this.state.nextCardIndex + 1 });
        return;
      }
    }
  }

  handleRemoveCard(listId, cardId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        for (let j = 0; j < lists[i].cards.length; j++) {
          if (lists[i].cards[j].id === cardId) {
            lists[i].cards.splice(j, 1);
            this.setState({ lists });
            return;
          }
        }
      }
    }
  }

  handleToggleMenu(listId) {
    if (this.state.openMenuId === listId) {
      this.setState({ openMenuId: null });
    }
    else {
      this.setState({ openMenuId: listId });
    }
  }

  renderLists() {
    let lists = [];
    for (let i = 0; i < this.state.lists.length; i++) {
      lists.push(
        <li key={this.state.lists[i].id}>
          <CardList 
            data={this.state.lists[i]}
            isMenuOpen={this.state.openMenuId === this.state.lists[i].id}
            onToggleMenu={this.handleToggleMenu}
            onAddCard={this.handleAddCard}
            onRemoveCard={this.handleRemoveCard}
            onRemoveList={this.handleRemoveList}
          />
        </li>
      );
    }
    return lists;
  }

  renderNewList() {
    let content = null;
    if (this.state.creatingNewList) {
      content = (
        <div className="cardlist-newlist-container">
          <input 
            className="cardlist-newlist"
            type="text" 
            value={this.state.newListText} 
            placeholder="Enter a title for this list..."
            onChange={(e) => this.setState({ newListText: e.target.value })} 
          />
          <input 
            className="cardlist-button-addcard"
            type="submit"
            value="Add List"
            onClick={(e) => this.handleAddList(e)}
          />
          <FaTimes 
            className="cardlist-button-cancel"
            onClick={() => this.setState({ newListText: '', creatingNewList: false })}
          />
        </div>
      );
    }
    else {
      content = (
        <button 
          className="board-button"
          onClick={() => this.setState({ creatingNewList: true })}
        >
          <FaPlus /> Add a list
        </button>
      );
    }
    return <li>{ content }</li>
  }

  render() {
    return (
      <div className="board">
        <ol className="board-lists">
          { this.renderLists() }
          { this.renderNewList() }
        </ol>
      </div>
    );
  }
};

export default Board;
