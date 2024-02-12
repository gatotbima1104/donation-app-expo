import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Welcome' component={Welcome} />
        </Stack.Navigator>
    )
}

export default MainNavigation;