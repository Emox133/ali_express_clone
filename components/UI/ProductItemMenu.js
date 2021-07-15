import React, {useState} from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Layout, MenuItem, OverflowMenu, Text } from '@ui-kitten/components';
import {Ionicons} from '@expo/vector-icons'
import { useData } from '../../context/DataContext';

const CartIcon = () => (
    <Ionicons name="cart" size={18} color="#FF6721" />
)

const InfoIcon = () => (
    <Ionicons name="information-circle" size={18} color="#FF6721" />
)

export const ProductItemMenu = ({productId, inCart, onNavigate}) => {
  const [visible, setVisible] = useState(false);
  const {addProductToCart} = useData()

  const renderToggleButton = () => (
    <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <Text style={{fontWeight: 'bold'}}>...</Text>
    </TouchableWithoutFeedback>
  );

  const goToDetailsPage = () => {
      onNavigate.navigate('ProductDetails')
      setVisible(false)
  }

  return (
    <Layout style={styles.container} level='1'>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        placement="top"
        onBackdropPress={() => setVisible(false)}>
        <MenuItem title='Vidi Detalje' accessoryRight={InfoIcon} onPress={() => goToDetailsPage()}/>
        <MenuItem title={inCart ? 'U korpi' : 'Dodaj u korpu'} disabled={inCart} accessoryRight={CartIcon} onPress={() => addProductToCart(productId)} />
      </OverflowMenu>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 144,
  },
});
