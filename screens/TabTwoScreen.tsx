import { StyleSheet } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
// import { Canvas, Image } from 'canvas;'

export default function TabTwoScreen() {
  const [generatedImages, setGeneratedImages] = useState([]);

  const mergeImages = async (imageArray) => {
    // Image: Image,
    // Canvas: Canvas,
    // crossOrigin: "anonymous"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
