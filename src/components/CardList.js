import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <div className="cardlist">
        <ol className="cardlist-cards">
          {
            this.props.cards.map(card => (
              <li key={card.id}>
                <Card description={card.description} />
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
};

export default CardList;
