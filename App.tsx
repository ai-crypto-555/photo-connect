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
import Search from './pages/Search';
import Setting from './pages/Setting';
import Filter from './pages/Filter';
import RepairNewGallery from './pages/RepairNewGallery';
import Detail from './pages/Detail';
import InitEstimate from './pages/InitEstimate';

/**
 * constants...
 */

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'main'} screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
        <Stack.Screen name={'main'} component={Main} />
        <Stack.Screen name={'search'} component={Search} />
        <Stack.Screen name={'setting'} component={Setting} />
        <Stack.Screen name={'filter'} component={Filter} />
        <Stack.Screen name={'repair_new_gallery'} component={RepairNewGallery} />
        <Stack.Screen name={'detail'} component={Detail} />
        <Stack.Screen name={'init_estimate'} component={InitEstimate} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AppContainer />
  );
}