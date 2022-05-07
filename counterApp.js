import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//hooks works in the same way as React so we import from the react instead of react-native
import { useState, useCallback } from 'react';

const App = () => {
  const [value, setValue] = useState(0);

  const handleIncrementCallback = useCallback(() => {
    setValue((currentValue) => currentValue + 1);
  }, []); //empty array of dependecies i.e, on which this function re-renders

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text> Hey I am on! </Text>
        <Text>Let's make a counter</Text>
        <Text> {value} </Text>

        <TouchableOpacity onPress={handleIncrementCallback}>
          <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setValue((currentValue) => currentValue - 1)}
        >
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0, // to solve the problem of notch we can also check whether given device is ios or android
    // Platform.OS === 'android' || 'ios' and so on to check for OS
  },
});
export default App;
