import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Label = (props) => {

  // using states
  const [name, setName] = useState('Konny');

  const changeName = () => {
    setName('Joseph');
  }

  return (
    <Text onPress={changeName}>
      {name}
    </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Label>
          Konny y Joseph
        </Label>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
