import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import Categories from './src/pages/Categories/index';
import Foods from './src/pages/Foods/index';
import Details from './src/pages/Details/index';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen name='Categories' component={Categories}/>
        <Stack.Screen name='Foods' component={Foods}/>
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
