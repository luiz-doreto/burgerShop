import React from 'react';

import { Container, TextInput, UserIcon, KeyIcon } from './styles';

const Input = ({ value, onChangeText, text, type }) => {
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
