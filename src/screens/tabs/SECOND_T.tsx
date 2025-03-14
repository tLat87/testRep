import React from "react";
import {View, StyleSheet, ScrollView, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {SCREENS} from '../../utils/constants';

const SECOND_T = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Asanas'})}}>
        <ImageBackground
          source={{ uri: "https://s3-alpha-sig.figma.com/img/e668/1615/ce30d7326dc17a041916adf54a940d13?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZuK1~0V129Qi1m4-3GnVwObG23yeab1K27mylypFU4B~nMCY1wkq1ZLXfYnq9vX4ddrw7V~sbS1OI0f4VqJVrVRgld7hujkDq38LYry0MT0hOfpcD6RHWkZDeR5DzvbFR5qTEi~xJf5F5AcWFdGCLjMq925bWZRPgnVdz~8470Y~zV4Vbr8a7Tl7oZq7tReNSjY6oTrHdAM~2CxMzMLn7f3q9n0yQP6FEyZ12VDggxYIEzFw3Qts6iYl-c2s9A-i3lM0zuUa2PDNANuO9ytj7a3Bc~ZMUot4cIoWLWkP-IVu9RZWmEoU2dew680maiR9E5aKCv5M32qUq1D18O4EPg__" }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Asanas</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Pranayamas'})}}>
        <ImageBackground
          source={{ uri: "https://s3-alpha-sig.figma.com/img/fc47/9a0c/dbd03552a4821867d70cb955280bf7d4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YdIJVk7b011enuPXnWbm6ydEkGf0he6O2Fl~M5Mc1SzzEKx2pH1IMPva1AjtZ0UpV81Hc68nujJ3vTkgYh1JwYX5s0uIk~PeUdx731YqIP0GmzeOgdhlCd2yuVLmE2mKcwDu6Cdf~g4WbybLi7LQDrBT7o5Aasnb9cIJuIJXqI2SZkhWlLsaX~TxcuuRp3p4gML92kjQJ8U-~Bez-Ci7JuDUNBHAb3C9eDuLCm2c70SAWZLQObbmvvYTDHQEHUiBytQt6SFx6alVTs2JkmFeDw7bKJgBeG8mSrvOKFfprRfBNZ3UyBPRfuzsDx~K3ZslsBbJ70gAIeVr7tIGw4tXnA__" }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Pranayamas</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate(SCREENS.AllTrainingsScreen, {type: 'Meditation'} )}}>
        <ImageBackground
          source={{ uri:
              "https://s3-alpha-sig.figma.com/img/5d3d/5e96/a3d33b28d0e9cba5379ac7a40f867b51?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cvOSHnmwkFGA9iLOEyoHCeanEXXWbqnx~nOo7JMA8j9Zgpe1jfrjDLawcRziILzZXZPqvOpGjrdec4vWeZNtCEnaetCk0Ki5~em3jgifEWW9y6f3UiSAN0Tg7izaHnFHITt0k~bMhJ0DqnyN-59Gk2R2AWWwFVeErPak26D9hX5Quw-pzMdUGAOGfdWLWfMisFGtGeHZflbhQk7OHT1b1FA~cgUygxzY8O2J5NHcRK~CjbkPe95AOmEh1YctSgx9sKgu6D7PfuRI3Z7ll54U1mdd9lIFdGpMNJ4bctZFPjGr8E~I~xAt665YIxiijeBgfkLMLlAeNwDEoGZQEYvqAw__"
          }} // Тут можешь вставить свою картинку
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 24 }}
        >
          <View style={styles.overlay} />
          <Text style={styles.text}>Meditation</Text>
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


export default SECOND_T;
