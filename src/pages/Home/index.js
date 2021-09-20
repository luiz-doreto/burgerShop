import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import Select from '~/components/Select';
import { SafeArea } from './styles';
import Logo from '~/assets/logo.svg';
import Input from '~/components/Input';

const Home = () => {
  const [user, setUser] = useState('');
  const bottomRef = useRef(null);
  const [city, setCity] = useState('UBIRATÃ');

  return (
    <SafeArea>
      <ScrollView>
        <View>
          <Logo width={400} height={100} />
        </View>
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
        <View style={{ height: 300, backgroundColor: 'pink' }}>
          <Select ref={bottomRef} value={city} onChange={setCity} />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
