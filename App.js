import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Label = (props) => {
  return (
    <Text>
      {props.children || 'Default Text'}
    </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Label>
          Konny y Joseph
          <Label />
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
