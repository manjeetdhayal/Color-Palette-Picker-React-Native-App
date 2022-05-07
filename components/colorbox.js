import React from 'react';
import { View, Text } from 'react-native';

//destructuring props
export const ColorBox = ({ style, colorName, hexCode }) => {
  //css trick to switch btw black and white background color based on background color
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View
      style={[
        style,
        {
          backgroundColor: `${hexCode}`,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <Text style={textColor}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};
