import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCardText: '',
      creatingNewCard: false,
    };

    this.addNewCard = this.addNewCard.bind(this);
    this.cancelNewCard = this.cancelNewCard.bind(this);
  }

  addNewCard(e) {
    e.preventDefault();
    if (this.state.newCardText) {
      this.props.onAddCard(this.props.data.id, this.state.newCardText);
    }
    this.setState({ newCardText: '', creatingNewCard: false });
  }

  cancelNewCard() {
    this.setState({ newCardText: '', creatingNewCard: false });
  }

  renderHeader() {
    const data = this.props.data;
    return (
      <div className="cardlist-header">
        <h3 
          className="cardlist-title"
          onClick={() => this.props.onRemoveList(data.id)}
        >
          {data.title}
        </h3>
        <p className="cardlist-subtitle">
          {data.cards.length} cards
        </p>
      </div>
    );
  }

  renderCards() {
    const data = this.props.data;
    return (
      <ol className="cardlist-cards">
        {
          data.cards.map(card => (
            <li 
              key={card.id}
              onClick={() => this.props.onRemoveCard(data.id, card.id)}
            >
              <Card 
                tags={card.tags}
                description={card.description} 
              />
            </li>
          ))
        }
        {
          this.state.creatingNewCard &&
          <li>
            <textarea 
              className="cardlist-newcard"
              type="text" 
              value={this.state.newCardText} 
              placeholder="Enter a title for this card..."
              onChange={(e) => this.setState({ newCardText: e.target.value })} 
            >
            </textarea>
          </li>
        }
      </ol>
    );
  }

  renderFooter() {
    if (this.state.creatingNewCard) {
      return (
        <div>
          <input 
            className="cardlist-button-addcard"
            type="submit"
            value="Add Card"
            onClick={(e) => this.addNewCard(e)}
          />
          <span 
            className="cardlist-button-cancel"
            onClick={this.cancelNewCard}
          >
              X
          </span>
        </div>      
      );
    }
    else {
      return (
        <button 
          className="cardlist-button"
          onClick={() => this.setState({ creatingNewCard: true })}
        >
          + Add a card
        </button>          
      );
    }
  }

  render() {
    
    return (
      <div className="cardlist">
        { this.renderHeader() }
        { this.renderCards() }
        { this.renderFooter() }
      </div>
    );
  }
};

export default CardList;
