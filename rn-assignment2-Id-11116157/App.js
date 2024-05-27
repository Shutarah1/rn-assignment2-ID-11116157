import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text stle={styles.text}>
        My name is <Text style={styles.boldText}>Abdul Halim Moomin</Text> 
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,50,89)',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: "bold",
  }
});
