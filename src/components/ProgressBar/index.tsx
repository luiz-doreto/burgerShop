import React, { useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { clamp } from 'react-native-redash';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { Container, AnimatedView, BAR_HEIGHT } from './styles';

type ProgressBarProps = {
  progress: number;
};

const DeterminateProgressBar = ({ progress }: ProgressBarProps) => {
  const progressWidth = useSharedValue(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (progress > 1 || progress < 0) {
      throw new Error('Invalid range (progress should be between 0 and 1');
    }

    progressWidth.value = withSpring(progress * width);
  }, [progress, progressWidth, width]);

  const progressStyle = useAnimatedStyle(
    () => ({
      width: clamp(progressWidth.value, 0, width),
      height: BAR_HEIGHT,
      borderRadius: 5,
    }),
    [width]
  );

  const handleLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  return (
    <Container onLayout={handleLayout}>
      <AnimatedView style={progressStyle} />
    </Container>
  );
};

export default DeterminateProgressBar;
