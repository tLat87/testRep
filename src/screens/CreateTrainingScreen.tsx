import {View, Text, TextInput} from 'react-native';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import {SCREENS} from '../utils/constants';
import React, {useState} from 'react';
import CalendarSvg from '../assets/svg/CalendarSvg.tsx';
import TimeSvg from '../assets/svg/TimeSvg.tsx';

const CreateTrainingScreen = ({navigation}) => {
  const [trainingName, setTrainingName] = useState("");
  const [trainingSpentTime, setTrainingSpentTime] = useState("");

  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");


  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 16}}>
      <Text style={{color: '#fff', fontSize: 16, marginLeft: 24}}>
        Name of training
      </Text>

      <TextInput
        value={trainingName}
        onChangeText={setTrainingName}
        placeholder="Task name"
        placeholderTextColor="#555"
        style={{
          width: "90%",
          marginTop: 16,
          marginHorizontal: 24,
          height: 50,
          backgroundColor: "#1C1C1C",
          borderRadius: 92,
          color: "#fff",
          paddingHorizontal: 16,
          fontSize: 16,
        }}
      />

      <View style={{width:'90%', marginLeft: 24, height: 50, borderRadius: 92,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: '#1C1C1C', marginTop: 16}}>
        <CalendarSvg/>
        <Text style={{fontSize: 16, marginLeft: 4, color: 'gray'}}>
          Choose date
        </Text>
      </View>

      <View style={{width:'90%', marginLeft: 24, height: 50, borderRadius: 92,  flexDirection: 'row', justifyContent: 'center', alignItems: 'center',backgroundColor: '#1C1C1C', marginTop: 16}}>
        <TimeSvg/>
        <Text style={{fontSize: 16, marginLeft: 4, color: 'gray'}}>
          Choose time
        </Text>
      </View>



      <Text style={{color: '#fff', fontSize: 16, marginLeft: 24, marginTop: 24}}>
        Time spent
      </Text>

      <TextInput
        value={trainingSpentTime}
        onChangeText={setTrainingSpentTime}
        placeholder="Example: 2h 30m"
        placeholderTextColor="#555"
        style={{
          width: "90%",
          marginTop: 16,
          marginHorizontal: 24,
          height: 50,
          backgroundColor: "#1C1C1C",
          borderRadius: 92,
          color: "#fff",
          paddingHorizontal: 16,
          fontSize: 16,
        }}
      />


      <View style={{width:'100%', height:130, backgroundColor:'#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30}}>
        <CustomSpesBtn title='Next' onPress={() => {navigation.navigate(SCREENS.TrainingDetainlAddScreen)}}/>
      </View>
    </View>
  )
}

export default CreateTrainingScreen;
