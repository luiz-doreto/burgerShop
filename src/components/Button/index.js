import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({ text, type, disabled }) => {
  const [loading, setLoading] = useState(false);

  let buttonStyle = styles.filled;
  let { textColor } = styles;

  if (disabled) {
    buttonStyle = styles.disabled;
    textColor = styles.disabledText;
  } else if (type === 'outline') {
    buttonStyle = styles.outline;
  }

  const handlePress = () => {
    setLoading(true);
    // api call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={buttonStyle}>
        {loading ? (
          <Text style={textColor}> Loading... </Text>
        ) : (
          <Text style={textColor}>{text}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  filled: {
    width: '100%',
    height: 48,
    backgroundColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outline: {
    width: '100%',
    height: 48,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    width: '100%',
    height: 48,
    backgroundColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: 'white',
  },
  disabledText: {
    color: 'red',
  },
});
