import React, {useState} from 'react';
import Upload from '../screen/uploaddoc/Upload';
import Bantuan from '../screen/bantuan/Bantuan';
import Login from '../screen/loginscreen/Login';
import BottomTabNavigator from './BottomTabNavigator';
import {ROUTES} from '../constant/routes';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthNavigator(props) {
  console.log(Stack);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = true;

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.LOGIN}>
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen name={ROUTES.BANTUAN} component={Bantuan} />
          <Stack.Screen name={ROUTES.LOGIN} component={Login} />
          <Stack.Screen name={ROUTES.UPLOAD} component={BottomTabNavigator} />
        </Stack.Group>
      ) : (
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      )}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
