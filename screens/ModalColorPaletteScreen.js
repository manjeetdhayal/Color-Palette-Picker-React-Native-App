import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  Alert,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const ModalColorPaletteScreen = () => {
  const [paletteName, setPaletteName] = useState('');
  const [paletteColors, setPaletteColors] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);

  //handlesubmit callback function
  const handleSubmit = useCallback(() => {
    //alert function whenever name is empty
    if (!paletteName) {
      Alert.alert('Please enter a paletter name');
    }
  }, [paletteName]); //it must change everytime name value changes

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text>Enter Palette Name: </Text>
      <TextInput
        style={styles.input}
        value={paletteName}
        onChangeText={setPaletteName}
        placeholder="hey"
      />
      <Text>Current Name: {paletteName} </Text>

      <Separator />

      <View style={styles.container}>
        <Text>Red</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Separator />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'pink',
    padding: 5,
    marginVertical: 10,
    backgroundColor: 'pink',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ModalColorPaletteScreen;
