import React, { Component } from 'react';
import styled from 'styled-components';
import { IoIosAdd as AddIcon } from 'react-icons/io';
import Card from './Card';
import Menu from './Menu';
import Form from './Form';

const CardListContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  width: 275px;
  margin-right: 10px;
  max-height: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;

const CardListFooter = styled.button`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #5e6c84;
  cursor: pointer;
  padding: 10px 10px;
  margin: 0 -10px;
  font-weight: 500;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(9,30,66,.08);
    color: #172b4d;
    text-decoration: underline;
  }
`;

const CardListFooterText = styled.p`
  margin: 0;
  line-height: 25px;
`;

const AddIconStyled = styled(AddIcon)`
  margin-right: 2px;
  font-size: 25px;
  vertical-align: middle;
`;

const CardsContainer = styled.ol`
  overflow: auto;
  list-style: none;
  padding-left: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 5px 0 10px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const SubTitle = styled.p`
  margin: 0 0 20px;
  color: #5e6c84;
  padding: 0 10px 0 10px;
`;

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = { creatingNewCard: false };

    this.actions = [
      [
        { 
          title: 'Add Card...',
          onClick: () => {
            this.props.onToggleMenu(this.props.data.id);
            this.setState({ creatingNewCard: true });
          }
        },
        { 
          title: 'Copy List...',
          onClick: () => this.props.onCopyList(this.props.data.id)
        }
      ],
      [
        {
          title: 'Move All Cards in This List...',
          onClick: () => this.props.onMoveAllCards(this.props.data.id)
        },
        {
          title: 'Archive All Cards in This List...',
          onClick: () => this.props.onRemoveAllCards(this.props.data.id)
        },
      ],
      [
        {
          title: 'Archive This List',
          onClick: () => this.props.onRemoveList(this.props.data.id)
        }
      ]
    ];

    this.handleAddNewCard = this.handleAddNewCard.bind(this);
    this.handleCancelNewCard = this.handleCancelNewCard.bind(this);
    this.handleCreateNewCard = this.handleCreateNewCard.bind(this);
  }

  handleAddNewCard(cardText) {
    if (cardText) {
      this.props.onAddCard(this.props.data.id, cardText);
    }
    this.handleCancelNewCard();
  }

  handleCancelNewCard() {
    this.setState({ creatingNewCard: false });
  }

  handleCreateNewCard() {
    this.setState({ creatingNewCard: true });
  }

  renderHeader() {
    const data = this.props.data;
    return (
      <div>
        <TitleContainer>
          <Title>{data.title}</Title>
          <Menu
            isOpen={this.props.isMenuOpen} 
            onClick={() => this.props.onToggleMenu(data.id)}
            actions={this.actions}
          />
        </TitleContainer>
        <SubTitle>{data.cards.length} cards</SubTitle>
      </div>
    );
  }

  renderCards() {
    const data = this.props.data;
    return (
      <CardsContainer>
        {
          data.cards.map(card => (
            <li 
              key={card.id}
              onClick={() => this.props.onRemoveCard(data.id, card.id)}
            >
              <Card 
                id={card.id}
                tags={card.tags}
                description={card.description} 
              />
            </li>
          ))
        }
      </CardsContainer>
    );
  }

  renderFooter() {
    return (
      this.state.creatingNewCard 
      ? <Form
          type="card"
          placeholder="Enter a title for this card..."
          buttonText="Add Card"
          onClickSubmit={this.handleAddNewCard}
          onClickCancel={this.handleCancelNewCard}
        />
      : <CardListFooter onClick={this.handleCreateNewCard}>
          <AddIconStyled />
          { 
            this.props.data.cards.length === 0 
            ? <CardListFooterText>Add a card</CardListFooterText> 
            : <CardListFooterText>Add another card</CardListFooterText> 
          }
        </CardListFooter>  
    );
  }

  render() {
    return (
      <CardListContainer>
        { this.renderHeader() }
        { this.renderCards() }
        { this.renderFooter() }
      </CardListContainer>
    );
  }
};

export default CardList;
