import React from 'react';
import {ImageBackground, Text, View, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';

import { SCREENS } from '../utils/constants';

const StartScreen = ({ navigation }) => {
  return (
      <ImageBackground
        source={{ uri: '' }}
        style={styles.backgroundImage}
      >
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.BottomRouter)}>
            <Text>go</Text>
          </TouchableOpacity>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default StartScreen;
