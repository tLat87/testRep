import {View, Text, TextInput} from 'react-native';
import CustomSpesBtn from '../components/CustomSpesBtn.tsx';
import {SCREENS} from '../utils/constants';
import React, {useState} from 'react';
import CalendarSvg from '../assets/svg/CalendarSvg.tsx';
import TimeSvg from '../assets/svg/TimeSvg.tsx';

const TrainingDetainlAddScreen = ({navigation}) => {


  return (
    <View style={{flex: 1, backgroundColor: '#000', paddingTop: 16}}>
      <Text style={{color: '#fff', fontSize: 16, marginLeft: 24, marginBottom: 8}}>
        Well-being before
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, marginLeft: 24}}>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12,}}>
          <Text style={{color: '#fff'}}>
            Bad
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Good
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Great
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Excellent
          </Text>
        </View>
      </View>


      <Text style={{color: '#fff', fontSize: 16, marginLeft: 24, marginBottom: 8, marginTop: 24}}>
        Well-being after
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, marginLeft: 24}}>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12,}}>
          <Text style={{color: '#fff'}}>
            Bad
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Good
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Great
          </Text>
        </View>
        <View style={{backgroundColor: '#1C1C1C', alignSelf: 'flex-start', padding: 12, borderRadius: 12}}>
          <Text style={{color: '#fff'}}>
            Excellent
          </Text>
        </View>
      </View>


      <Text style={{color: '#fff', fontSize: 16, marginLeft: 24, marginTop: 24}}>
        Progress in
      </Text>
      <View>

      </View>


      <View style={{width:'100%', height:130, backgroundColor:'#1C1C1C', position: 'absolute', bottom: 0, paddingTop: 30}}>
        <CustomSpesBtn title='Next' onPress={() => {navigation.navigate(SCREENS.CreateTrainingScreen)}}/>
      </View>
    </View>
  )
}

export default TrainingDetainlAddScreen;
