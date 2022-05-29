import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import AddImages from './AddImages';

import mergeImages from 'merge-images';
import ImagesCombineLibrary from 'react-native-images-combine';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddLayerArea({ path }: { path: string }) {

  const storeData = async (key: string, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);

      console.log('store');
      console.log(value);
      console.log(jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async (key: string) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      
      console.log('get');
      console.log(jsonValue);
      return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      console.log(e);
    }
  }

  const [layers, setLayers] = useState([]);
  let layersData: Array<string> = [];

  const addLayer = async () => {
    // layerの連番
    let index = layers == null ? 0 : layers.length;
    // layerを作成
    let layer = {index: index, images: []};
    console.log(layer, 'addLayer');

    // layerをstateに追加する
    setLayers([...layers, layer]);

    // layerを取得
    getData('layersData').then(data => {
      console.log(data, 'addLayer');
      setLayers(data);

      data.push(layer);
      storeData('layersData', data);
    });

    console.log('layersData');
    console.log(layersData);
  }

  // コンポーネントの更新によるuseEffectの停止, []
  useEffect(() => {
    // layerを取得
    getData('layersData').then(data => {
      console.log(data, 'useEffect');
      setLayers(data);
    });
  }, []);

  const removeLayer = async () => {
    console.log('ffa');

  }

  const removeImage = async (index: number) => {

  }

  const pickImage = async (layerIndex) => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImages([...images, 
      <Image key={images.length} source={{uri: result.uri}} style={{ width: 200, height: 200}} />
     ]);

     setImageUris([...imageUris,
      result.uri
      ]);
    }

    if (imageUris.length >= 1) {
      console.log(images.length);
      console.log(imageUris);
        
      mergeImages(imageUris).then((generetedImageB64) => {
        setGeneratedImages([...generatedImages,
            <Image key={generatedImages.length} source={{uri: generetedImageB64}} style={{ width: 200, height: 200}} />
        ]);
      });
    }
  };

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          onPress={addLayer}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Add Layer
        </Text>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    borderColor: '#FFF',
    borderRadius: 10,
    borderWidth: 3,
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
  layerNumber: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  addLayer: {
    backgroundColor: '#FFF',
    borderRadius: 5,
  }
});
