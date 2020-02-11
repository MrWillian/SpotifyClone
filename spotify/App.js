import React from 'react';

import { StatusBar } from 'react-native';

import Main from './src/pages/Main';
import Album from './src/pages/Album';
import Tabbar from './src/components/Tabbar';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />
      <Album />
      <Tabbar />
    </React.Fragment>
  );
}

export default App;
