import { StyleSheet } from 'react-native';
import { Container } from 'native-base'
import FormName from './FormName';

export default function App() {
  return (
    <Container>
      <FormName/>
    </Container>
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
