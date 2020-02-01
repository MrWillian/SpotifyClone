import React from 'react';

import {
  Container,
  Photo,
  ContainerSubtitle,
  SubtitleTitle,
  SubtitleDescription
} from './styles';

const Card = () => {
  return (
    <Container>
      <Photo />
      <ContainerSubtitle>
        <SubtitleTitle>Seus Pedidos do dia</SubtitleTitle>
        <SubtitleDescription>Episódios de podcast escolhidos para você</SubtitleDescription>
      </ContainerSubtitle>
    </Container>
  );
}