import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Label = ({style}) => {

  // using states
  const [name, setName] = useState('Konny');

  const changeName = () => {
    setName('Joseph');
  }

  return (
    <Text
      style={[styles.text, style]}
      onPress={changeName}
      >
      {name}
    </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Label style={styles.red} />
      <Label style={styles.green} />
      <Label style={styles.blue} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },
  red: {
    // flex: 1, // 1/6 of the screen
    backgroundColor: 'red',
  },
  green: {
    // flex: 2, // 2/6 of the screen
    backgroundColor: 'green',
  },
  blue: {
    // flex: 3, // 3/6 of the screen
    backgroundColor: 'blue',
  },
  container: {
    flex: 1, // 1/1 of the screen
    flexDirection: 'row', // horizontal and column layout
    backgroundColor: '#fff',
    alignItems: 'center', // center the items horizontally
    justifyContent: 'flex-end', // center the items vertically
  },
});
