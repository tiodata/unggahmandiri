import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, BackHandler, ViewStyle, TextStyle } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator.js';

export default function App() {
  const [exitPromptVisible, setExitPromptVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      if (exitPromptVisible) {
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
  }, [exitPromptVisible]);

  return (
    <NavigationContainer>
      <AuthNavigator />
      {exitPromptVisible && (
        <View style={styles.exitPrompt}>
          <Text style={styles.exitPromptText}>Tekan lagi untuk keluar aplikasi</Text>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles: { exitPrompt: ViewStyle, exitPromptText: TextStyle } = {
  exitPrompt: {
    position: 'absolute',
    top: 300,
    left: 50,
    right: 50,
    bottom: 300,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitPromptText: {
    color: 'white',
    fontSize: 18,
  },
};

