import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screen/Home';
import List from '../screen/List';
import Detail from '../screen/Detail';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyStack(){
    return(
        <Stack.Navigator >
            <Stack.Screen 
                name={"Tab"} 
                component={MyTabs}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name={"Detail"} 
                component={Detail}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
          headerShown:false,
          tabBarIcon: ({size, focused, color}) => {
            return <Icons name="home" size={19} color={focused?"blue": "#ADB5BD"} />;
          }}}/>
      <Tab.Screen name="List" component={List} options={{
            headerShown:false,
            tabBarIcon: ({size, focused, color}) => {
            return <Icons name="format-list-bulleted-square" size={19} color={focused?"blue": "#ADB5BD"} />;
          }}}/>
    </Tab.Navigator>
  );
}
