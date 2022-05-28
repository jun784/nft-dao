import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { TextInput } from 'react-native';

export default function AddLayerArea({ path }: { path: string }) {
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
