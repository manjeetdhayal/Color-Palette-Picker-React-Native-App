import React from 'react';
import { View, Text, FlatList } from 'react-native';

//now if our content is inside notch we use SafeAreaView Component
import { SafeAreaView } from 'react-native';

//for styling
import { StyleSheet } from 'react-native';
import { ColorBox } from './components/colorbox';

//we can also use Styled components same as react native
//diff is View in place of div
// Text is used to display some text
// ScrollView when content is scrollable
//all the positioning is done using flex

//use of FlatList to render a list of items here we use FlatList intead of map() coz map() rerenders the component everytime a new item in list is rendered
//while flatlist renders the whole list only once

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

//components
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        style={[styles.container, styles.bgColor]}
        data={COLORS}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox
            style={styles.colorBoxes}
            colorName={item.colorName}
            hexCode={item.hexCode}
          />
        )}
        ListHeaderComponent={() => <Text style={styles.font}>Solarized</Text>}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bgColor: {},
  font: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    // margin: 10,
    display: 'flex', //by default
    paddingVertical: 2,
    flex: 1, //make this content as same height as parent container
  },
  safeArea: {
    flex: 1,
    marginTop: 30,
  },
  colorBoxes: {
    marginVertical: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
