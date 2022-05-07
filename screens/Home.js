import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: COLORS,
          })
        }
      >
        <Text style={styles.container}>Solarized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            paletteName: 'Rainbow',
            colors: RAINBOW,
          })
        }
      >
        <Text style={styles.container}>Rainbow</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={
          () =>
            navigation.navigate('ColorPalette', {
              paletteName: 'Frontend Masters',
              colors: FRONTEND_MASTERS,
            })
          //here we have passed different colors as params to the navigation route
        }
      >
        <Text style={styles.container}>Frontend_Masters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginHorizontal: 0,
  },
});
export default Home;
