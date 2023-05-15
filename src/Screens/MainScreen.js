import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

const MainScreen = () => {
  return (
    <View>
      <Text>Main Screen</Text>
      <TouchableOpacity>
        <Text onPress={() => console.log('presionaste')}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
