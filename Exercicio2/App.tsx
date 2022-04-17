import { StyleSheet,  View } from 'react-native';
import Square from './Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square/>
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
