import { Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { BottomTabParamList } from '../../types';
import HomeScreen from '../screens/HomeScreen';
import PortFolioScreen from '../screens/PortFolioScreen';
import MarketScreen from '../screens/MarketScreen';
import RankingScreen from '../screens/RankingScreen';
import ProfileScreen from '../screens/ProfileScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortFolioScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={30} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={30} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Rankings"
        component={RankingScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={30} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}




