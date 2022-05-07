import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { useState, useCallback, useEffect } from 'react';
//we make API call to fetch color

const Home = ({ navigation }) => {
  const [colors, setColors] = useState([]);

  const [isRefreshing, setIsRefreshing] = useState(false);
  //we make a async call to fetch the colors

  const fetchColors = useCallback(async () => {
    // console.log('I am in fetch colors'); //working
    await fetch('https://color-palette-api.kadikraman.now.sh/palettes')
      .then((res) => res.json())
      .then((res) => {
        setColors(res);
      });
  });

  useEffect(() => {
    fetchColors();
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // console.log('I am in refresh'); //working
    await fetchColors();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
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
        // refreshControl={
        // <RefreshControl refreshing={true} onRefresh={() => {}} /> //note we can use native refresher as well that is built in in FlatList
        //}  //we can make custom refresher as well using this

        refreshing={isRefreshing}
        onRefresh={() => {
          handleRefresh();
        }}
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
