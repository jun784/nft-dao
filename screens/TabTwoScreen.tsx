import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput, Button, Image, ScrollView } from 'react-native';
import mergeImages from 'merge-images';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabTwoScreen() {
  const [generatedImages, setGeneratedImages] = useState([]);

  useEffect(() => {

    // let imageUris = ['https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/0.png', 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/a.png'];

    // console.log(imageUris);
    // mergeImages(imageUris).then((generetedImageB64) => {
    //   console.log(generetedImageB64);
    //   setGeneratedImages([...generatedImages,
    //       // <Image key={generatedImages.length} source={{uri: generetedImageB64}} style={{ width: 200, height: 200}} />
    //   ]);
    // });

    // <Image source={{uri:  mergeImages()}} style={{ width: 200, height: 200}} />
  }, []);

  const storeData = async (key: string, value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(e) {

    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Examples</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        
        {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}

        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c14.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c5.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c6.png'}} style={{ width: 150, height: 150}} />

        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c8.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c17.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c5.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c13.png'}} style={{ width: 150, height: 150}} />

        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c9.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c10.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c19.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c11.png'}} style={{ width: 150, height: 150}} />

        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c12.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c15.png'}} style={{ width: 150, height: 150}} />

        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c16.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c7.png'}} style={{ width: 150, height: 150}} />
        <Image source={{uri: 'https://vwp923728.kagoyacloud.com/wp-content/uploads/2022/05/c18.png'}} style={{ width: 150, height: 150}} />
      </View>
    </ScrollView>
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
