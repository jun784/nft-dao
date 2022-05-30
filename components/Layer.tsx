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

export default function Layer({ layerData }: { layerData: Array<string> }) {
    
  const [images, setImages] = useState([]);

  const removeImage = async (index: number) => {};

  // コンポーネントの更新によるuseEffectの停止, []
  useEffect(() => {    
    // layerを取得
    console.log('useEffect');

    if (layerData.images !== []) {
        for(let i = 0; i > layerData.images.length; i++) {
            setImages([...images, 
                <Image key={'layer_' + layerData.index +  '_images_' + i} source={{uri: layerData.images[i]}} style={{ width: 200, height: 200}} />
            ]);
        }
    }
});

  const pickImage = async () => {

     console.log(images.length);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImages([...images, 
      <Image key={images.length} source={{uri: result.uri}} style={{ width: 200, height: 200}} />
     ]);
    }
  };

  return (
    <View style={styles.getStartedContainer} key={'layer_' + layer.index} >
      <Text
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Max file size: 5mb, accepted: jpg|png|png
      </Text>

      <Button onPress={pickImage} title="choose images"></Button>

      {images}

    </View>
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
