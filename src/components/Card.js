import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9,30,66,.25);
  cursor: pointer;
  margin-bottom: 8px;
  min-height: 20px;
  max-height: 200px;
  padding: 10px;
  margin-right: 5px;

  &:hover {
    background-color: #f4f5f7;
  }
`;

const TagsContainer = styled.div`
  margin-bottom: 5px;
`;

const Text = styled.p`
  margin: 0;
`;

const Card = ({ id, number, description = "", tags = [] }) => {
  return (
  <CardContainer>
    {
      tags.length > 0 &&
      <TagsContainer>
      {
        tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))
      }
      </TagsContainer>
    }
    <Text>{'#' + number + ' ' + description}</Text>
  </CardContainer>
  );
};

export default Card;
