import styled from 'styled-components/native';
import { User, Key } from 'react-feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ value }) => (value ? 'orange' : '#e3e3e3')};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 8px;
  color: white;
`;

export const UserIcon = styled(User)`
  color: ${({ value }) => (value ? 'orange' : 'white')};
`;

export const KeyIcon = styled(Key)`
  color: ${({ value }) => (value ? 'orange' : 'white')};
`;
