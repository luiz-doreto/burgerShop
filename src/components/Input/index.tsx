import React from 'react';

import { Container, TextInput, UserIcon, KeyIcon } from './styles';

type InputProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeText: (text: string) => void;
  text: string;
  type: 'user' | 'password';
};

const Input: React.FC<InputProps> = ({ value, onChangeText, text, type }) => {
  const renderIcon = () =>
    ({
      user: <UserIcon value={value} />,
      password: <KeyIcon value={value} />,
    }[type] || null);

  return (
    <Container value={value}>
      {renderIcon()}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={text}
        placeholderTextColor="gray"
      />
      {type === 'password' && <UserIcon value={value} />}
    </Container>
  );
};

export default Input;
