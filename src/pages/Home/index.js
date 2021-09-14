import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import BottomSheet from '~/components/BottomSheet';
import { SafeArea } from './styles';
import Logo from '~/assets/logo.svg';
import Input from '~/components/Input';

const Home = () => {
  const [user, setUser] = useState('');
  const bottomRef = useRef(null);

  return (
    <SafeArea>
      <View>
        <Logo width={400} height={100} />
      </View>
      <BottomSheet ref={bottomRef}>
        <TouchableOpacity onPress={() => bottomRef.current.close()}>
          <Text>CLOSE!!</Text>
        </TouchableOpacity>
      </BottomSheet>
      {/* <Text
        style={{
          color: 'white',
          padding: 20,
          fontFamily: 'Geomanist',
          fontSize: 32,
        }}
      >
        Teste da fonte nova !!!!
      </Text> */}
      <Input
        value={user}
        onChangeText={(value) => setUser(value)}
        text="Usuário"
        type="user"
      />
      <TouchableOpacity onPress={() => bottomRef?.current?.expand()}>
        <Text style={{ color: 'white' }}>OPEN!</Text>
      </TouchableOpacity>
    </SafeArea>
  );
};

export default Home;
