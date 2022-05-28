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

export default function AddLayerArea({ path }: { path: string }) {
  let hoges = [];
  const [imageUris, setImageUris] = useState([]);
  const [images, setImages] = useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);

  const pickImage = async () => {

     console.log(images.length);

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
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Add Layer
        </Text>

        <Text
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Layer number
        </Text>

        <TextInput
          style={styles.layerNumber}
          keyboardType="numeric"
          ></TextInput>


        <Text
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            Max file size: 5mb, accepted: jpg|png|png
        </Text>

        <Button onPress={pickImage} title="choose images"></Button>

        {images}

        {/* <AddImages onDrop={this.onDrop} /> */}


        <Text
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            Max file size: 5mb, accepted: jpg|png|png
        </Text>

        {generatedImages}

      </View>
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
  }
});
