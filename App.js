import React from 'react';
import { View, Text } from 'react-native';

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

//styling different components
// const App = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={[styles.container, styles.bgColor]}>
//         <Text style={styles.font}>Here are some boxes of different colors</Text>
//         <View style={[styles.Cyan, styles.colorBoxes]}>
//           <Text> Cyan: #2aa198</Text>
//         </View>
//         <View style={[styles.Blue, styles.colorBoxes]}>
//           <Text> Blue: #268bd2</Text>
//         </View>
//         <View style={[styles.Magenta, styles.colorBoxes]}>
//           <Text> Magenta: #d33682</Text>
//         </View>
//         <View style={[styles.Orange, styles.colorBoxes]}>
//           <Text> Orange: #cb4b16</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

//components
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.bgColor]}>
        <Text>Hello I am here</Text>
        <ColorBox style={[styles.Orange, styles.colorBoxes]} name="Cyan" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bgColor: {},
  font: {
    fontWeight: 'bold',
  },
  container: {
    // margin: 10,
    display: 'flex', //by default
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1, //make this content as same height as parent container
  },
  safeArea: {
    flex: 1,
    marginTop: 30,
  },
  colorBoxes: {
    marginVertical: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Cyan: {
    backgroundColor: '#2aa198',
  },
  Blue: {
    backgroundColor: '#268bd2',
  },
  Magenta: {
    backgroundColor: '#d33682',
  },
  Orange: {
    backgroundColor: '#cb4b16',
  },
});

export default App;
