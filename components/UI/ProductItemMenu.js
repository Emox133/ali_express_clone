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

export const ProductItemMenu = ({productId, inCart}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const {addProductToCart, cart} = useData()

  const onItemSelect = (index) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
    <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <Text style={{fontWeight: 'bold'}}>...</Text>
    </TouchableWithoutFeedback>
  );

  return (
    <Layout style={styles.container} level='1'>
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        // selectedIndex={selectedIndex}
        placement="top"
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}>
        <MenuItem title='Vidi Detalje' accessoryRight={InfoIcon}/>
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
