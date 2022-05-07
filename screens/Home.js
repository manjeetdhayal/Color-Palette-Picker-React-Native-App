import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { useState, useCallback, useEffect } from 'react';
//we make API call to fetch color

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);
  //we make a async call to fetch the colors

  const fetchColors = useCallback(async () => {
    await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => res.json())
      .then((res) => {
        setColors(res);
        console.warn(res);
      });
  });

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <View>
      <FlatList
        data={colors}
        style={styles.list}
        renderItem={({ item }) => (
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            palette={item}
          />
        )}
        keyExtractor={(paletteName) => paletteName.paletteName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    marginVertical: 10,
  },
});
export default Home;
