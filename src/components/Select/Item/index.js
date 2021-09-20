import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <Text>{item}</Text>
  </TouchableOpacity>
);

export default Item;
