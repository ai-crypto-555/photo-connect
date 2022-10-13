/**
 * Libraries...
 */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';

/**
 * page components...
 */
import Main from './pages/Main';

/**
 * constants...
 */

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'main'} screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name={'main'} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AppContainer />
  );
}