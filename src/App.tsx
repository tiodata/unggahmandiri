import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, BackHandler } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator.js';

export default function App() {
  const [isExitPromptVisible, setExitPromptVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (isExitPromptVisible) {
        // If the exit prompt is already visible, exit the app
        BackHandler.exitApp();
        return true;
      } else {
        // Show the exit prompt
        setExitPromptVisible(true);
        setTimeout(() => {
          setExitPromptVisible(false);
        }, 2000); // Reset the prompt after 2 seconds
        return true; // Prevent default back action
      }
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [isExitPromptVisible]);

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
