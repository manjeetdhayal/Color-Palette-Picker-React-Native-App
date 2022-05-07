import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { ColorBox } from '../components/colorbox';

const ColorPalette = ({ route }) => {
  const { colors, paletteName } = route.params; //sestructuring params of the route.params object
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox
          style={styles.container}
          hexCode={item.hexCode}
          colorName={item.colorName}
        />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
