import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

// const to get the width and height of the screen
const {width, height} = Dimensions.get('window');

const Label = ({style}) => {

  // using states
  const [name, setName] = useState('Konny');

  const changeName = () => {
    setName('Joseph');
  }

  return (
    <Text
      // style={[styles.text, style]}
      onPress={changeName}
      >
      {name}
    </Text>
  )
}

export default function App() {

  // creating variable to store the name using states
  // the param of useState is the initial value of the variable name
  const [name, setName] = useState('');

  // console.log(name);

  return (
    <View style={styles.container}>

      <Text>
        Text: {name}
      </Text>
      <TextInput 
        style={styles.input}
        placeholder='Enter your name' 
        onChangeText={text => setName(text)}

        // setting the default value of the input
        defaultValue={name} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  // text: {
  //   color: 'white',
  //   fontSize: 30,
  // },
  // red: {
  //   // flex: 1, // 1/6 of the screen
  //   backgroundColor: 'red',
  // },
  // green: {
  //   // flex: 2, // 2/6 of the screen
  //   backgroundColor: 'green',
  // },
  // blue: {
  //   // flex: 3, // 3/6 of the screen
  //   backgroundColor: 'blue',
  // },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 8,
    margin: 10,
    width: width / 2, // 1/2 of the screen
  },
  container: {
    flex: 1, // 1/1 of the screen
    // flexDirection: 'row', // horizontal and column layout
    backgroundColor: '#fff',
    alignItems: 'center', // center the items horizontally
    justifyContent: 'center', // center the items vertically
  },
});
