import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Input } from '@core'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
    'Regular-Bold': require('./assets/fonts/PlaypenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Input value='' onChange={console.log}/>
      <Button title='Hola' onPress={() => console.log('Hola')} />
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
