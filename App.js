import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer >
     <DrawerNavigation/>
    </NavigationContainer>
  );
   
}