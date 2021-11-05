import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import CartContextProvider from './context/DataContext';
import axios from 'axios'
import NavigatorCmp from '././NavigatorCmp'

axios.defaults.baseURL = 'http://192.168.100.14:8000/api/v1'

const App = () => {
  return (
    <CartContextProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <NavigatorCmp />
      </ApplicationProvider>
    </CartContextProvider>
  )
}

export default App