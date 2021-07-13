import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import ShopNavigator from './navigation/ShopNavigator';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import GlobalStyles from './constants/GlobalStyles';
import CartContextProvider from './context/DataContext';

export default () => (
  <CartContextProvider>
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <ShopNavigator />
      </ApplicationProvider>
    </SafeAreaView>
  </CartContextProvider>
);