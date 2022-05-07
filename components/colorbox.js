import React from 'react';
import { View, Text } from 'react-native';

//passing as props
// export const ColorBox = (props) => {
//   return (
//     <View style={props.style}>
//       <Text> Hey I am color component!</Text>
//     </View>
//   );
// };

//destructuring props
export const ColorBox = ({ style, name }) => {
  return (
    <View style={style}>
      <Text> Hey I am {name} component!</Text>
    </View>
  );
};
