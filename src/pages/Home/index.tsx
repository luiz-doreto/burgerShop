import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';

import Select from '~/components/Select';
import { SafeArea } from './styles';
import Logo from '~/assets/logo.svg';
import Input from '~/components/Input';
import DeterminateProgressBar from '~/components/ProgressBar';

type BottomRefProp = {
  expand: () => void;
  close: () => void;
};

const Home: React.FC = () => {
  const [user, setUser] = useState('');
  const bottomRef = useRef<BottomRefProp>(null);
  const [city, setCity] = useState('UBIRATÃ');

  return (
    <SafeArea>
      <ScrollView>
        <View>
          <Logo width={400} height={100} />
        </View>

        <Input
          value={user}
          onChangeText={(value) => setUser(value)}
          text="Usuário"
          type="user"
        />

        <TouchableOpacity onPress={() => bottomRef?.current?.expand()}>
          <Text style={{ color: 'white' }}>OPEN!</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 300,
            height: 300,
            justifyContent: 'center',
            backgroundColor: 'white',
          }}
        >
          {/* <Select ref={bottomRef} value={city} onChange={setCity} /> */}
          <DeterminateProgressBar progress={0.5} />
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default Home;
