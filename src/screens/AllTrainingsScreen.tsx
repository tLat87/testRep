import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import ThreeDotsSvg from "../assets/svg/ThreeDotsSvg.tsx";
import DownYellow from "../assets/svg/DownYellow.tsx";
import InfoComponent from '../components/InfoComponent.tsx';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import {SCREENS} from '../utils/constants';

const AllTrainingsScreen = ({ route, navigation }) => {
  const { type } = route.params;

  return (
    <View style={{flex: 1, backgroundColor: "#000"}}>
      <ScrollView style={{ flex: 1, backgroundColor: "#000", paddingVertical: 40, paddingHorizontal: 16 }}>

        <InfoComponent type={type} />
        <InfoComponent type={type} />

      </ScrollView>

      <View style={{width:'100%', height:130, backgroundColor:'#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30}}>
        <CustomSpesBtn title='Add new training' onPress={() => {navigation.navigate(SCREENS.CreateTrainingScreen)}}/>
      </View>
    </View>
  );
};

export default AllTrainingsScreen;
