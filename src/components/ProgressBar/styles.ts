import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';

export const BAR_HEIGHT = 10;

export const Container = styled.View`
  width: 90%;
  height: ${BAR_HEIGHT}px;
  align-self: center;
  border-radius: 5px;
  background-color: #e3e3e3;
`;

export const AnimatedView = styled(Animated.View)`
  background-color: orange;
`;
