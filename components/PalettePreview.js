import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const PalettePreview = ({ palette, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      //here we have passed different colors as params to the navigation route
    >
      <Text style={styles.text}>{palette.paletteName}</Text>

      {/* now we want to show the preview that is only first five colors, we will use slice method on array to get only first five objects   */}
      <FlatList
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View
            style={[styles.box, { backgroundColor: `${item.hexCode}` }]}
          ></View>
        )}
        horizontal={true}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  box: {
    width: 40,
    height: 40,
    margin: 2,
  },
});
export default PalettePreview;
