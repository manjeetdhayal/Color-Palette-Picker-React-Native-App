import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Switch,
  Alert,
  FlatList,
} from 'react-native';

import COLORS from './colors';

const Separator = () => <View style={styles.separator} />;

const ModalColorPaletteScreen = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [paletteColors, setPaletteColors] = useState([]);

  //handlesubmit callback function
  const handleSubmit = useCallback(() => {
    //alert function whenever name is empty
    if (!paletteName) {
      Alert.alert('Please enter a paletter name');
    } else {
      // navigation.goBack(); //we go back to the previous screen in the stack but we want to pass props also so we use navigate
      const newColorPalette = {
        paletteName: paletteName,
        colors: paletteColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [paletteName]); //it must change everytime name value changes

  const handleSwitch = useCallback(
    (color, newValue) => {
      if (newValue === true) {
        setPaletteColors((current) => [...current, color]);
      } else {
        setPaletteColors((current) =>
          current.filter((c) => c.colorName !== color.colorName),
        );
      }
    },
    [paletteColors, setPaletteColors],
  );

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
      <Button title="Submit" onPress={handleSubmit} />

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => {
          return (
            <View>
              <View style={styles.containerColor}>
                <Text>{item.colorName}</Text>
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={(newValue) => handleSwitch(item, newValue)}
                  value={
                    !!paletteColors.find(
                      (color) => color.colorName === item.colorName,
                    )
                  } // !! use to convert the result into a boolean
                />
              </View>
              <Separator />
            </View>
          );
        }}
      />
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
  containerColor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default ModalColorPaletteScreen;
