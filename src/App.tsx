///App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator.js';


export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
