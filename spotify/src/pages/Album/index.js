import React, { useState } from 'react';

import {
  Container,
  ContainerHeader,
  Photo,
  ContainerNavBar,
  GroupItemNavBar,
  ButtonFollow,
  ContainerInfoBand,
  BandName,
  BandFooter,
  Content,
  ButtonRandomOrder,
  ButtonRandomOrderText,
  InfoCategory,
  ContainerMusic,
  Music,
  MusicGroupAllItens,
  MusicNumber,
  MusicGroupItens,
  MusicName,
  MusicListening
} from './styles.js';

import Icon from 'react-native-vector-icons/FontAwesome5';

import musics from './musics.json';

const Musics = () => {
  return musics && musics.map((music, index) => (
    <Music key={index++}>
      <MusicGroupAllItens>
        <MusicNumber>{index++}</MusicNumber>
        <MusicGroupItens>
          <MusicName>{music.name}</MusicName>
          <MusicListening>{music.listening}</MusicListening>
        </MusicGroupItens>
      </MusicGroupAllItens>
      <Icon name="ellipsis-v" color="#aaa" size={16} style={{padding: 30}} />
    </Music>
  ));
}

const Album = () => {
  const [iconConfigure] = useState({
    size: 16,
    color: '#fff'  
  });

  return (
    <Container>
      <Photo source={{ uri: 'https://www.vagalume.com.br/dynimage/news24096-big.jpg' }} />
      <ContainerHeader>
        <ContainerNavBar>
          <Icon name="arrow-left" {...iconConfigure} />
          <GroupItemNavBar>
            <ButtonFollow>Seguindo</ButtonFollow>
            <Icon name="ellipsis-v" {...iconConfigure} />
          </GroupItemNavBar>
        </ContainerNavBar>
        <ContainerInfoBand>
          <BandName>Nickelback</BandName>
          <BandFooter>8.500.752 ouvintes mensais</BandFooter>
        </ContainerInfoBand>
      </ContainerHeader>
      <Content>
        <ButtonRandomOrder>
          <ButtonRandomOrderText>Ordem Aleatória</ButtonRandomOrderText>
        </ButtonRandomOrder>
        <InfoCategory>Popular</InfoCategory>
        <ContainerMusic>
          <Musics />
        </ContainerMusic>
      </Content>
    </Container>
  );
};

export default Album;
