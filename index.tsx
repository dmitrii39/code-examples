import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen.tsx";
import MainStack from "./MainStack";
import ProgramStack from "./ProgramStack";
import CourseProgram from "../screens/CourseProgram";

import HomeIcon from '../assets/icons/HomeIcon.svg'
import ActiveHomeIcon from '../assets/icons/ActiveHomeIcon.svg'
import JournalIcon from '../assets/icons/JournalIcon.svg'
import ActiveJournalIcon from '../assets/icons/ActiveJournalIcon.svg'
import StudentIcon from '../assets/icons/StudentIcon.svg'
import ActiveStudentIcon from '../assets/icons/ActiveStudentIcon.svg'
import Registration from "../screens/Registration";
import GoogleAPITest from "../screens/GoogleAPITest";
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import NewsScreen from '../screens/NewsScreen';

export type RootStackParamList = {
  Главная: undefined;
  ReferralScreen: undefined;
  CourseProgram: undefined;
  Registration: undefined;
  GoogleAPITest: undefined;
};

export type NavigationProps<PageName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, PageName>;

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#f22951',
      // tabBarInactiveTintColor: '#000',
      unmountOnBlur: true,

      tabBarStyle: {
        paddingTop: 16,
        height: 90,
        paddingBottom: 23,
        backgroundColor: '#fff',
      },
    }}>
       <Tab.Screen
       options={{

        tabBarIcon: ({focused}) => (focused ? <ActiveHomeIcon width={30} height={30}/> : <HomeIcon width={30} height={30}/>)
      }}  
        name="Главная"
        component={MainStack}
      />
      <Tab.Screen
      options={{

        tabBarIcon: ({focused}) => (focused ? <ActiveJournalIcon width={30} height={30}/> : <JournalIcon width={30} height={30}/>)
      }} 
      name="Программы"
      component={ProgramStack}
    />
     <Tab.Screen
    options={{

      tabBarIcon: ({focused}) => (focused ? <ActiveStudentIcon width={30} height={30}/> : <StudentIcon width={30} height={30}/>)
    }} 
    name="Профиль"
    component={Registration}
  />
     
      
    </Tab.Navigator>
  );
};





export const RootStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={"Tabs"}>
      
      <Stack.Screen
        name="Главная"
        component={MainScreen}
      /> 
       
     <Stack.Screen
        name="Tabs"
        component={Tabs}
      />
      <Stack.Screen
        name="CourseProgram"
        component={CourseProgram}
      />

      <Stack.Screen
        name="Registration"
        component={Registration}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="GoogleAPITest"
        component={GoogleAPITest}
      />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NewsScreen"
        component={NewsScreen}
      />
    </Stack.Navigator>
  );
};
