import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// import { Canvas, Image } from 'canvas;'
import mergeImages from 'merge-images';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabThreeScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connect Wallet</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {/* <Button >Mint</Button> */}
      <Button style={styles.mint} title="Mint"></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mint: {
      fontSize: 48,
      fontWeight: 'bold',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
