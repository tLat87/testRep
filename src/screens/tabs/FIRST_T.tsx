import React from "react";
import {View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {SCREENS} from '../../utils/constants';
import StoryScreen2 from '../StoryScreen2.tsx';

const FIRST_T_SCREEN = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen1, {type: 'Asanas'})}}>
        <ImageBackground
          source={{ uri: "https://s3-alpha-sig.figma.com/img/e3ac/a12f/dc494af4d0ab3ff95847962a9c931e28?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BsrNz3eGkIxmeAq4juQU46tHmUyLW~Z8j-WJOG3pGs04~XKgBv2H1baQbMWgf~OUlEyMXcueti5cIOnU5sJ8fGUktxRutEt4cTNBVEFpcgRYZCDUXr-WqxX7vm5rOO3cCInlm-DRlBJmuXIa7QXbFY0Q5yFs31pWH5KLjDPUL1U4DmgB5sbdNf50HnnKsXD6W9Gajo~VS~BsUBt~YQ-C9qf-g0TfGvW9sbHF0YlRIK-XibiEUipYyeCbZijHlKGy7HHq2jKw2cfZedY1T7u4df8DomX3C4GbdUVUcyA~dZop5~JQUBaHrAj3e-uaqL1ZlzG06lYtIJkpCnbmQKTxjw__" }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Main Episodes</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen2, {type: 'Pranayamas'})}}>
        <ImageBackground
          source={{ uri:
            "https://s3-alpha-sig.figma.com/img/b2bc/f36f/2d377f3f490522cecf110776c61c2de1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B4uF3m85I8dfh~c7~MWbmyKLq~H~EMdMYkFcXKlDwz9aphhyv35umKWCy6wxF5Ky10lCF20JBUqtg7v27ippfn5bGilLMwVhAgv-J93Y6qK4Q1qbUEi01ERR7ZyTH-ldvny8o6V1nuAn9fgkT~fdj7T58BpEaSeQtfSfbIrLi1FMvVqjvfEPnOVdU8Ik-3hf6PLJFN2YHu5AMccriJmdm9emj3g68ItwVp2dQohSjtsLwmA9BeTfD4GLF7LBBAPA1RGq2BuEAW8hnVUMnAieioAIrmTSzjVZA07smVYO0lZlxTGm8Db1vr0-tMGoLF6XOy7AdX8yhbHJSgeMkQKfAg__"
        }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Biographies of Main Characters</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.StoryScreen3, {type: 'Meditation'} )}}>
        <ImageBackground
          source={{ uri:
            "https://s3-alpha-sig.figma.com/img/cc08/2724/070dc29ca75dba6f85095ed71bd5146a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Qs3B9bUHCGc51hkIe19aJbRnrknoEzVRjk31xeDXgALjLAvtr9aIV3Ec1O7Q-howUNsLZQ5P3qSy-l6wi11emkuEfgI85oHrrku15gMOcm3iLXBFGlo9VzzH5Aesq7jwdwAl~Rt48KCdzcFx2veapvXhpLbxUNiVGSYt1q8y~viRWBVj2a4BLvpK6BoCiQAe~fw1v0Okc1XZ99769YI1N29CYrfuQbbPNfi0RjHa~Ve0p5H1HCUYEYUP7S946mRJdP8Vuz255kEy0xaiGgjk3maWd~Pj43MaoDH0OsL4BmsIMIKjQD8gFPCcI0nY-f-3nbxArYn8gT~yFljMI08RgA__"
        }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Analysis of Philosophical and Spiritual Aspects</Text>
        </ImageBackground>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#000",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 24
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Растягиваем по всему View
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Затемняем
    borderRadius: 24, // Скругляем углы
  },
  text: {
    position: "absolute",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FIRST_T_SCREEN;
