import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/constants';
import BottomTabRouter from './bottom';
import {NavigationContainer} from '@react-navigation/native';
import StartScreen from '../screens/start';
import AllTrainingsScreen from '../screens/AllTrainingsScreen.tsx';
import {TouchableOpacity} from 'react-native';
import HeadBackSvg from '../assets/svg/HeadBackSvg.tsx';
import {View, StyleSheet, ScrollView, Text, ImageBackground} from 'react-native';
import CreateTrainingScreen from '../screens/CreateTrainingScreen.tsx';
import TrainingDetainlAddScreen from '../screens/TrainingDetainlAddScreen.tsx';

// import Loader from '../screens/loader';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name={SCREENS.Loader} component={Loader} /> */}
        <Stack.Screen name={SCREENS.Start} component={StartScreen} />
        <Stack.Screen name={SCREENS.BottomRouter} component={BottomTabRouter} />
        <Stack.Screen
          name={SCREENS.AllTrainingsScreen}
          component={AllTrainingsScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.CreateTrainingScreen}
          component={CreateTrainingScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name={SCREENS.TrainingDetainlAddScreen}
          component={TrainingDetainlAddScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#000'
            },
            // title: "Тренировки",
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
              >
                <HeadBackSvg/>
                <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff', fontWeight: 'bold' }}>Back</Text>
              </TouchableOpacity>
            ),
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
