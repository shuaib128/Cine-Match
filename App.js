import React from 'react';
import {
  SafeAreaView, StatusBar, StyleSheet, useColorScheme,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from './src/screens/HomeScreen';
import TVSeresScreen from './src/screens/TVSeresScreen';
import ViewAll from './src/screens/ViewAll';
import ViewAllCategory from './src/screens/ViewAllCategory';
import MovieDetail from './src/screens/MovieDetail';
import FullCast from './src/screens/FullCast';
import PersonScreen from './src/screens/PersonScreen';
import SeasonDetail from './src/screens/SeasonDetail';
import EpisodeDetail from './src/screens/EpisodeDetail';
import SearchScreen from './src/screens/SearchScreen';
import WatchListScreen from './src/screens/WatchListScreen'

const Stack = createNativeStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="TVSeresScreen" component={TVSeresScreen} />
          <Stack.Screen name="ViewAll" component={ViewAll} />
          <Stack.Screen name="ViewAllCategory" component={ViewAllCategory} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
          <Stack.Screen name="FullCast" component={FullCast} />
          <Stack.Screen name="PersonScreen" component={PersonScreen} />
          <Stack.Screen name="SeasonDetail" component={SeasonDetail} />
          <Stack.Screen name="EpisodeDetail" component={EpisodeDetail} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
          <Stack.Screen name="WatchListScreen" component={WatchListScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f2123',
    flex: 1,
    height: 500
  },
});

export default App;
