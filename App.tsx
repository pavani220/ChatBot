// App.tsx
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/components/WelcomeScreen'; // Adjust the path as needed
import HomeScreen from './src/screens/HomeScreen';
import Navbar from './src/components/Navbar';
import Reviews from './src/components/Reviews';
import SignUpScreen from './src/screens/SignUpScreen'; 
import Login from './src/screens/Login';
import Bot from './src/screens/Bot';
import Bookings from './src/screens/Bookings';
import ProfileScreen from './src/screens/ProfileScreen';


function App(): React.JSX.Element {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  /*useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 6000); // Show welcome screen for 6 seconds
    return () => clearTimeout(timer);
  }, []); */

  if (showWelcomeScreen) {
    return (
      <SafeAreaView style={styles.appContainer}>
        <Bot/>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.appContainer}>
        <SignUpScreen/>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
  },
});

export default App;







