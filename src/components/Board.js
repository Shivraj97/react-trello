import React, { Component } from 'react';
import styled from 'styled-components';
import { IoMdAdd as AddIcon } from 'react-icons/io';
import CardList from './CardList';
import Form from './Form';


const data = [
  {
    id: 0,
    title: 'Product Backlog',
    cards: [
      { id: 1, description: 'This is my first card...', tags: ['Priority: Low', 'Front-end'] },
      { id: 2, description: 'This is a test', tags: ['Priority: Low'] },
      { id: 3, description: 'This is a test', tags: [] },
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
      { id: 7, description: 'Another one!', tags: [] }
    ]
  },
];

const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 75px 10px 10px 10px;
`;

const ListsContainer = styled.ol`
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  margin: 0;
  overflow-y: hidden;
  overflow-x: auto;
`;

const NewList = styled.button`
  display: flex;
  flex-direction: row;
  border-radius: 3px;
  border-color: transparent;
  width: 275px;
  color: #fff;
  background-color: hsla(0,0%,100%,.24);
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  text-align: left;
  height: fit-content;

  &:hover { 
    background-color: hsla(0,0%,100%,.32);
  }
`;

const NewListText = styled.p`
  margin: 0;
  line-height: 20px;
`;

const AddIconStyled = styled(AddIcon)`
  margin-right: 2px;
  font-size: 20px;
  vertical-align: middle;
`;

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
    this.handleRemoveAllCards = this.handleRemoveAllCards.bind(this);
    this.handleCopyList = this.handleCopyList.bind(this);
    this.renderLists = this.renderLists.bind(this);
    this.handleMoveAllCards = this.handleMoveAllCards.bind(this);
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleCopyCard = this.handleCopyCard.bind(this);
    this.handleEditCard = this.handleEditCard.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
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

  handleAddList(listTitle) {
    if (listTitle) {
      let lists = [...this.state.lists];
      lists.push({
        id: this.state.nextListIndex,
        title: listTitle,
        cards: []
      });
      this.setState({ 
        lists, 
        nextListIndex: this.state.nextListIndex + 1,
        newListText: '',
        creatingNewList: false,
      });
    }
    else {
      this.setState({
        newListText: '',
        creatingNewList: false,
      });
    }
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

  handleRemoveAllCards(listId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists[i].cards = [];
        this.setState({ lists, openMenuId: null });
        return;
      }
    }
  }

  handleCopyList(listId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists.push({
          id: this.state.nextListIndex,
          title: '(Copy) - ' + lists[i].title,
          cards: lists[i].cards
        });
        this.setState({ 
          lists, 
          nextListIndex: this.state.nextListIndex + 1,
          openMenuId: null
        });
        return;
      }
    }
  }

  handleMoveAllCards(listId) {
    let lists = [...this.state.lists];
    let cards = [];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id !== listId) {
        cards.push(...lists[i].cards);
        lists[i].cards = [];
      }
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        lists[i].cards.push(...cards);
        this.setState({ lists, openMenuId: null });
        return;
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

  handleCopyCard(listId, cardId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        for (let j = 0; j < lists[i].cards.length; j++) {
          if (lists[i].cards[j].id === cardId) {
            lists[i].cards.push({
              id: this.state.nextCardIndex,
              description: '(Copy) - ' + lists[i].cards[j].description,
              tags: lists[i].cards[j].tags
            });
            this.setState({ 
              lists, 
              nextCardIndex: this.state.nextCardIndex + 1
            });
            return;
          }
        }
      }
    }
  }

  handleEditCard(listId, cardId, text) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        for (let j = 0; j < lists[i].cards.length; j++) {
          if (lists[i].cards[j].id === cardId) {
            lists[i].cards[j].description = text;
            this.setState({ lists });
            return;
          }
        }
      }
    }
  }

  handleRemoveTag(listId, cardId, tagId) {
    let lists = [...this.state.lists];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === listId) {
        for (let j = 0; j < lists[i].cards.length; j++) {
          if (lists[i].cards[j].id === cardId) {
            lists[i].cards[j].tags.splice(tagId, 1);
            this.setState({ lists });
            return;
          }
        }
      }
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
            onRemoveAllCards={this.handleRemoveAllCards}
            onCopyList={this.handleCopyList}
            onMoveAllCards={this.handleMoveAllCards}
            onCopyCard={this.handleCopyCard}
            onEditCard={this.handleEditCard}
            onRemoveTag={this.handleRemoveTag}
          />
        </li>
      );
    }
    return lists;
  }

  renderNewList() {
    return (
      this.state.creatingNewList
      ? <li>
          <Form
            type="list"
            placeholder="Enter a title for this list..."
            buttonText="Add List"
            onClickSubmit={this.handleAddList}
            onClickCancel={() => this.setState({ creatingNewList: false })}
          />
        </li>
      : <li>
        <NewList onClick={() => this.setState({ creatingNewList: true })}>
          <AddIconStyled /> 
          { 
            this.state.lists.length === 0 
            ? <NewListText>Add a list</NewListText> 
            : <NewListText>Add another list</NewListText>
          }
        </NewList>
      </li>
    );
  }

  render() {
    return (
      <BoardContainer>
        <ListsContainer>
          { this.renderLists() }
          { this.renderNewList() }
        </ListsContainer>
      </BoardContainer>
    );
  }
};

export default Board;
