import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
    <div className="cardlist">
      <h3 className="cardlistTitle">
        {this.props.title}
      </h3>
      <p className="cardlistSubtitle">
        {this.props.cards.length} cards
      </p>
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
