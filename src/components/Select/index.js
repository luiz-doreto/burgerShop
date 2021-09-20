import React, { forwardRef } from 'react';
import { FlatList } from 'react-native';

import BottomSheet from '../BottomSheet';
import Item from './Item';

const response = ['Paraná', 'Rio de janeiro', 'Amazonas', 'Santa Catarina'];

// import { Container } from './styles';

const Select = forwardRef(({ onChange }, ref) => {
  const handlePress = (item) => {
    onChange(item);
    ref?.current?.close();
  };

  return (
    <BottomSheet ref={ref} snapPoints={['50%']}>
      <FlatList
        data={response}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Item item={item} onPress={handlePress} />}
      />
    </BottomSheet>
  );
});

export default Select;
