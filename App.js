import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import ShopNavigator from './navigation/ShopNavigator';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import CartContextProvider from './context/DataContext';

export default () => (
  <CartContextProvider>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <ShopNavigator />
    </ApplicationProvider>
  </CartContextProvider>
);