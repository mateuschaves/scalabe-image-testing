import React from 'react';
import {View, Dimensions, Image as RNImage, StyleSheet} from 'react-native';
import Image from 'react-native-scalable-image';

const reactNativeScalabeImage: React.FC = () => {
  return (
    <View>
      <Image
        width={Dimensions.get('window').width}
        height={300}
        source={{uri: 'https://i.imgur.com/wzpqTN7.jpeg'}}
      />
      <RNImage
        width={Dimensions.get('window').width}
        style={styles.reactNativeImage}
        source={{uri: 'https://i.imgur.com/wzpqTN7.jpeg'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  reactNativeImage: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});

export default reactNativeScalabeImage;
