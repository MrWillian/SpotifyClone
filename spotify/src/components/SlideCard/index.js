import React from 'react';

import {
  Container,
  Title,
  SlideScroll,
} from './styles';

import Card from '../Card';

const SlideCard = () => {
  return (
    <Container>
      <Title>Teste</Title>
      <SlideScroll>
        <Card />
        <Card />
        <Card />
      </SlideScroll>
    </Container>
  );
};

export default SlideCard;
