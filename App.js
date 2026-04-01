import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigation/tabs';
import { useFonts } from 'expo-font';

export default function App(){
  
const [fontsLoaded] = useFonts({
    'InriaSans-Bold': require('./assets/fonts/InriaSans-Bold.ttf'),
    'InriaSans-Regular': require('./assets/fonts/InriaSans-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
}
