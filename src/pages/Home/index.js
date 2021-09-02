import React, { useState } from 'react';
import { View, StatusBar, Text } from 'react-native';

import api from '~/services/api';
import { SafeArea } from './styles';
import Logo from '~/assets/logo.svg';
import Input from '~/components/Input';

const Home = () => {
  const [user, setUser] = useState('');

  const handlePress = async () => {
    const response = await api.post('auth/cadastro', {
      fullname: user,
      username: 'jose.silva@iteris.com.br',
      cpf: '11111111111',
      date_birth: '2021-08-05',
      state: 'Amazonas',
      city: 'Manaus',
      password: '12345',
    });

    console.log(response.data);
  };

  return (
    <SafeArea>
      <StatusBar barStyle="light-content" />
      <View>
        <Logo width={400} height={100} />
      </View>
      <Text
        style={{
          color: 'white',
          padding: 20,
          fontFamily: 'Geomanist',
          fontSize: 32,
        }}
      >
        Teste da fonte nova !!!!
      </Text>
      <Input
        value={user}
        onChangeText={(value) => setUser(value)}
        text="Usuário"
        type="user"
      />
    </SafeArea>
  );
};

export default Home;
